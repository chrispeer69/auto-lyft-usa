import { Link, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Phone } from 'lucide-react';
import Seo, { breadcrumbSchema, businessSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { CallToAction, PageHero, Section } from '../components/ui';
import { getRepairService, REPAIR_SERVICES } from '../data/autoRepair';
import { absoluteUrl, siteConfig } from '../siteConfig';
import NotFound from './NotFound';

export default function AutoRepairPage() {
  const { slug } = useParams();
  const repair = slug ? getRepairService(slug) : undefined;

  if (!repair) return <NotFound />;

  const path = `/auto-repair/${repair.slug}`;
  const others = REPAIR_SERVICES.filter((r) => r.slug !== repair.slug).slice(0, 6);

  return (
    <>
      <Seo
        title={seoTitle(`${repair.title} | Auto Lyft USA Ohio`)}
        description={seoDescription(
          `${repair.description} Tow and repair in one call. ${siteConfig.phone}.`
        )}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Auto Repair', path: '/auto-repair' },
            { name: repair.title, path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: repair.title,
            description: repair.description,
            url: absoluteUrl(path),
            provider: businessSchema,
          },
        ]}
      />

      <PageHero
        eyebrow="Auto Repair"
        title={repair.title}
        subtitle={repair.description}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Auto Repair', path: '/auto-repair' },
          { name: repair.title, path },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Symptoms you might notice
            </h2>
            <ul className="space-y-3 mb-10">
              {repair.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-700 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-700 text-lg">{symptom}</span>
                </li>
              ))}
            </ul>

            {repair.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {repair.towRecommended && (
              <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-900 mb-1">
                    Do not drive it if you can avoid it
                  </h3>
                  <p className="text-red-800">
                    This is one of the faults where driving to the shop usually
                    costs more than the tow does. Call us and we will bring it
                    in safely.
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Tow it in</h2>
              <p className="text-red-50 mb-4">
                One call arranges the tow and the shop.
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
                Other repair services
              </h2>
              <div className="space-y-1">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    to={`/auto-repair/${other.slug}`}
                    className="block text-sm text-gray-600 hover:text-red-700 transition-colors"
                  >
                    {other.title}
                  </Link>
                ))}
              </div>
              <Link
                to="/auto-repair"
                className="mt-4 inline-flex items-center text-sm font-semibold text-red-700"
              >
                All repair services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <CallToAction
        title="Need It Towed to a Shop?"
        body="Tell us the symptoms and where you are. We will get it to a garage that can actually fix it."
      />
    </>
  );
}
