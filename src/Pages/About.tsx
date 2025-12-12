import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return count;
};

// Animated Statistics Card Component
const AnimatedStatCard: React.FC<{ 
  title: string; 
  value?: number; 
  suffix?: string; 
  subtitle: string; 
  isText?: boolean 
}> = ({ title, value = 0, suffix = '', subtitle, isText = false }) => {
  const animatedValue = useCountUp(value, 2000);
  
  return (
    <div className="bg-white p-1.5 rounded-sm border border-gray-100">
      <h3 className="text-xs font-semibold mb-0.5 text-red-600">
        {title}
      </h3>
      {isText ? (
        <p className="text-xs text-gray-600 leading-tight">
          {subtitle}
        </p>
      ) : (
        <>
          <p className="text-base font-bold text-black mb-0.5">
            {animatedValue}{suffix}
          </p>
          <p className="text-xs text-gray-600">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
};

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
    <div className="pt-24 min-h-screen bg-white">
      <motion.div 
        className="container ml-0 px-4 py-8 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
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

        {/* Publications & Research Stats Section */}
        <motion.div className="w-full mb-8 flex justify-start" variants={fadeInUp}>
          <div className="bg-white border rounded-lg border-gray-200 p-3 max-w-md w-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-red-600">
                Publications & Research
              </h2>
              <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <AnimatedStatCard 
                title="Published Research"
                value={200}
                suffix="+"
                subtitle="Peer-Reviewed Articles"
              />
              
              <AnimatedStatCard 
                title="Books"
                value={10}
                suffix="+"
                subtitle="Published Works"
              />
              
              <AnimatedStatCard 
                title="Conferences"
                value={10}
                suffix="+"
                subtitle="International Events"
              />
              
              <AnimatedStatCard 
                title="Funding Sources"
                value={0}
                subtitle="SDBOR, DOD, NSF, Department Of Education"
                isText={true}
              />
            </div>
          </div>
        </motion.div>

        {/* News Section */}
        <motion.div variants={fadeInUp}>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">News</h2>
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
