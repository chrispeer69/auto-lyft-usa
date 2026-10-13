import type { RepairService } from "../../types";

export default {
  title: "Tire and Alignment Help in Columbus",
  description:
    "Bent rim, no spare or a hard pull after a pothole? We tow the car to a Columbus tire and alignment shop on a flatbed. (614) 633-8163.",
  h1: "Shredded Tire or Bent Wheel? Get It to a Tire Shop",
  lede:
    "A spare can't fix a bent rim, two flats at once or a car pulling hard after a pothole. We carry it on the flatbed to a shop that handles tires and alignment.",
  intro: [
    "Tires and alignment are tied together. The alignment sets the angles at which each wheel meets the road, and when those angles drift, tires wear unevenly and the car wanders or pulls. Central Ohio potholes do plenty of that knocking-out each spring: one hard hit can bend a rim, bulge a sidewall, shift the toe setting or crack a suspension part. Balancing is a separate job, where small weights are added so each wheel spins smoothly at speed.",
    "Many tire problems are solved at the roadside with a spare, and our [flat tire change](/towing/flat-tire-change) service does exactly that. A tow is the better answer when there is no usable spare, when two tires are damaged, when the wheel itself is cracked or bent, or when lug nuts are seized or the locking-lug key is missing. A car that pulls sharply or shakes violently after a pothole strike may have suspension damage and should stay off the highway. Our guide to a [flat on the interstate](/guides/flat-tire-on-the-interstate) covers staying safe while you wait.",
    "We do not sell or mount tires. The flatbed delivers the car to your tire store, your usual mechanic or an independent partner that does tires and alignment. They check the damage and hand you a written estimate before doing anything, and you approve the work directly with them.",
  ],
  jobs: [
    { title: "Tire replacement", text: "Damaged tires are dismounted and replaced, ideally with a matching tire, and in sets on all-wheel-drive cars that are sensitive to tread differences." },
    { title: "Puncture repair", text: "A nail in the tread can often be fixed with a plug-patch from the inside; punctures in or near the sidewall usually cannot." },
    { title: "Wheel balancing", text: "Each wheel is spun on a balancer and weights are added so it rolls without vibration." },
    { title: "Four-wheel alignment", text: "Camber, caster and toe are measured and set to the manufacturer's range, and the steering wheel is centered." },
    { title: "Bent rim inspection", text: "Wheels are checked for bends and cracks; some can be straightened, others need replacing." },
    { title: "TPMS sensor service", text: "Tire pressure sensors are tested, replaced or relearned when the warning light refuses to go out." },
  ],
  signs: [
    "Car drifts left or right on a straight, flat road",
    "Steering wheel sits off-center while driving straight",
    "Inside or outside edge of a tire wearing faster than the rest",
    "Vibration that shows up at highway speed",
    "Bulge or bubble on a sidewall",
    "Tire pressure light that keeps coming back",
    "Visible bend or crack in a wheel after a pothole",
  ],
  faqs: [
    {
      q: "When does a flat tire need a tow instead of a spare?",
      a: "When the spare is missing, flat or damaged; when more than one tire is out; when the wheel is bent badly enough that a spare won't fix the handling; or when the lug nuts will not come off. Cars with run-flat tires and no spare often need a tow as well. Tell the dispatcher what you see, and they will send the right kind of help.",
    },
    {
      q: "Can a pothole really knock my alignment out?",
      a: "Yes. A deep pothole hits the wheel hard enough to shift adjustment points or bend tie rods and control arms. You may notice the steering wheel sitting crooked or the car drifting right after the hit. Getting the alignment checked early saves tires, because a bad setting can wear the inner edge bald in a few thousand miles.",
    },
    {
      q: "Can I drive on a bulging sidewall?",
      a: "A bulge means the cords inside the tire have broken, and the tire can blow out without warning. Mount the spare if you can do it safely, or have the car towed. Do not plan a highway drive to the tire store, especially in summer heat when pressures rise. A blowout at speed is far more dangerous than a flat in a parking lot.",
    },
    {
      q: "Do you change tires or do alignments?",
      a: "We put your spare on as a roadside service, which is a flat-rate call listed on our [rates](/rates) page. We do not sell tires, mount them on wheels or do alignments. For that work, we tow the car to a tire store, your mechanic or an independent partner shop, and that business handles the job and gives you a written estimate first.",
    },
    {
      q: "What will new tires and an alignment cost?",
      a: "Tire prices vary with size, brand and how many need replacing, and alignment charges depend on the shop and the vehicle. We don't quote any of that. The shop looks at the car and gives you its estimate in writing before it starts. Our charge covers only getting the car there, and the dispatcher tells you that amount up front.",
    },
    {
      q: "My car has no spare. What are my options?",
      a: "Lots of newer models ship with only a sealant-and-compressor kit in the trunk. The kit can seal a small tread puncture, but it will not help with a sidewall cut, a large gash or a blowout. In those cases the car needs to ride to a tire shop on a flatbed. Call the store first to confirm it has your size in stock, and we will deliver the car there.",
    },
    {
      q: "Can my car be towed with a shredded tire?",
      a: "Yes. The driver winches the car onto the flatbed, so a flat or even a tire torn off the rim does not stop it from being loaded. A badly bent wheel may roll unevenly, which just means loading slowly. Once it is on the deck and strapped down, the damaged wheel never touches the road again until the shop. Let the dispatcher know which corner is damaged and where the car is sitting.",
    },
  ],
  related: ["suspension-steering", "brake-repair", "scheduled-maintenance"],
} satisfies Omit<RepairService, "slug" | "name">;
