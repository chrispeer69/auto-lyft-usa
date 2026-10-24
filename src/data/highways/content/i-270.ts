import type { Highway } from "../../types";
import { RATES, usd } from "../../rates";

export default {
  road: { name: "Interstate 270", alternateName: ["I-270", "Columbus Outerbelt", "Jack Nicklaus Freeway"] },
  keyword: "I-270 towing",
  title: "I-270 Towing on the Columbus Outerbelt",
  description:
    "I-270 towing on the whole Columbus outerbelt, strongest on the south and west sides near our Harrisburg Pike yard. Help 24-7. Call (614) 633-8163.",
  h1: "Outerbelt Breakdown? I-270 Tows, South Side First",
  lede:
    "Harrisburg Pike crosses the outerbelt at exit 2, a few minutes from our yard. The bottom and west side of the loop are where our trucks spend their nights.",
  intro: [
    "I-270 towing covers a 55-mile ring, and no single company is equally close to all of it. Ours is the south and west: the outerbelt from the I-71 junction east of Grove City, past Harrisburg Pike, Georgesville Road and West Broad Street, up through Hilliard and Dublin, plus the bottom of the loop across to Obetz and South High Street. We still answer for the north and east sides, from Worthington to Easton and Gahanna. The dispatcher sends whichever truck is nearest and tells you plainly how long it will be.",
    "The ring is numbered clockwise starting at the south I-71 junction, so exit numbers climb as you go west, north, east and back around. That makes the exit number the clearest way to tell us where you are, far more reliable than inner loop or outer loop, which most drivers mix up.",
  ],
  firstMoves: [
    "Hazards on, and work the car to the right shoulder if it will still roll. Do not cut across lanes to reach the median side.",
    "Stuck in a lane, in a merge area or on a ramp with no shoulder? Call 911 from your seat.",
    "Stay belted in the car with the doors shut. On a ring road with constant merging, standing outside is the riskiest place to be.",
    "If you are safely off the lanes and just want troopers to know, dial #677 for the Ohio State Highway Patrol.",
    "Then call us at (614) 633-8163 with the last exit number you saw.",
  ],
  stretches: [
    {
      name: "The bottom of the loop: I-71 to Harrisburg Pike and Georgesville Road",
      paragraphs: [
        "The outerbelt starts its numbering at the south I-71 junction east of Grove City. Two miles later comes exit 2, US-62 and SR-3, which is Harrisburg Pike, the road our office and yard are on. Exit 5 is Georgesville Road. This is the quarter of the loop our trucks drive most, and it is the one where a late-night flat or a dead alternator usually gets the shortest wait from us.",
        "Warehouse and freight traffic is heavy along here. Mention right away if the vehicle outweighs a pickup or has a trailer behind it: a light-duty flatbed handles cars, SUVs, pickups and light vans, and for heavier rigs we line up a [heavy-duty partner](/towing/heavy-duty-towing) and coordinate the job.",
      ],
      exits: [
        { exit: "55 / 0", road: "I-71, Grove City side", note: "Where the numbering starts and ends" },
        { exit: "2", road: "US-62 / SR-3, Harrisburg Pike", note: "The road our yard is on" },
        { exit: "5", road: "Georgesville Road", note: "" },
      ],
    },
    {
      name: "The west side: Broad Street, I-70 and Roberts Road",
      paragraphs: [
        "Heading north, exit 7 is US-40, West Broad Street, on the Prairie Township and Franklin Township line near Galloway and Lincoln Village. Exit 8 is the I-70 interchange, and exit 10 is Roberts Road, built as a diverging diamond, which confuses drivers who have never used one. If you stopped on the Roberts Road ramp, just say so; the driver knows how to come at it.",
        "The I-70 ramps carry long-haul trucks merging at speed in both directions. A breakdown in the gore between those ramps leaves almost no room, so this is one of the spots where 911 should hear from you before we do.",
      ],
      exits: [
        { exit: "7", road: "US-40, West Broad Street", note: "Galloway and Lincoln Village side" },
        { exit: "8", road: "I-70", note: "Heavy truck merges both ways" },
        { exit: "10", road: "Roberts Road", note: "Diverging diamond" },
      ],
    },
    {
      name: "Hilliard, Tuttle Crossing and Dublin",
      paragraphs: [
        "Exit 13 serves Cemetery Road for Hilliard and the county fairgrounds, and Fishinger Boulevard toward Upper Arlington. Exit 15 is Tuttle Crossing Boulevard, and exit 17 is US-33 and SR-161, the main Dublin interchange. Exit 20 is Sawmill Road, signed for the Columbus Zoo. Commuter backups on this side mean we hear about overheating in summer and slide-offs on the curves in the first snow.",
        "A car in the grass but upright, with nobody hurt, can usually be pulled back onto pavement with a [winch-out](/towing/winch-out), no deck needed. Our [Hilliard](/areas/hilliard-oh) and [Dublin](/areas/dublin-oh) pages cover the town streets off these exits.",
      ],
      exits: [
        { exit: "13", road: "Cemetery Road / Fishinger Boulevard", note: "Hilliard and Upper Arlington" },
        { exit: "15", road: "Tuttle Crossing Boulevard", note: "Mall and office parks" },
        { exit: "17", road: "US-33 / SR-161", note: "Dublin" },
        { exit: "20", road: "Sawmill Road", note: "Signed for the zoo" },
      ],
    },
    {
      name: "Across the top: SR-315 to Easton",
      paragraphs: [
        "On the north side, exit 22 is SR-315, exit 23 is US-23 toward Worthington and Delaware, and exit 26 is the north I-71 interchange. Then come Cleveland Avenue at exit 27, SR-3 for Westerville at exit 29, SR-161 at exit 30, Morse Road at 32 and Easton Way at 33. The Easton exits share side lanes with their neighbors, so let us know if you had already moved into those collector lanes or were still in the through lanes.",
        "This is the far side of the ring from our yard. We take the call all the same and give you an honest estimate, and the price math is identical.",
      ],
      exits: [
        { exit: "22 / 23", road: "SR-315 / US-23", note: "Worthington" },
        { exit: "26", road: "I-71 (north)", note: "" },
        { exit: "29", road: "SR-3", note: "Signed for Westerville" },
        { exit: "32 / 33", road: "Morse Road / Easton Way", note: "Collector lanes" },
      ],
    },
    {
      name: "The east side and back down to South High Street",
      paragraphs: [
        "Exit 35 is I-670 and US-62 for the airport and Gahanna. Exit 37 is Hamilton Road, exit 39 is SR-16 Broad Street, exit 41 is US-40 Main Street for Whitehall and Reynoldsburg, and exit 43 is I-70 east of town. Then the loop bends back toward our side of the city: exit 46 is US-33, exit 49 is Alum Creek Drive for Obetz and Rickenbacker, and exit 52 is US-23, South High Street, toward Lockbourne and Circleville.",
        "Those last three exits are the southeast corner many drivers forget is part of the outerbelt. Freight traffic from the Rickenbacker side runs heavy, and calls here reach us quickly because the route home to Harrisburg Pike follows the bottom of the loop. See the [US-23 page](/highways/us-23) for the road south.",
      ],
      exits: [
        { exit: "35", road: "I-670 / US-62", note: "Airport and Gahanna" },
        { exit: "41", road: "US-40, Main Street", note: "Whitehall and Reynoldsburg" },
        { exit: "43", road: "I-70 (east)", note: "" },
        { exit: "46", road: "US-33", note: "Toward Lancaster" },
        { exit: "49", road: "Alum Creek Drive", note: "Obetz and Rickenbacker" },
        { exit: "52", road: "US-23, South High Street", note: "Toward Lockbourne and Circleville" },
      ],
    },
  ],
  tellDispatch: [
    "The last exit number on the green signs, and the next one coming up if you saw it",
    "Clockwise or counterclockwise only if you are sure; otherwise just name the town you were heading toward",
    "Right shoulder, median side, a ramp, or the collector lanes near Easton",
    "What failed and whether the car will still start or roll",
    "Electric, all-wheel drive, or towing something: each changes which truck comes",
    "The address the car should go to, if it needs to ride",
  ],
  pricing: [
    `Outerbelt tows use the same [rate card](/rates) as any job: ${usd(RATES.enroutePerMile)} a mile from our yard to you, ${usd(RATES.hookup)} to load, and ${usd(RATES.loadedPerMile)} a mile with the car on board. Working an interstate shoulder adds ${usd(RATES.highway)}. A spare-tire swap or jump on the shoulder is ${usd(RATES.roadsideFlat)} instead of the tow lines.`,
    "Since Harrisburg Pike meets the loop at exit 2, south and west side calls tend to carry very few en-route miles. Your total is read to you on the phone before the truck is assigned.",
  ],
  faqs: [
    {
      q: "Who does I-270 towing on the south side of Columbus?",
      a: "Auto Lyft USA does, around the clock. Our yard is on Harrisburg Pike, which crosses the outerbelt at exit 2, so the bottom of the loop from Grove City across to Obetz and South High Street is close to home. Call (614) 633-8163 with the last exit number. If you are in a lane or injured, call 911 first.",
    },
    {
      q: "Inner loop, outer loop: I honestly can't tell. Does it matter?",
      a: "Not much. Give us the last exit number and the next one if you caught it. The outerbelt is numbered clockwise from the south I-71 junction, so two exit numbers pin down your direction of travel for the dispatcher.",
    },
    {
      q: "My car died on the ramp from I-270 to I-70 on the west side. What should I do?",
      a: "Stay inside, belted, with the flashers on, and call 911, because those ramps carry fast truck traffic and have little shoulder. Once officers have the area protected, we can load the car and take it off the interchange.",
    },
    {
      q: "Can you change a tire on the outerbelt shoulder?",
      a: "When there is room to do it safely, yes. If the flat faces traffic or the shoulder is cramped, the driver may move the car to the next exit first and swap it there. If you have no usable spare, it rides to a tire shop or home. See [flat tire change](/towing/flat-tire-change).",
    },
    {
      q: "What does a tow from I-270 cost?",
      a: `${usd(RATES.hookup)} to hook up, ${usd(RATES.loadedPerMile)} per loaded mile, ${usd(RATES.enroutePerMile)} a mile for the drive out, and on top of that the ${usd(RATES.highway)} interstate charge. Calls from ${"10 PM"} to 6 AM add ${usd(RATES.afterHours)}, and weekends add ${usd(RATES.weekend)}. Veterans get ${RATES.veteranPercent}% off with ID.`,
    },
    {
      q: "Is #677 the right number for an I-270 breakdown?",
      a: "It reaches the Ohio State Highway Patrol from a cell phone, and it is the right call when you are off the lanes and want troopers aware. For anything with a blocked lane or an injury, use 911. Neither one dispatches a tow for your car, so call us afterward.",
    },
    {
      q: "Are you the outerbelt's official tow company?",
      a: "No. We are an independent company and only come when a driver or vehicle owner calls us. If authorities removed your car, ask them where it was taken.",
    },
  ],
  cities: ["grove-city", "urbancrest", "galloway", "prairie-township", "lincoln-village", "hilliard", "dublin", "worthington", "westerville", "gahanna", "whitehall", "reynoldsburg", "obetz", "lockbourne"],
  hoods: ["westgate", "northwest-columbus", "sharon-woods", "eastmoor"],
  services: ["emergency-towing", "flat-tire-change", "winch-out", "jump-start", "heavy-duty-towing", "flatbed-towing"],
  related: ["i-71", "i-70", "us-23", "sr-315", "i-670"],
  sources: ["https://en.wikipedia.org/wiki/Interstate_270_(Ohio)"],
  notAffiliated:
    "Auto Lyft USA is an independent towing company with no contract with ODOT, the State Highway Patrol or any city along the outerbelt.",
} satisfies Omit<Highway, "slug" | "label">;
