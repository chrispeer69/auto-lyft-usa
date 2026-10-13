import type { Guide } from "../types";
import { GUIDES } from "./catalog";
const modules = import.meta.glob<{ default: Omit<Guide, "slug"> }>("./content/*.ts", { eager: true });
export const GUIDE_PAGES: Guide[] = GUIDES.map((g) => {
  const mod = modules[`./content/${g.slug}.ts`];
  return mod ? { ...mod.default, slug: g.slug } : null;
})
  .filter((g): g is Guide => g !== null)
  .sort((a, b) => b.date.localeCompare(a.date));
