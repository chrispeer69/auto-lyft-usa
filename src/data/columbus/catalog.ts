/* Columbus neighborhoods (names + adjacency). Copy lives in ./hoods/<slug>.ts. */
export interface HoodFacts { slug: string; name: string; nearby: string[] }
export const HOODS: HoodFacts[] = [
 {
  "slug": "hilltop",
  "name": "Hilltop",
  "nearby": [
   "westgate",
   "franklinton"
  ]
 },
 {
  "slug": "franklinton",
  "name": "Franklinton",
  "nearby": [
   "hilltop",
   "downtown",
   "harrison-west",
   "westgate"
  ]
 },
 {
  "slug": "westgate",
  "name": "Westgate",
  "nearby": [
   "hilltop"
  ]
 },
 {
  "slug": "downtown",
  "name": "Downtown",
  "nearby": [
   "franklinton",
   "german-village",
   "short-north",
   "brewery-district",
   "olde-towne-east",
   "king-lincoln-bronzeville"
  ]
 },
 {
  "slug": "german-village",
  "name": "German Village",
  "nearby": [
   "downtown",
   "brewery-district",
   "merion-village",
   "schumacher-place"
  ]
 },
 {
  "slug": "short-north",
  "name": "Short North",
  "nearby": [
   "downtown",
   "clintonville",
   "italian-village",
   "victorian-village"
  ]
 },
 {
  "slug": "clintonville",
  "name": "Clintonville",
  "nearby": [
   "short-north",
   "linden",
   "beechwold",
   "old-north",
   "northwest-columbus"
  ]
 },
 {
  "slug": "linden",
  "name": "Linden",
  "nearby": [
   "clintonville",
   "northland",
   "sharon-woods"
  ]
 },
 {
  "slug": "brewery-district",
  "name": "Brewery District",
  "nearby": [
   "german-village",
   "downtown",
   "merion-village"
  ]
 },
 {
  "slug": "italian-village",
  "name": "Italian Village",
  "nearby": [
   "short-north",
   "weinland-park",
   "victorian-village",
   "downtown"
  ]
 },
 {
  "slug": "victorian-village",
  "name": "Victorian Village",
  "nearby": [
   "short-north",
   "harrison-west",
   "italian-village",
   "university-district"
  ]
 },
 {
  "slug": "harrison-west",
  "name": "Harrison West",
  "nearby": [
   "victorian-village",
   "short-north",
   "university-district",
   "franklinton"
  ]
 },
 {
  "slug": "weinland-park",
  "name": "Weinland Park",
  "nearby": [
   "italian-village",
   "university-district",
   "short-north",
   "old-north"
  ]
 },
 {
  "slug": "university-district",
  "name": "University District",
  "nearby": [
   "old-north",
   "weinland-park",
   "short-north",
   "harrison-west"
  ]
 },
 {
  "slug": "old-north",
  "name": "Old North",
  "nearby": [
   "university-district",
   "clintonville",
   "beechwold"
  ]
 },
 {
  "slug": "beechwold",
  "name": "Beechwold",
  "nearby": [
   "clintonville",
   "old-north",
   "northwest-columbus"
  ]
 },
 {
  "slug": "northland",
  "name": "Northland",
  "nearby": [
   "linden",
   "sharon-woods",
   "beechwold"
  ]
 },
 {
  "slug": "sharon-woods",
  "name": "Sharon Woods",
  "nearby": [
   "northland",
   "linden"
  ]
 },
 {
  "slug": "northwest-columbus",
  "name": "Northwest",
  "nearby": [
   "beechwold",
   "clintonville"
  ]
 },
 {
  "slug": "olde-towne-east",
  "name": "Olde Towne East",
  "nearby": [
   "king-lincoln-bronzeville",
   "downtown",
   "driving-park"
  ]
 },
 {
  "slug": "king-lincoln-bronzeville",
  "name": "King-Lincoln Bronzeville",
  "nearby": [
   "olde-towne-east",
   "downtown"
  ]
 },
 {
  "slug": "driving-park",
  "name": "Driving Park",
  "nearby": [
   "olde-towne-east",
   "king-lincoln-bronzeville",
   "schumacher-place",
   "berwick",
   "eastmoor"
  ]
 },
 {
  "slug": "eastmoor",
  "name": "Eastmoor",
  "nearby": [
   "berwick",
   "driving-park"
  ]
 },
 {
  "slug": "berwick",
  "name": "Berwick",
  "nearby": [
   "eastmoor",
   "driving-park"
  ]
 },
 {
  "slug": "merion-village",
  "name": "Merion Village",
  "nearby": [
   "german-village",
   "schumacher-place",
   "brewery-district"
  ]
 },
 {
  "slug": "schumacher-place",
  "name": "Schumacher Place",
  "nearby": [
   "german-village",
   "merion-village",
   "driving-park"
  ]
 }
];
export const hoodPath = (slug: string) => `/areas/columbus-oh/${slug}`;
export const hoodBySlug = (slug: string) => HOODS.find((h) => h.slug === slug);
