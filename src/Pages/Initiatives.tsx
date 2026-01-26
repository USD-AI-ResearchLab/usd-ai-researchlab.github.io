import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const Initiatives: React.FC = () => {
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    {
      title: "AI Symposium",
      link: "/events/ai-symposium/2025",
      image: "/images/conferences/ai-symposium-new.svg",
      description: "Annual symposium bringing together AI researchers, industry experts, and students to share cutting-edge research and innovations."
    },
    {
      title: "AI Club", 
      link: "https://usdinvolved.usd.edu/organization/ai-club",
      isExternal: true,
      image: "/images/conferences/ai-club-new.svg",
      description: "Student-led organization fostering AI learning through projects, competitions, and networking opportunities."
    },
    {
      title: "RTIP2R Conference",
      link: "https://rtip2r-conference.org/2025/",
      isExternal: true,
      image: "/images/conferences/rtip2r-new.svg",
      description: "Leading conference on Recent Trends in Image Processing and Pattern Recognition attracting cutting-edge research on image processing, pattern recognition, computer vision, and machine learning."
    },
    {
      title: "AI Engineering",
      link: "https://www.aiengineering-conference.org",
      isExternal: true,
      image: "/images/conferences/ai-engineering-new.svg",
      description: "Conference on AI Engineering and Innovation with keynotes and technical sessions across healthcare, agriculture, energy, and automation. All papers submitted to IEEE Xplore with publication opportunities."
    },
    {
      title: "2AI Conference",
      link: "https://www.2ai-conference.org",
      isExternal: true,
      image: "/images/conferences/applied-ai-new.svg",
      description: "International Conference on Applied Artificial Intelligence focused on sustainable AI solutions, pattern recognition, computer vision, and real-world applications across healthcare, imaging, and IoT domains."
    },
    {
      title: "CVMI Conference",
      link: "https://cvmi2024.iiita.ac.in/",
      isExternal: true,
      image: "/images/conferences/cvmi-new.svg",
      description: "IEEE Computer Vision and Machine Intelligence Conference on pattern recognition, computer vision, and biometrics. Papers submitted to IEEE Xplore with IAPR Best Paper Awards and PhD Dissertation recognition."
    },
    {
      title: "Big Data Africa Symposium",
      link: "https://bigdataafricasymposium.org/symposium-2026/",
      isExternal: true,
      image: "/images/conferences/big-data-africa-new.svg",
      description: "Symposium on data-driven AI for healthcare, climate, agriculture, and security across Africa. Features keynotes, hands-on sessions, youth workshops, and opportunities for transforming research into sustainable impact."
    }
  ];

  // Use per-initiative fallbacks so images never incorrectly show another initiative's banner.
  // Also ensures we never fall back to any CAI-related asset.
  const DEFAULT_BANNERS: Record<string, string> = {
    "AI Symposium": "/images/conferences/ai-symposium-new.svg",
    "AI Club": "/images/conferences/ai-club-new.svg",
    "RTIP2R Conference": "/images/conferences/rtip2r-new.svg",
    "AI Engineering": "/images/conferences/ai-engineering-new.svg",
    "2AI Conference": "/images/conferences/applied-ai-new.svg",
    "CVMI Conference": "/images/conferences/cvmi-new.svg",
    "Big Data Africa Symposium": "/images/conferences/big-data-africa-new.svg",
  };

  const FALLBACK_BANNER = "/images/conferences/ai-symposium-new.svg";

  return (
    <PageLayout
      title="Initiatives & Conferences"
    >
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >

        {/* Main Grid Container */}
        <div className="relative w-full px-4 py-8 lg:px-8">
          {/* Agreements/MOUs Section */}
          <div className="mb-12 bg-gray-100 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
              Agreements/MOUs
            </h2>
            
            {/* MOUs List */}
            <div className="space-y-6">
              {/* MOU Item 1 */}
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="text-3xl font-bold text-logo-red min-w-fit">1</div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <span className="font-semibold">(December 2024)</span> The AI Research Lab signed an agreement with the <span className="font-semibold">Thumbay Institute for AI in Healthcare</span> at <span className="font-semibold">Gulf Medical University, UAE.</span>
                    </p>
                    <p className="text-gray-600 italic text-sm">
                      Looking for a collaboration? Don't hesitate to reach out.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leading Conferences Section */}
          <div className="mb-12 bg-gray-100 rounded-xl p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
              Leading Conferences
            </h2>
            <div className="relative">
              {/* Grid Cards Container */}
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4"
              >
              {categories.map((category, index) => {
                const perCardFallback = DEFAULT_BANNERS[category.title] || FALLBACK_BANNER;

                return (
              
                  <motion.div
                    key={index}
                    className="w-full bg-gray-100 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: index * 0.06, 
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Banner Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={category.image || perCardFallback}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.src.endsWith(perCardFallback) || img.src.endsWith(FALLBACK_BANNER)) return;
                          img.src = perCardFallback;
                        }}
                      />

                      {/* Make the whole banner clickable */}
                      {category.isExternal ? (
                        <a
                          href={category.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-20 cursor-pointer"
                          aria-label={`Open ${category.title}`}
                        />
                      ) : (
                        <Link
                          to={category.link}
                          className="absolute inset-0 z-20 cursor-pointer"
                          aria-label={`Open ${category.title}`}
                        />
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {category.description}
                      </p>

                      {/* Action */}
                      <div className="mt-6 relative z-30">
                        {category.title === "RTIP2R Conference" ? (
                          <div className="space-y-3">
                            <a href="https://rtip2r-conference.org/" target="_blank" rel="noopener noreferrer" className="block">
                              <span className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
                                Learn More
                                <svg 
                                  className="w-4 h-4 ml-2" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </span>
                            </a>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              <a href="https://rtip2r-conference.org/2025/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2025
                                </span>
                              </a>
                              <a href="https://rtip2r-conference.org/2024/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2024
                                </span>
                              </a>
                              <a href="https://rtip2r-conference.org/2023/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2023
                                </span>
                              </a>
                              <a href="https://rtip2r-conference.org/2022/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2022
                                </span>
                              </a>
                              <a href="https://rtip2r-conference.org/2021/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2021
                                </span>
                              </a>
                              <a href="https://rtip2r-conference.org/2018/" target="_blank" rel="noopener noreferrer">
                                <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                  2018
                                </span>
                              </a>
                            </div>
                          </div>
                        ) : category.isExternal ? (
                          <a
                            href={category.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                          >
                            <span className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
                              Learn More
                              <svg 
                                className="w-4 h-4 ml-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </a>
                        ) : (
                          <div className="mt-6 relative z-30 grid grid-cols-2 md:grid-cols-3 gap-3">
                            {category.title === "AI Symposium" ? (
                              <>
                                <a href="https://usd-ai-researchlab.github.io/#/events/ai-symposium/2025" target="_blank" rel="noopener noreferrer">
                                  <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                    2025
                                  </span>
                                </a>
                                <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-fourth-annual-ai-symposium" target="_blank" rel="noopener noreferrer">
                                  <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                    2024
                                  </span>
                                </a>
                                <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium" target="_blank" rel="noopener noreferrer">
                                  <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                    2023
                                  </span>
                                </a>
                                <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22" target="_blank" rel="noopener noreferrer">
                                  <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                    2022
                                  </span>
                                </a>
                                <a href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18" target="_blank" rel="noopener noreferrer">
                                  <span className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm">
                                    2021
                                  </span>
                                </a>
                              </>
                            ) : (
                              <Link to={category.link} className="inline-flex">
                                <span className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
                                  Learn More
                                  <svg 
                                    className="w-4 h-4 ml-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </span>
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </div>
            </div>
          </div>
        </div>

        {/* Hide Scrollbar Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
      </motion.div>
    </PageLayout>
  );
};

export default Initiatives;
