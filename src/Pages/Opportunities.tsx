import React from 'react';
import { motion } from 'framer-motion';

const Opportunities: React.FC = () => {
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

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 heading-red">
            Opportunities
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-2xl font-light mb-6 text-gray-800">
            Join Our Research Lab
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
            We are always looking for passionate and motivated individuals to join our research team. Whether you're a prospective graduate student, undergraduate researcher, or collaborator, we welcome you to explore opportunities with us.
          </p>
          
          <div className="space-y-8 mt-10">
            {/* Graduate Students */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-gray-800">
                Graduate Students
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-thin">
                We are actively recruiting PhD and Master's students interested in AI, machine learning, computer vision, and related fields. If you're passionate about cutting-edge research and innovation, we'd love to hear from you.
              </p>
            </motion.div>

            {/* Undergraduate Students */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-gray-800">
                Undergraduate Students
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-thin">
                Undergraduate students can gain hands-on research experience through independent study projects, summer research programs, or senior capstone projects. This is a great opportunity to explore AI research and prepare for graduate studies.
              </p>
            </motion.div>

            {/* Visiting Scholars */}
            <motion.div variants={fadeInUp} className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-light mb-3 text-gray-800">
                Visiting Scholars & Collaborators
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-thin">
                We welcome visiting scholars and researchers for collaborative projects. If you're interested in working with our team, please reach out to discuss potential collaborations.
              </p>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-xl font-light mb-4 text-gray-800">
              How to Apply
            </h3>
            <p className="text-base text-gray-700 leading-relaxed font-thin mb-4">
              Interested candidates should send their CV, research interests, and relevant materials to the lab director. Please include "Research Opportunity" in the subject line.
            </p>
            <p className="text-base text-gray-700 leading-relaxed font-thin">
              For more information, visit our <a href="#/contact" className="text-red-600 hover:text-red-700 underline">Contact page</a>.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Opportunities;
