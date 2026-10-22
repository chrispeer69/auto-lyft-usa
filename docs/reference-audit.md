# Reference SEO Audit: Columbus Roadside Towing (source site)

**Purpose:** build spec for a sister site that matches this site's SEO coverage (page types, data model, schema, technical SEO, test rules) **without copying its text**. Every number below was taken from the source code (and, where noted, from running the site's own server-side SEO functions read-only on 2026-10-13).

**Source:** `C:\Users\chris\OneDrive\Desktop\Website Files\Columbus Roadside Towing\Website Files` (Vite + React 19 + wouter SPA in `client/src`, Express server in `server/`, shared constants in `shared/`).
**Live domain:** `https://www.columbusroadsidetowing.com` (www is canonical).
**Business entity:** Roadside Towing & Recovery Inc (dba Columbus Roadside Towing), tow yard 1620 Harrisburg Pike, Columbus OH 43223; corporate office 3879 Regatta Ct, Lewis Center OH 43035; one phone `(740) 812-9489` used everywhere.

> Note on older docs in the source root: `SEO_AUDIT_AND_REPAIR_REPORT.md`, `AUDIT_REPORT.md` and `INPUTS_REQUIRED.md` describe an *earlier* state (34 cities, 15 services, `TowingService`/`AutoRepair` schema types, empty `sameAs`, no reviews). The code has since moved on: 40 cities, 26 services, a single `#business` entity with `Service` nodes per page, populated `sameAs`, and a live own-review feed. This document reflects the **current code**. The useful lessons from those reports are carried into section 7.

---

## Contents

1. [URL inventory](#1-url-inventory)
2. [Page types: structure, word counts, title/meta/H1 patterns, linking](#2-page-types)
3. [City pages: data model and differentiation](#3-city-pages-data-model-and-differentiation)
4. [Schema / JSON-LD](#4-schema--json-ld)
5. [Technical SEO mechanisms](#5-technical-seo-mechanisms)
6. [SEO rules encoded in the tests](#6-seo-rules-encoded-in-the-tests)
7. [Other ranking contributors](#7-other-ranking-contributors)
8. [Build checklist for the sister site](#8-build-checklist-for-the-sister-site)

---

## 1. URL inventory

Routes are declared in `client/src/App.tsx` (wouter). Server-side meta lives in `server/seoMeta.ts` (`getMetaForPath`); the sitemap is generated in `server/seoRoutes.ts` (`buildSitemapEntries`) from the same data modules, so a new data entry automatically gets a route, meta, schema, sitemap entry and llms-full.txt entry.

### Summary counts

| Group | Count | In sitemap? | Indexable? |
|---|---:|---|---|
| Home | 1 | yes (priority 1.0) | yes |
| Core / utility pages (indexable) | 17 | yes | yes |
| Reviews pages (`/reviews`, `/reviews/all`) | 2 | yes | yes |
| Towing / roadside service pages (`/services/*`) | 26 | yes | yes |
| Auto-repair pages (`/auto-repair/*`) | 12 | yes | yes |
| City service-area pages (`/service-area/*`) | 40 | yes | yes |
| Columbus hub (`/service-area/columbus`) | 1 | yes | yes |
| Columbus neighborhood pages (`/service-area/columbus/*`) | 26 | yes | yes |
| Events & Places hub (`/places`) | 1 | yes | yes |
| Place pages (`/places/*`) | 27 | yes | yes |
| Blog posts (`/blog/*`) | 14 | yes | yes |
| **Sitemap total** | **167** | | |
| Paid-ad landing pages (`/lp/*`) | 22 | **no** | **noindex, follow** |
| Noindex utility pages (`/app`, `/ask`, `/careers` (+`/careers/:id`), `/park-garage-details` (+`/:code`)) | 4 (+2 dynamic families) | **no** | **noindex, follow** |
| 404 (`/404` + any unknown path) | 1 | no | noindex, nofollow, real 404 status |
| **Total distinct static URLs** | **193** (167 indexable + 26 noindex) | | |

Redirects (301, `server/seoMiddleware.ts`): `/services/heavy-duty-towing` -> `/services/heavy-towing`; `/service-area` -> `/service-areas`; `/service-area/lithopolis` -> `/service-areas`; `/index.html` -> `/`; apex host -> www; trailing slash -> none; uppercase path -> lowercase.

### 1.1 Home (1)

| URL | Title | H1 |
|---|---|---|
| `/` | Tow Truck & Towing Columbus \| Roadside Towing & Recovery Inc | 24-7 Tow Truck & Roadside Assistance — FREE TOW Columbus |

### 1.2 Core / utility pages

Indexable (17 "core" in the sitemap test, plus 2 review pages):

| URL | Title (page part before " \| Roadside Towing & Recovery Inc") | H1 | Sitemap priority / changefreq |
|---|---|---|---|
| `/services` | Towing Services Columbus OH | Towing Services in Columbus, Ohio | 0.9 weekly |
| `/service-areas` | Central Ohio Service Areas | Towing Service Areas Across Central Ohio | 0.9 weekly |
| `/vip-program` | VIP Repair Program | VIP Repair Program | 0.7 monthly |
| `/free-tow` | Free Tow With Repair | Free Tow (Up to $100) With a $750+ Repair | 0.8 monthly |
| `/excite-towing` | Excite Towing and Recovery | Looking for Excite Towing and Recovery? (brand-capture page for an absorbed competitor) | 0.6 monthly |
| `/great-lakes-ev` | Out-of-Warranty EV Repair | Out-of-Warranty EV Repair With Great Lakes EV — Towed From Columbus (partner page) | 0.8 monthly |
| `/auto-repair` | Auto Repair Columbus OH | Auto Repair Services in Columbus, OH | 0.9 weekly |
| `/quote` | Towing Quote Columbus OH | Online Towing Quote | 0.8 monthly |
| `/pricing` | Towing Prices Columbus OH | Towing Prices in Columbus, OH | 0.9 monthly |
| `/quote/ev-tesla` | EV & Tesla Towing Quote | EV & Tesla Towing Quote | 0.75 monthly |
| `/blog` | Towing & Roadside Blog | Towing & Roadside Blog | 0.8 weekly |
| `/sos` | SOS Tow Request Columbus | Request a Tow Now (GPS request wizard) | 0.7 monthly |
| `/about` | About Our Towing Company | About Roadside Towing & Recovery Inc | 0.7 monthly |
| `/faq` | Towing FAQ & Ohio Tow Laws | Towing Questions, Answered | 0.8 monthly |
| `/contact` | Contact Us \| 24-7 Dispatch | Contact Roadside Towing & Recovery Inc | 0.7 monthly |
| `/privacy-policy` | Privacy Policy (legal-name suffix) | Privacy Policy | 0.4 yearly |
| `/terms-of-service` | Terms of Service (legal-name suffix) | Terms of Service | 0.4 yearly |
| `/reviews` | Customer Reviews | Customer Reviews: Our Own Scorecard | 0.8 daily, lastmod = today |
| `/reviews/all` | Every Customer Review | Every Customer Review | 0.6 daily, lastmod = today |

Hubs that are also listed in their own groups: `/service-area/columbus` (0.85), `/places` (0.8).

Noindex (served with `<meta name="robots" content="noindex, follow">` **and** `X-Robots-Tag: noindex, follow`, never in sitemap):

| URL | Purpose |
|---|---|
| `/app` | "Add to home screen" install page (PWA prompt, QR codes) |
| `/ask` | "ROADSIDE Genie" AI chat that answers from llms.txt |
| `/careers`, `/careers/:id` | Job listings from an external feed (canonical job pages live on DrivingJobs with JobPosting markup) |
| `/park-garage-details`, `/park-garage-details/:code` | Parking-garage clearance database, pending owner review |

### 1.3 Towing & roadside services (26) — `/services/:slug`

Data: `client/src/lib/serviceData/<slug>.ts` (one file each), list in `serviceData/index.ts`. Page component per slug in `client/src/pages/services/*Page.tsx`, all rendering `components/ServicePageTemplate.tsx`.

| Slug | Title (page part) | H1 | FAQs |
|---|---|---|---:|
| emergency-towing | Emergency Towing Columbus | Emergency Towing Columbus OH — Nearest Truck Sent, Day or Night | 15 |
| flatbed-towing | Flatbed Towing Columbus OH | Flatbed Towing Columbus OH — Flatbed Tow Truck, All Four Wheels Up | 17 |
| ev-tesla-towing | EV & Tesla Towing Columbus | EV & Tesla Towing | 14 |
| motorcycle-towing | Motorcycle Towing Columbus | Motorcycle Towing Columbus OH — Flatbed Transport for Your Bike | 5 |
| long-distance-towing | Long-Distance Tows Columbus | Long-Distance Towing Columbus OH — Flatbed Transport up to 200 Miles | 5 |
| light-duty-towing | Light-Duty Towing Columbus | Light-Duty Towing Columbus OH — Cars, SUVs, Pickups, Vans & Motorcycles | 8 |
| medium-duty-towing | Medium-Duty Towing Columbus | Medium-Duty Towing Columbus OH — Box Trucks, Vans, Shuttle Buses & Work Trucks | 9 |
| heavy-towing | Heavy-Duty Towing Columbus | Heavy-Duty Towing Columbus OH — One Call, We Coordinate the Heavy Tow | 7 |
| equipment-hauling | Equipment Hauling Columbus | Equipment Hauling Columbus OH — Skid Steers, Mini Excavators, Forklifts & Trailers | 9 |
| junk-car-removal | Junk Car Removal Columbus | Junk Car Removal Columbus OH — Non-Running Vehicles Hauled Away | 9 |
| wheel-lift-towing | Wheel-Lift Towing Columbus | Wheel-Lift Towing | 6 |
| impound-towing | Impound & Tow Yard Columbus | Impound Towing | 8 |
| parking-garage-recovery | Parking Garage Tow Columbus | Parking Garage Recovery | 6 |
| low-profile-towing | Low Profile Towing Columbus | Low Profile Towing in Columbus, OH for Lowered Cars, Sports Cars and EVs | 8 |
| voluntary-repo | Voluntary Repo Columbus OH | Voluntary Repossession Towing | 6 |
| auction-towing | Auction Towing Columbus OH | Auction Towing | 6 |
| fleet-contract-towing | Fleet Towing Columbus OH | Fleet Contract Towing | 6 |
| police-towing | Police Towing Columbus OH | Police & Accident Towing | 6 |
| lockout-service | Lockout Service Columbus OH | Lockout Service Columbus OH — Locked Out of Your Car? We Get You In | 19 |
| jump-starts | Jump Start Car Columbus OH | Jump Start Car Columbus OH — Dead Battery? We Come to You | 18 |
| mobile-battery-replacement | Mobile Battery Replacement | Mobile Car Battery Replacement Columbus OH — Tested and Installed Where You're Parked | 12 |
| fuel-delivery | Fuel Delivery Columbus OH | Fuel Delivery | 6 |
| tire-changes | Tire Change Columbus OH | Tire Changes | 6 |
| winch-out-recovery | Winch Out Service Columbus | Winch Out Service Columbus OH — Car Stuck in a Ditch, Snow or Mud | 10 |
| auto-repair-partners | Repair Partners Columbus OH | Auto Repair Partners | 6 |
| roadside-assistance | Roadside Assistance Near Me | Roadside Assistance Columbus OH — 24-7 Help, No Membership Needed | 13 |

(List order above is the `SERVICE_DATA_LIST` order used for nav, footer and ItemList.)

### 1.4 Auto-repair pages (12) — `/auto-repair/:slug`

Data: `client/src/lib/autoRepairServices.ts`; pages in `client/src/pages/auto-repair/*`, template `components/AutoRepairPageTemplate.tsx`. These are "repair coordinated through independent partner shops" pages (tow + partner shop), each with a disclosure line. Every one has 4 FAQs.

| Slug | Title (page part) | H1 (`heroTagline`) |
|---|---|---|
| engine-repair-diagnostics | Engine Repair Columbus OH | Expert Engine Repair in Columbus |
| brake-service-repair | Brake Repair Columbus OH | Trusted Brake Service in Columbus |
| transmission-service | Transmission Shop Columbus | Transmission Experts in Columbus |
| electrical-systems | Auto Electrical Columbus OH | Auto Electrical Experts in Columbus |
| heating-ac | Heating, AC Repair Columbus | Auto Heating & AC Repair in Columbus |
| engine-tune-ups | Engine Tune-Up Columbus OH | Professional Tune-Ups in Columbus |
| tire-service-alignment | Tires & Alignment Columbus | Tire Service & Alignment in Columbus |
| oil-change-lube | Oil Change Columbus OH | Quick Oil Change Service in Columbus |
| state-inspections | Car Inspections Columbus OH | Vehicle Inspections in Columbus |
| exhaust-muffler | Exhaust & Muffler Columbus | Exhaust & Muffler Repair in Columbus |
| suspension-steering | Suspension Repair Columbus | Suspension & Steering Repair in Columbus |
| preventive-maintenance | Car Maintenance Columbus OH | Preventive Maintenance in Columbus |

### 1.5 City service-area pages (40) — `/service-area/:slug`

Data: `client/src/lib/cityMeta.ts` (meta, geo, ZIPs, ETA tier, distance), `cityFaqs.ts`, `cityCopy.ts` (rewritten intros for 16 cities), `localAreas/<slug>.ts` (local guide), `nearbyCities.ts` (NEARBY map). One page component per city (`client/src/pages/City<Name>.tsx`).

| # | Slug | ZIPs | ETA tier | Miles from yard | FAQs | Rewritten intro (cityCopy) |
|---:|---|---|---|---:|---:|---|
| 1 | dublin | 43016, 43017 | inner | 12.4 | 8 | |
| 2 | westerville | 43081, 43082 | outer | 15.5 | 8 | |
| 3 | grove-city | 43123 | inner | 3.3 | 16 | |
| 4 | reynoldsburg | 43068 | outer | 13.2 | 6 | yes |
| 5 | hilliard | 43026 | inner | 9.0 | 6 | yes |
| 6 | powell | 43065 | outer | 16.1 | 8 | |
| 7 | gahanna | 43230, 43054 | outer | 11.4 | 8 | |
| 8 | upper-arlington | 43221, 43220, 43212 | inner | 6.6 | 8 | |
| 9 | worthington | 43085, 43229 | inner | 11.8 | 6 | yes |
| 10 | pickerington | 43147 | outer | 16.5 | 8 | |
| 11 | new-albany | 43054, 43031 | outer | 17.1 | 8 | |
| 12 | canal-winchester | 43110, 43125 | outer | 14.5 | 8 | |
| 13 | delaware | 43015 | outer | 25.8 (override) | 8 | |
| 14 | marysville | 43040 | outer | 27.0 (override) | 8 | |
| 15 | lancaster | 43130 | outer | 28.1 (override) | 8 | |
| 16 | bexley | 43209 | inner | 7.1 | 6 | yes |
| 17 | whitehall | 43213, 43227 | inner | 9.6 | 6 | yes |
| 18 | obetz | 43207, 43125, 43137 | inner | 6.5 | 8 | |
| 19 | marble-cliff | 43212, 43215 | inner | 4.5 | 6 | yes |
| 20 | grandview-heights | 43212, 43215 | inner | 4.4 | 11 | yes |
| 21 | lockbourne | 43137 | inner | 9.2 | 8 | |
| 22 | groveport | 43125 | outer | 10.4 | 6 | yes |
| 23 | brice | 43109, 43110, 43232 | outer | 11.8 | 8 | |
| 24 | etna | 43062, 43018 | outer | 20.1 | 8 | |
| 25 | blacklick | 43004 | outer | 14.0 | 8 | |
| 26 | pataskala | 43062 | outer | 17.8 | 8 | |
| 27 | sunbury | 43074, 43021 | outer | 24.3 | 10 | |
| 28 | galloway | 43119 | inner | 5.9 | 8 | |
| 29 | minerva-park | 43231 | inner | 12.1 | 6 | yes |
| 30 | lincoln-village | 43228 | inner | 5.0 | 6 | yes |
| 31 | urbancrest | 43123 | inner | 2.5 | 8 | |
| 32 | valleyview | 43204 | inner | 3.1 | 6 | |
| 33 | harrisburg | 43126 | inner (owner override) | 10.1 | 8 | |
| 34 | johnstown | 43031 | outer | 25.4 (override) | 6 | yes |
| 35 | lewis-center | 43035 | outer | 19.0 | 6 | |
| 36 | prairie-township | 43119, 43228 | inner | 6.9 | 6 | yes |
| 37 | west-jefferson | 43162, 43140, 43119 | outer | 13.4 | 6 | yes |
| 38 | plain-city | 43064 | outer | 17.0 | 6 | yes |
| 39 | commercial-point | 43137, 43116, 43146 | outer | 9.4 | 6 | yes |
| 40 | london | 43140 | outer | 20.3 | 6 | yes |

Plus 27 Columbus ZIPs (`COLUMBUS_ZIPS`) used on the hub/service-areas page and in the sitewide `areaServed` DefinedRegion.

### 1.6 Columbus hub + neighborhoods (1 + 26)

Hub: `/service-area/columbus` — title "Towing in Columbus, Ohio | Roadside Towing & Recovery Inc", H1 "Towing in Columbus, Ohio by Neighborhood". 4 FAQs. Data in `client/src/lib/neighborhoods/index.ts` (`COLUMBUS_HUB`).

Neighborhood pages `/service-area/columbus/:slug` (template `pages/ColumbusNeighborhood.tsx`, data `lib/neighborhoods/<slug>.ts`). H1 is always `Towing in {Name}, Columbus`. Sitemap/list order:

| # | Slug | Title (page part) |
|---:|---|---|
| 1 | hilltop | Towing Hilltop Columbus |
| 2 | franklinton | Towing Franklinton Columbus |
| 3 | westgate | Towing Westgate Columbus |
| 4 | downtown | Towing Downtown Columbus (more FAQs than the standard 6) |
| 5 | german-village | Towing German Village |
| 6 | short-north | Towing Short North Columbus |
| 7 | clintonville | Towing in Clintonville |
| 8 | linden | Towing Linden Columbus |
| 9 | brewery-district | Towing Brewery District |
| 10 | italian-village | Towing Italian Village |
| 11 | victorian-village | Towing Victorian Village |
| 12 | harrison-west | Towing Harrison West |
| 13 | weinland-park | Towing Weinland Park |
| 14 | university-district | Towing University District (more FAQs than the standard 6) |
| 15 | old-north | Towing Old North Columbus |
| 16 | beechwold | Towing Beechwold Columbus |
| 17 | northland | Towing Northland Columbus |
| 18 | sharon-woods | Towing Sharon Woods |
| 19 | northwest-columbus | Towing Northwest Columbus |
| 20 | olde-towne-east | Towing Olde Towne East |
| 21 | king-lincoln-bronzeville | Towing King-Lincoln Bronzeville (suffix shortened to "Roadside Towing & Recovery" to stay <= 60) |
| 22 | driving-park | Towing Driving Park |
| 23 | eastmoor | Towing Eastmoor Columbus |
| 24 | berwick | Towing Berwick Columbus |
| 25 | merion-village | Towing Merion Village |
| 26 | schumacher-place | Towing Schumacher Place |

### 1.7 Events & Places (1 + 27) — `/places`, `/places/:slug`

Data: `client/src/lib/places/<slug>.ts`, nav index `lib/placesNav.ts`, template `components/PlacePage.tsx`. Hub title "Columbus Events & Places | ...", H1 "Towing at Columbus Events & Places", grouped by 5 categories.

| Category | Slug | Title (page part) | schema type of venue | FAQs |
|---|---|---|---|---:|
| Game Days & Events | arena-district-towing | Arena District Towing | Place | 6 |
| | columbus-zoo-towing | Columbus Zoo Towing | Zoo | 6 |
| | convention-center-towing | Convention Center Towing | EventVenue | 6 |
| | columbus-festival-towing | Columbus Festival Towing | Place | 6 |
| | huntington-park-towing | Clippers Game Towing | StadiumOrArena | 6 |
| | memorial-tournament-towing | Memorial Tournament Towing | GolfCourse | 6 |
| | nationwide-arena-towing | Blue Jackets Game Towing | StadiumOrArena | 6 |
| | ohio-expo-center-towing | Ohio State Fair Towing | EventVenue | 6 |
| | ohio-state-game-day-towing | Ohio State Game Day Towing | StadiumOrArena | 14 |
| | red-white-and-boom-towing | Red White & BOOM Towing | Place | 6 |
| | schottenstein-center-towing | Schottenstein Center Towing | StadiumOrArena | 12 |
| | crew-stadium-towing | Columbus Crew Game Towing | StadiumOrArena | 6 |
| Colleges & Universities | ccad-towing | CCAD Towing Near Campus | CollegeOrUniversity | 6 |
| | capital-university-towing | Capital University Towing | CollegeOrUniversity | 6 |
| | columbus-state-towing | Columbus State Towing | CollegeOrUniversity | 6 |
| | franklin-university-towing | Franklin University Towing | CollegeOrUniversity | 6 |
| | ohio-dominican-towing | Ohio Dominican Towing | CollegeOrUniversity | 6 |
| | ohio-state-towing | Ohio State Towing Near OSU | CollegeOrUniversity | 16 (12 sections, 4,600 words) |
| | ohio-wesleyan-towing | Ohio Wesleyan Towing | CollegeOrUniversity | 6 |
| | otterbein-towing | Otterbein University Towing | CollegeOrUniversity | 6 |
| Shopping & Dining | bridge-park-towing | Bridge Park Towing, Dublin | Place | 6 |
| | easton-towing | Easton Towing & Roadside | ShoppingCenter | 6 |
| | tuttle-crossing-towing | Tuttle Crossing Towing | ShoppingCenter | 6 |
| | polaris-towing | Polaris Towing & Roadside | ShoppingCenter | 6 |
| | tanger-outlets-towing | Tanger Outlets Towing | ShoppingCenter | 6 |
| Travel & Attractions | cmh-airport-towing | Columbus Airport Towing | Airport | 6 |
| Towed Car Help | columbus-impound-lot | Columbus Impound Lot Guide | CivicStructure | 12 (2,300 words) |

Standard place page = 6 FAQs + 3–4 topic sections; flagship pages (OSU campus, game day, Schottenstein, impound lot) go to 12–16 FAQs.

### 1.8 Blog posts (14) — `/blog/:slug`

Data: `client/src/lib/blogPosts.ts` (metadata) + `client/src/blog/posts.tsx` (article bodies as React components, server-rendered with react-dom/server by `server/blogSsr.ts`). Listing at `/blog`.

| Slug | Headline (H1) | metaTitle (page part) | Published | Read time | FAQs |
|---|---|---|---|---|---:|
| hidden-cost-of-discount-towing | The Hidden Cost of Discount Towing: How Cheap Rates Dilute Service | Hidden Cost of Cheap Towing | 2026-09-30 | 7 min | 4 |
| how-to-test-car-battery-before-winter | How to Test Your Car Battery and Get It Ready for a Columbus Winter | How to Test a Car Battery | 2026-09-30 | 7 min | 4 |
| columbus-winter-battery-checklist | Will Your Battery Survive a Columbus Winter? A Cold-Weather Checklist | Winter Battery Checklist | 2026-09-27 | 6 min | 3 |
| car-wont-start-columbus-battery-starter-alternator | Car Won't Start in Columbus? How to Tell Battery, Starter or Alternator (and What to Do) | Car Won't Start? Battery? | 2026-09-20 | 7 min | 5 |
| why-electric-cars-need-flatbed-or-dollies | Why an Electric Car Has to Ride on a Flatbed or a Wheel-Lift and Dollies | Why EVs Tow With Wheels Up | 2026-09-16 | 6 min | 4 |
| car-towed-in-columbus-how-to-find-it | Your Car Was Towed in Columbus: How to Find It, What It Costs, and Your Rights Under Ohio Law | Towed in Columbus? Find It | 2026-09-15 | 7 min | 4 |
| fall-breakdown-risks-columbus-deer-leaves-cold | Fall Driving in Central Ohio: Deer, Wet Leaves, and the First Cold Snap | Fall Breakdowns in Columbus | 2026-09-13 | 6 min | 3 |
| stranded-motorist-towed-on-i71 | Stranded Motorist Towed on I-71 | A Real I-71 Tow in Columbus | 2026-04-10 | 3 min | 3 |
| get-your-car-summer-ready | Get Your Car Summer-Ready: A Central Ohio Checklist | Summer Car Prep in Ohio | 2026-04-12 | 4 min | 3 |
| what-to-do-car-accident-columbus | What to Do When in a Car Accident in Columbus, Ohio | Car Accident in Columbus? | 2026-04-12 | 4 min | 3 |
| cheapest-towing-columbus-oh | Cheapest Towing in Columbus OH: What You Actually Pay and Why | Cheapest Towing Columbus OH | 2026-04-12 | 5 min | 3 |
| how-to-choose-a-tow-truck-company | How to Choose a Tow Truck Company: 7 Things Columbus Drivers Should Know | Choosing a Tow Company | 2026-04-12 | 5 min | 3 |
| stop-losing-money-on-paper-logs | Stop Losing Money on Paper Logs: 5 Ways Shift Track Is Disrupting the Towing Industry | Shift Track: No More Paper Logs (64 chars, the one exempt title) | 2026-04-22 | 6 min | 3 |
| summer-heat-breakdown-risks-columbus | Summer Heat & Highway Speed: Breaking Down Roadside Risks in Columbus, Ohio | Summer Heat Breakdown Risks | 2026-05-26 | 5 min | 3 |

### 1.9 Paid-ad landing pages (22) — `/lp/*` (noindex, not in sitemap)

Data: `client/src/lib/landingPages.ts`; markup from `lib/landingHtml.ts` (identical string rendered by server and React). One page per Google Ads ad group; no site nav; one action (call); "Ask ROADSIDE" chat button; **no prices** (test-enforced; free-tow cap is the only number). Personalized by query string (`?kw=`, `?city=`, `?loc=`, `?int=` Google location IDs) in `lib/landingPersonalize.ts` + `lib/adsGeo.ts`.

`/lp/tow-near-me`, `/lp/towing-near-me`, `/lp/flatbed-towing`, `/lp/jump-start`, `/lp/battery`, `/lp/free-tow`, `/lp/tow-truck-near-me`, `/lp/towing-company-near-me`, `/lp/tow-truck`, `/lp/tow-service-near-me`, `/lp/towing-service`, `/lp/jump-start-car`, `/lp/battery-jump-start`, `/lp/car-battery-replacement`, `/lp/battery-replacement`, `/lp/ev-towing`, `/lp/tesla-tow-near-me`, `/lp/lockout`, `/lp/flat-tire`, `/lp/roadside-flat-tire`, `/lp/towing`, `/lp/roadside`.

Title pattern differs from organic pages: `{Keyword} — Columbus, OH | {Benefit}` or `{Keyword} Columbus OH | {Benefit}` (e.g. "Tow Truck Near Me — Columbus, OH | Fast Dispatch 24-7"). Fields: path, title, description, eyebrow (exact ad keyword), h1, h1City, localize, fine, sub, heroImage, heroAlt, hook, ticks[3], steps[3], trust[], faqs[], genie[] (starter questions), callback, cta. 340–510 words each.

---

## 2. Page types

Conventions used on every page type:

- **Title suffix:** `" | Roadside Towing & Recovery Inc"` (33 chars). The page part is therefore <= 27 chars. Legal pages use the legal name "Roadside Towing and Recovery Inc" instead.
- **Meta description:** 120–155 chars, almost always ends with the phone `Call (740) 812-9489.` or `(740) 812-9489.`
- **H1:** exactly one per page, unique site-wide, the same string in React and in the server crawlable body.
- **Static hero (server):** `main#static-hero` with a real `<img fetchpriority="high" srcset="...-800.webp 800w, ....webp 1280w" sizes="100vw">`, navy gradient overlay, eyebrow (gold line + small caps), uppercase H1, subhead `<p>`, red "Call (740) 812-9489" button.
- **Sitewide crawlable footer nav** on every server-rendered page: all 26 services, "Towing Columbus" + top 10 cities (dublin, westerville, grove-city, hilliard, powell, lewis-center, delaware, worthington, gahanna, reynoldsburg), 15 hub links (services, service areas, places, reviews, pricing, quote, faq, auto-repair, VIP, free-tow, excite, great-lakes-ev, blog, about, contact), license line `PUCO Towing Certificate #650256 · USDOT #03560921`, "Fully licensed & insured" linked to the US Tow Alliance profile, "US Tow Alliance Elite Member", Facebook.
- **NAP block** at the bottom of almost every body: business name (dba trade name), corporate office (private, no walk-ins), tow yard & impound lot, phone, email, "View our location on Google Maps" (GBP CID link).
- **CTA links row** (`CTA_LINKS`): "Call (740) 812-9489 · Request a tow now (SOS) · Get an online quote".
- **FAQ markup:** `<details><summary><h3>Question</h3></summary><p>Answer with links</p></details>`, wrapped in `<section aria-label="Frequently asked questions"><h2>Frequently asked questions</h2>`. The same array feeds the FAQPage JSON-LD (answers converted to plain text). FAQ questions are always H3 (test-enforced).
- **Word counts below are server crawlable body plain text** (what crawlers and llms-full.txt see), including roughly 250–300 words of shared footer, NAP and the 26-service link list. React-rendered pages are similar or larger.

### 2.1 Home `/`

- **Sections in order (React, `pages/Home.tsx`):**
  1. Hero: eyebrow "Roadside Towing & Recovery Inc", H1 (3 lines; third line is a green link "FREE TOW Columbus" to `/free-tow`), Call button, "Online Quote Now" button, Google rating badge + own-review badge.
  2. Latest own customer reviews (`LocalReviews kind="home"`).
  3. Calls-completed strip: "104,003 calls completed. Thank you, Columbus." (`CallsMilestone`).
  4. Navy trust/stats strip.
  5. `#services` "Our Towing Services" grid (links to every service page; first 100 words contain "tow truck" and "towing Columbus").
  6. `#about` "Central Ohio's ..." why-us block.
  7. `#service-area` "Serving All of Central Ohio" + interactive map (lazy, `WhenVisible`) + city links.
  8. `#reviews` "Why Central Ohio Trusts Us" (verifiable facts only, no fabricated testimonials).
  9. CTA band "Stranded? We're On Our Way."
  10. `#contact` "Contact Us" (NAP, hours, form).
  11. `#faq` "Frequently Asked Questions" (26 Q&As from `lib/homeFaq.ts`; first five are the top `/faq` questions).
  12. Long-form SEO block "Towing Service in Columbus, Ohio — Your Reliable Partner on the Road".
- **Server static body** (in `client/index.html`, between `<!--STATIC_FALLBACK_START-->` markers): hero + `<!--HOME_REVIEWS-->` (newest written reviews) + H2 "24-7 Towing Services in Columbus, Ohio" (opens with "Searching for a tow truck near me in Columbus?...") + H2 "Serving All of Central Ohio" (list of suburbs and interstates) + NAP + H2 "Why Choose ..." with a 7-item trust list (fleet types, PUCO/USDOT, 100,000+ calls, 4.8-star Google rating, GPS dispatch, no hidden fees) + H2 "Frequently Asked Questions" (generated list) + link to `/faq` + footer nav. About 300+ words before the FAQ, ~2,000+ with the 26 FAQs.
- **Title:** `Tow Truck & Towing Columbus | Roadside Towing & Recovery Inc` (60 chars; target terms "tow truck", "towing Columbus").
- **Description:** "24-7 towing in Columbus, OH from Roadside Towing & Recovery Inc: tow truck dispatch, roadside assistance and a published rate card. Call (740) 812-9489."
- **Schema:** sitewide `#business`, `#owner` (Person), `#website` (with SearchAction) from index.html + per-route `WebPage` (no breadcrumb) + homepage-only `FAQPage` (26 Qs).

### 2.2 Service page `/services/:slug` (26)

- **Data fields (`ServiceData`):** slug, name, h1?, heroImage, heroTagline (eyebrow), heroDescription, overviewTitle, overviewParagraphs[], features[] (always 6: title+description), whyChooseUs[] (always 5), process[] (always 4 steps), faqs[] (5–19), seoContent[] (long-form paragraphs), metaTitle, metaDescription, relatedServices[] (always 4), quoteByDispatch? (no quote-builder CTA for medium/heavy/equipment/junk), ctaHeadline?/ctaBody?, extraSections[]? (id, heading, paragraphs, bulletsIntro, bullets, variant "safety", optional in-page image with real width/height), linkGrid? (heading, intro, items with href/label/blurb).
- **Sections in order (React template and server body match):**
  1. Hero: eyebrow (heroTagline), H1 (`h1 ?? name`), heroDescription, Call + SOS + Quote CTAs.
  2. Overview: H2 `overviewTitle` + paragraphs (keyword in first 100 words after H1).
  3. CTA links (or "Call for a quote" for quote-by-dispatch services).
  4. Optional link grid (e.g. jump-starts and auto-repair-partners link out to related pages).
  5. Optional extra sections (2–6 on the strongest pages: e.g. flatbed has "Why some vehicles need all four wheels off the ground", "Flatbed or wheel-lift: how dispatch decides", "What to do before the flatbed arrives", "Flatbed towing around Columbus"), with lazy section photos.
  6. H2 "Key features" (6).
  7. H2 "Why choose {Business}" (5 bullets).
  8. H2 "How it works" / "Our Process" (4 steps).
  9. H2 "Frequently asked questions" (H3 questions).
  10. H2 "{Service} across Central Ohio" (seoContent paragraphs).
  11. Pricing box (`aria-label="Pricing"`): headline price + notes + "Build an exact quote online" (only for priced services).
  12. "{Service} reviews": own reviews tagged with that service (avg stars, count, up to 6 reviews, link to /reviews).
  13. H2 "Related services" (4).
  14. H3 "All towing & roadside services" (all 26).
  15. City links: core services (emergency, roadside, flatbed, heavy, jump-starts, lockout, winch-out, battery) show "Areas We Serve" = Lewis Center, Powell, Westerville, Worthington, Delaware (+ Dublin and heading "Areas We Cover This Winter" on the two battery pages), followed by the six anchor cities (dublin, westerville, grove-city, hilliard, reynoldsburg, gahanna); others show "Service areas" = the six anchors. Always followed by "See all 40 Central Ohio service areas".
  16. "Where We Help With {Service}": links to the /places pages that list this service.
  17. NAP + footer.
  18. React only: amber CTA band "Need {name}?" (or custom ctaHeadline/ctaBody).
- **Word count:** 1,090–3,960 (avg ~2,000). Thin pages (~1,100–1,400): auction, voluntary-repo, fleet, police, wheel-lift, parking-garage, fuel, tires, impound. Rich pages (2,900–3,900): flatbed, lockout, jump-starts, EV, low-profile, battery, emergency.
- **Title pattern:** `{Service} Columbus [OH] | Roadside Towing & Recovery Inc` (56–60 chars), or a search phrase variant (`Roadside Assistance Near Me | ...`).
- **H1 pattern:** either plain service name ("Fuel Delivery") or `{Service} Columbus OH — {benefit phrase}` on target-keyword pages.
- **Description pattern:** `{Problem/keyword} in Columbus OH: {what we do/equipment}, {price or 24-7}. Call (740) 812-9489.`
  - "Locked keys in your car in Columbus OH? 24-7 non-destructive car door lockout service, flat $75 + $4/mi en-route. Call (740) 812-9489."
  - "Flatbed tow truck in Columbus OH for AWD, EV, luxury, and lowered vehicles. Hydraulic carriers with soft tie-downs, 24-7 dispatch. Call (740) 812-9489."
  - "Car stuck in a ditch, snow or mud in Columbus OH? 24-7 winch-out recovery for cars, SUVs and light trucks at 150/hr published. Call (740) 812-9489."
- **Internal links out:** 90–127 per page (4 related services, all 26 services, 5–11 city pages, places, /sos, /quote, /pricing, footer).
- **Schema:** WebPage (with primaryImageOfPage = hero), Service (with Offers from the rate card where priced), FAQPage, BreadcrumbList (Home > Services > {name}).

### 2.3 Auto-repair page `/auto-repair/:slug` (12)

- **Data fields:** slug, name, shortName, ctaNoun, heroImage, heroTagline (= H1), heroDescription, disclosure (partner-shop disclosure, shown under H1), overviewParagraphs[], whatWeDoItems[] (title+description), warningSignsTitle, warningSigns[], vipBenefits[], faqs[] (4), metaTitle, metaDescription, relatedSlugs[].
- **Sections:** hero (H1 + disclosure + subhead + call) -> H2 "{Name} in Columbus, OH" overview -> CTA links -> H2 "What partner shops do" -> H2 warning-signs list -> H2 "VIP member benefits" -> FAQs -> repair disclosure + links (find a partner shop, all repair services, compare VIP tiers) -> H2 "Related repair services" -> H2 "Towing to partner shops from" (6 anchor cities) -> NAP.
- **Word count:** 1,080–1,270.
- **Title:** `{Repair} Columbus [OH] | Roadside Towing & Recovery Inc`. **H1:** `{Adjective} {Repair} in Columbus` ("Trusted Brake Service in Columbus").
- **Description:** `{Specific parts/jobs} in Columbus, OH at independent partner shops. {Tow in / VIP members save 5–10% on labor}. Call (740) 812-9489.`
- **Schema:** WebPage, Service (`serviceType: "Auto repair coordination"`, name `"{Name} — auto repair coordination"`, areaServed Columbus City + "Central Ohio" Place, deliberately no address/hours because the work is done by partner shops), FAQPage, BreadcrumbList (Home > Auto Repair > {name}).

### 2.4 City page `/service-area/:slug` (40)

Two React generations exist: 35 "rich" city pages (340–670 lines each, hand-built sections incl. Leaflet map, "Every {City} Neighborhood Covered", "Our {City} Service Area") and 5 "slim" newest pages (Commercial Point, London, Plain City, Prairie Township, West Jefferson; ~105 lines, built only from shared components). The server crawlable body is identical in structure for all 40.

- **Server crawlable body sections in order:**
  1. Hero: eyebrow "Local Towing & Roadside Assistance", H1 `Towing {City} OH — 24-7 Tow Truck & Roadside Assistance`, generic subhead listing services, Call button.
  2. H2 "24-7 Towing & Roadside Assistance in {City}" + intro (rewritten `cityCopy` intro, or generic paragraph with the tier ETA).
  3. "ZIP codes we serve in {City}: ..."
  4. H2 "Local Guide: Towing Around {City}" with H3 groups Landmarks / Schools / Colleges / Main Routes / Major Employers & Projects (each item: bold name — one sourced fact).
  5. CTA links.
  6. H2 "Our Towing Services in {City}" (all 26 services).
  7. FAQs (6–16).
  8. H2 "Reviews from {City} customers" (own reviews tagged with that city, when any exist).
  9. H2 "Nearby Service Areas" (3–6 neighbour city links + "See all 40 ...").
  10. H2 "Events & Places Near {City}" (places that list this city).
  11. H2 "Contact & Service Area" + NAP.
- **React sections (rich template, Dublin example):** SiteHeader -> CityHero (H1, description line, Call / SOS / Quote CTAs, quick stats bar: Response Time = tier ETA, Cities Served = 40, Available 24-7) -> [CityIntro for rewritten cities] -> H2 "Towing Experts Who Know {City} Inside & Out" -> LocalAreaGuide -> H2 "Towing & Roadside Services in {City}, OH" (service cards) -> H2 "Every {City} Neighborhood Covered" -> H2 "Our {City} Service Area" + map -> H2 "Need a Tow in {City}?" CTA -> H2 "Frequently Asked Questions" -> NearbyCities -> long-form "Towing Service in {City}, Ohio — {Business}" footer block.
- **React sections (slim template):** SiteHeader -> CityHero -> CityIntro -> LocalAreaGuide -> services section -> FAQ section -> amber CTA -> NearbyCities.
- **Word count:** 1,150–2,370 (avg ~1,480).
- **Title:** exactly `Towing {City} OH | Roadside Towing & Recovery Inc` (test-enforced).
  - "Towing Dublin OH | Roadside Towing & Recovery Inc"
  - "Towing Grandview Heights OH | Roadside Towing & Recovery Inc"
- **Description pattern:** `24-7 towing in {City}, OH. Serving {2–4 local landmarks/roads}. Flatbed, wheel lift, roadside assistance. Call (740) 812-9489.` Newer cities vary the tail with locally relevant services:
  - "24-7 towing in Dublin, OH. Serving Bridge Park, Tuttle Crossing, I-270 & US-33. Flatbed, wheel lift, roadside assistance. Call (740) 812-9489."
  - "24-7 towing in Lewis Center, OH. US-23, I-71 exit 121 at Polaris, Alum Creek State Park & Orange Township. Winch-outs, jump starts. Call (740) 812-9489."
  - "24-7 towing in London, OH on I-70 and US-42 in Madison County: light, medium and heavy-duty tows, winch-outs and long-distance. Call (740) 812-9489."
- **Internal links:** 84–110 (26 services, 3–6 nearby cities, /service-areas, places, CTAs, footer).
- **Schema:** WebPage, Service (areaServed = City with geo + containsPlace from the local guide, plus DefinedRegion of the city's ZIPs; availableChannel; hoursAvailable 24-7), FAQPage, BreadcrumbList (Home > Service Areas > {City}, OH).

### 2.5 Columbus hub `/service-area/columbus` and neighborhood pages (26)

- **Hub sections:** hero (eyebrow "Columbus, Ohio") -> intro -> H2 "Columbus neighborhoods" (26 links "Towing in {Name}") -> link to /service-areas -> CTA -> FAQs (4) -> NAP. 684 words. Schema: WebPage, Service (areaServed City Columbus with geo and `containsPlace` = all 26 neighborhoods with URLs, availableChannel, hoursAvailable), FAQPage, BreadcrumbList (Home > Service Areas > Columbus).
- **Neighborhood data fields:** slug, name, title, description (120–155), h1 (`Towing in {Name}, Columbus`), heroSub, heroImage (reused, must have -800 variant), heroAlt, etaTier, etaVerify (internal), intro (80–120 words, may contain `[label](/path)` links), verify[] (internal fact list, never rendered), faqs[] (>= 6; each answer 70–120 words; each with verify[]), nearby[] (2–3 adjacent neighborhood slugs).
- **Neighborhood sections:** hero (eyebrow "Columbus · {Name}", H1, heroSub) -> React: "At a glance" stats bar -> intro -> Local Guide (H3 groups) -> CTA -> FAQs -> H2 "Nearby in Columbus" (adjacent neighborhoods + hub + all service areas) -> H2 "Services in {Name}" (26 services) -> NAP.
- **Word count:** 1,400–2,800 (avg ~1,670). Copy standard: intro + FAQ text >= 500 words of unique prose.
- **Title:** `Towing {Name} [Columbus] | Roadside Towing & Recovery Inc` ("Towing Hilltop Columbus | ...", "Towing German Village | ...").
- **Description pattern:** `Towing in {Name}, Columbus: {3 hyper-local call types tied to streets/landmarks}. Call (740) 812-9489.`
  - "Towing in German Village, Columbus: careful tows on brick streets, lockouts and jump starts with tight parking and small garages in mind. (740) 812-9489."
  - "Towing in downtown Columbus: low-clearance parking garage recovery, lockouts and tows around event parking and one-way streets, 24-7. (740) 812-9489."
- **FAQ themes per neighborhood (pattern, 6 each):** response time from the yard; most common local call types on named streets; what to do if you break down on the nearest interstate; narrow driveways/alleys/brick streets; "a car is blocking my driveway" (police non-emergency rules, private-property tows); where the car goes and how it is priced.
- **Schema:** WebPage, Service (areaServed = Place "{Name}, Columbus, Ohio" containedInPlace Columbus City in Ohio, + containsPlace from local guide), FAQPage, BreadcrumbList with 4 levels (Home > Service Areas > Columbus > {Name}).

### 2.6 Place page `/places/:slug` (27) and `/places` hub

- **Data fields (`Place`):** slug, category (events | campus | shopping | travel | civic), navLabel (<= 28 chars), keyPhrase (the one target phrase; must appear in title, H1 and a FAQ question), title, description (120–155), h1, heroSub, heroImage, heroAlt, place {name, schemaType, streetAddress?, locality?, postalCode?, lat?, lng?}, cities[] (links both ways), services[] (links both ways), related[] (other places), notAffiliatedWith (disclaimer), intro, sections[] (3–4: heading, paragraphs, bullets?), faqs[] (>= 6), sources[] (internal).
- **Sections:** hero (eyebrow "Events & Places", H1, heroSub) -> intro -> CTA links -> 3–4 topic H2 sections (typical pattern: why cars fail here, how to tell dispatch where you are, what we bring and what it costs, timing around crowds/events) -> "{navLabel}: common questions" FAQs -> H2 "Related help" (services, rate card, cities, all service areas, related places, places hub) -> "not affiliated with ..." disclaimer -> NAP.
- **Word count:** 1,400–4,600 (avg ~1,760); content standard >= 800 words of page copy.
- **Title:** `{Key phrase} | Roadside Towing & Recovery Inc` ("Columbus Zoo Towing | ...", "Blue Jackets Game Towing | ...").
- **H1:** key phrase + qualifier ("Columbus Zoo Towing, Jump Starts and Lockouts in Powell", "Tanger Outlets Towing at I-71 Exit 131 Near Sunbury").
- **Hub sections:** hero -> intro -> one H2 per category with linked items + blurb -> hub FAQs (3) -> CTA -> NAP. Schema: WebPage+CollectionPage, ItemList (27), FAQPage, BreadcrumbList.
- **Schema (place):** WebPage, Service (areaServed = the venue typed as Zoo / StadiumOrArena / EventVenue / GolfCourse / CollegeOrUniversity / ShoppingCenter / Airport / CivicStructure / Place, with PostalAddress (street only if the street is printed on the page), geo, containedInPlace City in Ohio), FAQPage, BreadcrumbList (Home > Events & Places > {navLabel}).

### 2.7 Blog post `/blog/:slug` (14) and `/blog`

- **Data fields:** slug, title (headline/H1), metaTitle, date, author, readTime, image (16:9 hero, < 100 KB webp), imageAlt, excerpt, featured, faq[] (3–5), faqInBody (newer posts include the FAQ as H3s inside the article).
- **Sections:** hero (eyebrow "{date} · {readTime}", H1 headline, excerpt as subhead) -> `<article>` with hero image (fetchpriority high) and full body (H2/H3 structure; no H1 -> H3 jumps) -> FAQ block (if not in body) -> CTA links -> related posts list -> NAP.
- **Article length:** older posts ~520–930 words of body, newer posts ~940–1,300 words; read times 3–7 min.
- **Title:** `{Short hook} | Roadside Towing & Recovery Inc` (55–60 chars); headline is longer and goes in H1/BlogPosting.headline.
- **Description:** the excerpt, trimmed to <= 155 chars with an ellipsis (`blogMetaDescription`).
- **Topics covered:** pricing transparency (discount towing, cheapest towing), seasonal breakdown risks (summer heat, summer prep, fall, winter battery x2), diagnostics (car won't start), EV towing method, towed car recovery under Ohio law, accident steps, how to choose a tow company, a real job story (I-71), an industry/software post.
- **Schema:** WebPage (datePublished/dateModified, primaryImageOfPage), BlogPosting (headline, image, dates as `YYYY-MM-DDT09:00:00-04:00`, author/publisher = #business, isPartOf #website, mainEntityOfPage), BreadcrumbList (Home > Blog > headline), FAQPage.
- **/blog listing:** H1 "Towing & Roadside Blog", H2 "From the Road", each post with date, read time, excerpt. Schema: WebPage+CollectionPage, Blog (blogPost[] of BlogPosting stubs), BreadcrumbList, FAQPage (3 core FAQs).

### 2.8 Utility pages

| Page | Body sections (server) | Words | Special schema |
|---|---|---:|---|
| `/services` | H1, "Every Service We Offer" list (H1/name — tagline), CTA, "What a Job Costs" + full rate-card table, 6 anchor city links, NAP, 4 FAQs | 1,286 | CollectionPage + ItemList(26) |
| `/service-areas` | H1, "Columbus Neighborhoods" (hub + 26 links), "Cities We Serve" (counties, ETA policy) + 40 city links, CTA, services list, **ZIP table** (Columbus + every city), NAP, 3 FAQs; has a working `?q=` filter matching the WebSite SearchAction | 1,104 | CollectionPage + ItemList(41) |
| `/pricing` | H1, "Typical Price Ranges" table (service, range, what it includes, linked), "The Full Rate Card" table, surcharge/payment notes, "Worked Examples" (line items + Franklin County 8% tax), "Prices by Service" links, 6 FAQs | 1,207 | Service + deduped Offers |
| `/quote` | H1, "Instant Online Towing Estimates", "Published Rate Card", "Looking for a Cheap Tow Near Me? Here Is the Actual Rate Card", "How the Quote Works", SMS consent wording (TCR/10DLC), links, 4 FAQs | 1,287 | Service + Offers |
| `/quote/ev-tesla` | H1, EV rate-card table, "How the EV Quote Works" (typical distances from yard), links, 4 FAQs | 829 | Service + Offers |
| `/faq` | H1, intro, CTA, 13 FAQs (Ohio tow laws, costs) | 1,276 | FAQPage |
| `/about` | H1, fact grid (legal name, owner, offices, dispatch, PUCO, USDOT, calls completed, insurance/USTA, Google rating), About sections (what-we-do with service list, service-area with city links), CTA, social, 4 FAQs | 1,500 | AboutPage, mainEntity #business |
| `/contact` | H1, "Ways to reach us" channel cards, visit sections, `<address>` block (both addresses, PUCO/USDOT, hours, directions, GBP link), "What to have ready when you call", 4 FAQs | 789 | ContactPage, mainEntity #business |
| `/sos` | Compact red banner H1 (layout mirrors the 6-step GPS wizard to avoid CLS), "Request Emergency Towing Now", 3 FAQs | 701 | WebPage |
| `/free-tow` | H1, "How the Free Tow Works" (4 steps), "The Rules", "Where the Shops Are", 9 FAQs | 1,316 | Offer (price 0, eligibleTransactionVolume min $750) |
| `/vip-program` | H1, how it works, tier table (price, towing, labor discount, oil change, rental), where repairs happen, 4 FAQs | 1,004 | Service with tier Offers |
| `/auto-repair` | H1, program explanation, list of 12 repair pages, links, 3 FAQs | 791 | CollectionPage + Service with OfferCatalog(12) |
| `/excite-towing`, `/great-lakes-ev` | Brand-capture / partner pages with sections, partner NAP, related links, 5–6 FAQs | 830 / 1,107 | WebPage only |
| `/reviews` | H1 scorecard, latest 8 reviews, "Our numbers: last 30 days", "Top drivers", "Every driver" table, links, FAQs, sticky mobile dispatch bar | 1,294 | WebPage + FAQPage (deliberately no AggregateRating/Review) |
| `/reviews/all` | Every review, newest first | 8,587 | WebPage + FAQPage |
| `/privacy-policy`, `/terms-of-service` | Full legal text server-rendered (SMS program disclosures must be visible without JS for carrier review), tracking-tool disclosure table, legal contact block | 1,381 / 756 | WebPage (dateModified), 2 FAQs each |

Every utility page also gets its `CORE_FAQS[path]` block appended to the crawlable body and a matching FAQPage (`client/src/lib/coreFaqs.ts`): /faq 13, /about 4, /services 4, /pricing 6, /great-lakes-ev 6, /excite-towing 5, /free-tow 9, /vip-program 4, /contact 4, /quote 4, /quote/ev-tesla 4, /sos 3, /service-areas 3, /blog 3, /auto-repair 3, /privacy-policy 2, /terms-of-service 2.

---

## 3. City pages: data model and differentiation

### 3.1 Fields per city

| Source file | Field | Notes |
|---|---|---|
| `lib/cityMeta.ts` | `slug`, `name` | slug drives the URL |
| | `title` | always `Towing {City} OH | Roadside Towing & Recovery Inc` |
| | `description` | 120–155 chars, names 2–4 local landmarks / roads |
| | `geo {lat,lng}` | city centre; schema `areaServed.geo`, map centre |
| | `heroImage` | city-specific photo (some reuse a neighbour's or the generic hero); must have a `-800.webp` variant |
| | `etaTier` | `inner` (20–40 min) or `outer` (40–60 min). Inner = inside I-270 **or** within 10 straight-line miles of the yard (+ owner overrides) |
| | `zips[]` | Census 2020 ZCTA-to-place file rule (>= 5% of place land or >= 25% of ZCTA land inside the place); USPS postal ZIP for unincorporated communities |
| | `distanceMi` | straight-line from the yard, 1 decimal; test recomputes from geo |
| | `etaVerify?`, `beyondRadiusOverride?` | internal notes; any city > 25 mi needs an explicit override reason |
| `lib/cityFaqs.ts` | `CITY_FAQS[slug]: {q, a, verify?}[]` | 6–16 per city. Answers may include `[label](/path)` links. One FAQ answer is generated from the services list ("We offer all 26 of our towing and roadside services in {City}: ...") |
| `lib/cityCopy.ts` | `CITY_COPY[slug]: {intro, verify[]}` | rewritten 80–120-word intro for 16 cities (newer standard) |
| `lib/localAreas/<slug>.ts` | `LocalArea {name, landmarks[], schools[], colleges[], roads[], industries[]}`; each item `{name, detail (one sourced sentence), schemaType?, source URL}` | every city has landmarks and roads; schools only when a source confirms the district. Rendered as "Local Guide: Towing Around {City}" and marked up as `containsPlace` |
| `lib/nearbyCities.ts` | `NEARBY[slug]: string[]` (3–6 neighbours by geography), `CITY_NAMES` | drives "Nearby Service Areas" |
| `lib/placesNav.ts` | `placesForCity(slug)` | "Events & Places Near {City}" |
| `server/ownReviews.ts` | `getPageReviews("city", slug)` | reviews tagged with this city |
| Page component | rich pages hard-code extra sections: neighborhood list, service-area map, city-specific H2 copy, hero description line | |

Example local-guide depth (landmarks/schools/colleges/roads/industries): Dublin 5/4/1/4/3, Bexley 9/4/7/4/2, Grandview Heights 10/3/0/12/3, Commercial Point 4/2/0/12/3, Downtown (neighborhood) 23/2/2/4/4, Clintonville 22/1/0/3/2.

County coverage is not a per-city field; it is described in copy (Franklin, Delaware, Fairfield, Licking, Union, Madison, Pickaway).

### 3.2 How city pages are differentiated

1. **Unique meta description** naming that city's landmarks and roads (titles share one pattern; uniqueness comes from the city name).
2. **ETA tier** stated consistently in hero stats, intro and FAQ answers (test: no other tier's ETA appears on the page).
3. **ZIP codes** printed on the page and in schema (`DefinedRegion`).
4. **Local Guide** of sourced, city-specific facts (landmarks, schools, colleges, interstate exits/routes, employers/projects); no detail sentence may repeat across any two areas (test).
5. **City-specific FAQs** about local roads, venues, festivals, apartment/HOA impound, local businesses; rewritten cities: 6+ FAQs with 70–120-word answers, >= 500 words of copy, no sentence reused from any other city (test).
6. **Rewritten intro** (16 cities) with local geography and the tier ETA.
7. **Nearby city links** by real geography (3–6), so even small villages get inbound links.
8. **Places cross-links** (stadium/campus/mall pages near that city, and those pages link back).
9. **City-tagged own reviews** where they exist.
10. **City hero photo** and, on rich pages, a neighborhood list and a service-area map.
11. **Schema geo + containsPlace** unique per city.

---

## 4. Schema / JSON-LD

### 4.1 Architecture

- **Sitewide entities are declared once in `client/index.html`** and referenced by `@id` everywhere else:
  - `https://www.columbusroadsidetowing.com/#business` — `@type: ["Organization", "LocalBusiness", "AutomotiveBusiness", "EmergencyService"]` (one merged entity; there is no separate Organization node and no `#organization` id).
  - `.../#owner` — Person (owner), `worksFor: #business`, `url: /about`.
  - `.../#website` — WebSite, `publisher: #business`, SearchAction to `/service-areas?q={search_term_string}`.
  - `.../#tow-yard` — Place nested in `#business.location`.
- **Per-route nodes are injected server-side** before `</head>` as one `<script type="application/ld+json">` holding an array:
  - `{url}#webpage` — WebPage (or `["WebPage","CollectionPage"|"AboutPage"|"ContactPage"]`), `isPartOf #website`, `about #business`, `breadcrumb {url}#breadcrumb`, `inLanguage en-US`, `speakable` (cssSelector `h1`, `#static-hero p`, `h1 + p`), optional `primaryImageOfPage`, `datePublished`, `dateModified`.
  - `{url}#service` — Service (provider `{"@id": "#business"}`; never a second LocalBusiness).
  - `{url}#faq` — FAQPage (exactly one per page).
  - `{url}#breadcrumb` — BreadcrumbList.
  - `{url}#article` — BlogPosting; `{url}#blog` — Blog; `{url}#cities` / `#services` / `#places` — ItemList; `{url}#offer` — Offer; `{url}#program` — Service (VIP).
- **Homepage FAQPage** is generated from `homeFaq.ts` into the `<!--HOME_FAQ_START-->...<!--HOME_FAQ_END-->` slot and stripped on every other route.
- **No AggregateRating / Review markup anywhere** (owner decision 2026-09-26: own-site ratings are self-serving; GBP ratings may not be re-marked-up). A test guards against reintroduction. Ratings are shown visibly only.

### 4.2 Every @type in use and where

| @type | Where |
|---|---|
| Organization + LocalBusiness + AutomotiveBusiness + EmergencyService | `#business`, sitewide (index.html) |
| Person | `#owner`, sitewide |
| WebSite + SearchAction + EntryPoint | `#website`, sitewide |
| WebPage | every route |
| CollectionPage | /services, /service-areas, /auto-repair, /blog, /places |
| AboutPage / ContactPage | /about, /contact |
| BreadcrumbList + ListItem | every route except home |
| Service | services, auto-repair, cities, hub, neighborhoods, places, /auto-repair, /quote, /quote/ev-tesla, /pricing, /vip-program |
| Offer + UnitPriceSpecification | priced services, /quote, /pricing, /quote/ev-tesla; OfferCatalog items |
| OfferCatalog | `#business.hasOfferCatalog`, /auto-repair |
| Offer + PriceSpecification (price 0, eligibleTransactionVolume) | /free-tow |
| FAQPage + Question + Answer | every indexable route (exactly one) |
| BlogPosting | blog posts, Blog.blogPost[] |
| Blog | /blog |
| ItemList | /services (26), /service-areas (41), /places (27) |
| City, State, Place, DefinedRegion | areaServed on business and services |
| GeoCoordinates, GeoCircle | business/tow yard, city areaServed, service areaServed (50 km circle) |
| PostalAddress | business, tow yard, place venues |
| ContactPoint, ServiceChannel | business contactPoint (3), service availableChannel |
| OpeningHoursSpecification | business (24-7 + office hours contact point), services hoursAvailable |
| PropertyValue | `#business.identifier` (PUCO certificate, USDOT) |
| SpeakableSpecification | every WebPage |
| ImageObject | primaryImageOfPage |
| containsPlace sub-types | TouristAttraction, LandmarksOrHistoricalBuildings, Park, School, HighSchool, CollegeOrUniversity, CivicStructure (with `additionalType` for Hospital/Library/StadiumOrArena), Place (with `additionalType` for ShoppingCenter/GolfCourse) |
| Venue types (places) | Zoo, StadiumOrArena, EventVenue, GolfCourse, CollegeOrUniversity, ShoppingCenter, Airport, CivicStructure, Place |

Rule: LocalBusiness subtypes (Hospital, Library, StadiumOrArena, ShoppingCenter, GolfCourse) are downgraded to `CivicStructure`/`Place` + `additionalType` inside `containsPlace`, because Google requires an address on any LocalBusiness. `Event` items stay visible but are not marked up as containsPlace.

### 4.3 `#business` properties

`name` (public/GBP name), `legalName`, `foundingDate`, `alternateName[]` (trade name + legal-name variants + short brand), `description` (services list, PUCO/USDOT numbers, "100,000+ calls completed since 2020", published rate card), `url`, `telephone`, `contactPoint[]` (emergency dispatch 24-7; customer service Mon–Fri 08:00–18:00; SMS/text line), `email`, `address` (corporate office, labeled "private offices, no walk-ins"), `geo` (corporate office), `location[]` (tow yard Place with its own address + geo, `@id #tow-yard`), `openingHours: "Mo-Su 00:00-23:59"`, `openingHoursSpecification` (all 7 days 00:00–23:59), `areaServed[]` (41 City nodes: Columbus + every city page, each `containedInPlace` State Ohio, plus a DefinedRegion of every served ZIP injected at request time from `ALL_SERVED_ZIPS`), `priceRange: "$100 - $300"`, `logo` (512 px PNG), `image` (OG image), `sameAs[]` (Google Maps CID URL, US Tow Alliance profile, Facebook), `hasOfferCatalog` (16 service Offers + a veterans-discount Offer with its own `@id`), `paymentAccepted`, `currenciesAccepted`, `hasMap` (GBP CID URL), `identifier[]` (PropertyValue PUCO + USDOT), `slogan`, `founder {@id #owner}`, `knowsAbout[]` (14 topical phrases incl. Ohio statute reference, interstates, EV towing method). No `aggregateRating`.

### 4.4 Service node variants

- **Service page:** `name` = service name, `serviceType` = service name, `description` = meta description, `url`, `image` = hero, `provider #business`, `areaServed` GeoCircle (yard geo, `geoRadius "50000"` metres), `hoursAvailable` 24-7, `offers[]` from `shared/servicePricing.ts` (each Offer: name, description with full formula, url, price, priceCurrency USD, availability InStock, `priceSpecification` UnitPriceSpecification with `unitText` and UN/CEFACT `unitCode` SMI/HUR/DAY, `offeredBy #business`, `areaServed` "Central Ohio"). Services quoted per job (repo, auction, fleet, police, medium/heavy, equipment, junk) carry no offers.
- **City:** `name` = "Towing {City} OH", `serviceType` "Towing service", `areaServed` [City + geo + containsPlace, DefinedRegion of ZIPs], `availableChannel` (ServiceChannel with dispatch ContactPoint + `serviceUrl /sos`), `hoursAvailable` 24-7.
- **Neighborhood:** `name` = H1, areaServed Place "{Name}, Columbus, Ohio" in City Columbus in State Ohio + containsPlace.
- **Hub:** areaServed City Columbus + geo + containsPlace = 26 neighborhood Places with URLs.
- **Place:** areaServed = the venue node (typed, address, geo, containedInPlace).
- **Auto-repair:** serviceType "Auto repair coordination"; description adds the partner-shop disclaimer; no hours/address.

### 4.5 Representative JSON-LD: Home

Home carries the three sitewide blocks from `index.html` plus the per-route WebPage and the homepage FAQPage. Long arrays are shortened with `"..."` entries (marked); everything else is verbatim structure.

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "AutomotiveBusiness", "EmergencyService"],
  "@id": "https://www.columbusroadsidetowing.com/#business",
  "name": "Roadside Towing & Recovery Inc",
  "legalName": "Roadside Towing & Recovery, Inc.",
  "foundingDate": "2020-05-05",
  "alternateName": ["Columbus Roadside Towing", "Roadside Towing and Recovery Inc", "Roadside Towing and Recovery", "CRT Towing"],
  "description": "24-7 towing and roadside assistance in Columbus and Central Ohio: ... PUCO towing certificate 650256, USDOT 03560921, insured, 100,000+ calls completed since 2020, published rate card.",
  "url": "https://www.columbusroadsidetowing.com",
  "telephone": "+1-740-812-9489",
  "contactPoint": [
    {"@type": "ContactPoint", "telephone": "+1-740-812-9489", "contactType": "emergency dispatch", "areaServed": "US-OH", "availableLanguage": "English",
     "hoursAvailable": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}},
    {"@type": "ContactPoint", "telephone": "+1-740-812-9489", "contactType": "customer service", "areaServed": "US-OH", "availableLanguage": "English",
     "hoursAvailable": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00"}},
    {"@type": "ContactPoint", "name": "SMS / text line", "telephone": "+1-740-812-9489", "contactType": "customer service", "areaServed": "US-OH", "availableLanguage": "English"}
  ],
  "email": "chris@columbusroadsidetowing.com",
  "address": {"@type": "PostalAddress", "name": "Corporate office (private offices, no walk-ins)", "streetAddress": "3879 Regatta Ct", "addressLocality": "Lewis Center", "addressRegion": "OH", "postalCode": "43035", "addressCountry": "US"},
  "geo": {"@type": "GeoCoordinates", "latitude": "40.2218", "longitude": "-82.9813"},
  "location": [{
    "@type": "Place", "@id": "https://www.columbusroadsidetowing.com/#tow-yard",
    "name": "Roadside Towing & Recovery Inc tow yard and impound lot",
    "address": {"@type": "PostalAddress", "streetAddress": "1620 Harrisburg Pike", "addressLocality": "Columbus", "addressRegion": "OH", "postalCode": "43223", "addressCountry": "US"},
    "geo": {"@type": "GeoCoordinates", "latitude": "39.9248", "longitude": "-83.0582"}
  }],
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"},
  "areaServed": [
    {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "State", "name": "Ohio"}},
    {"@type": "City", "name": "Dublin", "containedInPlace": {"@type": "State", "name": "Ohio"}},
    "... one City node per city page (41 total) ...",
    {"@type": "DefinedRegion", "name": "Columbus and Central Ohio ZIP codes we serve", "addressCountry": "US", "addressRegion": "OH", "postalCode": ["43002", "43004", "... every served ZIP, injected at request time ..."]}
  ],
  "priceRange": "$100 - $300",
  "logo": "https://www.columbusroadsidetowing.com/icon-512.png",
  "image": "https://www.columbusroadsidetowing.com/img/og-image.jpg",
  "sameAs": [
    "https://www.google.com/maps?cid=821562212922493918",
    "https://www.ustowalliance.com/company/10619/",
    "https://www.facebook.com/people/Roadside-Towing-and-Recovery/61594912739538/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Towing Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Towing"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "EV & Tesla Towing", "url": "https://www.columbusroadsidetowing.com/services/ev-tesla-towing"}},
      "... 14 more service Offers ...",
      {"@type": "Offer", "@id": "https://www.columbusroadsidetowing.com/#veterans-discount", "name": "Veterans discount: 10% off", "category": "Veterans discount",
       "description": "Veterans get 10% off towing and roadside service. Requires a valid military or VA ID ...",
       "priceSpecification": {"@type": "PriceSpecification", "priceCurrency": "USD", "description": "10% off the quoted price for veterans with a valid military or VA ID."},
       "url": "https://www.columbusroadsidetowing.com/quote#rate-card", "offeredBy": {"@id": "https://www.columbusroadsidetowing.com/#business"}}
    ]
  },
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD",
  "hasMap": "https://www.google.com/maps?cid=821562212922493918",
  "identifier": [
    {"@type": "PropertyValue", "propertyID": "PUCO towing certificate", "value": "650256"},
    {"@type": "PropertyValue", "propertyID": "USDOT", "value": "03560921"}
  ],
  "slogan": "Fast. Reliable. Always There.",
  "founder": {"@id": "https://www.columbusroadsidetowing.com/#owner"},
  "knowsAbout": ["Emergency towing", "Flatbed towing", "EV and Tesla towing with all four wheels off the ground ...", "Private property impound towing (Ohio Revised Code 4513.601)", "Accident recovery on I-70, I-71, I-270 and I-670", "... 9 more ..."]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.columbusroadsidetowing.com/#owner",
  "name": "Chris Peer",
  "jobTitle": "Owner",
  "email": "chris@columbusroadsidetowing.com",
  "worksFor": {"@id": "https://www.columbusroadsidetowing.com/#business"},
  "url": "https://www.columbusroadsidetowing.com/about"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.columbusroadsidetowing.com/#website",
  "name": "Roadside Towing & Recovery Inc",
  "url": "https://www.columbusroadsidetowing.com",
  "publisher": {"@id": "https://www.columbusroadsidetowing.com/#business"},
  "potentialAction": {
    "@type": "SearchAction",
    "target": {"@type": "EntryPoint", "urlTemplate": "https://www.columbusroadsidetowing.com/service-areas?q={search_term_string}"},
    "query-input": "required name=search_term_string"
  }
}
```

```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.columbusroadsidetowing.com/#webpage",
    "url": "https://www.columbusroadsidetowing.com",
    "name": "Tow Truck & Towing Columbus | Roadside Towing & Recovery Inc",
    "description": "24-7 towing in Columbus, OH from Roadside Towing & Recovery Inc: tow truck dispatch, roadside assistance and a published rate card. Call (740) 812-9489.",
    "inLanguage": "en-US",
    "isPartOf": {"@id": "https://www.columbusroadsidetowing.com/#website"},
    "about": {"@id": "https://www.columbusroadsidetowing.com/#business"},
    "primaryImageOfPage": {"@type": "ImageObject", "url": "https://www.columbusroadsidetowing.com/img/og-image.jpg"},
    "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", "#static-hero p", "h1 + p"]}
  }
]
```

Plus `{"@type": "FAQPage", "@id": "https://www.columbusroadsidetowing.com/#faq", "mainEntity": [26 Question/Answer pairs]}` (homepage only).

### 4.6 Representative JSON-LD: service page (`/services/flatbed-towing`)

FAQ answers shortened; 17 questions in the real block.

```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.columbusroadsidetowing.com/services/flatbed-towing#webpage",
    "url": "https://www.columbusroadsidetowing.com/services/flatbed-towing",
    "name": "Flatbed Towing Columbus OH | Roadside Towing & Recovery Inc",
    "description": "Flatbed tow truck in Columbus OH for AWD, EV, luxury, and lowered vehicles. Hydraulic carriers with soft tie-downs, 24-7 dispatch. Call (740) 812-9489.",
    "inLanguage": "en-US",
    "isPartOf": {"@id": "https://www.columbusroadsidetowing.com/#website"},
    "about": {"@id": "https://www.columbusroadsidetowing.com/#business"},
    "breadcrumb": {"@id": "https://www.columbusroadsidetowing.com/services/flatbed-towing#breadcrumb"},
    "primaryImageOfPage": {"@type": "ImageObject", "url": "https://www.columbusroadsidetowing.com/img/service-flatbed-towing-new-9ztLgtsVU7r2yfHeqMYSme.webp"},
    "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", "#static-hero p", "h1 + p"]}
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.columbusroadsidetowing.com/services/flatbed-towing#service",
    "name": "Flatbed Towing",
    "serviceType": "Flatbed Towing",
    "description": "Flatbed tow truck in Columbus OH for AWD, EV, luxury, and lowered vehicles. Hydraulic carriers with soft tie-downs, 24-7 dispatch. Call (740) 812-9489.",
    "url": "https://www.columbusroadsidetowing.com/services/flatbed-towing",
    "image": "https://www.columbusroadsidetowing.com/img/service-flatbed-towing-new-9ztLgtsVU7r2yfHeqMYSme.webp",
    "provider": {"@id": "https://www.columbusroadsidetowing.com/#business"},
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 39.9248, "longitude": -83.0582},
      "geoRadius": "50000"
    },
    "hoursAvailable": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"},
    "offers": [
      {
        "@type": "Offer",
        "name": "Flatbed towing — hook-up fee",
        "description": "$4 per en-route mile (yard to pickup) + $125 hook-up + $7 per loaded mile. Highway calls +$75; after-hours (10PM–6AM) +$150; weekend +$50; large vehicle +$100. Ohio sales tax applies.",
        "url": "https://www.columbusroadsidetowing.com/services/flatbed-towing",
        "price": 125, "priceCurrency": "USD", "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 125, "priceCurrency": "USD", "unitText": "per tow"},
        "offeredBy": {"@id": "https://www.columbusroadsidetowing.com/#business"},
        "areaServed": {"@type": "Place", "name": "Central Ohio"}
      },
      {
        "@type": "Offer",
        "name": "Flatbed towing — loaded mileage (in tow, per mile)",
        "description": "$7 per loaded mile, added to the $125 hook-up and the $4/mi en-route.",
        "url": "https://www.columbusroadsidetowing.com/services/flatbed-towing",
        "price": 7, "priceCurrency": "USD", "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 7, "priceCurrency": "USD", "unitText": "per mile", "unitCode": "SMI"},
        "offeredBy": {"@id": "https://www.columbusroadsidetowing.com/#business"},
        "areaServed": {"@type": "Place", "name": "Central Ohio"}
      },
      {
        "@type": "Offer",
        "name": "En-route mileage (yard to pickup, per mile)",
        "description": "...",
        "url": "https://www.columbusroadsidetowing.com/services/flatbed-towing",
        "price": 4, "priceCurrency": "USD", "availability": "https://schema.org/InStock",
        "priceSpecification": {"@type": "UnitPriceSpecification", "price": 4, "priceCurrency": "USD", "unitText": "per mile", "unitCode": "SMI"},
        "offeredBy": {"@id": "https://www.columbusroadsidetowing.com/#business"},
        "areaServed": {"@type": "Place", "name": "Central Ohio"}
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.columbusroadsidetowing.com/services/flatbed-towing#faq",
    "mainEntity": [
      {"@type": "Question", "name": "(question 1, contains the target phrase \"flatbed towing\")", "acceptedAnswer": {"@type": "Answer", "text": "(plain-text answer, links stripped)"}},
      "... 16 more Question nodes ..."
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.columbusroadsidetowing.com/services/flatbed-towing#breadcrumb",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.columbusroadsidetowing.com"},
      {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.columbusroadsidetowing.com/services"},
      {"@type": "ListItem", "position": 3, "name": "Flatbed Towing", "item": "https://www.columbusroadsidetowing.com/services/flatbed-towing"}
    ]
  }
]
```

### 4.7 Representative JSON-LD: city page (`/service-area/dublin`)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.columbusroadsidetowing.com/service-area/dublin#webpage",
    "url": "https://www.columbusroadsidetowing.com/service-area/dublin",
    "name": "Towing Dublin OH | Roadside Towing & Recovery Inc",
    "description": "24-7 towing in Dublin, OH. Serving Bridge Park, Tuttle Crossing, I-270 & US-33. Flatbed, wheel lift, roadside assistance. Call (740) 812-9489.",
    "inLanguage": "en-US",
    "isPartOf": {"@id": "https://www.columbusroadsidetowing.com/#website"},
    "about": {"@id": "https://www.columbusroadsidetowing.com/#business"},
    "breadcrumb": {"@id": "https://www.columbusroadsidetowing.com/service-area/dublin#breadcrumb"},
    "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", "#static-hero p", "h1 + p"]}
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.columbusroadsidetowing.com/service-area/dublin#service",
    "name": "Towing Dublin OH",
    "serviceType": "Towing service",
    "description": "24-7 towing in Dublin, OH. Serving Bridge Park, Tuttle Crossing, I-270 & US-33. Flatbed, wheel lift, roadside assistance. Call (740) 812-9489.",
    "url": "https://www.columbusroadsidetowing.com/service-area/dublin",
    "provider": {"@id": "https://www.columbusroadsidetowing.com/#business"},
    "areaServed": [
      {
        "@type": "City",
        "name": "Dublin",
        "containedInPlace": {"@type": "State", "name": "Ohio"},
        "geo": {"@type": "GeoCoordinates", "latitude": 40.0992, "longitude": -83.1141},
        "containsPlace": [
          {"@type": "TouristAttraction", "name": "Field of Corn (with Osage Oranges)"},
          {"@type": "LandmarksOrHistoricalBuildings", "name": "Dublin Link"},
          {"@type": "Place", "additionalType": "https://schema.org/GolfCourse", "name": "Muirfield Village Golf Club"},
          {"@type": "CivicStructure", "additionalType": "https://schema.org/Hospital", "name": "OhioHealth Dublin Methodist Hospital"},
          {"@type": "Park", "name": "Scioto Park"},
          {"@type": "School", "name": "Dublin City School District"},
          {"@type": "HighSchool", "name": "Dublin Coffman High School"},
          {"@type": "HighSchool", "name": "Dublin Jerome High School"},
          {"@type": "HighSchool", "name": "Dublin Scioto High School"},
          {"@type": "CollegeOrUniversity", "name": "Ohio University Heritage College of Osteopathic Medicine, Dublin"}
        ]
      },
      {"@type": "DefinedRegion", "name": "Dublin, OH ZIP codes", "addressCountry": "US", "addressRegion": "OH", "postalCode": ["43016", "43017"]}
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {"@type": "ContactPoint", "telephone": "+1-740-812-9489", "contactType": "emergency dispatch"},
      "serviceUrl": "https://www.columbusroadsidetowing.com/sos"
    },
    "hoursAvailable": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59"}
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.columbusroadsidetowing.com/service-area/dublin#faq",
    "mainEntity": [
      {"@type": "Question", "name": "How fast can you reach Dublin, OH for a tow?", "acceptedAnswer": {"@type": "Answer", "text": "(answer stating the city's ETA tier)"}},
      "... 7 more Question nodes (garages at local venues, services offered, fleet contracts, local interstate, apartment impound, holidays/local festival, cost) ..."
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.columbusroadsidetowing.com/service-area/dublin#breadcrumb",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.columbusroadsidetowing.com"},
      {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.columbusroadsidetowing.com/service-areas"},
      {"@type": "ListItem", "position": 3, "name": "Dublin, OH", "item": "https://www.columbusroadsidetowing.com/service-area/dublin"}
    ]
  }
]
```

### 4.8 Other per-type nodes (shape only)

- **Place venue (columbus-zoo-towing):** Service.areaServed = `{"@type":"Zoo","name":"Columbus Zoo and Aquarium","address":{PostalAddress street/locality/region/postal/country},"geo":{...},"containedInPlace":{"@type":"City","name":"Powell","containedInPlace":{"@type":"State","name":"Ohio"}}}`.
- **BlogPosting:** `{"@type":"BlogPosting","@id":"{url}#article","headline","description","image","url","mainEntityOfPage":{"@id":"{url}#webpage"},"datePublished":"2026-09-30T09:00:00-04:00","dateModified":same,"inLanguage":"en-US","author":{"@id":"#business"},"publisher":{"@id":"#business"},"isPartOf":{"@id":"#website"}}`.
- **/free-tow Offer:** price 0 USD, `priceSpecification` (maxPrice 0 + description of the cap), `eligibleTransactionVolume` (PriceSpecification minPrice 750 USD, valueAddedTaxIncluded false), offeredBy #business, areaServed City Columbus.
- **/vip-program:** Service `#program` with one Offer per membership tier (name, price, USD, url).
- **/auto-repair:** Service with `hasOfferCatalog` listing the 12 repair Services with URLs.
- **ItemLists:** ListItem {position, name, url}; /service-areas lists the Columbus hub first, then each city as "Towing {City} OH".

---

## 5. Technical SEO mechanisms

### 5.1 Server rendering for crawlers (no SSR framework; HTML injection)

- The app is a client-rendered SPA, but **every HTML response goes through `injectSeoMeta(html, path)`** (`server/_core/vite.ts` `serveStatic` catch-all; also in dev middleware). For every visitor, not only bots:
  1. Replaces `<title>`, meta description, canonical, all `og:*` and `twitter:*` tags.
  2. Overrides `robots`/`googlebot` meta when the route is noindex.
  3. Injects the per-route JSON-LD array before `</head>`.
  4. Keeps or strips the homepage FAQ JSON-LD; injects the served-ZIP DefinedRegion into `#business`.
  5. Swaps the homepage hero `<link rel="preload" as="image">` for the route's own hero (with `imagesrcset` 800w/1280w) or removes it.
  6. **Replaces the `#root` content between `<!--STATIC_FALLBACK_START-->` and `<!--STATIC_FALLBACK_END-->` with a full per-route crawlable body** (`getBodyForPath`): unique H1, real copy, FAQs, pricing, local guide, internal links, reviews, NAP, footer nav. React's `createRoot` replaces `#root` on mount (no hydration), so this is the crawler/no-JS copy and also the fast first paint (LCP).
  7. Injects `window.__reviewSummary`, `window.__ownReviews`, `window.__ownPageReviews` (and the full feed on /reviews) so React renders review widgets without a fetch.
- **Single source of truth:** titles, descriptions, H1s, FAQs, prices and copy all live in `client/src/lib/*` and `shared/*` modules with no React imports; both the server and the React pages read them, so crawler HTML and hydrated DOM cannot disagree. React pages also set `document.title`, meta description and OG tags in `useEffect` from the same data (and restore the home values on unmount).
- Blog article bodies are server-rendered with `react-dom/server` from `client/src/blog/posts.tsx` (`server/blogSsr.ts`), falling back to the excerpt on error.
- Ad landing pages render a shared HTML string (`landingHtml.ts`) on both sides so nothing shifts on mount; the query-string personalization runs on both sides too.

### 5.2 sitemap.xml (`GET /sitemap.xml`, dynamic)

- Built from data modules (`buildSitemapEntries`): home, 17 core, Columbus hub + 26 neighborhoods, 40 cities, /reviews + /reviews/all, /places + 27 places, 26 services, 12 auto-repair, 14 blog posts = 167 URLs. Excludes /lp/*, /app, /ask, /careers, /park-garage-details, /404.
- Namespaces: sitemap 0.9, `image` (Google image sitemap), `xhtml`.
- **Image entries:** home (hero, OG image, logo), every city (hero, title = city H1, caption "24-7 towing and roadside assistance in {City}, Ohio"), every service and auto-repair page (its hero, "{Name} Columbus OH"), every blog post (its hero, title = headline, caption = alt). All image URLs on the same origin (test).
- **Priority / changefreq:** home 1.0 daily; services/service-areas/auto-repair/pricing 0.9 weekly or monthly; cities and hub 0.85 monthly; neighborhoods, places, services, auto-repair 0.8 monthly; blog posts 0.65 monthly; legal 0.4 yearly; reviews daily.
- **lastmod logic:** a hand-maintained `LASTMOD` map of real content-change dates (`YYYY-MM-DD`), never "now" (except /reviews pages, whose content really changes daily). Defaults: `SITE_LASTMOD`; groups bumped together (all cities/neighborhoods/places to the local-guide date; all services/auto-repair to the FAQ-render date); individual overrides per page; blog posts = publish date. Rule in code: "Bump a route here when its content changes — never derive lastmod from now."
- Headers: `application/xml`, `Cache-Control: public, max-age=3600, s-maxage=86400`, `X-Robots-Tag: noindex` (the file itself).
- `/api/seo/health` returns sitemap counts by type and the feature list.

### 5.3 robots.txt (`GET /robots.txt`, dynamic)

```
# {Business} — robots.txt
# https://www.{domain}
#
# Machine-readable site summaries for AI assistants:
#   https://www.{domain}/llms.txt       (curated overview, markdown)
#   https://www.{domain}/llms-full.txt  (full text of every page)

User-agent: *
Allow: /
Allow: /llms.txt
Allow: /llms-full.txt
Disallow: /api/
Disallow: /404

# AI / answer-engine crawlers — explicitly allowed
User-agent: GPTBot
Allow: /
(same two-line block for: OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot,
 anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Googlebot, Bingbot,
 CCBot, Applebot, Applebot-Extended, DuckAssistBot, meta-externalagent)

# Sitemaps
Sitemap: https://www.{domain}/sitemap.xml
```

No `Crawl-delay` (test-enforced). Cache 1 day.

### 5.4 llms.txt and llms-full.txt

- **`/llms.txt`** (static, `client/public/llms.txt`, ~220 lines) is **generated** by `scripts/generate-llms-txt.ts` (`pnpm llms:gen`) from the same data modules. Sections: H1 business name; blockquote summary (legal/trade name, both addresses, PUCO/USDOT, calls completed); business facts line (website, llms-full URL, sitemap); "Core pages"; "Services (26)"; "Auto repair via partner shops (12)"; "Service areas (40 cities)" (with ZIPs); "Events & places (27)"; "Pricing (published rate card, USD)" (exact numbers); "CONVINI VIP Membership Program (4 tiers, annual)"; "Blog"; "Legal"; "Facts for AI assistants"; "Optional". Each link is `- [Label](absolute URL): one-line description`. Tests require every city/service/auto-repair/blog URL and the exact rate-card figures to be present.
- **`/llms-full.txt`** (dynamic, cached 1 h in memory, `X-Robots-Tag: noindex`): concatenates for every sitemap URL a block `# {title}\nURL: ...\nLast modified: ...\nDescription: ...\n\n{plain text}` where the plain text comes from `htmlToPlainText(getBodyForPath(path))` (headings as `#`, lists as `-`, FAQ `<details>` as `Q:`/`A:` pairs, tables as `label: value`). Test: > 100,000 chars, no HTML tags, every route present.
- `/ask` (ROADSIDE Genie) is an AI chat answering visitor questions from llms.txt (`server/assistant.ts`).

### 5.5 IndexNow

- Key file served at `/{KEY}.txt` (32-hex key).
- **Daily job** (`startDailyIndexNow`, production only): at 02:00 America/New_York submits every sitemap URL whose `lastmod` is within the last 3 days to `api.indexnow.org`, `www.bing.com/indexnow` and `yandex.com/indexnow` (payload: host, key, keyLocation, urlList). The 3-day overlap covers a missed run.
- **Manual full submission:** `POST /api/seo/index-now` with header `x-indexnow-token` = `INDEXNOW_TRIGGER_TOKEN` env (503 if unset, 401 if wrong).

### 5.6 Canonical, host, slash, case and redirect rules (middleware order)

1. `compression()` (gzip/brotli, threshold 1 KB).
2. `canonicalHostRedirect`: apex `columbusroadsidetowing.com` -> 301 `https://www.columbusroadsidetowing.com{originalUrl}` (only exact apex; no-op on preview hosts).
3. `trailingSlashRedirect`: GET non-API, non-file paths ending in `/` (except `/`) -> 301 without slash, query preserved.
4. `retiredPathRedirect`: 301 map for retired/alias slugs.
5. `seoHeaders` (below).
6. In the catch-all: `/index.html` -> 301 `/`; any path with an uppercase letter -> 301 lowercase.
- **Canonical** = `https://www.{domain}{path}` with no trailing slash; home canonical is `https://www.{domain}` (no slash). Query strings never appear in canonicals (LP personalization uses the query but the canonical is the bare path). Canonical equals the sitemap `loc` (test).

### 5.7 404 handling

- Unknown paths (anything `getMetaForPath` does not resolve, including `/404` and unknown blog slugs) return **HTTP 404** with the SPA shell transformed by `injectNotFound`: title "Page Not Found | {Business}", description with the phone, `robots`/`googlebot` = `noindex, nofollow`, **no canonical**, no `og:url`, homepage FAQ JSON-LD removed, static body with H1 "Page not found" and links (Home, SOS, Quote, Service Areas). Scripts remain so React mounts its NotFound page.
- Any missing file-like path (`/x.js.map`, `/.env`, `favicon.ico` if absent) returns a plain-text 404 with `X-Robots-Tag: noindex`, never the SPA shell.

### 5.8 HTTP headers (`seoHeaders`)

- Security: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, HSTS 1 year incl. subdomains, `Permissions-Policy: geolocation=(self), camera=(), microphone=(self)`, `Content-Security-Policy-Report-Only` listing every third party (GTM/GA4/Ads, GoHighLevel, Stripe, OSM tiles, Google Maps).
- `X-Robots-Tag`: `noindex, nofollow` on `/api/*`; `noindex, follow` on `/app`, `/ask`, `/careers*`, `/park-garage-details*`, `/lp/*`.
- Cache-Control: hashed assets under `/assets/` and `/img/` (and any `-[hash8+].ext`) `public, max-age=31536000, immutable`; other static assets 1 week; sitemap/robots 1 h; json/webmanifest/txt/xml 1 day; HTML `no-cache, must-revalidate` (keeps back/forward cache working).

### 5.9 Meta tags in `client/index.html` (defaults, overwritten per route)

`<title>`, `description`, `robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`, `googlebot: index, follow`, `author`, `application-name`, `apple-mobile-web-app-title`, `mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `format-detection: telephone=yes`, `theme-color`.

- **Open Graph:** `og:type` (website; `article` on blog posts), `og:title`, `og:description`, `og:image` (+ `secure_url`, `type`, `width` 1200, `height` 630, `alt`), `og:url` (= canonical), `og:site_name`, `og:locale en_US`. Route-specific images (service/auto-repair/blog heroes) drop the width/height/type tags rather than state wrong values.
- **Twitter:** `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`.
- **Geo tags:** `geo.region US-OH`, `geo.placename Columbus`, `geo.position 39.9248;-83.0582`, `ICBM 39.9248, -83.0582` (tow-yard coordinates).
- **Icons:** favicon 16/32 PNG, `apple-touch-icon` 180, `manifest.json`.

### 5.10 Images

- All images self-hosted under `/img/` as **WebP with a content hash in the filename** (immutable caching). `scripts/optimize-images.mjs` downloaded former CDN images, resized and re-encoded them with sharp, and wrote `scripts/image-map.json`; `scripts/rewrite-image-refs.mjs` rewrote source references. A test forbids references to the dead CDN hosts and requires every referenced `/img/...` file to exist.
- **Every hero has a `-800.webp` variant** (test-enforced for neighborhoods). Static hero `<img>`: `srcset="{x}-800.webp 800w, {x}.webp 1280w" sizes="100vw" width="1280" height="715" fetchpriority="high" decoding="async"` + matching `<link rel="preload" as="image" imagesrcset imagesizes>`. `lib/heroSrc.ts` records which candidate the browser picked (`window.__staticHeroSrc`) so the React CSS-background hero reuses the same bytes (no double download).
- In-page section images: lazy `<figure>` with real `width`/`height` (no CLS), captions, never the LCP.
- Blog images < 100 KB (test), 16:9.
- OG image: 1200x630 JPEG on the same origin.
- Descriptive `alt` on every hero (city: "{City}, Ohio — {Business} service area").

### 5.11 Performance tricks (Core Web Vitals)

- **Static hero as LCP:** server-painted `<img fetchpriority="high">` inside `#static-hero`; min-height tuned per page type (`max(calc(100vh - 2px),720px)` for city/neighborhood/place, `650px` for service pages) so the React hero never paints larger (which would move LCP to after JS).
- **Critical CSS inline** in `<head>` inside `@layer crt-critical` (box-sizing, html/body background and margin, img display, heading margins) so Tailwind's preflight does not shift layout; test guards its syntax.
- **Non-blocking main stylesheet:** Vite plugin rewrites `<link rel="stylesheet">` to `<link rel="preload" as="style" onload="this.rel='stylesheet'">`.
- **Self-hosted variable fonts** (Oswald 400–700, DM Sans 400–700 + italic, Source Serif 4), `font-display: swap`, latin `unicode-range`, `<link rel="preload" as="font">` for the display font, plus **metric-matched fallback faces** (`size-adjust`, `ascent-override`, `descent-override`) to remove font-swap CLS. No Google Fonts connection.
- **Lazy gtag:** `gtag()` stub defined immediately (events queue); the ~330 KB gtag.js (Google Ads + GA4) loads 5 s after `load` via `requestIdleCallback`, or on first scroll/pointerdown/keydown/touchstart. Phone taps fire the Ads conversion via one delegated `click` listener on `a[href^="tel:"]`.
- **Lazy chat widget** (GoHighLevel) 6 s after load or on interaction; skipped on /lp/* and /app.
- Optional self-hosted Umami analytics appended only if env vars are set.
- `dns-prefetch` (not preconnect) for deferred third parties.
- Route-level code splitting (`lazyWithReload`, reloads once on chunk-load failure after a deploy); Home and LandingPage are eager; framer-motion features loaded on demand (`LazyMotion`); a bundle-guard test keeps heavy modules out of the entry bundle.
- `content-visibility:auto` on the static SEO section; sections below the fold wrapped in `WhenVisible`.
- /sos static layout mirrors the wizard (fixed a 0.28 CLS).

### 5.12 PWA manifest (`/manifest.json`)

`name`, `short_name`, `description`, `start_url "/"`, `display standalone`, `background_color`/`theme_color` (brand navy), `orientation portrait-primary`, icons 192 (any), 512 (any), 512 maskable, `categories ["business","utilities"]`. `/app` page captures `beforeinstallprompt` to show its own install button.

---

## 6. SEO rules encoded in the tests (`server/*.test.ts`, vitest)

### seoTitles.test.ts (site-wide contract over every sitemap URL)
- Sitemap count = 1 + 17 core + cities + 26 services + 12 auto-repair + blog posts + hub + neighborhoods + places hub + places + 2 reviews.
- `recentlyChangedUrls(3)` is non-empty and a strict subset; lastmod is `YYYY-MM-DD`, more than 2 distinct dates, specific pages have specific dates.
- Every sitemap image URL is on the site origin.
- **Title 20–60 chars** (one owner-exempt blog title), **max 2 separators** (` | `, ` — `, ` – `).
- **Description 70–155 chars.**
- **Titles unique; descriptions unique** across all routes.
- **Canonical** starts with `https://www.` and equals the sitemap loc (home has no trailing slash).
- **Exactly one H1** in every non-home crawlable body; **H1s unique** site-wide.
- Service H1 = `h1 ?? name`; city H1 = `cityH1(name)` containing `Towing {City} OH` exactly once; auto-repair H1 = heroTagline; fixed H1s for /sos and /quote.
- Brand patterns: service and blog metaTitles end with ` | Roadside Towing & Recovery Inc`; city title is exactly `Towing {City} OH | Roadside Towing & Recovery Inc`.
- JSON-LD: every block parses; **exactly one `#business` declaration and one LocalBusiness-typed node per page**; every `provider` is exactly `{"@id": "#business"}`.
- Every route: WebPage `#webpage` with `isPartOf #website`, `about #business`, `name` = title; non-home has `#breadcrumb`.
- FAQPage questions equal the data arrays for services, auto-repair, cities; every city has FAQs.
- City Service: serviceType "Towing service", areaServed City + geo + DefinedRegion ZIPs; no TowingService/LocalBusiness node.
- Priced services carry Offer + UnitPriceSpecification with exact rate-card numbers; per-job services carry none.
- BlogPosting: headline = title, ISO dates at 09:00 Eastern, author/publisher `#business`, isPartOf `#website`, mainEntityOfPage `#webpage`.
- **Exactly one FAQPage per route.**
- Crawlable bodies: services render every FAQ as `<details>`, every feature and process step, links to /sos, /quote (unless quote-by-dispatch), tel:, and /service-area/dublin; pricing block when priced; auto-repair renders every FAQ and what-we-do item; cities render every FAQ and 3–6 nearby city links and link /service-areas; every blog body contains `<article>` and is > 6,000 chars; /quote renders the rate card.
- robots.txt: no Crawl-delay, allows llms files, names AI crawlers, has Sitemap line. llms-full.txt covers every URL, has no HTML, has Q/A pairs, > 100k chars. llms.txt exists, links llms-full, quotes the exact rate card and every city/service/repair/blog URL.

### keywordMap.test.ts (one primary keyword per money page)
- Map: emergency towing, roadside assistance, flatbed towing, heavy duty towing, jump start, lockout service, winch out service, battery replacement, low profile towing -> their service pages. Each term must appear in the **title (<= 60)**, **H1**, **first 100 words after the H1**, and **at least one FAQ question** (hyphens = spaces).
- Home targets "tow truck" and "towing Columbus" in title, H1, home FAQ, first 100 words of the static block and the React services intro.
- The 8 core service pages link Lewis Center, Powell, Westerville, Worthington, Delaware under the "Areas We Serve" heading.

### schemaCoverage.test.ts
- Every static route in App.tsx is in the sitemap or intentionally noindex (LP paths, /404, /careers, /ask, /app, /park-garage-details).
- No duplicate or noindex URLs in the sitemap.
- Required types per page kind: services/cities/neighborhoods/auto-repair/places -> Service + FAQPage; /places, /services, /service-areas -> CollectionPage + ItemList; blog posts -> BlogPosting; /quote(+ev) -> Service; /blog -> CollectionPage + Blog; /about -> AboutPage; /contact -> ContactPage; /faq -> FAQPage. Every page has a page node and breadcrumb (except home); no page emits its own LocalBusiness.

### cityConsistency.test.ts
- Each city page component, each city FAQ answer and the crawlable body state **only that city's tier ETA**; the body does not repeat the meta description.
- Yard wording guard (never call it "far south side").
- Sitewide `areaServed` = Columbus + exactly every city page.
- Every sitemap route's server HTML links /about and /contact (footer), carries the PUCO/USDOT line, all services and the top cities.
- One business entity; no `#organization` references.
- Homepage FAQ questions are H3; every city states its ZIP codes on the page and in schema.

### Content-standard tests
- **neighborhoods.test.ts:** title <= 60; description 120–155; H1 = `Towing in {Name}, Columbus`; hero file + `-800` variant exist; intro 80–120 words; >= 6 FAQs, each answer 70–120 words; intro + FAQs >= 500 words; ETA = tier; no verify notes or unknown links in copy (links only to real routes); **every sentence (>= 5 words) unique across the whole site**; hub links every neighborhood; /service-areas links the hub; 4-level breadcrumb; FAQPage = visible text.
- **cityRewrites.test.ts** (16 rewritten cities): intro 80–120 words, >= 6 FAQs of 70–120 words, >= 500 words, tier ETA in intro, links only to real routes, the towed-car guide linked from at most 3 cities, no sentence reused from any other city page, intro and linked FAQs rendered on the React page.
- **places.test.ts:** nav/data/sitemap list the same pages; title <= 60; description 120–155; >= 6 FAQs; >= 800 words; key phrase in title, H1 and a FAQ question; affiliation disclaimer present; no sentence reused across places/city/service copy; links only to real pages and linked back from their cities and services; Service at the venue + FAQPage + BreadcrumbList matching visible FAQs; **every @type on every page is a real schema.org type**.
- **localAreas.test.ts:** every city has a guide with landmarks and roads; every item has a source; no detail sentence repeats across areas; guide rendered in React and server body and its places marked up; same for neighborhoods.
- **serviceRadius.test.ts:** yard geo = company geo; stored `distanceMi` matches the haversine from geo; no town beyond 25 miles without an explicit override.
- **seoMeta.test.ts:** meta injection for each page type (incl. `&amp;` escaping, OG replaced not duplicated, route-specific og:image, trailing slashes); thin-content floors (services > 210 words, auto-repair > 260, schema-less core routes > 300); no two content routes share an H1; real 404 behaviour (no meta -> 404; noindex; canonical and og:url dropped; body swapped).
- **landingPages.test.ts:** LPs not in sitemap; "free" never without its conditions next to it; personalization rules (no query = as written; city from keyword; Google location IDs; outer city never promised 20–40 min; only known cities printed; free tow stays Columbus); one page per keyword (unique eyebrow/H1/title); no prices.
- **liveAudit0927.test.ts:** no hard-typed counts in copy (counts come from data); every footer says "Fully licensed & insured" linked to the US Tow Alliance profile (new tab) and schema `sameAs` lists it; blog in-body FAQ text = FAQPage data; no H1 -> H3 jump before the first H2 in posts; blog images < 100 KB; FAQ questions are H3 on money pages (server and React).
- **reviews.test.ts:** rating handed to React and crawler; no velocity claims; **no AggregateRating/Review markup on any route**; static badge = rating only, linked to GBP.
- **callsCompleted.test.ts:** "100,000+ calls completed since 2020" never overstates the dispatch report and appears in #business description, static home block, About (server + React), home stats strip and llms.txt.
- **towingFaq.test.ts:** FAQ questions used exactly as written; no unfilled placeholders; prices quoted from the rate card; /faq FAQPage matches visible details word for word; homepage FAQ JSON-LD and static list generated from `HOME_FAQ`; index.html carries no hand-written FAQ text.
- **noDeadCdn.test.ts / bundleGuards.test.ts / criticalCss.test.ts:** no dead CDN references; referenced icons/images exist; slim nav stand-ins equal the real data; entry bundle stays light; critical CSS valid.

---

## 7. Other ranking contributors

- **NAP consistency + GBP match:** `name` in schema = Google Business Profile name; legal name and trade name in `legalName`/`alternateName`; one phone number everywhere (the audit removed legacy numbers); two addresses clearly labeled (public tow yard vs private corporate office). The GBP is linked by **CID URL** (`https://www.google.com/maps?cid=...`) in `sameAs`, `hasMap`, NAP block "View our location on Google Maps", contact page "Google Business Profile", and the rating badge.
- **Licensing / trust identifiers:** PUCO towing certificate and USDOT number in schema `identifier`, footer license line on every page, About fact grid, llms.txt. "Fully licensed & insured" linked to the **US Tow Alliance** member profile (also in `sameAs`). `foundingDate`, owner `Person` node.
- **Calls-completed stat:** exact figure from the dispatch report (104,003 as of 2026-09-27) shown on the home strip; rounded "100,000+ calls completed since 2020" in schema, About, static home, llms.txt; tested so it never overstates.
- **Two review sources, displayed but never marked up:**
  - **Google rating badge:** Google Places API (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`), refreshed every 6 h, fallback chain tracker feed -> hard-coded snapshot (4.8, 68 reviews). Shown in heroes ("Google Score: 4.8" linked to GBP) and About.
  - **Own review feed** (Blue Collar Tips public feed, refreshed every 3 h, committed JSON snapshot as fallback, merged with richer older data): powers `/reviews` scorecard (30-day average, five-star share, low ratings, driver leaderboard with points 5★=+2 ... 1★=-3), `/reviews/all` (every review, 8,500+ words of UGC), home "What customers are saying", and **city- and service-tagged review blocks** on those pages ("Reviews from {City} customers", "{Service} reviews"). Low ratings are included.
- **Published rate card** (`shared/pricing.ts`, `shared/servicePricing.ts`): en-route $4/mi, hook-up $125, $7/loaded mile, roadside flat $75, fuel $75 + fuel, winch $150/h, highway +$75, after-hours +$150, weekend +$50, large vehicle +$100, storage per day, card fee, phone scheduling fee waived online, veterans 10% off. Same numbers drive: service-page pricing boxes, Offer schema, /pricing ranges and worked examples (with Franklin County 8% tax), /quote and /quote/ev-tesla rate tables, the quote builder, FAQ answers, llms.txt. A "cheap tow near me" section answers price-shopping intent honestly.
- **Local knowledge content:** sourced local guides on 40 cities + 26 neighborhoods (+ Easton) with `containsPlace` markup; 27 events/places pages (stadiums, arenas, campuses, malls, airport, zoo, impound lot) cross-linked with cities and services; city ZIP lists from Census data; ETA tiers from actual geography; Ohio tow-law content (ORC 4513.601 private-property towing, impound recovery steps) on /faq, impound pages and the blog.
- **Internal linking system:** footer on every page (26 services + top 10 cities + 15 hubs); every city links all 26 services; services link 5–11 cities + places; neighborhoods link neighbours + hub; places link both ways with cities and services; nearby-city graph by geography; rich text `[label](/path)` links inside FAQ answers and intros (tests ensure only real routes).
- **Brand / partner capture pages:** `/excite-towing` (searches for a competitor whose towing they now run), `/great-lakes-ev` (partner EV repair shop), `/free-tow` and `/vip-program` (offers with Offer schema).
- **AI-search readiness:** llms.txt + llms-full.txt, explicit AI-crawler allows, speakable markup, Q/A-heavy pages (owner direction: "as many FAQs as we can write — AI search answers questions"), crawlable server HTML for non-JS crawlers.
- **Conversion signals:** sticky mobile call bar, floating call button, SOS GPS request, online quote builder with booking/payment, SMS consent wording, phone-tap conversion tracking.
- **Honesty guardrails that protect rankings:** no fabricated ratings/reviews (a fabricated 4.9/847 aggregateRating was removed in the earlier audit); claims only stated once data supports them; partner-shop disclosures on repair pages; "not affiliated with" disclaimers on venue pages; "verify" fields on every local fact for owner confirmation.

---

## 8. Build checklist for the sister site

Match coverage, not text. Minimum parity list:

1. **Data-first architecture:** React-free data modules for site meta, services, cities (meta + FAQs + intros + local guides + nearby graph), neighborhoods, places, blog metadata, landing pages, pricing; the server and React read the same modules.
2. **Server injection** of title/description/canonical/OG/Twitter/robots, per-route JSON-LD array, and a full per-route crawlable body inside `#root` markers; real 404 with noindex and no canonical.
3. **Page families:** home; ~26 service pages; ~12 secondary-vertical pages (auto repair or equivalent); one page per served city (with ZIPs, geo, ETA tier, distance, local guide, 6+ FAQs, nearby links); a main-city hub + neighborhood pages; an events/places hub + venue pages; blog; pricing, quote, FAQ, about, contact, service-areas (with ZIP table and `?q=` filter), SOS, reviews; legal pages server-rendered; noindex ad landers.
4. **Schema graph:** one `#business` (Organization + LocalBusiness + industry subtype + EmergencyService if 24-7), `#website` with SearchAction, `#owner`; per route WebPage + BreadcrumbList + Service/FAQPage/BlogPosting/ItemList as listed in 4.2; Offers from the real rate card; no self-serving AggregateRating.
5. **Sitemap** with real lastmod map and image entries; **robots** with AI-crawler allows; **llms.txt** generated from data; **llms-full.txt** from crawlable bodies; **IndexNow** daily ping and protected manual trigger.
6. **Redirect middleware:** apex -> www, trailing slash, lowercase, retired slugs, `/index.html`.
7. **Performance:** static hero `<img>` LCP with 800w/1280w WebP, preload swap per route, inline critical CSS in a cascade layer, non-blocking CSS, self-hosted fonts with metric fallbacks, delayed gtag/chat, code splitting.
8. **Tests** that encode section 6: title 20–60, description 70–155 (120–155 for city-like pages), unique titles/descriptions/H1s, one H1, one FAQPage, one business entity, keyword in title/H1/first 100 words/FAQ, ETA consistency, no repeated sentences across local pages, sitemap/noindex coverage, real schema.org types, no prices on ad landers.
9. **Trust content:** licence/registration identifiers, association profile links in `sameAs`, GBP CID link, calls-completed stat (verifiable), live review feeds shown visibly, published rate card.
