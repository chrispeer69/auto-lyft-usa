import { useEffect } from 'react';
import { absoluteUrl, siteConfig } from '../siteConfig';
import { isServer, setHead } from '../seoHead';

type SeoProps = {
  title: string;
  description: string;
  /** Path only, e.g. "/services/emergency-towing". */
  path: string;
  /** Optional JSON-LD structured data for this page. */
  schema?: object | object[];
  noindex?: boolean;
};

/**
 * Sets the per-page title, meta description, canonical URL and structured
 * data. The prerender script (scripts/prerender.mjs) reads the same values at
 * build time and bakes them into each page's static HTML, so search engines
 * see them without executing JavaScript.
 */
const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) ?? [];
    if (name) {
      el.setAttribute(selector.includes('property=') ? 'property' : 'name', name);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

export default function Seo({
  title,
  description,
  path,
  schema,
  noindex = false,
}: SeoProps) {
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // During prerendering there is no DOM to mutate, so hand the values to the
  // collector instead and let the build script write them into the HTML.
  if (isServer) {
    setHead({
      title,
      description,
      canonical: absoluteUrl(path),
      robots,
      schema,
    });
  }

  useEffect(() => {
    const url = absoluteUrl(path);

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', robots);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Replace any page-specific structured data from the previous route.
    document.head
      .querySelectorAll('script[data-page-schema]')
      .forEach((el) => el.remove());

    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageSchema = 'true';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, path, schema, robots]);

  return null;
}

/** Breadcrumb structured data, used on every inner page. */
export const breadcrumbSchema = (
  trail: { name: string; path: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

/** The business itself — reused across service and city pages. */
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TowingService',
  name: siteConfig.name,
  url: siteConfig.origin,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
