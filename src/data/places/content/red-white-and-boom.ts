import type { Place } from "../../types";

export default {
  keyword: "Red White & BOOM towing",
  title: "Red White & BOOM Towing, Columbus",
  description:
    "Fireworks over, car dead in a packed downtown garage? Red White & BOOM towing, jump starts and lockouts on the biggest night downtown. (614) 633-8163.",
  h1: "Red White & BOOM Towing on Fireworks Night",
  lede:
    "Columbus's early-July fireworks pack the riverfront like nothing else all year. If your car is the one that won't leave afterward, here is how we help.",
  venue: {
    name: "Downtown Columbus riverfront",
    schemaType: "Place",
    locality: "Columbus",
  },
  intro: [
    "Red, White & BOOM! lights up downtown Columbus every year around July 3rd, and it is the one night when the whole region seems to try to park within walking distance of the Scioto riverfront. Garages fill hours ahead, side streets in the surrounding neighborhoods line up bumper to bumper, and many downtown streets close to traffic for the crowds and the show. Red White & BOOM towing is less about distance than about patience and planning.",
    "Harrisburg Pike sits close to the riverfront, which normally makes this an easy run for us. On fireworks night, though, the last mile can take longer than the first ten. We will not pretend otherwise. The dispatcher will tell you what is realistic, suggest the quickest fix, and help you decide whether it makes sense to wait for the crowd to clear or to leave the car overnight and deal with it in the morning.",
    "What we can promise is a clear price before we roll, help that fits the actual problem, and a driver who is calm in a crowd. On fireworks night, a jumper pack or a lockout kit settles far more calls than the flatbed deck does.",
  ],
  sections: [
    {
      heading: "Why the car fails on the Fourth",
      paragraphs: [
        "July heat, hours of waiting and a drained battery from music, phone chargers or a cooler plugged into the outlet are a familiar combination. After the show, cars crawl for a long time in the exit traffic, and engines with tired cooling systems overheat. Fender-benders happen when a whole city of drivers tries to leave at the same moment, often in the dark and often on unfamiliar streets.",
        "If you are in a minor collision, move to a safe spot if the cars can be driven, exchange information and get police involved when someone is injured or a vehicle sits in a live lane. If your car cannot be driven, our [accident towing](/towing/accident-towing) service takes it to a body shop or your home.",
      ],
    },
    {
      heading: "Wait it out or call now?",
      paragraphs: [
        "There is no single right answer. Here is how we think about it with callers:",
      ],
      bullets: [
        "Call right away if the car is in a travel lane, blocking a garage exit or anywhere unsafe.",
        "Call right away if you are alone, have small children with you or do not feel safe.",
        "Consider waiting an hour if the car is safely parked and the problem is a dead battery or a flat. The streets clear and the driver reaches you sooner.",
        "Consider leaving the car until morning if the garage allows it and you have another way home. It avoids the overnight fee and the crowd.",
      ],
    },
    {
      heading: "Garages, neighborhood streets and finding you",
      paragraphs: [
        "Fireworks parking spreads well beyond downtown into German Village, the Short North, Franklinton and other nearby neighborhoods. Wherever you are, give us the street address or the nearest intersection, plus the garage name and level if you are in a structure. A text with a dropped pin is the most reliable way to guide the driver through a crowd.",
        "Prices follow our standard [rate card](/rates): $75 flat for a jump, unlock or tire swap, or a tow at $125 plus $7 per loaded mile, with $4 a mile for our trip out. Calls between 10 PM and 6 AM, which describes most of fireworks night, add $150. The dispatcher will give you the total before sending a truck.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is Red White & BOOM towing available all night after the fireworks?",
      a: "Yes. Our dispatch line is open all night, every night, including the busiest evening of the summer downtown. Calls after the fireworks usually fall within our overnight hours, so the $150 overnight fee will be part of the quote. The dispatcher will tell you the full price and a realistic time estimate before a truck heads your way.",
    },
    {
      q: "Can a tow truck even get downtown during the fireworks?",
      a: "Not into the closed streets, and not quickly while crowds are leaving. Our trucks obey the same barricades and police directions as everyone else. Once the roads reopen and traffic thins, access gets much easier. The dispatcher will tell you whether it is better to wait or whether the driver can reach you from a different direction.",
    },
    {
      q: "My car was towed by the city for parking in a no-parking zone. Can you get it?",
      a: "No. Vehicles towed by police or the city go to an impound lot, and only the owner can claim them after paying the fees. Call the police non-emergency line to find out where the car went. If it will not start once released, our flatbed can collect it at the impound gate and deliver it wherever you choose.",
    },
    {
      q: "I parked on a side street in German Village and now I have a flat. What should I do?",
      a: "If you have a usable spare and the car is off the street, we can swap it for the $75 roadside rate plus en-route mileage. On narrow brick streets, keep clear of passing cars while you wait. If there is no spare or the rim is damaged, the car goes up on the deck and over to a tire dealer or your driveway.",
    },
    {
      q: "Is it safe to leave my car downtown overnight after the fireworks?",
      a: "That depends on where it is parked. Many garages allow overnight parking, but check the posted rules and hours, because some close and others charge by the day. A car left on a street may face parking restrictions in the morning. If you decide to leave it, you can book a morning pickup, which skips the overnight fee.",
    },
    {
      q: "My car overheated in the traffic leaving the riverfront. What now?",
      a: "Pull over as soon as it is safe, switch off the engine and let it cool. Leave the radiator cap alone until everything under the hood has cooled, since the coolant is under pressure. If the temperature gauge rises again right away after restarting, or you see steam or a puddle of coolant, call us for a tow rather than driving further. Our overheating guide explains the safe steps.",
    },
    {
      q: "How long will I wait for a truck on fireworks night?",
      a: "We will not guess a number before we know where you are and what traffic is doing. On fireworks night it can take longer than usual, especially right after the show ends. The dispatcher gives you a live estimate and calls you back if it changes. If you are in an unsafe spot, tell us, and we will prioritize accordingly.",
    },
    {
      q: "Can you tow my car to a body shop after a collision downtown?",
      a: "Yes. Make sure everyone is safe, call police if needed and take photos of the scene and the damage. Then call us with your location and the shop's address. If your insurer has a preferred shop, we can take it there. Still deciding? Our yard can store it while the claim gets sorted.",
    },
  ],
  cities: ["columbus", "grandview-heights", "bexley", "whitehall"],
  services: ["accident-towing", "jump-start", "car-lockout", "parking-garage-towing", "flat-tire-change"],
  related: ["columbus-festivals", "arena-district", "convention-center"],
  notAffiliated:
    "Auto Lyft USA is not affiliated with or endorsed by Red, White & BOOM!, its organizers, sponsors or the City of Columbus.",
} satisfies Omit<Place, "slug" | "category" | "label">;
