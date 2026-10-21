/*
  JSON-LD graph. One business entity (#org) is declared on every page; every
  per-page node points at it by @id instead of repeating it. Each page ships one
  <script type="application/ld+json"> holding a single @graph.

  Deliberately absent: AggregateRating / Review markup. Self-served ratings are
  not eligible for review stars and can trigger a manual action.
*/
import { COMPANY, SITE_URL, ids } from "../data/company";
import type { Faq } from "../data/types";
import { plain } from "./text";

export type Node = Record<string, unknown>;

export const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

const ALL_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const open247: Node = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ALL_WEEK,
  opens: "00:00",
  closes: "23:59",
};

const ohio: Node = { "@type": "State", name: "Ohio" };

export interface BusinessInput {
  cities: { name: string }[];
  zips: string[];
  services: { name: string; path: string }[];
}

export function businessNode({ cities, zips, services }: BusinessInput): Node {
  const identifier: Node[] = [];
  if (COMPANY.pucoNumber)
    identifier.push({ "@type": "PropertyValue", propertyID: "PUCO towing certificate", value: COMPANY.pucoNumber });
  if (COMPANY.usdotNumber)
    identifier.push({ "@type": "PropertyValue", propertyID: "USDOT", value: COMPANY.usdotNumber });

  const sameAs = [COMPANY.allianceProfile, COMPANY.facebook, COMPANY.googleMapsCid && `https://www.google.com/maps?cid=${COMPANY.googleMapsCid}`].filter(Boolean);

  const address = {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postal,
    addressCountry: "US",
  };
  const geo = { "@type": "GeoCoordinates", latitude: COMPANY.geo.lat, longitude: COMPANY.geo.lng };

  return {
    "@type": ["LocalBusiness", "AutomotiveBusiness", "EmergencyService"],
    "@id": ids.business,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    alternateName: COMPANY.alternateNames,
    foundingDate: String(COMPANY.foundingYear),
    description:
      "Auto Lyft USA is a Columbus, Ohio towing company running light-duty flatbeds and wheel-lift trucks around the clock, with a yard on Harrisburg Pike: car and SUV towing, EV transport, jump starts, lockouts, tire changes, fuel delivery and winch-outs across Franklin County and the surrounding Central Ohio towns.",
    slogan: COMPANY.slogan,
    url: SITE_URL,
    telephone: COMPANY.phoneSchema,
    email: COMPANY.email,
    address,
    geo,
    location: { "@type": "Place", "@id": ids.yard, name: "Auto Lyft USA tow yard", address, geo },
    openingHoursSpecification: open247,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "dispatch",
        telephone: COMPANY.phoneSchema,
        areaServed: "US-OH",
        availableLanguage: ["English"],
        hoursAvailable: open247,
      },
    ],
    areaServed: [
      ...cities.map((c) => ({ "@type": "City", name: c.name, containedInPlace: ohio })),
      { "@type": "DefinedRegion", name: "Central Ohio ZIP codes served", addressCountry: "US", addressRegion: "OH", postalCode: zips },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Towing and roadside services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: abs(s.path) },
      })),
    },
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "USD",
    priceRange: "$$",
    hasMap: COMPANY.directionsUrl,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og.png`,
    founder: { "@id": ids.owner },
    knowsAbout: [
      "Flatbed towing",
      "Electric vehicle transport on a flatbed",
      "Low-clearance and lowered car towing",
      "All-wheel-drive vehicle towing",
      "Jump starts and battery testing",
      "Vehicle lockouts",
      "Winch-out recovery",
      "Towing on I-70, I-71, I-270 and US-23 around Columbus",
    ],
    ...(identifier.length ? { identifier } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: COMPANY.name,
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@id": ids.business },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/areas?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function ownerNode(): Node {
  return {
    "@type": "Person",
    "@id": ids.owner,
    name: COMPANY.owner.name,
    jobTitle: COMPANY.owner.title,
    worksFor: { "@id": ids.business },
    url: abs("/about"),
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function webPageNode(opts: {
  path: string;
  title: string;
  description: string;
  type?: string | string[];
  hasCrumbs: boolean;
  image?: string;
  dateModified?: string;
  datePublished?: string;
}): Node {
  const url = abs(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#page`,
    url,
    name: opts.title,
    description: opts.description,
    inLanguage: "en-US",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.business },
    ...(opts.hasCrumbs ? { breadcrumb: { "@id": `${url}#crumbs` } } : {}),
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(opts.image) } } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".lede"] },
  };
}

export function breadcrumbNode(path: string, crumbs: Crumb[]): Node {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#crumbs`,
    itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function faqNode(path: string, faqs: Faq[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: plain(f.q),
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}

export function serviceNode(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  areaServed?: unknown;
  offers?: Node[];
  extra?: Node;
}): Node {
  const url = abs(opts.path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { "@id": ids.business },
    areaServed:
      opts.areaServed ?? {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: COMPANY.geo.lat, longitude: COMPANY.geo.lng },
        geoRadius: "48000",
      },
    hoursAvailable: open247,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: COMPANY.phoneSchema, contactType: "dispatch" },
      serviceUrl: abs("/request"),
    },
    ...(opts.offers?.length ? { offers: opts.offers } : {}),
    ...(opts.extra ?? {}),
  };
}

export function cityPlace(name: string, geo?: { lat: number; lng: number }, contains?: Node[]): Node {
  return {
    "@type": "City",
    name,
    containedInPlace: ohio,
    ...(geo ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } } : {}),
    ...(contains?.length ? { containsPlace: contains } : {}),
  };
}

export function itemListNode(path: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "ItemList",
    "@id": `${abs(path)}#list`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: abs(it.path) })),
  };
}
