import { Link } from 'react-router-dom';
import { AlertTriangle, Phone, ShieldAlert, TriangleAlert } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { Section } from '../components/ui';
import { siteConfig } from '../siteConfig';
import { FEATURED_SERVICES } from '../data/services';

const STEPS = [
  {
    title: 'Get yourself somewhere safe first',
    body: 'Move the vehicle onto the shoulder or off the carriageway if it still drives. If it does not, and traffic is heavy, get out on the passenger side and wait behind a barrier — not in the vehicle and not on the traffic side.',
  },
  {
    title: 'Make yourself visible',
    body: 'Hazard lights on immediately. If you have a reflective triangle, place it well back up the road — further than feels necessary, especially over a crest or around a bend.',
  },
  {
    title: 'Work out exactly where you are',
    body: 'Nearest mile marker, exit number or cross street. On an interstate, note the direction of travel too. This is the single biggest factor in how fast we reach you.',
  },
  {
    title: 'Call us',
    body: `Ring ${siteConfig.phone}. Tell us your location, what you drive, what happened and whether anyone is hurt. We will give you an arrival estimate before you hang up.`,
  },
];

export default function Sos() {
  return (
    <>
      <Seo
        title={seoTitle("Emergency SOS | Stranded? Do This Now | Auto Lyft USA")}
        description={seoDescription(
          `Broken down in Ohio? Follow these steps to stay safe, then call ${siteConfig.phone} for 24/7 emergency towing.`
        )}
        path="/sos"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Emergency SOS', path: '/sos' },
        ])}
      />

      {/* Deliberately loud and simple — this page is read by people in trouble. */}
      <section className="bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <ShieldAlert className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Stranded? Call Now.
          </h1>
          <p className="text-xl text-red-50 mb-8">
            We answer 24 hours a day, every day of the year.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-10 py-6 rounded-full hover:bg-gray-100 transition-all font-bold text-3xl shadow-2xl hover:scale-105"
          >
            <Phone className="w-8 h-8" />
            {siteConfig.phone}
          </a>
          <p className="mt-8 text-red-100 flex items-center justify-center gap-2 text-lg">
            <TriangleAlert className="w-5 h-5" />
            If anyone is injured, call 911 first.
          </p>
        </div>
      </section>

      <Section title="While You Wait">
        <div className="max-w-3xl mx-auto space-y-6">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tint="gray" title="Tell Us Which Of These It Is">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-900">
                  {service.short}
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-900 mb-1">
                Never stand behind or in front of a disabled vehicle
              </h2>
              <p className="text-amber-800">
                Most roadside fatalities involve someone struck while standing
                near their own car. Wait behind a barrier, well away from the
                traffic side, until our truck arrives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
