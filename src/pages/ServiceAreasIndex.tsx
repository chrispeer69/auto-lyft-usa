import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { CallToAction, PageHero, Section } from '../components/ui';
import { CITIES, CITIES_BY_METRO, METROS } from '../data/cities';
import { siteConfig } from '../siteConfig';

export default function ServiceAreasIndex() {
  return (
    <>
      <Seo
        title="Service Areas | Towing in Columbus, Dayton & Cincinnati Ohio"
        description={`Auto Lyft USA serves ${CITIES.length} cities across the Columbus, Dayton and Cincinnati metros with 24/7 towing and roadside assistance. Find your city and call ${siteConfig.phone}.`}
        path="/service-areas"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ])}
      />

      <PageHero
        eyebrow="Service Coverage"
        title="Where We Tow in Ohio"
        subtitle={`${CITIES.length} cities across three metros, each with its own crews, response times and local knowledge. Find yours below.`}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Service Areas', path: '/service-areas' },
        ]}
      />

      {(['columbus', 'dayton', 'cincinnati'] as const).map((metro, i) => {
        const cities = CITIES_BY_METRO(metro);
        return (
          <Section
            key={metro}
            tint={i % 2 === 0 ? 'white' : 'gray'}
            title={`${METROS[metro].label} — ${cities.length} Cities`}
            intro={`Covering ${METROS[metro].hub}.`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-area/${city.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all flex gap-4"
                >
                  <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{city.blurb}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {city.county} · {city.responseTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <CallToAction
        title="Not Sure If We Cover You?"
        body="Our coverage extends roughly 50 miles around each metro. Call and we will tell you straight away."
      />
    </>
  );
}
