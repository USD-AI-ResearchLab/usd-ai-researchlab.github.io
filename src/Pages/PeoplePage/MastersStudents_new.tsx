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

  // Filter for Masters students - looking for M.S., MSc, Masters, or similar terms
  const mastersStudents = studentsData.filter(student => 
    student.role && (
      student.role.toLowerCase().includes('m.s.') ||
      student.role.toLowerCase().includes('ms ') ||
      student.role.toLowerCase().includes('msc') ||
      student.role.toLowerCase().includes('masters') ||
      student.role.toLowerCase().includes('master of')
    )
  );

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-left mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" 
            style={{ color: 'var(--logo-red, #C53030) !important' }}
          >
            Masters Students
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Masters students are developing expertise in artificial intelligence through rigorous coursework and research projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {mastersStudents.length > 0 ? (
            mastersStudents.map((student, index) => (
              <motion.div key={index} variants={fadeInUp}>
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
              <p className="text-lg text-gray-600">
                Masters student information will be updated soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MastersStudents;
// Force cache invalidation
