# Inputs needed from the owner before launch

Things the site leaves out (or flags) until confirmed. Each one is a single edit, mostly in `src/data/company.ts`.

| # | Item | Why it matters | Where it goes |
|---|---|---|---|
| 1 | **PUCO towing certificate number** for Auto Lyft USA Inc. | Trust signal; schema `identifier`; footer licence line | `COMPANY.pucoNumber` |
| 2 | **USDOT number** | Same | `COMPANY.usdotNumber` |
| 3 | **Google Business Profile** (CID or maps link), once created | Ties the site to the map listing (`sameAs`, `hasMap`) | `COMPANY.googleMapsCid` |
| 4 | **Facebook / social profiles** | `sameAs` | `COMPANY.facebook` |
| 5 | **Verify the US Tow Alliance profile URL** (`/company/10602/` assumed) | Footer link + `sameAs` | `COMPANY.allianceProfile` |
| 6 | **Real photos** (trucks, yard, jobs; at least 1 hero and 4–6 job shots) | Image search, trust; the site currently uses no photos | `public/img/` |
| 7 | **Free tow with repair offer**: does it apply to Auto Lyft? | Roadside has `/free-tow`; we left it out | new page |
| 8 | **VIP membership program**: does it apply to Auto Lyft? | Roadside has `/vip-program`; left out | new page |
| 9 | **Reviews**: an Auto Lyft review feed or Google rating to show | Roadside has `/reviews`; left out (never mark up ratings in schema) | new page |
| 10 | **Partner repair shops**: confirm Auto Lyft can refer to the same partner network | `/repair` pages describe partner-shop referrals | copy |
| 11 | **Hosting**: where it will deploy (Cloudflare Pages/Netlify read `public/_headers` and `_redirects`). Set www → apex 301 at the host. | Canonical host | host settings |
| 12 | **Analytics / Ads IDs** (GA4, Google Ads) if wanted | Tracking; privacy page must be updated if added | `Base.astro` + `/privacy` |

## Claims writers added that are worth a quick read-through
- Flat tire page: spares often limited to ~50 mph and ~60 psi; trucks may top up a low spare with a compressor.
- Lockout page: calls with a child or pet locked inside are prioritized.
- Fuel page: we carry regular unleaded and diesel, not premium.
- Junk car page: Ohio title signatures are notarized; estate vehicles may go through probate/county title office.
- Winch-out page: names the Alum Creek and Hoover Reservoir boat ramps as places we can pull from.
- Some town pages mention local events and roads beyond the sourced facts (Dublin Irish Festival, Franklin County Fair, Little Brown Jug, Memorial Drive in Lancaster, etc.).

## Policy wording on /terms, /privacy, /questions, /about and /jobs (please confirm)
1. Cancelling after dispatch may be charged en-route miles. If the customer declines a revised price, they pay only for work already done.
2. Disputes are governed by Ohio law in the courts of Franklin County.
3. Releasing a stored car requires photo ID plus proof of ownership or a signed owner note, and charges are paid before release. Unclaimed vehicles follow Ohio's abandoned-vehicle procedures.
4. Damage claims are handled directly or through AmeriSure. We are not responsible for personal items left in the car.
5. A certificate of insurance is available by email on request.
6. Customers with roadside plans pay us, then claim reimbursement from their plan.
7. The host keeps standard server logs, and we never ask for full card numbers by text or email.
8. Drivers need a valid licence and a clean driving record. Openings depend on call volume.

## Owner answers of 2026-10-27 (applied on branch owner-answers-2026-10-27): please confirm
1. **Fuel delivery** is now described as "the fuel plus the trip", using our existing card: fuel at 3× the pump price, plus the $75 delivery call and $4/mi en-route. Confirm that matches "cost of the fuel plus the trip".
2. **Battery testing fee and trip fee** are new charges that are not on the rate card (`src/data/rates.ts`). The battery page gives no figure for them. Add them to the card or confirm they stay unpriced. /about still says every charge appears on the card.
3. **Damage claims** say repairs usually happen "at a body or repair shop we work with". The owner said "our body or repair shops", but this site says Auto Lyft is not a repair shop. Confirm the wording.
4. **Written damage claims** go to the office by email (lisa@autolyftusa.online), as /terms already said. Confirm there is no other corporate address to name.
5. **Dealer and lender accounts** (`dealer-auction-towing.ts`, `repo-towing.ts`) still promise monthly invoicing. Only fleets were moved to RoadsideMC.com net-15. Should dealers and lenders move too?
6. **Repo**: "No lender/involuntary repo work" was read as no involuntary repos. The voluntary-surrender page still works with lenders. Confirm that lender-arranged voluntary surrenders are fine.
