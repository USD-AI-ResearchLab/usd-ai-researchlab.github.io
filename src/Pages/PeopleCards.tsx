import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { facultyData, Person } from '../data/faculty';
import { studentsData } from '../data/students';

const PeopleCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  // Separate students by degree type
  const phdStudents = studentsData.filter((student: Person) => 
    student.role.toLowerCase().includes('phd')
  );

  const mastersStudents = studentsData.filter((student: Person) => 
    student.role.toLowerCase().includes('msc') || 
    student.role.toLowerCase().includes('ms.')
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const PersonCard: React.FC<{ person: Person; index: number }> = ({ person, index }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-4">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="w-32 h-32 object-cover rounded-full mb-4 border-4"
            style={{ borderColor: 'var(--logo-red, #C53030)' }}
          />
        ) : (
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4"
            style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
          >
            {person.name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
        )}
        
        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
          {person.name}
        </h3>
        
        {/* Role */}
        <p className="text-gray-600 text-center text-sm mb-4">
          {person.role}
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-2">
          {person.url && (
            <a
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
            >
              Profile
            </a>
          )}
          {person.scholarUrl && (
            <a
              href={person.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Scholar
            </a>
          )}
          {person.dblpUrl && (
            <a
              href={person.dblpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              DBLP
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const tabData = [
    { id: 'faculty', label: 'Faculty', count: facultyData.length, icon: '👨‍🏫' },
    { id: 'phd', label: 'PhD Students', count: phdStudents.length, icon: '🔬' },
    { id: 'masters', label: 'Masters Students', count: mastersStudents.length, icon: '📚' }
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'faculty':
        return facultyData;
      case 'phd':
        return phdStudents;
      case 'masters':
        return mastersStudents;
      default:
        return facultyData;
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12 text-center" 
          variants={fadeInUp} 
          initial="initial" 
          animate="animate"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'Ubuntu, sans-serif',
              color: 'var(--logo-red, #C53030)' 
            }}
          >
            Our People
          </h1>
          <div 
            className="w-24 h-1 mx-auto mb-6" 
            style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
          ></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds behind our groundbreaking research in artificial intelligence and machine learning.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-white border-b-2'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{
                color: activeTab === tab.id ? 'var(--logo-red, #C53030)' : '',
                borderColor: activeTab === tab.id ? 'var(--logo-red, #C53030)' : 'transparent'
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className="ml-1 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* People Cards Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {getCurrentData().map((person: Person, index: number) => (
            <PersonCard key={`${person.name}-${index}`} person={person} index={index} />
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="mt-16 bg-gray-50 rounded-lg p-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 
            className="text-2xl font-bold text-center mb-6"
            style={{ color: 'var(--logo-red, #C53030)' }}
          >
            Research Team Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                {facultyData.length}
              </div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div className="p-4">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                {phdStudents.length}
              </div>
              <div className="text-gray-600">PhD Students</div>
            </div>
            <div className="p-4">
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                {mastersStudents.length}
              </div>
              <div className="text-gray-600">Masters Students</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PeopleCards;
