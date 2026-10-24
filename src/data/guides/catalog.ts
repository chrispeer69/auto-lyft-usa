/* Driver guides (the blog). Copy for each lives in ./content/<slug>.ts (type Guide). */
export interface GuideEntry { slug: string; topic: string }
export const GUIDES: GuideEntry[] = [
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
  { slug: "towing-an-electric-car", topic: "What EV owners should know before a tow: transport mode, flatbed only, dead 12V battery, charging after a tow" },
  { slug: "why-awd-cars-need-a-flatbed", topic: "Why all-wheel-drive cars should ride on a flatbed and what damage a two-wheel tow can do" },
  { slug: "after-a-car-accident-ohio", topic: "After a crash in Ohio: the first hour, photos, police reports, choosing where the car is towed, storage fees" },
  { slug: "car-overheating-what-to-do", topic: "Summer overheating: warning signs, what to do on the shoulder, why not to open a hot radiator" },
  { slug: "deer-collisions-ohio-fall", topic: "Deer season on Ohio roads: when and where collisions peak, what to do after hitting a deer" },
  { slug: "flat-tire-on-the-interstate", topic: "Flat tire on I-270 or I-71: whether to change it yourself, how to wait safely, spare-tire limits" },
  { slug: "keys-locked-in-car", topic: "Keys locked in the car: what to try, what not to do, how a lockout service opens a door without damage, kids/pets inside" },
];
export const guidePath = (slug: string) => `/guides/${slug}`;
