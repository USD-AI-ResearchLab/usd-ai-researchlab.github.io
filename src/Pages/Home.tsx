import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from "../assets/logo.svg";

// ========================================================================================
// ANIMATION CONFIGURATIONS
// ========================================================================================
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  },
  
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  },

  scaleHover: {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 }
  }
};

// ========================================================================================
// HERO COMPONENTS
// ========================================================================================
const HeroLogo: React.FC = () => (
  <motion.div 
    className="relative mb-0"
    variants={animations.fadeIn}
  >
    {/* Removed glowing background effect to keep the hero area pure white */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-500/20 rounded-full blur-3xl scale-110 animate-pulse" /> */}
    
    <div className="relative bg-white p-0">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.img 
          src={logoImage} 
          alt="USD AI Research Lab Logo" 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-full xl:h-auto object-contain mx-auto"
        />
      </Link>
    </div>
  </motion.div>
);

const HeroTitle: React.FC = () => (
  <motion.h1 
    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-tight"
    variants={animations.fadeInUp}
    style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '300',
      display: 'block'
    }}
  >
    <span className="gradient-text-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ fontWeight: '700' }}>USD AI Research</span>
    <span className="gradient-text-hero text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-2" style={{ fontWeight: '400' }}>(EST.2015)</span>
  </motion.h1>
);

const HeroTagline: React.FC = () => (
  <motion.div 
    className="text-center"
    variants={animations.fadeInUp}
  >
    <motion.p 
      className="gradient-text-hero text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed mb-0"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '300',
        overflow: 'visible',
        whiteSpace: 'normal',
        wordWrap: 'break-word'
      }}
    >
      Leading artificial intelligence research and engineering to shape South Dakota's innovation future and technological leadership!
    </motion.p>
  </motion.div>
);

// ========================================================================================
// DIRECTOR COMPONENTS
// ========================================================================================
const DirectorPhoto: React.FC = () => (
  <motion.div 
    className="relative flex-shrink-0 rounded-l-lg overflow-hidden"
    variants={animations.fadeIn}
    {...animations.scaleHover}
  >
    <a href="https://kc-santosh.org" target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="relative group cursor-pointer h-full">
        {/* Enhanced photo container */}
        <div className="relative h-full">
          <img 
            src="/faculty/kc-santosh.jpg" 
            alt="Prof. KC Santosh - Founding Director"
            className="w-40 h-full md:w-44 lg:w-48 object-cover shadow-none transition-all duration-500"
          />
        </div>
      </div>
    </a>
  </motion.div>
);

const DirectorMessage: React.FC = () => (
  <motion.div 
    className="flex-1 flex flex-col justify-between"
    variants={animations.fadeInUp}
  >
    <div>
      <motion.h3 
        className="gradient-text-director text-base md:text-lg lg:text-xl font-bold leading-tight mb-2 tracking-tight text-left"
        variants={animations.fadeInUp}
      >
        AI4ALL: Building Sustainable Machine Intelligence for All
      </motion.h3>
      
      <motion.p 
        className="gradient-text-director text-xs md:text-sm lg:text-base font-normal mb-2 leading-relaxed text-left"
        variants={animations.fadeInUp}
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '400'
        }}
      >
        Our vision is to advance sustainable, human-centered machine intelligence that is accessible, responsible, and impactful across communities. AI4ALL is committed to building AI ecosystems that empower talent, reduce barriers, and ensure AI innovation benefits society at large.
      </motion.p>

      <motion.p 
        className="gradient-text-director text-xs md:text-sm lg:text-base font-normal mb-2 leading-relaxed text-left"
        variants={animations.fadeInUp}
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '400'
        }}
      >
        #HumanAI #ExplainableAI #EthicalAI #SustainableAI #EcosystemAI #AI4ALL
      </motion.p>
    </div>
    
    <motion.div 
      className="space-y-0.5 mt-auto"
      variants={animations.fadeInUp}
    >
      <div className="gradient-text-director text-sm lg:text-base font-bold text-left">
        Prof. KC (Casey) Santosh
      </div>
      <div className="gradient-text-director text-xs lg:text-sm font-normal text-left">
        Inaugural Director, USD AI Research
      </div>
    </motion.div>
  </motion.div>
);

// ========================================================================================
// CUSTOM HOOKS
// ========================================================================================
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
  href?: string;
  hideSuffix?: boolean;
}> = ({ title, value, suffix = '', subtitle, isText = false, hideSuffix = false }) => {
  const animatedValue = useCountUp(value, 2500);

  const cardContent = (
    <div className="space-y-1 sm:space-y-2 select-none">
      <h3 className="font-semibold text-red-700 text-xs sm:text-sm">
        {title}
      </h3>
      {!isText ? (
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
          {suffix && !hideSuffix && suffix === 'M+' ? (
            <>
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-900">$</span>
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-900">{animatedValue}</span>
              <span className="text-lg sm:text-xl lg:text-2xl text-gray-900">M</span>
              <span className="text-sm sm:text-base text-red-600 align-super">+</span>
            </>
          ) : (
            <>
              {animatedValue}
              {suffix && !hideSuffix ? (
                <span className="text-sm sm:text-base text-red-600 align-super">{suffix}</span>
              ) : null}
            </>
          )}
        </p>
      ) : null}
      <p className={`${isText ? 'text-xs sm:text-sm lg:text-base' : 'text-xs sm:text-sm'} text-gray-600 leading-tight`}>
        {subtitle}
      </p>
    </div>
  );

  const cardClass = "stat-card bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 lg:p-5 xl:p-5 rounded-lg border border-gray-200 shadow-sm h-[120px] sm:h-[140px] lg:h-[160px] flex flex-col justify-between";

  return (
    <div className={cardClass}>
      {cardContent}
    </div>
  );
};

// ========================================================================================
// SECTION COMPONENTS
// ========================================================================================
const HeroSection: React.FC = () => (
  <motion.section 
    className="mb-4"
    variants={animations.staggerContainer}
  >
    <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
      {/* Logo */}
      <div className="flex-shrink-0 w-auto">
        <HeroLogo />
      </div>
      
      {/* Text Below Logo */}
      <div className="text-center w-full">
        <HeroTitle />
        <HeroTagline />
      </div>
    </div>
  </motion.section>
);

const DirectorSection: React.FC = () => (
  <motion.section 
    className="mb-4 mt-2"
    variants={animations.staggerContainer}
    initial="initial"
    animate="animate"
  >
    <div className="relative">
      {/* Main Card */}
      <motion.div 
        className="relative bg-white rounded-lg shadow-md border border-red-100/50 overflow-hidden"
        whileHover={{ 
          boxShadow: '0 10px 20px rgba(220, 38, 38, 0.15)',
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-row items-stretch">
          <DirectorPhoto />
          <div className="flex-1 px-4 md:px-5 lg:px-6 py-3 lg:py-4">
            <DirectorMessage />
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const PublicationsSection: React.FC = () => (
  <motion.section 
    className="mb-2 md:mb-3 lg:mb-4"
    variants={animations.fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="flex-shrink-0 w-full">
      <div className="grid grid-cols-4 gap-1 sm:gap-1 lg:gap-2 xl:gap-2">
        <AnimatedStatCard 
          title="Published Research"
          value={300}
          suffix="+"
          subtitle="Peer-Reviewed Articles"
        />
        
        <AnimatedStatCard 
          title="Books"
          value={12}
          suffix="+"
          subtitle="Published Works"
          hideSuffix={true}
        />
        
        <AnimatedStatCard 
          title="Leading Conferences"
          value={12}
          suffix="+"
          subtitle="International Events"
        />
        
        <AnimatedStatCard 
          title="Funding Sources"
          value={8}
          suffix="M+"
          subtitle="SDBOR, DOD, NSF, Department Of Education"
        />
      </div>
    </div>
  </motion.section>
);

// ========================================================================================
// MAIN HOME COMPONENT
// ========================================================================================
const Home: React.FC = () => {
  // Keep the card stable (no 3D tilt) for consistent rendering across devices/browsers.
  const rotateX = 0;
  const rotateY = 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for gradient animation */}
      <style>{`
        @keyframes gradientFlow {
          0% { 
            background-position: 0% 0%; 
          }
          25% { 
            background-position: 100% 100%; 
          }
          50% { 
            background-position: 100% 0%; 
          }
          75% { 
            background-position: 0% 100%; 
          }
          100% { 
            background-position: 0% 0%; 
          }
        }
        
        /* Remove selection and focus effects on stat cards */
        .stat-card {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
        
        .stat-card:focus {
          outline: none;
        }
        
        .stat-card:focus-visible {
          outline: none;
        }
        
        /* Hero Section: Black-Red-Black gradient */
        .gradient-text-hero {
          background: linear-gradient(135deg, #000000 0%, #dc2626 30%, #ef4444 50%, #dc2626 70%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientFlow 6s ease-in-out infinite;
          white-space: normal;
          word-wrap: break-word;
          display: inline;
          padding: 0;
          margin: 0;
        }
        
        /* Director Section: Red-Black-Red gradient */
        .gradient-text-director {
          background: linear-gradient(135deg, #dc2626 0%, #000000 30%, #1a1a1a 50%, #000000 70%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 200%;
          animation: gradientFlow 6s ease-in-out infinite;
          white-space: normal;
          word-wrap: break-word;
        }
        
        /* Fallback for unsupported browsers */
        @supports not (background-clip: text) or not (-webkit-background-clip: text) {
          .gradient-text-hero {
            color: #dc2626;
            background: none;
            -webkit-text-fill-color: initial;
          }
          
          .gradient-text-director {
            color: #1a1a1a;
            background: none;
            -webkit-text-fill-color: initial;
          }
        }
      `}</style>
      
      <main className="relative flex items-center justify-center p-4 md:p-6 lg:p-8 pt-2 pb-12 bg-white mt-[120px]">
        {/* Stable Card Container */}
        <motion.div 
          className="w-full max-w-7xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-red-200/40 pointer-events-none" />
            
            {/* Content wrapper */}
            <div className="relative py-4 px-3 lg:px-4 bg-white">
              {/* Keep background purely white */}
              {/* <BackgroundElements /> */}
              
              <motion.div 
                className="relative z-10"
                initial="initial"
                animate="animate"
                variants={animations.staggerContainer}
              >
                <HeroSection />
                <PublicationsSection />
                <DirectorSection />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
