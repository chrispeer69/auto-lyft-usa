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

type FooterProps = {
  scrollToSection: (id: string) => void;
};

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'areas', label: 'Service Areas' },
  { id: 'contact', label: 'Contact' },
];

const SERVICE_LIST = [
  'Emergency Towing',
  'Jump Start Service',
  'Lockout Assistance',
  'Fuel Delivery',
  'Tire Change',
  'Accident Recovery',
  'Winch Out Service',
  'Long Distance Towing',
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
];

export default function Footer({ scrollToSection }: FooterProps) {
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
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Ohio's most trusted 24/7 towing and roadside assistance service
              serving Columbus, Dayton, and Cincinnati metros.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-red-700 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              {SERVICE_LIST.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
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

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Auto Lyft USA. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-700 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
