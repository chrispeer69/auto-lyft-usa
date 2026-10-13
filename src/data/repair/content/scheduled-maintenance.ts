import type { RepairService } from "../../types";

export default {
  title: "Scheduled Car Maintenance, Columbus",
  description:
    "Car overdue for service or sitting for months? We tow it to your Columbus mechanic or a partner shop for scheduled maintenance. (614) 633-8163.",
  h1: "Keep Up With Maintenance and Stay Off the Shoulder",
  lede:
    "Plenty of roadside breakdowns trace back to a skipped service. If your car is overdue and not fit to drive, we can take it to the shop for that work.",
  intro: [
    "Every vehicle comes with a maintenance schedule, printed in the owner's manual or tracked by a reminder on the dash: oil changes, tire rotations, filters, spark plugs, belts, fluids and inspections at set mileage or time intervals. The schedule exists because parts wear predictably. A timing belt past its interval doesn't get noisy first; it simply snaps, and on some engines the valves and pistons collide when it does. Coolant loses its protection, brake fluid absorbs water, and batteries weaken quietly until the first cold morning.",
    "Maintenance is planned, so it normally doesn't involve a tow. The exceptions are cars that have been parked for months with a flat battery or soft tires, vehicles bought or inherited with an unknown service history, cars that are overdue and already showing symptoms, and the many cases where a skipped service has already turned into a breakdown. If a car hasn't run in a long time, driving it straight into traffic before the fluids and brakes are checked is a poor bet.",
    "Auto Lyft USA hauls; we don't service vehicles. We can move a car from your driveway, a storage unit or a relative's garage to the garage you use or to an independent partner that handles factory-interval maintenance. The shop tells you what is due and gives you a written estimate first. If the battery is the only thing stopping it, a [jump start](/towing/jump-start) may be enough to get it to the appointment under its own power.",
  ],
  jobs: [
    { title: "Oil, filter and fluid service", text: "Oil and filter on schedule, plus checks or changes of coolant, brake, transmission and power steering fluid." },
    { title: "Tire rotation and inspection", text: "Tires are moved between positions to even out wear, and tread depth and pressure are checked." },
    { title: "Air and cabin filters", text: "A clogged engine air filter chokes performance; a dirty cabin filter weakens heat and A/C airflow." },
    { title: "Spark plugs and ignition", text: "Plugs are replaced at the manufacturer's interval, which keeps misfires and poor mileage at bay." },
    { title: "Belts and timing parts", text: "Serpentine belts are checked for cracks, and timing belts are replaced on schedule along with related parts when needed." },
    { title: "Brake inspection", text: "Pads, rotors, lines and fluid are looked over so wear is caught before it turns into noise." },
    { title: "Battery and charging check", text: "A load test shows whether the battery is likely to survive the next Ohio winter." },
  ],
  signs: [
    "Maintenance reminder or wrench light on the dash",
    "Car has sat for several months without being driven",
    "Unknown service history on a car you just acquired",
    "Timing belt past its recommended mileage",
    "Tires that look low or cracked after sitting",
    "Sluggish cranking on cold mornings",
    "Odometer well past the last oil-change sticker",
  ],
  faqs: [
    {
      q: "Why tow a car that only needs maintenance?",
      a: "A car that runs well is better driven to its appointment. Towing makes sense when it has sat for months, has a dead battery, has tires that may have flat-spotted, is unregistered, or is overdue on a timing belt that could fail on the way. Paying for a short tow costs less than finding out the hard way on the outerbelt.",
    },
    {
      q: "What should a shop check on a car that has been sitting?",
      a: "Ask them to look at the battery, tire condition and pressure, brakes (rotors rust quickly when a car sits), fluid levels and condition, belts and hoses, and signs of rodents in the engine bay or air box. Old fuel can cause rough running too. The shop will tell you what needs attention and give you a written estimate before doing the work.",
    },
    {
      q: "Is the timing belt really that important?",
      a: "On engines that use a belt instead of a chain, yes. The belt keeps the valves and pistons moving in sync. On many designs, known as interference engines, a snapped belt lets them collide and can wreck the engine. The replacement interval is in the owner's manual. If you are well past it, many owners prefer not to drive far until it is done.",
    },
    {
      q: "Do you do oil changes or tune-ups?",
      a: "We don't. We provide towing and a few roadside services: jump starts, lockouts, tire changes, battery calls and fuel delivery. Maintenance happens at a shop. The car goes wherever you book the service, and if you have no shop lined up, we can name an independent partner that quotes and performs it. The [oil change and fluids](/repair/oil-change) page has more on when a fluid problem needs a tow.",
    },
    {
      q: "Can you move a car from storage to a shop?",
      a: "Yes. Tell the dispatcher where the car is, whether it rolls and steers, and where the keys are. Storage units and tight garages may need extra positioning, which the driver handles with the winch or wheel dollies. We deliver it to the shop, and when it arrives after closing time, our yard holds it until the shop's doors open. Yard storage is $45 per day.",
    },
    {
      q: "How do I know when service is due?",
      a: "Check the owner's manual or the maintenance menu on newer cars, which tracks oil life and service intervals for you. Your last receipt or the sticker on the windshield also helps. If you have no history at all, treat the car as due for every basic item and let the shop inspect it and suggest a starting point. The shop's estimate comes in writing before any work.",
    },
    {
      q: "Does Central Ohio driving change the maintenance schedule?",
      a: "Many owner's manuals list a severe-service schedule for short trips, stop-and-go traffic, temperature extremes and dusty or salted roads. Plenty of Central Ohio driving fits that description, especially in winter. Following the shorter intervals for oil, filters and fluids costs a little more up front and often saves money over the life of the car. Your shop can tell you which schedule matches how you drive.",
    },
  ],
  related: ["oil-change", "brake-repair", "cooling-system-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
