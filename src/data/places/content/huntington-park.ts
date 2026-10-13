import type { Place } from "../../types";

export default {
  keyword: "Huntington Park towing",
  title: "Huntington Park Towing for Clippers Fans",
  description:
    "Ballgame over and the car won't crank? Huntington Park towing, jumps, unlocks and tire swaps for Clippers fans in the Arena District. (614) 633-8163.",
  h1: "Huntington Park Towing and Roadside Service",
  lede:
    "Summer baseball downtown is a great night out until a hot battery quits in the lot. We cover Clippers games from the first pitch in April to the last out in September.",
  venue: {
    name: "Huntington Park",
    schemaType: "StadiumOrArena",
    street: "330 Huntington Park Ln",
    locality: "Columbus",
    postal: "43215",
    lat: 39.9686,
    lng: -83.0109,
  },
  intro: [
    "Huntington Park opened in 2009 as the home of the Columbus Clippers, the Triple-A affiliate of the Cleveland Guardians, and it sits in the Arena District between Nationwide Arena and the Crew's soccer stadium. The minor league schedule is long, with dozens of home dates between spring and late summer, including weekday afternoon games that draw office workers and school groups. That steady rhythm makes Huntington Park towing a seasonal routine for our drivers.",
    "Baseball crowds are friendlier to traffic than football crowds, but the parking is still downtown parking: shared garages, metered curbs and surface lots that may also be serving a hockey game or a concert on the same night. When something goes wrong, our dispatcher sorts out exactly where you are and sends one of our four flatbeds from the yard on Harrisburg Pike, a short trip up the freeway.",
    "Summer has its own pattern of failures. Heat is actually harder on a car battery than cold is, because it speeds up the chemical wear inside. A battery that was weakened over a hot July often gives up on a ballpark night. Tires on hot pavement and cooling systems stuck in traffic come next, followed by the ever-present lockout.",
  ],
  sections: [
    {
      heading: "Why summer ballgames produce dead batteries",
      paragraphs: [
        "In winter a battery fails because the cold steals its cranking power. In summer the damage is slower and hidden: heat under the hood evaporates fluid and corrodes the plates, so the battery seems fine for weeks and then cannot start the car one evening. A car parked in full sun in a surface lot for a doubleheader is a likely candidate.",
        "If the car clicks or cranks slowly, a [jump start](/towing/jump-start) will often get you home. A battery past its third summer that has now let you down twice is due for replacement. Our drivers can install a new battery on site for many common makes.",
      ],
    },
    {
      heading: "Where did you park?",
      paragraphs: [
        "The ballpark shares its neighborhood with apartment towers, offices and two other major venues, so a street name alone may not be enough. The more of these you can give us, the faster the driver finds you:",
      ],
      bullets: [
        "The garage or lot name printed on your receipt or in your parking app.",
        "The level and pillar or row marking, if you are in a structure.",
        "The cross streets nearest the car, for a surface lot or a metered space.",
        "The color, make and model of the car, plus your license plate.",
      ],
    },
    {
      heading: "Weekday games and quick fixes",
      paragraphs: [
        "Afternoon games bring a different crowd: people who took a long lunch, groups of kids, fans who need to be back at work or home by a certain time. If the problem is a flat or a lockout, the fix takes only minutes once the driver arrives, and you can usually still make your next stop.",
        "Price-wise, those quick fixes cost $75 flat, and our truck bills $4 for each mile it drives to reach you. When hauling is unavoidable, the tow is $125 to hook up and $7 a loaded mile. Full details, including weekend and late-night fees, are on the [rates page](/rates).",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Huntington Park towing available during afternoon Clippers games?",
      a: "Yes. Our dispatch line works every hour of every day, so a weekday afternoon game is covered the same as a Saturday night. Weekday daytime calls avoid both the weekend fee and the overnight fee, which makes them the least expensive time on our rate card. Call (614) 633-8163 and tell us which garage or lot you are in.",
    },
    {
      q: "Can heat really kill a car battery?",
      a: "Yes. High temperatures under the hood speed up the wear inside a battery, so a battery often weakens over a hot summer and then fails without warning. A car that sat in the sun during a long ballgame is a common place for that to happen. A jump usually gets you home, but have the battery tested within a few days afterward.",
    },
    {
      q: "My tire went flat in a lot near the ballpark. Will you change it?",
      a: "Yes, as long as you have a usable spare and the lug nuts come off. If your car has a locking lug nut, find the key, which is often in the glove box or with the spare. If there is no spare or the tire is damaged beyond a spare's help, we can take the car on a flatbed to a tire shop or your home.",
    },
    {
      q: "Do you charge more on fireworks nights or big promotional games?",
      a: "No. Our prices come from the rate card, not from the ballpark's schedule. A busy night may mean more traffic for the driver to work through, and you will get an honest time estimate. The only add-ons are the standard ones: the weekend fee on Saturdays and Sundays, and the overnight fee for calls from 10 PM to 6 AM.",
    },
    {
      q: "Can you pick up my car later if I need to leave the ballpark now?",
      a: "Often, yes, as long as the garage or lot allows the car to stay and someone can let the driver in. You can arrange for us to meet a friend there with the keys, or to come back the next morning. Check the garage's overnight rules first so the car is not ticketed or towed by the lot operator.",
    },
    {
      q: "Can you tow a car with a low front bumper from a downtown garage?",
      a: "Yes. Sports cars and lowered vehicles need extra care on a flatbed so the bumper does not scrape on the ramp. Tell the dispatcher the make and model so the driver brings low-angle ramps or wood blocks. Garage clearance still decides whether the carrier can come inside, so give us the garage name and level as well.",
    },
    {
      q: "What if my car won't start but the dash lights work fine?",
      a: "Bright dash lights with no crank can point to a starter, a bad connection at the battery or a shifter not fully in park. The driver can check the simple causes first and try a jump. If it still does not start, the car will need a shop, and we can carry it there. See our guide on [battery, starter and alternator trouble](/guides/car-wont-start-battery-starter-alternator).",
    },
    {
      q: "Do you go to other Arena District venues on the same night?",
      a: "Yes. On nights when the arena, the ballpark and the soccer stadium are all busy, we may have calls at more than one venue. Each one is quoted and timed on its own. The dispatcher will tell you honestly where your call sits in line and roughly when the driver will reach you.",
    },
  ],
  cities: ["columbus", "grandview-heights", "upper-arlington"],
  services: ["jump-start", "car-battery-replacement", "flat-tire-change", "car-lockout", "low-profile-towing"],
  related: ["crew-stadium", "nationwide-arena", "arena-district"],
  notAffiliated:
    "Auto Lyft USA is not affiliated with or endorsed by the Columbus Clippers or Huntington Park and its owners or operators.",
} satisfies Omit<Place, "slug" | "category" | "label">;
