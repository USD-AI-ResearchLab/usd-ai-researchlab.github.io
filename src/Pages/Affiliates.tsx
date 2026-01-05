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
        className="w-full max-w-7xl mx-auto px-6 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-20" variants={fadeInUp}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-6 text-logo-red">
            Affiliates
          </h1>
        </motion.div>

        {/* Partners Section - Categorized Cards */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="space-y-16">
            
            {/* Industry Partners Card */}
            <motion.div 
              className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 hover:shadow-2xl hover:border-logo-red/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <h2 className="text-4xl text-gray-800 mb-12 text-center font-light">
                Industry Partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <motion.div 
                  className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                >
                  <a href="https://sterling.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <div className="bg-white p-8 rounded-2xl mb-6">
                      <img 
                        src="/images/sponsor/Sterling.png" 
                        alt="Sterling Technology" 
                        className="h-32 w-auto object-contain" 
                      />
                    </div>
                    <h3 className="text-xl text-gray-800 text-center font-medium">Sterling</h3>
                  </a>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.vermillionchamber.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <div className="bg-white p-8 rounded-2xl mb-6">
                      <img 
                        src="/images/sponsor/Area.png" 
                        alt="Vermillion Area Chamber & Development" 
                        className="h-32 w-auto object-contain" 
                      />
                    </div>
                    <h3 className="text-xl text-gray-800 text-center leading-relaxed font-medium">Vermillion Area Chamber & Development</h3>
                  </a>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                >
                  <a href="https://www.dakotapc.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <div className="bg-white p-8 rounded-2xl mb-6">
                      <img 
                        src="/images/sponsor/dakota.png" 
                        alt="Dakota PC" 
                        className="h-32 w-auto object-contain" 
                      />
                    </div>
                    <h3 className="text-xl text-gray-800 text-center font-medium">Dakota PC</h3>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Academic Partners and Professional Organizations - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Academic Partners Card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 transition-all duration-500"
                variants={fadeInUp}
              >
                <h2 className="text-4xl text-gray-800 mb-12 text-center font-light">
                  Academic Partners
                </h2>
                <div className="flex justify-center">
                  <motion.div 
                    className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer max-w-sm"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                  >
                    <a href="https://www.sdbcc.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                      <div className="bg-white p-8 rounded-2xl mb-6">
                        <img 
                          src="/images/sponsor/SD-BCC.png" 
                          alt="South Dakota Biomedical Computing Consortium" 
                          className="h-32 w-auto object-contain" 
                        />
                      </div>
                      <h3 className="text-lg text-gray-800 text-center font-medium leading-relaxed">South Dakota Biomedical Computing Consortium (SDBCC)</h3>
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Professional Organizations Card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 transition-all duration-500"
                variants={fadeInUp}
              >
                <h2 className="text-4xl text-gray-800 mb-12 text-center font-light">
                  Professional Organizations
                </h2>
                <div className="flex justify-center gap-8">
                  <motion.div 
                    className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                  >
                    <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                      <div className="bg-white p-6 rounded-2xl mb-4">
                        <img 
                          src="/images/sponsor/IEEE.png" 
                          alt="IEEE" 
                          className="h-24 w-auto object-contain" 
                        />
                      </div>
                      <h3 className="text-base text-gray-800 text-center font-medium">IEEE</h3>
                    </a>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-2xl hover:border-logo-red hover:bg-gray-50/50 transition-all duration-400 group cursor-pointer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                  >
                    <a href="https://www.ieeeusa.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                      <div className="bg-white p-6 rounded-2xl mb-4">
                        <img 
                          src="/images/sponsor/ieee_usa.png" 
                          alt="IEEE USA" 
                          className="h-24 w-auto object-contain" 
                        />
                      </div>
                      <h3 className="text-base text-gray-800 text-center font-medium">IEEE USA</h3>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </motion.div>

        {/* Partnership Information */}
        <motion.div 
          className="bg-gradient-to-r from-logo-red/5 to-logo-red-light/5 border border-logo-red/20 rounded-3xl p-12 mt-20 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="text-center">
            <h3 className="text-3xl mb-8 text-gray-800 font-light">
              Partnership Opportunities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-xl max-w-2xl mx-auto">
              We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education.
            </p>
            <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                For partnership inquiries, please contact us at
              </p>
              <a 
                href="mailto:usd.airesearch.lab@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-logo-red text-white rounded-xl hover:bg-logo-red-light transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                usd.airesearch.lab@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Affiliates;
