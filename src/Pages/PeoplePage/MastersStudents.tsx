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
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Masters Students
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
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
