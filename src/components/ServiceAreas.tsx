import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { CITIES_BY_METRO, METROS } from '../data/cities';
import { siteConfig } from '../siteConfig';

const METRO_COLORS: Record<string, string> = {
  columbus: 'from-blue-700 to-blue-900',
  dayton: 'from-red-700 to-red-600',
  cincinnati: 'from-blue-700 to-blue-900',
};

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Service Coverage
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proudly Serving Ohio's Major Metro Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable towing and roadside assistance across Columbus,
            Dayton, and Cincinnati metro areas. Local experts who know your roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {(['columbus', 'dayton', 'cincinnati'] as const).map((metro) => {
            const cities = CITIES_BY_METRO(metro);
            return (
              <div
                key={metro}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${METRO_COLORS[metro]} text-white rounded-2xl mb-6`}
                >
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {METROS[metro].label}
                </h3>
                <p className="text-gray-600 mb-4">
                  Serving {METROS[metro].name} and surrounding areas within 50
                  miles.
                </p>
                <div className="mb-4 px-4 py-2 bg-slate-50 rounded-lg">
                  <div className="text-sm font-semibold text-slate-900">
                    Coverage: 50 mile radius · {cities.length} cities
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    Areas We Serve:
                  </div>
                  {cities.slice(0, 8).map((city) => (
                    <Link
                      key={city.slug}
                      to={`/service-area/${city.slug}`}
                      className="flex items-center text-sm text-gray-600 hover:text-red-700 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-2" />
                      {city.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/service-areas"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-red-700 hover:gap-1 transition-all"
                >
                  All {METROS[metro].name} areas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <Phone className="w-16 h-16 mx-auto mb-6 text-red-400" />
            <h3 className="text-3xl font-bold mb-4">
              Need Service in Your Area?
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're in Columbus, Dayton, or Cincinnati, we're just
              minutes away. Call now for immediate assistance!
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center space-x-2 bg-red-700 text-white px-10 py-5 rounded-full hover:bg-red-800 transition-all font-bold text-xl shadow-2xl hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
