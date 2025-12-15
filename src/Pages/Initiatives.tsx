import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Initiatives: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  
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

  const categories = [
    {
      title: "AI Symposium",
      link: "/events/ai-symposium/2025",
      image: "/images/conferences/usd-clean.png",
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
      image: "/images/conferences/usd-clean.png",
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
      image: "/images/conferences/ieee-clean.png",
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
      image: "/images/conferences/springer-clean.png",
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
      image: "/images/conferences/ai-engineering-clean.svg",
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
      image: "/images/conferences/2ai-clean.svg",
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
      image: "/images/conferences/cvmi-clean.png",
      description: "Computer Vision and Machine Intelligence conference exploring the intersection of vision and intelligence.",
      sections: {
        "Research Areas": ["Computer vision", "Machine intelligence", "Deep learning for vision"],
        "Innovations": ["Novel architectures", "Vision transformers", "Multi-modal learning"],
        "Applications": ["Medical imaging", "Autonomous driving", "Augmented reality"]
      }
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16 mr-auto max-w-4xl" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-red-600">
            Initiatives
          </h1>
        </motion.div>

        {/* Main Grid - Left Aligned */}
        <motion.div 
          className="mr-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInUp}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gray-50 overflow-hidden flex items-center justify-center p-6">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-sm"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23f9fafb"/><text x="200" y="100" font-family="Arial" font-size="16" fill="#374151" text-anchor="middle" dy="0.3em">${category.title}</text></svg>`;
                  }}
                />
                {category.isExternal ? (
                  <a href={category.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${category.title}`} />
                ) : (
                  <Link to={category.link} className="absolute inset-0 z-10" aria-label={`Visit ${category.title}`} />
                )}
                
                {/* Overlay gradient */}
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
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="mt-20 text-left mr-auto max-w-4xl" variants={fadeInUp}>
          <h2 className="text-3xl font-light text-gray-800 mb-6">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our vibrant research community and participate in cutting-edge AI research initiatives. 
            Connect with fellow researchers, industry experts, and students passionate about artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
              Contact Research Team
            </button>
            <button className="px-8 py-3 border border-red-600 text-red-600 hover:bg-red-50 font-medium rounded-lg transition-colors duration-200">
              View All Publications
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Initiatives;
