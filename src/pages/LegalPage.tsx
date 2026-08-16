import Seo, { breadcrumbSchema } from '../components/Seo';
import { title as seoTitle, description as seoDescription } from '../lib/seoText';
import { PageHero } from '../components/ui';
import { siteConfig } from '../siteConfig';

type Kind = 'privacy' | 'terms' | 'accessibility';

const CONTENT: Record<
  Kind,
  {
    path: string;
    name: string;
    title: string;
    subtitle: string;
    /** Longer than the subtitle so search snippets are not thin. */
    metaDescription: string;
    sections: { h: string; p: string[] }[];
  }
> = {
  privacy: {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    subtitle: 'What we collect when you contact us, and what we do with it.',
    metaDescription:
      'How Auto Lyft USA collects, uses and protects your information when you request towing or roadside assistance in Ohio. We do not sell your personal data.',
    sections: [
      {
        h: 'What we collect',
        p: [
          'When you submit the request form on this site we collect the name, email address, phone number, location, service type and any message you provide. When you call us we record the details needed to dispatch a truck and to bill for the work.',
          'This site does not use advertising trackers or third-party analytics cookies.',
        ],
      },
      {
        h: 'How we use it',
        p: [
          'We use your information solely to respond to your request, dispatch service, arrange payment, and follow up about the work performed.',
          'We do not sell your personal information, and we do not share it with third parties for their own marketing.',
        ],
      },
      {
        h: 'Who we share it with',
        p: [
          'We share information only where it is necessary to carry out the service: with the driver dispatched to you, with a repair shop or storage facility you direct us to, with your insurance company where you have asked us to coordinate a claim, and with law enforcement where a tow is carried out at their direction or where we are legally required to do so.',
        ],
      },
      {
        h: 'How long we keep it',
        p: [
          'Service records are retained for as long as needed for business, accounting and legal purposes. Form submissions that do not result in a job are removed periodically.',
        ],
      },
      {
        h: 'Your choices',
        p: [
          `You can ask us what information we hold about you, ask for it to be corrected, or ask for it to be deleted where we are not required to keep it. Contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
        ],
      },
      {
        h: 'Changes to this policy',
        p: [
          'If this policy changes materially we will update the effective date below. Continued use of the site after a change indicates acceptance of the revised policy.',
        ],
      },
    ],
  },
  terms: {
    path: '/terms-of-service',
    name: 'Terms of Service',
    title: 'Terms of Service',
    subtitle: 'The terms that apply when you request or receive our services.',
    metaDescription:
      'Terms of service for Auto Lyft USA towing, recovery and roadside assistance across Columbus, Dayton and Cincinnati — pricing, liability and your responsibilities.',
    sections: [
      {
        h: 'Services',
        p: [
          'Auto Lyft USA provides towing, recovery and roadside assistance in the Columbus, Dayton and Cincinnati metropolitan areas of Ohio. Availability is subject to demand, weather, road conditions and equipment.',
          'Response times quoted anywhere on this site are estimates based on typical conditions. They are not guarantees.',
        ],
      },
      {
        h: 'Pricing and payment',
        p: [
          'Charges are quoted before service begins wherever practical. Final charges reflect the work actually performed, including any recovery, winching, specialised equipment or waiting time required.',
          'Payment is due on completion unless you hold an approved account with us. Vehicles placed into storage accrue daily storage fees until collected.',
        ],
      },
      {
        h: 'Your responsibilities',
        p: [
          'You confirm that you are the owner of the vehicle or are authorised to request service for it. You are responsible for removing personal property before the vehicle is transported, and for disclosing any condition affecting safe towing — including modifications, mechanical damage, or hazardous contents.',
        ],
      },
      {
        h: 'Liability',
        p: [
          'We carry insurance appropriate to the services we provide and will make it available on request. We are not liable for pre-existing damage, for damage arising from an undisclosed vehicle condition, or for loss of personal property left in a vehicle.',
          'Any claim regarding damage must be raised with us before the vehicle leaves our custody or as soon as reasonably possible thereafter.',
        ],
      },
      {
        h: 'Private property and law enforcement tows',
        p: [
          'Removals carried out at the direction of a property owner or a law enforcement agency are performed in accordance with applicable Ohio law. Release of such vehicles may require authorisation from the party that ordered the tow.',
        ],
      },
      {
        h: 'Governing law',
        p: [
          'These terms are governed by the laws of the State of Ohio.',
        ],
      },
    ],
  },
  accessibility: {
    path: '/accessibility',
    name: 'Accessibility',
    title: 'Accessibility Statement',
    subtitle: 'We want this site to be usable by everyone who needs it.',
    metaDescription:
      'Auto Lyft USA aims to meet WCAG 2.1 Level AA so anyone can reach help in an emergency. Read what we have done and how to report an accessibility problem.',
    sections: [
      {
        h: 'Our commitment',
        p: [
          'People often reach this site in an emergency, sometimes at night and under stress. It needs to work for everyone, including people using screen readers, keyboard navigation or screen magnification.',
          'We aim to meet the WCAG 2.1 Level AA standard.',
        ],
      },
      {
        h: 'What we have done',
        p: [
          'The site uses semantic headings and landmarks, provides text alternatives for meaningful images, supports full keyboard navigation with visible focus, and maintains colour contrast that meets AA thresholds for body text.',
          'Every page can be operated without a mouse, and the phone number is reachable within one keyboard tab sequence from the top of any page.',
        ],
      },
      {
        h: 'Known limitations',
        p: [
          'Some third-party images are hosted externally and may load slowly on constrained connections. We are working to replace them with our own optimised photography.',
        ],
      },
      {
        h: 'Telling us about a problem',
        p: [
          `If any part of this site prevents you from getting help, please tell us — call ${siteConfig.phone} or email ${siteConfig.email} and we will fix it and assist you directly in the meantime.`,
        ],
      },
    ],
  },
};

export default function LegalPage({ kind }: { kind: Kind }) {
  const content = CONTENT[kind];

  return (
    <>
      <Seo
        title={seoTitle(`${content.title} | Auto Lyft USA`)}
        description={seoDescription(content.metaDescription)}
        path={content.path}
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: content.name, path: content.path },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        title={content.title}
        subtitle={content.subtitle}
        trail={[
          { name: 'Home', path: '/' },
          { name: content.name, path: content.path },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.sections.map((section) => (
            <div key={section.h} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.h}
              </h2>
              {section.p.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg text-gray-600 mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
            This page is provided for general information and is not legal
            advice. Have your attorney review it before you rely on it.
          </p>
        </div>
      </section>
    </>
  );
}
