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
    <main className="relative flex items-center justify-center p-2 sm:p-2.5 md:p-3 lg:p-4 pt-1 pb-2 sm:pb-3 bg-white mt-10 sm:mt-12 md:mt-16">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Subtle ring border */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-red-200/40 pointer-events-none"></div>
          
          <div className="relative py-0.5 sm:py-1 px-1 sm:px-2 lg:px-3 bg-white">
            <div className="relative z-10">
              {/* Header Section */}
              {(title || subtitle) && (
                <section className="text-center py-1 sm:py-1.5 md:py-2 lg:py-3 px-3 sm:px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 tracking-tight break-words">
                      {title}
                    </h1>
                  </div>
                </section>
              )}

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PageLayout;
