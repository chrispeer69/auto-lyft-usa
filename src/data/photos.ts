/*
  Site photography. These are stand-in images with no logos and no lettering. They
  illustrate the work and are not photos of our own trucks. Replace each file in
  public/img with a real photo of the same name (scripts/optimize-photos.mjs) and
  every page picks it up.
*/
import type { ServiceGroup } from "./services/catalog";

export interface Photo { src: string; alt: string; srcset: string; small: string }
// Full-size file plus a 640px copy (scripts/optimize-photos.mjs makes both).
const p = (name: string, alt: string): Photo => {
  const big = /^(hero|city)-/.test(name) ? 1920 : 1200;
  return { src: `/img/${name}.webp`, small: `/img/${name}-640.webp`, srcset: `/img/${name}-640.webp 640w, /img/${name}.webp ${big}w`, alt };
};

export const PHOTOS = {
  heroDusk: p("hero-flatbed-dusk", "Flatbed tow truck loading a sedan on a wet city street at dusk"),
  highway: p("flatbed-highway", "Flatbed carrying an SUV on the interstate at sunset"),
  jump: p("jump-start-night", "Roadside technician jump-starting a stalled car at night"),
  motorcycle: p("motorcycle-deck", "Motorcycle chocked and strapped upright on a flatbed deck"),
  van: p("van-loading", "Cargo van being winched onto a flatbed in a business park"),
  yard: p("yard-dawn", "Row of flatbed tow trucks parked in a gravel yard at dawn"),
  accident: p("accident-recovery", "Operator winching a damaged sedan onto a flatbed after a crash"),
  lockout: p("lockout", "Gloved hands opening a locked car door with a long-reach tool"),
  tire: p("tire-change", "Technician changing a flat tire on the highway shoulder"),
  city: p("city-bridge", "Flatbed tow truck crossing a river bridge below the city skyline"),
  ev: p("ev-deck", "Electric car strapped on a flatbed with all four wheels off the ground"),
  dispatch: p("dispatch", "Dispatcher with a headset watching a map in a dark office"),
} as const;

export const GROUP_PHOTO: Record<ServiceGroup, Photo> = {
  towing: PHOTOS.highway,
  roadside: PHOTOS.jump,
  specialty: PHOTOS.motorcycle,
  commercial: PHOTOS.van,
};

const SERVICE_PHOTO: Record<string, Photo> = {
  "emergency-towing": PHOTOS.heroDusk,
  "accident-towing": PHOTOS.accident,
  "car-towing": PHOTOS.heroDusk,
  "long-distance-towing": PHOTOS.highway,
  "flatbed-towing": PHOTOS.highway,
  "jump-start": PHOTOS.jump,
  "car-battery-replacement": PHOTOS.jump,
  "car-lockout": PHOTOS.lockout,
  "flat-tire-change": PHOTOS.tire,
  "roadside-assistance": PHOTOS.tire,
  "ev-towing": PHOTOS.ev,
  "low-profile-towing": PHOTOS.ev,
  "motorcycle-towing": PHOTOS.motorcycle,
  "fleet-towing": PHOTOS.van,
  "medium-duty-towing": PHOTOS.van,
  "repair-shop-towing": PHOTOS.accident,
  "dealer-auction-towing": PHOTOS.highway,
  "wheel-theft-towing": PHOTOS.highway,
};

export const servicePhoto = (slug: string, group: ServiceGroup) => SERVICE_PHOTO[slug] ?? GROUP_PHOTO[group];
