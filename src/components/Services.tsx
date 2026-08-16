import {
  Battery,
  Car,
  Clock,
  Fuel,
  Key,
  Package,
  Settings,
  Shield,
  Truck,
  Wrench,
} from 'lucide-react';
import { siteConfig } from '../siteConfig';

const SERVICES = [
  {
    icon: Truck,
    title: 'Emergency Towing',
    description:
      'Fast, professional towing for all vehicle types. From compact cars to heavy-duty trucks, our fleet handles it all.',
    features: ['Light & Heavy Duty', 'Flatbed Available', 'Secure Transport'],
  },
  {
    icon: Battery,
    title: 'Jump Start Service',
    description:
      'Dead battery? We provide quick jump start services to get you back on the road in minutes.',
    features: ['All Vehicle Types', 'Mobile Service', 'Battery Testing'],
  },
  {
    icon: Key,
    title: 'Lockout Assistance',
    description:
      'Locked out of your vehicle? Our technicians can safely unlock your car without damage.',
    features: ['Non-Destructive Entry', 'All Makes & Models', 'Fast Response'],
  },
  {
    icon: Fuel,
    title: 'Fuel Delivery',
    description:
      'Ran out of gas? We deliver fuel directly to your location so you can continue your journey.',
    features: ['Multiple Fuel Types', 'Emergency Delivery', 'Quick Service'],
  },
  {
    icon: Wrench,
    title: 'Tire Change',
    description:
      'Flat tire? Our experts will change your tire quickly and safely, getting you moving again.',
    features: ['Spare Installation', 'Mobile Service', 'Safety Check'],
  },
  {
    icon: Car,
    title: 'Accident Recovery',
    description:
      'Specialized accident recovery services with careful vehicle handling and professional support.',
    features: ['24/7 Response', 'Insurance Coordination', 'Damage Documentation'],
  },
  {
    icon: Settings,
    title: 'Winch Out Service',
    description:
      'Stuck in mud, snow, or a ditch? Our powerful winch equipment safely extracts your vehicle.',
    features: ['Heavy-Duty Winch', 'Off-Road Recovery', 'Safe Extraction'],
  },
  {
    icon: Package,
    title: 'Motorcycle Towing',
    description:
      'Specialized motorcycle towing with equipment designed to safely transport your bike.',
    features: ['Secure Tie-Downs', 'Experienced Handlers', 'All Bike Types'],
  },
  {
    icon: Shield,
    title: 'Long Distance Towing',
    description:
      'Need to transport your vehicle across states? We offer reliable long-distance towing services.',
    features: ['Cross-Country', 'Real-Time Tracking', 'Insured Transport'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Roadside Assistance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency towing to roadside repairs, we provide comprehensive
            services to keep you safe and mobile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-700 to-red-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl mb-6 text-red-50">
            Our dispatch team is standing by 24/7 to help you. Average response
            time: 15 minutes.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-2xl hover:scale-105"
          >
            <span>Call {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
