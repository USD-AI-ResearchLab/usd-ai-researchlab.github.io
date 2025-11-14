import React from 'react';
import { motion } from 'framer-motion';

const Affiliates: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Affiliates
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Our network of affiliates and collaborative partners who support our mission of advancing AI research and innovation.
          </p>
        </motion.div>

        {/* Partners & Sponsors Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-2xl font-light mb-12" style={{ color: 'var(--logo-red, #C53030)' }}>
            Partners & Sponsors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/IEEE.png" 
                alt="IEEE" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/SD-BCC.png" 
                alt="South Dakota Biomedical Computation Collaborative" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/dakota.png" 
                alt="Dakota" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/Sterling.png" 
                alt="Sterling" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/ieee_usa.png" 
                alt="IEEE USA" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/Area.png" 
                alt="Area" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/direct.png" 
                alt="Direct Companies" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/sponsor/logo.png" 
                alt="Partner Organization" 
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Affiliates;
