import type { Place } from "../../types";

export default {
  keyword: "Arena District towing",
  title: "Arena District Towing, Columbus",
  description:
    "Locked out after dinner or dead battery in a district garage? Arena District towing and roadside help for residents and visitors, 24-7. (614) 633-8163.",
  h1: "Arena District Towing for Residents, Diners and Fans",
  lede:
    "Between the apartments, offices, restaurants and three event venues, the Arena District is busy most nights of the week. Our trucks cover all of it.",
  venue: {
    name: "Arena District",
    schemaType: "Place",
    locality: "Columbus",
    postal: "43215",
  },
  intro: [
    "The Arena District grew up on the northwest edge of downtown Columbus around Nationwide Arena, and it now holds Huntington Park, the Crew's downtown stadium, the KEMBA Live! concert venue, office towers, apartment buildings and a long row of restaurants and bars. It is not just an event zone. People live here, work here and park here every day, which is why Arena District towing calls come in on quiet Tuesday mornings as well as packed Saturday nights.",
    "Our flatbed carriers and wheel-lift trucks are posted around the city, and our office on Harrisburg Pike sits close to the district. The routes in and out are well known to our drivers: Nationwide Boulevard, Neil Avenue, Spring Street, and the ramps tying the area to I-670 and SR-315.",
    "Residents tend to call about cars that sat in an apartment garage for a week and will not turn over, or about a lockout in the parking deck at work. Visitors are more likely to need help after a game, a show or a long dinner. Whichever group you belong to, one phone call at (614) 633-8163 gets a price, an honest timing estimate and a truck sized for the job.",
  ],
  sections: [
    {
      heading: "Everyday calls we get here",
      paragraphs: [
        "Downtown living is hard on cars that do not get driven much. A vehicle parked for days in a garage slowly drains its battery, especially if it has an alarm, a dash camera or a keyless entry system that stays awake. Commuters who park in the same deck daily see their own set of problems, from tires picking up construction screws to fobs that quit working in the cold.",
      ],
      bullets: [
        "Batteries drained after a car sat unused in a residential garage.",
        "Keys locked in the car outside a restaurant on Nationwide Boulevard.",
        "Nails and screws in tires, common near active building sites.",
        "Cars that will not start in an office deck at the end of the workday.",
        "Moving a non-running car from a district garage to a shop or a new address.",
      ],
    },
    {
      heading: "Pinpointing your spot",
      paragraphs: [
        "The district packs many garages and surface lots into a few blocks, and several of them sit right next to each other. When you call, give us the name of your building or garage, the street the entrance faces, the level you are on and the space number if there is one.",
        "If you are at your apartment building, mention whether a key card or gate code is needed for the garage. The driver cannot help if they cannot get through the door, so it helps to meet them at the entrance or to let building staff know a tow truck is on the way.",
      ],
    },
    {
      heading: "Event nights versus ordinary nights",
      paragraphs: [
        "On a night with a hockey game, a ball game, a soccer match or a concert, streets in the district fill early and drain all at once. If your call is not urgent, such as a car that can safely stay put until morning, the dispatcher may suggest waiting until the crowd clears so you are not paying for a truck to sit in traffic.",
        "On ordinary nights the district is much easier to get around, and service tends to be straightforward. Either way, check our [rates page](/rates) for the exact numbers. In short: $75 flat for roadside work, $125 plus $7 a loaded mile for a tow, and $4 a mile en-route.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you provide Arena District towing for people who live in the neighborhood?",
      a: "Yes, and residents make up a good share of our calls here. If your car sat in your building's garage and now will not start, we can jump it, replace the battery on many models, or tow it to a shop. Let us know about gate codes or key-card access when you call so the driver can reach the car.",
    },
    {
      q: "My building garage has a low ceiling. Will a flatbed fit?",
      a: "Not every garage will fit a flatbed. A wheel-lift truck sits lower and may get in where a carrier cannot. If neither will, the driver may be able to start the car or inflate a tire so you can drive it to the street. When the car truly cannot run, we will look at the safest way to move it to a loading spot with your permission and, where needed, building management's.",
    },
    {
      q: "I locked my keys in my car outside a restaurant. Do I need a locksmith?",
      a: "For most cars, no. Our drivers open locked vehicles with professional tools as part of the $75 roadside service, plus en-route mileage. If the key itself is lost or broken and you need a new one cut or programmed, that is a locksmith or dealer job, and a dealer visit on our deck is the fallback when nothing else works.",
    },
    {
      q: "My car was towed from an Arena District lot. Can you get it back?",
      a: "We do not run private-lot enforcement, so your car is probably at the company listed on the lot's posted sign. Our guide on [getting a car back after a private-lot tow in Ohio](/guides/car-towed-from-private-lot-ohio) explains what to bring and who to call. Once it is released, we can carry it home if it is not drivable.",
    },
    {
      q: "Is it cheaper to wait until morning for a non-urgent tow?",
      a: "It can be. Our rate card adds $150 for overnight work, meaning any call from 10 PM until 6 AM, and weekend calls add $50. If your car is safely parked and you are allowed to leave it, scheduling a weekday morning pickup avoids both. The dispatcher will tell you the price either way so you can decide.",
    },
    {
      q: "Can you move a car from the Arena District to a repair shop for me?",
      a: "Yes. Tell us which shop and we will take it there. If you do not have a mechanic, we can suggest an independent partner shop that diagnoses the problem and gives you a quote before doing any repairs. We are a towing company and do not fix cars ourselves, so the repair decision is always yours.",
    },
    {
      q: "Do you help with flat tires on downtown streets?",
      a: "Yes. If you have a spare in good shape, the driver will swap it in so you can get to a tire shop. On busy downtown streets, stay on the curb side of the car while you wait. If there is no spare or the wheel is damaged, the carrier hauls it to a tire dealer or back home.",
    },
    {
      q: "Which streets do your trucks use to reach the district?",
      a: "Depending on where the nearest free truck is, drivers usually come in on the freeway system and enter the district on Nationwide Boulevard, Neil Avenue or Spring Street, depending on where your car is and what traffic is doing. On event nights they may approach from the north side to stay clear of the crowd.",
    },
  ],
  cities: ["columbus", "grandview-heights", "upper-arlington"],
  services: ["car-lockout", "roadside-assistance", "parking-garage-towing", "flatbed-towing"],
  related: ["nationwide-arena", "huntington-park", "crew-stadium", "convention-center"],
  notAffiliated:
    "Auto Lyft USA is not affiliated with or endorsed by the Arena District, its developers, property managers or any of its venues.",
} satisfies Omit<Place, "slug" | "category" | "label">;
