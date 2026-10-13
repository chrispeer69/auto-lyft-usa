# Auto Lyft USA — build plan

Goal: match Columbus Roadside Towing's page coverage, schema and technical SEO
(spec: `docs/reference-audit.md`) with **original copy on every page**, so the two
sites can rank side by side without looking like copies.

Guardrails (run on every phase):
- `npm run build` → the post-build SEO contract (`scripts/check-seo.mjs`): title 20–60,
  description 70–155, unique titles/descriptions/H1s, one H1, one LocalBusiness
  node, FAQ schema = visible FAQs, no rating markup, no broken internal links.
  It also writes sitemap.xml, llms.txt and llms-full.txt from the built pages.
- `npm run check:overlap` → zero 8-word runs shared with the sister site's source,
  plus a report of sentences repeated across our own /areas and /local pages.

How we differ from the sister site on purpose:
| | Columbus Roadside | Auto Lyft USA |
|---|---|---|
| Stack | React SPA + Express injection | Astro, static HTML |
| URLs | /services/x, /service-area/x, /places/x, /blog/x, /pricing, /quote, /faq | /towing/x, /areas/x-oh, /local/x, /guides/x, /rates, /estimate, /questions |
| Design | navy/cream, Oswald + DM Sans, photo hero | charcoal/red, Plus Jakarta Sans + Inter, grid-texture hero |
| Schema ids | #business, #website, #owner | #org, #site, #lisa-peer, one @graph |
| Title patterns | "Towing {City} OH \| Roadside…" | "{City} OH Towing & Roadside Help \| Auto Lyft USA" |
| City pages | ETA tiers, fixed H1 formula | miles from yard, county, roads-we-get-called-to, unique H1s |

## Phases

- [x] **0 Foundation** — Astro scaffold, design system, schema graph, layout, homepage, 404, robots, manifest, icons, SEO contract, overlap guard.
- [x] **1 Services (26)** — all 26 written, priced (Offer schema), 0 overlap.
- [x] **2 Towns (40)** — all 40 written, unique H1s, 0 overlap; venue cross-links.
- [x] **3 Columbus hub + 26 neighborhoods** — done.
- [x] **4 Venues & campuses (27)** — done.
- [x] **5 Core pages** — rates, estimate (+EV calculator), questions, about, contact, request (GPS→SMS), privacy, terms, jobs (noindex). /reviews, /free-tow, /vip-program held for owner input.
- [x] **6 Repair (12)** — done.
- [x] **7 Guides (14)** — done.
- [x] **8 Ad landers** — 14 pages under /go/ — `/go/<keyword>` noindex, one per ad group, no prices.
- [~] **9 Launch prep** — done: _headers, _redirects, IndexNow key + `npm run indexnow`, final overlap sweep (0 sister runs on 177 pages). Waiting on owner: photos, hosting/domain, PUCO/USDOT, GBP, real-phone check, Lighthouse after deploy.

## Status 2026-10-13
177 pages built (161 indexable + 14 /go landers + jobs + 404), ~240,000 words. SEO contract passes; 0 shared 8-word runs with the sister site.
