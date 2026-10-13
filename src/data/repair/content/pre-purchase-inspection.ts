import type { RepairService } from "../../types";

export default {
  title: "Used Car Inspection Help in Columbus",
  description:
    "Buying a used car in Columbus? We can tow or transport it to a mechanic for a pre-purchase inspection before you pay. (614) 633-8163.",
  h1: "Buying a Used Car? Get It to a Mechanic First",
  lede:
    "Before you hand over money for a used car, have a mechanic look it over. If it can't be driven, isn't registered or the seller won't drive it, we can carry it to the shop.",
  intro: [
    "A pre-purchase inspection is a mechanic's independent look at a used vehicle before you agree to buy it. A clean interior and a fresh wash can hide a lot: frame rust from years of Ohio salt, an engine seeping oil in several places, a transmission that shifts hard once it warms up, or evidence of a past wreck that never reached a history report. An inspection cannot promise a car is perfect, but it tells you what you are buying and gives you something concrete to negotiate with.",
    "Most inspections happen with the seller or buyer simply driving the car to the shop. Transport comes in when it can't legally or safely be driven: no plates or current registration, an expired temporary tag, a warning light the seller calls minor, a project car that has sat for months, or a private-sale car on the other side of town. It also helps when you would rather not put miles on a car you don't own yet, or the seller agrees to an inspection but won't drive it there.",
    "Auto Lyft USA does not inspect cars. With the owner's permission, we pick the vehicle up, carry it on a [flatbed](/towing/flatbed-towing) to the shop you choose or an independent partner shop that does inspections, and bring it back if you decide to pass. The shop reports its findings to you directly. If you buy, we can take the car home or to your own mechanic; [dealer and auction transport](/towing/dealer-auction-towing) covers moves between sellers and buyers.",
  ],
  jobs: [
    { title: "Road test", text: "Where the car can legally be driven, the technician checks how it starts, shifts, brakes and tracks, and listens for noises." },
    { title: "Lift inspection underneath", text: "Frame rails, floor pans, brake lines, exhaust and suspension are examined for rust, leaks and damage." },
    { title: "Computer scan and readiness check", text: "Stored and pending codes are read, and readiness monitors show whether codes were cleared recently to hide a problem." },
    { title: "Fluid condition review", text: "Oil, coolant, transmission and brake fluids are inspected for level, color and contamination." },
    { title: "Body and accident evidence", text: "Paint thickness, uneven panel gaps and overspray on trim can reveal earlier collision repairs." },
    { title: "Written findings", text: "You get notes on what was found and which items need attention now or later, with any repair estimates in writing." },
  ],
  signs: [
    "Seller hesitates when you ask for an independent inspection",
    "Check-engine light on, or codes that were just cleared",
    "Asking price well below similar cars for sale",
    "Fresh undercoating or paint over rust spots",
    "Mismatched tires or uneven tread wear",
    "Title history that doesn't match the seller's story",
    "Car that has sat unused for months",
  ],
  faqs: [
    {
      q: "Can you tow a car I haven't bought yet?",
      a: "Yes, as long as the current owner agrees and is there or arranges access. We pick up the car where it sits, deliver it to the inspection shop and, if you decide not to buy, return it to the seller. Agree in advance on who pays for the transport, and confirm the shop's appointment time so the car arrives when the technician is ready for it.",
    },
    {
      q: "Who usually pays for the inspection and the tow?",
      a: "That is between you and the seller. The buyer usually pays for the inspection, since the report is for their benefit. Some sellers split the cost or refund it if the car checks out and the sale goes through. Our towing charge comes from the published card on the [rates](/rates) page, and the shop sets its own inspection fee.",
    },
    {
      q: "Why not just drive the car to the shop?",
      a: "If the car is registered, insured and safe, driving it is fine. Towing makes sense when it has no valid plates, the brakes or tires look questionable, a warning light is on, or it has been parked so long you wouldn't trust it in traffic. Carrying it also avoids any argument over who is responsible if something breaks on the way.",
    },
    {
      q: "Will your driver check the car over at pickup?",
      a: "No. Our drivers photograph the vehicle's condition at pickup for the tow record, but they are not mechanics and don't evaluate cars for purchase. The inspection is done by the shop. If you want an opinion on condition, that comes from the technician who puts the car on a lift, and any repair numbers come from the shop's written estimate.",
    },
    {
      q: "What if the inspection turns up problems?",
      a: "You have options: walk away, negotiate a lower price, ask the seller to fix specific items, or buy anyway with a clear list of what needs work. The shop can give a written estimate for any repairs it recommends, which makes the negotiation easier. If you pass on the car, we can return it to the seller's address the same way it came.",
    },
    {
      q: "Can you bring the car home after I buy it?",
      a: "Yes. Once the sale is done and you have the title or a bill of sale, we can deliver the car to your house, your own mechanic or a storage spot. If it needs work before it can be driven, a shop is often the best first stop. The dispatcher quotes the move ahead of time so there are no surprises on delivery.",
    },
    {
      q: "Does an inspection guarantee the car is in good shape?",
      a: "No inspection can promise that. A technician sees what is visible and testable during one appointment, and some problems only show up later. What it does is cut down on surprises and catch the expensive issues that are already there: rust, leaks, stored codes and accident damage. For most used-car purchases, that is money well spent.",
    },
  ],
  related: ["engine-diagnostics", "suspension-steering", "brake-repair"],
} satisfies Omit<RepairService, "slug" | "name">;
