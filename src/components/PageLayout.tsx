import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <main className="relative flex items-center justify-center px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6 bg-transparent">
      {/* Stable Card Container - matching Home page style */}
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="relative glass-card rounded-3xl overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-red-200/40 pointer-events-none" />
          
          {/* Content wrapper */}
          <div className="relative py-4 px-4 md:px-6 lg:px-8 glass-card-inner box-border">
            <motion.div 
              className="relative z-10"
              initial="initial"
              animate="animate"
              variants={{
                initial: {},
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {/* Header Section */}
              {(title || subtitle) && (
                <section className="text-center py-4 sm:py-5 md:py-6 lg:py-7 px-4 sm:px-6 md:px-8 lg:px-10 pb-1">
                  <motion.div 
                    className="flex flex-col items-center justify-center"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 }
                    }}
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 tracking-tight break-words">
                      {title}
                    </h1>
                    {subtitle && (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mt-2 font-light">
                        {subtitle}
                      </p>
                    )}
                  </motion.div>
                </section>
              )}

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-full py-0 box-border"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default PageLayout;
