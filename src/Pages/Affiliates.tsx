import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import FloatingScrollArrows from '../components/FloatingScrollArrows';

const Affiliates: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Grouped cards by category for 3-dot navigation
  const industryPartners = [
    { name: "Sterling", image: "/images/sponsor/Sterling.png", url: "https://www.sterlingcomputers.com/", alt: "Sterling" },
    { name: "Vermillion Chamber of Commerce", image: "/images/sponsor/Area.png", url: "https://livevermillion.com/", alt: "Vermillion Chamber of Commerce" },
    { name: "Dakota PC", image: "/images/sponsor/dakota.png", url: "https://dakotapcwarehouse.com/", alt: "Dakota PC" }
  ];

  const academicPartners = [
    { name: "South Dakota Biomedical Computing Consortium (SDBCC)", image: "/images/sponsor/SD-BCC.png", url: "https://sd-bcc.org", alt: "South Dakota Biomedical Computing Consortium" }
  ];

  const professionalOrganizations = [
    { name: "IEEE", image: "/images/sponsor/IEEE.png", url: "https://www.ieee.org/", alt: "IEEE" }
  ];

  const categories = [
    { name: "Industry Partners", cards: industryPartners },
    { name: "Academic Partners", cards: academicPartners },
    { name: "Professional Organizations", cards: professionalOrganizations }
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
    <PageLayout
      title="Affiliates"
    >
      <motion.div 
        className="px-8 pt-0 pb-8 w-full"
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
        {/* Multi-Card Carousel */}
        <motion.div 
          className="relative mb-8 transition-all duration-500"
          variants={fadeInUp}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 text-logo-red rounded-full text-xl font-light">
              {currentCategory.name}
            </span>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-1 sm:p-2 hover:bg-gray-100 transition-colors duration-200 rounded"
              disabled={categories.length <= 1}
              aria-label="Previous category"
              title="Previous category"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Multiple Cards Display */}
            <div className="flex justify-center items-center min-h-[350px] w-full overflow-x-auto px-2 sm:overflow-hidden">
              <div className="flex flex-nowrap gap-2 sm:gap-3 max-w-full">
                {currentCategory.cards.map((card, index) => (
                  <motion.div 
                    key={`${currentCategoryIndex}-${index}`}
                    className="flex flex-col items-center w-[140px] sm:w-[180px] md:w-[200px] h-64 sm:h-72 transition-all duration-300 group cursor-pointer hover:scale-105 p-2 overflow-hidden flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.3 } }}
                  >
                    <a 
                      href={card.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-between h-full w-full no-underline text-current"
                    >
                      {/* Logo Container */}
                      <div className="flex items-center justify-center w-full transition-colors mb-2 sm:mb-3 h-20 sm:h-28 md:h-32">
                        <img 
                          src={card.image} 
                          alt={card.alt} 
                          className="max-h-16 sm:max-h-20 md:max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Company Name */}
                      <div className="flex-1 flex items-center justify-center w-full px-1 overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 text-center font-semibold leading-tight group-hover:text-logo-red transition-colors duration-300 line-clamp-2 sm:line-clamp-3">
                          {card.name}
                        </h3>
                      </div>

                      {/* Visit Website Indicator */}
                      <div className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-logo-red text-xs sm:text-sm font-medium">
                          Visit Website
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={goToNext}
              className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-1 sm:p-2 hover:bg-gray-100 transition-colors duration-200 rounded"
              disabled={categories.length <= 1}
              aria-label="Next category"
              title="Next category"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots - 3 categories */}
          <div className="flex justify-center mt-1 space-x-2">
            {categories.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 transition-all duration-300 cursor-pointer ${
                  index === currentCategoryIndex 
                    ? 'bg-logo-red shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
                onClick={() => goToCategory(index)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Partnership Information - Separate Section */}
      <motion.div 
        className="w-full"
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
        <motion.div 
          className="transition-all duration-500"
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
          whileHover={{ y: -8, transition: { duration: 0.4 } }}
        >
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-logo-red tracking-tight">
              Partnership Opportunities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              We welcome collaborations with organizations that share our commitment to advancing artificial intelligence research and education.
            </p>
            <div className="text-left">
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                For partnership inquiries, please contact us at:
              </p>
              <div className="flex items-center justify-start">
                <a 
                  href="mailto:usd.airesearch.lab@gmail.com" 
                  className="inline-flex items-center text-logo-red hover:text-logo-red-light transition-colors duration-300 text-lg font-medium underline hover:no-underline"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  usd.airesearch.lab@gmail.com
                </a>
                <span className="text-gray-400 text-lg mx-3">|</span>
                <a 
                  href="mailto:kc.santosh@usd.edu" 
                  className="inline-flex items-center text-logo-red hover:text-logo-red-light transition-colors duration-300 text-lg font-medium underline hover:no-underline"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  kc.santosh@usd.edu
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Affiliates;
