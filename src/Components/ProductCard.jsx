// // src/components/ProductCard.jsx
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const container = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.4 } },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show:   { opacity: 1, y: 0 },
// };

// export default function ProductCard({ product }) {
//   return (
//     <motion.div
//       className="relative h-screen w-full overflow-hidden"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.5 }}
//       variants={container}
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 hover:scale-110"
//         style={{ backgroundImage: `url(${product.image})` }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Centered text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//         <motion.h2
//           className="text-6xl font-extrabold text-white mb-6 drop-shadow-2xl"
//           variants={item}
//         >
//           {product.name}
//         </motion.h2>

//         <motion.p
//           className="max-w-3xl text-2xl italic text-gray-100 mb-8 leading-relaxed"
//           variants={item}
//         >
//           {product.fullDesc}
//         </motion.p>

//         <motion.div variants={item}>
//           <Link
//             to={`/products/${product.slug}`}
//             className="bg-accent text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-accent/90 transition"
//           >
//             View Details
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }



// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0 },
};

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          className="text-6xl font-extrabold mb-6 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
          variants={item}
        >
          {product.name}
        </motion.h2>

        <motion.p
          className="max-w-3xl text-2xl italic mb-8 leading-relaxed text-indigo-100"
          variants={item}
        >
          {product.fullDesc}
        </motion.p>

    <motion.div variants={item}>
  <Link
    to={`/products/${product.slug}`}
    className="
      bg-gradient-to-r 
      from-purple-400 
      via-pink-500 
      to-red-500 
      text-white 
      px-8 
      py-3 
      rounded-full 
      font-medium 
      shadow-lg 
      transform 
      hover:scale-105 
      hover:opacity-90 
      transition
    "
  >
    View Details
  </Link>
</motion.div>

      </div>
    </motion.div>
  );
}
