import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "Interstate 670", alternateName: ["I-670"] },
  keyword: "I-670 towing",
  title: "I-670 Towing: Downtown, Airport, Gahanna",
  description:
    "I-670 towing from the I-70 split west of downtown, under the High Street cap, past the airport to I-270 and Gahanna. SmartLane tips. Call (614) 633-8163.",
  h1: "Trouble on I-670? From the West Split to the Airport",
  lede:
    "I-670 is only about ten miles long, but it packs in tight ramps, a sunken downtown trench, airport traffic and a part-time shoulder lane. Here is how to handle each.",
  intro: [
    "I-670 towing starts closest to us at the west end, where the interstate peels off I-70 west of downtown, a short run from our Harrisburg Pike yard. From there I-670 passes Franklinton and Grandview, swaps traffic with SR-315, drops below street level through the north edge of downtown, crosses I-71, and heads east past the airport to end at I-270 by Gahanna. Eastbound between I-71 and I-270 it also has the SmartLane, a shoulder that turns into a travel lane at busy times.",
    "If your car is in a lane, if anyone is hurt, or if you are stuck in the SmartLane while it is open, call 911 first. Troopers answer #677 from cell phones when the trouble is not an emergency. After that, call Auto Lyft USA at (614) 633-8163 for the truck.",
  ],
  firstMoves: [
    "Flashers on. If the car still rolls, aim for the next exit ramp rather than stopping in the walled downtown section.",
    "Eastbound past I-71, check the overhead signs: a green arrow over the left shoulder means it is open to traffic, so that shoulder is not a safe place to stop. Steer right.",
    "Already stopped in an open SmartLane or any live lane? Stay belted in and dial 911.",
    "Safe and off the lanes, but want the Patrol aware? Dial #677.",
    "Then phone us: direction first, then the exit you most recently saw.",
  ],
  stretches: [
    {
      name: "The west end: off I-70, past Grandview and onto 315",
      paragraphs: [
        "I-670 leaves I-70 at I-70's exit 96, eastbound, just west of downtown. In its first two miles come a westbound-only ramp to US-33 west (1A), Grandview Avenue (1B), and then 2A and 2B, the split toward Dublin Road and both directions of Route 315. Grandview Heights sits to the north and Franklinton to the south.",
        "Those SR-315 ramps are short and fast, and breakdowns on them are some of the trickiest calls on the road. Keep your belt on and tell us exactly which ramp, because the truck may need to come in from SR-315 rather than from I-670. This end is near our yard, so it is usually among our quicker freeway calls. See the [SR-315 page](/highways/sr-315) for the Olentangy side.",
      ],
      exits: [
        { exit: "start", road: "I-70 (I-70 exit 96)", note: "West end, west of downtown" },
        { exit: "1A", road: "US-33 west", note: "Westbound exit only" },
        { exit: "1B", road: "Grandview Avenue", note: "Signed exit 1 eastbound" },
        { exit: "2A / 2B", road: "US-33 Dublin Road and SR-315 south / SR-315 north", note: "Tight ramps" },
      ],
    },
    {
      name: "Through the trench: Neil Avenue to Spring Street",
      paragraphs: [
        "Between SR-315 and I-71, I-670 runs below street level along the north side of downtown, with retaining walls on both sides and ramps every few blocks. Neil Avenue and Goodale Street (exit 3) serve the ballpark and the soccer stadium, exit 4 serves High, Third and Fourth streets for the Convention Center and Nationwide Arena, exit 4C reaches Cleveland and Leonard avenues, and exit 5 is Spring Street and the I-71 ramps. High Street crosses over the trench on a cap lined with shops.",
        "If the car is still moving, take the next ramp up to the street; a downtown curb or lot is a safer place to wait than a walled shoulder. On game and show nights, event traffic slows everything. Our [Huntington Park](/local/huntington-park), [Crew stadium](/local/crew-stadium), [Convention Center](/local/convention-center) and [Nationwide Arena](/local/nationwide-arena) pages cover the lots and garages.",
      ],
      exits: [
        { exit: "3", road: "Neil Avenue / Goodale Street", note: "Ballpark and soccer stadium" },
        { exit: "4", road: "US-23 Third and Fourth streets / High Street", note: "Convention Center, Nationwide Arena" },
        { exit: "4C", road: "Cleveland Avenue / Leonard Avenue", note: "" },
        { exit: "5", road: "Spring Street / I-71", note: "" },
      ],
    },
    {
      name: "East of I-71: Fifth Avenue and the airport exit",
      paragraphs: [
        "Once it clears I-71 the interstate widens out. Leonard Avenue comes first, then Fifth Avenue, where US-62 merges in and shares the pavement all the way to the east end. The airport exit, number 9, lands you on a cluster of roads (Stelzer, Johnstown, Cassady) that lead to John Glenn Columbus International.",
        "A lot of our calls from this stretch are travelers whose car sat in long-term parking and will not start, plus rideshare drivers with a flat. For the terminal garages and lots, see our [CMH airport page](/local/cmh-airport).",
      ],
      exits: [
        { exit: "6", road: "Leonard Avenue", note: "" },
        { exit: "7", road: "US-62 west, Fifth Avenue", note: "US-62 joins from here east" },
        { exit: "9", road: "Stelzer Road / Johnstown Road / Cassady Avenue", note: "Airport exit" },
      ],
    },
    {
      name: "The SmartLane and the east end at Gahanna",
      paragraphs: [
        "Eastbound from I-71 to I-270, ODOT can open the left shoulder as an extra travel lane when traffic is heavy. Overhead signs show a green arrow above the shoulder when it is open and a red X when it is closed. While it is open, there is effectively no left shoulder, so a car in trouble should move right. If you get stuck in the SmartLane while it is open, put the flashers on, stay buckled in and call 911 right away so the lane can be closed behind you.",
        "Exit 10 is the east end, where I-670 meets I-270 and US-62 continues toward Gahanna. This is the far end of the road from our yard, and the dispatcher will tell you the honest wait. The [Gahanna page](/areas/gahanna-oh) covers the city's streets.",
      ],
      exits: [
        { exit: "SmartLane", road: "Eastbound left shoulder, I-71 to I-270", note: "Green arrow open, red X closed" },
        { exit: "10", road: "I-270 / US-62 east to Gahanna", note: "East end" },
      ],
    },
  ],
  tellDispatch: [
    "Airport-bound (east) or downtown-bound (west)",
    "The last exit and the next one if you know it",
    "Which side you stopped on, whether that was the SmartLane, and the color showing above it",
    "Whether you are down in the walled downtown section",
    "The problem, and whether the car is electric",
    "Where it should go if it rides: home, a shop, or an airport lot",
  ],
  pricing: [
    `I-670 calls are priced from our [rate card](/rates). The truck's trip out costs ${usd(RATES.enroutePerMile)} a mile. Loading and hauling the car add ${usd(RATES.hookup)} to load and ${usd(RATES.loadedPerMile)} per loaded mile, while a jump or spare-tire swap is ${usd(RATES.roadsideFlat)} instead. Interstate shoulder work adds ${usd(RATES.highway)}.`,
    "Calls from the west end, near the I-70 split, carry the fewest en-route miles. If you coast off at an exit and wait on a city street, the highway line normally drops off your bill.",
  ],
  faqs: [
    {
      q: "What do the green arrow and red X on I-670 mean?",
      a: "They control the SmartLane, the eastbound left shoulder between I-71 and I-270. A green arrow means the shoulder is open as a travel lane; a red X means it is closed and back to being a shoulder. When the arrow is green, do not stop on the left. Move right if you can, and call 911 if you are stuck in that lane.",
    },
    {
      q: "Who handles I-670 towing near downtown and Grandview?",
      a: "Auto Lyft USA, at any hour. The west end of I-670, by the I-70 split, Grandview Avenue and the SR-315 ramps, is a short drive from our Harrisburg Pike yard. Call (614) 633-8163. Blocking a lane? 911 comes before us.",
    },
    {
      q: "My car broke down in the sunken section of I-670 downtown. What now?",
      a: "If it still moves, take the next ramp up to street level and wait there. If it will not move, stay belted in with the flashers on and call 911, because the walled section has little room on the shoulders. Once the lane is safe, we hook up and pull it out.",
    },
    {
      q: "Can you help me at the airport exit on I-670?",
      a: "Yes, on the ramp, the roads around the airport, or in its lots. Most airport calls are batteries that went flat during a long trip, fixed with a jump for a flat roadside rate. See [CMH airport towing](/local/cmh-airport).",
    },
    {
      q: "How much is a tow off I-670?",
      a: `${usd(RATES.hookup)} to hook up, ${usd(RATES.loadedPerMile)} per loaded mile and ${usd(RATES.enroutePerMile)} a mile for the drive out, and on top of that the ${usd(RATES.highway)} interstate charge. From 10 PM to 6 AM there is an extra ${usd(RATES.afterHours)}. The dispatcher totals it before a truck is assigned.`,
    },
    {
      q: "What number gets the Highway Patrol on I-670?",
      a: "#677 from a cell phone for a non-emergency; 911 for a crash, an injury or a car in a lane. They handle safety, not your tow, so call us when you are out of danger.",
    },
    {
      q: "Are you ODOT's tow company on I-670?",
      a: "No. Auto Lyft USA is independent and comes when the driver or owner calls. If officers had your car removed, ask them where it was taken.",
    },
  ],
  cities: ["grandview-heights", "marble-cliff", "valleyview", "gahanna"],
  hoods: ["franklinton", "harrison-west", "short-north", "italian-village", "downtown", "king-lincoln-bronzeville", "linden"],
  services: ["emergency-towing", "jump-start", "flat-tire-change", "parking-garage-towing", "car-battery-replacement", "flatbed-towing"],
  related: ["i-70", "sr-315", "i-71", "i-270", "us-23"],
  sources: ["https://en.wikipedia.org/wiki/Interstate_670_(Ohio)", "https://en.wikipedia.org/wiki/Interstate_70_in_Ohio"],
  notAffiliated:
    "Auto Lyft USA is independent and not affiliated with ODOT, the Highway Patrol, the City of Columbus or the Columbus Regional Airport Authority.",
} satisfies Omit<Highway, "slug" | "label">;
