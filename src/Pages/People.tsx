import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const People: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
      >
        {/* Header */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            People
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Meet our distinguished faculty and research staff, along with our talented graduate students at the AI Research Lab.
          </p>
        </motion.div>

        {/* Content removed - page is now empty */}
        <motion.div className="text-center py-20" variants={fadeInUp}>
          <p className="text-gray-500 text-lg">
            Content coming soon...
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default People;
