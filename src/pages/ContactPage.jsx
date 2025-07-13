

// import React from 'react';
// import { motion } from 'framer-motion';
// import ContactForm from '../Components/ContactForm';
// import officeVector from '../assets/vector/6316.jpg';
// import drt from '../assets/vector/6316.jpg'

// export default function ContactPage() {
//   const offices = [
//     {
//       name: 'India HQ',
//       icon: '📍',
//       address:
//         'Medical Tech Hub, Plot No. 24/A, GIDC Electronics Estate, Gandhinagar, Gujarat 382015, India',
//       hours: 'Mon–Fri: 9 AM–6 PM IST',
//       mapQuery:
//         'Medical Tech Hub, Plot No. 24A, GIDC Electronics Estate, Gandhinagar, Gujarat',
//     },
//    {
//   name: 'Surat Office',
//   icon: '📍',
//   address: 'Block A, GIDC Industrial Estate, Piplod, Surat, Gujarat 395007, India',
//   hours: 'Mon–Fri: 9 AM–6 PM IST',
//   mapQuery: 'GIDC Industrial Estate, Piplod, Surat, Gujarat 395007'
// },

//     {
//       name: 'Canada Office',
//       icon: '📍',
//       address: 'Suite 200, 1 Yonge Street, Toronto, ON M5E 1W7, Canada',
//       hours: 'Mon–Fri: 8 AM–5 PM ET',
//       mapQuery: '1 Yonge Street, Toronto, ON M5E1W7, Canada',
//     },
//   ];

//   const contacts = [
//     {
//       label: 'Phone',
//       icon: '📞',
//       value: '+91 98254 98045',
//       href: 'tel:+919876543210',
//     },
//     {
//       label: 'Email',
//       icon: '📧',
//       value: 'Gyanishmedicalequipment@gmail.com',
//       href: 'mailto:Gyanishmedicalequipment@gmail.com',
//     },
//     {
//       label: 'Support',
//       icon: '🛠️',
//       value: 'support@Gyanishmedicalequipment.com',
//       href: 'mailto:support@medicalshop.com',
//     },
//     {
//       label: 'Sales',
//       icon: '💼',
//       value: 'sales@medicalshop.com',
//       href: 'mailto:sales@medicalshop.com',
//     },
//   ];

//   const faqs = [
//     {
//       question: 'What are your support hours?',
//       answer:
//         'We offer 24/7 remote support. Office hours vary by region (see above).',
//     },
//     {
//       question: 'How long does shipping take?',
//       answer:
//         'India: 3–5 business days. International: 7–14 business days, customs permitting.',
//     },
//     {
//       question: 'Can I request a demo?',
//       answer:
//         'Yes—fill out the form and our sales team will schedule an on-site or virtual demo.',
//     },
//   ];

//   return (
//      <section className="relative overflow-hidden">
//       {/* Static Background Vector */}
//       <img
//         src={drt}
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-40"
//       />

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
//         {/* Hero Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
//             Get in Touch
//           </h1>
//           <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
//             Whether you’re upgrading equipment or launching a new facility, we’re here 24/7 to support you.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
//           {/* Left Column: Offices & Contacts */}
//           <div className="space-y-8 sm:space-y-10 lg:space-y-12">
//             {offices.map((o, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 120 }}
//                 className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-2xl border hover:border-green-500 shadow-lg hover:shadow-2xl transition"
//               >
//                 <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-2">
//                   {o.icon} {o.name}
//                 </h3>
//                 <p className="text-base sm:text-xl text-gray-800 mb-1">{o.address}</p>
//                 <p className="text-sm sm:text-lg text-gray-500 italic mb-4">{o.hours}</p>
//                 <div className="aspect-video rounded-lg overflow-hidden">
//                   <iframe
//                     src={`https://maps.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&z=14&output=embed`}
//                     title={o.name}
//                     className="w-full h-full border-0"
//                     allowFullScreen
//                     loading="lazy"
//                   />
//                 </div>
//               </motion.div>
//             ))}

//             <div className="space-y-3 sm:space-y-4 mt-8 sm:mt-12">
//               {contacts.map((c, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
//                   className="text-lg sm:text-xl text-gray-800 pt-2"
//                 >
//                   <span className="font-semibold text-primary mr-2">
//                     {c.icon} {c.label}:
//                   </span>
//                   <a href={c.href} className="text-primary hover:underline">
//                     {c.value}
//                   </a>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Form & FAQs */}
//           <div className="space-y-8 sm:space-y-10 lg:space-y-12">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, type: 'spring', stiffness: 120 }}
//               className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
//             >
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-6">
//                 Send Us a Message
//               </h3>
//               <ContactForm />
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, type: 'spring', stiffness: 120 }}
//               className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
//             >
//               <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-6">
//                 Frequently Asked Questions
//               </h3>
//               <div className="space-y-4 sm:space-y-6">
//                 {faqs.map((f, i) => (
//                   <details
//                     key={i}
//                     className="border-l-4 border-gradient-to-r from-purple-500 to-pink-500 bg-gray-100 p-4 rounded-lg"
//                   >
//                     <summary className="text-xl sm:text-2xl font-semibold cursor-pointer">
//                       {f.question}
//                     </summary>
//                     <p className="mt-2 text-base sm:text-lg text-gray-700">
//                       {f.answer}
//                     </p>
//                   </details>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/pages/ContactPage.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import ContactForm from '../Components/ContactForm';
import officeVector from '../assets/vector/6316.jpg';

import { offices, contacts, faqs } from '../data/contactpage';

// Framer-motion variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: 0.2 * i } })
};


function OfficeCard({ office, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.03}
        transitionSpeed={250}
        className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
      >
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">
          📍 {office.name}
        </h3>
        <p className="text-gray-800 mb-1">{office.address}</p>
        <p className="text-gray-500 italic mb-2">{office.hours}</p>

        {/* NEW: contact info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-700 mb-4">
          <a href={`tel:${office.phone}`} className="flex items-center space-x-2 hover:text-primary">
            <span>📞</span><span>{office.phone}</span>
          </a>
          <a href={`mailto:${office.email}`} className="flex items-center space-x-2 hover:text-primary mt-2 sm:mt-0">
            <span>📧</span><span>{office.email}</span>
          </a>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden border">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              office.mapQuery
            )}&z=14&output=embed`}
            title={office.name}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Tilt>
    </motion.div>
  );
}

function ContactItem({ item, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="text-lg text-gray-800 pt-1"
    >
      <span className="font-semibold text-primary mr-2">
        {item.icon} {item.label}:
      </span>
      <a href={item.href} className="text-primary hover:underline">
        {item.value}
      </a>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="border-l-4 border-gradient-to-r from-purple-500 to-pink-500 bg-gray-100 p-4 rounded-lg"
    >
      <details>
        <summary className="text-xl font-semibold cursor-pointer">
          {faq.question}
        </summary>
        <p className="mt-2 text-gray-700">{faq.answer}</p>
      </details>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src={officeVector}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-20 space-y-16">
        {/* Hero Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0.5}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700">
            Whether you’re upgrading equipment or launching a new facility,
            we’re here 24/7 to support you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Offices & Contacts */}
          <div className="space-y-8">
            {offices.map((office, i) => (
              <OfficeCard key={i} office={office} index={i + 1} />
            ))}

            <div className="mt-10 space-y-4">
              {contacts.map((contact, i) => (
                <ContactItem
                  key={i}
                  item={contact}
                  index={i + offices.length + 1}
                />
              ))}
            </div>
          </div>

          {/* Right: Form & FAQs */}
          <div className="space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={offices.length + contacts.length + 2}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={offices.length + contacts.length + 3}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} index={i + 1} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
