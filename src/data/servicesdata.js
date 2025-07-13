// src/data/servicesdata.js

import {
  Truck,
  Shield,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  Package,
  Cpu,
  Code,
  ShieldCheck,
  RefreshCcw,
  PhoneCall,
  Activity,
  Globe2,
  Users
} from 'lucide-react';

export const servicesData = [
  {
    title: 'Fast Delivery',
    desc: 'Our logistics partners ensure timely and safe delivery of all equipment to your facility anywhere in India.',
    Icon: Truck,
    gradient: 'from-green-400 to-teal-400'
  },
  {
    title: 'Professional Installation',
    desc: 'Certified technicians handle installation and calibration of all devices to ensure 100% compliance.',
    Icon: Truck,
    gradient: 'from-blue-400 to-indigo-400'
  },
  {
    title: 'Warranty & Maintenance',
    desc: 'All purchases come with extended warranty and free support consultations to maintain long-term reliability.',
    Icon: Shield,
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Comprehensive Training',
    desc: 'Hands-on workshops and e-learning modules to upskill your staff on every piece of equipment.',
    Icon: BookOpen,
    gradient: 'from-yellow-400 to-orange-400'
  },
  {
    title: 'Consultation & Planning',
    desc: 'Expert guidance on facility layout, budgeting, and future-proofing your equipment investments.',
    Icon: ClipboardCheck,
    gradient: 'from-red-400 to-pink-400'
  },
  {
    title: 'Equipment Financing',
    desc: 'Flexible financing plans and leasing options to fit your budget and maximize ROI.',
    Icon: CreditCard,
    gradient: 'from-green-500 to-blue-500'
  },
  {
    title: 'Spare Parts Supply',
    desc: 'Broad inventory of OEM and aftermarket parts to keep your operations running smoothly.',
    Icon: Package,
    gradient: 'from-teal-500 to-green-500'
  },
  {
    title: 'Remote Monitoring',
    desc: 'IoT-enabled remote diagnostics and alerts to minimize downtime and predict maintenance needs.',
    Icon: Cpu,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Software Integration',
    desc: 'Seamless integration with your existing HIS, EMR, and inventory systems for unified workflows.',
    Icon: Code,
    gradient: 'from-blue-600 to-green-600'
  },
  {
    title: 'Quality Assurance Audits',
    desc: 'Regular on-site and virtual audits to ensure equipment performance meets the highest standards.',
    Icon: ShieldCheck,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'End-of-Life Recycling',
    desc: 'Eco-friendly disposal and recycling programs for decommissioned equipment and electronics.',
    Icon: RefreshCcw,
    gradient: 'from-gray-500 to-gray-700'
  },
  {
    title: '24/7 Support',
    desc: 'Around-the-clock technical support via phone, email, and live chat for urgent issues.',
    Icon: PhoneCall,
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Emergency Response',
    desc: 'Rapid deployment teams for critical failures and natural disaster support.',
    Icon: Activity,
    gradient: 'from-pink-600 to-red-600'
  },
  {
    title: 'Digital Equipment Tracking',
    desc: 'GPS and RFID tracking solutions to monitor location and usage in real time.',
    Icon: Globe2,
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'Research Collaboration',
    desc: 'Partner with our R&D team to co-develop next-generation medical technologies.',
    Icon: Users,
    gradient: 'from-blue-400 to-purple-400'
  }
];
