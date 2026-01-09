import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const Initiatives: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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
      description: "Real-Time Image Processing for Recognition conference showcasing advances in computer vision and pattern recognition."
    },
    {
      title: "AI Engineering",
      link: "https://www.aiengineering-conference.org",
      isExternal: true,
      image: "/images/conferences/ai-engineering-new.svg",
      description: "Conference focused on engineering aspects of AI systems, deployment, and scalability challenges."
    },
    {
      title: "2AI Conference",
      link: "https://www.2ai-conference.org",
      isExternal: true,
      image: "/images/conferences/applied-ai-new.svg",
      description: "Conference on Applied Artificial Intelligence emphasizing practical AI solutions across industries."
    },
    {
      title: "CVMI Conference",
      link: "https://cvmi2024.iiita.ac.in/",
      isExternal: true,
      image: "/images/conferences/cvmi-new.svg",
      description: "Computer Vision and Machine Intelligence conference exploring the intersection of vision and intelligence."
    },
    {
      title: "Big Data Africa Symposium",
      link: "https://bigdataafricasymposium.org/symposium-2026/",
      isExternal: true,
      image: "/images/conferences/big-data-africa-new.svg",
      description: "Symposium focused on big data analytics, AI applications, and digital transformation across Africa."
    }
  ];

  return (
    <motion.div 
      className="pt-32 pb-32 min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      }}
    >
      <motion.div 
        className="w-full py-8 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16 max-w-4xl ml-4 lg:ml-8" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-red-600">
            Initiatives
          </h1>
        </motion.div>

        {/* Main Grid Container */}
        <div className="relative w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Grid Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden relative group"
                  initial={{ 
                    opacity: 0, 
                    scale: 0.85, 
                    y: 120, 
                    rotateX: -20,
                    rotateY: -5
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    transition: { 
                      delay: index * 0.12, 
                      duration: 1.2,
                      type: "spring",
                      stiffness: 80,
                      damping: 12
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -20,
                    rotateY: 8,
                    rotateX: -3,
                    boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { duration: 0.15 }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1200px"
                  }}
                >
                  {/* Clickable overlay for entire card */}
                  {category.isExternal ? (
                    <a 
                      href={category.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute inset-0 z-20 cursor-pointer" 
                      aria-label={`Visit ${category.title}`} 
                    />
                  ) : (
                    <Link 
                      to={category.link} 
                      className="absolute inset-0 z-20 cursor-pointer" 
                      aria-label={`Visit ${category.title}`} 
                    />
                  )}

                  {/* Image Section */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    <motion.img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-all duration-500"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          delay: index * 0.15 + 0.2, 
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }}
                      whileHover={{
                        scale: 1.12,
                        rotateZ: 0.5,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${category.image}`);
                        e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23f9fafb"/><text x="200" y="100" font-family="Arial" font-size="16" fill="#374151" text-anchor="middle" dy="0.3em">${category.title}</text></svg>`;
                      }}
                    />
                    
                    {/* Enhanced gradient overlay with animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
                      initial={{ opacity: 0.3 }}
                      whileHover={{ 
                        opacity: 0.1,
                        background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent, transparent)",
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Professional glow border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-t-2xl border-2 border-transparent pointer-events-none"
                      whileHover={{
                        borderColor: "rgba(59, 130, 246, 0.6)",
                        boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.4)",
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Floating particles effect */}
                    <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${60 + i * 10}%`
                          }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            y: [0, -30, -60],
                            x: [0, Math.sin(i) * 20, Math.sin(i * 2) * 10],
                            scale: [0.5, 1, 0.3]
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <motion.div 
                    className="p-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      transition: { 
                        delay: index * 0.15 + 0.5, 
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <motion.h3 
                      className="text-2xl font-semibold text-gray-800 mb-3"
                      whileHover={{ 
                        color: "#dc2626",
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 text-sm leading-relaxed"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {category.description}
                    </motion.p>

                    {/* Enhanced Action Button */}
                    <motion.div 
                      className="mt-6 relative z-30"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0, scale: 0.98 }}
                    >
                      {category.isExternal ? (
                        <motion.span 
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 pointer-events-none shadow-lg"
                          whileHover={{
                            boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                            scale: 1.05,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.span
                            animate={{ 
                              background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                            className="absolute inset-0 rounded-lg"
                          />
                          Learn More
                          <motion.svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </motion.svg>
                        </motion.span>
                      ) : (
                        <motion.div className="mt-6 relative z-30 grid grid-cols-2 md:grid-cols-3 gap-3">
                          {category.title === "AI Symposium" ? (
                            <>
                              <a href="https://usd-ai-researchlab.github.io/#/events/ai-symposium/2025" target="_blank" rel="noopener noreferrer">
                                <motion.span 
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm"
                                  whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  2025
                                </motion.span>
                              </a>
                              <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-fourth-annual-ai-symposium" target="_blank" rel="noopener noreferrer">
                                <motion.span 
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm"
                                  whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  2024
                                </motion.span>
                              </a>
                              <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium" target="_blank" rel="noopener noreferrer">
                                <motion.span 
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm"
                                  whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  2023
                                </motion.span>
                              </a>
                              <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22" target="_blank" rel="noopener noreferrer">
                                <motion.span 
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm"
                                  whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  2022
                                </motion.span>
                              </a>
                              <a href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18" target="_blank" rel="noopener noreferrer">
                                <motion.span 
                                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg text-sm"
                                  whileHover={{
                                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                  }}
                                >
                                  2021
                                </motion.span>
                              </a>
                            </>
                          ) : (
                            <motion.span 
                              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg transition-all duration-300 pointer-events-none shadow-lg"
                              whileHover={{
                                boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)",
                                scale: 1.05,
                                transition: { duration: 0.2 }
                              }}
                            >
                              Explore Event
                              <motion.svg 
                                className="w-4 h-4 ml-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 3, 0] }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatType: "loop"
                                }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </motion.svg>
                            </motion.span>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
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

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
      </motion.div>
    </motion.div>
  );
};

export default Initiatives;
