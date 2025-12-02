import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from '../../components/PersonCard';
import { studentsData } from '../../data/students';

const PhDStudents: React.FC = () => {
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
            PhD Students
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-lg text-black max-w-3xl leading-relaxed font-thin">
            Our PhD students are conducting pioneering research in artificial intelligence, contributing to the advancement of the field.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-0"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >

        {/* PhD Students Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
        >
          {studentsData
            .filter(student => 
              student.role && (
                student.role.toLowerCase().includes('phd') ||
                student.role.toLowerCase().includes('ph.d') ||
                student.role.toLowerCase().includes('doctoral') ||
                student.role.toLowerCase().includes('doctorate')
              )
            )
            .map((person, index) => (
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
                  showAvatar={false}
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhDStudents;
