import React from 'react';
import bgimage from "../assets/logo.svg";
import HeroTitle from "../components/HeroTitle";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Combined Logo and Content Section */}
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
                maxHeight: '70vh'
              }}
            />
          </div>
          
          {/* Hero Title */}
          <HeroTitle />
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              Follow us on{' '}
              <a href="https://www.linkedin.com/company/kc-ai/posts/?feedView=all" className="underline hover:opacity-80" style={{ color: 'var(--logo-red, #C53030)' }}>LinkedIn</a>. 
              For general inquiries, reach us by{' '}
              <a href="mailto:usd.airesearch.lab@gmail.com" className="underline hover:opacity-80" style={{ color: 'var(--logo-red, #C53030)' }}>email</a>. 
              For technical assistance or questions, please contact{' '}
              <a href="mailto:usd.airesearch.lab@gmail.com" className="underline hover:opacity-80" style={{ color: 'var(--logo-red, #C53030)' }}>usd.airesearch.lab@gmail.com</a>
              <br />
              <span className="text-black">© UC Regents 2025.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
