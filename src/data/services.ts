import {
  AlertTriangle,
  Banknote,
  Battery,
  Building2,
  Car,
  Fuel,
  Gavel,
  Key,
  LifeBuoy,
  type LucideIcon,
  Package,
  Route,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  Wrench,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  /** Short label for nav and cards. */
  short: string;
  icon: LucideIcon;
  /** One line, used on cards and in meta descriptions. */
  description: string;
  /** Bullets shown on the service card. */
  features: string[];
  /** Longer copy for the dedicated service page. */
  body: string[];
  /** "What to do while you wait" style guidance. */
  whatToExpect: string[];
  faqs: { q: string; a: string }[];
  /** Show this service in the 9-card grid on the homepage. */
  featured: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: 'emergency-towing',
    title: 'Emergency Towing',
    short: 'Emergency Towing',
    icon: Truck,
    description:
      'Fast, professional towing for all vehicle types. From compact cars to heavy-duty trucks, our fleet handles it all.',
    features: ['Light & Heavy Duty', 'Flatbed Available', 'Secure Transport'],
    body: [
      'An emergency tow is the call we handle most, and the one where minutes matter most. When you are on the shoulder of I-70, I-75 or I-275, every passing truck is a risk, so we treat highway calls as our highest priority and dispatch the closest available truck rather than the next one in the queue.',
      'We tow everything from compact cars to fully loaded box trucks. When you call, the dispatcher will ask what you drive, whether the wheels turn freely and where exactly you are — that determines whether we send a flatbed, a wheel-lift unit or a heavy-duty wrecker, and it saves a second trip.',
      'We operate across the Columbus, Dayton and Cincinnati metros 24 hours a day, every day of the year, including holidays.',
    ],
    whatToExpect: [
      'Pull as far onto the shoulder as you safely can and turn on your hazard lights.',
      'If traffic is heavy and it is safe to do so, exit through the passenger side and wait behind the guardrail — not in the vehicle.',
      'Have your location ready: nearest mile marker, exit number or cross street.',
      'Tell dispatch if the vehicle is all-wheel drive, lowered, or will not shift out of park.',
    ],
    faqs: [
      {
        q: 'How fast can you get to me?',
        a: 'Our average response across the three metros is about 15 minutes. Dense areas like downtown Cincinnati or Upper Arlington are usually faster; rural Licking or Greene County can take 25 to 35 minutes.',
      },
      {
        q: 'Can you tow my car if it will not shift into neutral?',
        a: 'Yes. A locked transmission or a seized wheel means we bring a flatbed and use dollies or a winch. Tell dispatch when you call so the right truck is sent the first time.',
      },
      {
        q: 'Will you tow to any repair shop I choose?',
        a: 'Yes. We will take your vehicle to the shop, dealership or address you specify. If you have no preference we can suggest a shop in our repair partner network.',
      },
    ],
    featured: true,
  },
  {
    slug: 'flatbed-towing',
    title: 'Flatbed Towing',
    short: 'Flatbed Towing',
    icon: Truck,
    description:
      'Full-platform transport that keeps all four wheels off the road — the safest option for AWD, lowered and luxury vehicles.',
    features: ['All Four Wheels Off Road', 'AWD & 4WD Safe', 'Low-Clearance Loading'],
    body: [
      'A flatbed carries your vehicle on a level platform instead of dragging two wheels along the pavement. For all-wheel-drive vehicles that is not a preference, it is a requirement — towing an AWD car with two wheels down can destroy the transfer case and centre differential.',
      'We also default to flatbed for lowered vehicles, classic cars, luxury vehicles and anything with expensive bodywork. Our beds tilt to a shallow angle and we use approach ramps so a low front bumper clears without scraping.',
      'If you are unsure whether your vehicle needs a flatbed, tell dispatch the year, make and model and we will make the call for you.',
    ],
    whatToExpect: [
      'The driver will confirm the vehicle is in neutral or use dollies if it is not.',
      'Loading a low vehicle takes a few extra minutes — that is deliberate, not delay.',
      'The vehicle is secured at four points before the truck moves.',
      'You can usually ride along in the cab for local tows.',
    ],
    faqs: [
      {
        q: 'Why does my AWD car need a flatbed?',
        a: 'In an all-wheel-drive system the front and rear axles are mechanically linked. Turning one pair of wheels while the other stays still forces the differential and can cause expensive damage within a few miles.',
      },
      {
        q: 'Is flatbed towing more expensive?',
        a: 'It can be slightly more than a basic wheel-lift tow, but it is far cheaper than a drivetrain repair. For AWD and low-clearance vehicles we consider it the only responsible option.',
      },
    ],
    featured: false,
  },
  {
    slug: 'wheel-lift-towing',
    title: 'Wheel Lift Towing',
    short: 'Wheel Lift Towing',
    icon: Truck,
    description:
      'Compact towing for tight spaces where a full flatbed cannot manoeuvre — parking decks, alleys and packed lots.',
    features: ['Tight-Space Access', 'Fast Hook-Up', 'Front or Rear Lift'],
    body: [
      'A wheel-lift truck cradles the drive wheels and lifts them clear while the other two roll. It is quicker to hook up than a flatbed and, more importantly, it fits places a flatbed simply cannot — narrow alleys, packed apartment lots and parking structures with tight turning radii.',
      'We use wheel-lift equipment for front-wheel-drive and rear-wheel-drive vehicles where the drivetrain allows it, and where the distance is short. For long-distance moves or AWD vehicles we switch to a flatbed.',
      'This is our standard equipment for downtown Cincinnati, Over-the-Rhine and older Columbus neighborhoods where street width is the limiting factor.',
    ],
    whatToExpect: [
      'Hook-up is typically under five minutes once the truck arrives.',
      'The driver will check your drivetrain before deciding which end to lift.',
      'If the vehicle turns out to need a flatbed, we will tell you before loading.',
    ],
    faqs: [
      {
        q: 'Is wheel-lift towing safe for my car?',
        a: 'For front-wheel-drive and rear-wheel-drive vehicles over short distances, yes — the driven wheels are lifted clear. For AWD or 4WD we use a flatbed or dollies instead.',
      },
    ],
    featured: false,
  },
  {
    slug: 'roadside-assistance',
    title: 'Roadside Assistance',
    short: 'Roadside Assistance',
    icon: LifeBuoy,
    description:
      'On-the-spot help that gets you moving again without a tow — jump starts, tire changes, fuel and lockouts.',
    features: ['No Tow Needed', 'Mobile Service', '24/7 Dispatch'],
    body: [
      'Most roadside calls do not need a tow at all. A jump start, a spare fitted, a few gallons of fuel or a door opened will get the majority of drivers back on the road in under twenty minutes, and it costs a fraction of what a tow does.',
      'Our trucks carry jump packs, fuel cans, tire tools and lockout kits as standard, so the driver who arrives can usually solve the problem on the spot rather than calling for a second vehicle.',
      'If the fix does not hold — a battery that will not take a charge, a tire with sidewall damage — we can tow from the same visit without you waiting for another dispatch.',
    ],
    whatToExpect: [
      'Describe the symptoms accurately so we bring the right kit.',
      'Stay with the vehicle if it is safe; the driver may need your keys.',
      'If we cannot fix it roadside, we will quote the tow before doing it.',
    ],
    faqs: [
      {
        q: 'Do you charge more if the roadside fix does not work?',
        a: 'You pay for the service performed. If we then need to tow, the tow is quoted separately and you approve it before we load.',
      },
      {
        q: 'Do I need a membership?',
        a: 'No. We serve anyone who calls. Our VIP program offers members lower rates and priority dispatch, but it is entirely optional.',
      },
    ],
    featured: false,
  },
  {
    slug: 'jump-starts',
    title: 'Jump Start Service',
    short: 'Jump Starts',
    icon: Battery,
    description:
      'Dead battery? We provide quick jump start services to get you back on the road in minutes.',
    features: ['All Vehicle Types', 'Mobile Service', 'Battery Testing'],
    body: [
      'A dead battery is the single most common call we get, and in most cases you are moving again within ten minutes of our truck arriving. We carry professional jump packs rather than relying on cables from another vehicle, which is both faster and safer for modern electronics.',
      'After the start we test the battery and charging system. That matters: if the alternator is the actual problem, jumping the car only buys you a few miles, and you would rather find that out in a parking lot than on the interstate.',
      'Extreme cold in January and sustained heat in July are our two busiest battery periods across all three metros.',
    ],
    whatToExpect: [
      'Pop the hood if you can do so safely before we arrive.',
      'Tell us if the battery is in the trunk or under a seat — common on European models.',
      'Let the engine run at least 20 minutes afterward, or drive rather than idle.',
      'If the battery fails the test, replace it soon; a jump is not a repair.',
    ],
    faqs: [
      {
        q: 'Will a jump start damage my car electronics?',
        a: 'Not with the regulated jump packs we use. The risk comes from reversed cables between two vehicles, which our equipment prevents.',
      },
      {
        q: 'My car started but died again immediately. What now?',
        a: 'That usually points at the alternator rather than the battery. At that point a tow to a repair shop is the sensible next step, and we can do it on the same visit.',
      },
    ],
    featured: true,
  },
  {
    slug: 'lockout-service',
    title: 'Lockout Assistance',
    short: 'Lockout Service',
    icon: Key,
    description:
      'Locked out of your vehicle? Our technicians can safely unlock your car without damage.',
    features: ['Non-Destructive Entry', 'All Makes & Models', 'Fast Response'],
    body: [
      'We open vehicles without damaging the door, the frame or the weather seal. Our technicians use professional wedge-and-reach tools rather than the coat-hanger methods that bend door frames and tear paint.',
      'Keys locked in the trunk, a key fob shut inside, or a child or pet accidentally locked in — we handle all of it. If there is a child or an animal in the vehicle, say so immediately when you call: that becomes an emergency dispatch and we will also advise you to call 911.',
      'Modern vehicles with deadlocking or fully electronic latches sometimes cannot be opened without the key. We will tell you honestly if yours is one of them rather than damaging the door trying.',
    ],
    whatToExpect: [
      'You will be asked for proof the vehicle is yours — registration, insurance or matching ID.',
      'Most openings take between five and fifteen minutes.',
      'Tell dispatch immediately if a child or pet is inside.',
    ],
    faqs: [
      {
        q: 'Will you damage my door or window?',
        a: 'No. We use non-destructive entry tools. If a vehicle genuinely cannot be opened without damage, we stop and explain the options rather than forcing it.',
      },
      {
        q: 'Can you open the car if the keys are in the trunk?',
        a: 'Usually yes — we open the cabin and release the trunk from inside. A few models with separated trunk locks are exceptions.',
      },
      {
        q: 'Do you make replacement keys?',
        a: 'No. We open the vehicle so you can retrieve your keys. Cutting or programming a new key is an automotive locksmith or dealership job.',
      },
    ],
    featured: true,
  },
  {
    slug: 'fuel-delivery',
    title: 'Fuel Delivery',
    short: 'Fuel Delivery',
    icon: Fuel,
    description:
      'Ran out of gas? We deliver fuel directly to your location so you can continue your journey.',
    features: ['Multiple Fuel Types', 'Emergency Delivery', 'Quick Service'],
    body: [
      'We bring enough fuel to get you to a station — typically two to five gallons of regular unleaded or diesel, delivered to wherever you stopped. You pay for the fuel plus the delivery call.',
      'Diesel drivers should mention it when calling. A diesel engine run completely dry often needs the fuel system primed or bled before it will restart, and that is a different job from simply pouring fuel in.',
      'If you are on an interstate shoulder, stay out of the vehicle and behind a barrier where possible while you wait.',
    ],
    whatToExpect: [
      'Tell dispatch whether you need gasoline or diesel.',
      'We deliver a starter quantity, not a full tank — head straight to a station afterward.',
      'For diesel, expect a few extra minutes to prime the system.',
    ],
    faqs: [
      {
        q: 'How much fuel do you bring?',
        a: 'Enough to reach a nearby station, normally two to five gallons. Filling the tank roadside is neither practical nor safe.',
      },
      {
        q: 'I put the wrong fuel in my tank. Can you help?',
        a: 'Do not start the engine. Call us for a tow — running the engine circulates the wrong fuel through the system and turns a drain into a major repair.',
      },
    ],
    featured: true,
  },
  {
    slug: 'tire-changes',
    title: 'Tire Change Service',
    short: 'Tire Changes',
    icon: Wrench,
    description:
      'Flat tire? Our experts will change your tire quickly and safely, getting you moving again.',
    features: ['Spare Installation', 'Mobile Service', 'Safety Check'],
    body: [
      'We fit your spare properly, torque the wheel to specification and check the pressure before leaving. Changing a wheel on a highway shoulder is genuinely dangerous, which is why it is worth calling rather than kneeling in a live traffic lane.',
      'If you have no spare, a locking wheel nut with no key, or a temporary spare already in use, we will tow instead. Many newer vehicles ship with a sealant kit and no spare at all, and sealant is useless against sidewall damage.',
      'Remember that a compact spare is speed and distance limited — usually 50 mph and 70 miles. Get the full tire repaired or replaced promptly.',
    ],
    whatToExpect: [
      'Have the spare, jack and lug wrench accessible if you have them.',
      'Tell dispatch if you have locking wheel nuts and whether you have the key.',
      'We torque to specification, not by feel.',
      'On a compact spare, observe the speed limit printed on its sidewall.',
    ],
    faqs: [
      {
        q: 'What if I do not have a spare tire?',
        a: 'We will tow you to a tire shop of your choosing. Many vehicles built in the last decade have no spare at all.',
      },
      {
        q: 'Can you repair the flat instead of changing it?',
        a: 'Not at the roadside. A proper repair requires removing the tire from the rim and patching from the inside, which is a shop job.',
      },
    ],
    featured: true,
  },
  {
    slug: 'accident-recovery',
    title: 'Accident Recovery',
    short: 'Accident Recovery',
    icon: Car,
    description:
      'Specialized accident recovery services with careful vehicle handling and professional support.',
    features: ['24/7 Response', 'Insurance Coordination', 'Damage Documentation'],
    body: [
      'After a collision the priority is clearing the scene safely, and that requires equipment and judgement that ordinary towing does not. We work alongside police and fire crews, manage fluid spills and get the roadway open.',
      'We photograph the vehicle before and after loading. That documentation matters when an insurer later questions what damage came from the accident and what came from the recovery.',
      'We can coordinate directly with your insurance company and deliver the vehicle to an approved body shop, a storage yard or your own address.',
    ],
    whatToExpect: [
      'Call 911 first if anyone is injured or the road is blocked.',
      'Photograph the scene yourself before vehicles are moved, if you safely can.',
      'Collect your personal belongings, registration and garage door opener before we leave.',
      'Ask for the destination address and our contact details for your insurer.',
    ],
    faqs: [
      {
        q: 'Do you work with insurance companies?',
        a: 'Yes. We can bill an approved claim directly or provide the itemised documentation your adjuster needs.',
      },
      {
        q: 'Where will my vehicle be taken?',
        a: 'Wherever you direct — a body shop, a dealership, your home or our secure yard. If police have ordered the tow, the destination may be set by them.',
      },
    ],
    featured: true,
  },
  {
    slug: 'winch-out-recovery',
    title: 'Winch Out Service',
    short: 'Winch Out',
    icon: Settings,
    description:
      'Stuck in mud, snow, or a ditch? Our powerful winch equipment safely extracts your vehicle.',
    features: ['Heavy-Duty Winch', 'Off-Road Recovery', 'Safe Extraction'],
    body: [
      'Sliding off an icy road into a ditch does not usually damage the vehicle — but a bad recovery will. We use rated winch lines and correct recovery points on the frame, never suspension components or tie-down loops that were never designed to take the load.',
      'Ohio winters keep us busy with this work, particularly on rural stretches in Licking, Greene, Union and Clermont counties. Spring flooding produces the same calls from a different cause.',
      'If the vehicle is on a steep bank or partially submerged, tell dispatch — that changes the equipment and sometimes the number of trucks we send.',
    ],
    whatToExpect: [
      'Stay out of the recovery path; a winch line under load is dangerous.',
      'Tell us the surface: mud, snow, ice, sand or water.',
      'Mention any slope, ditch depth or water level.',
      'We will inspect for damage before you drive away.',
    ],
    faqs: [
      {
        q: 'Will winching damage my vehicle?',
        a: 'Not when it is done from proper recovery points with rated equipment. Damage typically comes from improvised attempts using tow straps on suspension parts.',
      },
      {
        q: 'Can you recover a vehicle that has gone into water?',
        a: 'Often yes, depending on depth and access. Tell dispatch immediately — partially submerged vehicles need specific equipment and sometimes a second truck.',
      },
    ],
    featured: true,
  },
  {
    slug: 'motorcycle-towing',
    title: 'Motorcycle Towing',
    short: 'Motorcycle Towing',
    icon: Package,
    description:
      'Specialized motorcycle towing with equipment designed to safely transport your bike.',
    features: ['Secure Tie-Downs', 'Experienced Handlers', 'All Bike Types'],
    body: [
      'Motorcycles need a wheel chock and soft straps, not chains. We carry proper motorcycle equipment because a bike strapped down badly will either shift in transit or have its forks damaged by over-compression.',
      'We handle sport bikes, cruisers, touring bikes and trikes. Tell dispatch roughly what you ride so the driver arrives with the right chock and strap set.',
      'Riders can normally travel in the cab with us for local transport.',
    ],
    whatToExpect: [
      'Let us know the bike type and whether it rolls freely.',
      'If the bike went down, mention any damage to forks, bars or levers.',
      'We use soft straps over the bars and a front wheel chock, never chains on paintwork.',
    ],
    faqs: [
      {
        q: 'Can you tow a motorcycle that will not roll?',
        a: 'Yes. A seized or damaged bike is winched onto the bed rather than pushed.',
      },
    ],
    featured: true,
  },
  {
    slug: 'long-distance-towing',
    title: 'Long Distance Towing',
    short: 'Long Distance Towing',
    icon: Route,
    description:
      'Need to transport your vehicle across states? We offer reliable long-distance towing services.',
    features: ['Cross-Country', 'Real-Time Tracking', 'Insured Transport'],
    body: [
      'Long-distance moves are quoted in advance as a flat rate, so there is no meter running and no surprise at the far end. We handle vehicle relocations between Ohio cities and out-of-state transport.',
      'These jobs go on a flatbed as standard. Hundreds of miles with two wheels on the road causes drivetrain wear that no one wants to pay for at the other end.',
      'Transport is insured and we will give you an expected delivery window when the quote is agreed.',
    ],
    whatToExpect: [
      'Get the quote confirmed in writing before the vehicle is loaded.',
      'Remove valuables and personal documents from the vehicle first.',
      'Agree the delivery contact and address up front.',
      'Expect a scheduled window rather than an exact minute.',
    ],
    faqs: [
      {
        q: 'How is long-distance towing priced?',
        a: 'A flat rate based on distance, vehicle size and whether it rolls. We agree it before loading.',
      },
      {
        q: 'Is my vehicle insured in transit?',
        a: 'Yes. Ask for our certificate of insurance if you or a third party needs it on file.',
      },
    ],
    featured: true,
  },
  {
    slug: 'parking-garage-recovery',
    title: 'Parking Garage Recovery',
    short: 'Garage Recovery',
    icon: Building2,
    description:
      'Low-clearance equipment that can actually get into multi-storey car parks and underground garages.',
    features: ['Low-Clearance Trucks', 'Tight Turn Radius', 'Downtown Specialists'],
    body: [
      'Most tow trucks physically cannot enter a parking structure. Typical clearance is six feet six inches, and a standard wrecker is considerably taller, which is why drivers are often told a vehicle in a garage cannot be recovered.',
      'We run low-clearance equipment specifically for these recoveries in downtown Columbus, Cincinnati and Dayton, plus the office decks in Blue Ash, Grandview Yard and Easton.',
      'Tell dispatch the garage name, the level and the posted clearance height if you can see it. That determines which truck we send and avoids a wasted trip.',
    ],
    whatToExpect: [
      'Note the posted clearance height at the garage entrance.',
      'Tell us which level and bay the vehicle is on.',
      'Some garages require management authorisation before a tow — we can help arrange it.',
    ],
    faqs: [
      {
        q: 'My garage has a 6\'6" limit. Can you still recover my car?',
        a: 'Yes, that is exactly what our low-clearance equipment is for. Confirm the posted height when you call.',
      },
    ],
    featured: false,
  },
  {
    slug: 'fleet-contract-towing',
    title: 'Fleet & Contract Towing',
    short: 'Fleet Towing',
    icon: ShieldCheck,
    description:
      'Account-based towing for businesses running delivery vans, service trucks and commercial fleets.',
    features: ['Priority Dispatch', 'Monthly Invoicing', 'Dedicated Account Contact'],
    body: [
      'A vehicle off the road costs a business far more than the tow does. Fleet accounts get priority dispatch, agreed rates and consolidated monthly invoicing instead of per-incident payment.',
      'We work with delivery operators, service and trade companies, dealerships, property managers and municipal fleets across all three metros.',
      'Accounts include a named contact, agreed response targets and reporting on every incident for your records.',
    ],
    whatToExpect: [
      'We will review your fleet size, vehicle types and coverage area.',
      'Rates and response targets are agreed in writing before the account opens.',
      'Drivers call one number and quote the account name.',
    ],
    faqs: [
      {
        q: 'How small can a fleet account be?',
        a: 'We open accounts for operators with as few as three vehicles. Contact us and we will quote for your situation.',
      },
      {
        q: 'Can you handle medium and heavy-duty commercial units?',
        a: 'Yes. Our heavy-duty wreckers handle box trucks, RVs, buses and commercial vehicles up to 50,000+ lbs.',
      },
    ],
    featured: false,
  },
  {
    slug: 'impound-towing',
    title: 'Impound Towing',
    short: 'Impound Towing',
    icon: AlertTriangle,
    description:
      'Authorised removal of abandoned and improperly parked vehicles from private property.',
    features: ['Property Owner Authorised', 'Documented & Photographed', 'Secure Storage'],
    body: [
      'Property owners, landlords and business operators can have vehicles removed from private lots where they are parked without authorisation. Every removal is documented and photographed before the vehicle moves.',
      'Ohio law sets requirements around signage, notification and storage for private property removals. We follow those procedures carefully — an improperly executed tow creates liability for the property owner, not just for us.',
      'Vehicles are held in a secure storage yard and released to the registered owner on presentation of proof of ownership and payment of accrued fees.',
    ],
    whatToExpect: [
      'Property owners need to authorise each removal.',
      'Signage must meet the legal requirements before a lot can be enforced.',
      'Owners retrieving a vehicle should bring photo ID, registration and payment.',
    ],
    faqs: [
      {
        q: 'My car was towed from a private lot. How do I get it back?',
        a: 'Call us with your plate number. Bring photo ID and proof of ownership to the storage yard, and be aware that storage fees accrue daily.',
      },
      {
        q: 'I own a property with a parking problem. How do we start?',
        a: 'Contact us and we will review your signage and set up an authorisation process that meets Ohio requirements.',
      },
    ],
    featured: false,
  },
  {
    slug: 'voluntary-repossession',
    title: 'Voluntary Repossession Transport',
    short: 'Voluntary Repo',
    icon: Banknote,
    description:
      'Discreet, scheduled vehicle surrender transport arranged with the lender and the owner.',
    features: ['Scheduled & Discreet', 'Lender Coordination', 'Full Documentation'],
    body: [
      'A voluntary surrender is arranged in advance between the owner and the lender — nobody is surprised and nothing is confrontational. We collect the vehicle at an agreed time and deliver it where the lender directs.',
      'We handle the process discreetly. Vehicles are photographed and documented at collection so that the condition at handover is a matter of record for both sides.',
      'This is transport work carried out with the owner cooperation and the lender authorisation, not involuntary recovery.',
    ],
    whatToExpect: [
      'The lender provides written authorisation before collection.',
      'Remove all personal property from the vehicle beforehand.',
      'The vehicle is photographed at collection and at delivery.',
    ],
    faqs: [
      {
        q: 'What do I need to have ready?',
        a: 'The keys, the vehicle empty of personal belongings, and the reference details your lender supplied.',
      },
    ],
    featured: false,
  },
  {
    slug: 'auction-transport',
    title: 'Auction & Dealer Transport',
    short: 'Auction Transport',
    icon: Gavel,
    description:
      'Moving inventory between auctions, dealerships and detail shops on a schedule that fits your sale.',
    features: ['Multi-Vehicle Runs', 'Auction Deadlines Met', 'Dealer Accounts'],
    body: [
      'Dealers and auction houses work to fixed lane times, and a vehicle that misses its run sits for another week. We schedule around sale days rather than treating these as ordinary tows.',
      'We move running and non-running inventory between auction sites, dealerships, reconditioning shops and customer delivery addresses across Ohio.',
      'Regular dealer clients run on an account with consolidated invoicing.',
    ],
    whatToExpect: [
      'Give us the lane time or delivery deadline up front.',
      'Tell us which units do not run so we bring winch-capable equipment.',
      'Multi-vehicle moves can often be combined into one run.',
    ],
    faqs: [
      {
        q: 'Can you move several vehicles at once?',
        a: 'Yes. For multi-unit moves we schedule a run rather than charging each vehicle as a separate call.',
      },
    ],
    featured: false,
  },
  {
    slug: 'police-and-municipal-towing',
    title: 'Police & Municipal Towing',
    short: 'Police Towing',
    icon: Shield,
    description:
      'Rotation and contract towing support for law enforcement and municipal agencies.',
    features: ['Scene Clearance', 'Evidence Handling Aware', 'Rapid Roadway Reopening'],
    body: [
      'We support law enforcement and municipal agencies with accident scene clearance, abandoned vehicle removal and recovery work that needs to happen quickly to reopen a roadway.',
      'Our drivers understand scene protocol: work under the direction of the officer in charge, avoid disturbing anything that may be evidence, and get the lane open without creating a second hazard.',
      'Vehicles held at an agency direction are stored securely with documented chain of custody.',
    ],
    whatToExpect: [
      'The officer on scene directs the sequence of vehicle removal.',
      'Where a vehicle may hold evidence, we handle it accordingly.',
      'Release of a police-ordered tow requires clearance from the agency involved.',
    ],
    faqs: [
      {
        q: 'My vehicle was towed after an accident. How do I retrieve it?',
        a: 'Contact the police department that ordered the tow for a release, then call us with your plate number to arrange collection.',
      },
    ],
    featured: false,
  },
];

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
