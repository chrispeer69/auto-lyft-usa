import type { RepairService } from "../../types";

export default {
  title: "Suspension and Steering Help, Columbus",
  description:
    "Loose steering, clunks or a wheel at an odd angle? We tow the car to a Columbus shop for suspension and steering work. (614) 633-8163.",
  h1: "Clunks, Pulls or Loose Steering? Get It Inspected",
  lede:
    "Worn struts, broken springs and failing tie rods change how a car handles. When the steering feels loose or a wheel sits at an odd angle, we tow it to a shop.",
  intro: [
    "Suspension and steering decide how well the tires grip the road and how the car answers the wheel. Springs carry the weight, shocks or struts control bounce, control arms and ball joints let each wheel travel up and down, and tie rods link the steering rack to the wheels. Rubber bushings cushion many of those connections. Rough pavement, potholes and rust wear them out, usually slowly enough that drivers get used to a little extra clunk or wander.",
    "Some failures are anything but slow. A worn ball joint can separate and let a wheel fold under the car. A broken coil spring can puncture a tire or drop a corner. A tie rod end that lets go means losing steering on that wheel. If the steering suddenly feels very loose, a wheel leans at a strange angle, the car sits low on one corner or you hear loud banging over bumps, stop and get it towed. Steering that turns heavy without warning often means the power assist has failed.",
    "Auto Lyft USA hauls the car; the repair belongs to a shop. We load it on a flatbed, using the winch if a wheel will not roll straight, and deliver it to your own mechanic or a partner garage that works on suspension and alignment. Nothing is repaired until the shop has inspected it and you have approved its written estimate. Suspension repairs are often followed by an alignment, which our [tire and alignment page](/repair/tires-alignment) covers.",
  ],
  jobs: [
    { title: "Strut and shock replacement", text: "Worn units are replaced, usually in pairs, so both sides of an axle handle bumps the same way." },
    { title: "Ball joints and control arms", text: "Loose joints and cracked arms or bushings are replaced to keep each wheel located where it belongs." },
    { title: "Tie rod replacement", text: "Inner and outer tie rods are checked for play and replaced if worn, followed by an alignment." },
    { title: "Spring replacement", text: "Broken or sagging coil springs are swapped, bringing ride height back to where it should be." },
    { title: "Power steering repair", text: "Leaking hoses, a noisy pump or a failing electric assist motor are diagnosed and repaired." },
    { title: "Wheel bearing replacement", text: "A growling bearing is replaced before it overheats or lets the wheel wobble." },
  ],
  signs: [
    "Clunk or knock over bumps or while turning",
    "Play in the steering wheel before the car responds",
    "Car wanders and needs constant correction",
    "One corner sitting lower than the others",
    "Front end dives hard when you brake",
    "Whine when turning the wheel, or suddenly heavy steering",
    "Humming that grows louder with speed or in turns",
    "Tires worn in scalloped patches",
  ],
  faqs: [
    {
      q: "Can a broken suspension part make the car unsafe to drive?",
      a: "Yes. Ball joints, tie rods and control arms keep each wheel attached and pointed where you steer. If one fails at speed, the wheel can turn on its own or collapse under the car. Worn shocks are less dramatic but lengthen stopping distances and make the car harder to control in a sudden swerve. If a part has visibly broken or the steering feels wrong, don't drive.",
    },
    {
      q: "What if a wheel is bent sideways after hitting a curb?",
      a: "A wheel at an odd angle often means a bent control arm, tie rod or spindle. Driving on it can tear the tire or make the damage worse. The car can still be loaded onto a flatbed: the driver winches it on slowly and secures it so the damaged corner isn't stressed during the trip. Describing the damage on the phone helps the driver plan the load.",
    },
    {
      q: "Does a clunking noise always mean something is about to break?",
      a: "Not always. Loose sway-bar links are a common and fairly harmless source of clunks. The same sound, though, can come from a worn ball joint or a failing strut mount, and there is no telling which from the driver's seat. A shop can lift the car, check each joint for play and tell you what is urgent and what can wait until your next visit.",
    },
    {
      q: "Do you do suspension repairs or alignments?",
      a: "No. Auto Lyft USA is a towing company; we don't repair or align vehicles. We get the car to a shop: a dealer, the mechanic you already use, or an independent partner. The shop inspects it, writes up an estimate and handles the work if you approve. Any agreement about the repair is between you and that shop.",
    },
    {
      q: "What will steering or suspension work cost?",
      a: "That depends on which parts are worn, the vehicle and the shop, so we don't quote it. The shop puts an estimate in writing before starting. For the tow itself, our charges are fixed on a published card, and the [rates](/rates) page shows the hook-up fee, per-mile charges and the few surcharges that can apply. The dispatcher confirms the total when you call.",
    },
    {
      q: "Why does my steering feel heavy all of a sudden?",
      a: "Sudden heavy steering usually means the power assist has quit. On hydraulic systems, a broken belt, a leaking hose or low fluid are common causes. On electric systems, a fault in the motor or its control module can switch the assist off and light a warning. You can still steer, but it takes far more effort, so get off the road and arrange a tow.",
    },
    {
      q: "Can the car go to a shop that also does alignments?",
      a: "Yes, and it is worth asking for. Most steering and suspension repairs change the wheel angles, so the car needs an alignment afterward. A shop that handles both can finish the job in one visit instead of sending you somewhere else. Tell the dispatcher which shop you want, or ask for an independent partner shop that does both kinds of work, and we will deliver the car there.",
    },
  ],
  related: ["tires-alignment", "brake-repair", "exhaust-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
