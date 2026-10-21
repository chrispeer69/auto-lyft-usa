/*
  Auto Lyft USA — company facts. Single source for every page, the schema graph,
  llms.txt and the footer.

  Rule: only facts the owner has confirmed go here. Anything still unconfirmed is
  null and the templates skip it (see docs/INPUTS_REQUIRED.md). Never fill a gap
  with a guess — a wrong licence number or review count costs more trust than a
  missing one.
*/

export const SITE_URL = "https://www.autolyftusa.online";

export const COMPANY = {
  name: "Auto Lyft USA",
  legalName: "Auto Lyft USA Inc.",
  alternateNames: ["Auto Lyft USA Inc.", "Auto Lyft", "AutoLyft USA"],
  owner: { name: "Lisa Peer", title: "Owner" },
  foundingYear: 2024,
  phone: "(614) 633-8163",
  phoneE164: "+16146338163",
  phoneSchema: "+1-614-633-8163",
  telHref: "tel:+16146338163",
  smsHref: "sms:+16146338163",
  email: "lisa@autolyftusa.online",
  address: {
    street: "1620 Harrisburg Pike",
    city: "Columbus",
    region: "OH",
    postal: "43223",
    full: "1620 Harrisburg Pike, Columbus, OH 43223",
  },
  /** Yard coordinates for 1620 Harrisburg Pike (from the company's alliance listing). */
  geo: { lat: 39.92469, lng: -83.05802 },
  /** How we describe where the yard sits. Harrisburg Pike is US-62 on the southwest side. */
  yardArea: "on Harrisburg Pike (US-62) on Columbus's southwest side",
  hours: "around the clock, 365 days a year",
  fleet: { trucks: 4, kind: "light-duty flatbed carriers" },
  insurer: "AmeriSure",
  /** US Tow Alliance member profile (checked live 2026-10-21: Elite member since 2026, registry ID 10602). */
  allianceProfile: "https://www.ustowalliance.com/company/10602/",
  alliance: { name: "US Tow Alliance", url: "https://www.ustowalliance.com/", tier: "Elite", since: 2026, registryId: "10602", listed: "May 5, 2026" },
  /** Unconfirmed — rendered only once filled in. */
  pucoNumber: null as string | null,
  usdotNumber: null as string | null,
  googleMapsCid: null as string | null,
  facebook: null as string | null,
  slogan: "Four wheels up. Every time.",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1620+Harrisburg+Pike+Columbus+OH+43223",
} as const;

/** Short brand suffix for <title>. "| Auto Lyft USA" is 16 characters. */
export const TITLE_SUFFIX = " | Auto Lyft USA";

export const ids = {
  business: `${SITE_URL}/#org`,
  website: `${SITE_URL}/#site`,
  owner: `${SITE_URL}/#lisa-peer`,
  yard: `${SITE_URL}/#yard`,
};

/** Licence line for footers; empty until a number is confirmed. */
export function licenceLine(): string {
  const parts: string[] = [];
  if (COMPANY.pucoNumber) parts.push(`PUCO towing certificate ${COMPANY.pucoNumber}`);
  if (COMPANY.usdotNumber) parts.push(`USDOT ${COMPANY.usdotNumber}`);
  return parts.join(" · ");
}
