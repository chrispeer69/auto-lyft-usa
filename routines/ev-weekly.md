You are adding ONE electric-vehicle driver guide to the live Auto Lyft USA website, unattended, once a week (suggested slot: Wednesday 10 AM America/New_York, so it never lands on the Monday/Thursday guides-blog days). The owner wants the site's EV towing page (`/towing/ev-towing`) to gain fresh, linked EV content every week. Guides do NOT need approval. If every check in Step 5 passes, publish by pushing to `main` and email the owner a copy. If a check fails and you cannot fix it, do NOT publish: open a draft pull request and email the owner why.

Repos in this run:
- `chrispeer69/auto-lyft-usa`: THIS site (Astro 7 static, vanilla CSS, no framework JS). Railway builds `main` from the Dockerfile and serves https://www.autolyftusa.online, so whatever reaches `main` goes live.
- `chrispeer69/columbus-towing`: the sister site (Columbus Roadside Towing). Clone it shallow ONLY for the copy-overlap check and its EV slug list. Never edit it, never push to it, and never read its posts for wording. It runs its own weekly EV routine.

Read `CLAUDE.md` and `docs/WRITER_RULES.md` first; they are binding. Where this file is stricter, this file wins.

## How this series stays different from the sister site (hard)
- **Length:** 800–1,100 words of body text. Count it.
- **Shape:** a 2–3 sentence "The quick answer" section first, then short sections, at least one `bullets` checklist. No hero image (guides here have none).
- **Voice:** a dispatcher talking an EV driver through it: second person, short sentences, no story intros, no "Picture this", no "Whether you're".
- **Territory:** Auto Lyft covers the south and southwest of Columbus. Use local detail from that side where it is true: Harrisburg Pike/US-62, Grove City and Stringtown Road, Hilltop, Franklinton, Galloway, I-70 west, I-71 south, I-270 south, US-23 south, Obetz, Groveport, Rickenbacker.
- **Topic:** never one the sister site already covered in substance. List its EV posts with `grep -o 'slug: "[^"]*"' <clone>/client/src/lib/blogPosts.ts | grep -i -E 'ev|electric|tesla|rivian|lightning|ioniq|bolt|hybrid|charg'` and skip any match.

## Step 0: Should this run write anything?
1. `TZ=America/New_York date +%Y-%m-%d`.
2. Failure guard: `git fetch origin '+refs/heads/guide/*:refs/remotes/origin/guide/*'`, then `git branch -r --no-merged origin/main --list 'origin/guide/ev-*'`. If 3 or more are listed, write nothing, send a short email naming them ("3 EV guides failed their checks and are waiting for a fix"), and stop.
3. If an EV-weekly guide (catalog topic starting `[EV weekly]`) on `origin/main` has a `date` within the last 5 days, stop: this week is done.
4. Network check: `curl -sS -m 15 -o /dev/null -w '%{http_code}' https://afdc.energy.gov/` plus one WebFetch of an official page. Note whether pages open; it decides Step 2.

## Step 1: Pick the topic
List every guide in `src/data/guides/catalog.ts` on `origin/main` whose slug or topic mentions EV, electric, Tesla, Rivian, Mach-E, Lightning, Ioniq, EV6, Bolt, Equinox EV, Leaf, hybrid or charging. Never repeat one, even under a new slug. Season beats list order: cold-range and preconditioning in Dec–Feb, flood topics in spring, heat and battery care in Jun–Aug, road-trip charging before holidays.

Candidate slugs (slug: angle; main links):
1. `ev-dead-12-volt-battery-south-columbus`: the small battery that locks the car; jump points per manual; transport mode; `/towing/jump-start`.
2. `ev-out-of-charge-on-i-71-south`: what 0% means on the interstate, why a jump adds no range, getting to a working charger (verify current locations on afdc.energy.gov); `/towing/ev-towing`.
3. `tesla-tow-mode-and-transport-mode`: what each does, why it needs 12-volt power, why the driver needs your key; Tesla manual only.
4. `ford-mach-e-lightning-tow-instructions`: Ford manual only; if the manual cannot be opened, skip.
5. `hyundai-kia-ev-tow-instructions`: Ioniq 5/6 and EV6 manual guidance.
6. `gm-ev-tow-instructions`: Bolt, Equinox EV, Blazer EV per GM's manuals; quote exactly what your edition says.
7. `rivian-tow-and-weight`: Rivian's published transport guidance plus why weight decides the truck; skip if the source cannot be opened.
8. `flooded-ev-what-to-do-ohio`: never charge it, keep it outdoors and away from buildings, call the insurer; NHTSA/NFPA/maker sources.
9. `ev-flat-tire-no-spare`: tire sealant kits, why a flat often means a tow; `/towing/flat-tire-change`.
10. `ev-cold-snap-range-columbus`: real NWS Columbus temperatures plus fueleconomy.gov/DOE range guidance.
11. `ev-stuck-at-a-charger`: car won't unlock, start or release the cable; what to check first.
12. `ev-in-a-parking-garage-low-clearance`: dead EV with the parking lock on in a garage; dollies and skates; `/towing/parking-garage-towing`, `/towing/low-profile-towing`.
13. `ev-long-distance-tow`: why long runs go on the deck (Tesla caps wheel-lift plus dollies at 55 km, about 35 miles); `/towing/long-distance-towing`.
14. `used-ev-pre-purchase-tow-history`: questions to ask; how wrong towing hurts a drive unit.
15. `hybrid-towing-basics`: plug-in and full hybrids, two battery systems, all wheels up.
When the list runs out, invent a new EV topic in the same spirit that duplicates nothing.

## Step 2: Research (no invented facts)
- Official sources first: the maker's owner's manual or emergency response guide, NHTSA, NTSB, NFPA, USFA, afdc.energy.gov, fueleconomy.gov, weather.gov, transportation.ohio.gov, codes.ohio.gov. Every number, rule, date or local fact must come from a page you actually opened; note each URL. If it cannot be verified, leave it out.
- If pages cannot be opened: write a general-advice topic with no statistics, laws, dates or manufacturer quotes, and say so in the email.
- Never invent customer stories, quotes, call counts, ratings, response minutes or "we towed X EVs".

## Step 3: Write the guide
Create `src/data/guides/content/<slug>.ts` exactly like the existing guides (`export default { title, metaTitle, description, date, readMinutes, excerpt, body, faqs } satisfies Omit<Guide, "slug">`; types in `src/data/types.ts`). Add `{ slug, topic: "[EV weekly] <one-line topic>" }` at the TOP of `GUIDES` in `src/data/guides/catalog.ts`. The `[EV weekly]` tag is how this routine and `routines/guides-blog.md` tell the series apart.
- `metaTitle` ≤ 44 characters and unique; `title` (the H1) worded differently; `description` 120–155 characters with **no `$` figures**, ending with "(614) 633-8163." where it fits; `date` today (YYYY-MM-DD); `readMinutes` at about 200 words a minute.
- 3–4 `faqs`, answers 1–3 sentences.
- **Forward links** (`[label](/path)`, only pages that exist): `/towing/ev-towing` twice, once in the first section; 1–3 of `/towing/flatbed-towing`, `/towing/wheel-lift-towing`, `/towing/jump-start`, `/towing/low-profile-towing`, `/towing/long-distance-towing`, `/towing/parking-garage-towing`, `/towing/accident-towing`, `/estimate/ev`, `/rates`; 1–2 south or southwest area pages (`/areas/<slug>-oh` from `src/data/cities/content`, or `/areas/columbus-oh/<hood>`); 2 earlier EV guides (`/guides/towing-an-electric-car`, `/guides/storing-a-damaged-ev-after-a-crash` or newer ones).
- **Back links:** in `src/data/services/content/ev-towing.ts`, keep a `sections` entry headed "New EV guides from our dispatch desk"; create it on the first run, placed just before "Models we tow often, and what to know about each". Its `paragraphs` hold one short line; its `bullets` list the newest EV-weekly guides as `[Title](/guides/<slug>): one sentence`, newest first, at most 6 (drop the oldest at 6). Also add one natural sentence linking the new guide from ONE earlier related EV guide; change nothing else in that guide.
- **Company truth (hard):**
  - Phone (614) 633-8163 only. Name: Auto Lyft USA.
  - Prices only from `src/data/rates.ts` (EV card: `EV_RATES`); otherwise say dispatch quotes the full price before the truck rolls. Never invent a fee, discount or offer. Veterans 10% off with ID is the only discount.
  - Timing: "the dispatcher gives a live estimate". Never minutes, never ETA promises.
  - No truck counts beyond the "four light-duty flatbed carriers" already on the site, no weights, certifications, ratings or "bonded/insured" claims.
  - **EV method:** every EV moves with all four wheels off the ground, on a flatbed or on a wheel-lift with dollies, as that model's owner's manual directs. Tesla recommends a flatbed and allows a wheel-lift with dollies for at most 55 km (about 35 miles), so long runs go on a flatbed. NEVER write "flatbed only" as our general practice.
  - **Storage:** never claim walls, cameras, monitoring or separation distances for our own yard. Damaged-EV storage facts come only from cited sources (NTSB SR-20/01, NHTSA DOT HS 811 576, the 2025 IAFF/USFA guide, maker ERGs). Barriers limit fire spread; never say a wall prevents an explosion.
  - Heavy-duty work goes through an unnamed partner; never name it.
  - Fire, smoke, hissing or popping from a battery, an injury, or a car in a live lane: call 911 first.

## Step 4: Lastmod
In `src/data/lastmod.json` `paths`, add `"/guides/<slug>": "<today>"` and set `"/guides"`, `"/towing/ev-towing"` and the earlier guide you linked from to today. Do NOT run `npm run lastmod` here (a shallow cloud clone would rewrite every date).

## Step 5: Verify (publish gate: every item must pass)
1. `npm ci`.
2. Overlap on the data files: `SISTER_SRC=<clone>/client/src node scripts/check-overlap.mjs --files src/data/guides/content/<slug>.ts src/data/services/content/ev-towing.ts` must report 0 shared 8-word runs. Reword until it does.
3. `npm run build` passes (titles, descriptions, H1s, schema, links).
4. `SISTER_SRC=<clone>/client/src npm run check:overlap` reports 0 shared 8-word runs across ALL pages, and your new text repeats no sentence from our own pages. If an older page shows a run because the sister site changed, reword that phrase on our page too.
5. `npm run audit:seo`: 0 errors and 0 warnings.
6. `dist/guides/<slug>.html` has your H1, a `BlogPosting` node, a `FAQPage` node with every question, canonical `https://www.autolyftusa.online/guides/<slug>` and the body text; `dist/towing/ev-towing.html` links the new guide; `dist/sitemap.xml` lists the guide with today's date.
7. Self-review grep on your diff: "flatbed only", "flatbed-only", "guarantee", "#1", "best in", "premier", "bonded", "insured", minutes-based timing, any `$` in a description, any phone number but (614) 633-8163, any price not in `rates.ts`.
8. Body word count is 800–1,100.

## Step 6: Publish (all checks passed)
- Branch `guide/ev-<slug>` from `origin/main`; commit "Guide (EV weekly): <title>" with the source URLs in the body, ending with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`; push the branch.
- `git fetch origin main && git rebase origin/main` (on a conflict in `catalog.ts`, `lastmod.json` or `ev-towing.ts`, keep both sides, rebuild, rerun 5.2–5.4), then `git push origin HEAD:main`. Never force-push. Retry up to 3 times, then go to Step 6-FAIL.
- After about 4 minutes, poll `https://www.autolyftusa.online/guides/<slug>` until it returns 200 (up to 10 minutes), confirm the H1 is in the live HTML, and confirm the live `/towing/ev-towing` links it.
- `npm run indexnow` (it pings Bing/Yandex with pages whose lastmod is in the last 3 days; key file `public/bfd1e370ded6e766059fd039d6967140.txt`). Record the HTTP status; a network failure is not a publish failure.
- Google: Search Console "Request indexing" cannot run from a cloud routine. List the guide URL and `/towing/ev-towing` in the email for the owner to request. There is no ChatGPT submission; do not claim one.

## Step 6-FAIL: Draft only
Push branch `guide/ev-<slug>`, open a PR into `main` titled "EV weekly draft (failed checks): <title>" that lists exactly which checks failed, ending with: 🤖 Generated with [Claude Code](https://claude.com/claude-code). Do NOT push to `main`.

## Step 7: Email (Gmail connector)
ONE email to chrispeer69@yahoo.com, plus only these addresses (the owner alone may change this list): [EXTRA_RECIPIENTS: none].
- Published: subject "Auto Lyft USA EV guide is live: <title>". Body: the live URL first as a plain link (never GitHub); the guide text as readers see it (links as "text (URL)" with live URLs); a Facebook post for Auto Lyft USA (50–90 words, one tip, the live URL and (614) 633-8163, at most 2 hashtags), worded unlike anything the Columbus Roadside routine would send; the IndexNow status; the two URLs to request in GSC; the sources. Last line: "To change or take down this guide, just tell Claude."
- Failed: subject "Auto Lyft USA EV guide not published: <title>": what failed, that nothing went live, that Claude can fix it on request, then the draft.
- Skipped: one short paragraph saying why.

## Final message (plain language)
Title, slug, why the topic was picked, word count, forward and back links added, whether sources could be opened, every check result, whether it is live, the IndexNow status, whether the email went out, the Facebook post, and anything left out because it could not be verified.
