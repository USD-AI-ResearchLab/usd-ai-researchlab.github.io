import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import FloatingScrollArrows from '../components/FloatingScrollArrows';

const Affiliates: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Grouped cards by category for 3-dot navigation
  const industryPartners = [
    { name: "Sterling", image: "/images/sponsor/Sterling.png", url: "https://www.sterlingcomputers.com/", alt: "Sterling" },
    { name: "Vermillion Chamber of Commerce", image: "/images/sponsor/Area.png", url: "https://vermillionchamber.com/", alt: "Vermillion Chamber of Commerce" },
    { name: "Dakota PC", image: "/images/sponsor/dakota.png", url: "https://www.dakotapc.com/", alt: "Dakota PC" }
  ];

  const academicPartners = [
    { name: "South Dakota Biomedical Computing Consortium (SDBCC)", image: "/images/sponsor/SD-BCC.png", url: "https://www.sdbcc.org/", alt: "South Dakota Biomedical Computing Consortium" }
  ];

  const professionalOrganizations = [
    { name: "IEEE USA", image: "/images/sponsor/ieee_usa.png", url: "https://www.ieeeusa.org/", alt: "IEEE USA" },
    { name: "IEEE", image: "/images/sponsor/IEEE.png", url: "https://www.ieee.org/", alt: "IEEE" }
  ];

  const categories = [
    { name: "Industry Partner", cards: industryPartners },
    { name: "Academic Partner", cards: academicPartners },
    { name: "Professional Organization", cards: professionalOrganizations }
  ];

  // Carousel state - 3 categories showing all cards simultaneously
  const [currentCategoryIndex, setCategoryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentCategory = categories[currentCategoryIndex];

  // Auto-rotation effect - 3 seconds per category
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCategoryIndex(prevCat => (prevCat + 1) % categories.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, categories.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCategoryIndex(prevIndex => 
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCategoryIndex(prevIndex => (prevIndex + 1) % categories.length);
  };

  const goToCategory = (index: number) => {
    setCategoryIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <motion.div 
        className="container mx-auto px-6 py-20"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {/* Header */}
        <motion.div className="text-left mb-20" variants={fadeIn}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Affiliates
          </h1>
        </motion.div>

        {/* Multi-Card Carousel */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl border border-gray-200/80 p-12 mb-20 transition-all duration-500 relative max-w-6xl"
          variants={fadeInUp}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 bg-logo-red/10 text-logo-red rounded-full text-lg font-semibold border-2 border-logo-red/30">
              {currentCategory.name}
            </span>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
              disabled={categories.length <= 1}
              aria-label="Previous category"
              title="Previous category"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Multiple Cards Display */}
            <div className="flex justify-center px-8 gap-4">
              {currentCategory.cards.map((card, index) => (
                <motion.div 
                  key={`${currentCategoryIndex}-${index}`}
                  className="flex flex-col items-center bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer p-6 flex-1 max-w-xs hover:border-logo-red/30"
                  style={{ minWidth: '240px', height: '320px' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
                >
                  <a 
                    href={card.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-between h-full w-full no-underline"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {/* Logo Container */}
                    <div className="bg-gray-50 p-4 rounded-xl mb-4 flex items-center justify-center w-full group-hover:bg-logo-red/10 transition-colors border border-gray-100" style={{ height: '140px' }}>
                      <img 
                        src={card.image} 
                        alt={card.alt} 
                        className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Company Name */}
                    <div className="flex-1 flex items-center justify-center w-full">
                      <h3 className="text-lg text-gray-800 text-center font-semibold leading-tight px-2 group-hover:text-logo-red transition-colors duration-300">
                        {card.name}
                      </h3>
                    </div>

                    {/* Visit Website Indicator */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-logo-red text-sm font-medium">
                        Visit Website
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
              disabled={categories.length <= 1}
              aria-label="Next category"
              title="Next category"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots - 3 categories */}
          <div className="flex justify-center mt-8 space-x-3">
            {categories.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentCategoryIndex 
                    ? 'bg-logo-red shadow-lg transform scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
                }`}
                onClick={() => goToCategory(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Partnership Information */}
        <motion.div 
          className="bg-gradient-to-r from-logo-red/5 to-logo-red-light/5 border border-logo-red/20 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500"
          variants={fadeInUp}
          whileHover={{ y: -8, transition: { duration: 0.4 } }}
        >
          <div className="text-left">
            <h3 className="text-3xl mb-8 text-gray-800 font-light no-underline">
              Partnership Opportunities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-xl">
              We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education.
            </p>
            <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                For partnership inquiries, please contact us at:
              </p>
              <div className="flex items-start flex-wrap">
                <a 
                  href="mailto:usd.airesearch.lab@gmail.com" 
                  className="inline-flex items-center px-6 py-3 bg-logo-red text-white rounded-xl hover:bg-logo-red-light transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  usd.airesearch.lab@gmail.com
                </a>
              </div>
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
