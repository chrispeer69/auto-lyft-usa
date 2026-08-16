/**
 * Generates dist/sitemap.xml and dist/robots.txt from the same data the site
 * renders from, so a new city or service page can never be missing from the
 * sitemap. Runs automatically after `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

/** Pull an array of quoted slug values out of a TS data file without executing it. */
const slugsFrom = (file, key = 'slug') => {
  const src = fs.readFileSync(path.join(root, 'src/data', file), 'utf8');
  return [...src.matchAll(new RegExp(`${key}:\\s*'([^']+)'`, 'g'))].map(
    (m) => m[1]
  );
};

const origin = (() => {
  const src = fs.readFileSync(path.join(root, 'src/siteConfig.ts'), 'utf8');
  const m = src.match(/origin:\s*'([^']+)'/);
  if (!m) throw new Error('Could not read `origin` from src/siteConfig.ts');
  return m[1].replace(/\/$/, '');
})();

const cities = slugsFrom('cities.ts');
const services = slugsFrom('services.ts');
const repairs = slugsFrom('autoRepair.ts');
const posts = slugsFrom('blog.ts');

const today = new Date().toISOString().slice(0, 10);

/** [path, changefreq, priority] */
const urls = [
  ['/', 'daily', '1.0'],
  ['/services', 'weekly', '0.9'],
  ['/service-areas', 'weekly', '0.9'],
  ['/auto-repair', 'weekly', '0.9'],
  ['/vip-program', 'monthly', '0.8'],
  ['/quote', 'monthly', '0.8'],
  ['/blog', 'weekly', '0.8'],
  ['/sos', 'monthly', '0.7'],
  ...services.map((s) => [`/services/${s}`, 'monthly', '0.8']),
  ...cities.map((c) => [`/service-area/${c}`, 'monthly', '0.8']),
  ...repairs.map((r) => [`/auto-repair/${r}`, 'monthly', '0.7']),
  ...posts.map((p) => [`/blog/${p}`, 'monthly', '0.6']),
  ['/privacy-policy', 'yearly', '0.3'],
  ['/terms-of-service', 'yearly', '0.3'],
  ['/accessibility', 'yearly', '0.3'],
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ([loc, freq, priority]) => `  <url>
    <loc>${origin}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

if (!fs.existsSync(dist)) {
  console.error('dist/ not found — run `vite build` before this script.');
  process.exit(1);
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), robots);

console.log(
  `SEO files written: ${urls.length} URLs in sitemap.xml ` +
    `(${services.length} services, ${cities.length} cities, ` +
    `${repairs.length} repair, ${posts.length} posts) → ${origin}`
);
