import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Contact
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Get in touch with the USD AI Research Lab team. We welcome collaboration opportunities, inquiries about our research, and partnerships.
          </p>

          {/* Professional Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            
            {/* Lab Director Contact */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-light mb-4 text-black">
                Lab Director
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium min-w-[80px]">Email:</span>
                  <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:text-red-700 underline">
                    kc.santosh@usd.edu
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium min-w-[80px]">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/kc-santosh/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">
                    linkedin.com/in/kc-santosh
                  </a>
                </div>
              </div>
            </motion.div>

            {/* General Lab Contact */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-light mb-4 text-black">
                Lab Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-600 font-medium min-w-[80px]">Address:</span>
                  <div className="text-gray-700">
                    <div>University of South Dakota</div>
                    <div>Department of Computer Science</div>
                    <div>414 E Clark St</div>
                    <div>Vermillion, SD 57069</div>
                    <div>United States</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Collaboration Information */}
          <motion.div variants={fadeInUp} className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4 text-black">
              Research Collaborations & Partnerships
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                We are always interested in collaborating with researchers, industry partners, and academic institutions. 
                For research collaboration inquiries, please include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your research background and current affiliation</li>
                <li>Specific research areas of mutual interest</li>
                <li>Proposed collaboration timeline and objectives</li>
                <li>Available resources and funding (if applicable)</li>
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>For general inquiries:</strong> Please use the subject line "USD AI Lab - [Your Topic]" to help us route your message appropriately.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Office Hours & Meetings */}
          <motion.div variants={fadeInUp} className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4 text-black">
              Office Hours & Meetings
            </h3>
            <div className="space-y-3">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Office Hours:</strong> By appointment only
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Virtual Meetings:</strong> Available via Zoom or Microsoft Teams
              </p>
              <p className="text-sm text-gray-600">
                Please email to schedule a meeting. Include your preferred time slots and the purpose of the meeting.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;