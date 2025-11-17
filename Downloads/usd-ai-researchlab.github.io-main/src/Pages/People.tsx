import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const People: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    {
      title: "Faculty",
      description: "Distinguished faculty members leading cutting-edge research in AI and ML",
      link: "/faculty",
      icon: "🎓"
    },
    {
      title: "PhD Students", 
      description: "Doctoral researchers advancing the frontiers of artificial intelligence",
      link: "/phd-students",
      icon: "🔬"
    },
    {
      title: "Masters Students",
      description: "Graduate students contributing to innovative research projects", 
      link: "/masters-students",
      icon: "📚"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="mb-16 text-center" variants={fadeInUp} initial="initial" animate="animate">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            Our People
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds behind our groundbreaking research in artificial intelligence and machine learning.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={category.link} className="block">
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-4xl mb-4 text-center">{category.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--logo-red, #C53030)' }}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="font-medium transition-colors" style={{ color: 'var(--logo-red)' }}>
                      View {category.title} →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default People;
