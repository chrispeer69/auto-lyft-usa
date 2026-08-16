import {
  Award,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

const STATS = [
  { value: '50K+', label: 'Vehicles Assisted', icon: CheckCircle },
  { value: '15 Min', label: 'Avg. Response Time', icon: Clock },
  { value: '98%', label: 'Customer Satisfaction', icon: Award },
  { value: '24/7', label: 'Always Available', icon: Shield },
];

const REASONS = [
  {
    icon: Clock,
    title: 'Rapid Response',
    description:
      'We understand emergencies require immediate action. Our dispatch system ensures the fastest possible response times.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description:
      "Your safety and your vehicle's protection are our top priorities. All our drivers are certified and insured.",
  },
  {
    icon: Users,
    title: 'Professional Team',
    description:
      'Our technicians undergo rigorous training and background checks. Experience the difference of true professionals.',
  },
  {
    icon: TrendingUp,
    title: 'Modern Equipment',
    description:
      'We invest in the latest towing and recovery equipment to provide superior service for all vehicle types.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
              About Auto Lyft USA
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Roadside Emergency Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Auto Lyft USA, we've built our reputation on reliability, speed,
              and professionalism. Founded with a simple mission: to provide the
              fastest, most dependable roadside assistance across Ohio's major
              metro areas.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you're dealing with a breakdown, accident, or any roadside
              emergency in Columbus, Dayton, or Cincinnati, our experienced team
              is ready to help. We combine state-of-the-art equipment with highly
              trained professionals who know your local roads.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Operating 24/7/365, we're never closed. With coverage across all
              three major Ohio metros, help is always nearby, no matter where you
              are or what time it is.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Auto Lyft USA flatbed tow truck loading a vehicle in Ohio"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-red-100">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon className="w-12 h-12 text-slate-900 mx-auto mb-3" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Auto Lyft USA?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REASONS.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
