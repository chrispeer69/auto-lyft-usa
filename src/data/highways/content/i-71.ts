import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "Interstate 71", alternateName: ["I-71"] },
  keyword: "I-71 towing",
  title: "I-71 Towing in Columbus and Grove City",
  description:
    "I-71 towing from the Madison County line through Grove City, downtown and up to Polaris. Tire swaps, jumps, fuel and flatbeds 24-7. Call (614) 633-8163.",
  h1: "Broke Down on I-71? Help From Grove City to Polaris",
  lede:
    "The south end of I-71, from the Harrisburg and Orient exits up through Stringtown Road, is the closest freeway to our yard. We cover the rest of the road too.",
  intro: [
    "I-71 towing is the call we get most from the south side. The interstate runs up from Madison County past Harrisburg and Grove City, crosses I-270, ducks through the downtown overlap with I-70, then heads north past Linden, Clintonville and the north outerbelt to Polaris and Delaware County. Our yard on Harrisburg Pike sits a short hop from the south-end exits, and our trucks are parked around the metro, so the nearest one takes the job wherever you are on the road.",
    "Before anything else: if someone is injured, the car is sitting in a lane, or you do not feel safe where you stopped, dial 911. Troopers also take #677 from any cell phone when the problem is not an emergency. When you are out of danger, call Auto Lyft USA at (614) 633-8163. The dispatcher prices the job before a truck is assigned and gives you a live arrival estimate.",
  ],
  firstMoves: [
    "Steer for the right shoulder, or the widest flat spot you can reach, and switch on the hazard flashers.",
    "If you stopped in a lane, in the downtown overlap or on a ramp with no shoulder, call 911 from inside the car.",
    "Keep everyone buckled in. A parked car is struck from behind more often than drivers expect, and the seat belt is your best protection.",
    "Not an emergency but you still want police aware? From a cell phone, dial #677 for the Highway Patrol.",
    "Call us at (614) 633-8163 with your direction and the last exit sign you passed.",
  ],
  stretches: [
    {
      name: "Madison County line to Grove City",
      paragraphs: [
        "South of the outerbelt, I-71 is a fast, open interstate through farm fields, with long gaps between interchanges. Exit 84 at SR-56 is the Mount Sterling and London exit, and exit 94 is US-62 and SR-3, the same Harrisburg Pike our yard sits on, signed for Grove City, Orient and Harrisburg. Between those two there is almost nothing but shoulder, so a driver who runs low on gas or loses a tire here may be a long walk from anything. Do not walk. Stay with the car and let the truck come to you.",
        "Exit 97 at SR-665, London-Groveport Road, is the southern doorway into Grove City and a common pull-off for drivers who felt something go wrong a mile back. If you made it off the ramp and into a gas station or lot, you are no longer on the interstate, and the call is priced as an ordinary street call.",
      ],
      exits: [
        { exit: "84", road: "SR-56, Mount Sterling and London", note: "Madison County; long empty stretch to the north" },
        { exit: "94", road: "US-62 / SR-3, Grove City, Orient, Harrisburg", note: "Harrisburg Pike, the road our yard is on" },
        { exit: "97", road: "SR-665, London-Groveport Road", note: "South Grove City" },
      ],
    },
    {
      name: "Stringtown Road and the I-270 crossing",
      paragraphs: [
        "Exit 100 at Stringtown Road feeds the big Grove City shopping strip, and it lands right before the I-270 interchange. That puts merging outerbelt traffic, exiting shoppers and through drivers in the same few hundred yards. A car that dies on one of these ramps is in a tight spot. Tell the dispatcher you are on a ramp, not the main line, and which one, because the truck has to approach a ramp from a different direction.",
        "For trouble inside Grove City itself, our [Grove City towing page](/areas/grove-city-oh) covers the town streets and lots, and the [Harrisburg page](/areas/harrisburg-oh) covers the village end of US-62.",
      ],
      exits: [
        { exit: "100", road: "Stringtown Road, Grove City", note: "Retail traffic; ramps feed straight into the I-270 merge" },
        { exit: "101", road: "I-270 outerbelt", note: "Signed 100 on the northbound side" },
      ],
    },
    {
      name: "Frank Road to the downtown overlap",
      paragraphs: [
        "Inside the outerbelt, SR-104 at Frank Road (exit 104) and Greenlawn Avenue (exit 105) sit on the south side near the Scioto. Then I-71 splits off I-70 west at exit 106A and SR-315 north at 106B, and for a short stretch through downtown it shares its pavement with I-70. This is the tightest part of the road, with lane drops, left exits and short merges, so a stall here is a 911 call first, every time.",
        "Once the lane is protected or you are on a real shoulder, we can hook up and clear the car to a shop, your home or our yard. For the interchange tangle itself, the [I-70 page](/highways/i-70) explains the downtown split from the other side.",
      ],
      exits: [
        { exit: "104", road: "SR-104 / Frank Road", note: "South side, near the river" },
        { exit: "105", road: "Greenlawn Avenue", note: "Runs east toward South High Street" },
        { exit: "106A / 106B", road: "I-70 west / SR-315 north", note: "Start of the downtown overlap" },
        { exit: "107", road: "I-70 east", note: "End of the overlap; a left exit going south" },
      ],
    },
    {
      name: "North of downtown: the close-spaced city exits",
      paragraphs: [
        "Leaving downtown northbound, the exits come about a mile apart or less: Main Street and US-40 Broad Street, then I-670 and Spring Street, Fifth Avenue (no northbound exit), 11th Avenue, 17th Avenue for the fairgrounds, Hudson Street, Weber Road, North Broadway, Cooke Road, Morse Road and SR-161. With short ramps and rush-hour crawling, the usual calls here are overheated engines and tired batteries rather than blowouts.",
        "Because the exits are so close, the exit name helps more than the number. Saying \"just past the 17th Avenue exit, northbound\" gets the driver to you faster than a guess at a mile marker.",
      ],
      exits: [
        { exit: "108A / 108B", road: "Main Street / US-40 Broad Street", note: "Main Street has no northbound exit" },
        { exit: "109A / 109B", road: "I-670 / Spring Street", note: "Airport traffic joins here" },
        { exit: "110A / 110B", road: "Fifth Avenue / 11th Avenue", note: "Fifth Avenue has no northbound exit" },
        { exit: "111", road: "17th Avenue", note: "Ohio Expo Center and fairgrounds" },
        { exit: "112 / 113", road: "Hudson Street / Weber Road", note: "" },
        { exit: "114 / 115", road: "North Broadway / Cooke Road", note: "" },
        { exit: "116 / 117", road: "Morse and Sinclair roads / SR-161", note: "" },
      ],
    },
    {
      name: "The north outerbelt, Polaris and beyond",
      paragraphs: [
        "Exit 119 is the north I-270 interchange, and exit 121 is Polaris Parkway, with the Gemini Place ramp alongside. Shopping traffic can stack up the ramps on weekends and in December. Beyond Polaris the interstate crosses into Delaware County, heading for the Sunbury exit where US-36 and SR-37 meet it.",
        "These are the farthest I-71 calls from our yard, and the dispatcher will be straight with you about the wait. Running dry between exits is common out here, and [fuel delivery](/towing/fuel-delivery) brings enough to reach a pump. For the mall lots, see our [Polaris area page](/local/polaris).",
      ],
      exits: [
        { exit: "119", road: "I-270 outerbelt (north)", note: "" },
        { exit: "121", road: "Polaris Parkway / Gemini Place", note: "Mall and office traffic" },
      ],
    },
  ],
  tellDispatch: [
    "Your heading, north or south, plus the most recent exit (its name works if the number went by too fast)",
    "Main line, ramp, or the shoulder of a ramp; and whether any wheel is over the white line",
    "What the car did: a bang and a pull (tire), a slow fade (fuel or alternator), steam (overheating), or nothing at all",
    "Whether you have a usable spare and the wheel-lock key",
    "Make and model, and whether it is electric or all-wheel drive",
    "The shop or address for the car if it has to ride, and whether anyone is there to take it",
  ],
  pricing: [
    `A tow off I-71 adds up from our [rate card](/rates): ${usd(RATES.enroutePerMile)} per mile for the drive from our yard, ${usd(RATES.hookup)} to load the car, ${usd(RATES.loadedPerMile)} for each mile it rides, and a ${usd(RATES.highway)} charge for working the interstate shoulder. If a tire swap, jump or fuel gets you rolling, there is no hook-up and no loaded miles.`,
    "Calls from the Grove City end usually carry the fewest en-route miles of anywhere on the road, since that stretch is next to our yard. The dispatcher reads you the total before a truck is assigned.",
  ],
  faqs: [
    {
      q: "Who handles I-71 towing near Grove City?",
      a: "We do, at any hour. Auto Lyft USA is based on Harrisburg Pike, which is the road exit 94 lands on, so the stretch from Orient and Harrisburg up past Stringtown Road is home ground for our trucks. Call (614) 633-8163 with your direction and the last exit. If you are in a lane or hurt, call 911 first.",
    },
    {
      q: "I have a flat on I-71 and the shoulder is narrow. Should I change it myself?",
      a: "No. Stay buckled in with the flashers on and call. When the bad tire faces traffic or there is no room to kneel beside it, our driver may load it and carry it to the next exit or a wide lot to swap the wheel there. That is about safety, and the dispatcher tells you up front how it will be billed. See [flat tire change](/towing/flat-tire-change).",
    },
    {
      q: "What is #677 and when should I use it on I-71?",
      a: "It is the cell-phone shortcut to the Ohio State Highway Patrol. Use it when you are stopped on the interstate and want troopers aware but nobody is hurt and you are off the lanes. If a lane is blocked or anyone is injured, call 911 instead. Neither one sends a tow for you, so call us after.",
    },
    {
      q: "Can you bring gas to the empty stretch south of Grove City?",
      a: `Yes. Fuel delivery is ${usd(RATES.fuelBase)} plus the fuel at ${RATES.fuelMultiplier} times the pump price, with the drive out and the interstate charge on top. We carry regular unleaded and diesel. The driver puts in enough to reach a station, usually at the next exit north.`,
    },
    {
      q: "My car stalled in the I-71 and I-70 overlap downtown. What now?",
      a: "Hazards on, belts on, and call 911 before you call anyone else. The overlap has short merges and few usable shoulders, so police may need to protect the lane first. Once that is done, we hook up and get the car out of the interchange.",
    },
    {
      q: "How much is a tow from I-71?",
      a: `A loaded tow is ${usd(RATES.hookup)} to hook up and ${usd(RATES.loadedPerMile)} per mile on the deck, plus ${usd(RATES.enroutePerMile)} per mile from our yard and the ${usd(RATES.highway)} interstate charge. Between 10 PM and 6 AM there is an extra ${usd(RATES.afterHours)}. Ohio sales tax follows the pickup county.`,
    },
    {
      q: "Are you the state's tow company on I-71?",
      a: "No. We are independent and come when you, a relative or your employer calls us. If police or ODOT had your car removed, the officer can tell you which company took it and where it is stored.",
    },
    {
      q: "Can my electric car be towed from I-71?",
      a: "Yes. An electric car never has a tire on the road while we move it, all four wheels off the ground: it goes on a flatbed in transport mode, never dragged on two wheels. Say it is electric when you call so the right truck is sent. Our [EV towing page](/towing/ev-towing) has the details.",
    },
  ],
  cities: ["grove-city", "harrisburg", "urbancrest", "worthington", "lewis-center", "sunbury"],
  hoods: ["merion-village", "brewery-district", "downtown", "weinland-park", "linden", "clintonville", "northland"],
  services: ["emergency-towing", "flat-tire-change", "fuel-delivery", "jump-start", "flatbed-towing", "accident-towing"],
  related: ["i-270", "i-70", "us-23", "sr-315", "i-670"],
  sources: ["https://en.wikipedia.org/wiki/Interstate_71_in_Ohio"],
  notAffiliated:
    "Auto Lyft USA is an independent towing company. It has no contract with ODOT, the City of Columbus or the State Highway Patrol and does not speak for any of them.",
} satisfies Omit<Highway, "slug" | "label">;
