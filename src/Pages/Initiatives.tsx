import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Initiatives: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
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
      link: "/events/ai-symposium/2025"
    },
    {
      title: "AI Club", 
      link: "https://usdinvolved.usd.edu/organization/ai-club",
      isExternal: true
    },
    {
      title: "CAI Conference",
      link: "https://www.ieeesmc.org/cai-2026/",
      isExternal: true
    },
    {
      title: "RTIP2R Conference",
      link: "https://rtip2r-conference.org/2025/",
      isExternal: true
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <motion.div 
        className="container ml-0 px-4 py-8 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Initiatives
          </h1>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeInUp}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {category.isExternal ? (
                <a href={category.link} target="_blank" rel="noopener noreferrer" className="block">
                  <motion.div 
                    className="rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center h-48 flex items-center justify-center border"
                    style={{ 
                      backgroundColor: activeCard === index ? 'var(--logo-red, #C53030)' : 'white',
                      borderColor: 'var(--logo-red, #C53030)',
                      borderWidth: '1px'
                    }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onTapStart={() => setActiveCard(index)}
                    onTap={() => setTimeout(() => setActiveCard(null), 150)}
                  >
                    <div className="text-left">
                      <h3 
                        className="text-2xl md:text-3xl font-thin mb-2"
                        style={{ 
                          color: activeCard === index ? 'white' : 'var(--logo-red, #C53030)'
                        }}
                      >
                        {category.title}
                      </h3>
                      <div 
                        className="w-16 h-0.5" 
                        style={{ 
                          backgroundColor: activeCard === index ? 'white' : 'var(--logo-red, #C53030)'
                        }}
                      ></div>
                    </div>
                  </motion.div>
                </a>
              ) : (
                <Link to={category.link} className="block">
                  <motion.div 
                    className="rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center h-48 flex items-center justify-center border"
                    style={{ 
                      backgroundColor: activeCard === index ? 'var(--logo-red, #C53030)' : 'white',
                      borderColor: 'var(--logo-red, #C53030)',
                      borderWidth: '1px'
                    }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onTapStart={() => setActiveCard(index)}
                    onTap={() => setTimeout(() => setActiveCard(null), 150)}
                  >
                    <div className="text-left">
                      <h3 
                        className="text-2xl md:text-3xl font-thin mb-2"
                        style={{ 
                          color: activeCard === index ? 'white' : 'var(--logo-red, #C53030)'
                        }}
                      >
                        {category.title}
                      </h3>
                      <div 
                        className="w-16 h-0.5" 
                        style={{ 
                          backgroundColor: activeCard === index ? 'white' : 'var(--logo-red, #C53030)'
                        }}
                      ></div>
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Initiatives;
