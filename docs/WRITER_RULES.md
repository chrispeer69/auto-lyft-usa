# Writer rules — Auto Lyft USA site

Project root: `C:\Users\chris\OneDrive\Desktop\Website Files\Auto lyft USA` (Astro). Content lives in typed data files under `src/data/**`; templates in `src/pages/**` render them. Read `src/data/types.ts` for every shape.

## The #1 rule: original text
A sister company (Columbus Roadside Towing) has a site covering the same pages. Google filters copied text, so **no sentence may echo that site**, and pages on this site must not echo each other.
- After writing each file: `node scripts/check-overlap.mjs --files <your files>` → must say **0 shared 8-word runs**. Reword until it does. Never open the sister site's source.
- Don't reuse sentences or sentence templates across your own pages, or from existing content files in this project (vary openings, structure and questions page to page).

## Business facts (claim only these)
- Auto Lyft USA Inc., owner **Lisa Peer**, founded **2024**, Ohio company.
- Yard: **1620 Harrisburg Pike (US-62), Columbus, OH 43223**, southwest side, a few minutes from I-70, I-71 and I-270.
- Phone **(614) 633-8163**, email **lisa@autolyftusa.online**. Dispatch 24-7/365.
- Fleet: **four light-duty flatbed carriers plus wheel-lift trucks** (count not confirmed; never state one), and wheel dollies. Flatbed is the default for AWD, EVs, wrecks, low and high-value cars; wheel lift for tight spots, low garages and short moves. Trucks are positioned around Columbus and dispatch sends the nearest; the office/yard is 1620 Harrisburg Pike, and en-route miles on the rate card are still counted from the yard. Medium/heavy jobs go to partner heavy-wrecker companies; we coordinate.
- Commercial towing insurance (AmeriSure). Member of the US Tow Alliance.
- Published rate card (`src/data/rates.ts`): en-route $4/mi from the yard, hook-up $125, $7 per loaded mile; roadside flat $75 (jump, lockout, tire change, battery call); fuel $75 + fuel at 3× pump price; winch-out $150/hr; highway +$75; 10 PM–6 AM +$150; weekend +$50; large vehicle +$100; storage $45/day; EV card: $2.50/mi en-route, $150 hook-up, $7.50/loaded mile, highway +$100, storage $75/day; veterans 10% off with ID; 3% card fee online; Ohio sales tax by pickup county. You may quote these. Never invent other prices.
- **Never invent**: response times in minutes, review counts/ratings, call volumes, years of experience beyond "since 2024", certifications, licence numbers, named clients, guarantees, "#1/best". Timing → "the dispatcher gives a live estimate". 
- Repair: we are NOT a repair shop. We tow to the customer's shop or suggest an independent partner shop that diagnoses, quotes and repairs.

## Facts about places
Use `docs/seed/columbus-facts.json` (`localAreas[<slug>]`) for sourced local facts, but **reword every detail** (those sentences come from the sister site). Add only facts you are certain of. If unsure, leave it out. No invented exit numbers, dates, addresses, clearances or statistics.

## Format rules (checked by the build)
- Full `<title>` = your title + " | Auto Lyft USA" (16 chars) → your **title must be ≤ 44 chars** (and the full title ≥ 20). Unique site-wide.
- description **120–155 chars**, unique, normally ending with "(614) 633-8163."
- h1 unique site-wide, different wording from the title.
- Internal links inside copy: `[label](/path)`. Only link to pages that exist: `/towing/<slug in src/data/services/catalog.ts>`, `/areas`, `/areas/<city slug>-oh` (slugs in `src/data/cities/catalog.ts`), `/areas/columbus-oh`, `/areas/columbus-oh/<hood slug>` (`src/data/columbus/catalog.ts`), `/local`, `/local/<slug>` (`src/data/places/catalog.ts`), `/repair`, `/repair/<slug>` (`src/data/repair/catalog.ts`), `/guides`, `/guides/<slug>` (`src/data/guides/catalog.ts`), `/rates`, `/estimate`, `/request`, `/contact`, `/about`, `/questions`.
- Write "24-7", never "24-7" (owner's style, 2026-10-22).
- Plain, confident, local voice. No hype ("premier", "top-notch"), no emojis.

## Finish
1. `npx astro build` in the project root (others may build at the same time; if it fails on someone else's file, wait and retry).
2. `node scripts/check-seo.mjs 2>&1 | grep -v "broken link"` → fix any error on YOUR pages (title/description length, duplicates, H1, FAQ count).
3. Edit only your own files. Put any scratch scripts in a uniquely named folder in your scratchpad.
4. Reply briefly: files written, word counts, overlap result, any fact you added that the owner should verify.
