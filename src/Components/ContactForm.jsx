import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // TODO: replace with real API call
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
          Get in Touch
        </h2>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-600 mb-4"
          >
            🎉 Thanks! We'll get back to you soon.
          </motion.p>
        )}

        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-1 rounded-3xl shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-gray-50 border border-purple-300 rounded-xl px-4 py-2 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-gray-50 border border-purple-300 rounded-xl px-4 py-2 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full bg-gray-50 border border-purple-300 rounded-xl px-4 py-2 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-full shadow-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
