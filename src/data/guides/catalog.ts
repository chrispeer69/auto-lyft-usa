/* Driver guides (the blog). Copy for each lives in ./content/<slug>.ts (type Guide). */
export interface GuideEntry { slug: string; topic: string }
export const GUIDES: GuideEntry[] = [
  { slug: "ev-out-of-charge-on-i-71-south", topic: "[EV weekly] EV out of charge on I-71 south of Columbus: what zero means, why a jump adds no range, shoulder safety, getting carried to a working charger" },
  { slug: "first-snow-columbus-driving", topic: "The first snowfall of the season in Columbus: a night-before tire/wiper check, clearing the car, braking and following room on snow, sliding off the road and staying put, winch-out costs" },
  { slug: "storing-a-damaged-ev-after-a-crash", topic: "After an EV crash: stranded energy and reignition, where the 50-foot storage distance comes from (NHTSA, Tesla, IAFF/USFA), NTSB finding that yards often cannot provide it, barriers vs. gas build-up, owner checklist" },
  { slug: "thanksgiving-week-travel-columbus", topic: "Thanksgiving week out of Columbus: a 20-minute pre-trip car check, I-70/I-71 holiday traffic, breaking down far from home, getting the car back on a flatbed" },
  { slug: "road-salt-and-your-car-ohio", topic: "Columbus road-salt season: how wet salt rusts brake lines, exhaust and the underbody, a winter wash routine, brake-line warning signs, why a soft pedal means tow" },
  { slug: "coolant-antifreeze-check-before-winter", topic: "Before Columbus hard freezes: checking coolant level and freeze protection, topping off with the right type, leak and heater-core signs, when to stop and tow" },
  { slug: "what-it-takes-to-run-a-tow-company", topic: "What a professional towing company pays for: trucks, coverage, round-the-clock staff, yard and gear, maintenance, standards; posted retail rates and calling for a fair quote" },
  { slug: "first-freeze-columbus-car-checklist", topic: "Columbus first freeze (avg Oct 27, NWS): tire pressure, batteries, glass and washer fluid, bridges icing first, a weekend checklist" },
  { slug: "time-change-dark-commute-columbus", topic: "DST ends Nov 1, 2026: dark evening commutes, headlight checks, wet leaves, deer at dusk, breaking down at night, night pricing" },
  { slug: "what-to-do-when-your-car-breaks-down-columbus", topic: "Step-by-step: what to do the minute your car breaks down in Columbus (highway vs. city street, safety, who to call)" },
  { slug: "how-towing-prices-work-columbus", topic: "How a Columbus towing bill is built, line by line, with worked examples using our rate card; why 'cheap tow' quotes grow" },
  { slug: "choosing-a-towing-company-checklist", topic: "Checklist for choosing a towing company: licensing, insurance, price-first quotes, flatbed vs. wheel-lift, red flags" },
  { slug: "car-towed-from-private-lot-ohio", topic: "Your car was towed from a private lot in Ohio: how to find it, what to bring, your rights in general terms" },
  { slug: "car-wont-start-battery-starter-alternator", topic: "Car won't start: telling a dead battery from a bad starter or alternator by the sounds and signs" },
  { slug: "winter-emergency-kit-central-ohio", topic: "What to keep in your car for a Central Ohio winter, and why each item matters when you're stuck" },
  { slug: "car-battery-cold-weather", topic: "Why batteries die on the first cold mornings, how to test one, when to replace it" },
  { slug: "towing-an-electric-car", topic: "What EV owners should know before a tow: transport mode, all four wheels up (deck or wheel-lift with dollies per the manual), dead 12V battery, charging after a tow" },
  { slug: "why-awd-cars-need-a-flatbed", topic: "Why all-wheel-drive cars should ride on a flatbed and what damage a two-wheel tow can do" },
  { slug: "after-a-car-accident-ohio", topic: "After a crash in Ohio: the first hour, photos, police reports, choosing where the car is towed, storage fees" },
  { slug: "car-overheating-what-to-do", topic: "Summer overheating: warning signs, what to do on the shoulder, why not to open a hot radiator" },
  { slug: "deer-collisions-ohio-fall", topic: "Deer season on Ohio roads: when and where collisions peak, what to do after hitting a deer" },
  { slug: "flat-tire-on-the-interstate", topic: "Flat tire on I-270 or I-71: whether to change it yourself, how to wait safely, spare-tire limits" },
  { slug: "keys-locked-in-car", topic: "Keys locked in the car: what to try, what not to do, how a lockout service opens a door without damage, kids/pets inside" },
];
export const guidePath = (slug: string) => `/guides/${slug}`;
