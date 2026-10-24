import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "US Route 23", alternateName: ["US-23", "South High Street", "Columbus Pike"] },
  keyword: "US-23 towing",
  title: "US-23 Towing, Lockbourne to Delaware",
  description:
    "US-23 towing from the Pickaway County line and Lockbourne up South High Street, through campus and north to Delaware. Help 24-7. Call (614) 633-8163.",
  h1: "US-23 Breakdowns From the South End to Delaware",
  lede:
    "US-23 enters Columbus from the south as a rural divided road, becomes South High Street, splits into one-way streets downtown, and runs north to Delaware.",
  intro: [
    "US-23 towing is a mixed job, because US-23 changes character every few miles. South of the outerbelt it is a fast divided highway coming up from Circleville. Inside the city it is South High Street, then a pair of one-way downtown streets, then Indianola Avenue and High Street again on the north side. Past the north outerbelt it becomes Columbus Pike, and through Delaware it turns into a true freeway. The south end, around Lockbourne and the I-270 crossing at South High Street, is the part closest to our Harrisburg Pike yard.",
    "On the fast stretches, freeway rules apply. An injury or a car stuck in traffic is for 911; troopers take lesser problems on #677, dialed from a mobile. On the city stretches, most calls are a dead battery at the curb or a flat in a parking lot. Either way, Auto Lyft USA answers at (614) 633-8163 and quotes the job before a truck is assigned.",
  ],
  firstMoves: [
    "On the divided highway south of town or the Delaware freeway, get onto the right shoulder or into a lot, and put the flashers on.",
    "In a travel lane at highway speed, or hurt? Call 911 and stay buckled in.",
    "On a city street, pull to the curb if you can and set the flashers; you do not need 911 for a stall in a parking lane.",
    "For a non-emergency on the faster stretches, #677 reaches the Highway Patrol.",
    "Then ring us and read off the street sign plus whichever cross street is closest.",
  ],
  stretches: [
    {
      name: "Pickaway County line to the I-270 crossing",
      paragraphs: [
        "US-23 comes north out of Pickaway County from Circleville as a four-lane divided highway, past the turn for Commercial Point and up toward the Lockbourne and Rickenbacker side of Franklin County. Closer in it crosses SR-665 and SR-317, then reaches the outerbelt at I-270 exit 52, signed South High Street. At night this stretch is dark between crossroads, and a car that quits here can be a long way from an open business.",
        "Pull fully off the pavement if you can and note the nearest crossroad or mile marker. This is close to home for our trucks; the route from Harrisburg Pike to the south end of US-23 runs along the bottom of the city. See the [Lockbourne](/areas/lockbourne-oh) and [Commercial Point](/areas/commercial-point-oh) pages for the villages off this stretch.",
      ],
      exits: [
        { exit: "SR-665", road: "London-Groveport Road crossing", note: "South of the outerbelt" },
        { exit: "SR-317", road: "Toward Rickenbacker and Lockbourne", note: "" },
        { exit: "I-270 exit 52", road: "Outerbelt at South High Street", note: "Where US-23 enters the loop" },
      ],
    },
    {
      name: "South High Street into downtown",
      paragraphs: [
        "Inside the outerbelt, US-23 is South High Street, running north through the south side past Merion Village and the Brewery District toward downtown. Here it is a city street with lights, bus stops and parked cars, and most calls are the everyday kind: a battery that will not turn the engine over outside a store, keys locked in, a flat picked up on a pothole.",
        "Those jobs are handled at the curb. Our flat roadside rate covers a [jump start](/towing/jump-start), a [lockout](/towing/car-lockout) or a [tire change](/towing/flat-tire-change), and if the car truly will not go, the flatbed takes it to the shop you name.",
      ],
      exits: [],
    },
    {
      name: "Downtown and the University District one-way pair",
      paragraphs: [
        "Downtown, US-23 jogs onto a one-way pair: northbound traffic uses Fourth Street, and southbound traffic uses Third Street, which turns into Summit Street north of Fifth Avenue. The pair runs through Italian Village and the University District until Hudson Street, where the route shifts west and follows Indianola Avenue north.",
        "Hardly anyone calls this \"US-23\", and you do not need to. Name the street and its closest intersection, and say if the car is at the curb, in a lot or up a driveway. Narrow campus-area streets sometimes call for a wheel-lift truck instead of a full flatbed, and the dispatcher picks the right one when you describe the spot.",
      ],
      exits: [],
    },
    {
      name: "Clintonville, Worthington and the north outerbelt",
      paragraphs: [
        "North of campus, the route moves over to Morse Road and then back onto High Street near Beechwold, running up through Clintonville to Worthington. It crosses the north outerbelt at I-270 exit 23, signed for Worthington, Delaware and Toledo, and past that point High Street becomes Columbus Pike.",
        "Ramps at the north I-270 junction see heavy rush-hour traffic. If you stall on one, stay in the car and tell us you are on a ramp, not on High Street. The [Worthington page](/areas/worthington-oh) covers the town itself.",
      ],
      exits: [
        { exit: "I-270 exit 23", road: "North outerbelt", note: "Worthington, Delaware, Toledo" },
      ],
    },
    {
      name: "Lewis Center north to the Delaware freeway",
      paragraphs: [
        "Through Lewis Center, US-23 is a four-lane road with a grass median and at-grade intersections, lined with plazas, restaurants and dealerships. Through Delaware it becomes a freeway and crosses US-36. This is the far end of the road from our yard, and the dispatcher will give you an honest estimate rather than a rosy one.",
        "On the Delaware freeway, treat a stop like any interstate stop. Our [Lewis Center](/areas/lewis-center-oh) and [Delaware](/areas/delaware-oh) pages cover the side streets and lots.",
      ],
      exits: [
        { exit: "US-36", road: "Delaware interchange", note: "Freeway section through Delaware" },
      ],
    },
  ],
  tellDispatch: [
    "The street name on the sign: South High Street, Fourth Street, Summit Street, Indianola Avenue, Columbus Pike or US-23",
    "Your heading and the closest intersection, crossroad or storefront",
    "On the road, in a turn lane, against the curb, in a driveway or in a lot",
    "Whether there is room for a truck to pull in behind the car",
    "What failed, and if the drivetrain is electric or AWD",
    "Where it should go if it needs a ride",
  ],
  pricing: [
    `Every US-23 call is priced from our [rate card](/rates). The truck's drive to you is ${usd(RATES.enroutePerMile)} per mile from the yard. A tow adds ${usd(RATES.hookup)} to load and ${usd(RATES.loadedPerMile)} per loaded mile; roadside fixes (a boost, an unlock, a spare going on) are ${usd(RATES.roadsideFlat)} flat instead.`,
    `The ${usd(RATES.highway)} highway line applies only on limited-access freeway, such as the section through Delaware. A curbside call on South High Street or Indianola Avenue is a plain street call. Calls from the south end near Lockbourne carry few en-route miles because that end is close to our yard.`,
  ],
  faqs: [
    {
      q: "Which tow company covers US-23 south of Columbus?",
      a: "Auto Lyft USA covers the south end of US-23 at any hour, from the Pickaway County line past Lockbourne up to the outerbelt at South High Street. That stretch is a short run from our Harrisburg Pike yard. Call (614) 633-8163. Hurt, or sitting in traffic? Dial 911 before us.",
    },
    {
      q: "Is South High Street the same road as US-23?",
      a: "Yes. Inside the outerbelt on the south side, US-23 is South High Street. Downtown it splits onto Third and Fourth streets, then follows Summit Street, Indianola Avenue and High Street again further north. Use whatever name is on the street sign.",
    },
    {
      q: "Do you charge the highway fee on US-23?",
      a: `Only on limited-access freeway, like the stretch through Delaware. A breakdown on South High Street, Summit Street or Indianola Avenue is a regular street call without the ${usd(RATES.highway)} line. The dispatcher tells you which applies before the truck is assigned.`,
    },
    {
      q: "My car won't start on High Street near campus. Do I need a tow?",
      a: "Probably not. Most curbside calls in the University District are dead batteries or lockouts, fixed where the car sits for a flat roadside rate. If it still will not run, it rides on the flatbed to your shop. Tell us whether the car is in a metered space, a lot or a driveway.",
    },
    {
      q: "I'm stuck on the dark stretch of US-23 near Lockbourne. What should I tell you?",
      a: "Northbound or southbound, the nearest crossroad, and any business or landmark you can see. Keep the flashers on so the driver can spot you. If any part of the car is on the pavement at speed, call 911 first.",
    },
    {
      q: "My car went into the ditch along US-23. Can it be pulled out?",
      a: `Usually. With the car on its wheels and no one injured, a [winch-out](/towing/winch-out), billed at ${usd(RATES.winchPerHour)} an hour, drags it back to firm ground. Say roughly how many feet from the pavement it sits, and in what: mud, grass, snow.`,
    },
    {
      q: "Do you tow for the county or the city on US-23?",
      a: "No. Auto Lyft USA is independent and comes when the driver or owner asks. A car removed on a police order was towed by whichever company the police called.",
    },
  ],
  cities: ["lockbourne", "commercial-point", "obetz", "groveport", "worthington", "lewis-center", "powell", "delaware"],
  hoods: ["merion-village", "brewery-district", "downtown", "italian-village", "weinland-park", "university-district", "old-north", "clintonville", "beechwold"],
  services: ["jump-start", "car-lockout", "flat-tire-change", "winch-out", "wheel-lift-towing", "flatbed-towing"],
  related: ["i-270", "i-71", "sr-315", "i-70", "i-670"],
  sources: ["https://en.wikipedia.org/wiki/U.S._Route_23_in_Ohio", "https://en.wikipedia.org/wiki/Interstate_270_(Ohio)"],
  notAffiliated:
    "Auto Lyft USA is an independent company. It is not a contractor for ODOT, Franklin or Delaware County, the City of Columbus or the Highway Patrol.",
} satisfies Omit<Highway, "slug" | "label">;
