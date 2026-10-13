import type { RepairService } from "../../types";

export default {
  title: "Exhaust and Muffler Help in Columbus",
  description:
    "Exhaust dragging, fumes in the cabin or a stolen converter? We flatbed the car to a Columbus muffler or repair shop. (614) 633-8163.",
  h1: "Loud Exhaust or Fumes in the Cabin? Here Is What to Do",
  lede:
    "A rumbling muffler is annoying. Exhaust fumes inside the car or a pipe dragging on the road are dangerous, and that is when we tow it to a shop that handles exhaust work.",
  intro: [
    "The exhaust system carries burned gases from the engine out the back of the car, cutting noise and cleaning up emissions along the way. It starts at the exhaust manifold, runs through the catalytic converter, oxygen sensors, resonator and muffler, and ends at the tailpipe, all held up by rubber hangers and clamps. Because it hangs underneath, it takes the brunt of salt, slush and potholes, and Ohio winters rust through pipes and brackets faster than drier climates do.",
    "Not every exhaust leak is urgent, but some are. Carbon monoxide has no smell, and a leak ahead of the tailpipe can let it seep into the cabin, especially when the car idles in traffic. If anyone feels dizzy, headachy or drowsy while driving, open the windows and stop. A pipe or muffler dragging on the pavement can throw sparks or come loose on the highway. A rattling or glowing catalytic converter usually points to an engine problem upstream. Those situations call for a tow.",
    "We do not weld pipes or replace converters. The flatbed takes the car to a muffler specialist, your usual garage or an independent partner shop. There it goes up on a lift, the technician tracks down the leak or broken part, and you see a written quote before anything is cut or welded. If a check-engine light came on first, our [diagnostics page](/repair/engine-diagnostics) explains how a shop traces the code, and [repair shop towing](/towing/repair-shop-towing) covers drop-off details.",
  ],
  jobs: [
    { title: "Locating the leak", text: "With the car on a lift, the technician looks for soot trails, holes and cracked joints, sometimes with a smoke machine." },
    { title: "Pipe and muffler replacement", text: "Rusted sections are cut out and replaced with new pipe, a muffler or a resonator, clamped or welded in place." },
    { title: "Hangers and brackets", text: "Broken rubber hangers and rusted brackets are replaced so the system stops sagging or banging against the body." },
    { title: "Catalytic converter testing", text: "Temperature and oxygen-sensor readings show whether the converter is working, clogged or failing." },
    { title: "Manifold and gasket repair", text: "A cracked manifold or blown gasket near the engine causes ticking and can leak fumes under the hood." },
    { title: "Oxygen sensor replacement", text: "Sensors that throw codes or hurt fuel economy are tested and swapped." },
    { title: "Converter theft repair", text: "When a converter has been cut out, the shop installs a replacement and fixes the damaged pipes and sensor wiring." },
  ],
  signs: [
    "Exhaust suddenly much louder, especially at startup",
    "Headache or drowsiness while driving with the windows up",
    "Exhaust smell inside the cabin",
    "Rattling from under the car at idle",
    "Pipe or muffler hanging low or scraping the road",
    "Rotten-egg smell from the tailpipe",
    "Ticking from the engine that fades as it warms up",
    "Sharp loss of power along with a check-engine light",
  ],
  faqs: [
    {
      q: "Does a loud exhaust mean I should stop driving?",
      a: "A muffler with a small hole is mostly a noise problem and can usually wait for an appointment. A leak closer to the engine, a cracked manifold or a hole anywhere near the passenger compartment is different, because carbon monoxide can get inside. If you smell exhaust in the car or feel lightheaded, stop driving, air the car out and have it towed to a shop.",
    },
    {
      q: "My catalytic converter was stolen. Can I drive the car?",
      a: "It will start and run, but it will be extremely loud and the check-engine light will likely come on. Exhaust now exits under the middle of the car, which raises the risk of fumes reaching the cabin. Many owners choose to tow it instead. File a police report first, since your insurer may ask for one, then call us to haul it to a shop for the replacement.",
    },
    {
      q: "What should I do if the muffler is dragging?",
      a: "Pull over somewhere safe and away from dry grass, since hot exhaust parts can start a fire. Don't touch the pipe; it stays hot for a long while. Some people wire it up temporarily, but on a highway a loose section can fall off and strike another car. Calling for a flatbed is the safer move, and the deck keeps the hanging pipe off the pavement.",
    },
    {
      q: "Does Auto Lyft USA repair exhaust systems?",
      a: "No. We are a towing company and have no repair bays. Our job is delivering the car to a muffler shop, the garage you trust or an independent partner. The technicians there inspect the system, write up an estimate and does the work if you approve it. Price, parts and timing for the repair are all worked out between you and the shop.",
    },
    {
      q: "How much does an exhaust repair cost?",
      a: "It ranges from a clamp or hanger to a full converter replacement, so we don't guess. A technician looks it over on a lift and sends a written estimate first. Towing is a separate bill, and our [rates](/rates) page shows the hook-up fee, mileage and the surcharges for nights, weekends and highway pickups.",
    },
    {
      q: "Why does my exhaust smell like rotten eggs?",
      a: "That sulfur smell usually comes from the catalytic converter. It can mean the engine is running rich, a sensor is sending bad readings or the converter itself is failing, and it often shows up alongside a check-engine light. A shop scans the codes and tests the converter and sensors to see which part is responsible before recommending a repair.",
    },
    {
      q: "Should I idle with the windows up while I wait for the tow?",
      a: "If there is any chance of an exhaust leak, no. Idling while parked is when carbon monoxide builds up most easily inside a car, and snow packed around the tailpipe makes it worse. Turn the engine off, crack the windows, and wait outside the vehicle if the spot is safe and well away from traffic. In cold weather, keep warm layers in the car rather than relying on the heater.",
    },
  ],
  related: ["engine-diagnostics", "suspension-steering", "scheduled-maintenance"],
} satisfies Omit<RepairService, "slug" | "name">;
