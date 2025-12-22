import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";
import NewsCarousel from "../components/NewsCarousel";

const Home: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Main Content Container */}
      <div className="pt-40 pb-16 flex items-center justify-center">
        <div className="container mx-auto max-w-6xl px-8">
          
          {/* Clean Two Column Layout */}
          <div className="grid grid-cols-2 gap-16 items-center relative">
            
            {/* Left Column - Brand Identity */}
            <div className="flex flex-col items-center justify-center space-y-8">
              {/* Logo Section */}
              <div className="flex justify-center w-full">
                <img 
                  src={bgimage} 
                  alt="USD AI Research Lab Logo" 
                  className="w-full max-w-sm h-auto filter drop-shadow-lg"
                  style={{ 
                    maxHeight: '35vh',
                    objectFit: 'contain'
                  }}
                />
              </div>
              
              {/* Title Section */}
              <div className="text-center w-full">
                <HeroTitle />
              </div>
            </div>

            {/* Elegant Vertical Divider */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-px"></div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center space-y-8">
              
              {/* Welcome Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">👋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Welcome</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Welcome to the USD AI Research Lab! Aligned with USD's AI programs, this is a place where everyone—regardless of background—can thrive. Our passion lies in striving for excellence, driving AI innovation, and supporting one another in the pursuit of success.
                </p>
                <p className="text-red-600 font-semibold text-lg">
                  Together, we are shaping the future of intelligent systems. Go Yotes!
                </p>
              </div>

              {/* Mission Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🚀</span>
                  </div>
                  <h4 className="text-xl font-bold text-blue-800">Join Our Mission</h4>
                </div>
                <p className="text-blue-700 font-medium text-lg">
                  Let's drive AI innovations together! #AI #DataScience #Research #Opportunities
                </p>
              </div>

              {/* Featured Event Section */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-red-800">Featured Event</h4>
                </div>
                <p className="text-red-700 font-medium text-lg mb-3">
                  7th AI Symposium 2025 - June 26-27, USD Sioux Falls
                </p>
                <a 
                  href="#/events/ai-symposium/2025"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Learn more →
                </a>
              </div>

              {/* Director Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">👨‍🎓</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Lab Director</h4>
                </div>
                <p className="text-gray-700 font-semibold text-lg">
                  Prof. KC (Casey) Santosh
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* News Carousel Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <NewsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
