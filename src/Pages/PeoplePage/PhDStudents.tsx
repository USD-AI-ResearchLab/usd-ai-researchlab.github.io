import React from 'react';
import { motion } from 'framer-motion';
import PersonCard from '../../components/PersonCard';
import Footer from '../../components/Footer';
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

  // Filter for PhD students - looking for PhD, Doctoral, or similar terms
  const phdStudents = studentsData.filter(student => 
    student.role && (
      student.role.toLowerCase().includes('phd') ||
      student.role.toLowerCase().includes('ph.d') ||
      student.role.toLowerCase().includes('doctoral') ||
      student.role.toLowerCase().includes('doctorate')
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
            PhD Students
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our PhD students who are advancing the frontiers of artificial intelligence through cutting-edge research and innovation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {phdStudents.length > 0 ? (
            phdStudents.map((student, index) => (
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
                PhD student information will be updated soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PhDStudents;
