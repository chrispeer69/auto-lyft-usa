import { Link, useParams } from 'react-router-dom';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import Seo, {
  breadcrumbSchema,
  businessSchema,
  faqSchema,
} from '../components/Seo';
import { CallToAction, FaqList, PageHero, Section } from '../components/ui';
import { getCity, METROS, nearbyCities } from '../data/cities';
import { FEATURED_SERVICES, SERVICES } from '../data/services';
import { absoluteUrl, siteConfig } from '../siteConfig';
import NotFound from './NotFound';

export default function CityPage() {
  const { slug } = useParams();
  const city = slug ? getCity(slug) : undefined;

  if (!city) return <NotFound />;

  const path = `/service-area/${city.slug}`;
  const metro = METROS[city.metro];
  const nearby = nearbyCities(city, 8);

  const faqs = [
    {
      q: `How quickly can you reach me in ${city.name}?`,
      a: `Our typical response time in ${city.name} is ${city.responseTime}, depending on traffic and where exactly you are. Calls on ${city.highways[0]} are treated as priority because roadside breakdowns there are the most dangerous.`,
    },
    {
      q: `Do you tow in ${city.name} at night and on holidays?`,
      a: `Yes. We dispatch 24 hours a day, 365 days a year, including holidays. There is no separate after-hours number — call ${siteConfig.phone} at any hour.`,
    },
    {
      q: `What areas of ${city.name} do you cover?`,
      a: `All of ${city.name} and the surrounding ${city.county} area, including ${city.landmarks.slice(0, 3).join(', ')} and the ${city.highways.slice(0, 2).join(' and ')} corridors.`,
    },
    {
      q: `Can you tow my all-wheel-drive vehicle in ${city.name}?`,
      a: 'Yes. All-wheel-drive vehicles go on a flatbed so all four wheels are off the road — towing AWD with two wheels down can damage the drivetrain. Mention your vehicle when you call and we will send the right truck.',
    },
  ];

  return (
    <>
      <Seo
        title={`Towing in ${city.name}, OH | 24/7 Tow Truck | Auto Lyft USA`}
        description={`${city.blurb} Response in ${city.responseTime}. Emergency towing, jump starts, lockouts and winch outs in ${city.name}, ${city.county}. Call ${siteConfig.phone}.`}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
            { name: city.name, path },
          ]),
          {
            ...businessSchema,
            name: `${siteConfig.name} — ${city.name}`,
            url: absoluteUrl(path),
            description: city.blurb,
            areaServed: {
              '@type': 'City',
              name: city.name,
              addressRegion: 'OH',
              addressCountry: 'US',
            },
          },
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow={metro.label}
        title={`24/7 Towing & Roadside Assistance in ${city.name}, Ohio`}
        subtitle={city.blurb}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
          { name: city.name, path },
        ]}
      />

      {/* At-a-glance facts */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: 'Response Time', value: city.responseTime },
              { icon: MapPin, label: 'County', value: city.county },
              {
                icon: Navigation,
                label: 'Main Routes',
                value: city.highways.slice(0, 2).join(', '),
              },
              { icon: Phone, label: 'Availability', value: '24/7/365' },
            ].map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-start gap-3">
                  <Icon className="w-6 h-6 text-red-700 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                      {fact.label}
                    </div>
                    <div className="font-bold text-gray-900">{fact.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Local Towing in {city.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {city.intro}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We know the roads here — {city.highways.join(', ')} — and the
              places people actually break down, from {city.landmarks[0]} to{' '}
              {city.landmarks[city.landmarks.length - 1]}. That local knowledge
              is what keeps our {city.name} response times at{' '}
              {city.responseTime} rather than the hour you might wait for a
              dispatcher three counties away.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Areas and landmarks we cover
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {city.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-medium"
                >
                  {landmark}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ZIP codes served
            </h3>
            <p className="text-gray-600">
              {city.zips.join(' · ')} and surrounding {city.county} addresses.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">
                {city.name} Emergency Line
              </h2>
              <p className="text-red-50 mb-4">
                Average arrival {city.responseTime}.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="text-2xl font-bold hover:text-red-100 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                Nearby areas
              </h2>
              <div className="space-y-1">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/service-area/${n.slug}`}
                    className="block text-sm text-gray-600 hover:text-red-700 transition-colors"
                  >
                    Towing in {n.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        tint="gray"
        title={`Our Services in ${city.name}`}
        intro={`Every service we offer is available in ${city.name}, 24 hours a day.`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {service.short} in {city.name}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-red-700 transition-colors"
          >
            View all {SERVICES.length} services →
          </Link>
        </div>
      </Section>

      <FaqList faqs={faqs} />

      <CallToAction
        title={`Stranded in ${city.name}?`}
        body={`Call now — our average arrival time in ${city.name} is ${city.responseTime}.`}
      />
    </>
  );
}
