// src/data/contactpage.js


export const offices = [
  {
    name: 'India HQ',
    address:
      'Medical Tech Hub, Plot No. 24/A, GIDC Electronics Estate, Gandhinagar, Gujarat 382015, India',
    hours: 'Mon–Fri: 9 AM–6 PM IST',
    mapQuery:
      'Medical Tech Hub, Plot No. 24A, GIDC Electronics Estate, Gandhinagar, Gujarat',
    phone: '+91 98254 98045',
    email: 'Gyanishmedicalequipment@gmail.com',
  },
  {
    name: 'Surat Office',
    address: 'Block A, GIDC Industrial Estate, Piplod, Surat, Gujarat 395007, India',
    hours: 'Mon–Fri: 9 AM–6 PM IST',
    mapQuery: 'GIDC Industrial Estate, Piplod, Surat, Gujarat 395007',
    phone: '+91 12345 67890',               // ← add real number
    email: 'surat@medicalequipment.com',    // ← add real email
  },
  {
    name: 'Canada Office',
    address: 'Suite 200, 1 Yonge Street, Toronto, ON M5E 1W7, Canada',
    hours: 'Mon–Fri: 8 AM–5 PM ET',
    mapQuery: '1 Yonge Street, Toronto, ON M5E1W7, Canada',
    phone: '+1 416 555 1234',               // ← add real number
    email: 'toronto@medicalequipment.com',  // ← add real email
  },
];


export const contacts = [
  {
    label: 'Support',
    icon: '🛠️',
    value: 'Gyanishmedicalequipment@gmail.com',
    href: 'mailto:support@medicalshop.com',
  },
  {
    label: 'Sales',
    icon: '💼',
    value: 'sales@medicalshop.com',
    href: 'Gyanishmedicalequipment@gmail.com',
  },
];

export const faqs = [
  {
    question: 'What are your support hours?',
    answer: 'We offer 24/7 remote support. Office hours vary by region (see above).',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'India: 3–5 business days. International: 7–14 business days, customs permitting.',
  },
  {
    question: 'Can I request a demo?',
    answer: 'Yes—fill out the form and our sales team will schedule an on-site or virtual demo.',
  },
];
