import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Combined Logo and Content Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-16">
              <img 
                src={bgimage} 
                alt="AI Lab Logo" 
                className="mx-auto w-full max-w-none" 
                style={{ 
                  width: 'min(90vw, 1500px)', 
                  height: 'auto',
                  maxHeight: '60vh'
                }}
              />
            </div>
            
            {/* Hero Title */}
            <HeroTitle />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
