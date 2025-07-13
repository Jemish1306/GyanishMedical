
// /// src/pages/AboutPage.jsx
// // src/pages/AboutPage.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Chrono } from 'react-chrono';
// import aboutVideo from '../assets/vector/0_Wind_Energy_Renewable_Energy_3840x2160.mp4';
// import docter from '../assets/docter/images (1).jpg';
// import docter1 from '../assets/docter/images (3).jpg';

// export default function AboutPage() {
//   const milestones = [
//     {
//       year: '2018',
//       title: 'Foundation',
//       subtitle: 'Humble beginnings in Ahmedabad',
//       cardDetailedText: `Company founded by Hardik A Patel, driven by a passion for accessible healthcare solutions.  
//       Started with just 2 employees and a single workshop.`
//     },
//     {
//       year: '2019',
//       title: 'Regional Growth',
//       subtitle: 'Branching out across Gujarat',
//       cardDetailedText: `Opened our first regional office and secured key contracts with major hospitals and clinics.  
//       Delivered over 100 units in the first quarter.`
//     },
//     {
//       year: '2020',
//       title: 'Pandemic Response',
//       subtitle: 'Answering the global call',
//       cardDetailedText: `Scaled up supply during COVID-19, delivering critical equipment to 50+ healthcare providers.  
//       Launched 24/7 support helpline and emergency logistics.`
//     },
//     {
//       year: '2021',
//       title: 'ISO & R&D Launch',
//       subtitle: 'Quality and innovation',
//       cardDetailedText: `Achieved ISO certification and launched our in-house R&D division.  
//       Built prototypes for next-gen ventilators and monitoring devices.`
//     },
//     {
//       year: '2022',
//       title: 'Innovation Roll-out',
//       subtitle: 'Setting new benchmarks',
//       cardDetailedText: `Introduced the Smart Ventilator and advanced surgical tools, raising the bar in patient care.  
//       Patented 3 new automation processes in device calibration.`
//     },
//     {
//       year: '2023',
//       title: 'Global Expansion',
//       subtitle: 'Going international',
//       cardDetailedText: `Expanded into Asia & Europe; recognized as a top global provider of medical equipment.  
//       Established distribution centers in Singapore and Berlin.`
//     },
//     {
//       year: '2024',
//       title: 'Continental Reach',
//       subtitle: 'Serving across continents',
//       cardDetailedText: `Reached 20+ branches in India and began serving partners across Africa.  
//       Partnered with WHO for equipment standardization projects.`
//     }
//   ];

//   const services = [
//     {
//       title: 'Equipment Procurement',
//       description: 'We source top-quality medical equipment at unbeatable value, with industry-leading lead times.',
//       benefits: ['Vetted manufacturers', 'Competitive pricing', 'Rapid global delivery'],
//       color: 'border-blue-500'
//     },
//     {
//       title: 'Maintenance & Repair',
//       description: 'Expert technicians keep your devices running flawlessly, 24/7—so you can focus on patient care.',
//       benefits: ['Minimize downtime', 'Extend equipment lifespan', 'Emergency on-site support'],
//       color: 'border-green-500'
//     },
//     {
//       title: 'Consultation & Planning',
//       description: 'Customized strategies to optimize your facility’s equipment investments and workflows.',
//       benefits: ['Tailored roadmaps', 'Budget optimization', 'Future-proof design'],
//       color: 'border-purple-500'
//     },
//     {
//       title: 'Training & Support',
//       description: 'Hands-on workshops and ongoing expert guidance to ensure safe, effective equipment use.',
//       benefits: ['Staff proficiency', 'Patient safety', 'Continuous support'],
//       color: 'border-pink-500'
//     }
//   ];

//   const team = [
//     { name: 'Dr. Rakesh Mehta', role: 'Biomedical Engineer', photo: docter },
//     { name: 'Priya Shah', role: 'Operations Lead', photo: docter1 }
//   ];

//   return (
//     <section className="relative w-full">

//       {/* Hero */}
//       <video
//         className="absolute inset-0 w-full h-screen object-cover"
//         src={aboutVideo}
//         autoPlay muted loop
//       />
//       <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-black bg-opacity-60 px-4 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ type: 'spring', stiffness: 120 }}
//           className="text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent"
//         >
//           Discover Our Legacy
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-6 max-w-3xl text-3xl text-gray-200 leading-snug"
//         >
//           We’re on a mission to equip every healthcare provider—from remote clinics to leading hospitals—with life-saving technology.<br/>
//           Our commitment: innovate relentlessly, deliver globally, and care always.<br/>
//           Together, we build healthier communities.
//         </motion.p>
//       </div>

//       <div className="container-3x mx-auto py-20 space-y-32">

//         {/* Vision & Mission */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center px-4"
//         >
//           <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Our Vision & Mission
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-5xl font-semibold text-primary mb-4">Vision</h3>
//               <p className="text-3xl text-gray-700 leading-relaxed">
//                 A world where every healthcare facility—no matter how remote—has seamless access to cutting-edge medical equipment that transforms patient care.<br/>
//                 Ensuring equitable health outcomes for all.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-5xl font-semibold text-primary mb-4">Mission</h3>
//               <p className="text-3xl text-gray-700 leading-relaxed">
//                 To empower providers with reliable, high-performance tools and dedicated 24/7 support—ensuring no patient waits for critical care.<br/>
//                 Driving innovation through collaboration.
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Story & Timeline */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           viewport={{ once: true }}
//           className="relative px-4"
//         >
//           <h2 className="text-7xl md:text-6xl font-bold text-primary text-center mb-10">
//             Our Journey
//           </h2>
//           <Chrono
//             items={milestones}
//             mode="VERTICAL_ALTERNATING"
//             cardHeight={140}
//             cardWidth={480}
//             lineWidth={12}
//             timelineCircleDimension={28}
//             fontSizes={{
//               title:     '2.5rem',  // years
//               cardTitle: '1.5rem',    // milestone titles
//               cardText:  '20px'  // detailed text
//             }}
//             classNames={{
//               cardTitle: 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-2xl',
//               cardDetailedText: 'text-2xl leading-snug text-gray-800'
//             }}
//             theme={{
//               primary:         '#10B981',
//               secondary:       '#F3F4F6',
//               cardBgColor:     '#FFFFFF',
//               cardForeColor:   '#1F2937',
//               titleColor:      '#059669',
//               titleColorActive:'#047857'
//             }}
//             hideControls
//             style={{ margin: '0 auto', width: '100%', maxWidth: 960 }}
//           />
//         </motion.div>

//         {/* Services */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="space-y-12 px-4"
//         >
//           <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
//             Empowering Healthcare
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((s, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + i * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${s.color} hover:shadow-2xl hover:-translate-y-1 transition`}
//               >
//                 <h3 className="text-3xl font-semibold mb-3 text-primary">{s.title}</h3>
//                 <p className="text-xl text-gray-700 mb-4 leading-relaxed">
//                   {s.description}
//                 </p>
//                 <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
//                   {s.benefits.map((b, j) => <li key={j}>{b}</li>)}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Team */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-12 px-4"
//         >
//           <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
//             Meet the Innovators
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
//             {team.map((m, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 + i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-1 transition"
//               >
//                 <img
//                   src={m.photo}
//                   alt={m.name}
//                   className="w-28 h-28 mx-auto rounded-full mb-6 object-cover border-4 border-primary"
//                 />
//                 <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-2">{m.name}</h3>
//                 <p className="text-xl text-gray-600">{m.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Flag, Star, Award, Globe2, Cpu, Rocket, Trophy, Eye, Target } from 'lucide-react';

import aboutVideo from '../assets/vector/0_Wind_Energy_Renewable_Energy_3840x2160.mp4';
import corner1 from '../assets/vector/6316.jpg';       // top-left
import corner2 from '../assets/vector/19197278.jpg';  // bottom-right

import { milestones, services } from '../data/aboutData';

export default function AboutPage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-teal-50 to-white overflow-hidden">
      {/* Corner vectors */}
<img
  src={corner2}
  alt=""
  className="
    block
    absolute top-1/2 left-1/2
    transform -translate-x-1/2 -translate-y-1/2
    w-auto
    h-screen md:h-auto
    object-contain
    opacity-50 
    pointer-events-none
  "
/>
   <img
  src={corner1}
  alt=""
  className="
    block
    absolute bottom-0 right-0
    w-auto
    h-screen md:h-auto
    object-contain
    opacity-30
    pointer-events-none
  "
/>
  

      {/* Hero video */}
      <video
        className="absolute inset-0 w-full h-screen object-cover"
        src={aboutVideo}
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-black bg-opacity-60 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-5xl lg:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent"
        >
          Discover Our Legacy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl text-3xl text-gray-200 leading-snug"
        >
          We’re on a mission to equip every healthcare provider—from remote clinics to leading hospitals—with life-saving technology.<br />
          Our commitment: innovate relentlessly, deliver globally, and care always.<br />
          Together, we build healthier communities.
        </motion.p>
      </div>

      <div className="container mx-auto py-20 space-y-32">

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4"
        >
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={250}>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center">
              <Eye size={48} className="text-blue-500 mb-4" />
              <h3 className="text-5xl font-semibold text-gray-900 mb-4">Vision</h3>
              <p className="text-3xl text-gray-700 leading-relaxed">
                A world where every healthcare facility—no matter how remote—has seamless access to cutting-edge medical equipment that transforms patient care.
              </p>
            </div>
          </Tilt>
          <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={250}>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg flex flex-col items-center">
              <Target size={48} className="text-green-500 mb-4" />
              <h3 className="text-5xl font-semibold text-gray-900 mb-4">Mission</h3>
              <p className="text-3xl text-gray-700 leading-relaxed">
                To empower providers with reliable, high-performance tools and dedicated 24/7 support—ensuring no patient waits for critical care.
              </p>
            </div>
          </Tilt>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 text-center mb-10">
            Our Journey
          </h2>
          <VerticalTimeline lineColor="#10B981">
            {milestones.map((m, i) => {
              const Icons = [Flag, Star, Award, Globe2, Cpu, Rocket, Trophy];
              const IconComp = Icons[i % Icons.length];
              return (
                <VerticalTimelineElement
                  key={i}
                  date={m.year}
                  iconStyle={{ background: '#10B981', color: '#fff' }}
                  icon={<IconComp />}
                  contentStyle={{
                    borderTop: '4px solid #10B981',
                    background: '#fff',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                    padding: '1.5rem'
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #10B981' }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900">{m.title}</h3>
                  <h4 className="text-xl font-medium text-gray-700">{m.subtitle}</h4>
                  <p className="mt-2 text-lg text-gray-800 leading-relaxed">{m.cardDetailedText}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-12 px-4"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Empowering Healthcare
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.02}
                transitionSpeed={250}
              >
                <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${s.color} flex flex-col items-center text-center transition-transform hover:-translate-y-1`}>
                  <div className={`p-4 mb-4 rounded-full bg-gradient-to-r ${s.gradient} text-white`}>
                    <s.Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{s.title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{s.description}</p>
                  <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
                    {s.benefits.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
