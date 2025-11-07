import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from '../../components/PersonCard';
import Footer from '../../components/Footer';
import { studentsData } from '../../data/students';

const MastersStudents: React.FC = () => {
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

  // Filter for Masters students
  const mastersStudents = studentsData.filter(student => 
    student.role && (
      student.role.toLowerCase().includes('master') ||
      student.role.toLowerCase().includes('m.s.') ||
      student.role.toLowerCase().includes('ms ') ||
      student.role.toLowerCase().includes('graduate')
    )
  );

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Masters Students
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Meet our talented Masters students who are contributing to AI research through their graduate studies and research projects.
          </p>
        </motion.div>

        {/* Masters Students Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
        >
          {mastersStudents.length > 0 ? (
            mastersStudents.map((student, index) => (
              <motion.div
                key={`${student.name}-${index}`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <PersonCard
                  name={student.name}
                  role={student.role}
                  photo={student.photo}
                  url={student.url}
                  memberKey={student.memberKey}
                />
              </motion.div>
            ))
          ) : (
            <motion.div className="col-span-full text-center py-12" variants={fadeInUp}>
              <div className="text-lg text-gray-600 mb-4">
                Masters student profiles are being updated.
              </div>
              <div className="text-base text-gray-500">
                Check back soon for more information about our graduate students.
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default MastersStudents;
