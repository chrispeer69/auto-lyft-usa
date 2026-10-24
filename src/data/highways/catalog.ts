/* Highway breakdown pages under /highways. Copy for each lives in
   ./content/<slug>.ts (type Highway in ../types.ts). Order = order in lists:
   the roads closest to the Harrisburg Pike yard come first. */

export interface HighwayEntry {
  slug: string;
  label: string;
  short: string;
}

export const HIGHWAYS: HighwayEntry[] = [
  { slug: "i-71", label: "I-71 through Columbus", short: "I-71" },
  { slug: "i-270", label: "I-270 outerbelt", short: "I-270" },
  { slug: "i-70", label: "I-70, West Jefferson to Etna", short: "I-70" },
  { slug: "us-23", label: "US-23, south end to Delaware", short: "US-23" },
  { slug: "sr-315", label: "SR-315 Olentangy freeway", short: "SR-315" },
  { slug: "i-670", label: "I-670, downtown to the airport", short: "I-670" },
];

export const highwayPath = (slug: string) => `/highways/${slug}`;
export const highwayBySlug = (slug: string) => HIGHWAYS.find((h) => h.slug === slug);
