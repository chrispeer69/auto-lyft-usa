import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    location: 'Columbus, OH',
    rating: 5,
    text: 'I was stranded on I-270 at 2 AM with a flat tire. Auto Lyft USA arrived in less than 20 minutes! The driver was professional, courteous, and had me back on the road quickly. Highly recommend!',
    service: 'Emergency Tire Change',
  },
  {
    name: 'James Rodriguez',
    location: 'Cincinnati, OH',
    rating: 5,
    text: 'After a minor accident near downtown, I was stressed about getting my car towed. The Auto Lyft team handled everything professionally, even coordinating with my insurance. They made a difficult situation so much easier.',
    service: 'Accident Recovery',
  },
  {
    name: 'Emily Chen',
    location: 'Dayton, OH',
    rating: 5,
    text: "Best towing service I've ever used! My battery died at the Dayton Mall parking lot, and they arrived within 15 minutes with a jump start. The technician was friendly and even checked my battery to make sure it was okay.",
    service: 'Jump Start Service',
  },
  {
    name: 'Michael Thompson',
    location: 'Columbus, OH',
    rating: 5,
    text: 'I needed my classic car transported to Cincinnati. Auto Lyft USA used a flatbed and took excellent care of my vehicle. It arrived in perfect condition. Worth every penny!',
    service: 'Long Distance Towing',
  },
  {
    name: 'Jennifer Williams',
    location: 'Cincinnati, OH',
    rating: 5,
    text: 'Locked my keys in the car with the engine running near UC campus. Called Auto Lyft USA and they had someone there in 10 minutes who got me back in without any damage. Fast and professional!',
    service: 'Lockout Assistance',
  },
  {
    name: 'David Park',
    location: 'Dayton, OH',
    rating: 5,
    text: "Got stuck in a ditch after sliding on ice on Route 35. The winch-out service was incredible - they had my truck back on the road safely in no time. These guys know what they're doing!",
    service: 'Winch Out Service',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Customer Reviews
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Drivers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our customers have to say
            about their experience with Auto Lyft USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.location}
                </div>
                <div className="text-sm text-red-700 font-semibold mt-1">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-5xl font-bold mb-2">4.9/5.0</div>
            <div className="text-xl text-gray-300 mb-6">
              Average Rating from 12,000+ Reviews
            </div>
            <p className="text-gray-400">
              Rated as the #1 towing service for customer satisfaction across
              multiple platforms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
