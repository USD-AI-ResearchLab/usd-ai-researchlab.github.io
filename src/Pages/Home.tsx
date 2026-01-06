import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";
import logoImage from "../assets/logo.svg";

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="pt-40 pb-24 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-4">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500 to-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-l from-red-400 to-red-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-t from-red-300 to-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
          {/* Additional decorative elements */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-200 rounded-full opacity-30 blur-lg"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-300 rounded-full opacity-20 blur-md"></div>
        </div>

        <motion.div 
          className="w-full px-6 py-12 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Main Hero Content */}
          <motion.div className="text-center mb-24" variants={fadeInUp}>
            <div className="flex flex-col items-center">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <motion.div className="relative group">
                  <motion.img 
                    src={logoImage} 
                    alt="USD AI Research Lab Logo" 
                    className="w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] object-contain cursor-pointer transition-all duration-300 group-hover:drop-shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                  {/* Enhanced Glow effect */}
                  <div className="absolute inset-0 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] bg-gradient-to-r from-red-500 to-red-600 opacity-15 rounded-full blur-3xl -z-10 group-hover:opacity-25 transition-opacity duration-300"></div>
                  {/* Additional glow layers */}
                  <div className="absolute inset-0 w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] bg-red-400 opacity-10 rounded-full blur-2xl -z-20 animate-pulse"></div>
                </motion.div>
              </Link>
              
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-9xl font-extralight mt-6 mb-8 bg-gradient-to-r from-gray-900 via-red-700 via-gray-800 via-red-600 via-gray-900 to-black bg-clip-text text-transparent tracking-tight leading-none"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                USD AI Research
              </motion.h1>
              
              <motion.div 
                className="max-w-5xl mb-16"
                variants={fadeInUp}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-4 bg-gradient-to-r from-gray-900 via-red-600 to-gray-900 bg-clip-text text-transparent" 
                   style={{
                     background: 'linear-gradient(to right, #111827, #dc2626, #111827)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}>
                  Leading artificial intelligence research and development center
                </p>
                <p className="text-lg md:text-xl lg:text-2xl font-normal italic bg-gradient-to-r from-gray-800 via-red-500 to-gray-800 bg-clip-text text-transparent"
                   style={{
                     background: 'linear-gradient(to right, #1f2937, #ef4444, #1f2937)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     backgroundClip: 'text'
                   }}>
                  Pioneering the future of AI from South Dakota
                </p>
              </motion.div>
              
              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-8 mb-20"
                variants={fadeInUp}
              >
                <Link to="/publications">
                  <motion.button 
                    className="group px-12 py-5 border-2 border-red-600 text-red-700 rounded-2xl font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/90 hover:scale-105 relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Explore Research</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.button>
                </Link>
                <Link to="/people">
                  <motion.button 
                    className="group px-12 py-5 border-2 border-gray-700 text-gray-800 rounded-2xl font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/90 hover:scale-105 relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Meet Our Team</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Director's Message Section */}
          <motion.div 
            className="mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-red-50/80 to-gray-100/50 shadow-2xl border border-red-200/30 backdrop-blur-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Enhanced TEDx inspired background decoration */}
            <div className="absolute inset-0 opacity-8">
              <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-bl from-red-400 to-red-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-300 to-red-500 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-200 rounded-full blur-xl opacity-40"></div>
            </div>
            
            <div className="relative z-10 px-8 md:px-16 py-24">
              <div className="max-w-6xl mx-auto">
                {/* Mobile-first: Stack vertically, then side-by-side on larger screens */}
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
                  
                  {/* Enhanced Director's Photo */}
                  <motion.div 
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative mx-auto">
                      {/* Professional office-style frame with gradient */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl opacity-90 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"></div>
                      <div className="absolute -inset-2 bg-gradient-to-tr from-white to-red-50 rounded-2xl opacity-20"></div>
                      <img 
                        src="/faculty/kc-santosh-talk.jpg" 
                        alt="Prof. KC Santosh - Building sustainable AI for all"
                        className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-white/70 z-10 group-hover:ring-white transition-all duration-300"
                      />
                      {/* Enhanced Professional glow effect */}
                      <div className="absolute inset-0 w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-red-500 to-red-700 opacity-15 rounded-2xl blur-2xl transform -translate-x-3 translate-y-3 group-hover:opacity-25 transition-opacity duration-300"></div>
                      <div className="absolute -inset-6 bg-red-300 opacity-5 rounded-full blur-3xl"></div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Director's Message */}
                  <motion.div 
                    className="flex-1 text-center lg:text-left max-w-2xl"
                    variants={fadeInUp}
                  >
                    <motion.p 
                      className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-10 bg-gradient-to-r from-gray-900 via-red-700 via-gray-800 to-red-600 bg-clip-text text-transparent tracking-tight"
                      whileHover={{ scale: 1.01 }}
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      "Building sustainable AI for all"
                    </motion.p>
                    
                    <motion.p 
                      className="text-2xl md:text-3xl text-gray-700 font-normal mb-12 leading-relaxed"
                      variants={fadeInUp}
                    >
                      Transforming research into real-world impact
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col space-y-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100/50"
                      variants={fadeInUp}
                    >
                      <span className="text-3xl font-bold text-gray-900 tracking-wide">
                        Prof. KC Santosh
                      </span>
                      <span className="text-xl text-gray-700 font-medium">
                        Founding Director, USD AI Research Lab
                      </span>
                      <span className="text-base text-red-600 font-semibold uppercase tracking-widest bg-red-50 px-4 py-2 rounded-full inline-block">
                        TEDxUSD Speaker
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Call to Action Section */}
          <motion.div 
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/95 via-gray-50/90 to-red-50/80 backdrop-blur-lg shadow-2xl border border-white/40"
            variants={fadeInUp}
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Enhanced Background pattern */}
            <div className="absolute inset-0 opacity-6">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-16 left-16 w-40 h-40 border-2 border-red-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute bottom-16 right-16 w-32 h-32 border-2 border-red-500 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-red-300 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-red-200 rounded-full opacity-20 blur-sm"></div>
                <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-red-300 rounded-full opacity-15 blur-lg"></div>
              </div>
            </div>
            
            <div className="relative z-10 text-center py-20 px-10">
              <motion.h3 
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-gray-900 tracking-tight leading-tight"
                whileHover={{ scale: 1.02 }}
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Join Our Research Journey
              </motion.h3>
              
              <motion.p 
                className="text-2xl md:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-700 font-light"
                variants={fadeInUp}
              >
                Collaborate with leading researchers, explore cutting-edge AI technologies, 
                and shape the future of artificial intelligence.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                variants={staggerChildren}
              >
                <Link to="/opportunities">
                  <motion.button 
                    className="group px-14 py-6 border-2 border-red-600 text-red-700 rounded-2xl font-bold text-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-red-500/25 backdrop-blur-md bg-white/90 relative overflow-hidden min-w-[280px]"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Research Opportunities</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    className="group px-14 py-6 border-2 border-gray-700 text-gray-800 rounded-2xl font-bold text-xl hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-gray-500/25 backdrop-blur-md bg-white/90 relative overflow-hidden min-w-[280px]"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Additional decorative text */}
              <motion.p 
                className="text-lg text-gray-500 mt-8 italic"
                variants={fadeInUp}
              >
                Shaping tomorrow's AI landscape, today
              </motion.p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Home;
