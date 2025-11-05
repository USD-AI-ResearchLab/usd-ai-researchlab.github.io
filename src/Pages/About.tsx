import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

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
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            About
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 leading-relaxed font-thin">
            Welcome to the USD AI Research Lab!
          </p>
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

        {/* Research Areas Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">Research Areas</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Sustainable AI & Green Computing</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Developing energy-efficient AI solutions with minimal carbon footprint.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Pattern Recognition & Computer Vision</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Advancing visual understanding and automated pattern detection systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Data Mining & Big Data Analytics</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Extracting meaningful insights from large-scale datasets using advanced analytics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Healthcare Informatics & Medical Imaging</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Applying AI to improve healthcare outcomes through intelligent medical systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Active Learning & Scalable AI</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Creating adaptive learning systems that scale efficiently with minimal supervision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Biometrics & Forensics</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Developing secure identification systems and forensic analysis tools.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Our Mission</h2>
          <p className="text-xl text-gray-600 font-thin leading-relaxed">
            Driving AI innovation with sustainability at its core, pushing the boundaries of foundational AI and machine learning while ensuring efficiency and environmental responsibility.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
