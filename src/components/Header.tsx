import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { SERVICES } from '../data/services';
import { REPAIR_SERVICES } from '../data/autoRepair';
import { CITIES_BY_METRO, METROS } from '../data/cities';

type MenuKey = 'services' | 'areas' | 'repair' | null;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  // Close dropdowns on outside click or Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const linkClass =
    'text-gray-700 hover:text-slate-900 transition-colors font-medium';

  const toggle = (key: Exclude<MenuKey, null>) =>
    setOpenMenu((current) => (current === key ? null : key));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center -my-4 flex-shrink-0">
            <img
              src="/3.png"
              alt="Auto Lyft USA"
              className="h-[8rem] w-auto scale-[1.4]"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={linkClass}>
              Home
            </Link>

            {/* Services */}
            <div className="relative">
              <button
                onClick={() => toggle('services')}
                className={`${linkClass} flex items-center space-x-1`}
                aria-expanded={openMenu === 'services'}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMenu === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenu === 'services' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[34rem] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      {s.short}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="col-span-2 mt-2 px-3 py-2 rounded-lg text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
                  >
                    View all services →
                  </Link>
                </div>
              )}
            </div>

            {/* Service areas */}
            <div className="relative">
              <button
                onClick={() => toggle('areas')}
                className={`${linkClass} flex items-center space-x-1`}
                aria-expanded={openMenu === 'areas'}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMenu === 'areas' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenu === 'areas' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[46rem] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 grid grid-cols-3 gap-4">
                  {(['columbus', 'dayton', 'cincinnati'] as const).map((m) => (
                    <div key={m}>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-900 mb-2">
                        {METROS[m].label}
                      </div>
                      <div className="space-y-0.5">
                        {CITIES_BY_METRO(m)
                          .slice(0, 10)
                          .map((c) => (
                            <Link
                              key={c.slug}
                              to={`/service-area/${c.slug}`}
                              className="block px-2 py-1 rounded text-sm text-gray-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                            >
                              {c.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/service-areas"
                    className="col-span-3 px-3 py-2 rounded-lg text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
                  >
                    View all service areas →
                  </Link>
                </div>
              )}
            </div>

            {/* Auto repair */}
            <div className="relative">
              <button
                onClick={() => toggle('repair')}
                className={`${linkClass} flex items-center space-x-1`}
                aria-expanded={openMenu === 'repair'}
              >
                <span>Auto Repair</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMenu === 'repair' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openMenu === 'repair' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-[30rem] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-1">
                  {REPAIR_SERVICES.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/auto-repair/${r.slug}`}
                      className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      {r.title}
                    </Link>
                  ))}
                  <Link
                    to="/auto-repair"
                    className="col-span-2 mt-2 px-3 py-2 rounded-lg text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
                  >
                    View all repair services →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/vip-program" className={linkClass}>
              VIP
            </Link>
            <Link to="/blog" className={linkClass}>
              Blog
            </Link>
            <Link to="/quote" className={linkClass}>
              Quote
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 transition-colors font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-700 hover:text-slate-900 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 space-y-1 max-h-[70vh] overflow-y-auto">
            <MobileLink to="/">Home</MobileLink>
            <MobileGroup label="Services" to="/services">
              {SERVICES.map((s) => (
                <MobileSubLink key={s.slug} to={`/services/${s.slug}`}>
                  {s.short}
                </MobileSubLink>
              ))}
            </MobileGroup>
            <MobileGroup label="Service Areas" to="/service-areas">
              {(['columbus', 'dayton', 'cincinnati'] as const).map((m) => (
                <div key={m}>
                  <div className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-slate-900">
                    {METROS[m].label}
                  </div>
                  {CITIES_BY_METRO(m).map((c) => (
                    <MobileSubLink key={c.slug} to={`/service-area/${c.slug}`}>
                      {c.name}
                    </MobileSubLink>
                  ))}
                </div>
              ))}
            </MobileGroup>
            <MobileGroup label="Auto Repair" to="/auto-repair">
              {REPAIR_SERVICES.map((r) => (
                <MobileSubLink key={r.slug} to={`/auto-repair/${r.slug}`}>
                  {r.title}
                </MobileSubLink>
              ))}
            </MobileGroup>
            <MobileLink to="/vip-program">VIP Program</MobileLink>
            <MobileLink to="/blog">Blog</MobileLink>
            <MobileLink to="/quote">Get a Quote</MobileLink>
            <MobileLink to="/sos">Emergency SOS</MobileLink>

            <a
              href={siteConfig.phoneHref}
              className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors font-semibold flex items-center justify-center space-x-2 mt-4"
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

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block w-full text-left text-gray-700 hover:text-slate-900 transition-colors font-medium py-2 px-3"
    >
      {children}
    </Link>
  );
}

function MobileSubLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="block w-full text-left text-sm text-gray-600 hover:text-slate-900 transition-colors py-1.5 px-6"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  to,
  children,
}: {
  label: string;
  to: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center">
        <Link
          to={to}
          className="flex-1 text-left text-gray-700 hover:text-slate-900 transition-colors font-medium py-2 px-3"
        >
          {label}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-gray-500"
          aria-label={`${open ? 'Collapse' : 'Expand'} ${label}`}
          aria-expanded={open}
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}
