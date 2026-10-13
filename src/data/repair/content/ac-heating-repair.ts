import type { RepairService } from "../../types";

export default {
  title: "A/C and Heater Repair Help, Columbus",
  description:
    "No heat or warm A/C in Columbus? Learn when it's safe to drive, and when we should flatbed the car to a climate-control shop. (614) 633-8163.",
  h1: "No Heat or No Cold Air? Getting the Car Looked At",
  lede:
    "A dead A/C in July or a cold cabin in January is more than a comfort issue when it hides a coolant leak. Here is when to drive in and when we should tow it.",
  intro: [
    "Climate control runs on two separate systems that share the same vents. Cold air comes from an air-conditioning loop: an engine-driven compressor pumps refrigerant through a condenser up front and an evaporator behind the dash. Heat comes from engine coolant flowing through a small radiator called the heater core. Blend doors and a blower motor decide where the air goes. So a no-heat complaint is often a cooling-system problem in disguise, while weak A/C usually traces to a leak, a failed compressor clutch or an electrical fault.",
    "Most cars with weak A/C can be driven to an appointment. The exceptions matter. If there is no heat and the temperature gauge is climbing, coolant may be low enough to overheat the engine. A sweet smell in the cabin, a greasy film on the windshield or a damp passenger floor can mean the heater core is leaking. A seized compressor can shred the belt that also turns the alternator. In those cases, park and arrange a tow; our [overheating guide](/guides/car-overheating-what-to-do) explains what to watch.",
    "We don't charge refrigerant or replace heater cores. We bring the car on a flatbed to the shop you prefer or an independent partner shop with A/C equipment, and that shop diagnoses it and gives you an estimate in writing first. Night and weekend drop-offs are covered on the [repair shop towing](/towing/repair-shop-towing) page.",
  ],
  jobs: [
    { title: "Refrigerant leak detection", text: "Dye or an electronic sniffer finds where refrigerant is escaping, since adding more without fixing the leak only buys a short break." },
    { title: "Recover, vacuum and recharge", text: "The system is emptied with recovery equipment, held under vacuum to remove moisture, then filled with the correct amount of refrigerant." },
    { title: "Compressor and clutch checks", text: "A compressor that won't engage is checked for electrical faults, low pressure or internal failure before anything is replaced." },
    { title: "Heater core and coolant flow", text: "Low coolant, trapped air and a clogged heater core are the usual reasons for lukewarm heat, and each is tested." },
    { title: "Blend door and blower repair", text: "Clicking behind the dash or air from the wrong vents usually means a door actuator; no airflow at all points to the blower or its resistor." },
    { title: "Filter and condenser cleaning", text: "A clogged cabin air filter or a condenser packed with leaves and road grime can weaken airflow and cooling." },
  ],
  signs: [
    "A/C blows warm, or only cools at highway speed",
    "Heat stays lukewarm after the engine is fully warm",
    "Sweet, syrupy smell inside the cabin",
    "Greasy fog on the inside of the windshield",
    "Damp carpet on the passenger side",
    "Grinding or squealing when the A/C switches on",
    "Clicking or tapping from behind the dashboard",
    "Temperature gauge rising while the heater blows cold",
  ],
  faqs: [
    {
      q: "Is it safe to drive with the A/C not working?",
      a: "Usually, yes, as long as nothing else is wrong. A lack of cold air does not hurt the engine on its own. The concern is an A/C failure that comes with a squealing belt, a burning smell or a seized compressor, because that same belt may drive the alternator and on some engines the water pump. If it breaks, the car can lose charging power or overheat quickly.",
    },
    {
      q: "Why would a heater problem need a tow?",
      a: "Because cabin heat depends on coolant. If the air turns cold while the engine temperature rises, coolant is probably low or not circulating, and driving on could warp the cylinder head. A leaking heater core can also fog the windshield badly enough to block your view. Either case is a good reason to stop and have the car carried rather than driven.",
    },
    {
      q: "Can a shop just add refrigerant?",
      a: "It can, but refrigerant does not get used up; if the system is low, it is leaking somewhere. A top-off without finding the leak may last a week or a season. A thorough shop checks pressures, hunts down the leak and explains whether a seal, hose, condenser or compressor needs attention. You get that estimate in writing before any work begins.",
    },
    {
      q: "Is the sweet smell in my car dangerous?",
      a: "A sweet smell usually means coolant, which is toxic to people and pets. Inside the cabin it often points to a leaking heater core; under the hood, a hose or radiator leak. Breathing the vapor on long drives is not a good idea, and the coolant loss can overheat the engine. Get the car checked soon, and stop driving if the gauge starts to climb.",
    },
    {
      q: "Does Auto Lyft USA work on air conditioning?",
      a: "No. We run tow trucks and a handful of roadside services only. Our role ends when the car reaches the shop you pick: a dealer, your usual garage, or an independent partner the dispatcher recommends. The shop handles the testing, parts and refrigerant work, sets its own prices and gives you a written estimate. You can change the destination before the car is loaded.",
    },
    {
      q: "What will the tow to an A/C shop cost?",
      a: "Towing follows our published card: a hook-up charge plus per-mile rates for the drive from our yard and for each loaded mile, with surcharges for late-night, weekend or highway pickups. The dispatcher quotes the total before the truck leaves. Repair charges are separate and come from the shop. Our [rates](/rates) page lists every towing fee.",
    },
    {
      q: "Should I run the A/C in winter?",
      a: "Many cars engage the A/C compressor automatically on defrost, which dries the air and clears the windshield faster. Running it now and then also moves oil through the system and keeps the seals from drying out. If the compressor makes noise, the defroster cannot clear fog or the cabin smells sweet with the heat on, mention it to the shop, since each of those points to a problem worth fixing before summer.",
    },
  ],
  related: ["cooling-system-repair", "electrical-repair", "engine-diagnostics"],
} satisfies Omit<RepairService, "slug" | "name">;
