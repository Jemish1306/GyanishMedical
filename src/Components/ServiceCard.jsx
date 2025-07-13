import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
    >
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="text-lg font-bold text-text-main mb-2">{title}</h3>
      <p className="text-sm text-text-subtle">{description}</p>
    </motion.div>
  );
}
