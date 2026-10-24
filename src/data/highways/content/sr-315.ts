import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "Ohio State Route 315", alternateName: ["SR-315", "Route 315", "Olentangy Freeway", "Olentangy Expressway"] },
  keyword: "SR-315 towing",
  title: "SR-315 Towing on the Olentangy Freeway",
  description:
    "SR-315 towing on the Olentangy freeway, from the I-70 and I-71 junction past Ohio State and Henderson Road to I-270 and Powell. Call (614) 633-8163.",
  h1: "Route 315 Tows: Downtown Junction to Powell",
  lede:
    "Plenty of drivers call it I-315. It is actually State Route 315, a freeway from the downtown junction up the Olentangy to I-270, then a two-lane road north.",
  intro: [
    "SR-315 towing calls usually start with a correction: there is no I-315. Route 315 is a state route, not an interstate, though its southern half is built like one. It begins at the big I-70 and I-71 junction on the southwest edge of downtown, rises past Franklinton and Grandview, follows the Olentangy River past Ohio State, Riverside Methodist and the Henderson and Bethel shopping areas, and ends as a freeway at I-270. North of the outerbelt it shrinks to a winding two-lane road toward Powell and US-23.",
    "The downtown end is a short drive from our Harrisburg Pike yard, which keeps that busy stretch quick to reach. Dial 911 first when a lane is blocked by your car or somebody is injured. For a freeway problem that is not an emergency, dial #677 from your cell for the Highway Patrol. Then call Auto Lyft USA at (614) 633-8163.",
  ],
  firstMoves: [
    "Flashers on. Coast to the right shoulder if there is one; on the downtown ramps there often is not.",
    "Never walk across 315 to reach a wider spot or the other side. Stay put.",
    "Stuck in a lane, on a ramp with no room, or hurt: 911, from inside the car, belt on.",
    "Off the lanes and safe but want a trooper to know: #677.",
    "Then call us with north or south and the last exit name.",
  ],
  stretches: [
    {
      name: "The downtown end: I-70, I-71 and I-670",
      paragraphs: [
        "Route 315 starts at the Mound-Sandusky interchange with I-70 and I-71, then packs four exits into its first stretch: Rich and Town streets (1A), West Broad Street (1B), US-33 Dublin Road (1C, northbound) and I-670 toward the airport (1D). Ramps split and merge every few hundred feet, and the river and rail lines leave little room for shoulders. If you stall here, stay in the car.",
        "This stretch threads between Franklinton and downtown. Because the yard is on Harrisburg Pike, this junction is one of the closest freeway spots to our trucks. For the interstates feeding in, see [I-70](/highways/i-70) and [I-670](/highways/i-670).",
      ],
      exits: [
        { exit: "start", road: "I-70 / I-71, Mound-Sandusky interchange", note: "Southern end" },
        { exit: "1A", road: "US-62 Rich Street / SR-3 Town Street", note: "" },
        { exit: "1B", road: "US-40, West Broad Street", note: "" },
        { exit: "1C", road: "US-33, Dublin Road", note: "Northbound exit" },
        { exit: "1D", road: "I-670, airport", note: "" },
      ],
    },
    {
      name: "Goodale Street to Ackerman Road: the campus stretch",
      paragraphs: [
        "Four exits in about three miles serve the university and its medical center, and the table below lists them. The exit 3 ramps differ by direction, which trips people up: heading north you get King Avenue and Medical Center Drive, heading south you get Kinnear Road. If you are not sure which one you took, describe the buildings you can see instead.",
        "On football Saturdays and big arena nights, the Lane Avenue exit and the roads around it back up badly, and a car that stalls in that line takes longer to reach. The dispatcher builds that into the estimate. Our [Ohio State campus](/local/ohio-state-campus) and [Ohio Stadium game day](/local/ohio-stadium) pages cover the lots and garages.",
      ],
      exits: [
        { exit: "2", road: "Goodale Street / Olentangy River Road", note: "Harrison West, Victorian Village" },
        { exit: "3", road: "King Avenue and Medical Center Drive (NB); Kinnear Road (SB)", note: "Wexner Medical Center" },
        { exit: "4", road: "Lane Avenue", note: "Stadium and Schottenstein Center" },
        { exit: "5", road: "Ackerman Road", note: "" },
      ],
    },
    {
      name: "North Broadway, Henderson, Bethel and SR-161",
      paragraphs: [
        "Above Ackerman Road the freeway hugs the Olentangy, Clintonville across the water to the east and the northwest side's offices and plazas to the west. Interchanges spread out to a mile or two apart along here, so a rough guess like \"half a mile past Henderson\" is genuinely useful to the driver.",
        "The first snowfall puts cars in the grass along this curve-heavy stretch every year. Upright, unhurt and just stuck usually means a [winch-out](/towing/winch-out), not a tow.",
      ],
      exits: [
        { exit: "6", road: "West North Broadway", note: "Riverside Methodist Hospital" },
        { exit: "7", road: "Henderson Road", note: "" },
        { exit: "8", road: "Bethel Road", note: "" },
        { exit: "10", road: "SR-161, Dublin-Granville Road", note: "" },
      ],
    },
    {
      name: "I-270 and the two-lane road to Powell",
      paragraphs: [
        "The freeway stops at the outerbelt, exit 12. Beyond it, 315 is briefly a divided road, then a two-lane country road with curves, narrow shoulders and deer at dusk. It meets SR-750, Powell Road, at exit 15 in Delaware County, and ends at US-23 farther north.",
        "On the two-lane stretch, pull into a driveway or side road if you can rather than stopping in the lane. This is the far end of the route from our yard; the dispatcher will tell you honestly how long the wait is. Our [Powell page](/areas/powell-oh) covers the town.",
      ],
      exits: [
        { exit: "12", road: "I-270", note: "End of the freeway" },
        { exit: "15", road: "SR-750, Powell Road", note: "Delaware County" },
      ],
    },
  ],
  sections: [
    {
      heading: "\"I-315\" or \"Route 315\": either one gets you a truck",
      paragraphs: [
        "Say whatever you call it. The dispatcher knows I-315, 315, the Olentangy freeway and the Olentangy expressway all mean the same road. What matters more is the exit name and your direction, because two cars a mile apart on 315 can be on opposite sides of the river from the nearest on-ramp.",
      ],
    },
  ],
  tellDispatch: [
    "North or south on 315",
    "The last exit by name (Lane Avenue, King Avenue, Henderson Road) and the next one ahead",
    "Main line, ramp, left side or right side",
    "Whether you are on the freeway or north of I-270 on the two-lane road",
    "The symptom, plus EV, hybrid or AWD if that applies",
    "Where the car should go: home, a shop, a dealer",
  ],
  pricing: [
    `Route 315 calls use our [rate card](/rates): ${usd(RATES.enroutePerMile)} a mile for the trip from the yard, ${usd(RATES.hookup)} to hook up and ${usd(RATES.loadedPerMile)} a mile loaded. The freeway half, from downtown to I-270, counts as limited-access, so the ${usd(RATES.highway)} highway line applies there; the two-lane road north of the outerbelt does not carry it.`,
    `A boost, spare swap or unlock is ${usd(RATES.roadsideFlat)} instead of the tow charges. The downtown end is close to the yard, so en-route miles there stay low.`,
  ],
  faqs: [
    {
      q: "Is it I-315 or SR-315?",
      a: "State Route 315. It is built like an interstate from downtown to I-270, hence the I-315 nickname, yet ODOT signs it as a state route. Either name works when you call us at (614) 633-8163.",
    },
    {
      q: "Who can tow my car off 315 near downtown?",
      a: "We can, any hour. Auto Lyft USA's yard is on Harrisburg Pike, a short drive from the I-70 and I-71 junction where 315 begins. If you are in a lane or hurt, call 911 first, then us.",
    },
    {
      q: "My car died on 315 after an Ohio State game. How long will it take?",
      a: "Longer than usual while the stadium is emptying, because the Lane Avenue exit and the roads around it jam. The dispatcher gives you a live estimate based on traffic. Keep the flashers going and stay seated; if the car is blocking traffic, phone 911.",
    },
    {
      q: "Does the highway charge apply on 315?",
      a: `On the freeway, from downtown to I-270, yes: ${usd(RATES.highway)}. North of I-270, where 315 is a two-lane road, no. A car that made it off an exit onto a side street is a street call.`,
    },
    {
      q: "What number reaches the Highway Patrol on 315?",
      a: "#677 from a cell phone, for a non-emergency. For a blocked lane or an injury, dial 911. Neither sends a tow on your behalf, so call us once you are safe.",
    },
    {
      q: "Can you tow my car from 315 to a shop near Henderson Road or Bethel Road?",
      a: "Yes. Name the shop and we take it there, or we can suggest an independent partner shop that diagnoses and quotes before any work. Check whether the shop has a key drop if it is after hours.",
    },
    {
      q: "Are you the tow company for the city or state on 315?",
      a: "No. We are independent and only come when you, a relative or your employer calls. A car hauled away on police orders went to their chosen company; ask the officers.",
    },
  ],
  cities: ["grandview-heights", "marble-cliff", "upper-arlington", "worthington", "powell"],
  hoods: ["franklinton", "downtown", "harrison-west", "victorian-village", "university-district", "clintonville", "northwest-columbus", "beechwold"],
  services: ["emergency-towing", "winch-out", "jump-start", "flat-tire-change", "repair-shop-towing", "flatbed-towing"],
  related: ["i-670", "i-70", "i-71", "i-270", "us-23"],
  sources: ["https://en.wikipedia.org/wiki/Ohio_State_Route_315", "https://en.wikipedia.org/wiki/Interstate_270_(Ohio)"],
  notAffiliated:
    "Auto Lyft USA is independent of ODOT, the State Highway Patrol, the City of Columbus and The Ohio State University, and has no towing contract with any of them.",
} satisfies Omit<Highway, "slug" | "label">;
