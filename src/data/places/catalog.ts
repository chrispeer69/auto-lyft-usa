/* Venue, campus, shopping and travel pages under /local. Copy for each lives
   in ./content/<slug>.ts (type Place in ../types.ts). */

export type PlaceCategory = "events" | "campus" | "shopping" | "travel" | "civic";

export const PLACE_CATEGORIES: { id: PlaceCategory; label: string }[] = [
  { id: "events", label: "Stadiums, arenas & big events" },
  { id: "campus", label: "College campuses" },
  { id: "shopping", label: "Shopping districts" },
  { id: "travel", label: "Airport & travel" },
  { id: "civic", label: "If your car was towed" },
];

export interface PlaceEntry {
  slug: string;
  label: string;
  category: PlaceCategory;
}

export const PLACES: PlaceEntry[] = [
  { slug: "ohio-stadium", label: "Ohio Stadium game days", category: "events" },
  { slug: "schottenstein-center", label: "Schottenstein Center", category: "events" },
  { slug: "nationwide-arena", label: "Nationwide Arena", category: "events" },
  { slug: "arena-district", label: "Arena District", category: "events" },
  { slug: "crew-stadium", label: "Columbus Crew stadium", category: "events" },
  { slug: "huntington-park", label: "Huntington Park", category: "events" },
  { slug: "convention-center", label: "Greater Columbus Convention Center", category: "events" },
  { slug: "ohio-expo-center", label: "Ohio Expo Center & State Fair", category: "events" },
  { slug: "columbus-zoo", label: "Columbus Zoo and Aquarium", category: "events" },
  { slug: "memorial-tournament", label: "Memorial Tournament at Muirfield", category: "events" },
  { slug: "red-white-and-boom", label: "Red, White & BOOM!", category: "events" },
  { slug: "columbus-festivals", label: "Downtown festivals", category: "events" },
  { slug: "ohio-state-campus", label: "Ohio State campus", category: "campus" },
  { slug: "columbus-state", label: "Columbus State", category: "campus" },
  { slug: "capital-university", label: "Capital University", category: "campus" },
  { slug: "ccad", label: "Columbus College of Art & Design", category: "campus" },
  { slug: "franklin-university", label: "Franklin University", category: "campus" },
  { slug: "ohio-dominican", label: "Ohio Dominican University", category: "campus" },
  { slug: "otterbein", label: "Otterbein University", category: "campus" },
  { slug: "ohio-wesleyan", label: "Ohio Wesleyan University", category: "campus" },
  { slug: "easton", label: "Easton Town Center", category: "shopping" },
  { slug: "polaris", label: "Polaris Fashion Place area", category: "shopping" },
  { slug: "tuttle-crossing", label: "Tuttle Crossing", category: "shopping" },
  { slug: "bridge-park", label: "Bridge Park, Dublin", category: "shopping" },
  { slug: "tanger-outlets", label: "Tanger Outlets Sunbury", category: "shopping" },
  { slug: "cmh-airport", label: "John Glenn Columbus Airport", category: "travel" },
  { slug: "towed-car-columbus", label: "Find a towed car in Columbus", category: "civic" },
];

export const placePath = (slug: string) => `/local/${slug}`;
export const placeBySlug = (slug: string) => PLACES.find((p) => p.slug === slug);
