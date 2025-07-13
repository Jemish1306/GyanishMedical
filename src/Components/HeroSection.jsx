import React, { useRef, useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { ArrowRight, ShoppingCart, ChevronDown } from 'lucide-react';
import herobanner from '../assets/mp4/VID_Looping_Web_Banner_Desktop_(16x9)BckUp_09_04_2024.mp4';
import logo from '../assets/Gyanish Medical.png';

export default function HeroSection() {
  const title = 'Wholesale Medical Equipment Supplier';

  // Parallax
  const { scrollY } = useViewportScroll();
  const yTransform = useTransform(scrollY, [0, 400], [0, -150]);
  const opacityTransform = useTransform(scrollY, [0, 400], [1, 0.5]);

  // Vanta background
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        backgroundAlpha: 0,
        color: 0x10b981,
        pointColor: 0xffffff,
        maxDistance: 25,
        spacing: 30
      }));
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: opacityTransform }}
      >
        <source src={herobanner} type="video/mp4" />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <motion.div
        style={{ y: yTransform }}
        className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6"
      >
        {/* Centered Logo */}
        <motion.img
          src={logo}
          alt="Gyanish Medical"
          className="w-48 md:w-[20rem] mb-20 top-0 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Animated Gradient Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
          {title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, type: 'spring', stiffness: 120 }}
              className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${
                i % 2 === 0
                  ? 'from-green-300 to-teal-300'
                  : 'from-purple-400 to-pink-400'
              }`}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl mb-10 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Delivering cutting-edge medical devices & 24/7 support to hospitals,
          clinics, and care centers across India.
        </motion.p>
+
-+
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-gradient-to-r from-green-400 to-teal-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-xl text-2xl"
          >
            <ShoppingCart className="w-6 h-6" /> Explore Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full text-2xl hover:bg-white hover:text-gray-900 transition"
          >
            <ArrowRight className="w-6 h-6" /> Get a Quote
          </motion.button>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center text-gray-300 cursor-pointer animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown size={32} />
          <span className="mt-2 uppercase text-sm">Scroll</span>
        </motion.div>
      </motion.div>

      {/* SVG Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-20">
        <svg viewBox="0 0 1440 320" className="block w-[200%] h-40">
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,245.3C1248,277,1344,299,1392,309.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div> */}
    </section>
  );
}
