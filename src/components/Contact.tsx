import { useState } from 'react';
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { getSupabase, isSupabaseConfigured } from '../lib/supabase';
import { siteConfig } from '../siteConfig';

const SERVICE_OPTIONS = [
  { value: 'emergency-towing', label: 'Emergency Towing' },
  { value: 'jump-start', label: 'Jump Start Service' },
  { value: 'lockout', label: 'Lockout Assistance' },
  { value: 'fuel-delivery', label: 'Fuel Delivery' },
  { value: 'tire-change', label: 'Tire Change' },
  { value: 'accident-recovery', label: 'Accident Recovery' },
  { value: 'winch-out', label: 'Winch Out Service' },
  { value: 'motorcycle-towing', label: 'Motorcycle Towing' },
  { value: 'long-distance', label: 'Long Distance Towing' },
];

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  location: '',
  service: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const INPUT_CLASS =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition';
const LABEL_CLASS = 'block text-sm font-semibold text-gray-700 mb-2';

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setErrorMessage('');

    try {
      const supabase = await getSupabase();

      // No database configured — send them to the phone rather than silently
      // dropping the request.
      if (!supabase) {
        setStatus('error');
        setErrorMessage(
          `Our request form is temporarily unavailable. Please call us at ${siteConfig.phone}.`
        );
        return;
      }

      const { error } = await supabase.from('contact_requests').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          service_type: formData.service,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage('Failed to submit request. Please call us directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Request Service or Get a Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need immediate assistance? Call us now. For non-emergency requests,
            fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {!isSupabaseConfigured && (
                <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-800">
                      Online requests are temporarily unavailable
                    </p>
                    <p className="text-sm text-amber-700">
                      Please call{' '}
                      <a
                        href={siteConfig.phoneHref}
                        className="font-semibold underline"
                      >
                        {siteConfig.phone}
                      </a>{' '}
                      — we answer 24/7.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={LABEL_CLASS}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={LABEL_CLASS}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={LABEL_CLASS}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className={LABEL_CLASS}>
                      Current Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="City, State or ZIP"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={LABEL_CLASS}>
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={LABEL_CLASS}>
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Please provide any additional details about your situation..."
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800">
                        Request Submitted!
                      </p>
                      <p className="text-sm text-green-700">
                        We'll contact you shortly to confirm your service
                        request.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">
                        Submission Failed
                      </p>
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-red-700 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-700 to-red-600 rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Emergency Line</h3>
              <p className="text-red-50 mb-4">
                Need immediate assistance? Call us now for 24/7 emergency
                service.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="text-2xl font-bold hover:text-red-100 transition-colors"
              >
                {siteConfig.phone}
              </a>
              <p className="text-sm text-red-100 mt-2">
                Available 24 hours a day
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Mail className="w-12 h-12 text-slate-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href={siteConfig.emailHref}
                className="text-slate-900 hover:text-slate-800"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <MapPin className="w-12 h-12 text-slate-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Service Area
              </h3>
              <p className="text-gray-600">{siteConfig.serviceArea}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
