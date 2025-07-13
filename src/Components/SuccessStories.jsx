// src/Components/SuccessStories.jsx
import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Rural Clinic Modernization',
    desc: 'Installed solar-powered lab & diagnostics in 15 remote clinics, boosting patient load by 40%.',
    img: '/images/case-studies/rural-clinic.jpg'
  },
  {
    title: 'Urban Hospital Expansion',
    desc: 'Added 50 ICU beds with full cardio-respiratory integration, reducing emergency response time by 25%.',
    img: '/images/case-studies/urban-hospital.jpg'
  },
  {
    title: 'Tele-Medicine Rollout',
    desc: 'Deployed tele-consultation kiosks in 30 community centers, serving 10,000+ patients monthly.',
    img: '/images/case-studies/telemedicine.jpg'
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Stories</span>
        </motion.h2>
      </div>
      <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
