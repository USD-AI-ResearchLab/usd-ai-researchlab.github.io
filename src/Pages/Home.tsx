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
// STYLE CONFIGURATIONS
// ========================================================================================
const styles = {
  // Perfect Black-Red-Black gradient
  blackRedBlackGradient: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '300',
    background: 'linear-gradient(90deg, #000000 0%, #dc2626 30%, #ef4444 50%, #dc2626 70%, #000000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    textFillColor: 'transparent',
    backgroundSize: '300% 100%',
    animation: 'gradientFlow 4s ease-in-out infinite',
    // Fallback for browsers that don't support background-clip
    backgroundImage: 'linear-gradient(90deg, #000000 0%, #dc2626 30%, #ef4444 50%, #dc2626 70%, #000000 100%)',
    display: 'inline-block',
    lineHeight: '1.1'
  },
  
  elegantQuote: {
    fontStyle: 'italic',
    fontWeight: '500',
    fontSize: '36px'
  }
};

// ========================================================================================
// HERO COMPONENTS
// ========================================================================================
const HeroLogo: React.FC = () => (
  <motion.div 
    className="relative mb-4"
    variants={animations.fadeIn}
  >
    {/* Removed glowing background effect to keep the hero area pure white */}
    {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-500/20 rounded-full blur-3xl scale-110 animate-pulse" /> */}
    
    <div className="relative bg-white p-4">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.img 
          src={logoImage} 
          alt="USD AI Research Lab Logo" 
          className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain mx-auto"
        />
      </Link>
    </div>
  </motion.div>
);

const HeroTitle: React.FC = () => (
  <motion.h1 
    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light -mt-6 tracking-tight leading-tight text-center"
    variants={animations.fadeInUp}
    style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '300',
      display: 'inline-block'
    }}
  >
    <span className="gradient-text-hero">USD AI Research</span> <span className="text-xs md:text-sm lg:text-base text-gray-700 font-light">(estd. 2015)</span>
  </motion.h1>
);

const HeroTagline: React.FC = () => (
  <motion.div 
    className="max-w-2xl mx-auto mb-3 text-center"
    variants={animations.fadeInUp}
  >
    <motion.p 
      className="gradient-text-hero text-sm md:text-base lg:text-lg font-light leading-relaxed mb-1"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '300'
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
    className="relative flex-shrink-0 mb-6 lg:mb-0"
    variants={animations.fadeIn}
    {...animations.scaleHover}
  >
    <a href="https://kc-santosh.org" target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="relative group cursor-pointer">
        {/* Enhanced photo container */}
        <div className="relative">
          <img 
            src="/faculty/kc-santosh.jpg" 
            alt="Prof. KC Santosh - Founding Director"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-xl object-cover shadow-xl transition-all duration-500 group-hover:shadow-2xl"
          />
          
          {/* Removed gradient overlay to keep the card visually pure white */}
          
          {/* Decorative border */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset"></div>
        </div>
      </div>
    </a>
  </motion.div>
);

const DirectorMessage: React.FC = () => (
  <motion.div 
    className="flex-1 text-center lg:text-left max-w-xl"
    variants={animations.fadeInUp}
  >
    <motion.blockquote 
      className="gradient-text-director text-base md:text-lg lg:text-xl font-light leading-tight mb-2 tracking-tight"
      style={{...styles.elegantQuote, fontSize: '18px'}}
      variants={animations.fadeInUp}
    >
      "Building sustainable AI for all"
    </motion.blockquote>
    
    <motion.p 
      className="gradient-text-director text-xs md:text-sm lg:text-base font-normal mb-3 leading-relaxed"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400'
      }}
    >
      our Vision To advance sustainable, human-centered machine intelligence that is accessible, responsible, and impactful across communities. AI4ALL is committed to building AI ecosystems that empower talent, reduce barriers, and ensure AI innovation benefits society at large. 
      #HumanAI #ExplainableAI #EthicalAI #SustainableAI #EcosystemAI #AI4ALL
    </motion.p>
    
    <motion.div 
      className="space-y-1"
      variants={animations.fadeInUp}
    >
      <div className="gradient-text-director text-sm lg:text-base font-semibold">
        Prof. KC Santosh
      </div>
      <div className="gradient-text-director text-xs lg:text-sm font-medium">
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
}> = ({ title, value, suffix = '', subtitle, isText = false, href }) => {
  const animatedValue = useCountUp(value, 2500);

  const cardContent = (
    <div className="space-y-1 sm:space-y-2">
      <h3 className="font-semibold text-red-700 text-xs sm:text-sm group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      {!isText ? (
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
          {animatedValue}
          {suffix && <span className="text-sm sm:text-base text-red-600 align-super">{suffix}</span>}
        </p>
      ) : null}
      <p className={`${isText ? 'text-xs sm:text-sm lg:text-base' : 'text-xs sm:text-sm'} text-gray-600 font-medium leading-tight`}>
        {subtitle}
      </p>
    </div>
  );

  const cardClass = "bg-gradient-to-br from-gray-50 to-white p-4 sm:p-5 lg:p-6 xl:p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-red-200 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col";

  if (href) {
    return (
      <Link to={href} className="block">
        <div className={`${cardClass} cursor-pointer`}>
          {cardContent}
        </div>
      </Link>
    );
  }

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
    className="text-center mb-4"
    variants={animations.staggerContainer}
  >
    <div className="flex flex-col items-center justify-center">
      <HeroLogo />
      <HeroTitle />
      <HeroTagline />
    </div>
  </motion.section>
);

const DirectorSection: React.FC = () => (
  <motion.section 
    className="mb-4"
    variants={animations.staggerContainer}
    initial="initial"
    animate="animate"
  >
    <div className="relative">
      {/* Main Card */}
      <motion.div 
        className="relative bg-white rounded-xl shadow-lg border border-red-100/50 overflow-hidden"
        whileHover={{ 
          boxShadow: '0 10px 20px rgba(220, 38, 38, 0.15)',
          transition: { duration: 0.3 }
        }}
      >
        <div className="relative px-3 md:px-6 lg:px-8 py-5 lg:py-7">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-6">
              <DirectorPhoto />
              <DirectorMessage />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const PublicationsSection: React.FC = () => (
  <motion.section 
    className="mb-12 md:mb-16 lg:mb-20"
    variants={animations.fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="flex-shrink-0 w-full">
      <div className="bg-white border rounded-lg border-gray-200 p-4 sm:p-6 lg:p-8 w-full shadow-md min-h-[280px] sm:min-h-[300px] lg:min-h-[320px] xl:min-h-[350px] flex flex-col">
        <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-red-600">
            Publications & Research
          </h2>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-3 xl:gap-4 flex-grow">
          <AnimatedStatCard 
            title="Published Research"
            value={300}
            suffix="+"
            subtitle="Peer-Reviewed Articles"
            href="/publications"
          />
          
          <AnimatedStatCard 
            title="Books"
            value={12}
            suffix="+"
            subtitle="Published Works"
            href="/publications"
          />
          
          <AnimatedStatCard 
            title="Leading Conferences"
            value={12}
            suffix="+"
            subtitle="International Events"
            href="/initiatives"
          />
          
          <AnimatedStatCard 
            title="Funding Sources"
            value={0}
            subtitle="SDBOR, DOD, NSF, Department Of Education"
            isText={true}
            href="/contact"
          />
        </div>
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
        
        /* Hero Section: Black-Red-Black gradient */
        .gradient-text-hero {
          background: linear-gradient(135deg, #000000 0%, #dc2626 30%, #ef4444 50%, #dc2626 70%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          background-size: 200% 200%;
          animation: gradientFlow 6s ease-in-out infinite;
        }
        
        /* Director Section: Red-Black-Red gradient */
        .gradient-text-director {
          background: linear-gradient(135deg, #dc2626 0%, #000000 30%, #1a1a1a 50%, #000000 70%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          background-size: 200% 200%;
          animation: gradientFlow 6s ease-in-out infinite;
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
      
      <main className="relative min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 pt-[140px] pb-12 bg-white">
        {/* Stable Card Container */}
        <motion.div 
          className="w-full max-w-4xl"
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
