import {
  Battery,
  Car,
  CircleGauge,
  Cog,
  Disc3,
  Droplets,
  Fan,
  Gauge,
  type LucideIcon,
  ClipboardCheck,
  Settings2,
  Volume2,
  Wrench,
} from 'lucide-react';

/**
 * Auto Lyft USA tows; the repairs themselves are carried out by vetted partner
 * shops in each metro. These pages explain what each job involves and let
 * drivers arrange the tow and the repair in one call.
 */
export type RepairService = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  /** Symptoms that tell a driver this is their problem. */
  symptoms: string[];
  body: string[];
  /** Whether this problem usually means the vehicle should not be driven. */
  towRecommended: boolean;
};

export const REPAIR_SERVICES: RepairService[] = [
  {
    slug: 'engine-repair-diagnostics',
    title: 'Engine Repair & Diagnostics',
    icon: Cog,
    description:
      'Fault-code diagnosis and engine repair, from misfires and rough running to full mechanical failure.',
    symptoms: [
      'Check engine light on, flashing or steady',
      'Rough idle, misfiring or loss of power',
      'Knocking, ticking or grinding from the engine bay',
      'Smoke from the exhaust or a burning smell',
    ],
    body: [
      'A check engine light is a starting point, not a diagnosis. The stored code narrows the search, but confirming the actual fault takes live data and testing — the same code can come from a failed sensor, a vacuum leak or a genuine mechanical problem.',
      'A flashing check engine light is different from a steady one. Flashing means an active misfire that can destroy the catalytic converter within minutes of driving. Pull over and call for a tow rather than trying to reach the shop.',
    ],
    towRecommended: true,
  },
  {
    slug: 'brake-service-repair',
    title: 'Brake Service & Repair',
    icon: Disc3,
    description:
      'Pads, rotors, calipers, brake lines and fluid — inspection through to full replacement.',
    symptoms: [
      'Squealing, grinding or scraping when braking',
      'Soft, spongy or sinking brake pedal',
      'Vehicle pulls to one side when stopping',
      'Longer stopping distances or a vibrating pedal',
    ],
    body: [
      'Squealing usually means the wear indicator is doing its job and pads are due. Grinding means the pads are gone and metal is cutting into the rotor, which turns an inexpensive job into an expensive one.',
      'A pedal that sinks slowly to the floor points at a fluid leak or a failing master cylinder. That is not a drive-it-to-the-shop problem — brakes that are losing pressure can fail completely without warning.',
    ],
    towRecommended: true,
  },
  {
    slug: 'transmission-service',
    title: 'Transmission Service',
    icon: Settings2,
    description:
      'Fluid service, diagnosis and repair for automatic and manual transmissions.',
    symptoms: [
      'Slipping between gears or delayed engagement',
      'Harsh, jerking or unpredictable shifts',
      'Whining or humming that changes with speed',
      'Red fluid pooling under the vehicle',
    ],
    body: [
      'Transmission problems get worse quickly and expensively. Slipping means internal components are already wearing beyond specification, and continuing to drive accelerates that damage considerably.',
      'If the vehicle will not move, will not come out of park, or is leaking transmission fluid heavily, do not drive it. Towing costs far less than the additional damage that driving causes.',
    ],
    towRecommended: true,
  },
  {
    slug: 'electrical-systems',
    title: 'Electrical Systems',
    icon: Battery,
    description:
      'Batteries, alternators, starters, wiring faults and parasitic draws diagnosed properly.',
    symptoms: [
      'Vehicle will not start or only clicks',
      'Battery keeps going flat overnight',
      'Dimming lights or flickering dashboard',
      'Electrical accessories behaving erratically',
    ],
    body: [
      'A battery that dies repeatedly is rarely just a bad battery. It is usually a failing alternator that is not recharging it, or a parasitic draw — something staying powered after the vehicle is switched off and slowly draining the battery overnight.',
      'Finding a parasitic draw means measuring current on each circuit in turn. It is methodical work, but it is the difference between fixing the problem and buying a new battery every six months.',
    ],
    towRecommended: false,
  },
  {
    slug: 'heating-and-air-conditioning',
    title: 'Heating & Air Conditioning',
    icon: Fan,
    description:
      'A/C recharge and leak detection, heater cores, blower motors and climate control faults.',
    symptoms: [
      'Air conditioning blows warm',
      'No heat, or heat only when moving',
      'Sweet smell inside or fogging windows',
      'Blower works on some speeds only',
    ],
    body: [
      'Air conditioning that has gradually lost its cool almost always has a leak. Simply recharging it puts refrigerant into a system that will lose it again, so the leak needs finding first with dye or an electronic detector.',
      'A sweet smell and fogged windows point at a leaking heater core. That leaks coolant into the cabin, and ignoring it risks overheating the engine as the coolant level drops.',
    ],
    towRecommended: false,
  },
  {
    slug: 'engine-tune-ups',
    title: 'Engine Tune-Ups',
    icon: Gauge,
    description:
      'Spark plugs, ignition coils, filters and the maintenance that restores lost performance.',
    symptoms: [
      'Noticeably worse fuel economy',
      'Hesitation or stumbling under acceleration',
      'Hard starting, especially when cold',
      'Rough idle at a stop',
    ],
    body: [
      'Modern spark plugs last far longer than they used to, but they do wear out, and worn plugs make the ignition coils work harder until the coils fail too. Replacing plugs on schedule is considerably cheaper than replacing coils.',
      'A tune-up is also the point at which air and fuel filters get changed. A blocked air filter alone can measurably cost you fuel economy.',
    ],
    towRecommended: false,
  },
  {
    slug: 'tire-service-and-alignment',
    title: 'Tire Service & Alignment',
    icon: CircleGauge,
    description:
      'Mounting, balancing, rotation, puncture repair and four-wheel alignment.',
    symptoms: [
      'Vehicle pulls to one side on a straight road',
      'Uneven or rapid tire wear',
      'Steering wheel off-centre when driving straight',
      'Vibration through the wheel at speed',
    ],
    body: [
      'Ohio potholes knock alignment out regularly, and misalignment quietly destroys tires — a set can be worn out thousands of miles early by a problem that costs far less to correct.',
      'Vibration that appears around 50 to 60 mph is usually a balance issue rather than alignment. The two get confused often, and they are different jobs.',
    ],
    towRecommended: false,
  },
  {
    slug: 'oil-change-and-lube',
    title: 'Oil Change & Lube',
    icon: Droplets,
    description:
      'Conventional, synthetic blend and full synthetic oil changes with filter and fluid checks.',
    symptoms: [
      'Oil life monitor or service light showing',
      'Oil dark, gritty or below the minimum mark',
      'Ticking from the top of the engine on start-up',
      'Overdue by time or mileage',
    ],
    body: [
      'Follow the interval in your owner manual rather than the old three-thousand-mile rule. Most modern engines on full synthetic run considerably longer between changes, and many vehicles calculate the interval for you.',
      'Ticking on start-up that fades after a few seconds often means oil is draining back and not being held where it should be. Get the level and condition checked before it becomes a bearing problem.',
    ],
    towRecommended: false,
  },
  {
    slug: 'state-inspections',
    title: 'Inspections & Emissions',
    icon: ClipboardCheck,
    description:
      'E-Check emissions testing support and pre-purchase inspections.',
    symptoms: [
      'E-Check due in a participating county',
      'Failed emissions and need the underlying fault fixed',
      'Buying a used vehicle and want it checked first',
      'Check engine light preventing a pass',
    ],
    body: [
      'Ohio E-Check applies in the Cleveland-Akron and Dayton-Springfield areas rather than statewide, so requirements depend on where the vehicle is registered. A check engine light is an automatic fail regardless.',
      'A pre-purchase inspection on a used vehicle is the cheapest money in motoring. An hour on a lift routinely finds frame damage, hidden rust or a pending repair that changes the price entirely.',
    ],
    towRecommended: false,
  },
  {
    slug: 'exhaust-and-muffler',
    title: 'Exhaust & Muffler',
    icon: Volume2,
    description:
      'Mufflers, pipes, catalytic converters and exhaust leak repair.',
    symptoms: [
      'Noticeably louder engine or a droning note',
      'Rattling from underneath the vehicle',
      'Exhaust fumes noticeable inside the cabin',
      'Failed emissions test',
    ],
    body: [
      'Ohio winters and road salt are hard on exhaust systems, and most of the exhaust work we see is corrosion rather than mechanical failure.',
      'Exhaust fumes inside the cabin are genuinely dangerous — carbon monoxide has no smell of its own. If you suspect a leak into the cabin, drive with the windows open and get it looked at immediately.',
    ],
    towRecommended: false,
  },
  {
    slug: 'suspension-and-steering',
    title: 'Suspension & Steering',
    icon: Car,
    description:
      'Shocks, struts, springs, control arms, ball joints and steering components.',
    symptoms: [
      'Bouncing or floating over bumps',
      'Clunking over rough surfaces',
      'Vehicle leaning or sitting unevenly',
      'Loose, vague or heavy steering',
    ],
    body: [
      'Worn shocks and struts do more than make the ride uncomfortable. They let the tires lose contact with the road surface, which lengthens braking distances and hurts stability in an emergency manoeuvre.',
      'Clunking over bumps usually means worn bushings, ball joints or sway bar links. Ball joints in particular should not be left — a failed one can separate the wheel from the steering assembly.',
    ],
    towRecommended: true,
  },
  {
    slug: 'preventive-maintenance',
    title: 'Preventive Maintenance',
    icon: Wrench,
    description:
      'Scheduled servicing that keeps the vehicle reliable and prevents the breakdown call.',
    symptoms: [
      'Approaching a manufacturer service interval',
      'High mileage with unknown service history',
      'Preparing for winter or a long trip',
      'Fleet vehicles on a maintenance schedule',
    ],
    body: [
      'We tow a lot of vehicles that failed in ways a scheduled service would have caught — a belt, a hose, a battery already reading badly at the last visit. Preventive maintenance is dull and it works.',
      'Before an Ohio winter, the items worth checking are the battery, the coolant mix, the tires and the wipers. Those four account for most of what we see on the coldest nights of the year.',
    ],
    towRecommended: false,
  },
];

export const getRepairService = (slug: string) =>
  REPAIR_SERVICES.find((s) => s.slug === slug);
