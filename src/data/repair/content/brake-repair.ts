import type { RepairService } from "../../types";

export default {
  title: "Brake Repair Help in Columbus, OH",
  description:
    "Grinding, a soft pedal or a brake light? We tow the car on a flatbed to your shop or a Columbus partner shop for brake work. (614) 633-8163.",
  h1: "Brakes Failing? We Tow the Car to a Brake Shop",
  lede:
    "Brakes that grind, pull or sink to the floor are not something to nurse across town. We carry the car on a flatbed to a shop that inspects and repairs braking systems.",
  intro: [
    "Every brake system turns pedal pressure into friction. Your foot pushes fluid through steel lines to calipers or wheel cylinders, which squeeze pads against rotors or shoes against drums. Wear happens gradually, and the warning noises are designed to get your attention: a high squeal from a wear indicator, then a harsh grind once the pad material is gone and metal meets metal. Leaks, seized calipers and corroded lines are less predictable, and road salt speeds up that corrosion every Ohio winter.",
    "Some brake problems leave you a margin; others leave none. A pedal that drops toward the floor, a red brake warning lamp, a fluid puddle near one wheel or a car that swerves hard when you slow down all mean stopping power is compromised. Driving that car to a garage puts you and everyone around you at risk, even if the shop is only a few miles away. This is exactly the situation where a tow is the sensible choice.",
    "We are a towing company, so we don't replace pads or bleed lines. We load the car onto a flatbed, where no wheel turns and no braking is needed on the way, and deliver it to the garage you already use or an independent partner garage. Whoever receives the car inspects the brakes and puts a price on paper before starting. The [repair shop towing](/towing/repair-shop-towing) page explains drop-offs, and if a locked caliper keeps the car from rolling, the driver can winch it onto the deck.",
  ],
  jobs: [
    { title: "Pad and shoe replacement", text: "Worn friction material is replaced, and the shop checks that the new pads seat evenly against the rotor surface." },
    { title: "Rotor and drum service", text: "Rotors are measured for thickness and runout, then resurfaced or replaced depending on condition. Drums get the same treatment." },
    { title: "Caliper repair", text: "A sticking or leaking caliper is rebuilt or swapped, and slide pins are cleaned and lubricated so the pads release fully." },
    { title: "Brake line and hose replacement", text: "Rusted steel lines and cracked rubber hoses are replaced, a common job on cars that have lived through several salted winters." },
    { title: "Fluid flush and bleeding", text: "Old, moisture-laden fluid is flushed and air is bled from the system so the pedal feels firm again." },
    { title: "ABS fault diagnosis", text: "When the ABS light stays on, wheel-speed sensors, wiring and the hydraulic unit are tested to locate the fault." },
  ],
  signs: [
    "Grinding or scraping when you press the pedal",
    "High-pitched squeal that comes and goes with braking",
    "Pedal that feels soft, spongy or slowly sinks",
    "Car pulls to one side as you slow down",
    "Steering wheel or pedal pulsing under braking",
    "Red brake light or amber ABS light on the dash",
    "Burning smell or smoke near one wheel after a drive",
    "Fluid streaks on the inside of a tire",
  ],
  faqs: [
    {
      q: "Can I drive to the shop if my brakes are grinding?",
      a: "Grinding usually means the pads are worn through and metal is cutting into the rotor. The car may still stop, but distances grow and rotor damage gets worse with every mile. Some drivers risk a short, slow trip on quiet streets; on I-70 or I-270 it makes little sense. If the pedal also feels soft or a warning lamp is lit, do not drive the car at all.",
    },
    {
      q: "Why carry the car on a flatbed for a brake problem?",
      a: "On a flatbed the car sits entirely on the deck, so the condition of its brakes, axles and transmission doesn't matter during the trip. That avoids dragging a locked caliper and keeps an all-wheel-drive system from being strained. A flatbed is our standard truck for repair tows, so this is how they normally go. The [flatbed towing](/towing/flatbed-towing) page has more detail.",
    },
    {
      q: "What if a brake is seized and the wheel won't turn?",
      a: "A seized caliper or a parking brake frozen in place can lock a wheel solid. The driver can usually winch the car slowly up the deck, and wheel dollies help when it has to be repositioned in a tight spot first. Mention the locked wheel up front; it changes how the driver approaches the load, and expect the loading to take a little longer than usual.",
    },
    {
      q: "Do you know what my brake job will cost?",
      a: "We do not price repairs. The shop inspects the system, measures pad and rotor wear and gives you a written estimate before doing any work. Brake jobs vary widely: one axle of pads is a very different job from new lines, calipers and an ABS module. You approve the work directly with the shop. The tow is priced separately from our published card on the [rates](/rates) page.",
    },
    {
      q: "Is a soft brake pedal an emergency?",
      a: "Treat it as one. A pedal that feels spongy, or sinks under steady pressure at a stoplight, usually points to air in the lines, a fluid leak or a failing master cylinder. Any of those can get worse without warning. Pull off somewhere safe, set the parking brake and call for a tow rather than trying to limp home or to the shop.",
    },
    {
      q: "Can the car go to a dealer instead of a partner shop?",
      a: "Yes. The destination is up to you: a dealer service department, your neighborhood mechanic or one of the independent partner shops we can suggest. We only need the shop's name and address. Partner shops are separate businesses with their own pricing and policies. If you change your mind before the car is loaded, just tell the driver.",
    },
    {
      q: "How does road salt affect brakes?",
      a: "Salt and slush coat brake lines, caliper brackets and rotor edges all winter, and over a few seasons that turns into rust. Steel lines can corrode until they leak, and rusted slide pins make calipers stick. Rinsing the underside after storms helps, and many drivers have the brakes checked each spring. A shop can tell you whether lines or hardware are getting thin before they fail.",
    },
  ],
  related: ["suspension-steering", "tires-alignment", "pre-purchase-inspection"],
} satisfies Omit<RepairService, "slug" | "name">;
