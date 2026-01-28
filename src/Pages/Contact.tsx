import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import FloatingScrollArrows from "../components/FloatingScrollArrows";
import LazyImage from '../components/LazyImage';
import mainLogo from '../assets/logo.svg';

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
    <PageLayout
      title="Contact"
    >
      <motion.div 
        className="w-full px-4 sm:px-6 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Content Section */}
        <motion.div className="mb-16 max-w-6xl mx-auto" variants={fadeInUp}>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Get in touch with the USD AI Research team. We welcome collaboration opportunities, inquiries about our research, and partnerships.
          </p>

          {/* Professional Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-12">
            
            {/* Lab Director Contact */}
            <motion.div variants={fadeInUp} className="min-w-0">
              <h3 className="text-lg sm:text-xl font-light mb-4 text-red-600">
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                  <span className="text-gray-600 font-medium sm:min-w-[80px] flex-shrink-0">Email:</span>
                  <a href="mailto:usd.airesearch.lab@gmail.com" className="text-red-600 underline break-all">
                    usd.airesearch.lab@gmail.com
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                  <span className="text-gray-600 font-medium sm:min-w-[80px] flex-shrink-0">LinkedIn:</span>
                  <a href="https://www.linkedin.com/company/kc-ai/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline break-all">
                    linkedin.com/company/kc-ai
                  </a>
                </div>
              </div>
            </motion.div>

            {/* General Lab Contact */}
            <motion.div variants={fadeInUp} className="min-w-0">
              <h3 className="text-lg sm:text-xl font-light mb-4 text-red-600">
                Location
              </h3>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-3">
                  <span className="text-gray-600 font-medium sm:min-w-[80px] flex-shrink-0">Address:</span>
                  <div className="text-gray-700 leading-relaxed">
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
          <motion.div variants={fadeInUp} className="mt-16">
            {/* Logo Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <LazyImage 
                  src={mainLogo} 
                  alt="USD AI Research Lab" 
                  className="w-auto h-12 sm:h-16 max-w-full object-contain" 
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-light text-red-600">Visit Us</h4>
                <p className="text-sm text-gray-600">University of South Dakota - Computer Science Department</p>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=414%20E%20Clark%20St,%20Vermillion,%20SD%2057069+(University%20of%20South%20Dakota%20Computer%20Science)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of South Dakota Computer Science Department - 414 E Clark St, Vermillion, SD"
              />
              {/* "You are here" indicator */}
              <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs sm:text-sm font-medium z-10 pointer-events-none max-w-[calc(100%-1rem)]">
                <span className="hidden sm:inline">📍 USD Computer Science - 414 E Clark St</span>
                <span className="sm:hidden">📍 USD CS - 414 E Clark St</span>
              </div>
              {/* Direct Maps Link */}
              <div className="absolute bottom-2 right-2">
                <a
                  href="https://www.google.com/maps/search/414+E+Clark+St,+Vermillion,+SD+57069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-lg text-xs font-medium hover:bg-red-50 transition-colors whitespace-nowrap"
                >
                  <span className="hidden sm:inline">View Larger Map</span>
                  <span className="sm:hidden">View Map</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Contact;