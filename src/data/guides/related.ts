/*
  "Get help now" links shown at the end of each guide: the service pages a reader
  of that guide is most likely to need next. Guides not listed (e.g. new posts
  from the blog routine) fall back to DEFAULT_HELP. Paths must exist; the SEO
  build check fails on broken links.
*/
export interface HelpLink { href: string; label: string; note: string }

const jump: HelpLink = { href: "/towing/jump-start", label: "Jump start", note: "A booster pack at your car, with a quick battery test." };
const battery: HelpLink = { href: "/towing/car-battery-replacement", label: "Battery replacement", note: "A new battery fitted where the car sits." };
const flatbed: HelpLink = { href: "/towing/flatbed-towing", label: "Flatbed towing", note: "When a jump won't do it, the car rides on the deck to your mechanic." };
const accident: HelpLink = { href: "/towing/accident-towing", label: "Accident towing", note: "Crash scene pickups, taken to the shop or yard you choose." };
const estimate: HelpLink = { href: "/estimate", label: "Price estimate", note: "Work out the cost of a tow from the miles before you call." };
const rates: HelpLink = { href: "/rates", label: "Rate card", note: "Every charge we bill, listed in one place." };
const privateLot: HelpLink = { href: "/towing/private-property-towing", label: "Private property towing", note: "How lot towing works, for drivers and property owners." };
const contact: HelpLink = { href: "/contact", label: "Contact the office", note: "Phone, email and the yard address." };
const roadside: HelpLink = { href: "/towing/roadside-assistance", label: "Roadside assistance", note: "Jump starts, tire changes, fuel and lockouts." };
const emergency: HelpLink = { href: "/towing/emergency-towing", label: "Emergency towing", note: "A truck sent day or night, highway or side street." };
const request: HelpLink = { href: "/request", label: "Request a tow", note: "Send your location by text so the driver finds you." };

export const DEFAULT_HELP: HelpLink[] = [emergency, roadside, estimate];

export const GUIDE_HELP: Record<string, HelpLink[]> = {
  "car-towed-from-private-lot-ohio": [privateLot, contact, flatbed],
  "after-a-car-accident-ohio": [accident, estimate, rates],
  "deer-collisions-ohio-fall": [accident, estimate, flatbed],
  "car-battery-cold-weather": [jump, battery, flatbed],
  "car-wont-start-battery-starter-alternator": [jump, battery, flatbed],
  "winter-emergency-kit-central-ohio": [jump, { href: "/towing/winch-out", label: "Winch-out", note: "Pulled out of a ditch or snowbank and back onto the road." }, flatbed],
  "first-freeze-columbus-car-checklist": [jump, { href: "/towing/flat-tire-change", label: "Flat tire change", note: "Your spare put on at the roadside." }, flatbed],
  "time-change-dark-commute-columbus": [jump, roadside, flatbed],
  "flat-tire-on-the-interstate": [{ href: "/towing/flat-tire-change", label: "Flat tire change", note: "Your spare put on at the roadside." }, emergency, request],
  "keys-locked-in-car": [{ href: "/towing/car-lockout", label: "Car lockout", note: "Doors opened without damage." }, roadside, request],
  "towing-an-electric-car": [{ href: "/towing/ev-towing", label: "EV towing", note: "Electric cars carried on a flatbed, all four wheels up." }, flatbed, estimate],
  "why-awd-cars-need-a-flatbed": [flatbed, { href: "/towing/low-profile-towing", label: "Low-profile towing", note: "Lowered and sports cars loaded without scraping." }, estimate],
  "car-overheating-what-to-do": [emergency, flatbed, rates],
  "what-to-do-when-your-car-breaks-down-columbus": [emergency, request, estimate],
  "how-towing-prices-work-columbus": [estimate, rates, flatbed],
  "choosing-a-towing-company-checklist": [rates, flatbed, contact],
  "what-it-takes-to-run-a-tow-company": [rates, estimate, contact],
};

export const helpFor = (slug: string) => GUIDE_HELP[slug] ?? DEFAULT_HELP;
