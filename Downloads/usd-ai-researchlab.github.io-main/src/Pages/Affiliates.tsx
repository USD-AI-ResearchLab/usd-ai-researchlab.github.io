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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: '#C53030' }}>
            Affiliates
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#C53030' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 font-thin">
            Our network of affiliates and collaborative partners who support our mission of advancing AI research and innovation.
          </p>
          
          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {/* IEEE */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/IEEE.png" 
                alt="IEEE - Institute of Electrical and Electronics Engineers" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* IEEE USA */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/ieee_usa.png" 
                alt="IEEE USA - Institute of Electrical and Electronics Engineers United States" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* South Dakota Biotech Career Cluster */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/SD-BCC.png" 
                alt="South Dakota Biotechnology Career Cluster" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* Sterling */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/Sterling.png" 
                alt="Sterling - Technology Partner" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* Dakota */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/dakota.png" 
                alt="Dakota - Regional Partner" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* Area */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/Area.png" 
                alt="Area Organization" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>

            {/* Direct Companies */}
            <motion.div 
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/images/sponsor/direct.png" 
                alt="Direct Companies - Business Partner" 
                className="max-h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </motion.div>
          </div>

          {/* Partnership Information */}
          <motion.div className="mt-16 rounded-lg p-8" style={{ backgroundColor: '#FFE8E8' }} variants={fadeInUp}>
            <h2 className="text-2xl font-thin mb-6" style={{ color: '#C53030' }}>
              Partnership Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-thin">
              We welcome partnerships with organizations that share our commitment to advancing artificial intelligence research and education. Our affiliates play a crucial role in supporting our mission through various forms of collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Research Collaboration</h3>
                <p className="text-sm text-gray-600 font-thin">Joint research projects and knowledge sharing initiatives</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Educational Support</h3>
                <p className="text-sm text-gray-600 font-thin">Student internships, mentorship, and educational resources</p>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Technology Transfer</h3>
                <p className="text-sm text-gray-600 font-thin">Commercialization of research outcomes and innovations</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Affiliates;
// Force change
