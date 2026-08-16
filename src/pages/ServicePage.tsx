import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import Seo, {
  breadcrumbSchema,
  businessSchema,
  faqSchema,
} from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { CallToAction, FaqList, PageHero, Section } from '../components/ui';
import { getService, SERVICES } from '../data/services';
import { CITIES_BY_METRO, METROS } from '../data/cities';
import { siteConfig, absoluteUrl } from '../siteConfig';
import NotFound from './NotFound';

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <>
      <Seo
        title={seoTitle(`${service.short} in Ohio | Auto Lyft USA`)}
        description={seoDescription(
          `${service.description} 24/7 across Ohio. Call ${siteConfig.phone}.`
        )}
        path={path}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            url: absoluteUrl(path),
            provider: businessSchema,
            areaServed: ['Columbus', 'Dayton', 'Cincinnati'].map((name) => ({
              '@type': 'City',
              name,
              addressRegion: 'OH',
            })),
          },
          ...(service.faqs.length ? [faqSchema(service.faqs)] : []),
        ]}
      />

      <PageHero
        eyebrow="Service"
        title={`${service.title} in Columbus, Dayton & Cincinnati`}
        subtitle={service.description}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {service.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What to do while you wait
            </h2>
            <ul className="space-y-3">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Need this now?</h2>
              <p className="text-red-50 mb-4">
                We dispatch 24 hours a day, every day of the year.
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
                What's included
              </h2>
              <ul className="space-y-2">
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
              <Link
                to="/quote"
                className="mt-6 block text-center bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-colors font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <FaqList faqs={service.faqs} />

      <Section
        tint="gray"
        title={`${service.title} Near You`}
        intro="We run this service across every city in our coverage area. Pick yours for local response times and detail."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(['columbus', 'dayton', 'cincinnati'] as const).map((metro) => (
            <div key={metro} className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">
                {METROS[metro].label}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {CITIES_BY_METRO(metro).map((city) => (
                  <Link
                    key={city.slug}
                    to={`/service-area/${city.slug}`}
                    className="text-sm text-gray-600 hover:text-red-700 transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Other Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((other) => {
            const Icon = other.icon;
            return (
              <Link
                key={other.slug}
                to={`/services/${other.slug}`}
                className="group flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-lg border border-gray-100 transition-all"
              >
                <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-gray-900">
                  {other.short}
                </span>
                <ArrowRight className="w-4 h-4 text-red-700 ml-auto" />
              </Link>
            );
          })}
        </div>
      </Section>

      <CallToAction title={`Need ${service.title}?`} />
    </>
  );
}
