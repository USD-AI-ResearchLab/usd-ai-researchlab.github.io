import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto max-w-7xl px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-16 items-center min-h-[80vh] relative">
            
            {/* Left Column - Brand Identity */}
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
              {/* Logo Section */}
              <div className="flex justify-center w-full">
                <img 
                  src={bgimage} 
                  alt="USD AI Research Lab Logo" 
                  className="w-full max-w-lg h-auto"
                  style={{ 
                    maxHeight: '40vh',
                    objectFit: 'contain'
                  }}
                />
              </div>
              
              {/* Title Section */}
              <div className="text-center w-full">
                <HeroTitle />
              </div>
            </div>

            {/* Vertical Divider - Positioned properly in grid */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3/5 bg-gray-200 opacity-40"></div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center space-y-8 py-12 pl-8">
              
              {/* Welcome Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Welcome</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Welcome to the USD AI Research Lab! Aligned with USD's AI programs, this is a place where everyone—regardless of background—can thrive. Our passion lies in striving for excellence, driving AI innovation, and supporting one another in the pursuit of success. Together, we are shaping the future of intelligent systems. Go Yotes!
                </p>
              </div>

              {/* Call to Action Section */}
              <div className="space-y-3">
                <h4 className="text-md font-medium text-blue-700">Join Our Mission</h4>
                <p className="text-blue-600 font-semibold text-base">
                  Let's drive AI innovations together! #AI #DataScience #Research #Opportunities
                </p>
              </div>

              {/* TEDx Section */}
              <div className="space-y-3">
                <h4 className="text-md font-medium text-red-700">Featured Event</h4>
                <p className="text-red-600 font-medium text-base">
                  TEDxUSD – Building sustainable AI Solutions!
                </p>
              </div>

              {/* Director Section */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <h4 className="text-md font-medium text-gray-800">Lab Director</h4>
                <p className="text-gray-700 font-medium text-base">
                  Prof. KC (Casey) Santosh
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
