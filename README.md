# Auto Lyft USA — Website

Marketing site for Auto Lyft USA, the 24/7 towing and roadside assistance
service covering the Columbus, Dayton, and Cincinnati metros.

Live at **https://www.autolyftusa.online**

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
  logo-header.png       Header logo (optimised; original in design-assets/)
  auto_logo.jpg         Footer logo + favicon + social share image
  google*.html          Search Console verification file
design-assets/          Full-resolution originals, NOT served to visitors
scripts/
  prerender.mjs         Renders every route to static HTML for SEO
  generate-seo-files.mjs  Builds sitemap.xml + robots.txt from the data files
  seo-audit.mjs         Checks all 96 pages; fails the build on errors
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
  lib/seoText.ts        Clamps titles/descriptions to Google's limits
supabase/schema.sql     Database table + security policies
Dockerfile              How Railway builds and runs the site
Caddyfile               Production web server config (routing, caching, 404s)
railway.json            Tells Railway to use the Dockerfile
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
page. To avoid that, `npm run build` does five things:

1. `vite build` — the normal client bundle
2. `vite build --ssr` — the same app compiled to run in Node
3. `scripts/prerender.mjs` — renders all 96 routes to real static HTML, each
   with its own title, description, canonical URL and JSON-LD structured data
4. `scripts/generate-seo-files.mjs` — writes `sitemap.xml` and `robots.txt`
5. `scripts/seo-audit.mjs` — checks every page for duplicate or over-length
   titles and descriptions, missing canonicals, H1 problems, heading skips,
   invalid JSON-LD, images without alt text, thin content and sitemap gaps

Run the audit on its own any time with `npm run seo`.

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
3. Deploy. Railway builds the `Dockerfile`: `npm ci`, `npm run build`, then
   serves `dist/` with Caddy on `$PORT`.

   A Dockerfile is used rather than Nixpacks on purpose — Nixpacks auto-detects
   the `Caddyfile` and installs its own Caddy, which collides with ours and
   fails the build outright.
4. Confirm the generated `*.up.railway.app` URL loads before touching DNS.

**Important:** Vite bakes `VITE_*` variables into the JavaScript at *build*
time, not run time. Changing a variable in Railway does nothing until you
**redeploy**. If they are missing entirely the site still loads fine — only the
contact form disables itself and tells visitors to call.

## Pointing the domain at Railway

`autolyftusa.online` is registered at GoDaddy, and **`www.autolyftusa.online`
is the canonical site**.

**Why www and not the bare domain.** Railway issues a CNAME target for custom
domains. DNS does not permit a CNAME on a bare/apex domain, and GoDaddy does
not support the CNAME-flattening (ALIAS/ANAME) workaround that Cloudflare and
others offer. So the bare domain cannot point at Railway through GoDaddy DNS.
`www` takes a normal CNAME and works fine; the bare domain forwards to it.

`src/siteConfig.ts` sets `origin` to the www host, and every canonical tag,
`og:url` and sitemap entry is built from it. **If you ever move DNS to
Cloudflare, change `origin` back to the bare domain and redeploy** — otherwise
the canonicals point at a host that only redirects.

### Steps

1. **Railway** → your service → Settings → Networking → Custom Domain →
   add `www.autolyftusa.online`. Railway shows a CNAME and a TXT record.
2. **GoDaddy** → My Products → DNS → Manage Zones → `autolyftusa.online`:
   - Add `CNAME` · Name `www` · Value `<the value Railway gave you>` · TTL 600
   - Add the `TXT` record Railway gave you (used to issue the certificate)
   - Delete any existing `www` record that points at Netlify
3. Wait for Railway to mark the domain **verified** and issue the certificate.
   Usually minutes; allow up to a few hours.
4. **Forward the bare domain**: GoDaddy → Domain Settings → Forwarding →
   forward `autolyftusa.online` to `https://www.autolyftusa.online` with a
   **permanent (301)** redirect. A 301 passes ranking signal; a 302 does not.
5. Confirm `https://www.autolyftusa.online` serves from Railway, then remove
   the old Netlify DNS records and delete the Netlify site.

### Verifying the cutover

```bash
# should show the Railway CNAME, not Netlify
nslookup -type=CNAME www.autolyftusa.online 8.8.8.8

# should be 200 and NOT report "Server: Netlify"
curl -sSI https://www.autolyftusa.online | head -20

# bare domain should 301 to www
curl -sSI https://autolyftusa.online | grep -iE 'HTTP|location'
```

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
