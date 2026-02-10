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
      title="Initiatives"
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
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
              Agreements/MOUs
            </h2>
            
            {/* MOUs List */}
            <div className="space-y-6">
              {/* MOU Item 1 - SDBCC */}
              <div className="py-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg 
                      className="w-6 h-6 text-logo-red" 
                      fill="currentColor" 
                      viewBox="0 0 640 512"
                    >
                      <path d="M323.4 85.2l-96.8 78.4c-16.1 13.19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516c-3.3 0-6.5 1.1-9.2 3.1L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.9-96.1l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64.8 215.7 69.6 200 80L128 128H48c-26.5 0-48 21.5-48 48v4 V304c0 26.5 21.5 48 48 48h108.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <span className="font-semibold">South Dakota Biomedical Computation Consortium (SDBCC):</span> A $6.5M Department of Education (DoEd) collaboration between <span className="font-semibold">USD Computer Science</span>, <span className="font-semibold">USD Sanford School of Medicine</span>, and <span className="font-semibold">SD School of Mines & Technology</span>. The partnership leverages $0.746M from the South Dakota Board of Regents (SDBOR) to advance biomedical computation research and education across South Dakota.
                    </p>
                    <a 
                      href="https://sd-bcc.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-logo-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      Visit SDBCC
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* MOU Item 2 */}
              <div className="py-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg 
                      className="w-6 h-6 text-logo-red" 
                      fill="currentColor" 
                      viewBox="0 0 640 512"
                    >
                      <path d="M323.4 85.2l-96.8 78.4c-16.1 13.19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516c-3.3 0-6.5 1.1-9.2 3.1L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.9-96.1l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64.8 215.7 69.6 200 80L128 128H48c-26.5 0-48 21.5-48 48v4 V304c0 26.5 21.5 48 48 48h108.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <span className="font-semibold">(December 2024)</span> The AI Research Lab signed an agreement with the <span className="font-semibold">Thumbay Institute for AI in Healthcare</span> at <span className="font-semibold">Gulf Medical University, UAE.</span>
                    </p>
                    <a 
                      href="https://gmu.ac.ae/tiaih_news/thumbay-institute-for-ai-in-healthcare-signs-mou-with-2ai-research-lab-university-of-south-dakota/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-logo-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      View MOU News
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leading Conferences Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
              Leading Conferences
            </h2>
            <div className="relative">
              {/* Grid Cards Container */}
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4"
              >
              {categories.map((category, index) => {
                const perCardFallback = DEFAULT_BANNERS[category.title] || FALLBACK_BANNER;

                return (
              
                  <motion.div
                    key={index}
                    className="w-full overflow-hidden relative"
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
