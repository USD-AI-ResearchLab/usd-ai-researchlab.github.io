import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Initiatives: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
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

  const toggleSection = (cardIndex: number, sectionTitle: string) => {
    const key = `${cardIndex}-${sectionTitle}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Chevron components for navigation
  const ChevronLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Scroll function like books
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Larger scroll for cards
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      
      let newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      // Loop back to start/end if we reach the edges
      if (newScroll > maxScroll) newScroll = 0;
      if (newScroll < 0) newScroll = maxScroll;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect like books
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (autoScrollEnabled) {
      intervalId = setInterval(() => {
        scroll('right');
      }, 4000); // Auto-scroll every 4 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScrollEnabled]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setAutoScrollEnabled(false);
  const handleMouseLeave = () => setAutoScrollEnabled(true);

  const categories = [
    {
      title: "AI Symposium",
      link: "/events/ai-symposium/2025",
      image: "/images/conferences/usd-logo.png",
      description: "Annual symposium bringing together AI researchers, industry experts, and students to share cutting-edge research and innovations.",
      sections: {
        "Keynote Speakers": ["World-renowned AI researchers", "Industry leaders from major tech companies", "Emerging AI startup founders"],
        "Research Tracks": ["Machine Learning", "Computer Vision", "Natural Language Processing", "Robotics"],
        "Workshops": ["Hands-on ML workshops", "AI ethics discussions", "Career development sessions"]
      }
    },
    {
      title: "AI Club", 
      link: "https://usdinvolved.usd.edu/organization/ai-club",
      isExternal: true,
      image: "/images/conferences/usd-logo.png",
      description: "Student-led organization fostering AI learning through projects, competitions, and networking opportunities.",
      sections: {
        "Activities": ["Weekly coding sessions", "AI project competitions", "Guest speaker events"],
        "Projects": ["Computer vision applications", "NLP chatbots", "Recommendation systems"],
        "Learning": ["Tutorial series", "Study groups", "Mentorship programs"]
      }
    },
    {
      title: "CAI Conference",
      link: "https://www.ieeesmc.org/cai-2026/",
      isExternal: true,
      image: "/images/conferences/ieee-master-logo.png",
      description: "IEEE Conference on Computational AI focusing on theoretical foundations and practical applications.",
      sections: {
        "Focus Areas": ["Computational intelligence", "Evolutionary algorithms", "Fuzzy systems"],
        "Presentations": ["Research papers", "Poster sessions", "Demo presentations"],
        "Networking": ["Industry panels", "Academic collaborations", "Career fair"]
      }
    },
    {
      title: "RTIP2R Conference",
      link: "https://rtip2r-conference.org/2025/",
      isExternal: true,
      image: "/images/conferences/springer-logo.png",
      description: "Real-Time Image Processing for Recognition conference showcasing advances in computer vision and pattern recognition.",
      sections: {
        "Topics": ["Real-time image processing", "Pattern recognition", "Computer vision applications"],
        "Sessions": ["Technical presentations", "Live demonstrations", "Interactive workshops"],
        "Applications": ["Medical imaging", "Autonomous systems", "Industrial vision"]
      }
    },
    {
      title: "AI Engineering",
      link: "https://www.aiengineering-conference.org",
      isExternal: true,
      image: "/images/conferences/ai-engineering.png",
      description: "Conference focused on engineering aspects of AI systems, deployment, and scalability challenges.",
      sections: {
        "Engineering Focus": ["AI system architecture", "MLOps and deployment", "Scalability solutions"],
        "Technical Sessions": ["Production AI systems", "Infrastructure design", "Performance optimization"],
        "Industry Insights": ["Case studies", "Best practices", "Lessons learned"]
      }
    },
    {
      title: "2AI Conference",
      link: "https://www.2ai-conference.org",
      isExternal: true,
      image: "/images/conferences/2ai-logo.png",
      description: "Conference on Applied Artificial Intelligence emphasizing practical AI solutions across industries.",
      sections: {
        "Application Domains": ["Healthcare AI", "Financial technology", "Smart cities", "Education technology"],
        "Technical Content": ["Applied research", "Implementation strategies", "Performance metrics"],
        "Collaboration": ["Industry partnerships", "Academic-industry bridge", "Innovation showcase"]
      }
    },
    {
      title: "CVMI Conference",
      link: "https://cvmi2024.iiita.ac.in/",
      isExternal: true,
      image: "/images/conferences/cvmi-logo.jpg",
      description: "Computer Vision and Machine Intelligence conference exploring the intersection of vision and intelligence.",
      sections: {
        "Research Areas": ["Computer vision", "Machine intelligence", "Deep learning for vision"],
        "Innovations": ["Novel architectures", "Vision transformers", "Multi-modal learning"],
        "Applications": ["Medical imaging", "Autonomous driving", "Augmented reality"]
      }
    }
  ];

  return (
    <motion.div 
      className="pt-24 min-h-screen bg-white"
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
        className="w-full py-8"
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

        {/* Main Scrolling Container - Like Books */}
        <div className="relative w-full max-w-[1600px] mx-auto px-4 lg:px-8">
          <div 
            className="relative" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left Navigation Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>

            {/* Scrolling Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 px-12 py-4 scroll-smooth hide-scrollbar"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    transition: {
                      duration: 0.3,
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 bg-gray-50 overflow-hidden flex items-center justify-center p-6">
                    <motion.img 
                      src={category.image} 
                      alt={category.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 filter drop-shadow-sm"
                      whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23f9fafb"/><text x="200" y="100" font-family="Arial" font-size="16" fill="#374151" text-anchor="middle" dy="0.3em">${category.title}</text></svg>`;
                      }}
                    />
                    {category.isExternal ? (
                      <a href={category.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${category.title}`} />
                    ) : (
                      <Link to={category.link} className="absolute inset-0 z-10" aria-label={`Visit ${category.title}`} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>

                    {/* Expandable Sections */}
                    <div className="space-y-2">
                      {Object.entries(category.sections).map(([sectionTitle, items], sectionIndex) => {
                        const sectionKey = `${index}-${sectionTitle}`;
                        const isExpanded = expandedSections[sectionKey];
                        
                        return (
                          <div key={sectionIndex} className="border border-gray-200 rounded-lg">
                            <button
                              onClick={() => toggleSection(index, sectionTitle)}
                              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                            >
                              <span className="font-medium text-gray-700">{sectionTitle}</span>
                              <svg 
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pb-3"
                              >
                                <ul className="space-y-1">
                                  {items.map((item: string, itemIndex: number) => (
                                    <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                      {category.isExternal ? (
                        <a 
                          href={category.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          to={category.link}
                          className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                        >
                          Explore Event
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Navigation Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg border border-gray-200 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>
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
    </motion.div>
  );
};

export default Initiatives;
