import React from 'react';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

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
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Affiliates
          </h1>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Our network of affiliates and collaborative partners who support our mission of advancing AI research and innovation.
          </p>
        </motion.div>

        {/* Partners Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin mb-12 text-left text-logo-red">
            Our Partners & Collaborators
          </h2>
          
          {/* Modern Layout - Categories with Company Names Only */}
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Categories with Company Names */}
            <div className="space-y-8">
              
              <motion.div 
                className="border-l-4 border-red-600 pl-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-ubuntu">Industry Partners</h3>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>Sterling</p>
                  <p>Vermillion Area Chamber & Development</p>
                  <p>Dakota PC</p>
                </div>
              </motion.div>
              
              {/* Academic Partners */}
              <motion.div 
                className="border-l-4 border-red-600 pl-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-ubuntu">Academic Partners</h3>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>South Dakota Biomedical Computing Consortium (SDBCC)</p>
                </div>
              </motion.div>
              
              {/* Professional Organizations */}
              <motion.div 
                className="border-l-4 border-red-600 pl-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-ubuntu">Professional Organizations</h3>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  <p>IEEE</p>
                  <p>IEEE USA</p>
                </div>
              </motion.div>
            </div>
            
            {/* Partner Logos Card */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-8"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                {/* Partner Logos - 3 columns */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/Sterling.png" alt="Sterling Technology" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Vermillion Area Chamber & Development */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/Area.png" alt="Vermillion Area Chamber & Development" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Dakota PC */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/dakota.png" alt="Dakota PC" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                
                {/* SD-BCC */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/SD-BCC.png" alt="South Dakota Biomedical Computing Consortium" className="h-14 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                
                {/* IEEE */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/IEEE.png" alt="IEEE" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                
                {/* IEEE USA */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <img src="/images/sponsor/ieee_usa.png" alt="IEEE USA" className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
            
            {/* Partnership Information */}
            <motion.div 
              className="bg-white border border-gray-200 rounded-lg p-8 mt-12"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 font-ubuntu">
                Partnership Opportunities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For partnership inquiries, please contact us at{' '}
                <a href="mailto:kc.santosh@usd.edu" className="underline text-red-600 hover:text-red-800 transition-colors">
                  kc.santosh@usd.edu
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Affiliates;
