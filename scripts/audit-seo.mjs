/*
  Deep SEO audit of every built page (run after `npm run build`).
  scripts/check-seo.mjs is the hard contract that fails the build; this script
  goes wider and reports everything a site grader looks at, page by page:
  head tags, social cards, headings, images, links, schema, URLs, the sitemap,
  click depth and orphans. Exit code 1 if any ERROR is found.

  Usage: node scripts/audit-seo.mjs [--verbose]
*/
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { basename, join, relative, sep } from "node:path";
import { parse } from "node-html-parser";

const DIST = "dist";
const SITE = "https://www.autolyftusa.online";
const verbose = process.argv.includes("--verbose");

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const toPath = (file) => {
  const rel = relative(DIST, file).split(sep).join("/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
};
const files = walk(DIST);
const publicFiles = new Set(files.map((f) => "/" + relative(DIST, f).split(sep).join("/")));
const htmlFiles = files.filter((f) => f.endsWith(".html") && !/^google[0-9a-f]+\.html$/.test(basename(f)));

const issues = []; // { level, path, msg }
const add = (level, path, msg) => issues.push({ level, path, msg });

const pages = new Map();
for (const file of htmlFiles) {
  const path = toPath(file);
  const html = readFileSync(file, "utf8");
  const root = parse(html);
  const meta = (sel, attr = "content") => root.querySelector(sel)?.getAttribute(attr) ?? null;
  pages.set(path, { path, file, html, root, meta });
}
const known = new Set(pages.keys());

const inbound = new Map([...known].map((p) => [p, 0]));
const graph = new Map();

for (const { path, html, root, meta } of pages.values()) {
  const is404 = path === "/404";
  const robots = meta('meta[name="robots"]') ?? "";
  const noindex = robots.includes("noindex");
  const title = root.querySelector("title")?.text.trim() ?? "";
  const desc = meta('meta[name="description"]') ?? "";
  const canonical = meta('link[rel="canonical"]', "href");

  // --- document basics
  if (!/<!doctype html>/i.test(html.slice(0, 50))) add("ERROR", path, "missing <!doctype html>");
  if (root.querySelector("html")?.getAttribute("lang") !== "en-US") add("ERROR", path, "html lang is not en-US");
  if (!root.querySelector("meta[charset]")) add("ERROR", path, "no meta charset");
  if (!(meta('meta[name="viewport"]') ?? "").includes("width=device-width")) add("ERROR", path, "no responsive viewport");
  if (root.querySelectorAll("title").length !== 1) add("ERROR", path, "title tag count != 1");
  if (root.querySelectorAll('meta[name="description"]').length !== 1) add("ERROR", path, "meta description count != 1");
  if (root.querySelectorAll('link[rel="canonical"]').length > 1) add("ERROR", path, "more than one canonical");
  if (!root.querySelector('link[rel="icon"]')) add("ERROR", path, "no favicon link");

  // --- title and description
  if (title.length < 30 || title.length > 60) add("WARN", path, `title ${title.length} chars (aim 30–60): "${title}"`);
  if (!is404 && !noindex && (desc.length < 120 || desc.length > 160)) add("WARN", path, `description ${desc.length} chars (aim 120–160)`);
  if (desc && desc === title) add("ERROR", path, "description equals title");
  if (/\s{2,}|^\s|\s$/.test(title)) add("WARN", path, "title has stray whitespace");

  // --- canonical and robots
  if (!is404 && !noindex) {
    const want = path === "/" ? SITE : SITE + path;
    if (canonical !== want) add("ERROR", path, `canonical ${canonical} (want ${want})`);
    if (!robots.includes("index")) add("ERROR", path, `robots "${robots}"`);
  }

  // --- social cards
  for (const p of ["og:title", "og:description", "og:image", "og:type", "og:site_name", "og:locale"]) {
    if (!meta(`meta[property="${p}"]`)) add("ERROR", path, `missing ${p}`);
  }
  if (!is404 && !meta('meta[property="og:url"]')) add("ERROR", path, "missing og:url");
  if (!is404 && meta('meta[property="og:url"]') !== canonical && canonical) add("ERROR", path, "og:url differs from canonical");
  if (!meta('meta[property="og:image:alt"]')) add("WARN", path, "missing og:image:alt");
  if (!meta('meta[property="og:image:width"]')) add("WARN", path, "missing og:image:width/height");
  for (const p of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    if (!meta(`meta[name="${p}"]`)) add("ERROR", path, `missing ${p}`);
  }
  const ogImg = meta('meta[property="og:image"]') ?? "";
  if (ogImg && !publicFiles.has(ogImg.replace(SITE, ""))) add("ERROR", path, `og:image file not found: ${ogImg}`);

  // --- headings
  const hs = root.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const h1s = hs.filter((h) => h.tagName === "H1");
  if (h1s.length !== 1) add("ERROR", path, `${h1s.length} H1`);
  if (hs[0] && hs[0].tagName !== "H1" && !root.querySelector("main")?.querySelector("h1")) add("WARN", path, "first heading is not H1");
  const mainHs = root.querySelector("main")?.querySelectorAll("h1,h2,h3,h4,h5,h6") ?? [];
  let prev = 0;
  for (const h of mainHs) {
    const lvl = Number(h.tagName[1]);
    if (prev && lvl > prev + 1) add("WARN", path, `heading skips from H${prev} to H${lvl}: "${h.text.trim().slice(0, 50)}"`);
    if (!h.text.trim()) add("ERROR", path, `empty <${h.tagName}>`);
    prev = lvl;
  }
  if (!is404 && !noindex && mainHs.filter((h) => h.tagName === "H2").length === 0) add("WARN", path, "no H2 in main");

  // --- images
  for (const img of root.querySelectorAll("img")) {
    const src = img.getAttribute("src") ?? "";
    if (img.getAttribute("alt") === undefined || img.getAttribute("alt") === null) add("ERROR", path, `img without alt: ${src}`);
    if (!img.getAttribute("width") || !img.getAttribute("height")) add("WARN", path, `img without width/height: ${src}`);
    if (src.startsWith("/") && !publicFiles.has(src.split("?")[0])) add("ERROR", path, `img not found: ${src}`);
  }
  for (const m of html.matchAll(/url\((\/[^)]+)\)/g)) if (!publicFiles.has(m[1])) add("ERROR", path, `css image not found: ${m[1]}`);

  // --- links
  const out = new Set();
  for (const a of root.querySelectorAll("a")) {
    const href = a.getAttribute("href");
    const text = (a.text + " " + (a.getAttribute("aria-label") ?? "") + " " + (a.querySelector("img")?.getAttribute("alt") ?? "")).trim();
    if (!href) { add("ERROR", path, `<a> without href: "${text.slice(0, 40)}"`); continue; }
    if (!text) add("ERROR", path, `link with no accessible text: ${href}`);
    if (/^(click here|here|read more|more|learn more)$/i.test(a.text.trim())) add("WARN", path, `non-descriptive anchor "${a.text.trim()}" → ${href}`);
    if (href.startsWith("http://")) add("ERROR", path, `insecure http link: ${href}`);
    if (href.startsWith(SITE) || href.startsWith("https://autolyftusa.online")) add("WARN", path, `absolute internal link (use relative): ${href}`);
    if (a.getAttribute("target") === "_blank" && !(a.getAttribute("rel") ?? "").includes("noopener")) add("WARN", path, `target=_blank without noopener: ${href}`);
    if (href.startsWith("/") && !href.startsWith("//")) {
      const clean = href.split("#")[0].split("?")[0] || "/";
      if (clean !== "/" && clean.endsWith("/")) add("ERROR", path, `link with trailing slash (redirects): ${href}`);
      if (/[A-Z]/.test(clean)) add("ERROR", path, `uppercase internal link: ${href}`);
      if (!known.has(clean) && !publicFiles.has(clean) && !["/sitemap.xml", "/llms.txt", "/llms-full.txt", "/robots.txt"].includes(clean)) add("ERROR", path, `broken internal link: ${href}`);
      if (known.has(clean) && clean !== path) out.add(clean);
    }
    if (href.startsWith("tel:") && !/^tel:\+1\d{10}$/.test(href)) add("WARN", path, `tel link not E.164: ${href}`);
  }
  graph.set(path, out);
  for (const t of out) inbound.set(t, (inbound.get(t) ?? 0) + 1);
  if (!is404 && !noindex && out.size < 5) add("WARN", path, `only ${out.size} internal links out`);

  // --- inline styles and deprecated markup (graders flag these)
  const inline = root.querySelectorAll("[style]").filter((e) => !/^--hero-img:/.test(e.getAttribute("style")));
  if (inline.length) add("WARN", path, `${inline.length} inline style attribute(s)`);
  if (root.querySelector("font,center,marquee,frameset,blink")) add("ERROR", path, "deprecated HTML tag");
  if (/http:\/\/(?!www\.w3\.org|schema\.org)/.test(html.replace(/href="http:\/\/[^"]*"/g, ""))) add("WARN", path, "http:// reference in page source");

  // --- URL shape
  if (path !== path.toLowerCase()) add("ERROR", path, "URL has uppercase");
  if (/_|\s/.test(path)) add("WARN", path, "URL has underscore or space");
  if (path.length > 75) add("WARN", path, `URL ${path.length} chars`);

  // --- structured data
  const blocks = root.querySelectorAll('script[type="application/ld+json"]');
  if (blocks.length !== 1) add("ERROR", path, `${blocks.length} JSON-LD blocks`);
  for (const b of blocks) {
    let data;
    try { data = JSON.parse(b.text); } catch (e) { add("ERROR", path, `JSON-LD parse: ${e.message}`); continue; }
    const nodes = data["@graph"] ?? [data];
    const ids = new Set(nodes.map((n) => n["@id"]).filter(Boolean));
    if (ids.size !== nodes.filter((n) => n["@id"]).length) add("ERROR", path, "duplicate @id in graph");
    const refs = JSON.stringify(nodes).matchAll(/\{"@id":"([^"]+)"\}/g);
    for (const [, id] of refs) if (!ids.has(id) && id.startsWith(SITE)) add("WARN", path, `@id reference not in graph: ${id}`);
    for (const n of nodes) {
      const types = [].concat(n["@type"]);
      if (types.includes("LocalBusiness") || types.some((t) => /AutomotiveBusiness|TowingService/.test(t))) {
        for (const k of ["name", "url", "telephone", "address", "geo", "openingHoursSpecification", "image", "priceRange", "areaServed"]) {
          if (n[k] === undefined) add(k === "openingHoursSpecification" && n.openingHours ? "INFO" : "WARN", path, `LocalBusiness missing ${k}`);
        }
        for (const k of ["streetAddress", "addressLocality", "addressRegion", "postalCode", "addressCountry"]) if (!n.address?.[k]) add("ERROR", path, `address missing ${k}`);
      }
      if (types.includes("BreadcrumbList")) {
        const items = n.itemListElement ?? [];
        items.forEach((it, i) => {
          if (it.position !== i + 1) add("ERROR", path, "breadcrumb positions out of order");
          const url = it.item?.["@id"] ?? it.item;
          if (i < items.length - 1 && typeof url === "string" && !known.has(url.replace(SITE, "") || "/")) add("ERROR", path, `breadcrumb points to missing page ${url}`);
          if (!it.name) add("ERROR", path, "breadcrumb item without name");
        });
        const last = items.at(-1)?.item;
        const lastUrl = typeof last === "string" ? last : last?.["@id"];
        if (lastUrl && lastUrl !== (path === "/" ? SITE : SITE + path)) add("ERROR", path, `last breadcrumb ${lastUrl} is not this page`);
      }
      if (types.includes("FAQPage")) {
        for (const q of n.mainEntity ?? []) {
          if (!q.name || !q.acceptedAnswer?.text) add("ERROR", path, "FAQ item missing question or answer");
        }
      }
      if (types.includes("Service") && !n.provider) add("WARN", path, "Service without provider");
      if (types.includes("Article") || types.includes("BlogPosting")) {
        for (const k of ["headline", "datePublished", "author", "image"]) if (!n[k]) add("WARN", path, `${types[0]} missing ${k}`);
        if (n.headline?.length > 110) add("ERROR", path, "headline over 110 chars");
      }
    }
  }

  // --- content
  const main = root.querySelector("main");
  const words = main ? main.text.split(/\s+/).filter(Boolean).length : 0;
  if (!is404 && !noindex && words < 300) add("WARN", path, `thin content: ${words} words`);
  if (!root.querySelector("main")) add("ERROR", path, "no <main> landmark");
  if (html.length > 250_000) add("WARN", path, `HTML ${Math.round(html.length / 1024)} KB`);
}

// --- site-level: orphans, click depth, sitemap, robots
const indexable = [...pages.values()].filter((p) => !(p.meta('meta[name="robots"]') ?? "").includes("noindex") && p.path !== "/404").map((p) => p.path);
for (const p of indexable) if (p !== "/" && !inbound.get(p)) add("ERROR", p, "orphan page (no internal links to it)");
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const p = queue.shift();
  for (const t of graph.get(p) ?? []) if (!depth.has(t)) { depth.set(t, depth.get(p) + 1); queue.push(t); }
}
for (const p of indexable) {
  if (!depth.has(p)) add("ERROR", p, "not reachable from the homepage");
  else if (depth.get(p) > 3) add("WARN", p, `click depth ${depth.get(p)}`);
}

const sitemap = existsSync(join(DIST, "sitemap.xml")) ? readFileSync(join(DIST, "sitemap.xml"), "utf8") : "";
const inMap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, "") || "/"));
for (const p of indexable) if (!inMap.has(p)) add("ERROR", p, "indexable page missing from sitemap.xml");
for (const p of inMap) if (!indexable.includes(p)) add("ERROR", p, "sitemap lists a page that is not indexable");
if (!/^<\?xml/.test(sitemap)) add("ERROR", "/sitemap.xml", "missing or malformed");
for (const m of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) if (!/^\d{4}-\d{2}-\d{2}/.test(m[1])) add("ERROR", "/sitemap.xml", `bad lastmod ${m[1]}`);

const robotsTxt = existsSync(join(DIST, "robots.txt")) ? readFileSync(join(DIST, "robots.txt"), "utf8") : "";
if (!robotsTxt.includes(`Sitemap: ${SITE}/sitemap.xml`)) add("ERROR", "/robots.txt", "no Sitemap line");
for (const m of robotsTxt.matchAll(/^Disallow: (\S+)/gm)) {
  const blocked = indexable.filter((p) => p.startsWith(m[1]));
  if (blocked.length) add("ERROR", "/robots.txt", `Disallow ${m[1]} blocks ${blocked.length} indexable pages`);
  const noidx = [...pages.keys()].filter((p) => p.startsWith(m[1]));
  if (noidx.length) add("WARN", "/robots.txt", `Disallow ${m[1]} hides the noindex tag on ${noidx.length} pages from crawlers`);
}

// --- report
const order = { ERROR: 0, WARN: 1, INFO: 2 };
issues.sort((a, b) => order[a.level] - order[b.level] || a.msg.localeCompare(b.msg) || a.path.localeCompare(b.path));
const byMsg = new Map();
for (const i of issues) {
  const key = `${i.level}  ${i.msg.replace(/"[^"]*"|\d+/g, "…")}`;
  if (!byMsg.has(key)) byMsg.set(key, []);
  byMsg.get(key).push(i);
}
console.log(`\nSEO audit: ${pages.size} pages, ${indexable.length} indexable, max click depth ${Math.max(...depth.values())}.`);
for (const [key, list] of byMsg) {
  console.log(`${key}  ×${list.length}`);
  for (const i of verbose ? list : list.slice(0, 3)) console.log(`      ${i.path}: ${i.msg}`);
}
const errors = issues.filter((i) => i.level === "ERROR").length;
console.log(`\n${errors} error(s), ${issues.filter((i) => i.level === "WARN").length} warning(s).`);
process.exit(errors ? 1 : 0);
