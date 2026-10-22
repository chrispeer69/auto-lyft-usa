/*
  Paid-search landing pages under /go/. One page per ad group: noindex, no menu,
  one action (call). No prices on these pages — ad copy and landing copy must
  match, and prices belong on /rates.
*/
import type { Faq } from "./types";

export interface Landing {
  slug: string;
  keyword: string; // exact ad keyword, shown as the eyebrow
  title: string; // page part (≤ 44)
  description: string;
  h1: string;
  sub: string;
  ticks: [string, string, string];
  faqs: Faq[];
}

export const LANDINGS: Landing[] = [
  {
    slug: "tow-truck-near-me", keyword: "tow truck near me", title: "Tow Truck Near Me — Columbus, OH",
    description: "Stranded in Columbus and searching for the closest tow truck? Auto Lyft USA dispatches flatbeds around the clock. Call now for a price before we roll.",
    h1: "Tow Truck Near You in Columbus, Dispatched Now", sub: "Tell us where you are. We quote it, send the nearest truck, and text you the driver's name.",
    ticks: ["Open 24-7, including holidays", "Flatbed or wheel lift to suit the car", "Price given before dispatch"],
    faqs: [
      { q: "How do you find the nearest truck?", a: "The dispatcher sees where each of our trucks is and assigns whichever can reach you soonest, then gives you a live estimate." },
      { q: "Can I send my location instead of explaining it?", a: "Yes. After you call, we can text you a link, or you can text a map pin to (614) 633-8163." },
      { q: "Do you come out at night?", a: "Yes. The phone is answered and trucks run every hour of every day." },
    ],
  },
  {
    slug: "towing-near-me", keyword: "towing near me", title: "Towing Near Me in Columbus, OH",
    description: "Towing near you anywhere in Columbus and nearby suburbs. Flatbeds and wheel lifts, 24-7 dispatch, quote first. Call Auto Lyft USA now.",
    h1: "Columbus Towing, Close By and Ready", sub: "From Hilltop to Westerville, a flatbed is on its way as soon as you approve the price.",
    ticks: ["Columbus + 40+ nearby towns", "Car, SUV, pickup or EV", "No membership required"],
    faqs: [
      { q: "Which areas count as near?", a: "All of Columbus and the surrounding towns, from Delaware and Sunbury to Lancaster and London. If you're unsure, call and ask." },
      { q: "Can you take my car to my own mechanic?", a: "Yes, to any address you choose, or to our yard if the shop is closed." },
      { q: "Do I need roadside coverage?", a: "No. You pay per call. If you have coverage that reimburses you, we give you an itemized receipt." },
    ],
  },
  {
    slug: "towing-company", keyword: "towing company", title: "Columbus Towing Company, Open 24-7",
    description: "Looking for a towing company in Columbus you can trust? Auto Lyft USA: locally owned, insured, flatbeds and wheel lifts, prices up front. Call now.",
    h1: "A Columbus Towing Company That Quotes First", sub: "Locally owned, insured, with trucks across Columbus and a yard on Harrisburg Pike since 2024.",
    ticks: ["Locally owned and insured", "Photos before every load", "Itemized receipts"],
    faqs: [
      { q: "Are you a dispatcher that sends someone else?", a: "No. Auto Lyft USA runs its own flatbeds and wheel-lift trucks. Only heavy trucks and buses go to partner wreckers, and we tell you if that applies." },
      { q: "Are you insured?", a: "Yes, we carry commercial towing coverage. Drivers photograph your vehicle before loading it." },
      { q: "Can businesses set up an account?", a: "Yes. Fleets, dealers and property managers can set up billing; call or email the office." },
    ],
  },
  {
    slug: "flatbed-towing", keyword: "flatbed towing", title: "Flatbed Towing Columbus — Call Now",
    description: "Flatbed towing in Columbus for AWD, EV, lowered and luxury cars. Four flatbeds in our fleet. Call for a price before dispatch.",
    h1: "Flatbed Towing in Columbus, With Every Wheel on the Deck", sub: "No dragging and no spinning drivetrain. Your vehicle rides on the carrier from pickup to drop-off.",
    ticks: ["All-wheel-drive safe", "Ramp extensions for low cars", "Soft straps at the tires"],
    faqs: [
      { q: "Do you charge extra for a flatbed?", a: "No. Flatbed and wheel-lift tows use the same rate card, so there's no upgrade fee." },
      { q: "Will my lowered car fit?", a: "Usually yes, with ramp extensions. Tell the dispatcher how low it sits." },
      { q: "Can you move a car that won't roll?", a: "Yes. The winch pulls it aboard, and we use skates under locked wheels." },
    ],
  },
  {
    slug: "jump-start", keyword: "jump start", title: "Jump Start Service — Columbus, OH",
    description: "Dead battery in Columbus? Auto Lyft USA brings a booster to your driveway, lot or garage day or night, and tests the battery. Call now.",
    h1: "Dead Battery? We Bring the Jump to You", sub: "A driver hooks up a booster pack, gets the car running and tells you whether the battery is worth keeping.",
    ticks: ["Driveways, lots and garages", "Battery tested on the spot", "Tow available if it won't start"],
    faqs: [
      { q: "What if the jump doesn't work?", a: "The driver checks for a starter or alternator problem, and the car can go on the flatbed to a shop right then." },
      { q: "Can you jump a car in a parking garage?", a: "Yes. A jump doesn't need overhead clearance for a carrier." },
      { q: "Do you replace batteries too?", a: "Yes. If the test says it's done, we can bring and install a battery matched to your car." },
    ],
  },
  {
    slug: "car-battery-replacement", keyword: "car battery replacement", title: "Car Battery Replacement in Columbus",
    description: "Mobile car battery replacement in Columbus: we test, match and install a new battery where your car is parked, and recycle the old one.",
    h1: "Mobile Car Battery Replacement, Installed Where You're Parked", sub: "We test first. If the battery has failed, the right size goes in on the spot and the old one leaves with us.",
    ticks: ["Tested before we replace", "Matched to your vehicle", "Old battery recycled"],
    faqs: [
      { q: "How do you know the battery is bad?", a: "A tester reads its condition under load. If it passes, a jump and a check of the charging system may be all you need." },
      { q: "Will the new battery fit my car?", a: "We match the group size and specs to your make and model before installing." },
      { q: "Do you take the old battery?", a: "Yes, it goes for recycling." },
    ],
  },
  {
    slug: "car-lockout", keyword: "locked keys in car", title: "Locked Keys in Car? Columbus Lockouts",
    description: "Keys locked in your car in Columbus? Auto Lyft USA opens most vehicles without damage, 24-7. Call now and a driver heads your way.",
    h1: "Keys Locked in the Car? We'll Open It Without a Scratch", sub: "Air wedges and long-reach tools, not coat hangers. Have your ID ready so we can confirm it's your car.",
    ticks: ["Damage-free entry", "Cars, SUVs and pickups", "Child or pet inside? Say so first"],
    faqs: [
      { q: "Will you damage my door or window?", a: "No. Our tools open the door without prying paint or breaking glass." },
      { q: "Can you make me a new key?", a: "No. We open the vehicle. Lost or broken keys need a locksmith or dealer." },
      { q: "What do I need to show you?", a: "A photo ID and something tying you to the car, like the registration once the door is open." },
    ],
  },
  {
    slug: "flat-tire", keyword: "flat tire help", title: "Flat Tire Help in Columbus — 24-7",
    description: "Flat tire in Columbus? Auto Lyft USA mounts your spare where you are, including highway shoulders, or tows you to a tire shop. Call now.",
    h1: "Flat Tire? We'll Mount the Spare or Tow You to a Tire Shop", sub: "Stay off the shoulder. The driver swaps the spare and checks the lug nuts. No usable spare? It goes on the flatbed.",
    ticks: ["Highway shoulders included", "Lug nuts torqued by hand", "Tow to a tire shop if needed"],
    faqs: [
      { q: "What if I don't have a spare?", a: "Then the car rides the flatbed to a tire shop, or home if you prefer." },
      { q: "Can you fix the tire on the spot?", a: "We don't patch tires roadside. We mount your spare so you can get to a shop." },
      { q: "Is it safe to wait on I-270?", a: "Stay buckled in with hazards on unless you can get well away from traffic. We'll call when we're close." },
    ],
  },
  {
    slug: "ev-towing", keyword: "EV towing", title: "EV & Tesla Towing in Columbus, OH",
    description: "Electric vehicle and Tesla towing in Columbus on a flatbed: transport mode, every wheel off the road, delivered to a charger or shop.",
    h1: "EV and Tesla Towing in Columbus, Wheels Off the Ground", sub: "Out of charge or broken down, your EV goes on the deck in transport mode and to a charger, service center or home.",
    ticks: ["Tesla, Mach-E, Ioniq, Bolt and more", "Transport-mode loading", "Delivered to a charger"],
    faqs: [
      { q: "Can you charge my EV on the spot?", a: "No. We tow it to the nearest fast charger or wherever you choose." },
      { q: "Do I need to do anything first?", a: "If the car powers on, look up how to enter tow or transport mode; the driver will walk you through it." },
      { q: "Is a flatbed really necessary?", a: "Most EV makers say to keep all four wheels off the road, so every EV we tow goes on a flatbed." },
    ],
  },
  {
    slug: "tesla-tow", keyword: "Tesla tow near me", title: "Tesla Tow Near Me — Columbus Flatbeds",
    description: "Tesla towing near you in Columbus: flatbed transport in tow mode to a Supercharger, Tesla Service or home. Auto Lyft USA, 24-7. Call now.",
    h1: "Tesla Tow Near You: Flatbed to a Supercharger or Service Center", sub: "Model 3, Y, S or X: loaded in Transport Mode, strapped at the tires, delivered where you need it.",
    ticks: ["Transport Mode loading", "Tow eye and dead-12V experience", "Any Tesla model that fits a light-duty deck"],
    faqs: [
      { q: "My Tesla won't power on. Can you still load it?", a: "Usually yes. A dead 12-volt battery can be powered externally to release the car, or we use skates." },
      { q: "Can you take it to Tesla Service?", a: "Yes, or to a Supercharger, your home or another shop you name." },
      { q: "Is a Cybertruck too heavy?", a: "Tell the dispatcher the model. Heavier vehicles depend on our deck's rating, and we'll say right away." },
    ],
  },
  {
    slug: "roadside-assistance", keyword: "roadside assistance", title: "Roadside Assistance Columbus, No Plan",
    description: "Roadside assistance in Columbus without a membership: jump starts, lockouts, tire changes, fuel and winch-outs. Auto Lyft USA, 24-7.",
    h1: "Roadside Assistance in Columbus, No Membership Needed", sub: "Pay per call for the fix you need, from a battery jump to a few gallons of gas to a pull out of a ditch.",
    ticks: ["Jumps, lockouts, tires, fuel", "Winch-outs from ditches and snow", "Tow on the spot if needed"],
    faqs: [
      { q: "Do I need AAA or a plan?", a: "No. Call us directly and pay for the call. Keep the receipt if your insurer reimburses roadside help." },
      { q: "What if the fix doesn't work?", a: "The same driver can load your car and take it where you need it." },
      { q: "Do you bring gas?", a: "Yes, enough to reach a station." },
    ],
  },
  {
    slug: "winch-out", keyword: "car stuck in ditch", title: "Car Stuck in a Ditch? Columbus Winch-Out",
    description: "Car stuck in a ditch, snow, mud or a soft yard near Columbus? Auto Lyft USA winches it back to solid ground, day or night. Call now.",
    h1: "Car in a Ditch or Stuck in Snow? We'll Winch It Out", sub: "A winch line and the right rigging bring it back to pavement. If it can't drive afterward, it rides the flatbed.",
    ticks: ["Ditches, snow, mud and yards", "Rigged to protect the car", "Flatbed if it won't drive"],
    faqs: [
      { q: "Should I keep trying to drive out?", a: "No. Spinning tires dig deeper and can overheat the transmission. Wait for the winch." },
      { q: "Do you go to rural roads?", a: "Yes, across the counties around Columbus. Give us the road name and the nearest crossroad." },
      { q: "What if the car is in water?", a: "Tell the dispatcher. Deep-water recoveries may need a partner with heavier gear." },
    ],
  },
  {
    slug: "accident-towing", keyword: "accident towing", title: "Accident Towing in Columbus, OH",
    description: "After a crash in Columbus, Auto Lyft USA flatbeds tow your car to the body shop of your choice or to our yard. 24-7. Call now.",
    h1: "Towing After an Accident, to the Shop You Choose", sub: "Once police clear the scene, we load the car, pick up loose parts and take it where you or your insurer wants it.",
    ticks: ["Your choice of body shop", "Loose parts secured on the deck", "Yard storage if you need time"],
    faqs: [
      { q: "Do I have to use the tow truck police call?", a: "If police order a tow, they choose. Otherwise you can ask for the company you want." },
      { q: "Will my insurance pay?", a: "Many policies cover towing after a crash. We give you an itemized receipt for your claim." },
      { q: "Can the car stay with you while I decide?", a: "Yes, at our Harrisburg Pike yard. Daily storage applies after the first day." },
    ],
  },
  {
    slug: "long-distance-towing", keyword: "long distance towing", title: "Long Distance Towing From Columbus",
    description: "Long-distance flatbed towing from Columbus to anywhere in Ohio and beyond. One vehicle, one driver, door to door. Call for a quote.",
    h1: "Long-Distance Flatbed Towing From Columbus", sub: "Cincinnati, Cleveland, Pittsburgh or Indianapolis: one car on one flatbed, picked up and delivered by the same driver.",
    ticks: ["Ohio and neighboring states", "One car per truck", "Quoted door to door"],
    faqs: [
      { q: "How far will you go?", a: "Anywhere in Ohio and into the neighboring states. Give us both addresses for a quote." },
      { q: "Can I ride along?", a: "Often one passenger can, if the driver has room. Ask when you book." },
      { q: "Can you pick up a car I bought out of town?", a: "Yes. Arrange the pickup with the seller and we'll bring it home." },
    ],
  },
];

export const landingPath = (slug: string) => `/go/${slug}`;
