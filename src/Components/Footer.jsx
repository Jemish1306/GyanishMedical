import React from 'react';
import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import logo from '../assets/Gyanish Medical.png'
export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Products', to: '/products' },
    { name: 'Services', to: '/services' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'Blog', to: '/blog' },
    { name: 'Careers', to: '/careers' }
  ];

  const supportLinks = [
    { name: 'Help Center', to: '/help' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Shipping & Returns', to: '/shipping-returns' },
    { name: 'Privacy Policy', to: '/privacy' },
    { name: 'Terms & Conditions', to: '/terms' }
  ];

 // just a list of names now
 const certifications = [
   'ISO 9001',
   'CE Certified',
   'FDA Approved'
 ];

  const socialIcons = [
    { name: 'Facebook',   Icon: Icons.Facebook,  href: 'https://facebook.com',      color: 'hover:text-blue-500' },
    { name: 'Twitter',    Icon: Icons.Twitter,   href: 'https://twitter.com',       color: 'hover:text-cyan-400' },
    { name: 'Instagram',  Icon: Icons.Instagram, href: 'https://instagram.com',     color: 'hover:text-pink-400' },
    { name: 'LinkedIn',   Icon: Icons.Linkedin,  href: 'https://linkedin.com',      color: 'hover:text-blue-700' },
    { name: 'YouTube',    Icon: Icons.Youtube,   href: 'https://youtube.com',       color: 'hover:text-red-600' },
  ];

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const item      = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Logo & Description */}
        <motion.div variants={item} className="space-y-4">
          <img src={logo} alt="Medical Shop" className="w-12 h-12" />
          <h2 className="text-2xl font-bold">Gyanish Equipment Shop</h2>
          <p className="text-sm opacity-80">
            Supplying life-saving technology & hospital-grade tools globally. Quality you can trust.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div variants={item}>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div variants={item} className="space-y-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="text-sm opacity-80">
            Get the latest product updates and healthcare insights.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-800"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-indigo-900 font-semibold py-2 rounded-lg shadow-lg"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Certifications & Social */}
      <motion.div
        className="max-w-screen-xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Certifications */}
        <motion.div variants={item} className="flex gap-6 justify-center md:justify-start">
          {certifications.map((cert, idx) => (
            <img
              key={idx}
              src={cert.src}
              alt={cert.alt}
              className="h-10 opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={item} className="flex gap-6 justify-center md:justify-end">
          {socialIcons.map(({ Icon, href, color }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className={`text-white ${color}`}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-70">
        &copy; {year} Medical Equipment Shop. All rights reserved.
      </div>
    </footer>
  );
}
