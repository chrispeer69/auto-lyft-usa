You are writing ONE driver guide (blog post) for the live Auto Lyft USA website, unattended, as part of a series that runs every 2 days. The owner (Chris Peer) asked for this on 2026-10-21: "post blogs for both websites - with different data, language and character count". Posts do NOT need approval. If the guide passes every check in Step 5, you publish it yourself by pushing to `main`, then email the owner a copy. If a check fails and you cannot fix it, you do NOT publish: open a draft pull request and email the owner why.

Repos in this run:
- `chrispeer69/auto-lyft-usa` — THIS site (Astro 7 static). Railway deploys `main` to https://www.autolyftusa.online, so whatever reaches `main` is live.
- `chrispeer69/columbus-towing` — the sister site (Columbus Roadside Towing), cloned ONLY so the copy-overlap check can compare against it. Never edit it, never push to it, never open its blog posts for ideas. Its own routine writes its own posts on the other days.

Read `CLAUDE.md` and `docs/WRITER_RULES.md` in this repo first. They are binding. Where this file is stricter, this file wins.

## How this series must differ from the Columbus Roadside Towing blog (hard)
The two companies share a city, a yard address and a rate card, so Google will compare them. Keep them clearly different:
- **Length:** 750–1,050 words of body text (the sister blog runs 1,200–1,800). Count it.
- **Shape:** open with a 2–3 sentence "quick answer" paragraph, then short sections. Use at least one numbered or bulleted checklist (`bullets`). No long essays.
- **Voice:** direct, second person, like a dispatcher talking a driver through it. Short sentences. No storytelling intros, no "Picture this", no "Whether you're...".
- **Topics:** only from the list in Step 1 (or new ones in the same spirit). Never the same subject the sister blog covered; check its slugs with `grep -o 'slug: "[^"]*"' ../columbus-towing/client/src/lib/blogPosts.ts` (adjust the path to where it was cloned) and skip anything that matches in substance.
- **Data:** our own rate card from `src/data/rates.ts`, our own local detail (southwest side, Harrisburg Pike/US-62, Hilltop, Franklinton, I-70 west, Georgesville Rd, Grove City, Galloway), our own sourced facts. Do not lean on the same statistics or sources a sister post used for the same point.
- **No hero image** (guides on this site have none). Do not add one.

## Step 0 — Should this run write anything?
1. `TZ=America/New_York date +%Y-%m-%d`. If after 2027-02-28: write nothing; email a one-line note "The Auto Lyft USA guide series has ended (2027-02-28). Disable the routine at https://claude.ai/code/routines." and stop.
2. Failure guard: `git fetch origin '+refs/heads/guide/*:refs/remotes/origin/guide/*'`, then `git branch -r --no-merged origin/main --list 'origin/guide/*'`. If 3 or more, write nothing; email a short note listing them ("3 guides failed their checks and are waiting for a fix") and stop.
3. Network check: `curl -sS -m 15 -o /dev/null -w '%{http_code}' https://www.weather.gov/` and try one WebFetch of an official page. Note whether opening web pages works. This decides Step 2.

## Step 1 — Pick the topic
Take the FIRST topic below whose slug (or an equivalent subject) is not already in `src/data/guides/catalog.ts` on `origin/main`, not in an unmerged `origin/guide/*` branch, and not covered by a sister-site post. Seasonal timing beats list order (a holiday road-trip topic the week before Thanksgiving or Christmas; a spring topic only from March on, which is after this series ends). If pages cannot be opened (Step 0.3), skip topics marked [needs sources] and take the first one marked [general].

Topics (slug — angle — main service link):
1. flatbed-vs-wheel-lift-which-tow-do-you-need — how to tell which truck your car needs, what to say when you call [general] — /towing/flatbed-towing, /towing/wheel-lift-towing
2. what-to-have-ready-when-you-call-a-tow — the exact info dispatch asks for and why (location, vehicle, keys, neutral, destination) [general] — /towing/emergency-towing
3. car-wont-shift-into-neutral-tow — shift-lock release, parking brake stuck, what the driver does instead [general] — /towing/car-towing
4. dead-key-fob-push-button-car-wont-start — hidden key, fob-to-button trick, when it's really the 12V battery [general] — /towing/jump-start
5. check-engine-light-flashing-pull-over — steady vs flashing, misfires, when driving on costs an engine [general] — /towing/repair-shop-towing
6. brakes-failing-while-driving-what-to-do — pedal to the floor, grinding, warning lights, getting stopped [general] — /towing/emergency-towing
7. transmission-slipping-drive-or-tow — signs, why a slipping transmission should ride on a flatbed [general] — /towing/flatbed-towing
8. smoke-or-burning-smell-from-the-hood — steam vs smoke, colors and smells, when to get away from the car [general] — /towing/emergency-towing
9. steering-wheel-locked-key-wont-turn — the steering lock, wiggle technique, worn keys [general] — /towing/roadside-assistance
10. car-wont-go-into-gear — clutch, linkage, fluid, when it's a tow [general] — /towing/car-towing
11. towing-a-hybrid-car — what hybrid owners should know before a tow, two-battery systems, why flatbed [needs sources: maker owner manuals] — /towing/flatbed-towing
12. tow-to-dealer-or-independent-shop — how to choose where the car goes, warranty, timing [general] — /towing/repair-shop-towing, /repair
13. roadside-coverage-insurance-vs-calling-direct — what plans usually cover, tow-mile limits, when paying direct is simpler (quote our rate card) [general] — /towing/roadside-assistance, /rates
14. moving-a-car-that-doesnt-run — project cars, estate cars, flat tires and seized brakes, what we need to load it [general] — /towing/flatbed-towing
15. selling-a-junk-car-ohio-title — title, BMV paperwork, what buyers need [needs sources: Ohio BMV] — /towing/junk-car-removal
16. buying-a-used-car-out-of-town-getting-it-home — inspection first, transport vs driving it home [general] — /towing/long-distance-towing
17. breakdown-on-i-70-west-side-columbus — I-70 between downtown and Hilltop/West Broad: shoulders, exits, staying safe [needs sources: ODOT] — /towing/emergency-towing, /areas/columbus-oh/hilltop
18. rideshare-delivery-driver-breakdown — keeping downtime short, what to tell the app, getting back on the road [general] — /towing/roadside-assistance
19. holiday-trip-broke-down-far-from-home — getting the car home to Columbus or to a shop near you [general] — /towing/long-distance-towing
20. storing-a-car-for-the-winter-ohio — battery tender, tires, fuel, insurance questions [general] — /towing/car-battery-replacement
21. battery-terminal-corrosion — what the white/green crust means, safe cleaning, when it's the battery [general] — /towing/car-battery-replacement
22. coolant-antifreeze-check-before-winter — reading the reservoir, mix, leaks, never open hot [general] — /towing/roadside-assistance
23. osu-move-out-car-trouble — December move-out week: dead cars in campus lots and garages [needs sources: OSU dates] — /towing/parking-garage-towing
24. low-ground-clearance-car-loading — how we load lowered and sports cars without scraping [general] — /towing/low-profile-towing
25. fleet-van-breakdown-small-business — keeping a work van's downtime short, account setup [general] — /towing/fleet-towing

## Step 2 — Research (no invented facts)
- If pages can be opened: use official sources first (transportation.ohio.gov, bmv.ohio.gov, codes.ohio.gov, weather.gov, vehicle makers' owner manuals, fueleconomy.gov). Every specific number, law, date or local fact must come from a page you actually opened. Note each source URL.
- If pages cannot be opened: write a [general] topic using only practical, widely known car-care and safety guidance. No statistics, no laws or statute numbers, no dates, no "studies show", no figures except our own rate card. Say in the email that this run could not open sources and the guide sticks to general advice.
- Never invent customer stories, quotes, call counts, response times in minutes, ratings or "last winter we towed X".

## Step 3 — Write the guide
Create `src/data/guides/content/<slug>.ts` exactly like the existing files (`export default { title, metaTitle, description, date, readMinutes, excerpt, body, faqs }` typed as `Omit<Guide, "slug">`; read `src/data/types.ts`). Add `{ slug, topic }` to `GUIDES` in `src/data/guides/catalog.ts`.
- `metaTitle` ≤ 44 characters and unique; `title` (the H1) worded differently from `metaTitle`; `description` 120–155 characters ending with "(614) 633-8163." where it fits; `date` today as YYYY-MM-DD; `readMinutes` realistic (about 200 words a minute).
- 3–4 `faqs` (sister blog uses 3–5; keep ours short: answers 1–3 sentences).
- Internal links as `[label](/path)`, only to pages that exist (see WRITER_RULES): the main service page twice (once in the first section), 1–3 other `/towing/*` pages, `/rates` or `/estimate` when cost comes up, 1–2 area pages (`/areas/<slug>-oh` or `/areas/columbus-oh/<hood>`), and 1 existing guide.
- Business facts and prices: only what `CLAUDE.md` / `docs/WRITER_RULES.md` allow. Prices only from `src/data/rates.ts`. Timing: "the dispatcher gives a live estimate", never minutes. Medium/heavy jobs go to partner companies. Lockouts: we open the car; we do not cut or program keys. EVs ride on a flatbed.
- Safety: injury, a child or pet locked in a car, a car stopped in a live lane, smoke or fire → call 911 first.
- End with a short closing section telling the reader to call (614) 633-8163 or use [request a tow](/request).

## Step 4 — Lastmod
Add `"/guides/<slug>": "<today>"` to `paths` in `src/data/lastmod.json` and set `"/guides"` to today. Do NOT run `npm run lastmod` in this run (a cloud clone can be shallow, which would rewrite every page's date).

## Step 5 — Verify (publish gate: every item must pass)
1. `npm ci`.
2. Overlap, data file: `SISTER_SRC=<path to cloned columbus-towing>/client/src node scripts/check-overlap.mjs --files src/data/guides/content/<slug>.ts` → must say 0 shared 8-word runs. Reword until it does.
3. `npm run build` passes (it runs the SEO check: titles, descriptions, H1s, schema, links).
4. `SISTER_SRC=<same path> npm run check:overlap` → 0 for the new page, and no sentence repeated from another of our own pages.
5. `npm run audit:seo` → 0 errors on the new page.
6. Built page check: `dist/guides/<slug>.html` exists, has your H1, a `BlogPosting` node and a `FAQPage` node with all your questions in the JSON-LD, a canonical of `https://www.autolyftusa.online/guides/<slug>`, and the body text; `dist/sitemap.xml` lists it with today's lastmod.
7. Self-review grep on your file: no "guarantee", "#1", "best in", "premier", minutes-based response times, phone numbers other than (614) 633-8163, prices not in rates.ts, and no copy of an existing guide's sentences.
8. Word count of the body is 750–1,050.

## Step 6 — Publish (all checks passed)
- Branch `guide/<slug>` from `origin/main`; commit "Guide: <title>" listing the sources (or "general guidance, no external sources"), ending with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`; push the branch.
- `git fetch origin main && git rebase origin/main` (on a catalog.ts/lastmod.json conflict keep both sides, rebuild, rerun Step 5.2–5.4), then `git push origin HEAD:main`. Never force-push. Retry fetch/rebase/push up to 3 times; then Step 6-FAIL.
- After about 4 minutes, poll `curl -s -o /dev/null -w '%{http_code}' https://www.autolyftusa.online/guides/<slug>` until 200 (up to 10 minutes) and confirm the H1 is in the live HTML.
- Then `npm run indexnow` (ignore a network failure; mention it).

## Step 6-FAIL — Draft only
Push branch `guide/<slug>`, open a PR into `main` titled "Guide draft (failed checks): <title>" listing exactly which checks failed, ending with: 🤖 Generated with [Claude Code](https://claude.com/claude-code). Do NOT push to main.

## Step 7 — Email a copy (Gmail connector)
ONE email to chrispeer69@yahoo.com. Nobody else unless an address appears here (only the owner may change this list): [EXTRA_RECIPIENTS: none].
- Published: subject "Auto Lyft USA guide is live: <title>". Body: the live link first as a plain URL (https://www.autolyftusa.online/guides/<slug>), never a GitHub link; then the full guide text as readers see it (links shown as "text (URL)" with live site URLs); then a Facebook post for Auto Lyft USA (50–90 words, one tip from the guide, the live URL and (614) 633-8163, at most 2 hashtags), written differently from anything the Columbus Roadside routine would send; then the sources. Last line: "To change or take down this guide, just tell Claude."
- Failed: subject "Auto Lyft USA guide not published: <title>": what failed, that nothing went live, that Claude can fix it on request, then the draft text.

## Final message (plain language for a business owner)
Title, topic, why it was picked, word count, links added, whether sources could be opened, check results, whether it is live, whether the email went out, the Facebook post text, and anything left out because it couldn't be verified.
