import type { RepairService } from "../types";
import { REPAIRS } from "./catalog";
const modules = import.meta.glob<{ default: Omit<RepairService, "slug" | "name"> }>("./content/*.ts", { eager: true });
export const REPAIR_PAGES: RepairService[] = REPAIRS.map((r) => {
  const mod = modules[`./content/${r.slug}.ts`];
  return mod ? { ...mod.default, slug: r.slug, name: r.name } : null;
}).filter((r): r is RepairService => r !== null);
