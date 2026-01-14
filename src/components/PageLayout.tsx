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
    <main className="relative flex items-center justify-center p-4 md:p-6 lg:p-8 pt-2 pb-12 bg-white mt-[120px]">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Subtle ring border */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-red-200/40 pointer-events-none"></div>
          
          <div className="relative py-4 px-3 lg:px-4 bg-white">
            <div className="relative z-10">
              {/* Header Section */}
              {(title || subtitle) && (
                <section className="text-center py-6 md:py-8 lg:py-10 px-4 md:px-8">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 tracking-tight break-words">
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
                className="px-4 md:px-8 lg:px-12 py-8 md:py-12"
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
