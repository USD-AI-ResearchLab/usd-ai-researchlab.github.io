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
              className="bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 rounded-2xl shadow-xl border border-gray-200/80 p-10 backdrop-blur-sm hover:shadow-2xl hover:border-blue-200/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left pb-4 border-b-2 border-blue-200/60">
                Industry Partners
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div 
                  className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-blue-200/80 transition-all duration-400 group hover:bg-white"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.4 } }}
                >
                  <a href="https://sterling.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-400 border border-gray-100/80">
                      <img 
                        src="/images/sponsor/Sterling.png" 
                        alt="Sterling Technology" 
                        className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-400 filter group-hover:brightness-110 drop-shadow-md" 
                      />
                    </div>
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mt-6 group-hover:text-blue-700 transition-colors duration-300">Sterling</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-blue-200/80 transition-all duration-400 group hover:bg-white"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.4 } }}
                >
                  <a href="https://www.vermillionchamber.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-400 border border-gray-100/80">
                      <img 
                        src="/images/sponsor/Area.png" 
                        alt="Vermillion Area Chamber & Development" 
                        className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-400 filter group-hover:brightness-110 drop-shadow-md" 
                      />
                    </div>
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mt-6 group-hover:text-blue-700 transition-colors duration-300 leading-relaxed">Vermillion Area Chamber & Development</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-blue-200/80 transition-all duration-400 group hover:bg-white"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.4 } }}
                >
                  <a href="https://www.dakotapc.com/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-400 border border-gray-100/80">
                      <img 
                        src="/images/sponsor/dakota.png" 
                        alt="Dakota PC" 
                        className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-400 filter group-hover:brightness-110 drop-shadow-md" 
                      />
                    </div>
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mt-6 group-hover:text-blue-700 transition-colors duration-300">Dakota PC</h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Academic Partners Card */}
            <motion.div 
              className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 rounded-2xl shadow-xl border border-blue-200/80 p-10 backdrop-blur-sm hover:shadow-2xl hover:border-blue-300/80 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left pb-4 border-b-2 border-blue-300/60">
                Academic Partners
              </h2>
              <div className="flex justify-center">
                <motion.div 
                  className="flex flex-col items-center p-16 bg-gradient-to-br from-white via-blue-50/30 to-gray-50/50 rounded-3xl shadow-2xl border border-gray-200/60 hover:shadow-3xl hover:border-blue-200/80 transition-all duration-500 group max-w-2xl backdrop-blur-sm"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -12, transition: { duration: 0.5 } }}
                >
                  <a href="https://www.sdbcc.org/" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-blue-100/50 group-hover:border-blue-200/80">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-indigo-400/5 group-hover:from-blue-400/10 group-hover:to-indigo-400/10 transition-all duration-500"></div>
                      <div className="relative flex justify-center items-center min-h-[280px]">
                        <img 
                          src="/images/sponsor/SD-BCC.png" 
                          alt="South Dakota Biomedical Computing Consortium" 
                          className="h-64 w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-500 filter group-hover:brightness-105 group-hover:contrast-105 drop-shadow-lg group-hover:drop-shadow-xl" 
                        />
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="mt-8 text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-300 leading-tight tracking-wide">
                      South Dakota Biomedical Computing Consortium
                    </h3>
                    <p className="text-lg font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300 tracking-wider">
                      (SDBCC)
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Professional Organizations Card */}
            <motion.div 
              className="bg-gradient-to-br from-white via-gray-50/50 to-green-50/30 rounded-2xl shadow-xl border border-gray-200/80 p-10 backdrop-blur-sm hover:shadow-2xl hover:border-green-200/60 transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.4 } }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left pb-4 border-b-2 border-green-200/60">
                Professional Organizations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
                <motion.div 
                  className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-green-200/80 transition-all duration-400 group hover:bg-white"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.4 } }}
                >
                  <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-400 border border-blue-100/80">
                      <img 
                        src="/images/sponsor/IEEE.png" 
                        alt="IEEE" 
                        className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-400 filter group-hover:brightness-110 drop-shadow-md" 
                      />
                    </div>
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mt-6 group-hover:text-green-700 transition-colors duration-300">IEEE</h3>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-green-200/80 transition-all duration-400 group hover:bg-white"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.4 } }}
                >
                  <a href="https://www.ieeeusa.org/" target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg group-hover:shadow-xl transition-all duration-400 border border-blue-100/80">
                      <img 
                        src="/images/sponsor/ieee_usa.png" 
                        alt="IEEE USA" 
                        className="h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-400 filter group-hover:brightness-110 drop-shadow-md" 
                      />
                    </div>
                  </a>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mt-6 group-hover:text-green-700 transition-colors duration-300">IEEE USA</h3>
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </motion.div>

        {/* Partnership Information */}
        <motion.div 
          className="bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 border border-indigo-200/60 rounded-2xl p-10 mt-16 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-indigo-200/60 pb-3">
            Partnership Opportunities
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            For partnership inquiries, please contact us at{' '}
            <a href="mailto:kc.santosh@usd.edu" className="underline text-indigo-600 hover:text-indigo-800 transition-colors font-semibold">
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
