import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red)' }}>
            Welcome to the USD AI Research Lab!
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red)' }}></div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
            We are excited to have you explore our work, where we push the boundaries of foundational AI and machine learning while embracing sustainable AI solutions.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
            Our research spans green computing, active learning, and scalable as well as robust AI solutions, ensuring efficiency while saying no to carbon footprint.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
            We specialize in areas such as pattern recognition, computer vision, image processing, data mining, and big data analytics. Our interdisciplinary work impacts domains including healthcare informatics, medical imaging, document analysis, biometrics, forensics, speech processing, and the Internet of Things.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Join us as we drive AI innovation with sustainability at its core!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
