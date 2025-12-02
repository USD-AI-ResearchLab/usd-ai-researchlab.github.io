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
    'All',
    'PhD', 
    'Masters'
  ];

  const letters = [
    'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  // Alumni data with PhD and Master's graduates
  const alumni = [
    // PhD Alumni
    {
      name: "David Cortes",
      degree: "PhD",
      year: "2024",
      currentPosition: "PhD Student | Computer Science",
      category: "Alumni"
    },
    {
      name: "Priyam Pandey",
      degree: "PhD",
      year: "2024",
      currentPosition: "PhD Student | Computer Science",
      category: "Alumni"
    },

    // Master's Alumni
    {
      name: "Chenchaiah Mekalathu",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Kanishka Parankusham",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Neerajdattu Dudam",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Akshay Reddy",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Mohammad Navid Nayyem",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "KrishnaPhanindra Marupaka",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Deepika Nuthalapati",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Satya Mouli Dhangati",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Sivani Maddepalli",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Sainath Vaddi",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Sony Gurram",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Aashish Ghimire",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Sabin Adhikari",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Jayakumar Pujar",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Pooja Singh",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Anup Khanal",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Anushuya Baidya",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "MdAftabul Islam",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "AkhilReddy Mendu",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Anuska Pokharel",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Yslam Ismailov",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Hansakrish Kuttubaskar",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Praveen Paramsivam",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Abhishek Chaudhary",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "A Matthew Chacko",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "KalyanVikram Muppudoju",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Srijana Raut",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Suprim Nakarmi",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Gaurrav Subedi",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Rakshya Dahal",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Alisha Karna",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Aarati Dhungel",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Anup Dhakal",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Ronaj Pradhan",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Md Masum Rana",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Bipul Bhattarai",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Josh Henderson",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Siddhi Kiran Bajracharya",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Hugo Morvan",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Bichar Shrestha Gurung",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Bigyan Shrestha",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Raman Regmi",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Adedeji Waisu Yusuff",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Muntamir Mamun",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Rafia Sharmin Alice",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Casey Wall",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Nikita Shrestha",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Siva Allu",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Prakash Madai",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Shotadbi Roy",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Supriti Ghosh",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Bruce Stofft",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Afia Farjana",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Jahirul Islam",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Haidong Wang",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Alina Chu",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Airu Liu",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Fatema Tu Zohora",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "A Afaque",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
      category: "Alumni"
    },
    {
      name: "Nikul Vyas",
      degree: "Master's",
      year: "2024",
      currentPosition: "Grad Student (G/RA)",
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

  // Debug: Let's see what we have
  console.log('Total alumni in array:', alumni.length);
  console.log('Sample alumni degrees:', alumni.slice(0, 10).map(a => a.degree));
  console.log('Selected category:', selectedCategory);
  console.log('Selected letter:', selectedLetter);
  console.log('Filtered alumni count:', filteredAlumni.length);

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
                className="person-card bg-white rounded-xl shadow-lg p-6 text-center h-full flex flex-col items-center justify-between border-2 border-transparent hover:border-logo-red block transition-transform duration-200 hover:scale-105"
              >
                <div className="flex flex-col items-center flex-1">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 leading-tight text-red-600">
                    {person.name}
                  </h3>
                </div>
                <div className="mt-auto">
                  <p className="text-sm font-medium text-gray-800 line-clamp-3 leading-relaxed mb-3">
                    {person.currentPosition}
                  </p>
                  <p className="text-xs text-gray-500">
                    {person.degree} - {person.year}
                  </p>
                </div>
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
