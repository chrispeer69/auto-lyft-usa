import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';

type HeaderProps = {
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
};

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'areas', label: 'Service Areas' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ isScrolled, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const go = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center -my-4">
            <img
              src="/3.png"
              alt="Auto Lyft USA"
              className="h-[8rem] w-auto scale-[1.4]"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="text-gray-700 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-slate-900 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="block w-full text-left text-gray-700 hover:text-slate-900 transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-semibold flex items-center justify-center space-x-2 mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
