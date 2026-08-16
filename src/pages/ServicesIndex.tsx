import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { CallToAction, PageHero, Section } from '../components/ui';
import { SERVICES } from '../data/services';
import { siteConfig } from '../siteConfig';

export default function ServicesIndex() {
  return (
    <>
      <Seo
        title={`Towing & Roadside Services | Auto Lyft USA Ohio`}
        description={`All ${SERVICES.length} towing and roadside services offered by Auto Lyft USA across Columbus, Dayton and Cincinnati — emergency towing, flatbed, winch outs, lockouts, jump starts and more. Call ${siteConfig.phone}.`}
        path="/services"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      <PageHero
        eyebrow="Our Services"
        title="Towing & Roadside Services Across Ohio"
        subtitle={`${SERVICES.length} services covering everything from a dead battery in a parking lot to heavy-duty recovery on the interstate — available 24 hours a day in all three metros.`}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      />

      <Section tint="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-red-700">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
