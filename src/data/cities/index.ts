import type { CityContent, LocalItem } from "../types";
import { CITY_FACTS, type CityFacts } from "./catalog";

const modules = import.meta.glob<{ default: CityContent }>("./content/*.ts", { eager: true });

export type City = CityFacts & CityContent;

export const CITIES: City[] = CITY_FACTS.map((f) => {
  const mod = modules[`./content/${f.slug}.ts`];
  return mod ? { ...f, ...mod.default } : null;
}).filter((c): c is City => c !== null);

/** Title (page part) for a town page. Kept as one pattern so every town ranks
    for "{Town} OH towing"; the brand suffix is added by the layout. */
export const cityTitle = (name: string) => `${name} OH Towing & Roadside Help`;

/** schema.org node for a local item, or null for things that are not places. */
export function localPlaceNode(item: LocalItem): Record<string, unknown> | null {
  switch (item.kind) {
    case "landmark": return { "@type": "LandmarksOrHistoricalBuildings", name: item.name };
    case "park": return { "@type": "Park", name: item.name };
    case "school": return { "@type": "School", name: item.name };
    case "college": return { "@type": "CollegeOrUniversity", name: item.name };
    case "shopping": return { "@type": "Place", additionalType: "https://schema.org/ShoppingCenter", name: item.name };
    case "medical": return { "@type": "CivicStructure", additionalType: "https://schema.org/Hospital", name: item.name };
    default: return null;
  }
}

export const LOCAL_LABELS: Record<LocalItem["kind"], string> = {
  landmark: "Landmarks",
  park: "Parks",
  school: "Schools",
  college: "Colleges",
  road: "Roads",
  employer: "Big employers",
  shopping: "Shopping",
  medical: "Hospitals",
};
