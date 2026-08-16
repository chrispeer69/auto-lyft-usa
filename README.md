# Auto Lyft USA — Website

Marketing site for Auto Lyft USA, the 24/7 towing and roadside assistance
service covering the Columbus, Dayton, and Cincinnati metros.

Live at **https://autolyftusa.online**

---

## Tech stack

| Piece      | What it is                                       |
| ---------- | ------------------------------------------------ |
| React 18   | UI components                                    |
| TypeScript | Type safety                                      |
| Vite 5     | Dev server and production build                  |
| Tailwind 3 | All styling (utility classes, no separate CSS)   |
| lucide-react | Icons                                          |
| Supabase   | Stores contact-form submissions                  |
| Caddy      | Serves the built site in production               |
| Railway    | Hosting                                          |

## Running it locally

```bash
npm install          # first time only
cp .env.example .env # fill in your Supabase values
npm run dev          # http://localhost:5173
```

Other commands:

```bash
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # type errors only, no build
```

## Site structure

96 pages, all generated from data files rather than hand-written:

| Route | Count | Source of truth |
| ----- | ----- | --------------- |
| `/` | 1 | `src/pages/Home.tsx` |
| `/services` + `/services/:slug` | 19 | `src/data/services.ts` |
| `/service-areas` + `/service-area/:slug` | 49 | `src/data/cities.ts` |
| `/auto-repair` + `/auto-repair/:slug` | 13 | `src/data/autoRepair.ts` |
| `/blog` + `/blog/:slug` | 7 | `src/data/blog.ts` |
| `/vip-program`, `/quote`, `/sos` | 3 | individual pages |
| `/privacy-policy`, `/terms-of-service`, `/accessibility` | 3 | `src/pages/LegalPage.tsx` |
| `/404` | 1 | `src/pages/NotFound.tsx` |

## Where things live

```
public/                 Static files served as-is
  3.png                 Header logo
  auto_logo.jpg         Footer logo + favicon + social share image
scripts/
  prerender.mjs         Renders every route to static HTML for SEO
  generate-seo-files.mjs  Builds sitemap.xml + robots.txt from the data files
src/
  siteConfig.ts         Phone, email, domain, social links — EDIT HERE FIRST
  routes.tsx            The route table (client)
  entry-server.tsx      Same routes for prerendering — KEEP IN SYNC
  App.tsx               Layout: header, footer, scroll handling
  seoHead.ts            Collects head tags during prerendering
  data/
    cities.ts           Every city page: copy, highways, landmarks, ZIPs
    services.ts         Every service page: copy, features, FAQs
    autoRepair.ts       Every repair page
    blog.ts             Every blog post
  components/
    Seo.tsx             Per-page title, meta, canonical, structured data
    ui.tsx              PageHero, CallToAction, FaqList, Breadcrumbs, Section
    Header.tsx          Nav with dropdowns + mobile menu
    Footer.tsx          Footer nav, service links, city links
    Contact.tsx         Contact form (writes to Supabase)
    Hero / Services / About / ServiceAreas / Fleet / Testimonials
  pages/                One file per page type
supabase/schema.sql     Database table + security policies
Caddyfile               Production web server config
nixpacks.toml           How Railway builds and starts the site
```

## Common edits

**Change the phone number, email or domain** — `src/siteConfig.ts`. It updates
every page at once, including canonical URLs and the sitemap.

**Add a city** — add one entry to the `CITIES` array in `src/data/cities.ts`.
That single entry creates the page, its nav entry, its footer links, its
sitemap entry and its structured data. Give it genuinely local copy — the
highways, landmarks and intro are what stop Google treating these as
duplicate pages.

**Add a service** — add an entry to `SERVICES` in `src/data/services.ts`. Set
`featured: true` to also show it in the homepage grid.

**Add a blog post** — add an entry to `BLOG_POSTS` in `src/data/blog.ts`. The
body is a list of `{h2}`, `{p}` and `{ul}` blocks.

**Add a whole new route type** — add it to BOTH `src/routes.tsx` and
`src/entry-server.tsx`, then to the arrays in the two scripts. The build fails
loudly if a route cannot be prerendered.

## How the SEO works

This is a React single-page app, which normally means crawlers see an empty
page. To avoid that, `npm run build` does four things:

1. `vite build` — the normal client bundle
2. `vite build --ssr` — the same app compiled to run in Node
3. `scripts/prerender.mjs` — renders all 96 routes to real static HTML, each
   with its own title, description, canonical URL and JSON-LD structured data
4. `scripts/generate-seo-files.mjs` — writes `sitemap.xml` and `robots.txt`

The result is that every page is a complete HTML document on disk. The React
bundle then hydrates on top of it, so navigation stays instant.

If a route fails to prerender the build **fails** rather than silently
shipping a blank page.

## Own your leads

The contact form writes into a Supabase table called `contact_requests`.

**The credentials currently in `.env` point at a Supabase project created by the
previous developer.** Until you switch them, form submissions land in someone
else's database and you cannot read your own leads.

To take ownership:

1. Create a free project at https://supabase.com.
2. Open SQL Editor, paste in `supabase/schema.sql`, and run it.
3. Go to Project Settings → API and copy the **Project URL** and the **anon
   public** key.
4. Put those two values in `.env` (local) and in Railway under
   your service → **Variables** (production).
5. Redeploy.

The anon key is safe to expose in the browser — that is what it is designed
for, and the security policies in `schema.sql` mean the public can submit a
request but cannot read anything back. Never put the `service_role` key in
this project.

## Deploying to Railway

Railway builds from this repository. Pushing to `main` triggers a deploy.

**First-time setup**

1. In Railway: **New Project → Deploy from GitHub repo →
   `chrispeer69/auto-lyft-usa`**.
2. Open the service → **Variables** and add both:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy. Railway reads `nixpacks.toml`: it runs `npm ci`, then
   `npm run build`, then serves `dist/` with Caddy on `$PORT`.
4. Confirm the generated `*.up.railway.app` URL loads before touching DNS.

**Important:** Vite bakes `VITE_*` variables into the JavaScript at *build*
time, not run time. Changing a variable in Railway does nothing until you
**redeploy**. If they are missing entirely the site still loads fine — only the
contact form disables itself and tells visitors to call.

## Pointing the domain at Railway

`autolyftusa.online` is registered at GoDaddy.

1. In Railway: service → **Settings → Networking → Custom Domain**, add the
   domain. Railway shows you the DNS record it wants.
2. Add that record at GoDaddy (**My Products → DNS → Manage Zones**).
3. Wait for Railway to show the domain as verified, then delete the old
   Netlify DNS records so nothing points at Netlify any more.
4. Only after the site is confirmed live on Railway, delete the Netlify site.

**The apex-domain catch.** Railway issues a **CNAME** target. DNS does not
allow a CNAME on a bare/apex domain, and GoDaddy does not support the
CNAME-flattening (ALIAS/ANAME) workaround that some providers offer. So
`autolyftusa.online` with no `www` cannot point at Railway through GoDaddy DNS
alone. Two ways around it:

- **Move DNS to Cloudflare (recommended, free).** Keep the domain registered at
  GoDaddy; just change its nameservers to Cloudflare's. Cloudflare flattens
  CNAMEs at the apex, so the bare domain works. This is the standard fix.
- **Use `www` as the real site.** Point `www.autolyftusa.online` at Railway via
  CNAME, then use GoDaddy's domain forwarding to send the bare domain to
  `www`. Simpler, but the canonical URL becomes the `www` version and
  forwarding adds a redirect hop.

Whichever you choose, make the canonical tag in `index.html` match the final
URL exactly — see the note below.

## Notes / open items

- **Social links are hidden, not broken.** `siteConfig.social` is set to `null`
  for all four networks, so the footer icons do not render at all rather than
  linking to `#`. Put your real profile URLs in to switch them back on.
- **Legal pages are drafts.** Privacy, Terms and Accessibility are written to
  be accurate about what this site actually does, but have your attorney read
  them before you rely on them.
- **VIP pricing is indicative.** The figures on `/vip-program` are placeholders
  and the page says so. Set your real prices in `src/pages/VipProgram.tsx`.
- **Photography is stock.** Hero, About and Fleet images are hotlinked from
  Pexels. Replacing them with photos of your own trucks would load faster, look
  genuine, and give you images you own.
- **After the domain moves,** submit `https://autolyftusa.online/sitemap.xml`
  in Google Search Console so the 96 pages get crawled promptly.
