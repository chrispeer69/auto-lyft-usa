import type { RepairService } from "../../types";

export default {
  title: "Check Engine Light Help in Columbus",
  description:
    "Check-engine light flashing in Columbus? We flatbed the car to your mechanic or a partner shop that reads and traces the fault. (614) 633-8163.",
  h1: "Check-Engine Light? Get the Car to a Diagnostic Shop",
  lede:
    "A glowing or flashing check-engine light needs a proper diagnosis. When the car shouldn't be driven, we flatbed it to a shop that can read and trace the fault.",
  intro: [
    "A check-engine light is the car's computer reporting that one of its sensors saw a reading outside the range it expects. The cause can be as small as a loose gas cap or as serious as a misfire that sends unburned fuel into the exhaust. The light alone doesn't say which, and the code a parts-store scanner pulls is a starting point rather than an answer. A shop with proper equipment watches live data, runs tests and narrows that code down to the part that actually failed.",
    "A steady light usually means you can drive gently to an appointment. A flashing one is different: it typically signals a misfire bad enough to overheat the catalytic converter, and continuing to drive can turn a modest repair into an expensive one. Pair any light with a red oil-pressure lamp, a climbing temperature gauge, heavy shaking or a sudden loss of power, and the safer move is to park and have the car carried. For the temperature side, see the [overheating guide](/guides/car-overheating-what-to-do).",
    "Auto Lyft USA does not diagnose or repair engines. We load the car on one of our flatbeds and deliver it to the shop you name, or, if you have no mechanic, to an independent partner shop that handles diagnostics. The shop calls you with what it found and a written estimate before touching anything. Drop-offs, night keys and holding a car at our yard are explained on the [repair shop towing](/towing/repair-shop-towing) page.",
  ],
  jobs: [
    { title: "Code scan and freeze-frame review", text: "The technician reads stored and pending codes plus the freeze-frame snapshot showing engine speed, temperature and load at the moment the fault was logged." },
    { title: "Live data and pinpoint testing", text: "Sensor readings are watched with the engine running, then the suspect circuit is checked with a meter or scope to confirm the part is bad before anyone orders it." },
    { title: "Misfire tracing", text: "Ignition coils, spark plugs, injectors and compression are checked cylinder by cylinder to find out why one is not firing cleanly." },
    { title: "Vacuum and vapor leak checks", text: "A smoke machine pushes visible vapor through the intake or the fuel-vapor system so small cracks and loose hoses reveal themselves." },
    { title: "Emissions component tests", text: "Oxygen sensors, the catalytic converter and the EGR system are tested, since faults in each can set codes that look alike." },
    { title: "Findings and estimate", text: "You get a summary of what failed, what the fix involves and what it will cost, and nothing proceeds until you approve it." },
  ],
  signs: [
    "Check-engine light flashing rather than glowing steadily",
    "Engine shaking or stumbling at idle or when accelerating",
    "Sudden drop in power, sometimes with the car stuck in a low gear",
    "Smell of raw fuel or rotten eggs from the tailpipe",
    "Fuel economy falling off for no obvious reason",
    "Long cranking before the engine finally catches",
    "Several dashboard warning lights coming on together",
  ],
  faqs: [
    {
      q: "Can I keep driving while the check-engine light is lit?",
      a: "If the light is steady and the car drives normally, most people can make it to a nearby shop at moderate speed. If it flashes, the engine is misfiring, and every mile risks overheating the catalytic converter. Pull over when it is safe and call for a tow. The same goes for a light that arrives with shaking, smoke, overheating or low oil pressure. A short flatbed ride costs far less than the damage a misfire can do.",
    },
    {
      q: "Can't I just get the code read for free and fix it myself?",
      a: "A free code read tells you which system the computer flagged, not which part failed. An oxygen-sensor code, for example, can come from a vacuum leak, a wiring fault or the sensor itself, so swapping parts based on the code alone often wastes money. A shop runs follow-up tests to confirm the cause. If you would rather work on the car at home, we can just as easily tow it to your driveway.",
    },
    {
      q: "Does your driver diagnose the car at pickup?",
      a: "No. Our drivers operate tow trucks; they do not scan, test or repair vehicles. They load the car, secure it on the flatbed and deliver it along with your notes about what happened. Diagnosis is done by the shop you choose or by an independent partner shop. Passing along details such as when the light came on and how the car felt helps the technician start in the right place.",
    },
    {
      q: "How much will the diagnosis and repair cost?",
      a: "That depends entirely on the shop and on what it finds, so we leave repair pricing to them. Expect a written estimate from the shop before work begins, and you decide whether to go ahead. Our part is the tow, which follows a published card: a hook-up fee plus mileage, with surcharges only for late nights, weekends or highway pickups. Every figure is on the [rates](/rates) page.",
    },
    {
      q: "What happens if the shop is closed when my car arrives?",
      a: "Many Columbus shops have a key drop box and a spot for after-hours vehicles. If yours does, the driver leaves the car there with a note listing your name, phone number and the symptom, then lets you know it has been delivered. If the shop has no drop area, the car stays at our Harrisburg Pike yard overnight and goes over once the shop opens.",
    },
    {
      q: "Will a loose gas cap really turn on the light?",
      a: "It can. The fuel-vapor system checks itself for leaks, and a cap that is not clicked tight can read as one. Tighten it and give it a few days of normal driving; the light may clear on its own. If it stays lit, or the car runs poorly in any way, have the code checked properly instead of assuming the cap was the cause.",
    },
    {
      q: "Can you recommend a shop if I don't have a mechanic?",
      a: "Yes. Tell the dispatcher what the car is doing and roughly where you would like it serviced, and the dispatcher can name a nearby independent partner with diagnostic equipment. Those shops are separate businesses; they set their own prices, write their own estimates and answer for their own work. You are never obligated to use them, and you can redirect the car any time before it is loaded.",
    },
  ],
  related: ["electrical-repair", "cooling-system-repair", "transmission-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
