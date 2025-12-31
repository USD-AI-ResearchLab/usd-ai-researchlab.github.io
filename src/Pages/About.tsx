import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";
import { 
  fetchLinkedInData, 
  fetchLinkedInDataFromProxy, 
  LinkedInPost, 
  LinkedInProfile,
  formatEngagementStats,
  refreshPostDates,
  checkAndUpdateForNewYear
} from '../data/linkedin';

// Interface for news items
interface NewsItem {
  icon: string;
  title: string;
  date: string;
  content: string;
  subtitle: string;
  url: string;
}

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

// Animated stat card component
const AnimatedStatCard: React.FC<{
  title: string;
  value: number;
  suffix?: string;
  subtitle: string;
  isText?: boolean;
}> = ({ title, value, suffix = '', subtitle, isText = false }) => {
  const animatedValue = useCountUp(value, 2500);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 lg:p-5 xl:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-red-200">
      <div className="space-y-1 sm:space-y-2">
        <h3 className="font-semibold text-red-700 text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        {!isText ? (
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
            {animatedValue}
            <span className="text-sm sm:text-base text-red-600">{suffix}</span>
          </p>
        ) : null}
        <p className={`${isText ? 'text-xs sm:text-sm lg:text-base' : 'text-xs sm:text-sm'} text-gray-600 font-medium leading-tight`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  // News carousel state
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // LinkedIn data state
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPost[]>([]);
  const [linkedinProfile, setLinkedinProfile] = useState<LinkedInProfile | null>(null);
  const [isLoadingLinkedIn, setIsLoadingLinkedIn] = useState(true);
  const [linkedinError, setLinkedinError] = useState<string | null>(null);
  
  // News items data
  const newsItems: NewsItem[] = [
    {
      icon: "agreements",
      title: "Agreements/MOUs",
      date: "December 2024",
      content: "(December 2024) The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE.",
      subtitle: "Looking for a collaboration, don't hesitate to reach out.",
      url: "https://www.gmu.ac.ae/en/college-of-medicine/thumbay-institute-for-precision-medicine"
    },
    {
      icon: "funding",
      title: "Major Funding", 
      date: "November 2024",
      content: "(November 2024) Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative.",
      subtitle: "Advancing computational research in biomedical sciences.",
      url: "https://www.usd.edu/"
    },
    {
      icon: "research",
      title: "Research Infrastructure",
      date: "October 2024",
      content: "(October 2024) NSF Award #2346643 for CC* Campus Compute infrastructure project totaling $0.5M.",
      subtitle: "Building advanced computational capabilities for research excellence.",
      url: "https://www.nsf.gov/"
    },
    {
      icon: "collaboration",
      title: "International Partnerships",
      date: "September 2024",
      content: "(September 2024) Established new research partnerships with leading AI institutions across Europe and Asia.",
      subtitle: "Expanding global reach in artificial intelligence research.",
      url: "https://www.usd.edu/usd-ai-research"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
      }, 5000); // Move every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, newsItems.length]);

  // Fetch LinkedIn data
  useEffect(() => {
    const loadLinkedInData = async () => {
      setIsLoadingLinkedIn(true);
      setLinkedinError(null);
      
      // Check if it's a new year and update accordingly
      const yearCheck = checkAndUpdateForNewYear();
      if (yearCheck.isNewYear && yearCheck.updatedPosts) {
        setLinkedinPosts(yearCheck.updatedPosts);
        setIsLoadingLinkedIn(false);
        return;
      }
      
      try {
        // Try primary method first
        const data = await fetchLinkedInData();
        setLinkedinPosts(data.posts);
        setLinkedinProfile(data.profile);
      } catch (primaryError) {
        console.error('Primary LinkedIn fetch failed:', primaryError);
        try {
          // Try proxy method as fallback
          const data = await fetchLinkedInDataFromProxy();
          setLinkedinPosts(data.posts);
          setLinkedinProfile(data.profile);
        } catch (fallbackError) {
          console.error('Failed to fetch LinkedIn data:', fallbackError);
          setLinkedinError('Unable to load LinkedIn data');
          // Use refreshed static data as final fallback
          setLinkedinPosts(refreshPostDates());
        }
      } finally {
        setIsLoadingLinkedIn(false);
      }
    };

    loadLinkedInData();
    
    // Refresh data every 10 minutes
    const refreshInterval = setInterval(loadLinkedInData, 10 * 60 * 1000);
    
    return () => clearInterval(refreshInterval);
  }, []);

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
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      funding: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      ),
      research: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      collaboration: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    };

    return iconMap[iconType as keyof typeof iconMap] || iconMap.research;
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
    <div className="pt-32 pb-32 min-h-screen bg-white">
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

        {/* News & LinkedIn Section - Side by Side */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* News Section */}
            <div className="flex flex-col h-full">
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-gray-900 tracking-tight">News</h2>
              </div>
              
              <div 
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 lg:p-6 relative overflow-hidden backdrop-blur-sm flex-grow h-[450px] flex flex-col"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
                
                {/* Professional navigation arrows */}
                <button 
                  className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
                  aria-label="Previous news item"
                  onClick={prevNews}
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
                  aria-label="Next news item"
                  onClick={nextNews}
                >
                  <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Enhanced content layout */}
                <div className="mx-6 lg:mx-8 flex-grow flex flex-col justify-center">
                  {/* Professional header with refined icon */}
                  <div className="flex items-start space-x-3 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                        {getIcon(currentNews.icon)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-gray-900 leading-tight mb-1">{currentNews.title}</h3>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="font-medium">{currentNews.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium text-xs">Latest Update</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced content with better typography */}
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-base font-medium">
                      {currentNews.content}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {currentNews.subtitle}
                    </p>
                    
                    {/* Professional call-to-action */}
                    <div className="pt-3">
                      <a 
                        href={currentNews.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium text-sm group transition-colors duration-200"
                      >
                        <span>Read full announcement</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional pagination with enhanced design */}
                <div className="flex justify-center mt-6 space-x-2">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        index === currentNewsIndex 
                          ? 'bg-red-600 shadow-lg ring-2 ring-red-100' 
                          : 'bg-gray-300 hover:bg-red-300 hover:shadow-md'
                      }`}
                      onClick={() => goToNews(index)}
                      aria-label={`Go to news item ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* LinkedIn Section */}
            <div className="flex flex-col h-full">
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 text-gray-900 tracking-tight">LinkedIn Updates</h2>
              </div>

              <div className="flex flex-col flex-grow h-[450px]">
                {/* LinkedIn Profile Card - Subtle theme */}
                {linkedinProfile && (
                  <a 
                    href="https://www.linkedin.com/company/kc-ai/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 lg:p-4 mb-3 lg:mb-4 border border-gray-200 flex-shrink-0 hover:shadow-md transition-all duration-200 hover:border-red-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center group-hover:bg-red-700 transition-colors duration-200">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-800 transition-colors duration-200">{linkedinProfile.name}</h3>
                        <p className="text-gray-600 text-sm">{linkedinProfile.followers} followers • {linkedinProfile.established}</p>
                        <p className="text-gray-500 text-xs">{linkedinProfile.description}</p>
                        <p className="text-red-600 text-xs mt-1 group-hover:text-red-700">
                          Click to visit our LinkedIn page →
                        </p>
                      </div>
                    </div>
                  </a>
                )}

                {/* LinkedIn Posts Scrollable Container */}
                <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-3 lg:p-4 flex-grow">
                  <div className="linkedin-scroll overflow-y-auto h-full pr-2">
                  <div className="grid gap-4">
                    {isLoadingLinkedIn ? (
                      // Loading skeletons
                      Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl border border-gray-100 p-3 animate-pulse">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded mb-1"></div>
                              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded"></div>
                            <div className="h-3 bg-gray-200 rounded"></div>
                            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                          </div>
                        </div>
                      ))
                    ) : linkedinError ? (
                      <div className="text-center py-8 text-gray-600">
                        <p className="mb-2">Unable to load LinkedIn posts</p>
                        <p className="text-sm text-gray-500">{linkedinError}</p>
                      </div>
                    ) : (
                      linkedinPosts.slice(0, 6).map((post, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 rounded-xl border border-gray-100 p-3 hover:shadow-md transition-all duration-200 hover:border-gray-300"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900 text-sm">{post.author || 'USD AI Research'}</span>
                              </div>
                              <p className="text-xs text-gray-500">{post.date}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-800 text-sm leading-relaxed mb-3 line-clamp-3">
                            {post.content}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{formatEngagementStats(post)}</span>
                            <a 
                              href={post.postUrl || "https://www.linkedin.com/company/kc-ai/posts/?feedView=all"} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200 hover:underline"
                            >
                              View Post
                            </a>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute top-0 right-0 bg-gray-50 text-gray-600 px-2 py-1 rounded-bl-lg text-xs font-medium">
                  ↕ Scroll for more
                </div>
              </div>
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

export default About;
