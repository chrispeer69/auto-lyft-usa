import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo, { breadcrumbSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { CallToAction, PageHero, Section } from '../components/ui';
import { REPAIR_SERVICES } from '../data/autoRepair';
import { siteConfig } from '../siteConfig';

export default function AutoRepairIndex() {
  return (
    <>
      <Seo
        title={seoTitle("Auto Repair | Tow & Repair in One Call | Auto Lyft USA")}
        description={seoDescription(
          `We tow your vehicle and connect you with vetted repair shops across Columbus, Dayton and Cincinnati. Call ${siteConfig.phone}.`
        )}
        path="/auto-repair"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Auto Repair', path: '/auto-repair' },
        ])}
      />

      <PageHero
        eyebrow="Auto Repair"
        title="Tow and Repair, Arranged in One Call"
        subtitle="We tow your vehicle and hand it to a vetted repair partner in your metro, so you make one phone call instead of three."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Auto Repair', path: '/auto-repair' },
        ]}
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Auto Lyft USA is a towing and roadside company — the repairs
            themselves are carried out by independent shops we have worked with
            for years across Columbus, Dayton and Cincinnati. When you call, we
            can tow your vehicle straight to a partner shop, or to any garage
            you prefer. The choice is always yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REPAIR_SERVICES.map((repair) => {
            const Icon = repair.icon;
            return (
              <Link
                key={repair.slug}
                to={`/auto-repair/${repair.slug}`}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {repair.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                  {repair.description}
                </p>
                {repair.towRecommended && (
                  <span className="inline-block mb-3 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-semibold self-start">
                    Usually needs a tow
                  </span>
                )}
                <span className="inline-flex items-center text-sm font-semibold text-red-700">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CallToAction
        title="Not Sure If You Should Drive It?"
        body="Describe the symptoms and we will tell you honestly whether it is safe to drive or whether it needs a tow."
      />
    </>
  );
}
