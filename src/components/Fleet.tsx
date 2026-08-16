import { CheckCircle, Truck } from 'lucide-react';

const FLEET = [
  {
    name: 'Light-Duty Tow Trucks',
    image:
      'https://images.pexels.com/photos/6894426/pexels-photo-6894426.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: 'Up to 7,000 lbs',
    features: ['Compact Cars', 'Sedans', 'Small SUVs', 'Motorcycles'],
    description: 'Perfect for everyday passenger vehicles',
  },
  {
    name: 'Medium-Duty Flatbeds',
    image:
      'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: 'Up to 17,000 lbs',
    features: ['SUVs', 'Vans', 'Luxury Vehicles', 'Classic Cars'],
    description: 'Ideal for vehicles requiring extra care',
  },
  {
    name: 'Heavy-Duty Wreckers',
    image:
      'https://images.pexels.com/photos/6894430/pexels-photo-6894430.jpeg?auto=compress&cs=tinysrgb&w=800',
    capacity: 'Up to 50,000+ lbs',
    features: ['Box Trucks', 'RVs', 'Commercial Vehicles', 'Buses'],
    description: 'Built for the toughest jobs',
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Our Fleet
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            State-of-the-Art Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain a modern fleet of specialized tow trucks and recovery
            vehicles to handle any situation safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {FLEET.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {vehicle.capacity}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-gray-600 mb-6">{vehicle.description}</p>
                <div className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Truck className="w-12 h-12 text-slate-900" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                All Equipment Regularly Inspected &amp; Certified
              </h3>
              <p className="text-gray-600 text-lg">
                Every vehicle in our fleet undergoes rigorous maintenance checks
                and meets all DOT safety standards. Your vehicle's safety is our
                priority, and we ensure our equipment is always in peak
                condition.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-700 mb-1">100%</div>
                <div className="text-gray-600">Safety Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
