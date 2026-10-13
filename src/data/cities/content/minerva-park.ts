import type { CityContent } from "../../types";

export default {
  description:
    "Need a tow in Minerva Park? Flatbed service for Cleveland Avenue, the lake streets and the I-270 Cleveland Ave exit, any hour. Call (614) 633-8163.",
  h1: "Need a Tow in Minerva Park? Flatbed Help Inside the Village",
  lede:
    "Minerva Park is a small lakeside village wedged between Cleveland Avenue and the outerbelt, and most of our work there happens in residents' driveways.",
  intro: [
    "From our Harrisburg Pike yard, Minerva Park is about 12 miles to the northeast as the crow flies, tucked just inside I-270 on the north side of Columbus. The trip crosses most of the city, so it takes longer than a call in the southwest suburbs beside us. The usual path runs up I-71 or around the outerbelt to the Cleveland Avenue exit, and dispatch times your arrival off whichever of our carriers is nearest just then.",
    "The village is compact: Cleveland Avenue forms its western edge, Maplewood Drive runs along the south, Wildwood Road caps the north, and the lake left over from the old trolley amusement park sits on the east side. Inside those lines the streets curve around the water and through the former golf course neighborhood, with plenty of mature trees and sloped driveways. That means a typical Minerva Park job is a car that won't start in the garage, a flat discovered on the way to work, or a vehicle that needs to reach a shop on Cleveland Avenue.",
    "Because we only run flatbeds, the car rides fully off the pavement, and the driver can back the deck to the bottom of a driveway without dragging anything over the curb. Ask for a quote when you call, and if a lockout or a dead battery is all you have, our [roadside assistance](/towing/roadside-assistance) may solve it in place. Reach dispatch at (614) 633-8163 any time of day or night.",
  ],
  roads: [
    { name: "Cleveland Avenue (village west edge)", note: "The four-lane commercial road on Minerva Park's western boundary. Breakdowns here are close to turn lanes and bus stops, so the driver positions the carrier in a side street when possible." },
    { name: "I-270 at Cleveland Avenue (Exit 27)", note: "The nearest outerbelt interchange to the village and the one our trucks normally use to arrive. Ramp stalls here are handled as highway calls." },
    { name: "Maplewood Drive and Wildwood Road", note: "The south and north boundary streets. Telling us which of the two you are nearest is the quickest way to orient a driver unfamiliar with the village." },
    { name: "Minerva Lake Road", note: "The street named for the old park lake, which also holds the village offices. It is narrow in places, so expect the driver to set cones while loading." },
    { name: "Woodley Road and Wolfbirch Drive", note: "Typical residential streets inside the village where most of our garage and driveway pickups come from." },
  ],
  local: [
    { kind: "park", name: "Minerva Park Lake", detail: "The lake on the village's east side, all that is left of the 1890s trolley park; cars parked on the lakeside lanes should be described by the nearest house number." },
    { kind: "landmark", name: "Site of Minerva Amusement Park", detail: "The roller coaster, small zoo and trolley stop are long gone, but the curving street plan around the water still follows the old park grounds." },
    { kind: "landmark", name: "Former Minerva Lake golf course neighborhood", detail: "Homes added when the village annexed the old course; some newer streets there don't show correctly on older navigation maps." },
    { kind: "landmark", name: "Minerva Park Community Building", detail: "The village-owned hall used for resident events, where event-day parking fills the nearby curbs." },
    { kind: "park", name: "Minerva Park Community Pool", detail: "The swim club on Valley Road; summer lockouts in its lot are the sort of quick job our drivers handle without a tow." },
    { kind: "school", name: "Minerva Park Middle School", detail: "A Westerville City Schools building on Farview Road; drop-off lines mean we avoid loading in front of it during school arrival times." },
    { kind: "school", name: "Minerva France Elementary", detail: "One of the newer Westerville district elementary schools serving village families." },
  ],
  faqs: [
    { q: "Which way do your trucks come into Minerva Park?", a: "Almost always from the outerbelt. Our drivers leave southwest Columbus, head north and then take the Cleveland Avenue exit off I-270, which puts them at the village's western edge within a short drive. When rush hour clogs that route, the dispatcher may send the truck up Cleveland Avenue from the city instead, and you will get a live estimate either way." },
    { q: "My street curves around the lake. Will the driver be able to find me?", a: "Yes, but it helps to give a house number and the closest boundary street, either Maplewood Drive, Wildwood Road or Cleveland Avenue. The lakeside lanes loop back on themselves, and some map apps route trucks the long way around. A quick description such as 'east side of the lake, two houses past the bend' saves real time." },
    { q: "Can a flatbed back down a steep Minerva Park driveway?", a: "Usually. The deck tilts and slides back to the base of the driveway, and the winch pulls the car down to it under control. If the slope or the overhanging trees make that risky, the driver may roll the car to the street on its own wheels first, with your permission, before loading it." },
    { q: "Do you work with the village police after a crash on Cleveland Avenue?", a: "Minerva Park keeps its own police department, and officers on a crash scene may ask that a damaged car be cleared quickly. If you name us as your tow company, we coordinate with whoever is in charge of the scene and take the car to the body shop you choose. Details on wreck calls are on our [accident towing](/towing/accident-towing) page." },
    { q: "The car died in the garage and the door won't clear a tow truck. What happens?", a: "Our flatbed never enters the garage. The driver stops at the end of the driveway, runs the winch cable in and draws the car out slowly onto the deck. If the car is parked nose-in and the steering is locked, they will talk through options with you, such as a jump to get the steering and shifter working before the pull." },
    { q: "Is the newer neighborhood on the old golf course inside your service area?", a: "Yes. Everything within Minerva Park's limits is covered, including the homes built on the former Minerva Lake course. Some of those streets are newer than the data in older GPS units, so a nearby cross street or landmark helps the driver. The same goes for the Northern Woods area just north of the village." },
    { q: "How much is a tow from Minerva Park to a shop on Cleveland Avenue?", a: "The bill reflects the drive up from our yard plus the short hop to the shop, along with the time of day and any extra labor. The dispatcher quotes the full amount before sending anyone, so you can compare it before agreeing. Our [rates](/rates) page shows how those pieces add up." },
    { q: "Can you tow to Westerville or Gahanna from here?", a: "Of course. Minerva Park sits between several towns we serve, and drops to dealers or shops in [Westerville](/areas/westerville-oh), Gahanna, Worthington or New Albany are short moves once the car is on the deck. Tell the dispatcher the shop's name so we can confirm its hours or an overnight drop before we leave." },
  ],
} satisfies CityContent;
