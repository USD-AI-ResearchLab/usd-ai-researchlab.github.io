import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/logo.svg';

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
  
  spiralIn: {
    initial: { 
      opacity: 0, 
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      scale: 1
    },
    transition: { 
      duration: 1.0,
      ease: "easeOut"
    }
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
    className="flex justify-center mb-4 md:mb-6"
    variants={animations.spiralIn}
  >
    <img 
      src={logoImage} 
      alt="USD AI Research Lab Logo" 
      className="w-[320px] sm:w-[460px] md:w-[600px] lg:w-[780px] xl:w-[940px] h-auto"
    />
  </motion.div>
);

const HeroTitle: React.FC = () => (
  <motion.h1 
    className="text-base md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-tight mb-2 mt-0"
    variants={animations.spiralIn}
  >
    <div 
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl hero-flowing-gradient whitespace-nowrap"
    >
      USD AI Research
    </div>
  </motion.h1>
);

const HeroTagline: React.FC = () => (
  <motion.div 
    className="text-center max-w-4xl mx-auto"
    variants={animations.fadeInUp}
  >
    <motion.p 
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-relaxed mb-0 font-sans break-words hero-flowing-gradient"
      variants={animations.fadeInUp}
    >
      Leading artificial intelligence research and engineering<br />to shape South Dakota's innovation future and technological leadership!
    </motion.p>
  </motion.div>
);

// ========================================================================================
// DIRECTOR COMPONENTS
// ========================================================================================
const DirectorPhoto: React.FC = () => (
  <div className="w-full md:w-auto flex justify-center md:justify-start mb-3 md:mb-0">
    <motion.div 
      className="relative flex-shrink-0 rounded-t-lg md:rounded-t-none md:rounded-l-lg overflow-hidden"
      variants={animations.fadeIn}
      {...animations.scaleHover}
    >
      <a href="https://kc-santosh.org" target="_blank" rel="noopener noreferrer" className="no-underline">
        <div className="relative group cursor-pointer w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img 
            src="/faculty/kc-santosh.jpg" 
            alt="Prof. KC Santosh - Founding Director"
            className="w-full h-full object-cover shadow-none transition-all duration-500"
          />
        </div>
      </a>
    </motion.div>
  </div>
);

const DirectorMessage: React.FC = () => (
  <motion.div 
    className="flex-1 flex flex-col justify-between"
    variants={animations.fadeInUp}
  >
    <div>
      <motion.h3 
        className="gradient-text-director text-black-force text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-3 tracking-tight text-left"
        variants={animations.fadeInUp}
      >
        AI4ALL: Building Sustainable Machine Intelligence for All
      </motion.h3>
      
      <motion.p 
        className="gradient-text-director text-black-force text-xs md:text-sm lg:text-base font-normal mb-1 leading-relaxed text-left"
        variants={animations.fadeInUp}
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '400'
        }}
      >
        Our vision is to advance sustainable, human-centered machine intelligence that is accessible, responsible, and impactful across communities. AI4ALL is committed to building AI ecosystems that empower talent, reduce barriers, and ensure AI innovation benefits society at large.
      </motion.p>

      <motion.p 
        className="gradient-text-director text-black-force text-xs md:text-sm lg:text-base font-bold mb-2 leading-relaxed text-left"
        variants={animations.fadeInUp}
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '700'
        }}
      >
        #HumanAI #ExplainableAI #EthicalAI #SustainableAI #EcosystemAI #AI4ALL
      </motion.p>
    </div>
    
    <motion.div 
      className="space-y-0 mt-4 md:mt-5 lg:mt-6"
      variants={animations.fadeInUp}
    >
      <div className="gradient-text-director text-black-force text-sm lg:text-base font-bold text-left">
        Prof. KC (Casey) Santosh
      </div>
      <div className="gradient-text-director text-black-force text-xs lg:text-sm font-normal text-left">
        Inaugural Director, USD AI Research
      </div>
    </motion.div>
  </motion.div>
);

// ========================================================================================
// CUSTOM HOOKS
// ========================================================================================

// Animated stat card component
const AnimatedStatCard: React.FC<{
  title: string;
  value: number;
  suffix?: string;
  subtitle?: string;
  isText?: boolean;
  href?: string;
  hideSuffix?: boolean;
}> = ({ title, value, suffix = '', subtitle, isText = false, hideSuffix = false }) => {

  const cardContent = (
    <div className="h-full flex flex-col justify-start pt-2 space-y-1">
      {/* Number Display - Fixed position */}
      {!isText ? (
        <div className="text-center">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
            {suffix && !hideSuffix && suffix === 'M+' ? (
              <>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600">$</span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600">{value}</span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600">M</span>
                <span className="text-base sm:text-lg text-gray-900 align-super">+</span>
              </>
            ) : (
              <>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-600">{value}</span>
                {suffix && !hideSuffix ? (
                  <span className="text-base sm:text-lg text-gray-900 align-super">{suffix}</span>
                ) : null}
              </>
            )}
          </div>
        </div>
      ) : null}
      
      {/* Title */}
      <div className="text-center">
        <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl leading-tight px-1">
          {title}
        </h3>
      </div>
      
      {/* Subtitle */}
      <div className="text-center">
        {subtitle && (
          <p className="text-sm sm:text-base text-gray-700 leading-tight font-normal px-1">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );

  const cardClass = `stat-card p-2 sm:p-3 md:p-4 lg:p-5 h-44 sm:h-52 md:h-60 lg:h-72 flex flex-col justify-center overflow-hidden cursor-pointer transition-all duration-300`;

  return (
    <div className={cardClass} data-bg="gray">
      {cardContent}
    </div>
  );
};

// ========================================================================================
// SECTION COMPONENTS
// ========================================================================================
const HeroSection: React.FC = () => (
  <motion.section 
    className="mb-8"
    variants={animations.staggerContainer}
  >
    <div className="flex flex-col items-center justify-center gap-0">
      {/* Logo */}
      <HeroLogo />
      
      {/* Text Content */}
      <div className="text-center w-full">
        <HeroTitle />
        <HeroTagline />
      </div>
    </div>
  </motion.section>
);

const DirectorSection: React.FC = () => (
  <motion.section 
    className="mb-12 mt-4 md:mt-5 lg:mt-6"
    variants={animations.staggerContainer}
    initial="initial"
    animate="animate"
  >
    <div className="relative">
      {/* Main Card - Glassmorphic Style */}
      <motion.div 
        className="relative overflow-hidden"
        whileHover={{ 
          boxShadow: '0 10px 20px rgba(220, 38, 38, 0.15)',
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
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
    className="-mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 mb-0 md:mb-0 lg:mb-0"
    variants={animations.fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="flex-shrink-0 w-full mb-8 bg-transparent">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 sm:gap-1 lg:gap-1.5 xl:gap-1.5">
        <AnimatedStatCard 
          title="Published Research"
          value={300}
          suffix="+"
          subtitle="(Peer-Reviewed Articles)"
        />
        
        <AnimatedStatCard 
          title="Leading Conference Events"
          value={12}
          suffix="+"
          subtitle="(International, IEEE, Springer, Elsevier)"
        />
        
        <AnimatedStatCard 
          title="Published Books"
          value={12}
          suffix=""
          subtitle="(Including 3 Textbooks)"
        />
        
        <AnimatedStatCard 
          title="Funding"
          value={8}
          suffix="M+"
          subtitle="(SDBOR, DOD, NSF, Department Of Education)"
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
    <div className="min-h-screen bg-transparent">
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
        
        /* Custom background color for stat cards */
        .stat-card[data-bg="gray"] {
          background-color: #c0c0c0;
        }
        
        /* Hero Section: Use external CSS for animations */
        /* Moved to custom.css for spiral animations */
        
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
        
        /* Force black text override for specific elements */
        .text-black-force {
          color: #000 !important;
          -webkit-text-fill-color: #000 !important;
          background: none !important;
          animation: none !important;
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
      
      <main className="relative flex items-center justify-center p-4 md:p-6 lg:p-8 pt-2 pb-4 md:pb-6 rounded-3xl">
        {/* Stable Card Container */}
        <motion.div 
          className="w-full max-w-7xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative bg-gray-300/90 rounded-3xl overflow-hidden border border-white/10 shadow-md"
            style={{
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Border */}
            
            {/* Content wrapper */}
            <div className="relative py-4 px-3 lg:px-4">
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
