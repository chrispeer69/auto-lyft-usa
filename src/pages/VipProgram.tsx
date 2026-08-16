import { Link } from 'react-router-dom';
import { Check, Crown, Phone, Zap } from 'lucide-react';
import Seo, { breadcrumbSchema, faqSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { CallToAction, FaqList, PageHero, Section } from '../components/ui';
import { siteConfig } from '../siteConfig';

const TIERS = [
  {
    name: 'Driver',
    price: '$9',
    cadence: 'per month',
    summary: 'For a single personal vehicle.',
    features: [
      'Priority dispatch ahead of standard calls',
      '15% off every tow',
      'Two free jump starts or lockouts per year',
      'No call-out surcharge overnight or on holidays',
    ],
    highlight: false,
  },
  {
    name: 'Household',
    price: '$19',
    cadence: 'per month',
    summary: 'Covers up to four vehicles at one address.',
    features: [
      'Everything in Driver, for up to 4 vehicles',
      '20% off every tow',
      'Four free jump starts or lockouts per year',
      'Free tire change with your own spare',
      'Covers any driver of a registered vehicle',
    ],
    highlight: true,
  },
  {
    name: 'Business Fleet',
    price: 'Custom',
    cadence: 'quoted per fleet',
    summary: 'For companies running three or more vehicles.',
    features: [
      'Highest dispatch priority',
      'Negotiated per-incident rates',
      'Consolidated monthly invoicing',
      'Named account contact',
      'Incident reporting for your records',
    ],
    highlight: false,
  },
];

const FAQS = [
  {
    q: 'Do I need to be a member to get service?',
    a: 'No. We serve anyone who calls, member or not. The VIP program simply lowers your rates and moves you up the dispatch queue.',
  },
  {
    q: 'How does priority dispatch actually work?',
    a: 'When several calls come in at once, members are assigned the next available truck ahead of non-members at a similar distance. It does not override genuine emergencies — an injury accident always comes first.',
  },
  {
    q: 'Can I cancel at any time?',
    a: 'Yes. Membership is month to month with no minimum term and no cancellation fee.',
  },
  {
    q: 'Does membership cover me outside Ohio?',
    a: 'The discounts and priority apply within our Columbus, Dayton and Cincinnati service areas. Long-distance tows starting inside our coverage are included at the member rate.',
  },
];

export default function VipProgram() {
  return (
    <>
      <Seo
        title={seoTitle("VIP Roadside Membership | Auto Lyft USA Ohio")}
        description={seoDescription(
          `Priority dispatch and discounted towing across Columbus, Dayton and Cincinnati from $9/month. No contract. Call ${siteConfig.phone}.`
        )}
        path="/vip-program"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'VIP Program', path: '/vip-program' },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <PageHero
        eyebrow="VIP Program"
        title="Priority Dispatch, Lower Rates, No Contract"
        subtitle="Membership moves you to the front of the queue and cuts the cost of every call. Month to month — cancel whenever you like."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'VIP Program', path: '/vip-program' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border-2 flex flex-col ${
                tier.highlight
                  ? 'border-red-700 bg-white shadow-2xl relative'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                {tier.highlight ? (
                  <Crown className="w-8 h-8 text-red-700" />
                ) : (
                  <Zap className="w-8 h-8 text-slate-900" />
                )}
                <h2 className="text-2xl font-bold text-gray-900">{tier.name}</h2>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="text-gray-500 ml-2">{tier.cadence}</span>
              </div>
              <p className="text-gray-600 mb-6">{tier.summary}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.phoneHref}
                className={`block text-center px-6 py-3 rounded-full font-bold transition-colors ${
                  tier.highlight
                    ? 'bg-red-700 text-white hover:bg-red-800'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Call to Join
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
          Pricing shown is indicative. Confirm current rates and terms when you
          call — we will not sign you up to anything on this page.
        </p>
      </Section>

      <Section tint="gray" title="How Membership Works">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: '1',
              title: 'Call and register',
              body: `Ring ${siteConfig.phone} and give us your vehicles. It takes a few minutes and there is no paperwork to post.`,
            },
            {
              step: '2',
              title: 'You are in the system',
              body: 'Your plates are flagged on our dispatch board, so when you call we already know who you are and what you drive.',
            },
            {
              step: '3',
              title: 'Call as normal',
              body: 'Same number, same 24/7 service — you just get seen sooner and billed less.',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-14 h-14 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <FaqList faqs={FAQS} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Phone className="w-12 h-12 text-red-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Running a business fleet?
          </h2>
          <p className="text-gray-600 mb-6">
            Fleet accounts are quoted individually based on vehicle count and
            coverage area.
          </p>
          <Link
            to="/services/fleet-contract-towing"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-red-700 transition-colors"
          >
            Read about fleet &amp; contract towing →
          </Link>
        </div>
      </section>

      <CallToAction
        title="Join the VIP Program"
        body="One call sets it up. No contract, no minimum term."
      />
    </>
  );
}
