import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { siteConfig } from '../siteConfig';

/** Breadcrumb trail shown at the top of every inner page. */
export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-300">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {isLast ? (
                <span className="text-white font-medium">{item.name}</span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Dark banner at the top of an inner page. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  trail,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  trail?: { name: string; path: string }[];
}) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && (
          <div className="inline-block mb-4 px-4 py-2 bg-red-700 rounded-full text-sm font-semibold">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center space-x-2 bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all font-bold text-lg shadow-2xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Call {siteConfig.phone}</span>
          </a>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
          >
            <span>Request Service</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Red call-to-action band used at the bottom of most pages. */
export function CallToAction({
  title = 'Need Help Right Now?',
  body = 'Our dispatch team is standing by 24/7. Average response time: 15 minutes.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-6 text-red-50 max-w-2xl mx-auto">{body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center space-x-2 bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-950 transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Accessible FAQ list. Pairs with faqSchema() for rich results. */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-gray-900 text-lg list-none">
                {faq.q}
                <ChevronRight className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Simple section wrapper with an optional heading. */
export function Section({
  title,
  intro,
  children,
  tint = 'white',
}: {
  title?: string;
  intro?: string;
  children: React.ReactNode;
  tint?: 'white' | 'gray';
}) {
  return (
    <section className={`py-16 ${tint === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {title}
          </h2>
        )}
        {intro && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
