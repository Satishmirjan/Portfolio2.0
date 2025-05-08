import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '2311e225-f390-46fa-9239-0eb54d3bdc8e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Form Submission',
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thanks! I’ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else throw new Error(result.message);
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="min-h-screen bg-black py-16 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-center text-4xl font-bold text-white mb-12">
          Get in Touch ✉️
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-900/70 p-8 rounded-xl shadow-lg space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-400 mt-1" size={22} />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-300">Mysore, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-blue-400 mt-1" size={22} />
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <a href="mailto:satishnda3576@gmail.com" className="text-blue-400 hover:underline">
                  satishnda3576@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-400 mt-1" size={22} />
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <a href="tel:+917483160556" className="text-blue-400 hover:underline">
                  +91 74831 60556
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/70 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {status.message && (
              <p className={`text-sm px-4 py-2 rounded-lg ${status.error ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50"
            >
              {status.submitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
