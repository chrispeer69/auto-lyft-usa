import type { RepairService } from "../../types";

export default {
  title: "Oil and Fluid Service Help, Columbus",
  description:
    "Oil-pressure light or a major oil leak in Columbus? Don't drive it. We tow the car to a shop for fluid service and leak repair. (614) 633-8163.",
  h1: "Low Oil Pressure or a Leak? Don't Drive It to the Shop",
  lede:
    "An oil change is routine. An oil-pressure light, a big leak or an engine knocking after a missed service is not, and that is when we should tow it in.",
  intro: [
    "Motor oil coats every moving part in the engine with a thin film that keeps metal from touching metal. It also carries heat away and holds dirt until the filter catches it. Over time oil breaks down and the filter clogs, which is why manufacturers set change intervals by miles, months and driving conditions. The other fluids matter as well: coolant, transmission fluid, brake fluid and power steering fluid each protect a system that fails expensively when the fluid runs low or turns to sludge.",
    "A routine oil change is something you drive to. The tow makes sense when the red oil-pressure lamp lights up, when you hear ticking or knocking that grows louder, when oil is pouring out after a drain plug or filter lets go, or when the dipstick comes up dry. Running an engine without oil pressure can ruin its bearings in minutes. Shut it off and call for help instead of gambling on the last few miles.",
    "We don't change oil. We bring a flatbed, load the car and take it to your shop or an independent partner shop that does fluid service and leak diagnosis. That shop checks the engine, explains what it found and puts its estimate in writing before doing the work. The [repair shop towing](/towing/repair-shop-towing) page describes how drop-offs work, including after hours.",
  ],
  jobs: [
    { title: "Oil and filter change", text: "Old oil is drained, the filter is replaced and the engine is refilled with the grade and amount the manufacturer specifies." },
    { title: "Leak inspection", text: "The underside is checked for drips from the drain plug, filter, oil pan, valve cover and seals until the source is found." },
    { title: "Oil pressure testing", text: "A mechanical gauge confirms whether low pressure is real or a faulty sending unit is triggering a false warning." },
    { title: "Transmission and differential fluid", text: "Drivetrain fluids are checked and changed on the intervals listed in the owner's manual." },
    { title: "Brake and steering fluid", text: "Both are checked for level and contamination, and old brake fluid is flushed out." },
    { title: "Coolant service", text: "Coolant strength and condition are tested, and the system is drained and refilled when it is due." },
  ],
  signs: [
    "Red oil-can light on the dash, even for a moment",
    "Ticking or knocking that gets louder with engine speed",
    "Oil spots under the engine that grow overnight",
    "Burning-oil smell after a drive",
    "Blue smoke from the tailpipe",
    "Oil change reminder ignored for months",
    "Dipstick reading below the add mark, or dry",
  ],
  faqs: [
    {
      q: "What should I do if the oil pressure light comes on?",
      a: "Get off the road as soon as it is safe and shut the engine off. Low oil pressure means parts are not being lubricated, and damage happens fast. Once the engine cools, check the dipstick. If the oil is very low, adding some may turn the light off, but whatever caused the loss still needs a shop. If the light stays on with oil at the full mark, do not restart the engine.",
    },
    {
      q: "My quick-lube place didn't tighten the drain plug. What now?",
      a: "If oil poured out on the road, do not drive the car any farther, even back to that business. Call them first; some will arrange the tow and an inspection themselves. Otherwise we can take the car to the shop that did the work or to another of your choosing. Photograph the leak and the spot where the car stopped, and hold on to your receipt.",
    },
    {
      q: "Can a missed oil change really cause a breakdown?",
      a: "It can, especially on engines that already burn a little oil. Old oil thickens into sludge that blocks the small passages feeding the top of the engine, and timing chains and turbochargers are particularly sensitive to it. A few hundred miles past due is rarely a crisis. Skipping service for a year or more is how bearings and camshafts end up failing.",
    },
    {
      q: "Do you change oil or top off fluids at the roadside?",
      a: "No. Roadside, we handle dead batteries, lockouts, spare-tire swaps and cars that ran out of gas. Oil and fluid service is shop work. If the car isn't safe to drive, we tow it to your own garage or an independent partner, which handles the service and puts a quote in writing before starting. You can also send it to a quick-lube place you already use.",
    },
    {
      q: "What does the tow cost to get an oil leak fixed?",
      a: "The towing charge comes from our published card: a hook-up fee, a per-mile charge for the drive out from our yard and a rate for each loaded mile, plus any late-night, weekend or highway surcharge. See [rates](/rates) for the actual numbers. The shop sets its own price for the leak repair and will give you a written estimate before doing it.",
    },
    {
      q: "Is a little oil on the driveway a reason to tow?",
      a: "Usually not. A few drops from an aging valve cover or oil pan gasket can be watched and fixed at your next appointment, as long as you keep checking the dipstick. The time to tow is when the drip becomes a stream, the level falls quickly between checks, or a warning light or new noise shows up alongside it.",
    },
    {
      q: "What fluids besides oil can leave me stranded?",
      a: "Coolant is the big one: let it run low and the engine overheats. Transmission fluid that leaks away can leave the car unable to move, and low power steering fluid makes steering heavy and noisy. Brake fluid is the most serious, since a leak there reduces stopping power. A shop can check all of them during an oil change, which takes a few extra minutes and can head off a breakdown.",
    },
  ],
  related: ["scheduled-maintenance", "engine-diagnostics", "cooling-system-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
