import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Combined Logo and Content Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo - Centered */}
            <div className="mb-16 flex justify-center">
              <img 
                src={bgimage} 
                alt="AI Lab Logo" 
                className="mx-auto"
                style={{ 
                  width: 'min(95vw, 1400px)', 
                  height: 'auto',
                  maxHeight: '60vh'
                }}
              />
            </div>
            
            {/* Hero Title - Centered */}
            <div className="flex justify-center">
              <HeroTitle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
