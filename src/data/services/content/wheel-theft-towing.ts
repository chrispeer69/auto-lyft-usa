import type { Service } from "../../types";
import { RATES, usd } from "../../rates";

/*
  Wheel theft towing (owner request 2026-10-28). Two owner-confirmed routes:
  1. We buy wheels and tires that fit and mount them where the vehicle is
     parked. Quoted per job, approved before anything is ordered. No price.
  2. GUNI Wheels on the bare hubs, flatbed to the destination, GUNI Wheels
     removed there. Rate card tow lines + RATES.guniWheelPerWheel per wheel.
  Damaged hub/stud: dolly or skate under that corner. Never dragged.

  GUNI product facts (Zip's AW Direct, zips.com/guniwheel and
  zips.com/shop-by-brand/guniwheel, checked 2026-10-28): temporary wheel for
  missing/damaged wheels; solid injection-molded polyurethane tire (no air, no
  dry rot); lug-nut mount; 45/45S = 4- and 5-lug cars and light SUVs; 56 = 5-
  and 6-lug light pickups, trucks and large SUVs; 5 mph max, not for road use,
  speed ribs vibrate at the limit. Do NOT add load ratings or 8-lug trucks.
*/

// Worked example, computed from the rate card so it never drifts from it.
const EX_ENROUTE = 7;
const EX_LOADED = 10;
const EX_WHEELS = 4;
const EX_TOTAL =
  EX_ENROUTE * RATES.enroutePerMile + RATES.hookup + EX_LOADED * RATES.loadedPerMile + EX_WHEELS * RATES.guniWheelPerWheel;

export default {
  keyword: "wheels stolen",
  title: "Wheels Stolen? Columbus Car & Truck Help",
  description:
    "Car or pickup left on bare hubs after a wheel theft in Columbus? We mount new wheels on site or flatbed it on GUNI Wheels. Call (614) 633-8163.",
  h1: "Wheels Stolen Overnight? Getting Your Car or Pickup Moving Again",
  lede:
    "Two ways out of a wheel theft: new wheels and tires mounted in your driveway or lot, or temporary GUNI Wheels and a ride on our flatbed to the shop you pick.",
  intro: [
    "Finding your wheels stolen is a gut punch, and the vehicle is usually left in an awkward state: perched on a floor jack, stacked on bricks or resting on its brake rotors in a driveway or apartment lot. A car in that condition cannot roll, and hauling it onto a truck by force bends control arms, grinds rotors and rips off plastic underbody panels. Auto Lyft USA takes these calls for cars, crossovers, SUVs and light pickups across Columbus, 24-7, and nothing gets dragged.",
    "You get a choice. One route ends with the vehicle back on real wheels and tires that you can drive away on. The other uses GUNI Wheels, temporary bolt-on wheels made for towing crews, so the vehicle can roll up the deck of a [flatbed](/towing/flatbed-towing) and roll back down wherever you want it delivered. The dispatcher talks you through both before anyone is sent.",
    "One thing we are not is a repair shop. If the thieves nicked a brake line, a wheel-speed sensor or a suspension part while they worked, we deliver the vehicle to your mechanic or to an independent shop we work with, and that shop inspects it and quotes the fix. Call (614) 633-8163 to get started.",
  ],
  situations: [
    { title: "Driveway theft found at dawn", text: "Most wheel thefts happen in the small hours and are noticed when someone heads out to work. The car is often tilted on whatever the thieves shoved under it." },
    { title: "Apartment and condo lots", text: "Big lots full of similar vehicles and quiet after midnight draw this kind of theft. If the car has to clear a fire lane or a reserved space, we coordinate with the property office." },
    { title: "Days in a commuter or side-street spot", text: "A vehicle left for a while in a park-and-ride, an off-site airport lot or on a side street can come back stripped. Give us the row, level or nearest address so the driver finds it fast." },
    { title: "Only one or two corners taken", text: "Thieves who get interrupted may take just the front pair or a single wheel. The GUNI Wheel charge is counted per missing wheel, so a partial theft costs less than a full set." },
    { title: "Pickups and SUVs with upgraded wheels", text: "Aftermarket rims on light pickups and large SUVs attract attention. A larger GUNI Wheel model is made for 5- and 6-lug light-truck hubs; tell us the year, make and model so the right size comes along." },
    { title: "Body down on the pavement", text: "When a jack slips or the blocks get pulled, the vehicle can end up lying on the ground. Our driver raises it safely before mounting anything on the hubs." },
  ],
  method: [
    { title: "Take the details by phone", text: "The dispatcher notes where the vehicle is, what it is (year, make, model) and the number of bare hubs, confirms the destination, and quotes the job." },
    { title: "Raise it and check each bare corner", text: "On arrival the driver lifts the vehicle off whatever it is resting on and inspects every hub, stud and bolt hole before fitting anything." },
    { title: "Fit the GUNI Wheels", text: "Each bare hub gets a GUNI Wheel, fastened with lug nuts the way a normal wheel would be. A corner with broken studs or a bent hub gets a dolly or skate under it instead." },
    { title: "Winch aboard, strap and deliver", text: "The vehicle rolls up the deck on the winch line, gets strapped down and rides the entire trip on the flatbed. At the drop-off it rolls down, and the driver unbolts the GUNI Wheels before leaving." },
  ],
  sections: [
    {
      heading: "Drive away or ride the deck: choosing your route",
      paragraphs: [
        "Drive away: We can purchase a set of wheels and tires sized for your vehicle and mount them on location, in your driveway, a parking garage or a company lot. Wheel and tire sizes and prices vary a lot from one vehicle to the next, so this route is quoted per job. The dispatcher prices the parts and the labor, and nothing is ordered until you approve that number.",
        "Ride the deck: If you would rather have a tire shop, dealer or body shop take over, or you want the vehicle checked for damage the thieves caused, we bolt GUNI Wheels to the bare hubs, load it on a flatbed and bring it to the address you give us. The GUNI Wheels come off once it arrives, so the shop receives a vehicle ready for its own wheels.",
        "Not sure which suits you? Matching the correct wheel and tire size can take some time, so when a car needs to leave a lot today, the flatbed route is often the quicker one. Your insurer's answer may also steer the choice.",
      ],
    },
    {
      heading: "About GUNI Wheels, and why the car still rides on the deck",
      paragraphs: [
        "GUNI Wheels are sold by Zip's AW Direct as a stand-in for a wheel that is missing or damaged, and tow operators use them to get stolen-wheel vehicles onto a flatbed. The tire is injection-molded solid polyurethane, so there is nothing to inflate and nothing to dry-rot between jobs, and the wheel fastens to the hub with lug nuts.",
        "Think of them as a loading tool rather than a spare. The maker limits them to 5 mph, says they are not meant for road use, and molds speed ribs into the tread that start to vibrate when the vehicle reaches that limit. The GUNI Wheels carry the vehicle up the ramp and back down again; every mile in between is on our deck.",
        "GUNI is a trademark that belongs to its owner. We name it only to describe the equipment used on these jobs, and Auto Lyft USA has no affiliation with, or endorsement from, the maker or seller.",
      ],
      bullets: [
        "GUNI Wheel 45 and 45S: made for 4-lug and 5-lug hubs on cars and light SUVs.",
        "GUNI Wheel 56: sized for light pickups, trucks and large SUVs running 5-lug or 6-lug hubs.",
        "Unsure what hub your vehicle has? The year, make and model are enough for the dispatcher to work it out.",
      ],
    },
    {
      heading: "Pricing a bare-hub tow, with an example",
      paragraphs: [
        `The flatbed route is billed from our regular [rate card](/rates) plus one added line: ${usd(RATES.enroutePerMile)} for each mile our truck drives from the yard to reach it, a ${usd(RATES.hookup)} hook-up, ${usd(RATES.loadedPerMile)} for each mile it rides loaded, and ${usd(RATES.guniWheelPerWheel)} for every wheel that needs a GUNI Wheel fitted at pickup and removed at drop-off. The drive-away route has no published price because the parts differ for every vehicle; you approve that quote before anything is bought.`,
        `Here is how the flatbed route adds up for a sedan missing all ${EX_WHEELS} wheels in a lot ${EX_ENROUTE} miles from the yard, hauled ${EX_LOADED} miles to a tire dealer on a weekday afternoon:`,
      ],
      bullets: [
        `En-route: ${EX_ENROUTE} miles × ${usd(RATES.enroutePerMile)} = ${usd(EX_ENROUTE * RATES.enroutePerMile)}`,
        `Hook-up: ${usd(RATES.hookup)}`,
        `Loaded: ${EX_LOADED} miles × ${usd(RATES.loadedPerMile)} = ${usd(EX_LOADED * RATES.loadedPerMile)}`,
        `GUNI Wheels: ${EX_WHEELS} × ${usd(RATES.guniWheelPerWheel)} = ${usd(EX_WHEELS * RATES.guniWheelPerWheel)}`,
        `Subtotal: ${usd(EX_TOTAL)}, before Ohio sales tax for the pickup county. Night, weekend or interstate surcharges are added only when they apply, and the dispatcher quotes your real total first.`,
      ],
    },
    {
      heading: "Before our truck pulls up: a short checklist",
      paragraphs: ["A few minutes spent on the right steps protects you, your claim and the vehicle."],
      bullets: [
        "Leave the vehicle exactly where it is. Rolling or pulling it on bare rotors only adds damage.",
        "Keep yourself, kids and pets away from it while it is propped on a jack, bricks or wood blocks. Those can shift without warning.",
        "Photograph all four sides, each empty hub and anything the thieves left lying nearby.",
        "File a police report and write down the report number; your insurer will want it.",
        "Phone your insurance company and ask what the policy covers before buying anything.",
        "Call (614) 633-8163 with the exact address or spot ready, along with the vehicle's year, make and model and a count of the missing wheels.",
      ],
    },
    {
      heading: "When a hub or stud can't take a wheel",
      paragraphs: [
        "Thieves in a hurry snap studs, strip threads, crack lug bolts or let the car drop hard onto one corner. A GUNI Wheel needs sound studs or bolt holes to mount safely, so the driver checks each corner first. Any corner that fails that check gets a wheel dolly or a skate under it instead, and the vehicle still loads without scraping across the ground.",
        "Mention it on the call if you can see broken studs, a car lying on the pavement or a jack leaning at an angle. That way the first truck shows up with what the job needs.",
      ],
    },
  ],
  faqs: [
    { q: "My wheels were stolen overnight. Who do I call first?", a: "The police, so the theft is on record and you have a report number. Next your insurance company, then us at (614) 633-8163. Leave the vehicle as it is until our driver arrives." },
    { q: "How do you move a vehicle that has no wheels at all?", a: "Temporary GUNI Wheels bolt onto the bare hubs with lug nuts, so the vehicle can roll onto our flatbed on the winch line. It rides the trip on the deck, and the temporary wheels are removed at the destination. A corner that can't take one gets a dolly or skate." },
    { q: "Is a GUNI Wheel the same thing as a spare tire?", a: "No. A compact spare is built to be driven a short distance. A GUNI Wheel is a towing tool with a solid polyurethane tire, limited to 5 mph and not meant for public roads, so its only job is getting the vehicle on and off the truck." },
    { q: "What does the per-wheel GUNI charge cover?", a: `It is ${usd(RATES.guniWheelPerWheel)} per wheel for fitting a GUNI Wheel at pickup and unbolting it at the destination. Only corners that need one are counted, so a car missing two wheels carries two of these charges, not four.` },
    { q: "What will the whole tow cost me?", a: `The tow lines match any flatbed job: ${usd(RATES.enroutePerMile)} a mile for the drive to you, ${usd(RATES.hookup)} to load it, then ${usd(RATES.loadedPerMile)} a mile on the deck. Each GUNI Wheel adds ${usd(RATES.guniWheelPerWheel)}. The dispatcher plugs in your actual miles and quotes the total before a truck heads out. The [rates page](/rates) lists every surcharge.` },
    { q: "Can you just put new wheels and tires on so I can drive it?", a: "Yes. We can track down correctly sized wheels and tires and install them at your home or in the lot holding the vehicle. Because sizes and prices differ so much, that work is quoted per job, and we order nothing until you approve it." },
    { q: "Do you handle pickups and large SUVs?", a: "Yes, light pickups and large SUVs. GUNI Wheel 56 is made for their 5- and 6-lug hubs. Share the year, make and model on the call and the driver arrives with the right size." },
    { q: "Does car insurance cover wheel theft and the tow?", a: "Theft is usually handled under comprehensive coverage if you carry it, but only your insurer can say what your policy pays. Call them before buying wheels or booking the tow, keep the police report number handy, and ask us for an itemized receipt to send with the claim." },
    { q: "Can you fix brakes or sensors the thieves damaged?", a: "No. Auto Lyft USA is not a repair shop. We deliver the vehicle to your mechanic or suggest an independent shop that diagnoses and quotes the work, and you decide from there. Our [repair shop towing](/towing/repair-shop-towing) page explains that hand-off." },
    { q: "Can you hold the car if the tire shop is closed?", a: `Yes. It can wait at our Harrisburg Pike yard at ${usd(RATES.storagePerDay)} per day and go over once the shop opens. The GUNI Wheels stay on until that final delivery so it can roll off the deck there.` },
    { q: "Should I leave the car on the thieves' jack until you arrive?", a: "Leave it as you found it and stay clear of it. Our driver raises it properly with our own equipment before anything is mounted. Don't crawl under it or try to swap out the blocks yourself." },
  ],
  related: ["flatbed-towing", "flat-tire-change", "repair-shop-towing", "car-towing"],
} satisfies Omit<Service, "slug" | "name" | "group" | "blurb">;
