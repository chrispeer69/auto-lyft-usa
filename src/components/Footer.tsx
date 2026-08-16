import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { SERVICES } from '../data/services';
import { CITIES_BY_METRO, METROS } from '../data/cities';

const SOCIAL = [
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
].filter((s): s is typeof s & { href: string } => Boolean(s.href));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/auto_logo.jpg"
                alt="Auto Lyft USA"
                width={229}
                height={146}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Ohio's most trusted 24/7 towing and roadside assistance service
              serving Columbus, Dayton, and Cincinnati metros.
            </p>
            {SOCIAL.length > 0 && (
              <div className="flex space-x-4">
                {SOCIAL.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-700 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/service-areas', label: 'Service Areas' },
                { to: '/auto-repair', label: 'Auto Repair' },
                { to: '/vip-program', label: 'VIP Program' },
                { to: '/blog', label: 'Blog' },
                { to: '/quote', label: 'Get a Quote' },
                { to: '/sos', label: 'Emergency SOS' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Our Services</h2>
            <ul className="space-y-2">
              {SERVICES.slice(0, 10).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Contact Info</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">24/7 Emergency</div>
                  <a
                    href={siteConfig.phoneHref}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a
                    href={siteConfig.emailHref}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Coverage</div>
                  <div className="text-gray-400">
                    Columbus, Dayton &amp; Cincinnati Metro Areas
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service-area link block — helps both visitors and search engines
            find the city pages. */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h2 className="text-lg font-bold mb-4">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['columbus', 'dayton', 'cincinnati'] as const).map((metro) => (
              <div key={metro}>
                <div className="text-sm font-semibold text-gray-300 mb-2">
                  {METROS[metro].label}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {CITIES_BY_METRO(metro).map((city) => (
                    <Link
                      key={city.slug}
                      to={`/service-area/${city.slug}`}
                      className="text-sm text-gray-500 hover:text-red-700 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Auto Lyft USA. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
