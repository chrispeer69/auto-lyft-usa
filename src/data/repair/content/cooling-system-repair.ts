import type { RepairService } from "../../types";

export default {
  title: "Overheating Car Repair Help, Columbus",
  description:
    "Engine overheating in Columbus? Shut it off, and we will flatbed the car to a shop that fixes radiators, pumps and thermostats. (614) 633-8163.",
  h1: "Engine Overheating? Get It to a Cooling-System Shop",
  lede:
    "A temperature gauge in the red means stop driving now. One of our flatbeds carries the car to a shop that can find the leak, pump or thermostat behind it.",
  intro: [
    "An engine makes far more heat than it can use, and the cooling system's job is to carry the surplus away. A water pump pushes coolant through passages in the block and head, a thermostat decides when that coolant heads to the radiator, and a fan pulls air through the radiator when the car is moving slowly. Hoses and a pressurized cap hold it all together. When any link fails, whether a split hose, a stuck thermostat, a dead fan or a worn pump, the temperature can climb within minutes.",
    "Overheating is one of the clearest cases for towing instead of driving. Running an engine hot can warp the cylinder head, blow the head gasket and in the worst case seize it. If the gauge heads toward red, steam rolls from under the hood or a warning light comes on, pull over, shut the engine off and let it cool. Never open a hot radiator cap, because pressurized coolant can scald. Our step-by-step guide to [an overheating car](/guides/car-overheating-what-to-do) covers what to do on the shoulder.",
    "From there, we handle the transport, not the repair. One of our flatbeds hauls the car to the shop you name or to an independent partner shop that works on cooling systems. The technician pressure-tests the system, finds the failed part and then calls you with a written estimate for your approval. If you are stopped on the interstate, our [emergency towing](/towing/emergency-towing) page explains how a roadside pickup goes.",
  ],
  jobs: [
    { title: "Pressure test", text: "The cold system is pressurized to reveal leaks at hoses, the radiator, the water pump or the heater core." },
    { title: "Thermostat replacement", text: "A thermostat stuck closed blocks flow to the radiator; stuck open, it keeps the engine too cool. Either way it gets replaced." },
    { title: "Water pump replacement", text: "A weeping seal, a wobbly pulley or a broken impeller calls for a new pump, often done with the timing belt on engines where the two share space." },
    { title: "Radiator and hose repair", text: "Cracked plastic end tanks, clogged cores and soft or swollen hoses are replaced." },
    { title: "Cooling fan diagnosis", text: "Electric fans, relays and temperature sensors are tested so the fan actually runs while the car idles in traffic." },
    { title: "Head gasket testing", text: "After a serious overheat, a combustion-leak test checks whether exhaust gases are getting into the coolant." },
    { title: "Coolant flush and bleed", text: "Old coolant is drained, the type the manufacturer specifies goes in, and trapped air is bled out." },
  ],
  signs: [
    "Temperature gauge climbing past the middle",
    "Steam or white vapor rising from under the hood",
    "Bright green, orange or pink puddle under the front of the car",
    "Coolant reservoir low again soon after filling",
    "Heater suddenly blowing cold air",
    "Sweet smell after the engine is shut off",
    "White, sweet-smelling smoke from the tailpipe",
    "Cooling fan that never comes on at idle",
  ],
  faqs: [
    {
      q: "How far can I drive an overheating car?",
      a: "Ideally, no farther than the nearest safe place to stop. Once the gauge is in the red, metal parts are expanding past their design limits and damage can happen over a short distance. Turning the heater on full may buy a minute to get off the road, but it is not a fix. Shut the engine off, let it cool and call for a tow.",
    },
    {
      q: "Can I just add water and keep going?",
      a: "In a real emergency, adding water to a cooled engine can get you off a dangerous stretch of road. It does not fix whatever let the coolant escape, and plain water lacks the freeze and corrosion protection an Ohio winter demands. If coolant disappeared once, it will disappear again. Treat a top-off as a way to reach safety, then have the car towed to a shop.",
    },
    {
      q: "Does towing really prevent more damage?",
      a: "Yes. On a flatbed the engine stays off for the whole trip, so no more heat builds and nothing else gets stressed. Driving a car that has already overheated, even a few miles to the shop, can turn a hose replacement into a head gasket job. The tow costs a known amount from our rate card; a damaged engine does not come with a known price.",
    },
    {
      q: "Do you fix radiators or water pumps?",
      a: "We don't. Auto Lyft USA is a towing company with four flatbeds and no repair bays. We deliver the car to the shop of your choice or an independent partner shop, and that shop diagnoses the problem, writes up the estimate and handles the work. You deal with the shop directly about the repair and any terms that come with it.",
    },
    {
      q: "What does it cost to fix an overheating problem?",
      a: "It depends on the cause, which can be anything from a loose hose clamp to a cracked cylinder head. Repair pricing is the shop's call, not ours. After looking the car over, the technician sends you an estimate in writing, and work waits for your go-ahead. The tow is priced from our published card, shown on the [rates](/rates) page, and you hear the full towing figure on the phone before a truck rolls.",
    },
    {
      q: "Why does my car overheat only in traffic?",
      a: "At highway speed, air rushes through the radiator on its own. In stop-and-go traffic the electric cooling fan has to do that work. If the gauge rises only when you are crawling and drops once you are moving again, a fan, fan relay or temperature sensor is a likely suspect. Low coolant can produce the same pattern, so a shop checks both.",
    },
    {
      q: "Is it normal for coolant to go down a little?",
      a: "A tiny change over months can be evaporation, but a sealed cooling system should hold its level. Needing to top off every week or two means a leak somewhere, either external or internal. Small leaks grow, and an internal one can contaminate the engine oil. Have a shop pressure-test the system before it becomes an overheat on the highway.",
    },
  ],
  related: ["ac-heating-repair", "engine-diagnostics", "scheduled-maintenance"],
} satisfies Omit<RepairService, "slug" | "name">;
