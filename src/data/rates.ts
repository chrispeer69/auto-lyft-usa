/*
  Published rate card (owner decision 2026-10-13: same numbers as the sister
  company). Every price on the site — /rates, /estimate, service-page price
  notes and Offer schema — reads from here.
*/

export const RATES = {
  enroutePerMile: 4, // yard → pickup, every call
  hookup: 125,
  loadedPerMile: 7,
  highway: 75,
  afterHours: 150, // 10 PM – 6 AM
  weekend: 50,
  largeVehicle: 100,
  storagePerDay: 45,
  winchPerHour: 150,
  roadsideFlat: 75, // jump start, lockout, tire change, battery service call
  fuelBase: 75,
  fuelMultiplier: 3, // fuel billed at 3× pump cost
  cardFeePercent: 3,
  veteranPercent: 10,
};

export const EV_RATES = {
  enroutePerMile: 2.5,
  hookup: 150,
  loadedPerMile: 7.5,
  highway: 100,
  storagePerDay: 75,
};

export const AFTER_HOURS_WINDOW = "10 PM to 6 AM";

/** Ohio county sales-tax rates for the counties we serve (pickup county applies). */
export const COUNTY_TAX: { county: string; rate: number }[] = [
  { county: "Franklin", rate: 8.0 },
  { county: "Delaware", rate: 8.0 },
  { county: "Union", rate: 8.0 },
  { county: "Licking", rate: 8.25 },
  { county: "Fairfield", rate: 7.75 },
  { county: "Pickaway", rate: 7.25 },
  { county: "Madison", rate: 7.25 },
];

export const usd = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

type OfferLine = { name: string; price: number; unit: "per tow" | "per mile" | "per hour" | "per call"; note: string };

/** Which rate-card lines apply to each priced service page. Per-job services
    (heavy, medium, fleet, repo, auction, property, junk, equipment) have none. */
export function offersFor(slug: string): OfferLine[] {
  const tow: OfferLine[] = [
    { name: "Hook-up", price: RATES.hookup, unit: "per tow", note: "Loading and securing the vehicle on the flatbed." },
    { name: "Loaded miles", price: RATES.loadedPerMile, unit: "per mile", note: "Each mile the vehicle rides on the deck." },
    { name: "En-route miles", price: RATES.enroutePerMile, unit: "per mile", note: "Miles from our yard to the pickup." },
  ];
  const roadside: OfferLine[] = [
    { name: "Roadside service call", price: RATES.roadsideFlat, unit: "per call", note: "Flat rate for the service on scene." },
    { name: "En-route miles", price: RATES.enroutePerMile, unit: "per mile", note: "Miles from our yard to you." },
  ];
  switch (slug) {
    case "ev-towing":
      return [
        { name: "EV hook-up", price: EV_RATES.hookup, unit: "per tow", note: "Loading an electric vehicle in transport mode." },
        { name: "EV loaded miles", price: EV_RATES.loadedPerMile, unit: "per mile", note: "Each mile the EV rides on the deck." },
        { name: "EV en-route miles", price: EV_RATES.enroutePerMile, unit: "per mile", note: "Miles from our yard to the pickup." },
      ];
    case "emergency-towing":
    case "flatbed-towing":
    case "car-towing":
    case "long-distance-towing":
    case "accident-towing":
    case "wheel-lift-towing":
    case "low-profile-towing":
    case "motorcycle-towing":
    case "parking-garage-towing":
    case "repair-shop-towing":
      return tow;
    case "roadside-assistance":
    case "jump-start":
    case "car-battery-replacement":
    case "car-lockout":
    case "flat-tire-change":
      return roadside;
    case "fuel-delivery":
      return [
        { name: "Fuel delivery", price: RATES.fuelBase, unit: "per call", note: `Plus fuel at ${RATES.fuelMultiplier}× the pump price.` },
        { name: "En-route miles", price: RATES.enroutePerMile, unit: "per mile", note: "Miles from our yard to you." },
      ];
    case "winch-out":
      return [
        { name: "Winch-out", price: RATES.winchPerHour, unit: "per hour", note: "Billed by the hour on scene, one-hour minimum." },
        { name: "En-route miles", price: RATES.enroutePerMile, unit: "per mile", note: "Miles from our yard to you." },
      ];
    default:
      return [];
  }
}
