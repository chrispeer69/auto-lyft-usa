import type { Place } from "../types";
import { PLACES } from "./catalog";

const modules = import.meta.glob<{ default: Omit<Place, "slug" | "category" | "label"> }>("./content/*.ts", { eager: true });

export const PLACE_PAGES: Place[] = PLACES.map((p) => {
  const mod = modules[`./content/${p.slug}.ts`];
  return mod ? ({ ...mod.default, slug: p.slug, category: p.category, label: p.label } as Place) : null;
}).filter((p): p is Place => p !== null);

/** Places that list a given town or service, for cross-links back. */
export const placesForCity = (slug: string) => PLACE_PAGES.filter((p) => p.cities.includes(slug));
export const placesForService = (slug: string) => PLACE_PAGES.filter((p) => p.services.includes(slug));
