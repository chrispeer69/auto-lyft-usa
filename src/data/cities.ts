/**
 * Every city that gets its own /service-area/<slug> page.
 *
 * These pages exist to rank for "towing in <city>" searches, so each city
 * needs genuinely distinct copy — the highways, landmarks and local detail
 * below are what make them different from one another. Adding a city here
 * creates its page, its sitemap entry and its links automatically.
 */

export type Metro = 'columbus' | 'dayton' | 'cincinnati';

export type City = {
  slug: string;
  name: string;
  metro: Metro;
  county: string;
  zips: string[];
  /** Major roads our trucks work in this city. */
  highways: string[];
  /** Recognisable places, used in copy to prove local knowledge. */
  landmarks: string[];
  /** One-line summary used on hub pages and meta descriptions. */
  blurb: string;
  /** Two or three sentences of page-specific intro copy. */
  intro: string;
  /** Typical drive time from the nearest truck staging point. */
  responseTime: string;
};

export const METROS: Record<Metro, { name: string; label: string; hub: string }> = {
  columbus: {
    name: 'Columbus',
    label: 'Columbus Metro',
    hub: 'Franklin County and the surrounding I-270 outerbelt communities',
  },
  dayton: {
    name: 'Dayton',
    label: 'Dayton Metro',
    hub: 'Montgomery, Greene and Miami County communities along I-75 and I-675',
  },
  cincinnati: {
    name: 'Cincinnati',
    label: 'Cincinnati Metro',
    hub: 'Hamilton, Butler, Warren and Clermont County communities inside I-275',
  },
};

export const CITIES: City[] = [
  // ---------------------------------------------------------------- Columbus
  {
    slug: 'dublin',
    name: 'Dublin',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43016', '43017', '43002'],
    highways: ['US-33', 'I-270', 'Sawmill Road', 'Riverside Drive'],
    landmarks: ['Bridge Park', 'Historic Dublin', 'Muirfield Village', 'Dublin Coffman High School'],
    blurb: 'Fast towing and roadside help across Dublin, Bridge Park and Muirfield.',
    intro:
      'Dublin traffic concentrates on US-33 and the Sawmill Road corridor, and that is where most of our Dublin calls come from. We stage trucks near the I-270 interchange so we can reach Bridge Park, Historic Dublin and the Muirfield neighborhoods quickly, day or night.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'westerville',
    name: 'Westerville',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43081', '43082', '43086'],
    highways: ['I-270', 'State Route 3', 'Polaris Parkway', 'County Line Road'],
    landmarks: ['Otterbein University', 'Uptown Westerville', 'Polaris Fashion Place', 'Hoover Reservoir'],
    blurb: 'Round-the-clock towing for Westerville, Uptown and the Polaris corridor.',
    intro:
      'Between Otterbein University students, Uptown parking and the shopping traffic around Polaris, Westerville generates a steady mix of lockouts, dead batteries and low-clearance garage recoveries. Our Westerville trucks cover everything from Hoover Reservoir down to the I-270 split.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'grove-city',
    name: 'Grove City',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43123'],
    highways: ['I-71', 'I-270', 'State Route 665', 'Stringtown Road'],
    landmarks: ['Town Center', 'Beulah Park', 'Fryer Park', 'Mount Carmel Grove City'],
    blurb: 'Grove City towing and roadside assistance, including the I-71 corridor.',
    intro:
      'Grove City calls cluster on Stringtown Road and the I-71 on-ramps, where rush-hour breakdowns block traffic fast. We prioritise those highway calls for safety and can usually clear a disabled vehicle from the shoulder before it becomes a hazard.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'reynoldsburg',
    name: 'Reynoldsburg',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43068'],
    highways: ['I-70', 'Brice Road', 'East Main Street', 'State Route 256'],
    landmarks: ['Blacklick Woods Metro Park', 'Reynoldsburg High School', 'Taylor Square'],
    blurb: 'Towing across Reynoldsburg and the busy I-70 East corridor.',
    intro:
      'Reynoldsburg sits on one of the busiest stretches of I-70 in central Ohio, and truck traffic there means we handle everything from passenger breakdowns to heavier commercial recoveries. Brice Road and East Main see the bulk of our non-highway calls.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'hilliard',
    name: 'Hilliard',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43026'],
    highways: ['I-270', 'Cemetery Road', 'Britton Parkway', 'Roberts Road'],
    landmarks: ['Old Hilliard', 'Hilliard Station Park', 'Heritage Trail', 'Mill Run'],
    blurb: 'Hilliard towing, jump starts and lockout service, 24 hours a day.',
    intro:
      'Most Hilliard calls come from the Mill Run and Britton Parkway commercial areas plus the neighborhoods around Old Hilliard. The I-270 west interchange keeps our response times short across the whole city.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'powell',
    name: 'Powell',
    metro: 'columbus',
    county: 'Delaware County',
    zips: ['43065'],
    highways: ['Sawmill Parkway', 'State Route 750', 'Olentangy River Road'],
    landmarks: ['Columbus Zoo and Aquarium', 'Downtown Powell', 'Liberty Township', 'Scioto River'],
    blurb: 'Powell and Liberty Township towing, including Columbus Zoo traffic.',
    intro:
      'Zoo and Zoombezi Bay traffic makes Powell unusually busy in summer, and hot parking lots produce a lot of dead batteries and lockouts. We cover Powell from the Sawmill Parkway corridor out to the Scioto River.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'gahanna',
    name: 'Gahanna',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43230', '43219'],
    highways: ['I-270', 'State Route 62', 'Hamilton Road', 'Stelzer Road'],
    landmarks: ['Creekside', 'John Glenn Columbus International Airport', 'Big Walnut Trail'],
    blurb: 'Gahanna towing with fast access to John Glenn International Airport.',
    intro:
      'Gahanna borders the airport, so we get a steady stream of long-term parking batteries, lockouts from travellers and rental returns that will not start. We also cover the Hamilton Road and Stelzer Road business corridors.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'upper-arlington',
    name: 'Upper Arlington',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43220', '43221', '43212'],
    highways: ['State Route 315', 'Lane Avenue', 'Riverside Drive', 'Henderson Road'],
    landmarks: ['Ohio State University', 'Tremont Center', 'Scioto Country Club', 'Northam Park'],
    blurb: 'Upper Arlington towing, including careful flatbed service for newer vehicles.',
    intro:
      'Upper Arlington has narrow residential streets and a lot of low-clearance driveways, so we bring a flatbed by default rather than risk bumper damage. Game-day traffic near Ohio State affects our routing, and we plan around it.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'worthington',
    name: 'Worthington',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43085', '43235'],
    highways: ['State Route 315', 'High Street', 'I-270', 'Wilson Bridge Road'],
    landmarks: ['Old Worthington', 'Worthington Mall', 'Olentangy Trail', 'Thomas Worthington High School'],
    blurb: 'Worthington and Old Worthington towing and roadside assistance.',
    intro:
      'Old Worthington has tight angled parking that produces more than its share of minor scrapes and lockouts. We work the High Street corridor and the Wilson Bridge Road interchange, with quick access to I-270.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'pickerington',
    name: 'Pickerington',
    metro: 'columbus',
    county: 'Fairfield County',
    zips: ['43147'],
    highways: ['I-70', 'State Route 256', 'Refugee Road', 'Diley Road'],
    landmarks: ['Pickerington Ponds Metro Park', 'Violet Township', 'Olde Pickerington Village'],
    blurb: 'Pickerington towing covering Violet Township and the I-70 corridor.',
    intro:
      'Pickerington has grown fast and the State Route 256 corridor now carries far more traffic than it was built for. We handle accident recovery there regularly, along with routine roadside calls throughout Violet Township.',
    responseTime: '18-25 minutes',
  },
  {
    slug: 'new-albany',
    name: 'New Albany',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43054'],
    highways: ['State Route 161', 'US-62', 'Dublin-Granville Road'],
    landmarks: ['New Albany Country Club', 'Market Square', 'Rocky Fork Metro Park', 'Personal Care district'],
    blurb: 'New Albany towing with careful handling for luxury and classic vehicles.',
    intro:
      'New Albany sees a high concentration of newer and higher-value vehicles, so flatbed transport is the default here. The State Route 161 business corridor and the surrounding office campuses generate most of our weekday calls.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'canal-winchester',
    name: 'Canal Winchester',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43110'],
    highways: ['US-33', 'Gender Road', 'Winchester Pike'],
    landmarks: ['Historic Downtown', 'Slate Run Metro Park', 'Canal Winchester High School'],
    blurb: 'Canal Winchester towing and 24/7 roadside assistance.',
    intro:
      'Canal Winchester calls come mainly from the US-33 corridor and the Gender Road retail strip. Rural stretches outside town mean winch-outs after storms are common, especially in winter.',
    responseTime: '20-28 minutes',
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    metro: 'columbus',
    county: 'Delaware County',
    zips: ['43015'],
    highways: ['US-23', 'US-36', 'State Route 37'],
    landmarks: ['Ohio Wesleyan University', 'Delaware State Park', 'Downtown Delaware', 'Alum Creek'],
    blurb: 'Delaware County towing along the US-23 corridor.',
    intro:
      'US-23 through Delaware is a high-speed corridor where breakdowns turn dangerous quickly, so we treat those calls as priority. We also cover Ohio Wesleyan and the lake traffic around Alum Creek and Delaware State Park.',
    responseTime: '20-30 minutes',
  },
  {
    slug: 'marysville',
    name: 'Marysville',
    metro: 'columbus',
    county: 'Union County',
    zips: ['43040'],
    highways: ['US-33', 'State Route 4', 'State Route 31'],
    landmarks: ['Honda of America', 'Uptown Marysville', 'Union County Fairgrounds'],
    blurb: 'Marysville towing including shift-change coverage at the Honda plants.',
    intro:
      'The Honda plants drive Marysville traffic, and shift changes on US-33 concentrate our calls into predictable windows. We keep coverage through those periods and handle everything from employee lockouts to full accident recovery.',
    responseTime: '25-35 minutes',
  },
  {
    slug: 'bexley',
    name: 'Bexley',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43209'],
    highways: ['I-70', 'Main Street', 'Broad Street', 'Alum Creek Drive'],
    landmarks: ['Capital University', 'Jeffrey Mansion', 'Drexel Theatre', 'Bexley High School'],
    blurb: 'Bexley towing with equipment sized for narrow residential streets.',
    intro:
      'Bexley streets are tight and tree-lined, and many homes have narrow detached-garage driveways. We size the truck to the street here rather than sending a wrecker that cannot turn around.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'whitehall',
    name: 'Whitehall',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43213'],
    highways: ['I-70', 'Broad Street', 'Hamilton Road'],
    landmarks: ['Defense Supply Center Columbus', 'Whitehall-Yearling High School', 'Norton Field'],
    blurb: 'Whitehall towing and roadside assistance, 24 hours a day.',
    intro:
      'Whitehall sits right on I-70 with heavy commercial traffic around the Defense Supply Center. We handle both passenger vehicles and medium-duty commercial units throughout the city.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'grandview-heights',
    name: 'Grandview Heights',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43212'],
    highways: ['State Route 315', 'Grandview Avenue', 'Goodale Boulevard'],
    landmarks: ['Grandview Yard', 'Grandview Avenue shops', 'Wyman Woods'],
    blurb: 'Grandview Heights towing, including parking garage recovery.',
    intro:
      'Grandview Yard has several low-clearance parking structures where a standard wrecker simply will not fit. We run low-clearance equipment for those recoveries and cover the Grandview Avenue business district.',
    responseTime: '10-16 minutes',
  },
  {
    slug: 'groveport',
    name: 'Groveport',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43125'],
    highways: ['State Route 317', 'US-33', 'Hamilton Road'],
    landmarks: ['Rickenbacker International Airport', 'Groveport Madison High School', 'Motts Military Museum'],
    blurb: 'Groveport towing with heavy-duty coverage near Rickenbacker.',
    intro:
      'Rickenbacker and the surrounding logistics parks mean Groveport calls often involve box trucks and tractor units rather than cars. Our heavy-duty wreckers cover this area specifically for that reason.',
    responseTime: '18-25 minutes',
  },
  {
    slug: 'blacklick',
    name: 'Blacklick',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43004'],
    highways: ['I-70', 'Broad Street', 'Waggoner Road'],
    landmarks: ['Blacklick Woods Metro Park', 'Jefferson Township', 'Taylor Road'],
    blurb: 'Blacklick and Jefferson Township towing and recovery.',
    intro:
      'Blacklick blends suburban neighborhoods with fast-moving traffic on Broad Street and easy I-70 access. Winter calls here skew toward winch-outs from ditches along the less-travelled township roads.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'pataskala',
    name: 'Pataskala',
    metro: 'columbus',
    county: 'Licking County',
    zips: ['43062'],
    highways: ['State Route 16', 'State Route 310', 'Broad Street'],
    landmarks: ['Pataskala Municipal Park', 'Watkins Memorial High School', 'Licking County line'],
    blurb: 'Pataskala towing serving western Licking County.',
    intro:
      'Pataskala covers a lot of rural road for its population, and State Route 310 sees regular off-road recoveries after ice and heavy rain. We carry winch equipment on every call out this way.',
    responseTime: '22-30 minutes',
  },
  {
    slug: 'galloway',
    name: 'Galloway',
    metro: 'columbus',
    county: 'Franklin County',
    zips: ['43119'],
    highways: ['I-270', 'West Broad Street', 'Georgesville Road'],
    landmarks: ['Prairie Township', 'Darby Creek', 'Westland area'],
    blurb: 'Galloway and Prairie Township towing, available around the clock.',
    intro:
      'Galloway calls come largely from West Broad Street and the I-270 west interchange. Darby Creek flooding occasionally strands vehicles on the low-lying roads nearby, and we handle those recoveries regularly.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'sunbury',
    name: 'Sunbury',
    metro: 'columbus',
    county: 'Delaware County',
    zips: ['43074'],
    highways: ['I-71', 'State Route 3', 'State Route 37'],
    landmarks: ['Sunbury Town Square', 'Big Walnut High School', 'Hoover Reservoir'],
    blurb: 'Sunbury towing with priority coverage on I-71.',
    intro:
      'The I-71 interchange at Sunbury is a frequent breakdown point for travellers heading between Columbus and Cleveland. We prioritise interstate calls here because shoulder space is limited and traffic speeds are high.',
    responseTime: '22-32 minutes',
  },

  // ------------------------------------------------------------------ Dayton
  {
    slug: 'kettering',
    name: 'Kettering',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45409', '45419', '45420', '45429', '45440'],
    highways: ['I-675', 'Dorothy Lane', 'Far Hills Avenue', 'Wilmington Pike'],
    landmarks: ['Fraze Pavilion', 'Kettering Medical Center', 'Town and Country Shopping Center'],
    blurb: 'Kettering towing, jump starts and lockouts, day or night.',
    intro:
      'Kettering is one of our busiest Dayton-area cities, with most calls along Far Hills Avenue and Wilmington Pike. Event nights at Fraze Pavilion reliably produce lockouts and dead batteries, and we staff for them.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'beavercreek',
    name: 'Beavercreek',
    metro: 'dayton',
    county: 'Greene County',
    zips: ['45430', '45431', '45432', '45434', '45440'],
    highways: ['I-675', 'North Fairfield Road', 'Dayton-Xenia Road', 'Colonel Glenn Highway'],
    landmarks: ['The Greene Town Center', 'Wright State University', 'Wright-Patterson AFB'],
    blurb: 'Beavercreek towing serving The Greene, Wright State and WPAFB.',
    intro:
      'Beavercreek traffic centres on The Greene and the Wright State corridor, with Wright-Patterson gate traffic adding volume at shift changes. We cover the I-675 interchanges that tie all three together.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'centerville',
    name: 'Centerville',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45458', '45459'],
    highways: ['I-675', 'State Route 48', 'Alex Bell Road', 'Yankee Street'],
    landmarks: ['Uptown Centerville', 'Cornerstone', 'Centerville High School'],
    blurb: 'Centerville towing and roadside assistance across the south suburbs.',
    intro:
      'Centerville and Washington Township run together, and we treat them as one coverage area. Most calls come off State Route 48 and the Cornerstone retail development near the I-675 interchange.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'huber-heights',
    name: 'Huber Heights',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45424'],
    highways: ['I-70', 'Old Troy Pike', 'Brandt Pike', 'Chambersburg Road'],
    landmarks: ['Rose Music Center', 'Wayne High School', 'Huber Heights Athletic Foundation'],
    blurb: 'Huber Heights towing with quick access to I-70.',
    intro:
      'Huber Heights sits on I-70 where it meets the Old Troy Pike corridor, and interstate breakdowns make up a large share of our calls. Concert nights at the Rose Music Center add a predictable evening spike.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'fairborn',
    name: 'Fairborn',
    metro: 'dayton',
    county: 'Greene County',
    zips: ['45324'],
    highways: ['I-675', 'State Route 4', 'Broad Street', 'Colonel Glenn Highway'],
    landmarks: ['Wright-Patterson AFB', 'Wright State University', 'Downtown Fairborn'],
    blurb: 'Fairborn towing serving Wright-Patterson and Wright State.',
    intro:
      'Fairborn wraps around Wright-Patterson Air Force Base, and base traffic shapes our day. We are used to the access restrictions and will coordinate a meeting point off-base when a vehicle cannot be reached directly.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'miamisburg',
    name: 'Miamisburg',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45342'],
    highways: ['I-75', 'State Route 725', 'Miamisburg-Centerville Road'],
    landmarks: ['Dayton Mall', 'Miamisburg Mound', 'Austin Landing', 'Riverfront Park'],
    blurb: 'Miamisburg towing including the Dayton Mall and Austin Landing areas.',
    intro:
      'The Dayton Mall and Austin Landing generate constant parking-lot calls, especially dead batteries in winter and lockouts year round. I-75 runs straight through the city, so we handle highway recovery here too.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'oakwood',
    name: 'Oakwood',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45409', '45419'],
    highways: ['Far Hills Avenue', 'Patterson Road', 'Shafor Boulevard'],
    landmarks: ['Oakwood High School', 'Houk Stream', 'Smith Gardens'],
    blurb: 'Oakwood towing with careful flatbed handling on narrow streets.',
    intro:
      'Oakwood has some of the tightest residential streets in the Dayton area along with a lot of well-kept older vehicles. Flatbed is the default here, and we take the extra minutes to load without scraping a low front end.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'springboro',
    name: 'Springboro',
    metro: 'dayton',
    county: 'Warren County',
    zips: ['45066'],
    highways: ['I-75', 'State Route 73', 'State Route 741'],
    landmarks: ['Historic Downtown Springboro', 'Clearcreek Park', 'Springboro High School'],
    blurb: 'Springboro towing, bridging the Dayton and Cincinnati markets.',
    intro:
      'Springboro sits between our Dayton and Cincinnati coverage areas, which means we can usually reach it from two directions and dispatch whichever truck is closer. State Route 73 and the I-75 interchange see the most calls.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'vandalia',
    name: 'Vandalia',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45377'],
    highways: ['I-70', 'I-75', 'National Road', 'Dixie Drive'],
    landmarks: ['Dayton International Airport', 'Vandalia Recreation Center', 'Butler Township'],
    blurb: 'Vandalia towing with fast Dayton International Airport access.',
    intro:
      'Vandalia sits at the I-70 and I-75 junction next to Dayton International, which makes it one of the highest-traffic points in our Dayton coverage. Airport parking batteries and travellers locked out of vehicles are routine calls.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'xenia',
    name: 'Xenia',
    metro: 'dayton',
    county: 'Greene County',
    zips: ['45385'],
    highways: ['US-35', 'US-68', 'State Route 380'],
    landmarks: ['Xenia Station', 'Greene County Fairgrounds', 'Little Miami Scenic Trail'],
    blurb: 'Xenia towing and rural recovery across Greene County.',
    intro:
      'US-35 through Xenia is fast and largely rural, and it produces serious accident recovery work. Outside the highway, Greene County back roads mean we bring winch equipment on most calls out here.',
    responseTime: '20-28 minutes',
  },
  {
    slug: 'riverside',
    name: 'Riverside',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45431', '45432'],
    highways: ['State Route 4', 'Airway Road', 'Harshman Road'],
    landmarks: ['National Museum of the US Air Force', 'Wright-Patterson AFB', 'Eastwood MetroPark'],
    blurb: 'Riverside towing next to Wright-Patterson and the Air Force Museum.',
    intro:
      'Riverside borders Wright-Patterson and the Air Force Museum, so we see a lot of out-of-town visitors whose vehicles pick a bad moment to fail. Harshman Road and State Route 4 carry most of the local traffic.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'trotwood',
    name: 'Trotwood',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45426'],
    highways: ['US-35', 'Salem Avenue', 'Olive Road'],
    landmarks: ['Trotwood-Madison High School', 'Sycamore State Park', 'Madison Township'],
    blurb: 'Trotwood towing and roadside assistance, available 24/7.',
    intro:
      'Trotwood calls run along Salem Avenue and the US-35 corridor west of Dayton. Sycamore State Park and the surrounding township roads account for most of our winch-out work in this area.',
    responseTime: '18-25 minutes',
  },
  {
    slug: 'west-carrollton',
    name: 'West Carrollton',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45449'],
    highways: ['I-75', 'State Route 741', 'Central Avenue'],
    landmarks: ['Great Miami River', 'West Carrollton High School', 'Wilson Park'],
    blurb: 'West Carrollton towing along the I-75 corridor.',
    intro:
      'West Carrollton is compact and sits right on I-75, so our response times here are among the fastest in the Dayton metro. River-adjacent roads occasionally flood, and we handle the recoveries that follow.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'englewood',
    name: 'Englewood',
    metro: 'dayton',
    county: 'Montgomery County',
    zips: ['45322'],
    highways: ['I-70', 'National Road', 'Union Boulevard'],
    landmarks: ['Englewood MetroPark', 'Northmont High School', 'Stillwater River'],
    blurb: 'Englewood towing with direct I-70 coverage.',
    intro:
      'Englewood straddles I-70 northwest of Dayton, and interstate work makes up much of what we do here. The MetroPark roads along the Stillwater River are a common spot for weather-related recoveries.',
    responseTime: '18-25 minutes',
  },

  // --------------------------------------------------------------- Cincinnati
  {
    slug: 'mason',
    name: 'Mason',
    metro: 'cincinnati',
    county: 'Warren County',
    zips: ['45040'],
    highways: ['I-71', 'State Route 741', 'Tylersville Road', 'Mason-Montgomery Road'],
    landmarks: ['Kings Island', 'Great Wolf Lodge', 'Lindner Family Tennis Center'],
    blurb: 'Mason towing, including Kings Island and Tylersville Road.',
    intro:
      'Kings Island alone makes Mason a high-volume summer market for us — a full day in a hot parking lot kills a lot of batteries. We also cover the Tylersville Road corridor and the I-71 interchanges either side of it.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'west-chester',
    name: 'West Chester',
    metro: 'cincinnati',
    county: 'Butler County',
    zips: ['45069', '45011', '45241'],
    highways: ['I-75', 'Tylersville Road', 'Union Centre Boulevard', 'Cincinnati-Dayton Road'],
    landmarks: ['Union Centre', 'Streets of West Chester', 'Voice of America MetroPark'],
    blurb: 'West Chester towing along one of Ohio busiest I-75 stretches.',
    intro:
      'The I-75 corridor through West Chester carries enormous freight volume, so we keep heavy-duty capability available here. Union Centre Boulevard and the surrounding office parks generate most of the passenger-vehicle calls.',
    responseTime: '15-20 minutes',
  },
  {
    slug: 'blue-ash',
    name: 'Blue Ash',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45242'],
    highways: ['I-71', 'Reed Hartman Highway', 'Kenwood Road', 'Cornell Road'],
    landmarks: ['Blue Ash Airport site', 'Summit Park', 'Blue Ash Sports Center'],
    blurb: 'Blue Ash towing serving the Reed Hartman business corridor.',
    intro:
      'Blue Ash is dense with office parks along Reed Hartman, which means weekday calls skew toward employees with dead batteries and lockouts. Several buildings have low-clearance garages, and we bring the right truck for them.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'norwood',
    name: 'Norwood',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45212'],
    highways: ['I-71', 'Norwood Lateral', 'Montgomery Road', 'Smith Road'],
    landmarks: ['Rookwood Commons', 'Xavier University', 'Surrey Square'],
    blurb: 'Norwood towing including the Norwood Lateral and Rookwood.',
    intro:
      'The Norwood Lateral is short, busy and has almost no shoulder, so a breakdown there needs clearing fast. Rookwood Commons parking and the Xavier University area account for most of our other Norwood calls.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'sharonville',
    name: 'Sharonville',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45241'],
    highways: ['I-75', 'I-275', 'Reading Road', 'Sharon Road'],
    landmarks: ['Sharonville Convention Center', 'Princeton High School', 'Sharon Woods'],
    blurb: 'Sharonville towing at the I-75 and I-275 junction.',
    intro:
      'Sharonville sits where I-75 meets I-275, one of the highest-traffic interchanges in the region. We stage nearby specifically because interstate calls here cannot wait.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'fairfield',
    name: 'Fairfield',
    metro: 'cincinnati',
    county: 'Butler County',
    zips: ['45014', '45011'],
    highways: ['State Route 4', 'Pleasant Avenue', 'Nilles Road'],
    landmarks: ['Village Green', 'Jungle Jims International Market', 'Fairfield High School'],
    blurb: 'Fairfield towing and roadside assistance across Butler County.',
    intro:
      'Jungle Jims draws visitors from well outside the area, and unfamiliar drivers in a large lot produce a steady stream of lockouts. State Route 4 carries the rest of our Fairfield volume.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'loveland',
    name: 'Loveland',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45140'],
    highways: ['I-275', 'State Route 48', 'Loveland-Madeira Road'],
    landmarks: ['Historic Downtown Loveland', 'Little Miami Scenic Trail', 'Loveland Castle'],
    blurb: 'Loveland towing with coverage along the Little Miami corridor.',
    intro:
      'Loveland has a compact historic downtown with limited parking and a lot of trail traffic on weekends. Roads along the Little Miami River flood periodically, and we handle the recoveries when they do.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'milford',
    name: 'Milford',
    metro: 'cincinnati',
    county: 'Clermont County',
    zips: ['45150'],
    highways: ['I-275', 'State Route 28', 'US-50'],
    landmarks: ['Historic Milford', 'Little Miami River', 'Valley View Nature Preserve'],
    blurb: 'Milford towing serving Clermont County and the I-275 east side.',
    intro:
      'Milford anchors our Clermont County coverage, with State Route 28 and US-50 carrying most traffic. The river valley roads here get slick early in winter, and winch-outs follow.',
    responseTime: '18-25 minutes',
  },
  {
    slug: 'montgomery',
    name: 'Montgomery',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45242', '45249'],
    highways: ['I-71', 'Montgomery Road', 'Ronald Reagan Cross County Highway'],
    landmarks: ['Historic Montgomery', 'Sycamore High School', 'Swaim Park'],
    blurb: 'Montgomery towing with careful handling for higher-value vehicles.',
    intro:
      'Montgomery has a well-preserved historic centre with narrow parking and a lot of newer vehicles. We default to flatbed transport here and route around the Montgomery Road bottleneck when it backs up.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'anderson-township',
    name: 'Anderson Township',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45230', '45244', '45255'],
    highways: ['I-275', 'Beechmont Avenue', 'Five Mile Road'],
    landmarks: ['Anderson Towne Center', 'Riverside Drive', 'Ohio River'],
    blurb: 'Anderson Township towing across the Cincinnati east side.',
    intro:
      'Beechmont Avenue is the spine of Anderson Township and where most of our calls originate. The hillside roads down toward the Ohio River are steep enough that we plan the approach before dispatching.',
    responseTime: '15-22 minutes',
  },
  {
    slug: 'hyde-park',
    name: 'Hyde Park',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45208', '45209'],
    highways: ['Columbia Parkway', 'Erie Avenue', 'Madison Road'],
    landmarks: ['Hyde Park Square', 'Ault Park', 'Cincinnati Observatory'],
    blurb: 'Hyde Park towing with low-clearance and narrow-street equipment.',
    intro:
      'Hyde Park Square parking is tight and many homes have steep, narrow driveways. We bring equipment sized for the street rather than forcing a large wrecker into a space it does not fit.',
    responseTime: '12-18 minutes',
  },
  {
    slug: 'over-the-rhine',
    name: 'Over-the-Rhine',
    metro: 'cincinnati',
    county: 'Hamilton County',
    zips: ['45202'],
    highways: ['I-71', 'Central Parkway', 'Vine Street', 'Liberty Street'],
    landmarks: ['Findlay Market', 'Music Hall', 'Washington Park', 'The Banks'],
    blurb: 'Over-the-Rhine towing built for tight urban streets and garages.',
    intro:
      'Over-the-Rhine is the hardest part of Cincinnati to tow in: one-way streets, tight corners, permit parking and low-clearance garages. We run smaller equipment downtown for exactly this reason.',
    responseTime: '10-18 minutes',
  },
];

export const CITIES_BY_METRO = (metro: Metro) =>
  CITIES.filter((c) => c.metro === metro);

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);

/** Other cities in the same metro, for the "nearby areas" links on each page. */
export const nearbyCities = (city: City, limit = 6) =>
  CITIES.filter((c) => c.metro === city.metro && c.slug !== city.slug).slice(0, limit);
