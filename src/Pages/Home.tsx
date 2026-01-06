import React from 'react';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";
import logoImage from "../assets/logo-copy.svg";
// import NewsCarousel from "../components/NewsCarousel"; // Unused for now

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
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section with Logo */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <div className="flex flex-col items-center">
            <img 
              src={logoImage} 
              alt="USD AI Research Lab Logo" 
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-6 object-contain drop-shadow-lg"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
              USD AI Research
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl">
              Leading artificial intelligence research and development center
            </p>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="flex flex-col lg:flex-row gap-8 mb-8" variants={fadeInUp}>
          <div className="flex-1 lg:min-w-0">
            <p className="text-lg text-black leading-relaxed mb-4 font-thin">
              <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">USD AI Research</span> is the leading <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">artificial intelligence</span> research and development center based in South Dakota.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4 font-thin">
              It brings together researchers in <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">computer vision</span>, <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">machine learning</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">natural language processing</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">deep learning</span>, reinforcement learning, <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">quantum computing</span>, and more. The team includes undergraduate, master's, and PhD students, as well as postdoctoral scholars and faculty, all working on both foundational and applied AI.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4 font-thin">
              We specialize in areas such as <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">pattern recognition</span>, computer vision, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">image processing</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">data mining</span>, and <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">big data analytics</span>. Our interdisciplinary work impacts domains including <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">healthcare informatics</span>, medical imaging, document analysis, biometrics, forensics, speech processing, and the Internet of Things.
            </p>
            <p className="text-lg text-black leading-relaxed mb-4 font-thin">
              Join us as pioneer the future of AI from the heart of South Dakota, the Mount Rushmore state!
            </p>
          </div>
        </motion.div>

      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Home;
