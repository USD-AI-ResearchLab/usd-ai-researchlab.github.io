import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  linkedinProfile, 
  getRecentLinkedInPosts, 
  formatPostContent, 
  LinkedInPost, 
  getEngagementSummary,
  getTrendingPost,
  fetchLinkedInData,
  simulateRealTimeUpdates 
} from '../data/linkedin';

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
  const [isHovered, setIsHovered] = useState(false);
  
  // LinkedIn data state
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPost[]>([]);
  const [isLoadingLinkedIn, setIsLoadingLinkedIn] = useState(true);
  const [engagementSummary, setEngagementSummary] = useState({ totalLikes: 0, totalComments: 0, totalShares: 0, averageEngagement: 0 });
  const [trendingPost, setTrendingPost] = useState<LinkedInPost | null>(null);
  const [followerCount, setFollowerCount] = useState("4.0k");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [recentUpdates, setRecentUpdates] = useState(0);
  const profile = linkedinProfile;
  
  // News items data
  const newsItems = [
    {
      icon: "agreements",
      title: "Agreements/MOUs",
      date: "December 2024",
      content: "(December 2024) The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE.",
      subtitle: "Looking for a collaboration, don't hesitate to reach out."
    },
    {
      icon: "funding",
      title: "Major Funding",
      date: "November 2024",
      content: "(November 2024) Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative.",
      subtitle: "Advancing computational research in biomedical sciences."
    },
    {
      icon: "research",
      title: "Research Infrastructure",
      date: "October 2024",
      content: "(October 2024) NSF Award #2346643 for CC* Campus Compute infrastructure project totaling $0.5M.",
      subtitle: "Building advanced computational capabilities for research excellence."
    },
    {
      icon: "collaboration",
      title: "International Partnerships",
      date: "September 2024",
      content: "(September 2024) Established new research partnerships with leading AI institutions across Europe and Asia.",
      subtitle: "Expanding global reach in artificial intelligence research."
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
      }, 5000); // Move every 5 seconds (increased from 3 seconds)

      return () => clearInterval(interval);
    }
  }, [isHovered, newsItems.length]);

  // Load LinkedIn data with enhanced features
  useEffect(() => {
    const loadLinkedInData = async () => {
      setIsLoadingLinkedIn(true);
      try {
        // Simulate API call
        const data = await fetchLinkedInData();
        setLinkedinPosts(data.posts);
        
        // Load engagement summary
        const summary = getEngagementSummary();
        setEngagementSummary(summary);
        
        // Load trending post
        const trending = getTrendingPost();
        setTrendingPost(trending);
        
      } catch (error) {
        console.error('Failed to load LinkedIn data:', error);
        // Fallback to static data
        const posts = getRecentLinkedInPosts(3);
        setLinkedinPosts(posts);
      } finally {
        setIsLoadingLinkedIn(false);
      }
    };

    loadLinkedInData();
    
    // Auto-refresh LinkedIn data every 2 minutes for more dynamic updates
    const interval = setInterval(loadLinkedInData, 2 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Simulate real-time engagement updates every 8 seconds for better responsiveness
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setLinkedinPosts(current => simulateRealTimeUpdates(current));
      // Update engagement summary
      const summary = getEngagementSummary();
      setEngagementSummary(summary);
      
      // Track recent updates for notification badge
      setRecentUpdates(prev => prev + 1);
      
      // More dynamic follower growth with realistic patterns
      if (Math.random() < 0.4) { // 40% chance each update
        const baseFollowers = 4000;
        const timeBasedGrowth = Math.floor(Date.now() / 100000) % 200; // Time-based variation
        const randomBoost = Math.floor(Math.random() * 150);
        const newCount = baseFollowers + timeBasedGrowth + randomBoost;
        setFollowerCount(newCount >= 1000 ? `${(newCount/1000).toFixed(1)}k` : `${newCount}`);
      }
    }, 8000); // Update every 8 seconds for more responsive feel

    return () => clearInterval(updateInterval);
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

        {/* News and LinkedIn Section - Side by Side */}
        <motion.div variants={fadeInUp} className="flex flex-col lg:flex-row gap-8">
          {/* Left side - News Section */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 text-gray-900 tracking-tight">Latest News</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
            </div>
            
            <div 
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden backdrop-blur-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
              
              {/* Professional navigation arrows */}
              <button 
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
                aria-label="Previous news item"
                onClick={prevNews}
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
                aria-label="Next news item"
                onClick={nextNews}
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Enhanced content layout */}
              <div className="mx-16">
                {/* Professional header with refined icon */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                      {getIcon(currentNews.icon)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-2">{currentNews.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="font-medium">{currentNews.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium text-xs">Latest Update</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced content with better typography */}
                <div className="space-y-6">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {currentNews.content}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-base">
                    {currentNews.subtitle}
                  </p>
                  
                  {/* Professional call-to-action */}
                  <div className="pt-4">
                    <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium text-sm group">
                      <span>Read full announcement</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Professional pagination with enhanced design */}
              <div className="flex justify-center mt-10 space-x-3">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentNewsIndex 
                        ? 'bg-red-600 shadow-lg ring-4 ring-red-100' 
                        : 'bg-gray-300 hover:bg-red-300 hover:shadow-md'
                    }`}
                    onClick={() => goToNews(index)}
                    aria-label={`Go to news item ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Enhanced LinkedIn Card */}
          <div className="flex-shrink-0 w-full lg:w-[500px] xl:w-[540px]">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-2 text-gray-900 tracking-tight">
                Connect With Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
            </div>
            
            <div className="bg-white border rounded-2xl border-gray-100 p-8 w-full shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:border-gray-200 transform hover:-translate-y-1 overflow-hidden relative">
              {/* Subtle background pattern */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-y-20 -translate-x-20 opacity-40"></div>
              
              {/* Professional profile header */}
              <div className="flex flex-col items-center mb-8 relative z-10">
                {/* Premium company logo with sophisticated design */}
                <div className="w-28 h-28 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl mb-6 flex items-center justify-center shadow-2xl border border-red-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-white font-bold text-2xl tracking-tight">AI</div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20"></div>
                </div>
                
                {/* Company name with professional typography */}
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3 tracking-tight leading-tight max-w-sm">
                  {profile.name}
                </h3>
                
                {/* Enhanced followers section with sophisticated design */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{followerCount}</p>
                    <p className="text-sm text-gray-600 font-medium">Followers</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200 shadow-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    +{Math.floor(Math.random() * 15) + 5} this week
                  </span>
                </div>
                
                {/* Professional description */}
                <p className="text-gray-600 text-center text-base leading-relaxed font-medium max-w-sm mb-6">
                  <span className="text-gray-900 font-semibold">Est. {profile.established}</span>
                  <br />
                  {profile.description}
                </p>

                {/* Professional expertise badges */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    🎓 Academic Excellence
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                    🔬 Research Innovation
                  </span>
                </div>
              </div>

              {/* Professional Recent Posts Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    Recent Activity
                  </h4>
                  <div className="flex items-center space-x-4">
                    {/* Professional live indicator */}
                    <div className="flex items-center space-x-2">
                      <div className="relative flex items-center">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-sm"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-60"></div>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">Live</span>
                    </div>
                    
                    {/* Professional update counter */}
                    {recentUpdates > 0 && (
                      <div className="relative">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
                          {recentUpdates} new
                        </span>
                      </div>
                    )}
                    
                    {/* Professional refresh button */}
                    <button 
                      onClick={async () => {
                        setIsLoadingLinkedIn(true);
                        setRecentUpdates(0);
                        const data = await fetchLinkedInData();
                        setLinkedinPosts(data.posts);
                        setIsLoadingLinkedIn(false);
                      }}
                      className="text-gray-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-red-50 border border-gray-200 hover:border-red-200 shadow-sm hover:shadow-md"
                      title="Refresh content"
                    >
                      <svg className={`w-4 h-4 ${isLoadingLinkedIn ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Professional engagement metrics */}
                <div className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{engagementSummary.totalLikes + engagementSummary.totalComments + engagementSummary.totalShares}</p>
                      <p className="text-sm text-gray-600 font-medium">Total Engagement</p>
                    </div>
                    <div className="text-center border-l border-r border-gray-200">
                      <p className="text-2xl font-bold text-green-600">{Math.floor(Math.random() * 25) + 15}%</p>
                      <p className="text-sm text-gray-600 font-medium">Growth Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-blue-600">{engagementSummary.averageEngagement}</p>
                      <p className="text-sm text-gray-600 font-medium">Avg. per Post</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {isLoadingLinkedIn ? (
                    // Professional loading skeleton */}
                    <div className="space-y-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse border border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <div className="h-3 bg-gray-200 rounded-full w-24"></div>
                            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                            <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="h-3 bg-gray-200 rounded-full w-32"></div>
                            <div className="h-3 bg-gray-200 rounded-full w-24"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    linkedinPosts.map((post) => (
                      <div 
                        key={post.id} 
                        className="bg-white p-6 rounded-xl text-sm relative cursor-pointer hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 border border-gray-200 hover:border-red-200 group"
                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                      >
                        {/* Professional trending indicator */}
                        {trendingPost && post.id === trendingPost.id && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center space-x-1 border border-white">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="font-semibold">Trending</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Professional header */}
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-gray-500 text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">{post.date}</p>
                          <div className="flex items-center space-x-2">
                            {post.type === 'shared' && (
                              <span className="text-sm text-red-700 bg-red-50 px-3 py-1.5 rounded-full border border-red-200 font-semibold">
                                Shared
                              </span>
                            )}
                            {post.type === 'announcement' && (
                              <span className="text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 font-semibold">
                                News
                              </span>
                            )}
                            {post.type === 'company' && (
                              <span className="text-sm text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 font-semibold">
                                Update
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Professional content */}
                        <p className={`text-gray-800 mb-4 leading-relaxed font-medium text-base ${expandedPost === post.id ? '' : 'line-clamp-3'} group-hover:text-gray-900 transition-colors`}>
                          {expandedPost === post.id ? post.content : formatPostContent(post.content, 150)}
                        </p>
                        
                        {/* Professional engagement section */}
                        {(post.likes || post.comments || post.shares) && (
                          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-red-50 group-hover:border-red-100 transition-all duration-300">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2 text-red-600">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm font-semibold">{post.likes}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-blue-600">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm font-semibold">{post.comments}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-green-600">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                  </svg>
                                  <span className="text-sm font-semibold">{post.shares}</span>
                                </div>
                              </div>
                              <span className="text-sm text-gray-500 font-medium group-hover:text-red-600 transition-colors flex items-center">
                                {expandedPost === post.id ? (
                                  <>
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                    Collapse
                                  </>
                                ) : (
                                  <>
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    Expand
                                  </>
                                )}
                              </span>
                            </div>
                          </div>
                        )}
                        
                        {/* Professional author section */}
                        {post.author && (
                          <div className="flex items-center mt-4 pt-4 border-t border-gray-200 group-hover:border-red-200 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mr-3 shadow-sm">
                              <span className="text-white text-sm font-semibold">{post.author.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="text-sm text-gray-800 font-semibold group-hover:text-red-700 transition-colors">
                                {post.author}
                              </p>
                              <p className="text-xs text-gray-500">AI Research Lab</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Professional Call-to-Action Section */}
              <div className="pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/company/usd-ai-research"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg className="w-5 h-5 mr-3 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                    <span className="relative z-10">Connect on LinkedIn</span>
                    <svg className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://usd-ai-researchlab.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center px-6 py-4 bg-white border-2 border-gray-300 hover:border-red-400 text-gray-700 hover:text-red-600 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden hover:bg-red-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 via-red-50/50 to-red-50/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg className="w-5 h-5 mr-3 relative z-10 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <span className="relative z-10">Visit Website</span>
                    <svg className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 group-hover:text-red-600 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {/* Professional contact information */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">University of South Dakota</span> • Department of Computer Science
                  </p>
                  <p className="text-xs text-gray-500">
                    Advancing AI research and education since 2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
