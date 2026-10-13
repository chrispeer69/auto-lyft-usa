/* Repair help pages: we tow the car to an independent partner shop that does the
   work. Copy for each lives in ./content/<slug>.ts (type RepairService). */
export interface RepairEntry { slug: string; name: string; blurb: string }
export const REPAIRS: RepairEntry[] = [
  { slug: "engine-diagnostics", name: "Check-Engine Diagnostics", blurb: "Warning lights read and traced to the actual fault." },
  { slug: "brake-repair", name: "Brake Repair", blurb: "Pads, rotors, calipers and brake lines." },
  { slug: "transmission-repair", name: "Transmission Repair", blurb: "Slipping, hard shifts and no-drive problems." },
  { slug: "electrical-repair", name: "Electrical & Charging Repair", blurb: "Alternators, starters, wiring and parasitic drains." },
  { slug: "ac-heating-repair", name: "A/C & Heater Repair", blurb: "No cold air, no heat and coolant leaks." },
  { slug: "cooling-system-repair", name: "Overheating & Cooling Repair", blurb: "Radiators, water pumps, hoses and thermostats." },
  { slug: "tires-alignment", name: "Tires & Alignment", blurb: "Replacement tires, balancing and alignment." },
  { slug: "oil-change", name: "Oil Change & Fluids", blurb: "Oil, filters and fluid service." },
  { slug: "pre-purchase-inspection", name: "Pre-Purchase Inspection", blurb: "A mechanic's look before you buy a used car." },
  { slug: "exhaust-repair", name: "Exhaust & Muffler Repair", blurb: "Loud exhaust, leaks and catalytic converters." },
  { slug: "suspension-steering", name: "Suspension & Steering", blurb: "Clunks, pulls, worn struts and tie rods." },
  { slug: "scheduled-maintenance", name: "Scheduled Maintenance", blurb: "Factory-interval service to keep the car out of the ditch." },
];
export const repairPath = (slug: string) => `/repair/${slug}`;
export const repairBySlug = (slug: string) => REPAIRS.find((r) => r.slug === slug);
