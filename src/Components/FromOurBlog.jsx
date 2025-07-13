// src/Components/FromOurBlog.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: '5 Tips to Extend Equipment Lifespan',
    date: 'July 2, 2025',
    slug: 'extend-equipment-lifespan',
    img: '/images/blog/lifespan-tips.jpg'
  },
  {
    title: 'Choosing the Right Ventilator',
    date: 'June 15, 2025',
    slug: 'choosing-right-ventilator',
    img: '/images/blog/ventilator-guide.jpg'
  },
  {
    title: 'IoT in Healthcare: A Primer',
    date: 'May 28, 2025',
    slug: 'iot-healthcare-primer',
    img: '/images/blog/iot-healthcare.jpg'
  }
];

export default function FromOurBlog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          From Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Blog</span>
        </motion.h2>
      </div>
      <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-3">
        {blogPosts.map((b, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{b.date}</p>
              <h3 className="text-2xl font-semibold mb-3">{b.title}</h3>
              <Link to={`/blog/${b.slug}`} className="text-primary hover:underline">
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
