import type { Place } from "../../types";

export default {
  keyword: "Columbus festival towing",
  title: "Columbus Festival Towing & Roadside",
  description:
    "Arts Fest, ComFest, Pride or Jazz & Rib Fest weekend and your car won't budge? Columbus festival towing, jumps and lockouts downtown. (614) 633-8163.",
  h1: "Columbus Festival Towing for Busy Summer Weekends",
  lede:
    "From June into late summer, downtown and the Short North host one big festival after another. We keep a flatbed ready for the drivers who need one.",
  venue: {
    name: "Scioto Mile and downtown Columbus",
    schemaType: "Place",
    locality: "Columbus",
  },
  intro: [
    "Summer in Columbus is a run of festival weekends. The Columbus Arts Festival fills the riverfront in June, ComFest takes over Goodale Park, Pride brings huge crowds downtown, and the Jazz & Rib Fest returns to the Scioto Mile. In between there are food truck gatherings, races, block parties and the first-Saturday Gallery Hop on High Street. Every one of them means full garages, closed streets and neighborhood blocks lined with visitors' cars, and that keeps Columbus festival towing steady from June onward.",
    "Our office is on Harrisburg Pike, not far southwest of downtown, and our trucks are posted around the city, so festival sites along the river and in the Short North are never far from one. The hard part is getting through closures and crowds, and finding one car among thousands parked on unfamiliar side streets. We ask good questions up front so the driver arrives at the right block.",
    "Festival calls tend to be small problems that feel big in the moment: a car that will not start after a long hot day, keys locked inside with a picnic blanket, a flat from a curb on a tight street. Most are handled where the car sits. When a car does need to go somewhere, we take it to your home, your mechanic or a partner shop.",
  ],
  sections: [
    {
      heading: "Parking in the neighborhoods",
      paragraphs: [
        "Festival crowds spill well beyond the event grounds. Visitors park in Victorian Village, Italian Village, German Village, Franklinton and the [Short North](/areas/columbus-oh/short-north), often on narrow streets with tight curbs and posted restrictions. Some blocks are permit-only or have time limits, and cars parked in the wrong place can be ticketed or removed.",
        "Came back to an empty curb? Read the parking signs on the block and check whether it was towed before assuming it was stolen. Our guide on [finding a car after a private-lot tow](/guides/car-towed-from-private-lot-ohio) explains the next steps. Once it is released, we can pick it up if it is not drivable.",
      ],
    },
    {
      heading: "Small fixes that save the day",
      paragraphs: [
        "Most festival breakdowns do not need a tow. The driver can usually get you going in a few minutes once they reach the car.",
      ],
      bullets: [
        "Jump starts for batteries drained by a long day in the heat, or by a door left open while unloading.",
        "Lockouts when keys end up in the trunk with the cooler or the chairs.",
        "Spare tire installs after a curb on a narrow street cuts a sidewall.",
        "Fuel delivery if a long crawl out of a garage drains an almost empty tank.",
      ],
    },
    {
      heading: "Motorcycles, scooters and other rides",
      paragraphs: [
        "Summer weekends bring out the motorcycles, and festival parking is no easier on bikes than on cars. A bike that will not start or has a flat should never be pushed through a crowd. Our flatbeds carry motorcycles with proper wheel chocks and soft straps; see [motorcycle towing](/towing/motorcycle-towing) for details.",
        "Every price comes from our [rate card](/rates). Roadside work is $75 flat, towing is $125 to hook up plus $7 per mile once loaded, and our truck's trip to you costs $4 a mile. Since most festivals run on weekends, expect the $50 weekend fee on many calls, and the overnight fee after 10 PM.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Columbus festival towing still possible on the biggest weekends, like ComFest?",
      a: "Yes. Our dispatch line works every day and night of the summer, including the biggest festival weekends. During those events, streets near the grounds may be closed and traffic is heavy, so the dispatcher will tell you the most realistic approach and timing. Call (614) 633-8163 with the address or nearest intersection where your car is parked.",
    },
    {
      q: "My car won't start after a hot afternoon at the Jazz & Rib Fest. Is it the battery?",
      a: "It often is. Summer heat wears batteries out from the inside, and a long day in the sun can tip a weak one over the edge. The driver will try a jump and check the battery. If it starts and keeps running, drive it for a while and have it tested soon. If it does not, we can replace the battery for many cars or tow it.",
    },
    {
      q: "Can you get into the Short North during Pride weekend?",
      a: "We can reach most of the neighborhood, though parade routes and festival areas may be closed for part of the day. The driver will approach from an open street, so mention whether the car sits east or west of High. If the car can be driven a short way to an open corner, that speeds things up.",
    },
    {
      q: "Will you tow my motorcycle from a festival parking area?",
      a: "Yes. We carry motorcycles on our flatbeds using wheel chocks and soft straps that protect the paint and bodywork. Tell the dispatcher the make and model and whether the bike can roll. Our standard towing rates apply, and you hear the full price before the truck is sent. If the bike was dropped, mention any leaking fluid or bent levers too.",
    },
    {
      q: "My car was towed from a residential street near Goodale Park. Who has it?",
      a: "If it was removed for a parking violation on a public street, the police non-emergency number can confirm whether it went to impound. A car pulled off private property is held by whichever company the posted lot signage names. We do not do parking enforcement, but we can carry the car home once it is released if it will not run.",
    },
    {
      q: "Do you charge more on festival weekends?",
      a: "No festival-specific pricing exists on our rate card. The weekend fee of $50 applies to any Saturday or Sunday call, and the overnight fee applies to calls from 10 PM to 6 AM, the same as any other week. Traffic might slow the driver down, but the quote you receive does not change because of an event.",
    },
    {
      q: "I'm parked in a garage that closes soon and my car won't start. What should I do?",
      a: "Call us right away, then talk to garage staff or call the number posted at the pay station. Many garages will allow a disabled car to stay until it can be moved, but ask so it is not ticketed or towed. If you have to leave, we can come back for the car once the garage reopens.",
    },
    {
      q: "Can you bring gas to my car near the riverfront?",
      a: "Yes. Fuel delivery costs $75 plus the fuel at three times the pump price, along with $4 per mile from our yard. We bring enough to get you to the nearest station. If the car is deep in a garage, tell us the level so the driver can carry the fuel to you if the truck cannot fit.",
    },
  ],
  cities: ["columbus", "grandview-heights", "upper-arlington", "worthington"],
  services: ["roadside-assistance", "jump-start", "car-lockout", "fuel-delivery", "motorcycle-towing"],
  related: ["red-white-and-boom", "arena-district", "convention-center", "nationwide-arena"],
  notAffiliated:
    "Auto Lyft USA has no affiliation with, or endorsement from, the festivals mentioned on this page, their organizers or the City of Columbus.",
} satisfies Omit<Place, "slug" | "category" | "label">;
