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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 heading-red">
            USD AI Research 
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-black leading-relaxed mb-6 font-thin">
            We are excited to have you explore our work, where we push the boundaries of foundational AI and machine learning while embracing sustainable AI solutions.
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-6 font-thin">
            Our research spans green computing, active learning, and scalable as well as robust AI solutions, ensuring efficiency while saying no to carbon footprint.
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-6 font-thin">
            We specialize in areas such as pattern recognition, computer vision, image processing, data mining, and big data analytics. Our interdisciplinary work impacts domains including healthcare informatics, medical imaging, document analysis, biometrics, forensics, speech processing, and the Internet of Things.
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-8 font-thin">
            Join us as we drive AI innovation with sustainability at its core!
          </p>
        </motion.div>

        {/* News Section */}
        <motion.div variants={fadeInUp}>
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">News</h2>
            <div className="w-20 h-1" style={{ backgroundColor: '#C53030' }}></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-black mb-6 font-thin">
              We are part of highly ambitious projects:
            </p>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#C53030' }}>
                <h3 className="text-xl font-semibold text-black mb-2">
                  South Dakota Biomedical Computation Collaborative
                </h3>
                <p className="text-black mb-2">
                  <span className="font-medium" style={{ color: '#C53030' }}>Funding: $7.245M</span>
                </p>
                <a 
                  href="https://sd-bcc.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Visit SD-BCC Website →
                </a>
              </div>

              {/* Project 2 */}
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#C53030' }}>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Research Infrastructure: CC* Campus Compute
                </h3>
                <p className="text-black mb-2">
                  <span className="font-medium">NSF Award # 2346643</span> | <span className="font-medium" style={{ color: '#C53030' }}>Funding: $0.5M</span>
                </p>
                <a 
                  href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2346643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  View NSF Award Details →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
