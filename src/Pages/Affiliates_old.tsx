import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const Affiliates: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // All individual cards data
  const allCards = [
    // Industry Partners
    {
      name: 'Sterling',
      image: '/images/sponsor/Sterling.png',
      link: 'https://sterling.com/',
      category: 'Industry Partners'
    },
    {
      name: 'Vermillion Area Chamber & Development',
      image: '/images/sponsor/Vermillion.png',
      link: 'https://www.vermillionchamber.com/',
      category: 'Industry Partners'
    },
    {
      name: 'Dakota PC',
      image: '/images/sponsor/DakotaPC.png',
      link: 'https://www.dakotapc.com/',
      category: 'Industry Partners'
    },
    // Academic Partners
    {
      name: 'South Dakota Board of Collaborative Convergence',
      image: '/images/sponsor/SD-BCC.png',
      link: 'https://www.sdbcc.org/',
      category: 'Academic Partners'
    },
    // Professional Organizations
    {
      name: 'IEEE',
      image: '/images/sponsor/IEEE.png',
      link: 'https://www.ieee.org/',
      category: 'Professional Organizations'
    },
    {
      name: 'IEEE USA',
      image: '/images/sponsor/ieee_usa.png',
      link: 'https://www.ieeeusa.org/',
      category: 'Professional Organizations'
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % allCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, allCards.length]);

  const goToPrevious = () => {
    setCurrentCardIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  };

  const goToNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % allCards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentCardIndex(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentCard = allCards[currentCardIndex];
      alt: "Vermillion Area Chamber & Development"
    },
    {
      name: "Dakota PC",
      image: "/images/sponsor/dakota.png",
      url: "https://www.dakotapc.com/",
      alt: "Dakota PC"
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prevIndex) => 
        (prevIndex + 1) % industryPartners.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [industryPartners.length]);

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
    <div className="pt-32 pb-32 min-h-screen bg-white affiliates-page">
      {/* Global styles to remove any underlines and image highlighting */}
      <style>{`
        .affiliates-page h1,
        .affiliates-page h2,
        .affiliates-page h3,
        .affiliates-page h4,
        .affiliates-page h5,
        .affiliates-page h6 {
          text-decoration: none !important;
          border-bottom: none !important;
        }
        .affiliates-page img {
          pointer-events: none !important;
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }
        .affiliates-page img:hover {
          outline: none !important;
          box-shadow: none !important;
          transform: none !important;
        }
      `}</style>
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

        {/* Single Card Carousel */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div 
            className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 hover:shadow-2xl hover:border-logo-red/60 transition-all duration-500 relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Navigation buttons */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
              aria-label="Previous partner"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
              aria-label="Next partner"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content area with padding for navigation buttons */}
            <div className="mx-8">
              <h2 className="text-4xl text-gray-800 mb-12 text-center font-light no-underline">
                {currentCard.category}
              </h2>
              
              {/* Single Card Display */}
              <div className="flex justify-center">
                <motion.div 
                  key={currentCardIndex}
                  className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-logo-red/20 hover:bg-gray-50/20 transition-all duration-300 group cursor-pointer max-w-sm"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <a href={currentCard.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <div className="bg-white p-8 rounded-2xl mb-6">
                      <img 
                        src={currentCard.image} 
                        alt={currentCard.name}
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-base text-gray-800 text-center font-medium">
                      {currentCard.name}
                    </h3>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center mt-12 space-x-2">
              {allCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentCardIndex
                      ? 'bg-red-600 shadow-lg ring-2 ring-red-100'
                      : 'bg-gray-300 hover:bg-red-300 hover:shadow-md'
                  }`}
                  aria-label={`Go to ${allCards[index].name}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
                
                {/* Carousel Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {industryPartners.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentPartnerIndex 
                          ? 'bg-logo-red shadow-lg' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => setCurrentPartnerIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Academic Partners and Professional Organizations - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Academic Partners Card */}
              <motion.div 
                className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 transition-all duration-500"
                variants={fadeInUp}
              >
                <h2 className="text-4xl text-gray-800 mb-12 text-center font-light no-underline">
                  Academic Partners
                </h2>
                <div className="flex justify-center">
                  <motion.div 
                    className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-logo-red/20 hover:bg-gray-50/20 transition-all duration-300 group cursor-pointer max-w-sm"
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
                <h2 className="text-4xl text-gray-800 mb-12 text-center font-light no-underline">
                  Professional Organizations
                </h2>
                <div className="flex justify-center gap-8">
                  <motion.div 
                    className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-logo-red/20 hover:bg-gray-50/20 transition-all duration-300 group cursor-pointer"
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
                    className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200/60 hover:shadow-xl hover:border-logo-red/20 hover:bg-gray-50/20 transition-all duration-300 group cursor-pointer"
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
            <h3 className="text-3xl mb-8 text-gray-800 font-light no-underline">
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
