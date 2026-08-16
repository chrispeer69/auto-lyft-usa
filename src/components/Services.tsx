import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { FEATURED_SERVICES } from '../data/services';
import { siteConfig } from '../siteConfig';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Roadside Assistance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency towing to roadside repairs, we provide comprehensive
            services to keep you safe and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-200 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-red-700 group-hover:gap-1 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-slate-900 font-bold hover:text-red-700 transition-colors"
          >
            <span>View all services we offer</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-700 to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl mb-6 text-red-50">
            Our dispatch team is standing by 24/7 to help you. Average response
            time: 15 minutes.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
          >
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
