import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Combined Logo and Content Section */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-4 py-20">
          <div className="flex items-center max-w-6xl ml-8">
            {/* Left side - Logo and Text */}
            <div className="text-left flex-1">
              {/* Logo - Left Aligned */}
              <div className="mb-16 flex justify-start">
                <img 
                  src={bgimage} 
                  alt="AI Lab Logo" 
                  style={{ 
                    width: 'min(50vw, 600px)', 
                    height: 'auto',
                    maxHeight: '40vh'
                  }}
                />
              </div>
              
              {/* Hero Title - Left Aligned */}
              <div className="flex justify-start">
                <HeroTitle />
              </div>
            </div>

            {/* Center vertical line - mild/subtle */}
            <div className="w-px h-96 bg-gray-200 mx-16"></div>

            {/* Right side - can add content here later */}
            <div className="flex-1">
              {/* Future content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
