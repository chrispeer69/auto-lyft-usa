import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../siteConfig';

type HeroProps = {
  scrollToSection: (id: string) => void;
};

const HIGHLIGHTS = [
  { icon: Clock, title: '24/7 Emergency', subtitle: 'Always Available' },
  { icon: MapPin, title: '3 Major Markets', subtitle: 'Ohio Coverage' },
  { icon: Phone, title: '15 Min', subtitle: 'Avg. Response' },
];

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-red-700 rounded-full text-sm font-semibold">
            Available 24/7/365
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fast, Reliable Towing &amp; Roadside Assistance
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            When you're stranded, we're already on our way. Professional towing
            services across Columbus, Dayton, and Cincinnati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center space-x-2 bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all font-bold text-lg shadow-2xl hover:shadow-red-700/50 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
            >
              <span>Request Service</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <Icon className="w-8 h-8 text-red-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-300">{item.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
}
