import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const People: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    {
      title: "Faculty",
      link: "/faculty"
    },
    {
      title: "PhD Students", 
      link: "/phd-students"
    },
    {
      title: "Master's Students",
      link: "/masters-students"
    },
    {
      title: "Alumni",
      link: "/alumni"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="mb-16 text-left" variants={fadeInUp} initial="initial" animate="animate">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4"
            style={{ 
              color: 'var(--logo-red, #C53030)' 
            }}
          >
            Our People
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Categories Cards */}
        <motion.div 
          className="grid grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="initial" 
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
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
              <Link to={category.link} className="block">
                <motion.div 
                  className="rounded-lg p-8 hover:shadow-lg transition-all duration-300 min-h-48 flex items-center justify-start border"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default People;
