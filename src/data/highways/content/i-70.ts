import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "Interstate 70", alternateName: ["I-70"] },
  keyword: "I-70 towing",
  title: "I-70 Towing, West Jefferson to Etna",
  description:
    "I-70 towing across Columbus: the west side past Hilliard-Rome Road, the downtown split and east to Etna. Shoulder help 24-7. Call (614) 633-8163.",
  h1: "Stopped on I-70? West Side, Downtown Split and East",
  lede:
    "I-70 west of downtown runs past the Hilltop, Lincoln Village and Galloway, a short drive from our Harrisburg Pike yard. We cover the road out to Etna as well.",
  intro: [
    "I-70 towing for us starts on the west side. The interstate comes in from Madison County past West Jefferson and Lake Darby, crosses I-270, rolls past the Hilltop and Franklinton into the downtown split with I-71, then heads east past Bexley, Whitehall and Reynoldsburg to Etna in Licking County. Harrisburg Pike, where our office and yard are, sits just south of the west-side stretch, so that end of the road is our backyard.",
    "If you just rolled to a stop: a car sitting in a lane, an injury, or a gut feeling that you are not safe means 911 comes first. For a highway problem that is not an emergency, the Highway Patrol answers #677 from any cell phone. When everyone is out of harm's way, call Auto Lyft USA at (614) 633-8163 and the dispatcher will quote the job and give you a live estimate for the truck.",
  ],
  firstMoves: [
    "Get as far right as the car will go and turn the flashers on. On the rural west end, the grass beyond the shoulder is softer than it looks, so stay on pavement.",
    "If you are in the innerbelt, a lane, or a gore between ramps, call 911 before anything else.",
    "Belts on, doors closed, everyone inside. Do not stand between the car and the traffic.",
    "When it is not an emergency but you want a trooper to know, dial #677.",
    "Call us. Lead with east or west, then the most recent green sign.",
  ],
  stretches: [
    {
      name: "Madison County: London, West Jefferson and Lake Darby",
      paragraphs: [
        "West of Franklin County, I-70 is long, straight and dark at night. Exit 72 is SR-56 for Mechanicsburg and London, exit 79 is US-42 for Plain City and London, exit 80 is SR-29 into West Jefferson, and exit 85 is SR-142, Plain City-Georgesville Road, which serves West Jefferson and the Lake Darby area. The gaps between those exits are long enough that a dead battery or an empty tank leaves you a long way from help on foot.",
        "Out here, a deer strike or a slide into the median in an ice storm is as common as a mechanical failure. If the car is upright, nobody is hurt and it is just stuck, a [winch-out](/towing/winch-out) may get it back on the pavement without a tow. Our [West Jefferson](/areas/west-jefferson-oh) and [London](/areas/london-oh) pages cover the towns off these exits.",
      ],
      exits: [
        { exit: "72", road: "SR-56, Mechanicsburg and London", note: "" },
        { exit: "79", road: "US-42, Plain City and London", note: "" },
        { exit: "80", road: "SR-29, West Jefferson", note: "" },
        { exit: "85", road: "SR-142, Plain City-Georgesville Road", note: "West Jefferson and Lake Darby" },
      ],
    },
    {
      name: "Galloway to the I-270 interchange",
      paragraphs: [
        "For most westbound drivers coming home, Hilliard-Rome Road (exit 91) is the first Franklin County exit; and it sits on the northern edge of Galloway, a quick reach for Lincoln Village and Prairie Township. Then exit 93 is I-270, where outerbelt traffic sorts itself into and out of the interstate on long, fast ramps. Exit 94 is Wilson Road.",
        "From our yard, a truck heading to this stretch runs against the downtown traffic, which helps on a weekday evening. The [Galloway](/areas/galloway-oh) and [Prairie Township](/areas/prairie-township-oh) pages cover the side streets if you made it off the interstate.",
      ],
      exits: [
        { exit: "91", road: "Hilliard-Rome Road", note: "North edge of Galloway" },
        { exit: "93", road: "I-270 outerbelt", note: "Long merge ramps both ways" },
        { exit: "94", road: "Wilson Road", note: "" },
      ],
    },
    {
      name: "Hilltop and Franklinton into the split",
      paragraphs: [
        "Inside the outerbelt, I-70 passes the Hilltop with exits at Hague Avenue (95, westbound exit only), I-670 toward the airport (96, eastbound exit only), and West Broad Street (97), then the Central Avenue, Sullivant Avenue and Mound Street ramps before it crosses the Scioto. Callers here often give a street name rather than an exit, and that works fine. If you can see the river, the downtown skyline or a stadium, tell us; landmarks help.",
        "Then the road joins I-71 for the downtown overlap. Lanes shift, exits leave from the left, and ramps have been reworked during the long innerbelt rebuild, so the signs you see may not match an old map. Treat any stop in the overlap as a 911 call first. Parsons Avenue (101B) is an eastbound-only exit on the south edge of downtown.",
      ],
      exits: [
        { exit: "95", road: "Hague Avenue", note: "Westbound exit only" },
        { exit: "96", road: "I-670 east, airport", note: "Eastbound exit only" },
        { exit: "97", road: "US-40, West Broad Street", note: "" },
        { exit: "98A / 98B", road: "Central Avenue and Sullivant Avenue / Mound Street", note: "Westbound exits" },
        { exit: "99", road: "I-71 south and SR-315 north", note: "West end of the overlap" },
        { exit: "101B", road: "Parsons Avenue", note: "Eastbound exit only" },
      ],
    },
    {
      name: "East of downtown to Brice Road",
      paragraphs: [
        "Past the overlap, the exits come quickly: Miller and Kelton avenues (102), Main Street toward Bexley (103A), Livingston Avenue and Alum Creek Drive (103B), US-33 and James Road (105), and Hamilton Road for Whitehall (107). Then exit 108 is the east I-270 interchange, and exit 110 is Brice Road for Reynoldsburg.",
        "Work zones move along this busy retail stretch, and a narrowed shoulder is no place to jack up a car. Let the driver set up behind the truck's lights and do the work.",
      ],
      exits: [
        { exit: "102", road: "Miller Avenue / Kelton Avenue", note: "Driving Park" },
        { exit: "103A / 103B", road: "Main Street, Bexley / Livingston Avenue and Alum Creek Drive", note: "" },
        { exit: "105", road: "US-33 / James Road", note: "Berwick side" },
        { exit: "107", road: "SR-317, Hamilton Road", note: "Whitehall" },
        { exit: "108", road: "I-270 outerbelt (east)", note: "" },
        { exit: "110", road: "Brice Road, Reynoldsburg", note: "" },
      ],
    },
    {
      name: "Pickerington, Etna and the Licking County line",
      paragraphs: [
        "Exit 112 is SR-256, signed for Pickerington and Reynoldsburg, with SR-204 Blacklick-Eastern Road just beyond it eastbound. Exit 118 is SR-310 for Etna and Pataskala. This is the far end of the corridor from our yard, and the dispatcher will give you a straight estimate rather than a hopeful one.",
      ],
      exits: [
        { exit: "112", road: "SR-256, Pickerington and Reynoldsburg", note: "" },
        { exit: "118", road: "SR-310, Etna and Pataskala", note: "" },
      ],
    },
  ],
  tellDispatch: [
    "Eastbound or westbound, plus the last exit, street sign or landmark",
    "Shoulder, median side, ramp, or a lane; and if you are inside the downtown overlap",
    "What happened: tire, no power, smoke or steam, out of fuel, crash, or off the road",
    "Whether the car is upright and on pavement if it slid off",
    "Make, model, and whether it is electric or all-wheel drive",
    "Where it should go if it rides, and a number that will stay on",
  ],
  pricing: [
    `An I-70 tow is figured from our [rate card](/rates): ${usd(RATES.enroutePerMile)} per mile out to you, a ${usd(RATES.hookup)} hook-up, ${usd(RATES.loadedPerMile)} per loaded mile, and ${usd(RATES.highway)} for an interstate shoulder. Overnight, from 10 PM to 6 AM, adds ${usd(RATES.afterHours)}. A jump or tire swap is ${usd(RATES.roadsideFlat)} instead of the tow lines.`,
    `West-side calls, from the Hilltop out to Galloway, are a short run from our yard. A [winch-out](/towing/winch-out) is billed at ${usd(RATES.winchPerHour)} an hour. You hear the whole figure on the call, before anyone is sent.`,
  ],
  faqs: [
    {
      q: "Who can tow my car off I-70 west of downtown Columbus?",
      a: "Auto Lyft USA, at any hour. Our yard is on Harrisburg Pike, just south of the west-side stretch, and covers everything from the Hilltop out past Galloway to West Jefferson. Call (614) 633-8163. If you are in a lane or hurt, call 911 first.",
    },
    {
      q: "My car quit on I-70 near Hilliard-Rome Road at night. What do I do?",
      a: "Pull as far right as you can, flashers on, and stay buckled in. A car touching a travel lane means calling 911. Then call us and say westbound or eastbound and that you are near exit 91. Someone answers at 3 AM just as at noon; between 10 PM and 6 AM the overnight line is added to the quote.",
    },
    {
      q: "What do I dial for the Highway Patrol on I-70?",
      a: "From a cell phone, #677 reaches the Ohio State Highway Patrol for a problem that is not an emergency. Anything with an injury or a blocked lane is a 911 call. Neither sends a tow for your car, so call us once you are safe.",
    },
    {
      q: "I slid into the I-70 median west of town. Can you pull me out?",
      a: "Usually. If the car is upright, nobody is hurt and police are not needed, a winch-out often puts it back on the pavement. Describe the distance from the pavement and what is under the tires: grass, mud or snow. An injury, or a car lying on its side, means 911 before us.",
    },
    {
      q: "Can you swap a tire in the I-70 innerbelt?",
      a: "Not in a live lane. In the downtown overlap the shoulders are thin or missing, so call 911 first. Once the lane is protected, we usually load the car and carry it to a safe lot to change the tire there, or, with no good spare in the trunk, straight to a tire shop.",
    },
    {
      q: "Do you tow electric cars from I-70?",
      a: "Yes. EVs ride on the flatbed in transport mode with all four wheels off the ground. If the small 12-volt battery is dead, the driver boosts it so the car can be put in transport mode. See [EV towing](/towing/ev-towing).",
    },
    {
      q: "Are you the city's or the state's tow company on I-70?",
      a: "No. Auto Lyft USA only rolls when the person responsible for the car phones us. A car removed by police was towed on their order; the officer or the impound lot can tell you where it is.",
    },
  ],
  cities: ["west-jefferson", "london", "galloway", "prairie-township", "lincoln-village", "valleyview", "bexley", "whitehall", "reynoldsburg", "brice", "pickerington", "etna", "pataskala"],
  hoods: ["hilltop", "westgate", "franklinton", "downtown", "driving-park", "berwick", "eastmoor"],
  services: ["emergency-towing", "winch-out", "flat-tire-change", "jump-start", "fuel-delivery", "ev-towing"],
  related: ["i-71", "i-270", "i-670", "sr-315", "us-23"],
  sources: ["https://en.wikipedia.org/wiki/Interstate_70_in_Ohio"],
  notAffiliated:
    "Auto Lyft USA is independent. We hold no towing contract with ODOT, the City of Columbus or the Highway Patrol and do not act for them.",
} satisfies Omit<Highway, "slug" | "label">;
