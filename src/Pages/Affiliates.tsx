import React from 'react';
import Footer from '../components/Footer';

const Affiliates: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
          Affiliates
        </h1>
        <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Affiliates;
