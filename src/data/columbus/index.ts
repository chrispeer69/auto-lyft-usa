import type { CityContent, Faq } from "../types";
import { HOODS, type HoodFacts } from "./catalog";

/** A neighborhood page: same copy shape as a town page, plus the ZIPs it sits in. */
export type HoodContent = CityContent & { zips: string[] };
export type Hood = HoodFacts & HoodContent;

const modules = import.meta.glob<{ default: HoodContent }>("./hoods/*.ts", { eager: true });

export const HOOD_PAGES: Hood[] = HOODS.map((h) => {
  const mod = modules[`./hoods/${h.slug}.ts`];
  return mod ? { ...h, ...mod.default } : null;
}).filter((h): h is Hood => h !== null);

export const hoodTitle = (name: string) => `Towing in ${name}, Columbus`;

export interface HubContent {
  description: string;
  h1: string;
  lede: string;
  intro: string[];
  /** One-line blurb per neighborhood slug for the hub list. */
  blurbs: Record<string, string>;
  faqs: Faq[];
}
