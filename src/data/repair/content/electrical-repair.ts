import type { RepairService } from "../../types";

export default {
  title: "Electrical & Charging Help, Columbus",
  description:
    "Car keeps dying after a jump? We tow it to a Columbus shop that tests the alternator, starter, wiring and parasitic drains. (614) 633-8163.",
  h1: "Dead Battery Again? Find the Real Electrical Fault",
  lede:
    "When a jump only buys a day, the culprit is usually the alternator, starter, wiring or a hidden drain. We get the car to a shop that can test the whole charging system.",
  intro: [
    "Your car's electrical system has three main players. The battery supplies the burst that turns the starter motor, the starter cranks the engine, and once the engine runs the alternator takes over, powering everything and recharging the battery. A fault in one can look like a fault in another. A weak battery cranks slowly; a failing alternator lets the battery drain while you drive; a bad starter clicks while the dash lights shine brightly. Corroded cables, broken grounds and a module that never shuts off add to the confusion.",
    "A single dead battery is often a roadside job, and our [jump start service](/towing/jump-start) handles that. The tow makes sense when the car won't stay running, when the battery light comes on while driving, when dimming headlights and flickering gauges point to a charging failure, or when you smell burning plastic or see smoke from wiring. A car that dies at a busy intersection is a hazard, and one with a possible short should not be driven at all.",
    "We don't repair wiring or replace alternators. We tow the car to your mechanic or to an independent partner shop that does electrical diagnosis, and that shop tests the system and writes up an estimate before any repair. If you want to understand the symptoms first, our guide to [batteries, starters and alternators](/guides/car-wont-start-battery-starter-alternator) walks through how to tell them apart.",
  ],
  jobs: [
    { title: "Battery load test", text: "The shop checks whether the battery can still deliver current under load, something a simple voltage reading cannot show." },
    { title: "Charging system test", text: "Alternator output is measured at idle and with accessories switched on, and the belt and tensioner that drive it are checked." },
    { title: "Starter circuit testing", text: "Measuring voltage drop across the starter circuit shows whether the motor, the solenoid or the cables are to blame." },
    { title: "Parasitic drain search", text: "With the car shut off, current draw is measured and fuses are pulled one at a time to find the circuit that keeps pulling power." },
    { title: "Wiring and ground repair", text: "Chafed harnesses, rodent-chewed wires and corroded ground straps are traced and repaired." },
    { title: "Module and relay diagnosis", text: "Body control modules, relays and switches that misbehave are tested before anything gets replaced." },
  ],
  signs: [
    "Battery light glowing on the dash while driving",
    "Headlights dimming at idle and brightening when you rev",
    "Rapid clicking when you turn the key, with no crank",
    "Car dead every few mornings even with a newer battery",
    "Power windows, radio or gauges acting erratically",
    "Hot-plastic smell from under the dash or hood",
    "Whine from the front of the engine that rises with RPM",
  ],
  faqs: [
    {
      q: "How do I know if it's the battery or the alternator?",
      a: "A rough rule: if the car starts after a jump and then dies again within minutes, or the battery light comes on while you drive, the alternator is a strong suspect. If it starts fine after a jump and runs all day but is dead again the next morning, look at the battery or a parasitic drain. Only a proper test confirms it, which is why a shop checks both.",
    },
    {
      q: "You offer jump starts. Why would I need a tow instead?",
      a: "A jump puts enough charge into the battery to start the engine. It does nothing for a charging system that has stopped working. If our driver jumps the car and it stalls again, or the dash shows the battery light, there is little point in driving it further. At that stage the driver can load it on the flatbed and take it to a shop. The roadside call and the tow are billed separately.",
    },
    {
      q: "What is a parasitic drain?",
      a: "It is a circuit that keeps drawing current after the car is shut off. Common culprits are a glovebox or trunk light that stays on, an aftermarket stereo or remote starter, a stuck relay, or a control module that never goes to sleep. The battery may be brand new and still go flat over a couple of days. Finding the source takes patient testing at the shop.",
    },
    {
      q: "Can you replace my battery instead of towing?",
      a: "If the battery is the only problem, our [car battery replacement](/towing/car-battery-replacement) service brings a new one to where the car is parked. If a fresh battery doesn't solve it, or the old one tests healthy and the car still struggles, that points to the starter, the alternator or the wiring. Those need a shop, and at that point a tow is the right call.",
    },
    {
      q: "Is a burning smell from the wiring dangerous?",
      a: "It can be. Overheated wiring melts insulation and, in a worst case, starts a fire. If you smell hot plastic or see smoke, turn the car off, get everyone out and, if there are flames, call 911 first. Do not restart it to move it a few feet. Once things are safe, call us and we can tow it to a shop without the engine ever running.",
    },
    {
      q: "How much does an electrical repair cost?",
      a: "We can't say, because we do not do repairs and the cost depends on what the shop finds. Some faults turn out to be a corroded terminal; others take hours of tracing. The shop puts its estimate in writing before starting, and you approve it with them directly. What we charge covers the tow or the roadside call, and both are listed on our [rates](/rates) page.",
    },
    {
      q: "Can the car be towed if it's dead and stuck in park?",
      a: "Yes. Many cars have a shift-lock release that lets the lever move to neutral without power, and the driver will look for it. If the car still can't be put in neutral, the winch pulls it onto the deck, and on a tight driveway wheel dollies help position it first. Mention the dead electrical system when you call so the right equipment comes along.",
    },
  ],
  related: ["engine-diagnostics", "ac-heating-repair", "exhaust-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
