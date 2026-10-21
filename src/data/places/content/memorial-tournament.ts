import type { Place } from "../../types";

export default {
  keyword: "Memorial Tournament towing",
  title: "Memorial Tournament Towing, Dublin",
  description:
    "Golf fan, volunteer or vendor with a stalled car during Memorial week in Dublin? Flatbed towing, jumps and winch-outs near Muirfield. (614) 633-8163.",
  h1: "Memorial Tournament Towing Around Muirfield Village",
  lede:
    "One week each spring, a quiet corner of Dublin turns into a PGA Tour stop. If your car quits on the way in, at a shuttle lot or on the drive home, we can help.",
  venue: {
    name: "Muirfield Village Golf Club",
    schemaType: "GolfCourse",
    street: "5750 Memorial Dr",
    locality: "Dublin",
    postal: "43017",
  },
  intro: [
    "Jack Nicklaus opened Muirfield Village Golf Club in 1974 and founded the Memorial Tournament there two years later. Ever since, late spring has meant a week of world-class golf in northwest Dublin, along with crowds, shuttle buses, temporary traffic patterns and a lot of cars parked in places they normally would not be. Memorial Tournament towing is a short, intense season for us, packed into that one week.",
    "The callers are a mix. Spectators who parked early and came back to a dead battery. Volunteers who have been at the course since dawn. Vendors and caterers with loaded vans. Families who got caught in a spring thunderstorm and found their car sunk into a soft lot. Each of those calls needs a slightly different answer, and our dispatcher will ask enough questions to send the right help.",
    "Our yard is on Harrisburg Pike, southwest of downtown Columbus, and dispatch sends whichever truck is nearest; from the south, the trip to Dublin follows I-270 around the west side. During tournament week we expect heavier traffic on the roads near the club and plan for it. The price is set before the truck leaves, and it does not go up because the event is famous.",
  ],
  sections: [
    {
      heading: "Spring storms and soft ground",
      paragraphs: [
        "Tournament week falls in a season of sudden thunderstorms. If you parked on grass and a downpour turned the ground to mud, your car may dig itself in when you try to pull out. Stop spinning the tires; that only buries them deeper and can throw mud onto other cars.",
        "With a [winch-out](/towing/winch-out), a steel cable from the truck draws the car onto solid footing, without the risk of a shove from a friendly stranger going wrong. Winching is billed at $150 per hour on our rate card, and most stuck cars take far less than a full hour. If the car is also damaged or will not start, the driver can load it onto the flatbed afterward.",
      ],
    },
    {
      heading: "How to point us to your car",
      paragraphs: [
        "Tournament parking and shuttle arrangements change from year to year, so we do not assume we know where you are. Follow the event's own parking instructions, and when you call us, describe what you see.",
      ],
      bullets: [
        "The name or number on the lot sign, or the shuttle stop you used.",
        "The nearest road you can see or the one you drove in on.",
        "Whether you are on pavement, gravel or grass.",
        "If you are on a public road, the closest crossroad and the direction you were heading.",
      ],
    },
    {
      heading: "Price and timing",
      paragraphs: [
        "Dublin is a mid-range distance from our yard. Roadside work costs $75 flat, and a tow starts at $125 to load the car with $7 added for every mile it is carried. Both include $4 per mile for our drive up from the yard. A Saturday or Sunday call adds the $50 weekend fee. All figures are on the [rates page](/rates).",
        "We will not quote a fixed arrival time during tournament week, because traffic near the club changes hour by hour. The dispatcher will give you a live estimate and keep you informed if the driver runs into closures.",
      ],
    },
  ],
  faqs: [
    {
      q: "What does Memorial Tournament towing usually involve?",
      a: "Most calls during tournament week are dead batteries, lockouts and flat tires in parking areas, plus a few cars stuck in soft ground after rain. Real breakdowns on the surrounding roads come next. We handle all of these with our tow trucks and roadside tools. Call (614) 633-8163, describe where you are and what happened, and the dispatcher will quote the job before sending a truck.",
    },
    {
      q: "My car is stuck in mud at a grass parking area. Can you pull it out without damage?",
      a: "Usually, yes. The driver attaches a cable to a proper recovery point on your car and pulls it slowly onto firm ground with the truck's winch. That is far gentler than pushing or rocking. Winch-outs are billed at $150 per hour, and the time is usually short. Should it be undrivable once free, the same truck loads it for a shop run.",
    },
    {
      q: "Can you reach a volunteer who has been parked at the course since early morning?",
      a: "Yes. Long days in a parked car often end with a drained battery, especially if a phone was charging or a door was left ajar. Let us know the parking area and when your shift wraps up. If you cannot leave your post, you can call ahead and we will plan to meet you as soon as your shift ends.",
    },
    {
      q: "Do you tow catering and vendor vans during tournament week?",
      a: "Light-duty vans within our flatbeds' weight limits, yes. A van loaded with equipment and supplies may be heavier than it looks, so tell the dispatcher the make, model and roughly what is inside. For heavier trucks or trailers, we arrange a heavy-wrecker partner and coordinate the job so you only deal with one company.",
    },
    {
      q: "Is there any extra charge because it's a big event?",
      a: "No. We charge from the same rate card every day of the year. The only time-based extras are the weekend fee on Saturdays and Sundays and the overnight fee for calls between 10 PM and 6 AM. Traffic may affect how long it takes the truck to reach you, but it does not change the price you were quoted.",
    },
    {
      q: "Can you take my car to a shop in Dublin or Powell?",
      a: "Yes. Give us the shop's name and address and we will deliver the car there. Visiting from out of town without a local mechanic? We can suggest an independent partner shop that will diagnose the issue and contact you with a quote. You stay in control of the repair; we just get the car there.",
    },
    {
      q: "My electric car ran low waiting in traffic near the course. What can you do?",
      a: "EVs should be moved on a flatbed with the drive wheels off the ground, and that is how we carry them. We can take the car to the nearest public charger or to your home. Our EV rates are $150 to hook up, $7.50 per loaded mile and $2.50 per mile en-route, and the dispatcher will confirm the total before we leave.",
    },
    {
      q: "Can you help if I break down on the drive home after the final round?",
      a: "Yes, wherever you are in central Ohio. Get as far off the road as is safe, turn on your hazards, and phone us with the route you are on plus the last exit or side road you passed. If you are on I-270 or US-33, the highway fee on our rate card applies, and the dispatcher will include it in the quote.",
    },
  ],
  cities: ["dublin", "powell", "hilliard", "plain-city"],
  services: ["winch-out", "jump-start", "car-lockout", "flatbed-towing", "ev-towing"],
  related: ["columbus-zoo", "ohio-stadium", "red-white-and-boom"],
  notAffiliated:
    "Auto Lyft USA is not affiliated with or endorsed by the Memorial Tournament, Muirfield Village Golf Club or the PGA Tour.",
} satisfies Omit<Place, "slug" | "category" | "label">;
