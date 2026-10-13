/* Fact-only city catalog (names, ZIPs, coordinates, straight-line miles from the
   yard, neighbours by geography). ZIPs: US Census 2020 ZCTA-to-place file. Page copy
   lives in ./content/<slug>.ts. Generated from docs/seed/columbus-facts.json. */
export interface CityFacts { slug: string; name: string; county: string; zips: string[]; geo: { lat: number; lng: number }; miles: number; nearby: string[]; }

export const CITY_FACTS: CityFacts[] = [
 {
  "slug": "dublin",
  "name": "Dublin",
  "county": "Franklin",
  "zips": [
   "43016",
   "43017"
  ],
  "geo": {
   "lat": 40.0992,
   "lng": -83.1141
  },
  "miles": 12.4,
  "nearby": [
   "hilliard",
   "powell",
   "upper-arlington",
   "worthington",
   "marysville",
   "delaware"
  ]
 },
 {
  "slug": "westerville",
  "name": "Westerville",
  "county": "Franklin",
  "zips": [
   "43081",
   "43082"
  ],
  "geo": {
   "lat": 40.1262,
   "lng": -82.9291
  },
  "miles": 15.5,
  "nearby": [
   "worthington",
   "minerva-park",
   "new-albany",
   "sunbury",
   "gahanna",
   "lewis-center"
  ]
 },
 {
  "slug": "grove-city",
  "name": "Grove City",
  "county": "Franklin",
  "zips": [
   "43123"
  ],
  "geo": {
   "lat": 39.8778,
   "lng": -83.0722
  },
  "miles": 3.3,
  "nearby": [
   "urbancrest",
   "harrisburg",
   "galloway",
   "obetz",
   "lockbourne",
   "commercial-point"
  ]
 },
 {
  "slug": "reynoldsburg",
  "name": "Reynoldsburg",
  "county": "Franklin",
  "zips": [
   "43068"
  ],
  "geo": {
   "lat": 39.9578,
   "lng": -82.8122
  },
  "miles": 13.2,
  "nearby": [
   "brice",
   "blacklick",
   "whitehall",
   "pickerington",
   "etna",
   "gahanna"
  ]
 },
 {
  "slug": "hilliard",
  "name": "Hilliard",
  "county": "Franklin",
  "zips": [
   "43026"
  ],
  "geo": {
   "lat": 40.0367,
   "lng": -83.1444
  },
  "miles": 9,
  "nearby": [
   "galloway",
   "dublin",
   "upper-arlington",
   "lincoln-village",
   "marble-cliff",
   "valleyview"
  ]
 },
 {
  "slug": "powell",
  "name": "Powell",
  "county": "Delaware",
  "zips": [
   "43065"
  ],
  "geo": {
   "lat": 40.1578,
   "lng": -83.0752
  },
  "miles": 16.1,
  "nearby": [
   "dublin",
   "worthington",
   "delaware",
   "westerville",
   "lewis-center"
  ]
 },
 {
  "slug": "gahanna",
  "name": "Gahanna",
  "county": "Franklin",
  "zips": [
   "43230",
   "43054"
  ],
  "geo": {
   "lat": 40.005,
   "lng": -82.869
  },
  "miles": 11.4,
  "nearby": [
   "new-albany",
   "blacklick",
   "whitehall",
   "westerville",
   "minerva-park",
   "reynoldsburg"
  ]
 },
 {
  "slug": "upper-arlington",
  "name": "Upper Arlington",
  "county": "Franklin",
  "zips": [
   "43221",
   "43220",
   "43212"
  ],
  "geo": {
   "lat": 40.020556,
   "lng": -83.066389
  },
  "miles": 6.6,
  "nearby": [
   "grandview-heights",
   "marble-cliff",
   "hilliard",
   "dublin",
   "worthington",
   "valleyview"
  ]
 },
 {
  "slug": "worthington",
  "name": "Worthington",
  "county": "Franklin",
  "zips": [
   "43085",
   "43229"
  ],
  "geo": {
   "lat": 40.0931,
   "lng": -83.0184
  },
  "miles": 11.8,
  "nearby": [
   "minerva-park",
   "westerville",
   "upper-arlington",
   "powell",
   "dublin",
   "lewis-center"
  ]
 },
 {
  "slug": "pickerington",
  "name": "Pickerington",
  "county": "Fairfield",
  "zips": [
   "43147"
  ],
  "geo": {
   "lat": 39.8806,
   "lng": -82.7527
  },
  "miles": 16.5,
  "nearby": [
   "canal-winchester",
   "reynoldsburg",
   "brice",
   "groveport",
   "etna",
   "lancaster"
  ]
 },
 {
  "slug": "new-albany",
  "name": "New Albany",
  "county": "Franklin",
  "zips": [
   "43054",
   "43031"
  ],
  "geo": {
   "lat": 40.0828,
   "lng": -82.8089
  },
  "miles": 17.1,
  "nearby": [
   "gahanna",
   "westerville",
   "johnstown",
   "blacklick",
   "minerva-park"
  ]
 },
 {
  "slug": "canal-winchester",
  "name": "Canal Winchester",
  "county": "Franklin",
  "zips": [
   "43110",
   "43125"
  ],
  "geo": {
   "lat": 39.8458,
   "lng": -82.8046
  },
  "miles": 14.5,
  "nearby": [
   "groveport",
   "pickerington",
   "lockbourne",
   "obetz",
   "lancaster"
  ]
 },
 {
  "slug": "delaware",
  "name": "Delaware",
  "county": "Delaware",
  "zips": [
   "43015"
  ],
  "geo": {
   "lat": 40.2987,
   "lng": -83.068
  },
  "miles": 25.8,
  "nearby": [
   "powell",
   "lewis-center",
   "sunbury",
   "marysville",
   "westerville",
   "dublin"
  ]
 },
 {
  "slug": "marysville",
  "name": "Marysville",
  "county": "Union",
  "zips": [
   "43040"
  ],
  "geo": {
   "lat": 40.2364,
   "lng": -83.3671
  },
  "miles": 27,
  "nearby": [
   "dublin",
   "powell",
   "hilliard",
   "delaware",
   "plain-city"
  ]
 },
 {
  "slug": "lancaster",
  "name": "Lancaster",
  "county": "Fairfield",
  "zips": [
   "43130"
  ],
  "geo": {
   "lat": 39.7173,
   "lng": -82.6021
  },
  "miles": 28.1,
  "nearby": [
   "canal-winchester",
   "pickerington",
   "groveport"
  ]
 },
 {
  "slug": "bexley",
  "name": "Bexley",
  "county": "Franklin",
  "zips": [
   "43209"
  ],
  "geo": {
   "lat": 39.962,
   "lng": -82.934
  },
  "miles": 7.1,
  "nearby": [
   "whitehall",
   "grandview-heights",
   "brice",
   "gahanna",
   "obetz"
  ]
 },
 {
  "slug": "whitehall",
  "name": "Whitehall",
  "county": "Franklin",
  "zips": [
   "43213",
   "43227"
  ],
  "geo": {
   "lat": 39.9667,
   "lng": -82.8853
  },
  "miles": 9.6,
  "nearby": [
   "bexley",
   "gahanna",
   "reynoldsburg",
   "brice",
   "obetz"
  ]
 },
 {
  "slug": "obetz",
  "name": "Obetz",
  "county": "Franklin",
  "zips": [
   "43207",
   "43125",
   "43137"
  ],
  "geo": {
   "lat": 39.8778,
   "lng": -82.953
  },
  "miles": 6.5,
  "nearby": [
   "groveport",
   "lockbourne",
   "urbancrest",
   "grove-city",
   "canal-winchester",
   "bexley"
  ]
 },
 {
  "slug": "marble-cliff",
  "name": "Marble Cliff",
  "county": "Franklin",
  "zips": [
   "43212",
   "43215"
  ],
  "geo": {
   "lat": 39.9884,
   "lng": -83.0746
  },
  "miles": 4.5,
  "nearby": [
   "grandview-heights",
   "upper-arlington",
   "valleyview",
   "hilliard",
   "lincoln-village"
  ]
 },
 {
  "slug": "grandview-heights",
  "name": "Grandview Heights",
  "county": "Franklin",
  "zips": [
   "43212",
   "43215"
  ],
  "geo": {
   "lat": 39.9881,
   "lng": -83.0428
  },
  "miles": 4.4,
  "nearby": [
   "marble-cliff",
   "upper-arlington",
   "valleyview",
   "hilliard",
   "bexley"
  ]
 },
 {
  "slug": "lockbourne",
  "name": "Lockbourne",
  "county": "Franklin",
  "zips": [
   "43137"
  ],
  "geo": {
   "lat": 39.811,
   "lng": -82.969
  },
  "miles": 9.2,
  "nearby": [
   "obetz",
   "groveport",
   "harrisburg",
   "canal-winchester",
   "grove-city",
   "commercial-point"
  ]
 },
 {
  "slug": "groveport",
  "name": "Groveport",
  "county": "Franklin",
  "zips": [
   "43125"
  ],
  "geo": {
   "lat": 39.855,
   "lng": -82.885
  },
  "miles": 10.4,
  "nearby": [
   "obetz",
   "lockbourne",
   "canal-winchester",
   "pickerington",
   "brice",
   "reynoldsburg"
  ]
 },
 {
  "slug": "brice",
  "name": "Brice",
  "county": "Franklin",
  "zips": [
   "43109",
   "43110",
   "43232"
  ],
  "geo": {
   "lat": 39.925,
   "lng": -82.835
  },
  "miles": 11.8,
  "nearby": [
   "reynoldsburg",
   "blacklick",
   "whitehall",
   "pickerington",
   "groveport",
   "bexley"
  ]
 },
 {
  "slug": "etna",
  "name": "Etna",
  "county": "Licking",
  "zips": [
   "43062",
   "43018"
  ],
  "geo": {
   "lat": 39.9578,
   "lng": -82.6817
  },
  "miles": 20.1,
  "nearby": [
   "pataskala",
   "reynoldsburg",
   "brice",
   "blacklick",
   "pickerington"
  ]
 },
 {
  "slug": "blacklick",
  "name": "Blacklick",
  "county": "Franklin",
  "zips": [
   "43004"
  ],
  "geo": {
   "lat": 39.995556,
   "lng": -82.811389
  },
  "miles": 14,
  "nearby": [
   "reynoldsburg",
   "gahanna",
   "new-albany",
   "brice",
   "pataskala",
   "etna"
  ]
 },
 {
  "slug": "pataskala",
  "name": "Pataskala",
  "county": "Licking",
  "zips": [
   "43062"
  ],
  "geo": {
   "lat": 39.9956,
   "lng": -82.7344
  },
  "miles": 17.8,
  "nearby": [
   "etna",
   "blacklick",
   "johnstown",
   "reynoldsburg",
   "new-albany"
  ]
 },
 {
  "slug": "sunbury",
  "name": "Sunbury",
  "county": "Delaware",
  "zips": [
   "43074",
   "43021"
  ],
  "geo": {
   "lat": 40.2425,
   "lng": -82.8591
  },
  "miles": 24.3,
  "nearby": [
   "westerville",
   "delaware",
   "lewis-center",
   "johnstown",
   "new-albany",
   "powell"
  ]
 },
 {
  "slug": "galloway",
  "name": "Galloway",
  "county": "Franklin",
  "zips": [
   "43119"
  ],
  "geo": {
   "lat": 39.924,
   "lng": -83.17
  },
  "miles": 5.9,
  "nearby": [
   "lincoln-village",
   "hilliard",
   "grove-city",
   "urbancrest",
   "valleyview",
   "harrisburg"
  ]
 },
 {
  "slug": "minerva-park",
  "name": "Minerva Park",
  "county": "Franklin",
  "zips": [
   "43231"
  ],
  "geo": {
   "lat": 40.077,
   "lng": -82.944
  },
  "miles": 12.1,
  "nearby": [
   "westerville",
   "worthington",
   "gahanna",
   "new-albany",
   "whitehall"
  ]
 },
 {
  "slug": "lincoln-village",
  "name": "Lincoln Village",
  "county": "Franklin",
  "zips": [
   "43228"
  ],
  "geo": {
   "lat": 39.953,
   "lng": -83.146
  },
  "miles": 5,
  "nearby": [
   "galloway",
   "valleyview",
   "hilliard",
   "grove-city",
   "urbancrest",
   "marble-cliff"
  ]
 },
 {
  "slug": "urbancrest",
  "name": "Urbancrest",
  "county": "Franklin",
  "zips": [
   "43123"
  ],
  "geo": {
   "lat": 39.897,
   "lng": -83.089
  },
  "miles": 2.5,
  "nearby": [
   "grove-city",
   "harrisburg",
   "lincoln-village",
   "valleyview",
   "obetz",
   "galloway"
  ]
 },
 {
  "slug": "valleyview",
  "name": "Valleyview",
  "county": "Franklin",
  "zips": [
   "43204"
  ],
  "geo": {
   "lat": 39.9434,
   "lng": -83.111
  },
  "miles": 3.1,
  "nearby": [
   "lincoln-village",
   "grandview-heights",
   "marble-cliff",
   "galloway",
   "urbancrest",
   "upper-arlington"
  ]
 },
 {
  "slug": "harrisburg",
  "name": "Harrisburg",
  "county": "Franklin",
  "zips": [
   "43126"
  ],
  "geo": {
   "lat": 39.8103,
   "lng": -83.1761
  },
  "miles": 10.1,
  "nearby": [
   "grove-city",
   "urbancrest",
   "galloway",
   "lockbourne",
   "commercial-point"
  ]
 },
 {
  "slug": "johnstown",
  "name": "Johnstown",
  "county": "Licking",
  "zips": [
   "43031"
  ],
  "geo": {
   "lat": 40.1476,
   "lng": -82.676
  },
  "miles": 25.4,
  "nearby": [
   "new-albany",
   "sunbury",
   "pataskala",
   "westerville",
   "gahanna"
  ]
 },
 {
  "slug": "lewis-center",
  "name": "Lewis Center",
  "county": "Delaware",
  "zips": [
   "43035"
  ],
  "geo": {
   "lat": 40.198,
   "lng": -83.01
  },
  "miles": 19,
  "nearby": [
   "powell",
   "delaware",
   "westerville",
   "worthington",
   "sunbury"
  ]
 },
 {
  "slug": "prairie-township",
  "name": "Prairie Township",
  "county": "Franklin",
  "zips": [
   "43119",
   "43228"
  ],
  "geo": {
   "lat": 39.938824,
   "lng": -83.186259
  },
  "miles": 6.9,
  "nearby": [
   "galloway",
   "lincoln-village",
   "hilliard",
   "grove-city",
   "west-jefferson",
   "london"
  ]
 },
 {
  "slug": "west-jefferson",
  "name": "West Jefferson",
  "county": "Madison",
  "zips": [
   "43162",
   "43140",
   "43119"
  ],
  "geo": {
   "lat": 39.9494,
   "lng": -83.308423
  },
  "miles": 13.4,
  "nearby": [
   "prairie-township",
   "galloway",
   "lincoln-village",
   "hilliard",
   "london"
  ]
 },
 {
  "slug": "plain-city",
  "name": "Plain City",
  "county": "Madison",
  "zips": [
   "43064"
  ],
  "geo": {
   "lat": 40.107518,
   "lng": -83.273587
  },
  "miles": 17,
  "nearby": [
   "dublin",
   "hilliard",
   "marysville",
   "west-jefferson",
   "london"
  ]
 },
 {
  "slug": "commercial-point",
  "name": "Commercial Point",
  "county": "Pickaway",
  "zips": [
   "43137",
   "43116",
   "43146"
  ],
  "geo": {
   "lat": 39.790864,
   "lng": -83.026601
  },
  "miles": 9.4,
  "nearby": [
   "harrisburg",
   "grove-city",
   "lockbourne",
   "obetz"
  ]
 },
 {
  "slug": "london",
  "name": "London",
  "county": "Madison",
  "zips": [
   "43140"
  ],
  "geo": {
   "lat": 39.892845,
   "lng": -83.438875
  },
  "miles": 20.3,
  "nearby": [
   "west-jefferson",
   "prairie-township",
   "plain-city",
   "galloway"
  ]
 }
];

export const COLUMBUS_ZIPS: string[] = ["43002","43109","43201","43202","43203","43204","43205","43206","43207","43209","43210","43211","43213","43214","43215","43218","43219","43222","43223","43224","43227","43228","43229","43231","43232","43235","43240"];

export const cityPath = (slug: string) => `/areas/${slug}-oh`;
export const cityBySlug = (slug: string) => CITY_FACTS.find((c) => c.slug === slug);
