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

        {/* Partners Section - Categorized Cards */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Industry Partners Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left pb-4">
                Industry Partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                >
                  <a href="https://sterling.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img 
                        src="/images/sponsor/Sterling.png" 
                        alt="Sterling Technology" 
                        className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110" 
                      />
                    </div>
                  </a>
                  <h3 className="text-base font-semibold text-gray-800 text-center mt-4 group-hover:text-gray-900 transition-colors">Sterling</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.vermillionchamber.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img 
                        src="/images/sponsor/Area.png" 
                        alt="Vermillion Area Chamber & Development" 
                        className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110" 
                      />
                    </div>
                  </a>
                  <h3 className="text-base font-semibold text-gray-800 text-center mt-4 group-hover:text-gray-900 transition-colors">Vermillion Area Chamber & Development</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.dakotapc.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img 
                        src="/images/sponsor/dakota.png" 
                        alt="Dakota PC" 
                        className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110" 
                      />
                    </div>
                  </a>
                  <h3 className="text-base font-semibold text-gray-800 text-center mt-4 group-hover:text-gray-900 transition-colors">Dakota PC</h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Academic Partners Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left pb-4">
                Academic Partners
              </h2>
              <div className="flex justify-center">
                <motion.div 
                  className="flex flex-col items-center p-12 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group max-w-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.4 } }}
                >
                  <a href="https://www.sdbcc.org/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-white to-gray-50 p-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img 
                        src="/images/sponsor/SD-BCC.png" 
                        alt="South Dakota Biomedical Computing Consortium" 
                        className="h-56 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-105" 
                      />
                    </div>
                  </a>
                  <h3 className="text-xl font-bold text-gray-800 text-center mt-6 group-hover:text-gray-900 transition-colors leading-relaxed">South Dakota Biomedical Computing Consortium (SDBCC)</h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Professional Organizations Card */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-left pb-4">
                Professional Organizations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <motion.div 
                  className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img 
                        src="/images/sponsor/IEEE.png" 
                        alt="IEEE" 
                        className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110" 
                      />
                    </div>
                  </a>
                  <h3 className="text-base font-semibold text-gray-800 text-center mt-4 group-hover:text-gray-900 transition-colors">IEEE</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.ieeeusa.org/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <img 
                        src="/images/sponsor/ieee_usa.png" 
                        alt="IEEE USA" 
                        className="h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110" 
                      />
                    </div>
                  </a>
                  <h3 className="text-base font-semibold text-gray-800 text-center mt-4 group-hover:text-gray-900 transition-colors">IEEE USA</h3>
                </motion.div>
              </div>
            </motion.div>
            
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
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Affiliates;
