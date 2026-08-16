import Seo, { businessSchema } from '../components/Seo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ServiceAreas from '../components/ServiceAreas';
import Fleet from '../components/Fleet';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { siteConfig } from '../siteConfig';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const schema = [
    {
      ...businessSchema,
      description:
        '24/7 emergency towing and roadside assistance across Columbus, Dayton and Cincinnati, Ohio.',
      areaServed: ['Columbus', 'Dayton', 'Cincinnati'].map((name) => ({
        '@type': 'City',
        name,
        addressRegion: 'OH',
        addressCountry: 'US',
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '12000',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Towing and Roadside Services',
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.origin,
    },
  ];

  return (
    <>
      <Seo
        title={`Auto Lyft USA - 24/7 Towing Columbus, Dayton & Cincinnati Ohio`}
        description={`Fast, reliable 24/7 towing and roadside assistance in Columbus, Dayton & Cincinnati, Ohio. Emergency towing, jump starts, lockout service & more. Serving ${CITIES.length}+ cities. Call ${siteConfig.phone} now!`}
        path="/"
        schema={schema}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <ServiceAreas />
      <Fleet />
      <Testimonials />
      <Contact />
    </>
  );
}
