


// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import CountUp from 'react-countup';
// import {
//   Truck, Shield, BookOpen, ClipboardCheck, CreditCard,
//   Package, Cpu, Code, ShieldCheck, RefreshCcw,
//   PhoneCall, Activity, Globe2, Users, Award, BarChart2,
//   FileText, UserCheck, MapPin
// } from 'lucide-react';

// import HeroSection from './../Components/HeroSection';
// import ProductCard from './../Components/ProductCard';
// import TestimonialsSection from './../Components/TestimonialsSection';
// import LightboxGallery from './../Components/LightboxGallery';

// import Footer from './../Components/Footer';

// import SuccessStories from './../Components/SuccessStories';


// import { NET } from 'vanta/dist/vanta.net.min';
// import s1 from '../assets/susses/Sri-Venkateswara-Aravind-Eye-Hospital-Health-Eye-hospitals-Tirupati-Andhra-Pradesh.jpg'
// import s2 from '../assets/susses/OIP (1).webp'
// import s3 from '../assets/susses/R.jpeg';
// import d1 from '../assets/docter/images (2).jpg'
// import d2 from '../assets/docter/images (3).jpg';
// import d3 from '../assets/docter/download (7).jpg';
// import p1 from '../assets/partner/download (1).png'
// import p2 from '../assets/partner/images (1).png'
// import p3 from '../assets/partner/images.png'
// import p4 from '../assets/partner/images (2).png'
// import p5 from '../assets/partner/images (3).png'
// import b1 from '../assets/blog/surgeons-in-blue-gowns-performing-a-critical-operation-together-.jpg'
// import b2 from '../assets/blog/troubleshoothospitalmonitors.jpeg'
// import b3 from '../assets/blog/download (10).jpg'
// import ContactForm from './../Components/ContactForm';


// export default function Home() {
  
//   const { scrollYProgress } = useScroll();
//   const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);






// // Featured Products
// const featuredProducts = [
//   {
//     image: '/images/products/ventilator-01.jpg',
//     name: 'Smart Ventilator Pro X',
//     shortDesc: 'Next-gen ICU ventilator with AI-driven weaning protocols.',
//     price: 145000,
//     slug: 'smart-ventilator-pro-x'
//   },
//   {
//     image: '/images/products/monitor-01.jpg',
//     name: 'VitalMax Multi-Parameter Monitor',
//     shortDesc: '12-lead ECG, SpO₂, NIBP, and temperature in one console.',
//     price: 58000,
//     slug: 'vitalmax-multi-parameter-monitor'
//   },
//   {
//     image: '/images/products/infusion-pump.jpg',
//     name: 'InfuGuard Precision Pump',
//     shortDesc: 'Flow accuracy ±1%, dual-channel with anti-free flow safety.',
//     price: 35000,
//     slug: 'infuguard-precision-pump'
//   },
//   {
//     image: '/images/products/anesthesia-01.jpg',
//     name: 'AnesTech Workstation A2',
//     shortDesc: 'Integrated vaporizer, ventilator, and depth-of-anesthesia monitor.',
//     price: 225000,
//     slug: 'anestech-workstation-a2'
//   },
//   {
//     image: '/images/products/ultrasound-01.jpg',
//     name: 'SonoFlex Portable Ultrasound',
//     shortDesc: 'Battery-powered handheld probe with 4-hour runtime.',
//     price: 92000,
//     slug: 'sonoflex-portable-ultrasound'
//   },
//   {
//     image: '/images/products/defibrillator.jpg',
//     name: 'HeartSafe AED Elite',
//     shortDesc: 'Automated external defibrillator with real-time CPR feedback.',
//     price: 28500,
//     slug: 'heartsafe-aed-elite'
//   }
// ];

// // Live Counters / Stats
// const statsData = [
//   { label: 'Hospitals Supplied', end: 1500 },
//   { label: 'Units Delivered', end: 12000 },
//   { label: 'Service Contracts', end: 450 },
//   { label: '24/7 Support Calls', end: 8000 }
// ];

// // Why Choose Us


// const whyChoose = [
//   {
//     Icon: ClipboardCheck,
//     title: 'Pan-India Presence',
//     desc: '30+ regional offices for rapid delivery & support.'
//   },
//   {
//     Icon: ShieldCheck,
//     title: 'Certified Engineers',
//     desc: '300+ in-house technicians trained to CE & ISO standards.'
//   },
//   {
//     Icon: Activity,
//     title: 'Industry Recognition',
//     desc: 'Winner of “Best Medical Supplier 2024” by HealthTech India.'
//   },
//   {
//     Icon: BarChart2,
//     title: 'Proven ROI',
//     desc: 'Average 35% reduction in equipment downtime.'
//   }
// ];



// <section className="py-24 bg-white">
//   <div className="container mx-auto px-6 text-center mb-16">
//     <motion.h2
//       className="text-5xl md:text-6xl font-bold"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       viewport={{ once: true }}
//     >
//       Why{' '}
//       <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
//         Partner
//       </span>{' '}
//       With Us
//     </motion.h2>
//     <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
//       From initial consultation to ongoing maintenance, we stand by you at every step.
//     </p>
//   </div>
//   <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//     {whyChoose.map(({ Icon, title, desc }, i) => (
//       <motion.div
//         key={i}
//         className="p-8 bg-gray-50 rounded-2xl shadow-lg"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 + i * 0.1 }}
//         viewport={{ once: true }}
//         whileHover={{ scale: 1.02 }}
//       >
//         <Icon
//           size={60}
//           className="mx-auto mb-4 bg-gradient-to-r from-green-400 to-teal-400 p-2 rounded-full text-white"
//         />
//         <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600">{desc}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>

// // Success Stories / Case Studies
// const caseStudies = [
//   {
//     title: 'Sri Venkateswara Aravind Eye Hospital',
//     desc: 'Commissioned solar-backup OR and ICU equipment in 10 clinics, ensuring uninterrupted surgeries.',
//     img: s1
//   },
//   {
//     title: 'Metro Trauma Center Build-out',
//     desc: 'Equipped a 200-bed trauma facility with ventilators, monitors & imaging in 6 weeks.',
//     img: s3
//   },
//   {
//     title: 'Tele-ICU Network',
//     desc: 'Deployed remote monitoring & tele-consultation gear across 25 district hospitals.',
//     img: s2
//   }
// ];

// // Our Team
// const teamMembers = [
//   {
//     name: 'Dr. Rakesh Mehta',
//     role: 'Chief Biomedical Engineer',
//     photo: d1,
//     bio: '25 years leading critical care device R&D and field deployment.'
//   },
//   {
//     name: 'Priya Shah',
//     role: 'Director of Operations',
//     photo: d3,
//     bio: 'Managed logistics for 12,000+ units across 29 states.'
//   },
//   {
//     name: 'Ankit Patel',
//     role: 'Head of Clinical Support',
//     photo: d2,
//     bio: 'Oversees 150 technicians and 24/7 remote support center.'
//   }
// ];

// // Our Process
// const processSteps = [
//   {
//     step: '1',
//     title: 'Needs Assessment',
//     desc: 'On-site clinical walk-through & equipment audit.'
//   },
//   {
//     step: '2',
//     title: 'Customized Proposal',
//     desc: 'Tailored solution, budget planning & ROI forecast.'
//   },
//   {
//     step: '3',
//     title: 'Installation & Training',
//     desc: 'Full setup, calibration & multi-day staff workshops.'
//   },
//   {
//     step: '4',
//     title: 'Ongoing Care',
//     desc: 'Preventive maintenance, remote monitoring & rapid response.'
//   }
// ];

// // Our Partners
// const partners = [
// p1,p2,p3,p4,p5
// ];

// // FAQs
// const faqs = [
//   {
//     q: 'What’s your typical lead time?',
//     a: 'Standard stock items ship in 2–3 business days; custom configs in 4–6 weeks.'
//   },
//   {
//     q: 'Do you offer equipment financing?',
//     a: 'Yes—0% EMI, leasing & deferred payment plans up to 24 months.'
//   },
//   {
//     q: 'How do I schedule maintenance?',
//     a: 'Use our 24/7 portal or call our hotline; engineers dispatched within 24h.'
//   },
//   {
//     q: 'Can you integrate with our hospital information system?',
//     a: 'Absolutely—our devices support HL7, DICOM & FHIR protocols.'
//   },
//   {
//     q: 'What warranties are included?',
//     a: '2-year comprehensive warranty; optional 3-year extension & calibration plans.'
//   }
// ];

// // Blog Previews
// const blogPosts = [
//   {
//     title: 'Maximizing Ventilator Uptime',
//     date: 'July 15, 2025',
//     slug: 'maximizing-ventilator-uptime',
//     img: b1,
//     excerpt: 'Learn proactive maintenance and monitoring strategies to keep your ventilators running when it matters most.',
//     tags: ['Maintenance', 'ICU', 'Best Practices']
//   },
//   {
//     title: 'Tele-ICU: The Future of Critical Care',
//     date: 'June 30, 2025',
//     slug: 'tele-icu-future-care',
//     img: b2,
//     excerpt: 'Explore how remote monitoring and expert consultations are transforming patient outcomes in intensive care.',
//     tags: ['Telehealth', 'Innovation', 'Remote Care']
//   },
//   {
//     title: '5 Maintenance Tips for Monitors',
//     date: 'May 20, 2025',
//     slug: 'monitor-maintenance-tips',
//     img: b3,
//     excerpt: 'Extend the life of your vital signs monitors with these easy-to-implement maintenance routines.',
//     tags: ['Monitors', 'Tips', 'Equipment Care']
//   }
// ];

//   return (
//     <>
//       {/* Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 z-50"
//         style={{ width: scrollYProgress }} 
//       />

//       {/* Hero */}
//       <motion.div style={{ scale: heroScale }}>
//         <HeroSection />
//       </motion.div>

    

//       {/* Why Choose Us */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <motion.h2 className="text-5xl md:text-6xl font-bold"
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.2 }} viewport={{ once:true }}
//           >
//             Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Partner</span> With Us
//           </motion.h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
//             From initial consultation to ongoing maintenance, we stand by you at every step.
//           </p>
//         </div>
//         <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {whyChoose.map((w,i)=>(
//             <motion.div key={i}
//               className="p-8 bg-gray-50 rounded-2xl shadow-lg"
//               initial={{ opacity:0 }} whileInView={{ opacity:1 }}
//               transition={{ delay:0.3 + i*0.1 }} viewport={{ once:true }}
//               whileHover={{ scale:1.02 }}
//             >
//               <div className="mx-auto w-16 h-16 mb-4 text-gradient"> <w.Icon size={32} /></div>
//               <h3 className="text-2xl font-semibold mb-2">{w.title}</h3>
//               <p className="text-gray-600">{w.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Live Counters */}
//       <section className="py-24 bg-gradient-to-r from-green-50 to-teal-50">
//         <div className="container mx-auto px-6 text-center">
//           <motion.h2 className="text-5xl font-bold mb-12 "
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ duration:0.6 }} viewport={{ once:true }}
//           >
//            Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400'>Impact</span> 
//           </motion.h2>
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//             {statsData.map((s,i)=>(
//               <motion.div key={i}
//                 className="p-8 bg-white rounded-2xl shadow-lg"
//                 initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }}
//                 transition={{ delay:i*0.2 }} viewport={{ once:true }}
//                 whileHover={{ scale:1.05 }}
//               >
//                 <CountUp end={s.end} duration={3} className="text-6xl font-extrabold text-green-600"/>
//                 <p className="mt-2 text-2xl text-gray-700">{s.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Process */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <motion.h2 className="text-5xl font-bold"
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.2 }} viewport={{ once:true }}
//           >
//             How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Operate</span>
//           </motion.h2>
//         </div>
//         <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {processSteps.map((p,i)=>(
//             <motion.div key={i}
//               className="p-8 border-l-4 border-primary bg-gray-50 rounded-l-2xl shadow"
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//               transition={{ delay:i*0.2 }} viewport={{ once:true }}
//               whileHover={{ scale:1.02 }}
//             >
//               <div className="text-4xl font-extrabold text-primary mb-4">{p.step}</div>
//               <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
//               <p className="text-gray-600">{p.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="py-24 bg-gray-50">
      
//          {/* <SuccessStories /> */}
//             <div className="container mx-auto px-6 text-center mb-12">
//                  <motion.h2
//                    className="text-5xl font-bold"
//                    initial={{ opacity: 0, y: 20 }}
//                    whileInView={{ opacity: 1, y: 0 }}
//                    transition={{ duration: 0.6 }}
//                    viewport={{ once: true }}
//                  >
//                    Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Stories</span>
//                  </motion.h2>
//                </div>
//         <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-3">
//           {caseStudies.map((c,i)=>(
//             <motion.div key={i}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden"
//               initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
//               transition={{ delay:i*0.2 }} viewport={{ once:true }}
//             >
//               <img src={c.img} alt={c.title} className="w-full h-48 object-cover"/>
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
//                 <p className="text-gray-600">{c.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <motion.h2 className="text-5xl font-bold"
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.2 }} viewport={{ once:true }}
//           >
//             Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Experts</span>
//           </motion.h2>
//         </div>
//         <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//           {teamMembers.map((m,i)=>(
//             <motion.div key={i}
//               className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center"
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//               transition={{ delay:i*0.2 }} viewport={{ once:true }}
//               whileHover={{ scale:1.02 }}
//             >
//               <img src={m.photo} alt={m.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"/>
//               <h3 className="text-2xl font-semibold mb-1">{m.name}</h3>
//               <p className="text-primary mb-4">{m.role}</p>
//               <p className="text-gray-600">{m.bio}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Partners */}
//       <section className="py-24 bg-gray-50">
//         <div className="container mx-auto px-6 flex justify-center items-center gap-12">
//           <motion.h2 className="text-5xl font-bold"
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.2 }} viewport={{ once:true }}
//           >
//             Trusted <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">By</span>
//           </motion.h2>
//         </div>
//         <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-12">
//           {partners.map((logo,i)=>(
//             <motion.img key={i}
//               src={logo}
//               alt="Partner logo"
//               className="w-44 object-contain opacity-60 hover:opacity-100 transition"
//               initial={{ opacity:0 }} whileInView={{ opacity:1 }}
//               transition={{ delay:i*0.1 }} viewport={{ once:true }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 text-center mb-16">
//           <motion.h2 className="text-5xl font-bold"
//             initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.2 }} viewport={{ once:true }}
//           >
//             Got Questions? <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">We’ve Got Answers</span>
//           </motion.h2>
//         </div>
//         <div className="container mx-auto px-6 max-w-3xl space-y-6">
//           {faqs.map((f,i)=>(
//             <motion.div key={i}
//               className="border-b pb-4"
//               initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
//               transition={{ delay:i*0.1 }} viewport={{ once:true }}
//               whileHover={{ scale:1.01 }}
//             >
//               <h4 className="text-2xl font-semibold mb-1">{f.q}</h4>
//               <p className="text-gray-600">{f.a}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Blog Previews */}
//       <section className="py-24 bg-gray-50">
//       {/* Section Header */}
//       <div className="container mx-auto px-6 text-center mb-16">
//         <motion.h2
//           className="text-5xl font-bold"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           From Our{' '}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
//             Blog
//           </span>
//         </motion.h2>
//       </div>

//       {/* Posts Grid */}
//       <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-3">
//         {blogPosts.map((b, i) => (
//           <motion.div
//             key={i}
//             className="bg-white rounded-2xl shadow-xl-soft overflow-hidden transform transition hover:-translate-y-2 hover:shadow-3xl"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.02 }}
//             transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
//             viewport={{ once: true }}
//           >
//             {/* Image with overlay */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={b.img}
//                 alt={b.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
//             </div>

//             <div className="p-6 flex flex-col h-full">
//               {/* Date */}
//               <p className="text-sm text-gray-500 mb-2">{b.date}</p>

//               {/* Title */}
//               <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
//                 {b.title}
//               </h3>

//               {/* Excerpt */}
//               <p className="text-gray-600 flex-1 mb-4">{b.excerpt}</p>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {b.tags.map((tag, idx) => (
//                   <span
//                     key={idx}
//                     className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Read More */}
//               <Link
//                 to={`/blog/${b.slug}`}
//                 className="mt-auto inline-block text-primary font-semibold hover:underline"
//               >
//                 Read More →
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//       {/* Final CTA */}
//       <section className="py-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center">
//         <motion.h2 className="text-6xl font-bold mb-6"
//           initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
//           transition={{ duration:0.6 }} viewport={{ once:true }}
//         >
//           Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Get Started</span>
//         </motion.h2>
//         <Link to="/contact"
//           className="inline-block bg-white text-primary px-10 py-4 text-2xl font-semibold rounded-full hover:scale-105 transform-gpu transition"
//         >
//           Request Your Quote
//         </Link>
//       </section>

//       <ContactForm />
      
//     </>
//   );
// }


// src/pages/Home.jsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import {
  ClipboardCheck, ShieldCheck, Activity, BarChart2 ,FileText ,Calendar ,Settings 
} from 'lucide-react';
// import { ClipboardCheck, FileText, Calendar, Settings } from 'lucide-react';
import HeroSection from './../Components/HeroSection';
import ProductCard from './../Components/ProductCard';
import ContactForm from './../Components/ContactForm';
import Footer from './../Components/Footer';
import quoteVector from '../assets/vector/6658658.jpg';
// import { NET } from 'vanta/dist/vanta.net.min';
import NET from 'vanta/dist/vanta.net.min';
import s1 from '../assets/susses/Sri-Venkateswara-Aravind-Eye-Hospital-Health-Eye-hospitals-Tirupati-Andhra-Pradesh.jpg';
import s2 from '../assets/susses/OIP (1).webp';
import s3 from '../assets/susses/R.jpeg';
import d1 from '../assets/docter/images (2).jpg';
import d2 from '../assets/docter/images (3).jpg';
import d3 from '../assets/docter/download (7).jpg';
import p1 from '../assets/partner/download (1).png';
import p2 from '../assets/partner/images (1).png';
import p3 from '../assets/partner/images.png';
import p4 from '../assets/partner/images (2).png';
import p5 from '../assets/partner/images (3).png';
import b1 from '../assets/blog/surgeons-in-blue-gowns-performing-a-critical-operation-together-.jpg';
import b2 from '../assets/blog/troubleshoothospitalmonitors.jpeg';
import b3 from '../assets/blog/download (10).jpg';
import contactVector from '../assets/vector/2681558.jpg';
export default function Home() {
  // Vanta.NET background effect
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color: 0x10B981,
        backgroundColor: 0xffffff
      }));
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  // Scroll‐scale for Hero
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  // Data definitions
  const featuredProducts = [
    { image: '/images/products/ventilator-01.jpg', name: 'Smart Ventilator Pro X', shortDesc: 'Next-gen ICU ventilator with AI-driven weaning protocols.', price: 145000, slug: 'smart-ventilator-pro-x' },
    { image: '/images/products/monitor-01.jpg', name: 'VitalMax Monitor', shortDesc: '12-lead ECG, SpO₂, NIBP & temperature in one console.', price: 58000, slug: 'vitalmax-multi-parameter-monitor' },
    { image: '/images/products/infusion-pump.jpg', name: 'InfuGuard Precision Pump', shortDesc: 'Flow accuracy ±1%, dual-channel anti-free flow safety.', price: 35000, slug: 'infuguard-precision-pump' }
  ];
  const statsData = [
    { label: 'Hospitals Supplied', end: 1500 },
    { label: 'Units Delivered', end: 12000 },
    { label: 'Service Contracts', end: 450 },
    { label: '24/7 Support Calls', end: 8000 }
  ];
  const whyChoose = [
    { Icon: ClipboardCheck, title: 'Pan-India Presence', desc: '30+ regional offices for rapid delivery & support.' },
    { Icon: ShieldCheck, title: 'Certified Engineers', desc: '300+ in-house technicians trained to CE & ISO standards.' },
    { Icon: Activity, title: 'Industry Recognition', desc: 'Winner of “Best Medical Supplier 2024” by HealthTech India.' },
    { Icon: BarChart2, title: 'Proven ROI', desc: 'Avg. 35% reduction in equipment downtime.' }
  ];
  const caseStudies = [
    { title: 'Aravind Eye Hospital', desc: 'Solar-backup OR & ICU in 10 clinics.', img: s1 },
    { title: 'Metro Trauma Build-out', desc: '200-bed trauma facility in 6 weeks.', img: s3 },
    { title: 'Tele-ICU Network', desc: 'Remote gear in 25 district hospitals.', img: s2 }
  ];
const processSteps = [
  {
    step: '1',
    title: 'Needs Assessment',
    desc: 'On-site clinical audit.',
    Icon: ClipboardCheck
  },
  {
    step: '2',
    title: 'Proposal',
    desc: 'Budget & ROI forecast.',
    Icon: FileText
  },
  {
    step: '3',
    title: 'Install & Training',
    desc: 'Setup & multi-day workshops.',
    Icon: Calendar
  },
  {
    step: '4',
    title: 'Ongoing Care',
    desc: 'Preventive maintenance & rapid response.',
    Icon: Settings
  }
];
  const partners = [p1, p2, p3, p4, p5];
  const faqs = [
    { q: 'Typical lead time?', a: 'Stock ships in 2–3 business days; custom 4–6 weeks.' },
    { q: 'Equipment financing?', a: '0% EMI, leasing & deferred plans up to 24 months.' },
    { q: 'Schedule maintenance?', a: 'Use our portal or hotline; 24h engineer dispatch.' },
    { q: 'HIS integration?', a: 'Supports HL7, DICOM & FHIR protocols.' },
    { q: 'Warranty?', a: '2-year standard; optional 3-year extension & calibration.' }
  ];
  const blogPosts = [
    { title: 'Maximizing Ventilator Uptime', date: 'July 15, 2025', slug: 'maximizing-ventilator-uptime', img: b1, excerpt: 'Proactive maintenance strategies for ventilators.', tags: ['Maintenance','ICU'] },
    { title: 'Tele-ICU Future', date: 'June 30, 2025', slug: 'tele-icu-future-care', img: b2, excerpt: 'Remote monitoring transforming outcomes.', tags: ['Telehealth','Innovation'] },
    { title: '5 Monitor Tips', date: 'May 20, 2025', slug: 'monitor-maintenance-tips', img: b3, excerpt: 'Extend monitor lifespan with easy routines.', tags: ['Monitors','Tips'] }
  ];

  return (
 <>
  {/* Progress Bar */}
  <motion.div
    className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 z-50"
    style={{ width: scrollYProgress }}
  />

  {/* Vanta + Hero */}
  <div ref={vantaRef} className="relative overflow-hidden">
    <motion.div style={{ scale: heroScale }}>
      <HeroSection />
    </motion.div>
  </div>

  {/* Why Partner With Us */}
  <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
    <div className="container mx-auto px-6 text-center mb-16">
      <motion.h2
        className="text-5xl md:text-6xl font-bold"
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ delay:0.2 }}
        viewport={{ once:true }}
      >
        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Partner</span> With Us
      </motion.h2>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        From initial consultation to ongoing maintenance, we stand by you at every step.
      </p>
    </div>
    <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {whyChoose.map((w,i) => (
        <Tilt
          key={i}
          glareEnable
          glareMaxOpacity={0.2}
          glareColor="#fff"
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          perspective={800}
          scale={1.03}
          transitionSpeed={2000}
          className="group rounded-3xl shadow-2xl bg-white/80 border-l-4 border-transparent transition-all duration-300"
        >
          <motion.div
            className="p-8 rounded-3xl h-full flex flex-col items-center justify-center transition-all duration-300 group-hover:border-l-4 group-hover:border-green-400"
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:0.3 + i * 0.1 }}
            viewport={{ once:true }}
          >
            <w.Icon
              size={60}
              className="mb-4 p-2 rounded-full bg-gradient-to-r from-green-400 to-teal-400 text-white"
            />
            <h3 className="text-2xl font-semibold mb-2">{w.title}</h3>
            <p className="text-gray-700 text-center">{w.desc}</p>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>

  {/* Live Counters */}
   <section className="py-24 bg-gradient-to-r from-green-50 to-teal-50">
    <div className="container mx-auto px-6 text-center mb-12">
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        viewport={{ once:true }}
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Impact</span>
      </motion.h2>
    </div>
    <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((s,i) => (
        <Tilt
          key={i}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={600}
          scale={1.02}
          className="group rounded-2xl border-l-4 border-transparent transition-all duration-300"
        >
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-lg transition-all duration-500 group-hover:border-l-4 group-hover:border-purple-400"
            initial={{ opacity:0, scale:0.8 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once:true }}
            whileHover={{ scale:1.05 }}
          >
            <CountUp end={s.end} duration={3} className="text-6xl font-extrabold text-green-600" />
            <p className="mt-2 text-2xl text-gray-700">{s.label}</p>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>
{/* Our Process */}
 <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
  <div className="container mx-auto px-6 text-center mb-16">
    <motion.h2
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      How We{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        Operate
      </span>
    </motion.h2>
    <motion.p
      className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      viewport={{ once: true }}
    >
      From initial clinical audit through proposal, installation, and ongoing support,
      our four-step process ensures you get exactly the right equipment, on time, every time.
      We handle project management, multimodal training, and rapid-response maintenance,
      so you can focus on patient care.
    </motion.p>
  </div>

  <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {processSteps.map((p, i) => (
      <Tilt
        key={i}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={700}
        scale={1.02}
        className="group rounded-2xl border-l-4 border-transparent transition-all duration-300"
      >
        <motion.div
          className="p-8 bg-gray-50 rounded-2xl shadow transition-all duration-500 group-hover:border-l-4 group-hover:border-pink-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Icon */}
          <p.Icon
            size={48}
            className="mx-auto mb-4 text-pink-400"
          />

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3 text-center">
            {p.title}
          </h3>

          {/* Description (now two lines) */}
          <p className="text-gray-600 mb-2 leading-relaxed">{p.desc}</p>
          <p className="text-gray-600 leading-relaxed">
            {p.moreDesc}
          </p>
        </motion.div>
      </Tilt>
    ))}
  </div>
</section>


  {/* Case Studies */}
  <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
    <div className="container mx-auto px-6 text-center mb-12">
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity:0, y:20 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.6 }}
        viewport={{ once:true }}
      >
        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Stories</span>
      </motion.h2>
    </div>
    <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-3">
      {caseStudies.map((c,i) => (
        <Tilt
          key={i}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={800}
          scale={1.02}
          className="group rounded-2xl overflow-hidden border-l-4 border-transparent transition-all duration-300"
        >
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once:true }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-l-4 group-hover:border-green-400"
          >
            <img src={c.img} alt={c.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </section>

 {/* FAQs */}
 <section className="py-24 bg-gradient-to-b from-teal-100 to-white">
  <div className="container mx-auto px-6 text-center mb-16">
    <motion.h2
      className="text-5xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      Got Questions?{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        We’ve Got Answers
      </span>
    </motion.h2>
  </div>
  <div className="container mx-auto px-6 max-w-3xl space-y-6">
    {faqs.map((f, i) => (
      <motion.div
        key={i}
        className="group border-b pb-4 border-l-4 border-transparent transition-all duration-300 hover:scale-[1.01]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="pl-4 transition-all duration-300 group-hover:border-l-4 group-hover:border-purple-400">
          <h4 className="text-2xl font-semibold mb-1">{f.q}</h4>
          <p className="text-gray-600">{f.a}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* Request a Free Quote (vector on the right) */}
<section className="py-24 bg-gradient-to-b from-purple-100 to-pink-50">
  <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
    {/* Text & Button */}
    <motion.div
      className="md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Request a <span className="text-green-500">Free Quote</span>
      </motion.h2>
      <motion.p
        className="mb-6 text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tell us about your needs and we’ll get a custom proposal back to you within 24 hours. No commitment required.
      </motion.p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          Get a Quote
        </Link>
      </motion.div>
    </motion.div>

    {/* Vector Illustration */}
<Tilt
  glareEnable
  glareMaxOpacity={0.1}
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  perspective={800}
  scale={1.05}
  transitionSpeed={2000}
  className="md:w-1/2 flex justify-center"
>
  <motion.img
    src={quoteVector}
    alt="Request Quote Illustration"
    className="w-3/4 md:w-full rounded-2xl shadow-lg"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
</Tilt>

  </div>
</section>

{/* Contact & Footer (vector on the left) */}
<section className="py-24 bg-gradient-to-b from-teal-100 to-white bg-contact-mobile">
  <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row-reverse items-center gap-12">
    {/* Form Card: 100% on mobile, 50% on md+ */}
    <motion.div
      className="w-full md:w-1/2 bg-gray-50 p-8 rounded-3xl shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <ContactForm />
    </motion.div>

    {/* Tilted Vector: 100% on mobile, 50% on md+ */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.1}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        perspective={600}
        scale={1.02}
        transitionSpeed={1500}
        className="w-full h-auto rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={contactVector}
          alt="Contact Us Illustration"
          className="w-full h-auto"
        />
      </Tilt>
    </motion.div>
  </div>
</section>

  


</>

  );
}
