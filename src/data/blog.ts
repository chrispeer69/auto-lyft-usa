export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date — also used for sitemap lastmod and article schema. */
  date: string;
  author: string;
  readMinutes: number;
  excerpt: string;
  tags: string[];
  /** Body as an ordered list of blocks so pages stay easy to edit. */
  body: ({ h2: string } | { p: string } | { ul: string[] })[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-to-do-after-a-car-accident-in-ohio',
    title: 'What To Do After a Car Accident in Ohio',
    date: '2026-07-28',
    author: 'Auto Lyft USA',
    readMinutes: 6,
    excerpt:
      'The order you do things in after a collision affects your safety, your insurance claim and how quickly the road reopens. Here is the sequence that matters.',
    tags: ['Safety', 'Insurance', 'Accident Recovery'],
    body: [
      {
        p: 'Nobody thinks clearly in the minutes after a crash. Having a sequence in your head beforehand is the closest thing to a substitute for a clear head, so here is the order we would want our own family to follow.',
      },
      { h2: '1. Check for injuries before anything else' },
      {
        p: 'Call 911 if anyone is hurt, if the vehicles are blocking live lanes, or if a driver appears impaired. In Ohio you are required to report an accident involving injury, death or significant property damage. When in doubt, report it — an unreported accident can complicate an insurance claim badly.',
      },
      { h2: '2. Move to safety if the vehicles are driveable' },
      {
        p: 'On a busy stretch of I-70, I-75 or I-275, staying in a live lane is the single most dangerous thing you can do. If the vehicles still move and nobody is seriously hurt, get them onto the shoulder or the next exit. If they will not move, get yourself behind a barrier and away from the roadway.',
      },
      { h2: '3. Document before anything gets moved' },
      {
        ul: [
          'Wide shots showing both vehicles and their positions',
          'Close shots of every damaged area on both vehicles',
          'The other driver licence, insurance card and plate',
          'Road conditions, traffic signals, signage and skid marks',
          'Names and numbers of any witnesses who stop',
        ],
      },
      {
        p: 'Once a tow truck lifts a vehicle the scene is gone for good. Two minutes of photographs while everything is still in place is worth more than anything you can reconstruct afterward.',
      },
      { h2: '4. Exchange information, but not opinions' },
      {
        p: 'Swap names, numbers, insurance details and plate numbers. Do not apologise or speculate about fault at the scene, even out of politeness — determining fault is the insurers job, and an offhand comment can be quoted back at you later.',
      },
      { h2: '5. Arrange the tow' },
      {
        p: 'You choose where your vehicle goes. Unless police have ordered the tow, you are entitled to nominate the body shop, the dealership or your own address. Before the truck leaves, take your registration, garage door opener, plate if the vehicle is totalled, and anything else you need out of the car.',
      },
      {
        p: 'Ask the driver for the destination address and a contact number. Your insurer will want both, and storage fees start accruing from day one wherever the vehicle ends up.',
      },
      { h2: '6. Call your insurer the same day' },
      {
        p: 'Report it promptly even if you do not intend to claim. Many policies require timely notification, and a claim reported a week later invites questions you do not need.',
      },
      {
        p: 'If you need accident recovery anywhere in the Columbus, Dayton or Cincinnati metros, we are available 24 hours a day. We photograph every vehicle before and after loading and can coordinate directly with your insurance company.',
      },
    ],
  },
  {
    slug: 'why-your-car-battery-dies-in-ohio-winters',
    title: 'Why Your Car Battery Always Dies on the Coldest Morning',
    date: '2026-07-20',
    author: 'Auto Lyft USA',
    readMinutes: 5,
    excerpt:
      'Cold does not usually kill a healthy battery. It exposes one that was already failing. Here is how to spot yours before it strands you.',
    tags: ['Maintenance', 'Winter', 'Jump Starts'],
    body: [
      {
        p: 'Every January our phones light up on the first genuinely cold morning. It looks like the cold killed thousands of batteries overnight. It did not — it exposed batteries that had been quietly failing for months.',
      },
      { h2: 'What cold actually does' },
      {
        p: 'Two things happen at once, and they work against each other. The chemical reaction inside the battery slows down, so it delivers noticeably less current than it would in mild weather. At the same time cold engine oil thickens, so the starter needs considerably more current to turn the engine over.',
      },
      {
        p: 'A healthy battery has enough margin to absorb both. A battery at seventy percent of its original capacity does not, and that is the one sitting in your driveway on the coldest morning of the year.',
      },
      { h2: 'The warning signs you already saw' },
      {
        ul: [
          'The engine cranks noticeably slower than it used to, especially first thing',
          'Headlights dim at idle and brighten when you rev',
          'You have needed a jump start at any point in the last year',
          'The battery is more than three or four years old',
          'Corrosion — white or blue crust — around the terminals',
        ],
      },
      {
        p: 'Slow cranking is the big one. Most drivers notice it for weeks and mentally file it under "the car being cold". It is the battery telling you it is nearly done.',
      },
      { h2: 'A jump start is not a repair' },
      {
        p: 'Getting jumped puts just enough charge in to start the engine. If the battery genuinely will not hold a charge, you are on a countdown to the next time you switch off. That is why our drivers test the battery and the charging system after every jump rather than just leaving.',
      },
      {
        p: 'If the car starts on a jump and then dies again almost immediately, the problem is usually the alternator, not the battery. At that point the sensible move is a tow to a shop rather than another jump.',
      },
      { h2: 'What to do before winter' },
      {
        ul: [
          'Have the battery load-tested — most shops do it free and it takes minutes',
          'Clean any corrosion off the terminals and check they are tight',
          'Replace a battery over four years old before winter rather than during it',
          'Drive rather than idle after a jump — idling charges slowly',
        ],
      },
      {
        p: 'If you do get caught, we run jump starts across Columbus, Dayton and Cincinnati around the clock, and most drivers are moving again within ten minutes of our truck arriving.',
      },
    ],
  },
  {
    slug: 'how-to-choose-a-towing-company',
    title: 'How To Choose a Towing Company (Before You Need One)',
    date: '2026-07-12',
    author: 'Auto Lyft USA',
    readMinutes: 5,
    excerpt:
      'The worst time to pick a tow company is standing on a highway shoulder at midnight. Five things worth checking while you are not in a hurry.',
    tags: ['Advice', 'Towing'],
    body: [
      {
        p: 'Nobody researches tow companies until they need one, which is exactly why bad operators stay in business. Five minutes now — and a number saved in your phone — puts you in a much better position later.',
      },
      { h2: '1. Are they actually available 24/7?' },
      {
        p: 'Plenty of companies advertise 24/7 and route overnight calls to voicemail or a call centre that subcontracts to whoever answers. Test it: call at nine on a Sunday evening and see whether a person picks up. That is the number worth saving.',
      },
      { h2: '2. Do they own the right equipment?' },
      {
        p: 'This is the one that catches people out. If you drive an all-wheel-drive vehicle you need a flatbed, not a wheel-lift — towing AWD with two wheels down can wreck the drivetrain. If your car is in a parking garage, most tow trucks physically cannot get in under a six-foot-six clearance.',
      },
      {
        ul: [
          'AWD, 4WD, lowered or luxury vehicle: flatbed',
          'Parking garage or underground deck: low-clearance equipment',
          'Box truck, RV or commercial: heavy-duty wrecker',
          'Motorcycle: wheel chock and soft straps, never chains',
        ],
      },
      { h2: '3. Will they quote before they hook up?' },
      {
        p: 'A reputable company gives you a price on the phone or before loading. Be wary of anyone who will not discuss cost until the vehicle is already on the truck — that is where the horror stories start.',
      },
      { h2: '4. Are they insured, and will they prove it?' },
      {
        p: 'Ask for a certificate of insurance. A company that hesitates is telling you something. Your vehicle is in their hands for the whole journey, and if they damage it you want that covered.',
      },
      { h2: '5. Do they know the area?' },
      {
        p: 'Local knowledge is not marketing fluff. It is knowing which Over-the-Rhine streets a truck cannot turn around in, which Upper Arlington driveways will scrape a low bumper, and that the Norwood Lateral has effectively no shoulder to work on. That knowledge is the difference between a fifteen minute job and a ninety minute one.',
      },
      {
        p: 'Save a number now, while you are sitting somewhere comfortable. Ours is 614-633-7935, and we answer it ourselves, at any hour, across all three metros.',
      },
    ],
  },
  {
    slug: 'stuck-in-a-ditch-what-not-to-do',
    title: 'Slid Off the Road? What Not To Do Next',
    date: '2026-07-04',
    author: 'Auto Lyft USA',
    readMinutes: 4,
    excerpt:
      'Going into the ditch rarely damages a car. The recovery attempt that follows often does. Here is how to avoid turning a free problem into an expensive one.',
    tags: ['Winter', 'Winch Out', 'Safety'],
    body: [
      {
        p: 'Every winter we pull vehicles out of ditches across Licking, Greene, Union and Clermont counties. The slide itself usually does no damage at all. What costs people money is the half hour of improvised recovery that happens before they call.',
      },
      { h2: 'Do not keep spinning the wheels' },
      {
        p: 'Spinning tires polish snow into ice and dig the vehicle deeper at the same time. Thirty seconds of wheelspin can turn a straightforward pull into a genuine excavation, and it can overheat a transmission or a clutch while you are at it.',
      },
      { h2: 'Do not let someone strap you to their pickup' },
      {
        p: 'This is the one that does real damage. A well-meaning driver loops a tow strap around whatever they can reach — a suspension arm, a bumper bracket, a tie-down loop meant only for securing the car on a transporter — and pulls. Bumpers come off. Control arms bend. Frames get tweaked.',
      },
      {
        p: 'Recovery points are specific reinforced points on the frame, and on most modern vehicles they are not obvious. Rated recovery gear exists because a strap under load stores an enormous amount of energy, and when something lets go it does so violently.',
      },
      { h2: 'Do not stand in the recovery path' },
      {
        p: 'If a strap or a hook fails it travels at speed in a straight line. Everyone who is not operating the equipment should be well clear and to the side, never in line with the pull. This applies to the winch recoveries we perform too — our drivers will ask you to move back for exactly this reason.',
      },
      { h2: 'What to do instead' },
      {
        ul: [
          'Turn the hazards on, especially on a curve or over a crest',
          'Stay in the vehicle with your seatbelt on if you are near live traffic',
          'Check the exhaust pipe is not packed with snow before running the engine for heat',
          'Note the surface — mud, snow, ice or water — so dispatch sends the right truck',
          'Mention any slope, ditch depth or water; it changes the equipment we bring',
        ],
      },
      {
        p: 'A winch-out is one of the least expensive things we do. It is almost always cheaper than the bodywork that follows a bad DIY attempt.',
      },
    ],
  },
  {
    slug: 'towing-costs-in-columbus-explained',
    title: 'What Towing Actually Costs in Ohio, and Why',
    date: '2026-06-24',
    author: 'Auto Lyft USA',
    readMinutes: 5,
    excerpt:
      'Hook fees, per-mile rates, after-hours charges and storage. A plain explanation of what goes into a tow bill so nothing surprises you.',
    tags: ['Pricing', 'Advice'],
    body: [
      {
        p: 'Towing pricing feels opaque from the outside, and that is how some operators prefer it. It is actually fairly simple once you know the components.',
      },
      { h2: 'The hook fee' },
      {
        p: 'A base charge covering dispatch, travel to you and getting the vehicle safely onto the truck. It exists because the majority of the cost is incurred before a single mile is driven — the truck, the fuel and the driver are committed the moment we roll.',
      },
      { h2: 'Per-mile rate' },
      {
        p: 'Charged from the pickup point to the destination. For long-distance moves we quote a flat rate instead, so there is no meter running across state lines.',
      },
      { h2: 'What legitimately increases the price' },
      {
        ul: [
          'Winching or recovery, if the vehicle is off the roadway',
          'A vehicle that will not roll or shift out of park, needing dollies',
          'Heavy-duty equipment for box trucks, RVs and commercial vehicles',
          'Low-clearance garage recovery requiring specialist trucks',
          'Overnight and holiday call-outs, at some operators',
        ],
      },
      { h2: 'Storage fees' },
      {
        p: 'If a vehicle goes to a storage yard, fees accrue daily and they add up faster than people expect. This is the number one reason a tow bill balloons — a car sitting for three weeks while an insurance claim is sorted out. Move the vehicle to a body shop or your own driveway as soon as you can.',
      },
      { h2: 'Questions worth asking on the phone' },
      {
        ul: [
          'What is the total, including the hook fee and the mileage?',
          'Are there additional charges for the time of day?',
          'If it goes to storage, what is the daily rate?',
          'Do you take card at the roadside?',
        ],
      },
      {
        p: 'Any company that will not answer those before hooking up is one to hang up on. We quote before we load, every time.',
      },
    ],
  },
  {
    slug: 'get-your-car-summer-ready-ohio',
    title: 'Getting Your Car Through an Ohio Summer',
    date: '2026-06-10',
    author: 'Auto Lyft USA',
    readMinutes: 4,
    excerpt:
      'Heat breaks down more vehicles than cold does. The five checks that prevent most of the summer calls we run.',
    tags: ['Maintenance', 'Summer'],
    body: [
      {
        p: 'Most people associate breakdowns with winter, but our busiest stretch is often July. Heat is harder on a vehicle than cold, and it fails things in ways that leave you stranded on a hot shoulder with no shade.',
      },
      { h2: 'Cooling system' },
      {
        p: 'Overheating is the number one summer tow. Check the coolant level when the engine is cold, look for crusty white residue around hose joints, and squeeze the hoses — they should be firm, not spongy or rock hard. A hose that fails at seventy miles an hour empties the system in seconds.',
      },
      { h2: 'Battery — yes, in summer' },
      {
        p: 'Heat is actually harder on battery life than cold. It accelerates the internal corrosion that shortens a battery lifespan; cold simply reveals the damage later. A battery that dies in January often did most of its dying the previous August.',
      },
      { h2: 'Tires' },
      {
        p: 'Hot pavement plus underinflated tires is how blowouts happen. Pressure rises as tires heat up, so check them cold, first thing, and set them to the figure on the door jamb sticker rather than the number moulded into the tire sidewall.',
      },
      { h2: 'Air conditioning' },
      {
        p: 'If the A/C is not as cold as it was last year, it has a leak. Get it found before the first ninety-degree week, because that is when every shop in the region has a two-week wait for A/C work.',
      },
      { h2: 'An actual emergency kit' },
      {
        ul: [
          'Water — for you, not just the radiator',
          'A phone power bank, charged',
          'A reflective triangle or flares',
          'Basic first aid supplies',
          'A number for a towing company that answers',
        ],
      },
      {
        p: 'Waiting on a shoulder in direct July sun with no water is genuinely unpleasant and occasionally dangerous. If you break down, get out of the sun and stay hydrated while you wait for us.',
      },
    ],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
