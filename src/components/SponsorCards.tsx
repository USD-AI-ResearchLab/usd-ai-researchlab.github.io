import React from 'react';
import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  imageSrc: string;
  description?: string;
  website?: string;
  type?: 'basic' | 'detailed' | 'featured';
}

const SponsorCard: React.FC<SponsorCardProps> = ({ 
  name, 
  imageSrc, 
  description, 
  website, 
  type = 'basic' 
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Card Type 1: Basic Card (similar to current)
  if (type === 'basic') {
    return (
      <motion.div 
        className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
        variants={fadeInUp}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        onClick={() => website && window.open(website, '_blank')}
      >
        <img 
          src={imageSrc} 
          alt={name} 
          className="h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
        />
      </motion.div>
    );
  }

  // Card Type 2: Detailed Card with name and description
  if (type === 'detailed') {
    return (
      <motion.div 
        className="bg-gray-100 rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
        variants={fadeInUp}
        onClick={() => website && window.open(website, '_blank')}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center p-4 group-hover:bg-red-50 transition-colors">
            <img 
              src={imageSrc} 
              alt={name} 
              className="max-h-12 max-w-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover:text-red-700 transition-colors">
              {name}
            </h3>
            {description && (
              <p className="text-xs text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
        {website && (
          <div className="mt-4 flex justify-center">
            <div className="text-xs text-red-600 group-hover:text-red-700 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
              Visit Website
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // Card Type 3: Featured Card with enhanced styling
  if (type === 'featured') {
    return (
      <motion.div 
        className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-lg border-2 border-red-100 p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
        variants={fadeInUp}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        onClick={() => website && window.open(website, '_blank')}
      >
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-transparent opacity-50 rounded-bl-full"></div>
        
        <div className="relative flex flex-col items-center text-center space-y-6">
          <div className="w-24 h-24 bg-gray-100 rounded-2xl shadow-md flex items-center justify-center p-4 group-hover:shadow-lg transition-shadow border border-red-100">
            <img 
              src={imageSrc} 
              alt={name} 
              className="max-h-16 max-w-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base group-hover:text-red-700 transition-colors">
              {name}
            </h3>
            {description && (
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                {description}
              </p>
            )}
          </div>

          {website && (
            <div className="flex items-center space-x-2 text-red-600 group-hover:text-red-700 transition-colors">
              <span className="text-sm font-medium">Learn More</span>
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Partnership badge */}
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
          Partner
        </div>
      </motion.div>
    );
  }

  return null;
};

export default SponsorCard;
