import type { Highway } from "../types";
import { HIGHWAYS } from "./catalog";

const modules = import.meta.glob<{ default: Omit<Highway, "slug" | "label"> }>("./content/*.ts", { eager: true });

export const HIGHWAY_PAGES: Highway[] = HIGHWAYS.map((h) => {
  const mod = modules[`./content/${h.slug}.ts`];
  return mod ? ({ ...mod.default, slug: h.slug, label: h.label } as Highway) : null;
}).filter((h): h is Highway => h !== null);

/** Highways that list a given town, neighborhood or service, for links back. */
export const highwaysForCity = (slug: string) => HIGHWAY_PAGES.filter((h) => h.cities.includes(slug));
export const highwaysForHood = (slug: string) => HIGHWAY_PAGES.filter((h) => h.hoods.includes(slug));
export const highwaysForService = (slug: string) => HIGHWAY_PAGES.filter((h) => h.services.includes(slug));
