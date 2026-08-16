/**
 * Renders every route to static HTML so search engines, social scrapers and
 * anything else that does not run JavaScript sees real content and real meta
 * tags. The client bundle still takes over on load — this only changes what is
 * in the file before that happens.
 *
 * Run after `vite build` and `vite build --ssr`. See package.json.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

if (!fs.existsSync(serverEntry)) {
  console.error(`Missing ${serverEntry}. Run the SSR build first.`);
  process.exit(1);
}

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(serverEntry).href);

/** Read slugs straight from the data files, same as the sitemap generator. */
const slugsFrom = (file) => {
  const src = fs.readFileSync(path.join(root, 'src/data', file), 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
};

const routes = [
  '/',
  '/services',
  '/service-areas',
  '/auto-repair',
  '/vip-program',
  '/quote',
  '/blog',
  '/sos',
  '/privacy-policy',
  '/terms-of-service',
  '/accessibility',
  '/404',
  ...slugsFrom('services.ts').map((s) => `/services/${s}`),
  ...slugsFrom('cities.ts').map((c) => `/service-area/${c}`),
  ...slugsFrom('autoRepair.ts').map((r) => `/auto-repair/${r}`),
  ...slugsFrom('blog.ts').map((p) => `/blog/${p}`),
];

const escapeAttr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/** Replace a tag in the template head, or append it if absent. */
const replaceTag = (html, pattern, replacement) =>
  pattern.test(html)
    ? html.replace(pattern, replacement)
    : html.replace('</head>', `    ${replacement}\n  </head>`);

let ok = 0;
const failures = [];

for (const route of routes) {
  try {
    const { html: appHtml, head } = render(route);

    let page = template;

    if (head) {
      page = replaceTag(
        page,
        /<title>[\s\S]*?<\/title>/,
        `<title>${escapeAttr(head.title)}</title>`
      );
      page = replaceTag(
        page,
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${escapeAttr(head.description)}" />`
      );
      page = replaceTag(
        page,
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${escapeAttr(head.canonical)}" />`
      );
      page = replaceTag(
        page,
        /<meta name="robots"[^>]*>/,
        `<meta name="robots" content="${escapeAttr(head.robots)}" />`
      );
      page = replaceTag(
        page,
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="${escapeAttr(head.title)}" />`
      );
      page = replaceTag(
        page,
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${escapeAttr(head.description)}" />`
      );
      page = replaceTag(
        page,
        /<meta property="og:url"[^>]*>/,
        `<meta property="og:url" content="${escapeAttr(head.canonical)}" />`
      );
      page = replaceTag(
        page,
        /<meta name="twitter:title"[^>]*>/,
        `<meta name="twitter:title" content="${escapeAttr(head.title)}" />`
      );
      page = replaceTag(
        page,
        /<meta name="twitter:description"[^>]*>/,
        `<meta name="twitter:description" content="${escapeAttr(head.description)}" />`
      );

      if (head.schema) {
        // JSON-LD is not HTML-escaped; guard only the script-closing sequence.
        const json = JSON.stringify(head.schema).replace(/</g, '\\u003c');
        page = page.replace(
          '</head>',
          `    <script type="application/ld+json" data-page-schema="true">${json}</script>\n  </head>`
        );
      }
    }

    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    const outDir =
      route === '/' ? dist : path.join(dist, route.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), page);
    ok += 1;
  } catch (err) {
    failures.push({ route, message: err?.message ?? String(err) });
  }
}

console.log(`Prerendered ${ok}/${routes.length} routes to static HTML.`);

if (failures.length) {
  console.error(`\n${failures.length} route(s) FAILED to prerender:`);
  for (const f of failures) console.error(`  ${f.route}: ${f.message}`);
  // Fail the build. A silently un-prerendered page is an SEO hole that would
  // otherwise ship unnoticed.
  process.exit(1);
}
