import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PersonCard from '../components/PersonCard';
import { facultyData } from '../data/faculty';
import { studentsData } from '../data/students';

const People: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  // Alumni data
  const alumni = [
    // PhD Alumni
    {
      name: "David Cortes",
      degree: "PhD",
      year: "2024",
      role: "PhD Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Priyam Pandey",
      degree: "PhD",
      year: "2024",
      role: "PhD Graduate | Computer Science",
      category: "Alumni"
    },
    // Master's Alumni
    {
      name: "Chenchaiah Mekalathu",
      degree: "Master's",
      year: "2024",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Hari Sukarti",
      degree: "Master's",
      year: "2024",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Murthy Srinivasa Reddy",
      degree: "Master's",
      year: "2024",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Vinit Kumar Yadav",
      degree: "Master's",
      year: "2024",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Thabesum Tazeem Sheikh",
      degree: "Master's",
      year: "2023",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Ashwin Karthik Amudalavalasa",
      degree: "Master's",
      year: "2023",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Srinath Reddy Devireddy",
      degree: "Master's",
      year: "2023",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Swapna Reddy Nalla",
      degree: "Master's",
      year: "2023",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Vamshi Krishna Andeshra",
      degree: "Master's",
      year: "2023",
      role: "Master's Graduate | Computer Science",
      category: "Alumni"
    }
  ];

  const letters = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const categories = ['All', 'Faculty', 'Post Doc', 'PhD Students', 'Masters Students', 'Current', 'Alumni'];

  // Separate data by category
  const facultyStaff = facultyData;
  
  // Extract students based on role
  const phdStudents = studentsData.filter(student => 
    student.role?.toLowerCase().includes('phd') || 
    student.role?.toLowerCase().includes('ph.d')
  );
  
  const mastersStudents = studentsData.filter(student => 
    (student.role?.toLowerCase().includes('master') || 
     student.role?.toLowerCase().includes('ms')) &&
    !student.role?.toLowerCase().includes('phd') &&
    !student.role?.toLowerCase().includes('ph.d')
  );

  const postDocs = facultyData.filter(member => 
    member.role?.toLowerCase().includes('postdoc') || 
    member.role?.toLowerCase().includes('post-doc') ||
    member.role?.toLowerCase().includes('postdoctoral')
  );

  // Filter and get current data based on selection
  const getCurrentData = () => {
    let categoryData: any[] = [];
    const allData = [...facultyData, ...studentsData, ...alumni];

    // First filter by category
    switch (selectedCategory) {
      case 'Faculty':
        categoryData = facultyStaff;
        break;
      case 'Post Doc':
        categoryData = postDocs;
        break;
      case 'PhD Students':
        categoryData = phdStudents;
        break;
      case 'Masters Students':
        categoryData = mastersStudents;
        break;
      case 'Current':
        categoryData = [...facultyData, ...phdStudents, ...mastersStudents];
        break;
      case 'Alumni':
        categoryData = alumni;
        break;
      default:
        categoryData = allData;
    }
    
    // Then apply letter filter
    if (selectedLetter === 'All') {
      return categoryData;
    }
    
    const filtered = categoryData.filter(person => {
      if (!person || !person.name) return false;
      const firstLetter = person.name.charAt(0).toUpperCase();
      return firstLetter === selectedLetter;
    });
    
    return filtered;
  };

  const currentData = getCurrentData();

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container ml-0 px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-4" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            People
          </h1>
        </motion.div>

        {/* Team Description */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            Meet the brilliant minds behind our AI research lab - faculty, students, and alumni who are shaping the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--logo-red, #C53030)' : 'transparent',
                  border: `1px solid ${selectedCategory === category ? 'var(--logo-red, #C53030)' : '#e5e7eb'}`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Letter Filter */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  selectedLetter === letter
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedLetter === letter ? 'var(--logo-red, #C53030)' : 'transparent',
                  border: `1px solid ${selectedLetter === letter ? 'var(--logo-red, #C53030)' : '#e5e7eb'}`
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* People Grid */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerChildren}
        >
          {currentData.map((person: any, index: number) => (
            <motion.div key={index} variants={cardVariants}>
              <PersonCard 
                name={person.name}
                role={person.role}
                photo={person.photo}
                url={person.url}
                memberKey={person.memberKey}
                scholarUrl={person.scholarUrl}
                dblpUrl={person.dblpUrl}
                showAvatar={selectedCategory === 'Faculty' || selectedCategory === 'Post Doc' || selectedCategory === 'Current' || selectedCategory === 'All'}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default People;
