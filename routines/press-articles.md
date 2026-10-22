You are writing and sending ONE week's local newspaper articles for Auto Lyft USA Inc, unattended. The owner, Chris Peer, set this up on 2026-10-22: "Target is anyone who will publish it - and give us credit for writing it", "Use both companies on separate lists". The sister company Roadside Towing & Recovery Inc (Columbus Roadside Towing) has its OWN routine and its OWN outlet list; never send to its outlets, and never write about the same subject it is likely to send this week (see Step 1).

## The outlet list (only the owner may change it)
Send only to these. Never add, guess or look up other addresses.
[OUTLETS:
- The Sun Hilltop (West Side of Columbus, community paper) — Info@thesunhilltop.com — rules: community news and photos; max ~650 words
]
[MANUAL_OUTLETS (web form only; never submit forms yourself — put the ready-to-paste version in the owner summary):
- Circleville Herald (Pickaway County) — https://www.circlevilleherald.com/site/forms/online_services/submit_news/
]
[EXTRA_OUTLETS: none]

## Step 0 — Mode, opt-outs, history
1. Today: `TZ=America/New_York date +%Y-%m-%d`.
2. Mode: if today is on or before [DRAFT_UNTIL: 2026-10-28], this is a REVIEW week: create Gmail drafts only (Step 4), send nothing to outlets. After that date, SEND mode.
3. Opt-outs (do this every run, with the Gmail connector's search tool): for each outlet address, search mail FROM that address. If any reply declines or asks to stop ("no thanks", "stop", "unsubscribe", "remove", "not interested", "we don't run", "don't send"), skip that outlet this week and every week, and list it in the summary as opted out. If a reply asks a question, accepts, asks for a photo, asks whether AI was used, or anything else needing a human, do NOT reply; quote it (one line) in the summary for the owner and still send this week unless it was a decline.
4. History: search sent mail for previous weeks' Auto Lyft articles (subject starts "Free local article:" and the body has the Auto Lyft USA byline) to see past topics. Never repeat a topic or an outlet's previous angle.

## Step 1 — Topic
Pick a timely, genuinely useful driver-safety / car-care subject for Central Ohio this week (weather, holidays, school calendar, daylight saving, seasonal hazards). NOT a sales piece. Prefer the west and south side angle (Hilltop, Franklinton, West Broad St, I-70 west, I-270 southwest, Georgesville Rd, Grove City, Pickaway County, US-23 south to Circleville, SR-104). Do not pick the subject of the newest guide on autolyftusa.online/guides (`src/data/guides/catalog.ts` on origin/main) or the newest post on columbusroadsidetowing.com/blog, and pick a different subject from what the Roadside routine would choose this week (it leans to north-side roads); this must not duplicate either website.

## Step 2 — Research (no invented facts)
Same standard as `routines/guides-blog.md` Step 2: every specific number, law, date or local fact must come from an official page you actually opened (ODOT, codes.ohio.gov, weather.gov, county sheriff/engineer, city sites, vehicle makers). If pages cannot be opened, write only practical, widely known guidance with no statistics, laws or dates, and say so in the summary.

## Step 3 — Write one version per outlet
- One core topic, but a separate version for EACH outlet: its own headline, its own opening that names that outlet's area and roads, and local details for that area. No paragraph may be copied between versions, from this site's guides (`src/data/guides/content/`), or from earlier weeks.
- Length: within the outlet's limit above (400–600 words; different length from the Roadside articles).
- Tone: neighborly, practical, plain language. No prices, no phone numbers in the body, no "call us", no superlatives, no guarantees. The company is named only in the byline and the bio.
- Byline at the top: "By Auto Lyft USA"
- Bio at the end (one line): "Auto Lyft USA is a 24/7 towing company based on Harrisburg Pike on Columbus's southwest side. autolyftusa.online"
- Business-fact rules from `CLAUDE.md` and `docs/WRITER_RULES.md` apply in full. Safety items (injury, child or pet locked in a car, car in a live lane, storm emergency) say call 911 first.

## Step 4 — Send (or draft)
For each outlet not opted out, ONE email:
- To: the outlet address. Subject: "Free local article: <headline>".
- Body: a short note (3–5 sentences), then the article below it as plain text. The note says: this is a free article for <outlet>'s readers about <topic>, written for <area>; they may run or edit it at no cost; we only ask that the byline and the one-line bio stay; it has not been published elsewhere; a new one can come every week if useful; and the last sentence is exactly: "If you'd rather not receive these, just reply 'no thanks' and I'll stop."
- Signature: "Auto Lyft USA / (614) 633-8163 / 1620 Harrisburg Pike, Columbus, OH 43223"
- If an editor ever asks whether AI helped write it, the answer is yes (owner reviews them); never claim otherwise. You never reply to editors yourself; flag it for the owner.
- REVIEW mode: use the Gmail create-draft tool for each email instead of sending.
- SEND mode: use the Gmail send tool.
- If the Gmail tool fails for an outlet, say so in the summary; do not retry more than twice.

## Step 5 — Summary to the owner
One email to chrispeer69@yahoo.com, subject "Weekly news articles (Auto Lyft USA): <topic>". Plain language: mode (drafts waiting in Gmail vs sent), which outlets got it, which opted out, any editor replies that need him (quoted), the topic and why now, sources used, the full text of each version, and the ready-to-paste version for each MANUAL_OUTLETS form. Last line: "To change the outlet list or stop these, just tell Claude." No GitHub links.

## Final message
Same facts as the summary, briefly.
