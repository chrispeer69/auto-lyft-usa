/*
  ChatGPT ad pages under /chatgpt/ (owner, 2026-11-28): one page per ChatGPT ad
  group, mirroring the sister site's set in fresh words. Noindex, no menu, one
  phone number, a 3-field request (name, phone, location) that opens a text to
  dispatch (this is a static site: nothing is sent to a server). No prices and
  no promised arrival minutes: the owner has not confirmed an ETA for this
  company, so the copy says we dispatch right away and give a live estimate.
*/
import type { Faq } from "./types";

export interface ChatGptPage {
  slug: string;
  service: string; // fills the text message: "Service: …"
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  sub: string;
  ticks: string[];
  covers: string[];
  faqs: Faq[];
}

/** Towns and roads named on every page (south and west weighted, like the yard). */
export const CHATGPT_AREA = [
  "Columbus", "Grove City", "Hilliard", "Dublin", "Westerville", "Groveport", "Obetz", "Galloway",
];
export const CHATGPT_ROADS = ["I-70", "I-71", "I-270", "US-23", "SR-315"];

export const CHATGPT_PAGES: ChatGptPage[] = [
  {
    slug: "tow",
    service: "Tow",
    title: "Tow Truck in Columbus, OH — Call Now",
    description: "Auto Lyft USA sends a tow truck anywhere in Columbus, 24-7. Breakdowns and crashes. Hear the full cost before we roll.",
    eyebrow: "Emergency + accident towing",
    h1: "Need a Tow Truck in Columbus? One Is Rolling Your Way",
    sub: "Broken down or just had a crash, call and a dispatcher assigns the closest of our trucks, then gives you a live arrival estimate.",
    ticks: ["Open every hour, every day", "Full cost quoted up front, nothing tacked on later", "Taken to the body shop, mechanic or home you pick"],
    covers: ["Cars that won't start or won't move", "Collisions, once police have cleared the scene", "Highway shoulders and ramps", "Flatbed for AWD, EV and low cars"],
    faqs: [
      { q: "How fast can a truck get to me?", a: "It depends where our nearest truck is when you call. The dispatcher looks, picks the closest one and tells you a real estimate on that same call." },
      { q: "Is there anything extra on the bill?", a: "No add-ons appear after the job. You hear what the tow costs before a driver is sent, and you can say no." },
      { q: "I was just in a crash. Can you tow my car?", a: "Yes, after police release it. We load any loose parts and take the car to your body shop, or hold it at our yard while your claim gets sorted." },
      { q: "Will you tow it to my own mechanic?", a: "Yes. Any address you give us, or our Harrisburg Pike yard if the shop is closed overnight." },
      { q: "Do I need a roadside plan or membership?", a: "No. You pay for the one call. Keep the receipt if your insurer pays you back for towing." },
    ],
  },
  {
    slug: "roadside",
    service: "Roadside help",
    title: "Roadside Help in Columbus, OH — 24-7",
    description: "Dead battery, keys locked inside, flat tire or empty tank in Columbus? Auto Lyft USA sends a driver 24-7 with no membership needed.",
    eyebrow: "Jump start · lockout · flat tire · fuel",
    h1: "Stuck in Columbus? We Send Roadside Help Right Away",
    sub: "A jump, a door opened, a spare mounted or a few gallons of gas: one call and a driver heads to where you're parked.",
    ticks: ["Any hour, holidays included", "Cost told to you before anyone drives out", "If the quick fix fails, the same truck can tow"],
    covers: ["Jump starts and a battery test", "Lockouts opened without damage", "Spare tire mounted, even on a highway shoulder", "Enough fuel to reach a station"],
    faqs: [
      { q: "Can you get me running with a jump?", a: "Usually. The driver boosts the battery, then puts a tester on it, which tells you if it can be trusted for the next cold start." },
      { q: "My keys are inside the car. Can you open it?", a: "Yes, with wedge and reach tools that don't scratch paint or break glass. Bring a photo ID. If a child or pet is inside, tell us first." },
      { q: "I don't have a spare. What now?", a: "The car rides to a tire shop or your home instead. We don't patch tires on the roadside." },
      { q: "Are there hidden fees?", a: "No. The dispatcher tells you the cost on the phone, and that is the cost." },
      { q: "Do you come out late at night?", a: "Yes. Someone answers and trucks run through the night, weekends and holidays." },
    ],
  },
  {
    slug: "heavy-duty",
    service: "Heavy-duty tow",
    title: "Heavy Truck Towing in Columbus, OH",
    description: "Semi, box truck, bus or RV down near Columbus? One call to Auto Lyft USA and our dispatch sets up a heavy wrecker, 24-7.",
    eyebrow: "Semis · box trucks · buses · RVs",
    h1: "Heavy Truck Down Near Columbus? One Call Gets It Handled",
    sub: "Our own trucks are light-duty, so a heavy wrecker partner does the pull. You keep talking to our dispatch from the first call to the drop-off.",
    ticks: ["Answered around the clock", "One dispatcher stays your contact", "Cost confirmed before the wrecker rolls"],
    covers: ["Tractors, trailers and semis", "Box trucks and delivery vans", "Buses and large RVs", "Interstate breakdowns: I-70, I-270 and I-71"],
    faqs: [
      { q: "Do you tow semis yourselves?", a: "No. Our fleet is light-duty. For heavy trucks our dispatch books a heavy wrecker partner and stays on the job with you." },
      { q: "What details does dispatch need from me?", a: "The vehicle type, roughly how much it weighs loaded, where it is (road, direction, nearest exit) and where it needs to go." },
      { q: "Will I deal with two companies?", a: "You deal with us. We arrange the partner, pass along updates and answer your questions." },
      { q: "Are there hidden fees?", a: "No. The cost is confirmed with you before the heavy wrecker is sent." },
      { q: "Can you also tow the car or pickup with it?", a: "Yes. If a light vehicle needs moving too, one of our own flatbeds can take it." },
    ],
  },
];

export const chatgptPath = (slug: string) => `/chatgpt/${slug}`;
