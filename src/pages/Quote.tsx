import Seo, { breadcrumbSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { PageHero, Section } from '../components/ui';
import Contact from '../components/Contact';
import { siteConfig } from '../siteConfig';

export default function Quote() {
  return (
    <>
      <Seo
        title={seoTitle("Request Service or a Quote | Auto Lyft USA")}
        description={seoDescription(
          `Request non-emergency towing or a quote in Columbus, Dayton or Cincinnati. For emergencies call ${siteConfig.phone} — we answer 24/7.`
        )}
        path="/quote"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Get a Quote', path: '/quote' },
        ])}
      />

      <PageHero
        eyebrow="Get a Quote"
        title="Request Service or a Price"
        subtitle="For anything urgent, call — it is always faster. Use this form for scheduled tows, transport quotes and fleet enquiries."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Get a Quote', path: '/quote' },
        ]}
      />

      <Section tint="gray">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What affects the price
          </h2>
          <p className="text-gray-600">
            Distance, vehicle size, whether the vehicle rolls, and whether any
            recovery work is needed. Tell us as much as you can below and we
            will come back with a firm number rather than a range.
          </p>
        </div>
      </Section>

      <Contact />
    </>
  );
}
