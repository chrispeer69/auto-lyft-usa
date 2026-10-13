/*
  Copy-overlap guard against the sister site (Columbus Roadside Towing).

  Builds the set of every 8-word run ("shingle") in the sister site's source
  text, then reports any page in dist/ whose <main> text repeats one. Eight
  consecutive identical words is well past coincidence for prose, so any hit
  is treated as copied text and must be rewritten.

  Also reports sentences that repeat across our own city / neighborhood /
  venue pages (near-duplicate local pages are the other thing Google filters).

  Usage: node scripts/check-overlap.mjs                 (checks dist/ after a build)
         node scripts/check-overlap.mjs --files a.ts b.ts  (checks data files before a build)
*/
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { parse } from "node-html-parser";

const SISTER = "C:/Users/chris/OneDrive/Desktop/Website Files/Columbus Roadside Towing/Website Files/client/src";
const fileMode = process.argv[2] === "--files";
const N = 8;

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (f === "node_modules" || f === "ui") return [];
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9$%&]+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

function shingles(words) {
  const out = new Set();
  for (let i = 0; i + N <= words.length; i++) out.add(words.slice(i, i + N).join(" "));
  return out;
}

// Shingles that are just facts or names any towing page must state. These are
// allowed to match (addresses, phone formats, statute names, place names).
const ALLOW = [/harrisburg pike columbus oh 43223/, /^1620 harrisburg pike/, /ohio revised code/];

if (!existsSync(SISTER)) {
  console.error(`Sister source not found: ${SISTER}`);
  process.exit(2);
}
const sisterSet = new Set();
for (const f of walk(SISTER).filter((f) => /\.(ts|tsx|md|json|txt)$/.test(f))) {
  // Pull quoted strings and JSX text; code identifiers rarely form 8 English words.
  const src = readFileSync(f, "utf8");
  const chunks = [...src.matchAll(/"((?:[^"\\]|\\.){30,})"|`([^`]{30,})`|>([^<>{}]{30,})</g)].map((m) => m[1] ?? m[2] ?? m[3]);
  for (const c of chunks) for (const s of shingles(norm(c))) sisterSet.add(s);
}

const pages = [];
if (fileMode) {
  for (const f of process.argv.slice(3)) {
    const src = readFileSync(f, "utf8");
    const strings = [...src.matchAll(/"((?:[^"\\]|\\.)*)"|`([^`]*)`/g)].map((m) => m[1] ?? m[2]);
    pages.push({ path: f, text: strings.join(" .\n") });
  }
}
for (const f of fileMode ? [] : walk("dist").filter((f) => f.endsWith(".html"))) {
  const path = "/" + relative("dist", f).split(sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");
  const main = parse(readFileSync(f, "utf8")).querySelector("main");
  if (!main) continue;
  pages.push({ path, text: main.structuredText });
}

let hits = 0;
for (const p of pages) {
  const words = norm(p.text);
  const mine = [...shingles(words)];
  const shared = mine.filter((s) => sisterSet.has(s) && !ALLOW.some((r) => r.test(s)));
  if (shared.length) {
    hits += shared.length;
    const pct = ((shared.length / Math.max(mine.length, 1)) * 100).toFixed(1);
    console.log(`\n${p.path}  ${shared.length} shared 8-word runs (${pct}% of page)`);
    for (const s of shared.slice(0, process.env.ALL ? 999 : 8)) console.log(`   "${s}"`);
  }
}

// Repeated sentences across our own local pages.
const local = pages.filter((p) => /^\/(areas|local)\//.test(p.path));
const seen = new Map();
for (const p of local) {
  const sentences = p.text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length >= 10);
  for (const s of new Set(sentences)) {
    const key = norm(s).join(" ");
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(p.path);
  }
}
const repeated = [...seen.entries()].filter(([, ps]) => ps.length > 1);
console.log(`\nSister-site overlap: ${hits} shared 8-word runs across ${pages.length} pages.`);
console.log(`Own local pages: ${repeated.length} sentences (10+ words) appear on more than one /areas or /local page.`);
for (const [s, ps] of repeated.slice(0, 15)) console.log(`   x${ps.length}  "${s.slice(0, 110)}…"`);
process.exit(hits ? 1 : 0);
