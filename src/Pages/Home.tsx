import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Combined Logo and Content Section */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-4 py-20">
          <div className="flex items-center w-full">
            {/* Left side - Logo and Text - Takes exactly half the screen */}
            <div className="w-1/2 text-left pl-8">
              {/* Logo - Left Aligned */}
              <div className="mb-16 flex justify-start">
                <img 
                  src={bgimage} 
                  alt="AI Lab Logo" 
                  style={{ 
                    width: 'min(50vw, 600px)', 
                    height: 'auto',
                    maxHeight: '50vh'
                  }}
                />
              </div>
              
              {/* Hero Title - Left Aligned */}
              <div className="flex justify-start">
                <HeroTitle />
              </div>
            </div>

            {/* Center vertical line - almost invisible */}
            <div className="w-px h-96 bg-gray-100 mx-8"></div>

            {/* Right side - Takes exactly half the screen */}
            <div className="w-1/2">
              {/* Future content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
