// src/pages/ServicesPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Clock, Award, Cpu } from 'lucide-react';
import { servicesData } from '../data/servicesdata';
import vector1 from '../assets/vector/0_Meeting_Presentation_3840x2160.mp4';
import vector2 from '../assets/vector/20943990.jpg';
import vector from '../assets/vector/0_Presentation_Meeting_1080x1920.mp4';
import vectorMobile from '../assets/vector/0_Presentation_Meeting_1080x1920.mp4';
import vectorDesktop from '../assets/vector/0_Meeting_Presentation_3840x2160.mp4';
import vectorDesktop2 from '../assets/vector/7048797_Animation_Motion_Graphic_3840x2160.mp4';

export default function ServicesPage() {
  const highlights = [
    { Icon: Clock, title: '24/7 Rapid Response', desc: 'Our team is on standby around the clock—so downtime is truly minimized.' },
    { Icon: Award, title: 'ISO-Certified Quality', desc: 'Every product and service meets the highest global standards of safety and performance.' },
    { Icon: Cpu, title: 'AI-Driven Maintenance', desc: 'Predictive diagnostics powered by AI keep your equipment running at peak efficiency.' },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-teal-50 to-white">
{/* Top-Left Corner (mobile) */}
<video
  src={vectorMobile}
  autoPlay
  muted
  loop
  className="
    block 
    absolute top-0 left-0
    w-3/4 h-auto
    object-contain
    opacity-20
    pointer-events-none
  "
/>

{/* Top-Left Corner (desktop) */}
<video
  src={vectorDesktop}
  autoPlay
  muted
  loop
  className="
    hidden md:block
    absolute top-0 left-0
    w-1/2 h-auto
    object-contain
    opacity-40
    pointer-events-none
  "
/>

{/* Bottom-Right Corner (mobile) */}
<video
  src={vectorMobile}
  autoPlay
  muted
  loop
  className="
    block md:hidden
    absolute bottom-0 right-0
    w-3/4 h-auto
    object-contain
    opacity-20
    pointer-events-none
  "
/>

{/* Bottom-Right Corner (desktop) */}
<video
  src={vectorDesktop2}
  autoPlay
  muted
  loop
  className="
    hidden md:block
    absolute bottom-0 right-0
    w-1/2 h-auto
    object-contain
    opacity-70
    pointer-events-none
  "
/>

      {/* Wave Accent */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Interactive Hero Header */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="relative mx-auto max-w-2xl p-8 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg group overflow-hidden">
          {/* Hover-only bottom border */}
          <div className="
            absolute inset-0 rounded-xl
            border-b-4 border-blue-500
            opacity-0 scale-95
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-100
            pointer-events-none
          " />

          {/* Animated title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative inline-block text-5xl font-extrabold text-blue-600"
          >
            {"Our Services".split("").map((char, i) => (
              <motion.span
                key={i}
                whileHover={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.03
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Underline */}
          <div className="
            mx-auto mt-2 mb-6 h-1 w-24 bg-green-400
            opacity-0 scale-x-75 origin-left
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-x-100
          " />

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-700 text-lg sm:text-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            From fast delivery and precision installation to in-depth training and proactive maintenance, we support your facility every step of the way.
          </motion.p>
        </div>
      </div>

      {/* Highlights with Tilt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {highlights.map((h, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.02}
            transitionSpeed={250}
          >
            <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 border-l-4 border-transparent hover:border-teal-500">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 rounded-full shadow-inner">
                <h.Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{h.title}</h3>
              <p className="text-gray-600">{h.desc}</p>
            </div>
          </Tilt>
        ))}
      </motion.div>

      {/* Services Grid with Tilt */}
      <div className="relative z-10 container mx-auto px-4 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((svc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              scale={1.02}
              transitionSpeed={250}
            >
              <div className="group bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 border-l-4 border-transparent hover:border-teal-500">
                <div className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r ${svc.gradient} text-white shadow-lg`}>
                  <svc.Icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-teal-500">
                  {svc.title}
                </h3>
                <p className="text-gray-600">{svc.desc}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
