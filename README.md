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
| Netlify    | Hosting                                          |

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
netlify.toml            Build and redirect settings for Netlify
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
4. Put those two values in `.env` (local) and in Netlify under
   Site settings → Environment variables (production).
5. Redeploy.

The anon key is safe to expose in the browser — that is what it is designed
for, and the security policies in `schema.sql` mean the public can submit a
request but cannot read anything back. Never put the `service_role` key in
this project.

## Deploying

Netlify builds from this repository. Pushing to `main` triggers a deploy.

- Build command: `npm run build`
- Publish directory: `dist`
- Required environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

The domain `autolyftusa.online` is registered at GoDaddy and its DNS points at
Netlify.

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
