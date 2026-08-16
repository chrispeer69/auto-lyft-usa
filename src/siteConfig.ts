/**
 * Single place to change the business details that appear all over the site.
 * Edit here and every phone number / email / link updates at once.
 */
export const siteConfig = {
  name: 'Auto Lyft USA',
  /**
   * The canonical origin. Every canonical tag, Open Graph URL and sitemap
   * entry is built from this, so it must match the domain the site is actually
   * served from — pointing it at a domain you do not control hands your search
   * ranking to that domain.
   */
  origin: 'https://autolyftusa.online',
  phone: '614-633-7935',
  phoneHref: 'tel:614-633-7935',
  email: 'info@autolyftusa.com',
  emailHref: 'mailto:info@autolyftusa.com',
  serviceArea: 'Columbus, Dayton & Cincinnati metro areas (50 mile radius)',
  tagline: '24/7 Towing & Roadside Assistance in Columbus, Dayton & Cincinnati',
  /**
   * Set these to your real profile URLs. Any entry left as null is hidden
   * rather than rendered as a dead link.
   */
  social: {
    facebook: null as string | null,
    twitter: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export const absoluteUrl = (path: string) =>
  `${siteConfig.origin}${path.startsWith('/') ? path : `/${path}`}`;
