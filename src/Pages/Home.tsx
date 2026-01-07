import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";
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
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontStyle: 'italic'
  }
};

// ========================================================================================
// HERO COMPONENTS
// ========================================================================================
const HeroLogo: React.FC = () => (
  <motion.div 
    className="relative mb-2"
    variants={animations.fadeIn}
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <motion.img 
        src={logoImage} 
        alt="USD AI Research Lab Logo" 
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain cursor-pointer mx-auto"
        {...animations.scaleHover}
      />
    </Link>
  </motion.div>
);

const HeroTitle: React.FC = () => (
  <motion.h1 
    className="gradient-text-hero text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 tracking-tight leading-tight text-center"
    variants={animations.fadeInUp}
    style={{
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      fontWeight: '300',
      display: 'inline-block'
    }}
  >
    USD AI Research
  </motion.h1>
);

const HeroTagline: React.FC = () => (
  <motion.div 
    className="max-w-4xl mx-auto mb-6 text-center"
    variants={animations.fadeInUp}
  >
    <motion.p 
      className="gradient-text-hero text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-2"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '300'
      }}
    >
      Leading artificial intelligence research and development center
    </motion.p>
    <motion.p 
      className="gradient-text-hero text-base md:text-lg lg:text-xl font-normal italic tracking-wide"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400'
      }}
    >
      Pioneering the future of AI from South Dakota
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
    <div className="relative group">
      {/* Enhanced photo container */}
      <div className="relative">
        <img 
          src="/faculty/kc-santosh.jpg" 
          alt="Prof. KC Santosh - Founding Director"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-xl transition-all duration-500 group-hover:shadow-2xl"
        />
        
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Decorative border */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset"></div>
      </div>
    </div>
  </motion.div>
);

const DirectorMessage: React.FC = () => (
  <motion.div 
    className="flex-1 text-center lg:text-left max-w-2xl"
    variants={animations.fadeInUp}
  >
    <motion.blockquote 
      className="gradient-text-director text-xl md:text-2xl lg:text-3xl font-light leading-tight mb-4 tracking-tight"
      style={styles.elegantQuote}
      variants={animations.fadeInUp}
    >
      "Building sustainable AI for all"
    </motion.blockquote>
    
    <motion.p 
      className="gradient-text-director text-sm md:text-base lg:text-lg font-normal mb-6 leading-relaxed"
      variants={animations.fadeInUp}
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: '400'
      }}
    >
      Transforming research into real-world impact through innovative AI solutions
    </motion.p>
    
    <motion.div 
      className="space-y-2"
      variants={animations.fadeInUp}
    >
      <div className="gradient-text-director text-lg lg:text-xl font-semibold">
        Prof. KC Santosh
      </div>
      <div className="gradient-text-director text-sm lg:text-base font-medium">
        Founding Director, USD AI Research Lab
      </div>
    </motion.div>
  </motion.div>
);

// ========================================================================================
// SECTION COMPONENTS
// ========================================================================================
const BackgroundElements: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden opacity-40">
    <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-2xl"></div>
    <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-xl"></div>
  </div>
);

const HeroSection: React.FC = () => (
  <motion.section 
    className="text-center mb-8"
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
    className="mb-8"
    variants={animations.fadeIn}
  >
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/20 rounded-2xl shadow-xl overflow-hidden border border-gray-100/50">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-red-50/10"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}></div>
      </div>
      
      <div className="relative px-6 md:px-12 lg:px-16 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <DirectorPhoto />
            <DirectorMessage />
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
    </div>
  </motion.section>
);

// ========================================================================================
// MAIN HOME COMPONENT
// ========================================================================================
const Home: React.FC = () => {
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
          .gradient-text-hero, .gradient-text-director {
            color: #dc2626;
            background: none;
            -webkit-text-fill-color: initial;
          }
        }
      `}</style>
      
      <main className="relative">
        {/* Compact Container */}
        <div className="pt-16 pb-8 relative overflow-hidden">
          <BackgroundElements />
          
          <motion.div 
            className="relative z-10 px-6 lg:px-8"
            initial="initial"
            animate="animate"
            variants={animations.staggerContainer}
          >
            <HeroSection />
            <DirectorSection />
          </motion.div>
        </div>
      </main>

      <FloatingScrollArrows />
    </div>
  );
};

export default Home;
