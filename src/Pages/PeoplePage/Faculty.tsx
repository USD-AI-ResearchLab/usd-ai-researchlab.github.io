import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from '../../components/PersonCard';
import { facultyData } from '../../data/faculty';

const Faculty: React.FC = () => {
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

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="w-full">
        {/* Header */}
        <motion.div className="pl-4 mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Faculty & Research Staff
          </h1>
          <p className="text-lg text-black max-w-3xl leading-relaxed font-thin">
            Our distinguished faculty members lead cutting-edge research in artificial intelligence and machine learning.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-0"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >

        {/* Faculty Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
        >
          {facultyData.map((person, index) => (
            <motion.div
              key={`${person.name}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <PersonCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                url={person.url}
                memberKey={person.memberKey}
                scholarUrl={person.scholarUrl}
                dblpUrl={person.dblpUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faculty;
