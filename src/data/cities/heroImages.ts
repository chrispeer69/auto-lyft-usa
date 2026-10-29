/*
  One hero photo per town page, keyed by slug (same slugs as ./catalog.ts).
  AI-generated stand-ins (PEER Design Studio, gpt_image_2_5): a generic scene of the
  kind of street, road or landscape found in that town, never a specific landmark, with
  no lettering, logos or plates. They are not photos of our own trucks.
  Files: public/img/areas/<slug>.webp (1280x720) plus <slug>-640.webp (640x360).
  Same fields as Photo in ../photos.ts, plus width/height of the full-size file.
*/
import type { Photo } from "../photos";

export interface HeroImage extends Photo { width: number; height: number }

const h = (slug: string, alt: string): HeroImage => ({
  src: `/img/areas/${slug}.webp`,
  small: `/img/areas/${slug}-640.webp`,
  srcset: `/img/areas/${slug}-640.webp 640w, /img/areas/${slug}.webp 1280w`,
  alt,
  width: 1280,
  height: 720,
});

export const HERO_IMAGES: Record<string, HeroImage> = {
  "dublin": h("dublin", "A curving tree-lined suburban parkway with low dry-stacked limestone walls and autumn oaks, where a white flatbed tow truck is loading a dark SUV on the shoulder"),
  "westerville": h("westerville", "White flatbed tow truck carrying a silver hatchback past rows of 19th-century brick storefronts in a historic uptown district"),
  "grove-city": h("grove-city", "White flatbed tow truck hauling a red pickup on a wide suburban commercial road with strip retail and an interstate overpass behind"),
  "reynoldsburg": h("reynoldsburg", "White flatbed tow truck loading a beige minivan along an older suburban main road with mid-century brick storefronts and bare autumn trees"),
  "hilliard": h("hilliard", "White flatbed tow truck with a blue sedan on its deck beside railroad tracks and a small old-town block in a growing suburb at golden hour"),
  "powell": h("powell", "White flatbed tow truck with a gray crossover on its deck driving through a landscaped roundabout lined with brick village-style shops"),
  "gahanna": h("gahanna", "White flatbed tow truck carrying a white sedan across a low bridge over a wooded, rocky creek valley in late spring"),
  "upper-arlington": h("upper-arlington", "White flatbed tow truck loading a black sedan on a leafy residential street lined with Tudor-revival and brick Colonial homes in autumn"),
  "worthington": h("worthington", "White flatbed tow truck passing a grassy village green surrounded by Federal-style brick buildings at dusk"),
  "pickerington": h("pickerington", "White flatbed tow truck winching a white SUV onto its bed beside a new subdivision, retention pond and open farmland"),
  "new-albany": h("new-albany", "White flatbed tow truck carrying a sedan along a road lined with white horse fences and Georgian red-brick buildings"),
  "canal-winchester": h("canal-winchester", "White flatbed tow truck loading a green hatchback on a small-town main street of 19th-century brick buildings"),
  "delaware": h("delaware", "White flatbed tow truck carrying a red compact car through a downtown of 19th-century brick buildings in autumn"),
  "marysville": h("marysville", "White flatbed tow truck loading a silver pickup on the shoulder of a divided highway through flat farmland and distant industrial plants"),
  "lancaster": h("lancaster", "White flatbed tow truck carrying a maroon sedan past Victorian brick storefronts with forested autumn hills behind the town"),
  "bexley": h("bexley", "White flatbed tow truck loading a dark green sedan on a brick-paved street of large early-1900s homes in spring"),
  "whitehall": h("whitehall", "White flatbed tow truck carrying a gray sedan along a wide six-lane commercial boulevard lined with mid-century strip plazas"),
  "obetz": h("obetz", "White flatbed tow truck carrying a white cargo van past large distribution warehouses on a flat south-side road"),
  "marble-cliff": h("marble-cliff", "White flatbed tow truck carrying a blue SUV along a winding road beneath a wooded limestone bluff above a river in autumn"),
  "grandview-heights": h("grandview-heights", "White flatbed tow truck loading a small white car on a walkable avenue of 1920s brick shops in the early evening"),
  "lockbourne": h("lockbourne", "White flatbed tow truck loading a tan pickup on a two-lane road through flat farmland beside a rail line, south of Columbus"),
  "groveport": h("groveport", "White flatbed tow truck carrying a black sedan through a small historic town of brick buildings and porch-front houses in summer"),
  "brice": h("brice", "White flatbed tow truck loading a silver minivan on a two-lane road near a railroad crossing and an interstate embankment"),
  "etna": h("etna", "White flatbed tow truck hauling an SUV along a rural highway past farm fields and new logistics warehouses at golden hour"),
  "blacklick": h("blacklick", "White flatbed tow truck pulled over beside a small blue car that slid into a grassy ditch on a wooded two-lane road in late spring"),
  "pataskala": h("pataskala", "White flatbed tow truck carrying a red pickup past a rail crossing and old grain silos in a small rural town"),
  "sunbury": h("sunbury", "White flatbed tow truck carrying a gray sedan around a grassy village square framed by 19th-century brick buildings"),
  "galloway": h("galloway", "White flatbed tow truck loading a white hatchback on a west-side subdivision road that opens onto farm fields"),
  "minerva-park": h("minerva-park", "White flatbed tow truck loading a silver sedan in front of 1960s ranch homes on a quiet street beside a small pond"),
  "lincoln-village": h("lincoln-village", "White flatbed tow truck carrying a burgundy SUV out of a neighborhood of 1950s brick ranch houses onto a west-side boulevard"),
  "urbancrest": h("urbancrest", "White flatbed tow truck loading a dark blue sedan on a quiet residential street of modest porch-front homes"),
  "valleyview": h("valleyview", "White flatbed tow truck loading a gray compact car on a short street of small brick ranch homes in early spring"),
  "harrisburg": h("harrisburg", "White flatbed tow truck loading a gray sedan on the shoulder of a two-lane highway through a small farm-country village with a white church steeple"),
  "johnstown": h("johnstown", "White flatbed tow truck carrying a pickup through a small village center with brick buildings and a white church, farmland beyond"),
  "lewis-center": h("lewis-center", "White flatbed tow truck loading a white crossover on the shoulder of a busy four-lane suburban highway north of Columbus"),
  "prairie-township": h("prairie-township", "White flatbed tow truck loading a silver sedan on a township road between harvested cornfields and ranch homes in autumn"),
  "west-jefferson": h("west-jefferson", "White flatbed tow truck carrying a red sedan over a low creek bridge at the edge of a small village on the old National Road"),
  "plain-city": h("plain-city", "White flatbed tow truck loading a dark gray SUV on a rural road past a white barn and silo, with a horse-drawn buggy in the distance"),
  "commercial-point": h("commercial-point", "White flatbed tow truck carrying a white pickup past silver grain bins on a flat two-lane road through farm country"),
  "london": h("london", "White flatbed tow truck with amber lights on, loading a sedan on a two-lane road leaving a small brick downtown into flat farmland at dusk"),
};
