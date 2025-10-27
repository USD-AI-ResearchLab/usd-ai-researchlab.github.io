import React from 'react';
import PersonCard from '../../components/PersonCard';
import { staffData } from '../../data/staff';

const Staff: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-left mb-16">
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            PhD Students
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-thin">
            Our PhD students conducting cutting-edge research in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {staffData.map((person, index) => (
            <div key={`${person.name}-${index}`}>
              <PersonCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                url={person.url}
                memberKey={person.memberKey}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
