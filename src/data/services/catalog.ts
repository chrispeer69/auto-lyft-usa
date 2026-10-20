/* Service catalog: slug, display name, group and card blurb. Full page copy for
   each lives in ./content/<slug>.ts. Order here = order in menus and lists. */

export type ServiceGroup = "towing" | "roadside" | "specialty" | "commercial";

export interface ServiceEntry {
  slug: string;
  name: string;
  group: ServiceGroup;
  blurb: string;
}

export const SERVICE_GROUPS: { id: ServiceGroup; label: string; intro: string }[] = [
  { id: "towing", label: "Towing", intro: "Cars, SUVs, pickups and vans moved on a flatbed, across town or across the state." },
  { id: "roadside", label: "Roadside help", intro: "Problems we fix where the car is parked so it never needs a tow." },
  { id: "specialty", label: "Specialty transport", intro: "Vehicles that need extra care: EVs, lowered cars, bikes and garage-trapped cars." },
  { id: "commercial", label: "Business & property", intro: "Accounts for fleets, lenders, auctions, property managers and repair shops." },
];

export const SERVICES: ServiceEntry[] = [
  { slug: "emergency-towing", name: "Emergency Towing", group: "towing", blurb: "Broken down or wrecked right now? A flatbed is dispatched the moment you hang up." },
  { slug: "flatbed-towing", name: "Flatbed Towing", group: "towing", blurb: "The whole vehicle rides on the deck, so the drivetrain never turns on the way." },
  { slug: "car-towing", name: "Car & SUV Towing", group: "towing", blurb: "Everyday light-duty tows for sedans, crossovers, minivans and half-ton pickups." },
  { slug: "long-distance-towing", name: "Long-Distance Towing", group: "towing", blurb: "One-vehicle transport from Columbus to anywhere in Ohio and the neighboring states." },
  { slug: "accident-towing", name: "Accident Towing", group: "towing", blurb: "Wreck cleared, debris swept, car delivered to the body shop or our yard." },
  { slug: "wheel-lift-towing", name: "Wheel-Lift Towing", group: "towing", blurb: "Tight lots and low garages where a full carrier cannot fit. Wheel dollies are available." },
  { slug: "medium-duty-towing", name: "Medium-Duty Towing", group: "towing", blurb: "Box trucks, cargo vans and shuttle buses, arranged through one phone call." },
  { slug: "heavy-duty-towing", name: "Heavy-Duty Towing", group: "towing", blurb: "Semis, buses and loaded trucks, handled through our heavy-wrecker partners." },
  { slug: "roadside-assistance", name: "Roadside Assistance", group: "roadside", blurb: "Jump, unlock, tire swap or gas, with no membership and no annual fee." },
  { slug: "jump-start", name: "Jump Start Service", group: "roadside", blurb: "Dead battery? A booster pack and a battery test where you are parked." },
  { slug: "car-battery-replacement", name: "Car Battery Replacement", group: "roadside", blurb: "A new battery brought to you, installed, and the old one recycled." },
  { slug: "car-lockout", name: "Car Lockout Service", group: "roadside", blurb: "Keys locked inside? We open the door without scratching paint or glass." },
  { slug: "flat-tire-change", name: "Flat Tire Change", group: "roadside", blurb: "Your spare goes on, the flat goes in the trunk, and lug nuts are torqued to spec." },
  { slug: "fuel-delivery", name: "Fuel Delivery", group: "roadside", blurb: "Out of gas on the shoulder? We bring enough to reach the next station." },
  { slug: "winch-out", name: "Winch-Out & Ditch Recovery", group: "roadside", blurb: "Stuck in a ditch, snowbank, mud or a soft yard? We pull it back to solid ground." },
  { slug: "ev-towing", name: "EV & Tesla Towing", group: "specialty", blurb: "EVs ride fully on the deck in transport mode, no wheel touching the road." },
  { slug: "low-profile-towing", name: "Low Profile Towing", group: "specialty", blurb: "Lowered, sports and exotic cars loaded with ramp extensions at a shallow angle." },
  { slug: "motorcycle-towing", name: "Motorcycle Towing", group: "specialty", blurb: "Bikes chocked and soft-strapped upright on the deck, never dragged." },
  { slug: "parking-garage-towing", name: "Parking Garage Towing", group: "specialty", blurb: "Cars that die on level three of a low-clearance garage get out with us." },
  { slug: "equipment-hauling", name: "Equipment Hauling", group: "specialty", blurb: "Mowers, small skid steers, golf carts and trailers moved on the flatbed." },
  { slug: "junk-car-removal", name: "Junk Car Removal", group: "specialty", blurb: "Dead cars hauled out of driveways and yards, title paperwork explained." },
  { slug: "fleet-towing", name: "Fleet Towing Accounts", group: "commercial", blurb: "Net billing, one dispatch number and photo records for company vehicles." },
  { slug: "private-property-towing", name: "Private Property Towing", group: "commercial", blurb: "Unauthorized-vehicle removal for lots, HOAs and apartments under Ohio law." },
  { slug: "repo-towing", name: "Voluntary Repossession Towing", group: "commercial", blurb: "Surrendered vehicles picked up for lenders, quietly and on schedule." },
  { slug: "dealer-auction-towing", name: "Dealer & Auction Transport", group: "commercial", blurb: "Car moves between lots, auctions, detail shops and buyers' driveways." },
  { slug: "repair-shop-towing", name: "Repair Shop Towing", group: "commercial", blurb: "Tows straight to your mechanic, or to a partner shop we trust." },
];

export const servicePath = (slug: string) => `/towing/${slug}`;
export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
