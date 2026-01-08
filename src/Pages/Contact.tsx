import React from 'react';
import { motion } from 'framer-motion';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

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
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <motion.div 
        className="w-full px-4 py-8 max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Contact
          </h1>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Get in touch with the USD AI Research team. We welcome collaboration opportunities, inquiries about our research, and partnerships.
          </p>

          {/* Professional Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            
            {/* Lab Director Contact */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-light mb-4 text-black">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium min-w-[80px]">Email:</span>
                  <a href="mailto:usd.airesearch.lab@gmail.com" className="text-logo-red underline">
                    usd.airesearch.lab@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 font-medium min-w-[80px]">LinkedIn:</span>
                  <a href="https://www.linkedin.com/company/kc-ai/" target="_blank" rel="noopener noreferrer" className="text-logo-red underline">
                    linkedin.com/company/kc-ai
                  </a>
                </div>
              </div>
            </motion.div>

            {/* General Lab Contact */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-light mb-4 text-black">
                Location
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

          {/* Map Section */}
          <motion.div variants={fadeInUp} className="mt-12 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="400"
              frameBorder={0}
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.5932089477217!2d-96.40155!3d42.77629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8787fa9c6e3b6d7f%3A0x8c5f5f5f5f5f5f5f!2s414%20E%20Clark%20St%2C%20Vermillion%2C%20SD%2057069!5e0!3m2!1sen!2sus!4v1705612800000"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University of South Dakota Location Map"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </div>
  );
};

export default Contact;