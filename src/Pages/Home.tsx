import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";
// import NewsCarousel from "../components/NewsCarousel"; // Unused for now

const Home: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="pt-40 pb-16 flex items-center justify-center">
        <div className="container mx-auto max-w-6xl px-8">
          
          {/* Centered Logo and Title Layout */}
          <div className="flex flex-col items-center justify-center space-y-8">
            
            {/* Logo Section */}
            <div className="flex justify-center w-full">
              <img 
                src={bgimage} 
                alt="USD AI Research Logo" 
                className="w-full max-w-sm h-auto"
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
        </div>
      </div>
    </div>
  );
};

export default Home;
