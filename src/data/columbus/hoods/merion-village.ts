import type { HoodContent } from "../index";

export default {
  description:
    "Merion Village towing between South High, Parsons and Greenlawn, near the I-71 ramps: flatbed tows, jumps and lockouts, priced first. (614) 633-8163.",
  h1: "Towing Help for Merion Village Streets and Alleys",
  lede:
    "Merion Village is the south side's quieter, front-porch stretch, and it sits right between our yard and the I-71 corridor.",
  intro: [
    "Merion Village fills the blocks south of Greenlawn Avenue between South High Street and Parsons Avenue, just below German Village and Schumacher Place. It grew up around an early farm settlement and later the factories along Front Street, and much of what stands today is early twentieth-century housing: frame and brick homes with front porches, side yards and, on many blocks, a garage reached from the alley. For our crews it is a straightforward neighborhood to work, with a regular grid and less congestion than the historic districts to the north.",
    "Where things get busy is the edges. South High Street carries a steady stream of local traffic past shops, diners and churches, and Parsons Avenue on the east side has its own commercial run. I-71 is close at hand, with ramps at Greenlawn Avenue and at Frank Road, so many of the calls we get from Merion Village actually start on the highway: a car limps off at Greenlawn with an overheating engine or a shredded tire and stops on the first side street it finds.",
    "Inside the neighborhood, the work is mostly driveway and curb jobs, winter no-starts, and the odd car bound for a garage on High or Parsons. Our trucks come over from Harrisburg Pike on the west side of the river, and every tow is a flatbed tow. Give the dispatcher the address and whether the car is on the street or in an alley garage, and you will hear the total price first. Call [(614) 633-8163](/contact) or use the [request form](/request).",
  ],
  roads: [
    { name: "South High Street", note: "The neighborhood's western spine, home to the 1958 Dan's Drive-In and a string of small businesses. Curb breakdowns here are common, and we can usually load in place." },
    { name: "Parsons Avenue", note: "The eastern boundary and a busy commercial corridor. Tell us which side of Parsons you are on, since the boundary runs down the middle." },
    { name: "Greenlawn Avenue at I-71", note: "The northern edge and the nearest interstate ramp. Cars that fail on the highway often end up on the first block south of here." },
    { name: "Frank Road (SR-104)", note: "Forms the southern line west of High and meets I-71 on the east, a common route for trucks and commuters." },
    { name: "South Fourth Street", note: "A residential north-south street through the center, past Southwood Elementary and the civic association's base." },
    { name: "Alleys behind the residential blocks", note: "Many garages here face the alley. Our driver may back in or winch the car out to the street to load." },
  ],
  local: [
    { kind: "school", name: "Southwood Elementary", detail: "A Columbus City Schools building on South Fourth Street with a central tower, first opened in 1894." },
    { kind: "landmark", name: "Dan's Drive-In", detail: "A checkerboard-trimmed 1958 diner on South High, now on the city's historic register." },
    { kind: "park", name: "Moeller Park", detail: "A small park on Hanford Street with a playground and picnic tables." },
    { kind: "park", name: "Southwood-Mileusnich Park", detail: "A pocket of ball diamonds and lawn on Southwood Avenue." },
    { kind: "landmark", name: "Barrett building", detail: "The 1900 school on East Deshler Avenue, once South High School, now converted to apartments with residents parking around it." },
    { kind: "park", name: "Lou Berliner Sports Park", detail: "A big softball complex with a mountain bike trail on Greenlawn Avenue, just west of the neighborhood, packed on tournament weekends." },
  ],
  faqs: [
    { q: "My car overheated on I-71 and I got off at Greenlawn. Can you pick it up on a side street?", a: "Yes, and getting off the highway was the right move. Park on the first safe side street, turn the engine off and let it cool. Call with the street name and nearest house number or corner. Because you are no longer on the interstate, the highway surcharge does not apply. Do not open the radiator cap while it is hot; our guide on [overheating](/guides/car-overheating-what-to-do) explains why." },
    { q: "Can a flatbed get to a garage off a Merion Village alley?", a: "Often. Alleys behind Merion Village homes vary block to block, and parked cars, trash bins and fences can make even a decent one tight. The driver will look at the approach first. If the bed cannot reach the garage, the car is winched or rolled to a point where it can be loaded. Telling us the alley's surface and any obstacles saves time." },
    { q: "Which side of Parsons Avenue counts as Merion Village?", a: "The neighborhood's eastern boundary follows Parsons Avenue, and the west side of the street is generally treated as part of Merion Village. For towing, it does not change anything: we serve both sides and the neighborhoods beyond. What matters is that you tell the dispatcher the side of Parsons and the direction the car faces, so the driver approaches from the right direction." },
    { q: "Do you tow from Lou Berliner Sports Park on tournament weekends?", a: "Yes. The softball complex on Greenlawn draws big crowds, and the lots see plenty of dead batteries, lockouts and flat tires by the end of the day. Tell us which field or lot entrance you are near. On busy weekends, traffic leaving the park can slow the truck down, and the dispatcher will tell you how things look when you call. Weekend calls carry the standard $50 surcharge." },
    { q: "My car has been sitting on the street for weeks and won't start. What should I do?", a: "Batteries drain when a car sits, especially in cold weather, and tires can lose air. Start with a jump start, which is part of our $75 roadside rate. If the car still won't run, or if it has been sitting long enough that brakes may be seized, we tow it to a shop on a flatbed. Make sure the car is not ticketed or marked for removal before we arrive." },
    { q: "Can you take my car to a shop on South High or Parsons?", a: "Yes. There are several independent garages on both corridors, and many Merion Village customers have a favorite one. If you do not, we can suggest an independent partner shop that will diagnose the problem and quote the repair before doing any work. If the shop is closed when we arrive, we can leave the car in their after-hours area with permission or hold it at our yard." },
    { q: "Do you serve the neighborhoods next to Merion Village?", a: "Yes. We work across the south side, including [German Village](/areas/columbus-oh/german-village), [Schumacher Place](/areas/columbus-oh/schumacher-place) and the [Brewery District](/areas/columbus-oh/brewery-district). South of Frank Road, we continue into the rest of south Columbus, and across the river we cover the west side near our yard. Every call, wherever it starts, is priced from the same published rate card, and the dispatcher reads you the total before a truck leaves our Harrisburg Pike yard. If you are not sure which neighborhood you are in, just give us the address or nearest corner." },
  ],
  zips: ["43206", "43207"],
} satisfies HoodContent;
