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
        className="container mx-auto px-4 py-12 max-w-6xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red)' }}>
            Affiliates
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red)' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Our network of affiliates and collaborative partners who support our mission of advancing AI research and innovation.
          </p>
        </motion.div>

        {/* Sponsors Grid Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl font-thin mb-12 text-center" style={{ color: 'var(--logo-red)' }}>
            Our Sponsors & Partners
          </h2>
          
          {/* Compact Timeline Layout */}
          <div className="relative max-w-3xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Industry Partners - Left Side */}
            <div className="relative flex justify-end pr-6 mb-10">
              <div className="w-1/2 text-right">
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--logo-red)' }}>Industry Partners</h3>
                  <div className="flex justify-end space-x-4">
                    <img src="/images/sponsor/Area.png" alt="Area Companies" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    <img src="/images/sponsor/Sterling.png" alt="Sterling" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    <img src="/images/sponsor/dakota.png" alt="Dakota State" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--logo-red)' }}></div>
              </div>
            </div>
            
            {/* Academic Partners - Right Side */}
            <div className="relative flex justify-start pl-6 mb-10">
              <div className="w-1/2">
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--logo-red)' }}>Academic Partners</h3>
                  <div className="flex space-x-4">
                    <img src="/images/sponsor/SD-BCC.png" alt="South Dakota Biomedical Computing Collaborative" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--logo-red)' }}></div>
              </div>
            </div>
            
            {/* Professional Organizations - Left Side */}
            <div className="relative flex justify-end pr-6">
              <div className="w-1/2 text-right">
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--logo-red)' }}>Professional Organizations</h3>
                  <div className="flex justify-end space-x-4">
                    <img src="/images/sponsor/IEEE.png" alt="IEEE" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    <img src="/images/sponsor/ieee_usa.png" alt="IEEE USA" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--logo-red)' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Information */}
        <motion.div className="bg-gray-50 rounded-lg p-8" variants={fadeInUp}>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Partnership Opportunities
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education. Our partnerships span across industry, academia, and professional organizations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For partnership inquiries, please contact us at{' '}
            <a href="mailto:kc.santosh@usd.edu" className="underline" style={{ color: 'var(--logo-red)' }}>
              kc.santosh@usd.edu
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Affiliates;
