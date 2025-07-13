import {
  Box,
  Wrench,
  Calendar,
  BookOpen,
  Package,
  Monitor,
  Code,
  ShieldCheck,
  RefreshCw,
  Headset
} from 'lucide-react';

export const milestones = [
  {
    year: '2018',
    title: 'Foundation',
    subtitle: 'Humble beginnings in Ahmedabad',
    cardDetailedText: `Company founded by Hardik A Patel, driven by a passion for accessible healthcare solutions.
Started with just 2 employees and a single workshop.`,
  },
  {
    year: '2019',
    title: 'Regional Growth',
    subtitle: 'Branching out across Gujarat',
    cardDetailedText: `Opened our first regional office and secured key contracts with major hospitals and clinics.
Delivered over 100 units in the first quarter.`,
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    subtitle: 'Answering the global call',
    cardDetailedText: `Scaled up supply during COVID-19, delivering critical equipment to 50+ healthcare providers.
Launched 24/7 support helpline and emergency logistics.`,
  },
  {
    year: '2021',
    title: 'ISO & R&D Launch',
    subtitle: 'Quality and innovation',
    cardDetailedText: `Achieved ISO certification and launched our in-house R&D division.
Built prototypes for next-gen ventilators and monitoring devices.`,
  },
  {
    year: '2022',
    title: 'Innovation Roll-out',
    subtitle: 'Setting new benchmarks',
    cardDetailedText: `Introduced the Smart Ventilator and advanced surgical tools, raising the bar in patient care.
Patented 3 new automation processes in device calibration.`,
  },
  {
    year: '2023',
    title: 'Global Expansion',
    subtitle: 'Going international',
    cardDetailedText: `Expanded into Asia & Europe; recognized as a top global provider of medical equipment.
Established distribution centers in Singapore and Berlin.`,
  },
  {
    year: '2024',
    title: 'Continental Reach',
    subtitle: 'Serving across continents',
    cardDetailedText: `Reached 20+ branches in India and began serving partners across Africa.
Partnered with WHO for equipment standardization projects.`,
  },
];

export const services = [
  {
    title: 'Equipment Procurement',
    description:
      'We source top-quality medical equipment at unbeatable value, with industry-leading lead times.',
    benefits: ['Vetted manufacturers', 'Competitive pricing', 'Rapid global delivery'],
    color: 'border-blue-500',
    Icon: Box,
    gradient: 'from-blue-500 to-teal-400'
  },
  {
    title: 'Maintenance & Repair',
    description:
      'Expert technicians keep your devices running flawlessly, 24/7—so you can focus on patient care.',
    benefits: ['Minimize downtime', 'Extend equipment lifespan', 'Emergency on-site support'],
    color: 'border-green-500',
    Icon: Wrench,
    gradient: 'from-green-400 to-green-600'
  },
  {
    title: 'Consultation & Planning',
    description:
      'Customized strategies to optimize your facility’s equipment investments and workflows.',
    benefits: ['Tailored roadmaps', 'Budget optimization', 'Future-proof design'],
    color: 'border-purple-500',
    Icon: Calendar,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Training & Support',
    description:
      'Hands-on workshops and ongoing expert guidance to ensure safe, effective equipment use.',
    benefits: ['Staff proficiency', 'Patient safety', 'Continuous support'],
    color: 'border-pink-500',
    Icon: BookOpen,
    gradient: 'from-pink-400 to-pink-600'
  },
  {
    title: 'Spare Parts Supply',
    description:
      'Broad inventory of OEM and aftermarket parts to keep your operations running smoothly.',
    benefits: ['Extensive stock', 'Genuine parts', 'Quick turnaround'],
    color: 'border-teal-500',
    Icon: Package,
    gradient: 'from-teal-500 to-green-400'
  },
  {
    title: 'Remote Monitoring',
    description:
      'IoT-enabled remote diagnostics and alerts to minimize downtime and predict maintenance needs.',
    benefits: ['24/7 alerts', 'Predictive maintenance', 'Remote access'],
    color: 'border-blue-300',
    Icon: Monitor,
    gradient: 'from-blue-300 to-blue-600'
  },
  {
    title: 'Software Integration',
    description:
      'Seamless integration with your existing HIS, EMR, and inventory systems for unified workflows.',
    benefits: ['API based', 'Custom connectors', 'Real-time sync'],
    color: 'border-indigo-500',
    Icon: Code,
    gradient: 'from-indigo-400 to-indigo-700'
  },
  {
    title: 'Quality Assurance Audits',
    description:
      'Regular on-site and virtual audits to ensure equipment performance meets the highest standards.',
    benefits: ['Compliance checks', 'Detailed reports', 'Risk mitigation'],
    color: 'border-purple-300',
    Icon: ShieldCheck,
    gradient: 'from-purple-300 to-purple-600'
  },
  {
    title: 'End-of-Life Recycling',
    description:
      'Eco-friendly disposal and recycling programs for decommissioned equipment and electronics.',
    benefits: ['Responsible reuse', 'Safe disposal', 'Environmental compliance'],
    color: 'border-gray-500',
    Icon: RefreshCw,
    gradient: 'from-gray-400 to-gray-600'
  },
  {
    title: '24/7 Support',
    description:
      'Around-the-clock technical support via phone, email, and live chat for urgent issues.',
    benefits: ['Rapid response', 'Expert advice', 'Global coverage'],
    color: 'border-red-500',
    Icon: Headset,
    gradient: 'from-red-500 to-orange-400'
  }
];
