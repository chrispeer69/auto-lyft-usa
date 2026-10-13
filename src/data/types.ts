/** Shared content types. Data files hold plain strings; `[label](/path)` inside
    copy becomes an internal link (see lib/text.ts). */

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Service {
  slug: string;
  name: string;
  /** Group on hub pages and in the menu. */
  group: "towing" | "roadside" | "specialty" | "commercial";
  /** One-line blurb for cards and lists (<= 110 chars). */
  blurb: string;
  title: string; // page part, before TITLE_SUFFIX; whole title must be 20–60 chars
  description: string; // 120–155 chars
  h1: string;
  lede: string; // hero subhead, 1–2 sentences
  /** The opening paragraphs; the primary keyword appears in the first 100 words. */
  intro: string[];
  /** "When to call for this" — real situations. */
  situations: { title: string; text: string }[];
  /** What we bring / how the job is done. */
  method: { title: string; text: string }[];
  sections?: Section[];
  faqs: Faq[];
  related: string[]; // service slugs
  /** Primary keyword this page targets (must be in title, H1, first 100 words, a FAQ question). */
  keyword: string;
  priced?: boolean;
}

export interface LocalItem {
  name: string;
  detail: string;
  kind: "landmark" | "school" | "college" | "road" | "employer" | "park" | "shopping" | "medical";
}

/** Written copy for one town page. Facts (ZIPs, geo, miles, county, neighbours)
    come from data/cities/catalog.ts. */
export interface CityContent {
  description: string; // 120–155, ends with the phone
  h1: string; // includes the town name and "tow"
  lede: string;
  intro: string[]; // 3 paragraphs, 200–300 words, written for this town only
  /** Roads and stretches where calls come from, one specific note each. */
  roads: { name: string; note: string }[];
  /** Places around town, each with one sentence written in our own words. */
  local: LocalItem[];
  faqs: Faq[]; // 8–10, about this town
}

export interface Neighborhood {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  intro: string[];
  local: LocalItem[];
  faqs: Faq[];
  nearby: string[];
  zips: string[];
}

export interface Place {
  slug: string;
  category: "events" | "campus" | "shopping" | "travel" | "civic";
  label: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  venue: {
    name: string;
    schemaType: string;
    street?: string;
    locality: string;
    postal?: string;
    lat?: number;
    lng?: number;
  };
  intro: string[];
  sections: Section[];
  faqs: Faq[];
  cities: string[];
  services: string[];
  related: string[];
  notAffiliated: string;
}

export interface RepairService {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  intro: string[];
  jobs: { title: string; text: string }[];
  signs: string[];
  faqs: Faq[];
  related: string[];
}

export interface Guide {
  slug: string;
  title: string; // H1 / headline
  metaTitle: string; // page part
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  excerpt: string;
  body: Section[];
  faqs: Faq[];
}
