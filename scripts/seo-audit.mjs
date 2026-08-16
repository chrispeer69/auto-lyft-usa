/**
 * Audits every prerendered page in dist/ against the on-page SEO checks that
 * actually move rankings. Exits non-zero if any ERROR-level check fails, so it
 * can gate a deploy.
 *
 * Usage: node scripts/seo-audit.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const verbose = process.argv.includes('--verbose');

if (!fs.existsSync(dist)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : [];
  });

const pages = walk(dist).sort();

const LIMITS = {
  titleMin: 20,
  titleMax: 60,
  descMin: 70,
  descMax: 160,
  minWords: 250,
};

const errors = [];
const warnings = [];
const seenTitles = new Map();
const seenDescs = new Map();

const routeOf = (file) => {
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  const r = '/' + rel.replace(/index\.html$/, '').replace(/\/$/, '');
  return r === '/' ? '/' : r;
};

const first = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

const textContent = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

for (const file of pages) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, 'utf8');
  const err = (msg) => errors.push(`${route}: ${msg}`);
  const warn = (msg) => warnings.push(`${route}: ${msg}`);

  const isNoindex = /content="noindex/.test(html);

  // --- Title -------------------------------------------------------------
  const title = first(html, /<title>([\s\S]*?)<\/title>/);
  if (!title) err('missing <title>');
  else {
    const len = title.replace(/&amp;/g, '&').length;
    if (len > LIMITS.titleMax)
      warn(`title ${len} chars (>${LIMITS.titleMax}, Google will truncate): "${title}"`);
    if (len < LIMITS.titleMin) warn(`title only ${len} chars: "${title}"`);
    if (!isNoindex) {
      if (seenTitles.has(title))
        err(`duplicate title with ${seenTitles.get(title)}`);
      else seenTitles.set(title, route);
    }
  }

  // --- Description -------------------------------------------------------
  const desc = first(html, /<meta name="description" content="([^"]*)"/);
  if (!desc) err('missing meta description');
  else {
    const len = desc.replace(/&amp;/g, '&').length;
    if (len > LIMITS.descMax)
      warn(`description ${len} chars (>${LIMITS.descMax}, will be truncated)`);
    if (len < LIMITS.descMin) warn(`description only ${len} chars`);
    if (!isNoindex) {
      if (seenDescs.has(desc))
        err(`duplicate description with ${seenDescs.get(desc)}`);
      else seenDescs.set(desc, route);
    }
  }

  // --- Canonical ---------------------------------------------------------
  const canonical = first(html, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical) err('missing canonical');
  else if (!isNoindex && !canonical.endsWith(route === '/' ? '' : route))
    err(`canonical "${canonical}" does not match route`);

  // --- Headings ----------------------------------------------------------
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length === 0) err('no <h1>');
  if (h1s.length > 1) err(`${h1s.length} <h1> tags (should be exactly 1)`);

  const headings = [...html.matchAll(/<h([1-6])[^>]*>/g)].map((m) =>
    Number(m[1])
  );
  for (let i = 1; i < headings.length; i += 1) {
    if (headings[i] - headings[i - 1] > 1) {
      warn(`heading level skips h${headings[i - 1]} → h${headings[i]}`);
      break;
    }
  }

  // --- Social cards ------------------------------------------------------
  for (const tag of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']) {
    if (!new RegExp(`property="${tag}"`).test(html)) err(`missing ${tag}`);
  }
  for (const tag of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!new RegExp(`name="${tag}"`).test(html)) err(`missing ${tag}`);
  }
  const ogImage = first(html, /<meta property="og:image" content="([^"]*)"/);
  if (ogImage && !/^https?:\/\//.test(ogImage))
    err(`og:image must be an absolute URL, got "${ogImage}"`);

  // --- Structured data ---------------------------------------------------
  const ld = [...html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  )];
  if (!ld.length && !isNoindex) err('no JSON-LD structured data');
  for (const [, json] of ld) {
    try {
      JSON.parse(json.replace(/\\u003c/g, '<'));
    } catch (e) {
      err(`invalid JSON-LD: ${e.message}`);
    }
  }

  // --- Images ------------------------------------------------------------
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const img of imgs) {
    if (!/\balt=/.test(img)) err(`<img> without alt: ${img.slice(0, 90)}`);
    if (!/\b(width|height)=/.test(img) && !/\bclass="[^"]*h-\[/.test(img))
      warn(`<img> without width/height (layout shift risk): ${img.slice(0, 70)}`);
    if (!/loading=/.test(img)) warn(`<img> without loading attribute`);
  }

  // --- Content depth -----------------------------------------------------
  const words = textContent(html).split(' ').filter(Boolean).length;
  if (!isNoindex && words < LIMITS.minWords)
    warn(`thin content: ${words} words`);

  // --- Prerender sanity --------------------------------------------------
  if (/<div id="root"><\/div>/.test(html)) err('root div is empty (not prerendered)');

  if (verbose) console.log(`${route}  ${words}w  "${title}"`);
}

// --- Site-level files ------------------------------------------------------
for (const f of ['sitemap.xml', 'robots.txt']) {
  if (!fs.existsSync(path.join(dist, f))) errors.push(`missing dist/${f}`);
}

const sitemap = fs.existsSync(path.join(dist, 'sitemap.xml'))
  ? fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
  : '';
const sitemapUrls = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    new URL(m[1]).pathname.replace(/\/$/, '') || '/'
  )
);
for (const file of pages) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, 'utf8');
  if (/content="noindex/.test(html)) continue;
  if (!sitemapUrls.has(route)) errors.push(`${route}: indexable but missing from sitemap.xml`);
}

// --- Report ----------------------------------------------------------------
const group = (list) => {
  const byKind = new Map();
  for (const item of list) {
    const kind = item.split(': ').slice(1).join(': ').split(/[:(]/)[0].trim();
    byKind.set(kind, (byKind.get(kind) ?? 0) + 1);
  }
  return [...byKind.entries()].sort((a, b) => b[1] - a[1]);
};

console.log(`\nSEO audit — ${pages.length} pages\n${'='.repeat(50)}`);

if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length}) — grouped:`);
  for (const [kind, n] of group(warnings)) console.log(`  ${n}x  ${kind}`);
  if (verbose) warnings.forEach((w) => console.log(`  · ${w}`));
}

if (errors.length) {
  console.log(`\nERRORS (${errors.length}):`);
  errors.slice(0, 40).forEach((e) => console.log(`  ✗ ${e}`));
  if (errors.length > 40) console.log(`  … and ${errors.length - 40} more`);
  console.log(`\nFAILED`);
  process.exit(1);
}

console.log(`\nNo errors. ${warnings.length} warning(s).`);
