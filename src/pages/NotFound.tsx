import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import { siteConfig } from '../siteConfig';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Auto Lyft USA"
        description="That page does not exist. Call Auto Lyft USA for 24/7 towing and roadside assistance in Columbus, Dayton and Cincinnati."
        path="/404"
        noindex
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white">
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <div className="text-7xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4">We couldn't find that page</h1>
          <p className="text-xl text-gray-200 mb-10">
            It may have moved. If you need help right now, calling is always
            faster than looking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            {[
              { to: '/services', label: 'Services' },
              { to: '/service-areas', label: 'Service Areas' },
              { to: '/auto-repair', label: 'Auto Repair' },
              { to: '/vip-program', label: 'VIP Program' },
              { to: '/blog', label: 'Blog' },
              { to: '/quote', label: 'Get a Quote' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
