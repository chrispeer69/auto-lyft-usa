/*
  Writes src/data/lastmod.json: one real <lastmod> per page, taken from the git
  history of the files that make that page (its content file + its template).
  A file with uncommitted edits counts as changed today.

  Run locally after `npm run build` and before committing (the Docker build has
  no .git, so it reads the committed JSON). Dates only move when a page's own
  source changes; never hand-edit them to look fresher.
*/
import { execSync } from "node:child_process";
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST = "dist";
if (!existsSync(DIST)) throw new Error("Run `npm run build` first; page list comes from dist/.");

const today = new Date().toISOString().slice(0, 10);
const dirty = new Set(
  execSync("git status --porcelain", { encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .map((l) => l.slice(3).trim().replace(/^"|"$/g, ""))
);
const cache = new Map();
const dateOf = (file) => {
  if (!existsSync(file)) return null;
  if (dirty.has(file)) return today;
  if (!cache.has(file)) cache.set(file, execSync(`git log -1 --format=%cs -- "${file}"`, { encoding: "utf8" }).trim() || today);
  return cache.get(file);
};

// URL pattern -> [content file, template]. First match wins.
const rules = [
  [/^\/towing\/(.+)$/, (s) => [`src/data/services/content/${s}.ts`, "src/pages/towing/[slug].astro"]],
  [/^\/areas\/columbus-oh\/(.+)$/, (s) => [`src/data/columbus/hoods/${s}.ts`, "src/pages/areas/columbus-oh/[hood].astro"]],
  [/^\/areas\/columbus-oh$/, () => ["src/data/columbus/hub.ts", "src/pages/areas/columbus-oh.astro"]],
  [/^\/areas\/(.+)-oh$/, (s) => [`src/data/cities/content/${s}.ts`, "src/pages/areas/[city].astro"]],
  [/^\/local\/(.+)$/, (s) => [`src/data/places/content/${s}.ts`, "src/pages/local/[slug].astro"]],
  [/^\/repair\/(.+)$/, (s) => [`src/data/repair/content/${s}.ts`, "src/pages/repair/[slug].astro"]],
  [/^\/guides\/(.+)$/, (s) => [`src/data/guides/content/${s}.ts`, "src/pages/guides/[slug].astro"]],
  [/^\/$/, () => ["src/data/home.ts", "src/pages/index.astro"]],
  [/^\/rates$/, () => ["src/data/rates.ts", "src/pages/rates.astro"]],
  [/^\/(.+)$/, (s) => [`src/pages/${s}.astro`]],
];

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const paths = {};
for (const file of walk(DIST).filter((f) => f.endsWith(".html"))) {
  const rel = relative(DIST, file).split(sep).join("/").replace(/\.html$/, "");
  const path = rel === "index" ? "/" : `/${rel}`;
  const rule = rules.find(([re]) => re.test(path));
  if (!rule) continue;
  const dates = rule[1](path.match(rule[0])[1]).map(dateOf).filter(Boolean);
  if (dates.length) paths[path] = dates.sort().at(-1);
}

const sorted = Object.fromEntries(Object.entries(paths).sort(([a], [b]) => a.localeCompare(b)));
const all = Object.values(sorted).sort();
writeFileSync("src/data/lastmod.json", JSON.stringify({ default: all.at(-1) ?? today, paths: sorted }, null, 2) + "\n");
const counts = all.reduce((m, d) => ((m[d] = (m[d] ?? 0) + 1), m), {});
console.log(`lastmod.json: ${all.length} pages`, counts);
