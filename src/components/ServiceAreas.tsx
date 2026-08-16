import { MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const AREAS = [
  {
    city: 'Columbus Metro',
    description: 'Serving Columbus and surrounding areas within 50 miles',
    coverage: '50 mile radius',
    neighborhoods: [
      'Downtown Columbus',
      'Short North',
      'German Village',
      'Clintonville',
      'Upper Arlington',
      'Westerville',
      'Dublin',
      'Grove City',
    ],
    color: 'from-blue-700 to-blue-900',
  },
  {
    city: 'Dayton Metro',
    description: 'Serving Dayton and surrounding areas within 50 miles',
    coverage: '50 mile radius',
    neighborhoods: [
      'Downtown Dayton',
      'Oakwood',
      'Kettering',
      'Beavercreek',
      'Centerville',
      'Huber Heights',
      'Fairborn',
      'Miamisburg',
    ],
    color: 'from-red-700 to-red-600',
  },
  {
    city: 'Cincinnati Metro',
    description: 'Serving Cincinnati and surrounding areas within 50 miles',
    coverage: '50 mile radius',
    neighborhoods: [
      'Downtown Cincinnati',
      'Over-the-Rhine',
      'Hyde Park',
      'Mount Adams',
      'West Chester',
      'Mason',
      'Blue Ash',
      'Norwood',
    ],
    color: 'from-blue-700 to-blue-900',
  },
];

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
          {AREAS.map((area) => (
            <div
              key={area.city}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} text-white rounded-2xl mb-6`}
              >
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {area.city}
              </h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="mb-4 px-4 py-2 bg-slate-50 rounded-lg">
                <div className="text-sm font-semibold text-slate-900">
                  Coverage: {area.coverage}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Areas We Serve:
                </div>
                {area.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-2" />
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
