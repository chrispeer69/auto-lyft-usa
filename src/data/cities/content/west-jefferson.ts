import type { CityContent } from "../../types";

export default {
  description:
    "West Jefferson towing across Madison County: I-70 exits 80 and 85, Main Street (US-40) and the warehouse parks off SR-142. Flatbeds 24/7. (614) 633-8163.",
  h1: "West Jefferson Car Towing and Roadside Help Along I-70",
  lede:
    "Just across the Madison County line, West Jefferson mixes a small-town Main Street with some of the biggest new warehouses on the west side of the region.",
  intro: [
    "West Jefferson is a Madison County village a little over thirteen miles out I-70 from the Harrisburg Pike gate. The trip out is simple: our drivers head west on I-70 and leave at the SR-142 or SR-29 exits, or follow US-40 all the way, since West Broad Street becomes the village's Main Street. That makes it the first Madison County community our trucks reach.",
    "Calls here come in three flavors. The first is interstate work on I-70, where long gaps between exits mean a flat tire or empty tank can leave a driver stranded on a fast, open shoulder. The second is the growing logistics district around Park 70 and the warehouses near Logistics Center Drive, where employees' cars die in big lots and contractors' pickups need moving. The third is everyday village life on Main Street, Center Street and the neighborhoods around Garrette Park and the Jefferson Local campus, mostly no-starts, lockouts and cars bound for a repair shop.",
    "All four of our carriers are flatbeds, which matters on a longer run like this, because your car rides the whole distance with its wheels off the road. Before a truck leaves Columbus, the dispatcher tells you what the job costs and gives a live estimate of when the driver will arrive. Call [(614) 633-8163](/contact) or fill out the [tow request form](/request).",
  ],
  roads: [
    { name: "I-70 at SR-142 (Exit 85)", note: "The eastern West Jefferson interchange, also used by Battelle's research site and the warehouses south of the village. Truck traffic on the ramps makes a disabled car here risky to leave sitting." },
    { name: "I-70 at SR-29 (Exit 80)", note: "The western exit signed for West Jefferson. Breakdowns between here and the London-area exits often turn into longer tows to a shop in town or back in Columbus." },
    { name: "Main Street (US-40, the National Road)", note: "The village's main street and the western end of what becomes Broad Street. Parked cars line it uptown, so loading often happens from a side street." },
    { name: "SR-142 (Plain City–Georgesville Road)", note: "Runs north and south through the village, joining US-40 through the business district before continuing toward I-70 and the Battelle grounds." },
    { name: "Logistics Center Drive", note: "A road inside the new distribution parks, where we handle employee no-starts and the occasional company pickup or van that needs a lift." },
  ],
  local: [
    { kind: "employer", name: "Battelle West Jefferson", detail: "Battelle's research grounds sit on SR-142 on the interstate side of town; visitors should know the exact gate before we arrive." },
    { kind: "employer", name: "Park 70 at West Jefferson", detail: "The commerce park named for its interstate location; its wide truck lots make loading a car fast, but give the building number." },
    { kind: "employer", name: "Columbus Logistics Park West", detail: "A large warehouse park with huge parking fields, where shift workers often need a jump start at the end of a long overnight." },
    { kind: "school", name: "West Jefferson High School", detail: "The Roughriders campus on Roughrider Drive, which also houses the middle school; football nights fill the lots and streets around it." },
    { kind: "park", name: "Converse Park", detail: "The athletic complex across from the Jefferson Local campus, under renovation, so lot entrances may shift from season to season." },
    { kind: "park", name: "Garrette Park", detail: "Home of the Christmas in the Park light display; holiday traffic around it slows down village streets in December." },
    { kind: "park", name: "Prairie Oaks Metro Park", detail: "North of the village on Plain City–Georgesville Road, along Big Darby Creek; some of its lots are a long walk from the road." },
    { kind: "landmark", name: "Hurt/Battelle Memorial Library", detail: "The village library, a good meeting point if you are a visitor and not sure of the street name." },
  ],
  faqs: [
    { q: "Do you really come out to West Jefferson from Columbus?", a: "Yes. West Jefferson is a bit more than thirteen miles from the yard, and our drivers reach it by I-70 west or by staying on US-40 the whole way. It is part of our regular coverage, not a special trip. The dispatcher works out the best route for the time of day and gives you a live arrival estimate." },
    { q: "I broke down on I-70 between the SR-29 and SR-142 exits. What now?", a: "Ease onto the right shoulder, get the four-way lights blinking, and keep your belt on unless staying in the seat feels dangerous. On the phone with (614) 633-8163, let us know if you were headed toward Columbus or toward Springfield, plus any mile marker you can see. Interstate traffic here moves fast, so the driver will set up warning lights before loading your car." },
    { q: "Can you tow from the warehouses near Logistics Center Drive?", a: "Yes. We work in the distribution parks around West Jefferson often, mostly for employees whose cars will not start after a shift and for small company vehicles. Give the dispatcher the building number and which lot or door you are near, because these sites are large. Companies with several vehicles can set up a [fleet account](/towing/fleet-towing) with us." },
    { q: "Can a flatbed get onto Main Street in uptown West Jefferson?", a: "Yes, though Main Street is lined with parked cars and storefronts, so the driver may load from a side street or a nearby lot. If your car is parallel parked between two others, it can usually be pulled out with the winch and wheel dollies. Tell us when you call if the space is tight." },
    { q: "Do you help at Jefferson Local games and events?", a: "We do. Home games at West Jefferson High and events at Converse Park bring crowded lots, and lockouts or dead batteries after the final whistle are common. We work around the crowds and wait until traffic thins out if a full tow is needed. Have your ID ready so the driver can confirm the car is yours." },
    { q: "What is the cost of a tow from West Jefferson?", a: "West Jefferson is farther from our yard than the inner suburbs, so the travel portion is larger. The destination matters too: a short move to a village shop costs less than a ride back to Columbus. A firm figure for the entire job is given on the call before any truck rolls, and the breakdown is explained on our [rates](/rates) page." },
    { q: "Will you haul a West Jefferson breakdown to a garage in London instead of Columbus?", a: "Gladly. We tow to repair shops in [London](/areas/london-oh), to dealers and body shops in Columbus, and to your home if you would rather deal with it later. For longer trips, the car stays on the flatbed the whole way, so no extra miles go on the drivetrain. Tell the dispatcher where you want it before the driver loads." },
    { q: "My car slid off a back road near Big Darby Creek. Can you get it?", a: "Often, yes. Rural roads near the creek and Prairie Oaks Metro Park can be slick in winter, and cars end up in ditches or soft shoulders. Our driver uses a winch to pull the vehicle back to solid ground. If it is too deep or too heavy for a light-duty truck, we tell you right away and help arrange a larger wrecker." },
  ],
} satisfies CityContent;
