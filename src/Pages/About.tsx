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
    <div className="bg-white p-2 sm:p-3 lg:p-3 xl:p-4 rounded-sm border border-gray-100 h-full flex flex-col justify-center">
      <h3 className="text-xs sm:text-xs lg:text-sm font-semibold mb-1 text-red-600">
        {title}
      </h3>
      {isText ? (
        <p className="text-xs sm:text-xs lg:text-sm text-gray-600 leading-tight">
          {subtitle}
        </p>
      ) : (
        <>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-black mb-1">
            {animatedValue}{suffix}
          </p>
          <p className="text-xs sm:text-xs lg:text-sm text-gray-600">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
};

const About: React.FC = () => {
  // News carousel state
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  // News items data
  const newsItems = [
    {
      icon: "agreements",
      title: "Agreements/MOUs",
      content: "(December 2024) The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE.",
      subtitle: "Looking for a collaboration, don't hesitate to reach out."
    },
    {
      icon: "funding",
      title: "Major Funding",
      content: "(November 2024) Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative.",
      subtitle: "Advancing computational research in biomedical sciences."
    },
    {
      icon: "research",
      title: "Research Infrastructure",
      content: "(October 2024) NSF Award #2346643 for CC* Campus Compute infrastructure project totaling $0.5M.",
      subtitle: "Building advanced computational capabilities for research excellence."
    },
    {
      icon: "collaboration",
      title: "International Partnerships",
      content: "(September 2024) Established new research partnerships with leading AI institutions across Europe and Asia.",
      subtitle: "Expanding global reach in artificial intelligence research."
    }
  ];

  // Navigation functions
  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNews = (index: number) => {
    setCurrentNewsIndex(index);
  };

  // Icon component
  const getIcon = (iconType: string) => {
    const iconMap = {
      agreements: (
        <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      funding: (
        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
      research: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      collaboration: (
        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    };

    const iconColor = {
      agreements: "bg-yellow-100",
      funding: "bg-green-100", 
      research: "bg-blue-100",
      collaboration: "bg-purple-100"
    };

    return (
      <div className={`w-12 h-12 ${iconColor[iconType as keyof typeof iconColor]} rounded-full flex items-center justify-center mr-4`}>
        {iconMap[iconType as keyof typeof iconMap]}
      </div>
    );
  };

  const currentNews = newsItems[currentNewsIndex];
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
        className="w-full px-4 py-8"
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

        {/* Main Content Section with Side Card */}
        <motion.div className="flex flex-col lg:flex-row gap-8 mb-8" variants={fadeInUp}>
          {/* Text Content */}
          <div className="flex-1 lg:min-w-0">
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
          </div>

          {/* Publications & Research Stats Card */}
          <div className="flex-shrink-0 w-full lg:w-[480px] xl:w-[520px]">
            <div className="bg-white border rounded-lg border-gray-200 p-4 sm:p-6 lg:p-8 w-full shadow-md min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] xl:min-h-[350px] flex flex-col">
              <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-red-600">
                  Publications & Research
                </h2>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-3 xl:gap-4 flex-grow">
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
          </div>
        </motion.div>

        {/* News Section */}
        <motion.div variants={fadeInUp}>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">News</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 relative">
            {/* Navigation arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous news item"
              onClick={prevNews}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next news item"
              onClick={nextNews}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content */}
            <div className="mx-12">
              {/* Header with icon */}
              <div className="flex items-center mb-6">
                {getIcon(currentNews.icon)}
                <h3 className="text-2xl font-semibold text-gray-900">{currentNews.title}</h3>
              </div>

              {/* Main content */}
              <div className="space-y-4">
                <p className="text-gray-800 leading-relaxed">
                  <strong>{currentNews.content}</strong>
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {currentNews.subtitle}
                </p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentNewsIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => goToNews(index)}
                  aria-label={`Go to news item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
