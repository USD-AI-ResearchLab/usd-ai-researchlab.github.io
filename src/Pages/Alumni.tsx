import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Alumni: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    'All'
  ];

  const letters = [
    'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  // Alumni data with PhD and Master's graduates
  const alumni = [
    // PhD Alumni
    {
      name: "Dr. John Smith",
      degree: "PhD",
      year: "2023",
      currentPosition: "Research Scientist at Google",
      category: "Alumni"
    },
    {
      name: "Dr. Emily Chen",
      degree: "PhD", 
      year: "2022",
      currentPosition: "Assistant Professor at Stanford University",
      category: "Alumni"
    },
    {
      name: "Dr. Michael Johnson",
      degree: "PhD",
      year: "2021", 
      currentPosition: "Senior Research Engineer at Microsoft",
      category: "Alumni"
    },
    {
      name: "Dr. Sarah Williams",
      degree: "PhD",
      year: "2020",
      currentPosition: "Principal Data Scientist at Amazon",
      category: "Alumni"
    },
    {
      name: "Dr. David Brown",
      degree: "PhD",
      year: "2019",
      currentPosition: "Research Director at Meta",
      category: "Alumni"
    },
    {
      name: "Dr. Lisa Davis",
      degree: "PhD",
      year: "2018",
      currentPosition: "Lead AI Researcher at OpenAI",
      category: "Alumni"
    },
    {
      name: "Dr. Robert Wilson",
      degree: "PhD",
      year: "2017",
      currentPosition: "Senior Machine Learning Engineer at Tesla",
      category: "Alumni"
    },
    {
      name: "Dr. Anna Martinez",
      degree: "PhD",
      year: "2016",
      currentPosition: "Research Scientist at DeepMind",
      category: "Alumni"
    },

    // Master's Alumni
    {
      name: "James Anderson",
      degree: "Master's",
      year: "2023", 
      currentPosition: "Data Scientist at Microsoft",
      category: "Alumni"
    },
    {
      name: "Maria Rodriguez",
      degree: "Master's",
      year: "2023",
      currentPosition: "Machine Learning Engineer at Google",
      category: "Alumni"
    },
    {
      name: "Kevin Lee",
      degree: "Master's",
      year: "2022",
      currentPosition: "Software Engineer at Apple",
      category: "Alumni"
    },
    {
      name: "Jennifer Taylor",
      degree: "Master's",
      year: "2022",
      currentPosition: "Data Analyst at Netflix",
      category: "Alumni"
    },
    {
      name: "Christopher White",
      degree: "Master's",
      year: "2021",
      currentPosition: "Research Associate at IBM",
      category: "Alumni"
    },
    {
      name: "Ashley Thompson",
      degree: "Master's",
      year: "2021",
      currentPosition: "AI Specialist at Nvidia",
      category: "Alumni"
    },
    {
      name: "Daniel Garcia",
      degree: "Master's",
      year: "2020",
      currentPosition: "Senior Data Scientist at Uber",
      category: "Alumni"
    },
    {
      name: "Nicole Clark",
      degree: "Master's",
      year: "2020",
      currentPosition: "Machine Learning Engineer at Spotify",
      category: "Alumni"
    },
    {
      name: "Ryan Adams",
      degree: "Master's",
      year: "2019",
      currentPosition: "Product Manager at Facebook",
      category: "Alumni"
    },
    {
      name: "Stephanie Moore",
      degree: "Master's",
      year: "2019",
      currentPosition: "Data Science Manager at LinkedIn",
      category: "Alumni"
    },
    {
      name: "Brandon Hall",
      degree: "Master's",
      year: "2018",
      currentPosition: "Senior Software Engineer at Twitter",
      category: "Alumni"
    },
    {
      name: "Rachel Green",
      degree: "Master's",
      year: "2018",
      currentPosition: "Research Scientist at Adobe",
      category: "Alumni"
    }
  ];

  const filteredAlumni = alumni.filter(person => {
    const categoryMatch = selectedCategory === 'All' || 
                         (selectedCategory === 'PhD' && person.degree === 'PhD') ||
                         (selectedCategory === 'Masters' && person.degree === "Master's");
    const letterMatch = selectedLetter === 'All' || person.name.charAt(0).toUpperCase() === selectedLetter;
    return categoryMatch && letterMatch;
  });

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="mb-16 text-left" variants={fadeInUp} initial="initial" animate="animate">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4"
            style={{ 
              color: 'var(--logo-red, #C53030)' 
            }}
          >
            Alumni
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-8"
          variants={fadeInUp} 
          initial="initial" 
          animate="animate"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--logo-red, #C53030)' : undefined
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Alphabetical Filter */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp} 
          initial="initial" 
          animate="animate"
        >
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-10 h-10 rounded text-sm font-medium transition-all duration-300 ${
                  selectedLetter === letter
                    ? 'text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedLetter === letter ? 'var(--logo-red, #C53030)' : undefined,
                  color: selectedLetter === letter ? 'white' : 'var(--logo-red, #C53030)'
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Alumni Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial" 
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((person, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border"
                style={{ borderColor: 'var(--logo-red, #C53030)', borderWidth: '1px' }}
              >
                <h3 
                  className="text-xl font-medium mb-2"
                  style={{ color: 'var(--logo-red, #C53030)' }}
                >
                  {person.name}
                </h3>
                <p className="text-gray-600 mb-1">{person.degree} - {person.year}</p>
                <p className="text-gray-700 text-sm">{person.currentPosition}</p>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }}
              className="col-span-full text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                No alumni found for the selected filters.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
