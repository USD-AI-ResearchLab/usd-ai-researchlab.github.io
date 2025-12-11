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
        <motion.div className="text-left mb-4" variants={fadeInUp}>
          <h1 className="text-4xl text-red-600 mb-4">
            USD AI Research
          </h1>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">USD AI Research</span> is the leading <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">artificial intelligence</span> research and development center based in South Dakota.
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            It brings together researchers in <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">computer vision</span>, <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">machine learning</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">natural language processing</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">deep learning</span>, reinforcement learning, <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">quantum computing</span>, and more. 
          The team includes undergraduate, master's, and PhD students, as well as postdoctoral scholars and faculty, all working on both foundational and applied AI. 
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            We specialize in areas such as <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">pattern recognition</span>, computer vision, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">image processing</span>, <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">data mining</span>, and <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">big data analytics</span>. Our interdisciplinary work impacts domains including <span className="bg-gradient-to-r from-black via-red-500 to-black bg-clip-text text-transparent">healthcare informatics</span>, medical imaging, document analysis, biometrics, forensics, speech processing, and the Internet of Things.
          </p>
          
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            Join us as pioneer the future of AI from the heart of South Dakota, the Mount Rushmore state!
          </p>
        </motion.div>

        {/* News Section */}
        <motion.div variants={fadeInUp}>
          <div className="mb-8">
            <h2 className="text-4xl text-red-600 mb-4">News</h2>
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
