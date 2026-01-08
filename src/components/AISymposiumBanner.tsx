import React from 'react';
import { Link } from 'react-router-dom';

const AISymposiumBanner: React.FC = () => {
  return (
    <Link
      to="/events/ai-symposium/2025"
      className="block hover:scale-105 transition-transform duration-300 mb-8"
    >
      <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-lg p-6 text-white shadow-lg overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                🚀 7th AI Symposium
              </h2>
              <p className="text-lg mb-2 opacity-90">
                USD Sioux Falls
              </p>
              <p className="text-sm opacity-80">
                Join leading experts in AI, healthcare, and biomedical computing
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-6xl opacity-20">🤖</div>
            </div>
          </div>
          
          <div className="flex items-center mt-4">
            <span className="bg-white text-logo-red px-3 py-1 rounded-full text-sm font-semibold mr-3">
              FREE EVENT
            </span>
            <span className="text-sm opacity-80">
              Click to learn more →
            </span>
          </div>
        </div>

        {/* Animated elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </Link>
  );
};

export default AISymposiumBanner;
