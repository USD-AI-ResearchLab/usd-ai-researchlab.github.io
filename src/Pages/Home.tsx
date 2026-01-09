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
    className="relative mb-2"
    variants={animations.fadeIn}
  >
    {/* Glowing background effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-500/20 rounded-full blur-3xl scale-110 animate-pulse" />
    
    <div className="relative bg-white rounded-full p-4 shadow-xl ring-2 ring-red-100/50">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.img 
          src={logoImage} 
          alt="USD AI Research Lab Logo" 
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain cursor-pointer mx-auto"
          {...animations.scaleHover}
        />
      </Link>
    </div>
  </motion.div>
);

const HeroTitle: React.FC = () => (
  <motion.h1 
    className="gradient-text-hero text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-2 tracking-tight leading-tight text-center"
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
      Leading artificial intelligence research and development center
    </motion.p>
    <motion.p 
      className="gradient-text-hero text-xs md:text-sm lg:text-base font-normal italic tracking-wide"
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
    <a href="https://kc-santosh.org" target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="relative group cursor-pointer">
        {/* Enhanced photo container */}
        <div className="relative">
          <img 
            src="/faculty/kc-santosh.jpg" 
            alt="Prof. KC Santosh - Founding Director"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl object-cover shadow-xl transition-all duration-500 group-hover:shadow-2xl"
          />
          
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
          
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
      Transforming research into real-world impact through innovative AI solutions
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
// SECTION COMPONENTS
// ========================================================================================
const BackgroundElements: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden opacity-0">
    <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-red-100 to-red-50 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full blur-2xl"></div>
    <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-xl"></div>
  </div>
);

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
      {/* Decorative Elements */}
      <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-full blur-xl" />
      <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-full blur-xl" />
      
      {/* Main Card */}
      <motion.div 
        className="relative bg-gradient-to-br from-white via-red-50/30 to-white rounded-xl shadow-lg border border-red-100/50 overflow-hidden"
        whileHover={{ 
          boxShadow: '0 10px 20px rgba(220, 38, 38, 0.15)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gray-500/10 to-transparent rounded-tr-full" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.3) 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }} className="w-full h-full" />
        </div>
        
        <div className="relative px-3 md:px-6 lg:px-8 py-5 lg:py-7">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8">
              <DirectorPhoto />
              <DirectorMessage />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// ========================================================================================
// MAIN HOME COMPONENT
// ========================================================================================
const Home: React.FC = () => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position (opposite direction for tilt effect)
    const rotateY = ((x - centerX) / centerX) * -10; // max 10 degrees
    const rotateX = ((y - centerY) / centerY) * 10;  // max 10 degrees
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
      
      <main className="relative min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-16 pt-[140px] pb-24">
        {/* 3D Card Container */}
        <motion.div 
          className="w-full max-w-6xl"
          style={{ perspective: '2000px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 pointer-events-none"
              animate={{
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-red-500/20 to-transparent rounded-br-full" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-500/20 to-transparent rounded-tr-full" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-500/20 to-transparent rounded-tl-full" />
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-red-200/50 pointer-events-none" />
            
            {/* Content wrapper */}
            <div className="relative py-6 px-3 lg:px-6">
              <BackgroundElements />
              
              <motion.div 
                className="relative z-10"
                initial="initial"
                animate="animate"
                variants={animations.staggerContainer}
              >
                <HeroSection />
                <DirectorSection />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <FloatingScrollArrows />
    </div>
  );
};

export default Home;
