import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Gyanish Medical.png';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'About',    path: '/about' },
  { label: 'Contact',  path: '/contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: -10 },
    show:   { opacity: 1, y: 0 }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500/80 backdrop-blur-sm shadow-md">
      <nav className="max-w-screen-xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Gyanish Medical Logo"
            className="w-16 h-16 object-contain"
          />
          {/* <span className="hidden md:inline text-white text-xl font-bold">
            Gyanish Medical
          </span> */}
        </Link>

        {/* Desktop Links */}
        <motion.ul
          className="hidden md:flex items-center space-x-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {navLinks.map((link, idx) => (
            <motion.li key={idx} variants={item}>
              <Link
                to={link.path}
                className="px-3 py-1.5 rounded-md text-white font-medium transition-colors hover:bg-white/20"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-indigo-900 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Get Quote
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-indigo-600 text-white overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={container}
              className="flex flex-col space-y-4 py-6 px-6"
            >
              {navLinks.map((link, idx) => (
                <motion.li key={idx} variants={item}>
                  <Link
                    to={link.path}
                    className="block px-3 py-2 rounded-md text-lg font-medium transition-colors hover:bg-white/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={item}>
                <Link
                  to="/contact"
                  className="mt-4 block text-center bg-yellow-400 text-indigo-900 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Quote
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
