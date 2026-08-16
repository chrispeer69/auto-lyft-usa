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

## Where things live

```
public/                 Static files served as-is
  3.png                 Header logo
  auto_logo.jpg         Footer logo + favicon + social share image
src/
  siteConfig.ts         Phone, email, service area, social links — EDIT HERE FIRST
  App.tsx               Page shell, scroll handling, section order
  lib/supabase.ts       Supabase client + ContactRequest type
  components/
    Header.tsx          Fixed nav bar + mobile menu
    Hero.tsx            Top banner
    Services.tsx        The 9 service cards
    About.tsx           About copy, stats, "Why choose us"
    ServiceAreas.tsx    Columbus / Dayton / Cincinnati coverage
    Fleet.tsx           Truck types
    Testimonials.tsx    Customer reviews
    Contact.tsx         Contact form (writes to Supabase)
    Footer.tsx          Footer nav + contact info
index.html              Page title, meta tags, SEO structured data
supabase/schema.sql     Database table + security policies
Caddyfile               Production web server config (SPA routing, caching)
nixpacks.toml           How Railway builds and starts the site
railway.json            Railway builder + restart policy
```

## Common edits

**Change the phone number or email** — edit `src/siteConfig.ts`. It updates
everywhere on the page at once. Also update `index.html`, which repeats the
phone number in the SEO tags for Google.

**Change service descriptions** — the `SERVICES` array at the top of
`src/components/Services.tsx`.

**Change the cities or neighborhoods** — the `AREAS` array at the top of
`src/components/ServiceAreas.tsx`.

**Add or edit a review** — the `TESTIMONIALS` array at the top of
`src/components/Testimonials.tsx`.

**Change the page title or Google description** — `index.html`.

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

- `index.html` sets the canonical URL and Open Graph URL to
  `https://autolyftusa.com`, but the live site is `autolyftusa.online`. If the
  `.com` is not yours, these should be changed to `.online` — pointing the
  canonical tag at a domain you do not control tells Google to rank that one
  instead.
- The footer's Privacy Policy, Terms of Service, and Cookie Policy links, and
  the four social icons, all point at `#` — they need real destinations.
- Hero, About, and Fleet images are hotlinked from Pexels. Replacing them with
  photos of your own trucks would load faster and look genuine.
