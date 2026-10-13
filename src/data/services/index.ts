import type { Service } from "../types";
import { SERVICES } from "./catalog";

// Each service page's copy lives in ./content/<slug>.ts (default export).
const modules = import.meta.glob<{ default: Service }>("./content/*.ts", { eager: true });

export const SERVICE_CONTENT: Service[] = SERVICES.map((entry) => {
  const mod = modules[`./content/${entry.slug}.ts`];
  return mod ? { ...mod.default, slug: entry.slug, name: entry.name, group: entry.group, blurb: entry.blurb } : null;
}).filter((s): s is Service => s !== null);

/**
 * Eight towns to feature on a service page. Each service gets a different
 * rotation of the town list, so every town page collects links from many
 * services instead of the same eight everywhere.
 */
export function townsForService<T extends { slug: string }>(slug: string, towns: T[], count = 8): T[] {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const start = h % towns.length;
  const step = 5; // coprime with 40, so the picks spread across the list
  return Array.from({ length: count }, (_, i) => towns[(start + i * step) % towns.length]);
}
