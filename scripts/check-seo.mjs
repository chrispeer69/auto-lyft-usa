/*
  Post-build: reads every page in dist/, then
    1. enforces the SEO contract (fails the build on any error),
    2. writes dist/sitemap.xml from the indexable pages,
    3. writes dist/llms.txt and dist/llms-full.txt from the rendered text.

  Generating these from the built HTML (not from data files) means the sitemap
  and the AI summaries can never list a page that does not exist or miss one
  that does.
*/
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { basename, join, relative, sep } from "node:path";
import { parse } from "node-html-parser";

const DIST = "dist";
const SITE = "https://www.autolyftusa.online";
const LASTMOD = JSON.parse(readFileSync("src/data/lastmod.json", "utf8"));

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const toPath = (file) => {
  const rel = relative(DIST, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};

const errors = [];
const warn = [];
const pages = [];

// Skip the Google Search Console verification file; it isn't a page.
for (const file of walk(DIST).filter((f) => f.endsWith(".html") && !/^google[0-9a-f]+\.html$/.test(basename(f)))) {
  const path = toPath(file);
  if (path === "/404") continue;
  const root = parse(readFileSync(file, "utf8"));
  const title = root.querySelector("title")?.text.trim() ?? "";
  const description = root.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
  const robots = root.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  const canonical = root.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "";
  const h1s = root.querySelectorAll("h1");
  const noindex = robots.includes("noindex");
  const main = root.querySelector("main");
  const text = main ? main.structuredText.replace(/\n{3,}/g, "\n\n").trim() : "";
  const words = text.split(/\s+/).filter(Boolean).length;
  const links = root.querySelectorAll("a[href]").map((a) => a.getAttribute("href"));

  let graph = [];
  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      const data = JSON.parse(s.text);
      graph.push(...(data["@graph"] ?? [data]));
    } catch (e) {
      errors.push(`${path}: JSON-LD does not parse (${e.message})`);
    }
  }
  const types = graph.flatMap((n) => [].concat(n["@type"]));
  const faqNodes = graph.filter((n) => n["@type"] === "FAQPage");
  const bizNodes = graph.filter((n) => [].concat(n["@type"]).includes("LocalBusiness"));

  // --- contract ---
  if (title.length < 20 || title.length > 60) errors.push(`${path}: title ${title.length} chars "${title}"`);
  if (!noindex && (description.length < 70 || description.length > 155)) errors.push(`${path}: description ${description.length} chars`);
  if (h1s.length !== 1) errors.push(`${path}: ${h1s.length} H1 tags`);
  if (!noindex && canonical !== (path === "/" ? SITE : SITE + path)) errors.push(`${path}: canonical "${canonical}"`);
  if (bizNodes.length !== 1) errors.push(`${path}: ${bizNodes.length} LocalBusiness nodes`);
  if (faqNodes.length > 1) errors.push(`${path}: ${faqNodes.length} FAQPage nodes`);
  if (types.includes("AggregateRating") || types.includes("Review")) errors.push(`${path}: rating/review markup`);
  if (!noindex && path !== "/" && !types.includes("BreadcrumbList")) errors.push(`${path}: no BreadcrumbList`);
  if (faqNodes.length === 1) {
    const visible = root.querySelectorAll(".faq summary h3").length;
    const marked = faqNodes[0].mainEntity.length;
    if (visible !== marked) errors.push(`${path}: ${marked} FAQs in schema but ${visible} on the page`);
  }
  if (!noindex && words < 300) warn.push(`${path}: thin page (${words} words)`);

  pages.push({ path, file, title, description, noindex, h1: h1s[0]?.text.trim() ?? "", text, words, links });
}

// Uniqueness across indexable pages.
for (const key of ["title", "description", "h1"]) {
  const seen = new Map();
  for (const p of pages.filter((p) => !p.noindex)) {
    if (seen.has(p[key])) errors.push(`duplicate ${key} on ${seen.get(p[key])} and ${p.path}: "${p[key]}"`);
    else seen.set(p[key], p.path);
  }
}

// Internal links must resolve to a built page or a public file.
const known = new Set(pages.map((p) => p.path));
const publicFiles = new Set(walk(DIST).map((f) => "/" + relative(DIST, f).split(sep).join("/")));
const generated = new Set(["/sitemap.xml", "/llms.txt", "/llms-full.txt"]);
for (const p of pages) {
  for (const href of p.links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = href.split("#")[0].split("?")[0] || "/";
    if (!known.has(clean) && !publicFiles.has(clean) && !generated.has(clean)) errors.push(`${p.path}: broken link ${href}`);
  }
}

// --- sitemap ---
const indexable = pages.filter((p) => !p.noindex).sort((a, b) => a.path.localeCompare(b.path));
const lastmodFor = (path) => LASTMOD.paths[path] ?? Object.entries(LASTMOD.prefixes ?? {}).find(([pre]) => path.startsWith(pre))?.[1] ?? LASTMOD.default;
const priorityFor = (path) => {
  if (path === "/") return "1.0";
  if (["/towing", "/areas", "/rates", "/areas/columbus-oh", "/about"].includes(path)) return "0.9";
  if (/^\/(towing|areas)\//.test(path)) return "0.8";
  if (/^\/(local|repair)\//.test(path)) return "0.7";
  if (/^\/guides\//.test(path)) return "0.6";
  if (["/privacy", "/terms"].includes(path)) return "0.3";
  return "0.6";
};
// Highest priority first (home, service pages, then areas), so crawlers and audit
// tools that stop after N URLs reach the money pages; search engines ignore order.
const byPriority = [...indexable].sort((a, b) => priorityFor(b.path).localeCompare(priorityFor(a.path)) || (/^\/towing/.test(b.path) - /^\/towing/.test(a.path)) || a.path.localeCompare(b.path));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${byPriority.map((p) => `  <url><loc>${p.path === "/" ? SITE : SITE + p.path}</loc><lastmod>${lastmodFor(p.path)}</lastmod><priority>${priorityFor(p.path)}</priority></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

// --- llms.txt (curated index) and llms-full.txt (every page's text) ---
const groups = [
  ["Core pages", (p) => !/^\/(towing|areas|local|repair|guides)\//.test(p)],
  ["Towing and roadside services", (p) => p.startsWith("/towing/")],
  ["Columbus neighborhoods", (p) => p.startsWith("/areas/columbus-oh/")],
  ["Cities and towns served", (p) => p.startsWith("/areas/") && !p.startsWith("/areas/columbus-oh/")],
  ["Venues, campuses and travel", (p) => p.startsWith("/local/")],
  ["Auto repair help", (p) => p.startsWith("/repair/")],
  ["Driver guides", (p) => p.startsWith("/guides/")],
];
const company = readFileSync("src/data/company.ts", "utf8");
const phone = company.match(/phone: "([^"]+)"/)[1];
let llms = `# Auto Lyft USA\n\n> Auto Lyft USA Inc. is a 24-7 towing and roadside assistance company based at 1620 Harrisburg Pike, Columbus, OH 43223. Phone ${phone}. It serves Columbus, Ohio and the surrounding Central Ohio towns.\n\nFull text of every page: ${SITE}/llms-full.txt\nSitemap: ${SITE}/sitemap.xml\n`;
for (const [label, test] of groups) {
  const list = indexable.filter((p) => test(p.path));
  if (!list.length) continue;
  llms += `\n## ${label}\n\n` + list.map((p) => `- [${p.h1}](${p.path === "/" ? SITE : SITE + p.path}): ${p.description}`).join("\n") + "\n";
}
writeFileSync(join(DIST, "llms.txt"), llms);
writeFileSync(
  join(DIST, "llms-full.txt"),
  indexable.map((p) => `# ${p.title}\nURL: ${p.path === "/" ? SITE : SITE + p.path}\nLast modified: ${lastmodFor(p.path)}\nDescription: ${p.description}\n\n${p.text}\n`).join("\n---\n\n"),
);

// --- report ---
const totalWords = indexable.reduce((n, p) => n + p.words, 0);
console.log(`\nSEO check: ${pages.length} pages (${indexable.length} indexable), ${totalWords.toLocaleString()} words in <main>.`);
for (const w of warn) console.log("  warn  " + w);
for (const e of errors) console.log("  ERROR " + e);
if (errors.length) {
  console.log(`\n${errors.length} SEO error(s).`);
  process.exit(1);
}
console.log("SEO contract passed. sitemap.xml, llms.txt and llms-full.txt written.");
