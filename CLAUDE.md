# Auto Lyft USA — website (read this first)

Sister site to Columbus Roadside Towing (`../Columbus Roadside Towing/Website Files`). Goal: match its page coverage, schema and SEO **without copying any of its text**, so both sites can rank in Columbus.

## Status (2026-10-13)
- **Build complete:** 177 pages (161 indexable). SEO contract passes. **0 shared 8-word runs** with the sister site.
- **Waiting on the owner** (see `docs/INPUTS_REQUIRED.md`): PUCO/USDOT numbers, photos, hosting choice, Google Business Profile, a decision on /free-tow, /vip-program and /reviews, a review of facts and policy wording the writers added, and a real-phone mobile check.

## Key docs
- `docs/BUILD_PLAN.md`: phases and progress, plus how this site deliberately differs from Roadside.
- `docs/reference-audit.md`: full SEO/schema/page spec of the Roadside site (the build target).
- `docs/WRITER_RULES.md`: rules every content writer follows (facts, formats, originality).
- `docs/INPUTS_REQUIRED.md`: open questions for the owner.
- `docs/seed/columbus-facts.json`: sourced local facts (ZIPs, geo, landmarks). Facts only; reword every sentence.

## Commands
- `npm run build`: builds `dist/`, then runs `scripts/check-seo.mjs` (fails on bad titles/descriptions, duplicate H1s, schema problems or broken links; writes sitemap.xml, llms.txt and llms-full.txt).
- `npm run check:overlap`: compares built pages to the sister site's source. **Must report 0.** `node scripts/check-overlap.mjs --files <file.ts>` checks a data file before building.
- `npm run audit:seo`: deep per-page SEO audit of `dist/` (head tags, social cards, headings, images, links, schema, sitemap, orphans, click depth). Run after a build; should report 0 errors and 0 warnings.
- `node scripts/optimize-photos.mjs <folder>`: turns real photos into `public/img/*.webp` (+ `-640` copies). Keep the file names in `src/data/photos.ts`.
- `npx astro preview --port 4329`: preview the site locally.
- `npm run indexnow`: ping search engines after deploy (key file in `public/`).

## Layout
- Stack: Astro 7 static site, vanilla CSS (`src/styles/global.css`), no framework JS.
- Facts: `src/data/company.ts` (NAP; null fields hidden until confirmed) and `src/data/rates.ts` (same rate card as Roadside, by owner's choice).
- Content: typed data files in `src/data/{services,cities,columbus,places,repair,guides}/content/*.ts` (types in `src/data/types.ts`).
- Templates: `src/pages/**`. Schema graph: `src/lib/schema.ts`; one `@graph` per page, injected in `src/layouts/Base.astro`.
- URLs: `/towing/x`, `/areas/<town>-oh`, `/areas/columbus-oh/<hood>`, `/local/x`, `/repair/x`, `/guides/x`, `/rates`, `/estimate`, `/questions`, `/go/x` (noindex ad landers).

## Business facts (only claim these)
Auto Lyft USA Inc., owner Lisa Peer, founded 2024, 1620 Harrisburg Pike, Columbus OH 43223 (same yard as Roadside; owner accepted the map-pack risk). Phone (614) 633-8163, lisa@autolyftusa.online, domain autolyftusa.online. 24/7, four light-duty flatbeds, AmeriSure insurance. Never invent response times, ratings, call counts or licence numbers.
