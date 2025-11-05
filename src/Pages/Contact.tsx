import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            Contact
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Get in touch with the USD AI Research Lab team. We welcome collaboration opportunities, inquiries about our research, and partnerships.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;