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
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Kanishka Parankusham",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Neerajdattu Dudam",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Akshay Reddy",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Anupam Dhakal",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Mohammad Navid Nayyem",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "KrishnaPhanindra Marupaka",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Deborah Asamoah",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Deepika Nuthalapati",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Satya Mouli Dhangati",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Sivani Maddepalli",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Sony Gurram",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Aashish Ghimire",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Sabin Adhikari",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Jayakumar Pujar",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Jeevan Kaphle",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Robin Narsingh Ranabhat",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Thoyajakasha Kashyap Kristipati",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Pooja Singh",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Aniket Kumar",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Anup Khanal",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Anushuya Baidya",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "MdAftabul Islam",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "AkhilReddy Mendu",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Anuska Pokharel",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Yslam Ismailov",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Hansakrish Kuttubaskar",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    },
    {
      name: "Praveen Paramsivam",
      degree: "Master's",
      year: "2024",
      role: "Masters Graduate | Computer Science",
      category: "Alumni"
    }
  ];

  const letters = [
    'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  const categories = [
    'All', 'Faculty', 'Post Doc', 'PhD Students', 'Masters Students', 'Current', 'Alumni'
  ];

  // Filter PhD students
  const phdStudents = studentsData.filter(student => 
    student.role && (
      student.role.toLowerCase().includes('phd') ||
      student.role.toLowerCase().includes('ph.d') ||
      student.role.toLowerCase().includes('doctoral') ||
      student.role.toLowerCase().includes('doctorate')
    )
  );

  // Filter Master's students
  const mastersStudents = studentsData.filter(student => 
    student.role && (
      student.role.toLowerCase().includes('master') ||
      student.role.toLowerCase().includes('m.s.') ||
      student.role.toLowerCase().includes('ms ') ||
      student.role.toLowerCase().includes('graduate')
    ) && !(
      student.role.toLowerCase().includes('phd') ||
      student.role.toLowerCase().includes('ph.d') ||
      student.role.toLowerCase().includes('doctoral') ||
      student.role.toLowerCase().includes('doctorate')
    )
  );

  // Get current data based on category filter
  const getCurrentData = () => {
    const allData = [...facultyData, ...studentsData, ...alumni];
    
    // First, get the right category data
    let categoryData = [];
    
    switch (selectedCategory) {
      case 'All':
        categoryData = allData;
        break;
      case 'Faculty':
        categoryData = facultyData.filter(person => 
          !person.role || !person.role.toLowerCase().includes('postdoc')
        );
        break;
      case 'Post Doc':
        categoryData = facultyData.filter(person => 
          person.role && person.role.toLowerCase().includes('postdoc')
        );
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
      console.log('Letter filter: All, returning all category data:', categoryData.length);
      return categoryData;
    }
    
    const filtered = categoryData.filter(person => {
      if (!person || !person.name) return false;
      const firstLetter = person.name.charAt(0).toUpperCase();
      return firstLetter === selectedLetter;
    });
    
    console.log(`Letter filter: ${selectedLetter}, category: ${selectedCategory}, filtered from ${categoryData.length} to ${filtered.length}`);
    console.log('Names found:', filtered.map(p => p.name));
    
    return filtered;
  };

  const currentData = getCurrentData();

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
          
          {/* Category Filters - Moved here */}
          <div className="flex flex-wrap justify-center mb-4 gap-2">
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

          {/* Letter Filter - Moved here */}
          <div className="flex flex-wrap justify-center mb-6 gap-2">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  selectedLetter === letter
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: selectedLetter === letter ? 'var(--logo-red, #C53030)' : 'transparent'
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Section Headers */}
        <motion.div className="mb-8 text-left" variants={fadeInUp}>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4"
            style={{ color: 'var(--logo-red, #C53030)' }}
          >
            {selectedCategory === 'Faculty' && 'Faculty & Research Staff'}
            {selectedCategory === 'PhD Students' && 'PhD Students'}
            {selectedCategory === 'Masters Students' && 'Masters Students'}
            {selectedCategory === 'Post Doc' && 'Post Doctoral Researchers'}
            {selectedCategory === 'Current' && 'Current Members'}
            {selectedCategory === 'Alumni' && 'Alumni'}
            {selectedCategory === 'All' && 'Our Team'}
          </h2>
          <p className="text-lg text-black max-w-3xl leading-relaxed font-thin">
            {selectedCategory === 'Faculty' && 'Our distinguished faculty members lead cutting-edge research in artificial intelligence and machine learning.'}
            {selectedCategory === 'PhD Students' && 'Our PhD students are conducting pioneering research in artificial intelligence, contributing to the advancement of the field.'}
            {selectedCategory === 'Masters Students' && 'Our Masters students are developing expertise in artificial intelligence through rigorous coursework and research projects.'}
            {selectedCategory === 'Post Doc' && 'Our post-doctoral researchers bring advanced expertise and contribute to innovative research initiatives.'}
            {selectedCategory === 'Current' && 'Meet all our current faculty, PhD students, and Masters students working together on cutting-edge AI research.'}
            {selectedCategory === 'Alumni' && 'Our proud alumni who have contributed to the growth of artificial intelligence research and continue to make impact in their respective fields.'}
            {selectedCategory === 'All' && 'Meet the brilliant minds behind our AI research lab - faculty, students, and alumni who are shaping the future of artificial intelligence.'}
          </p>
        </motion.div>

        {/* People Grid */}
        <motion.div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {currentData.map((person: any, index: number) => (
            <motion.div
              key={`${person.name}-${index}`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
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
      </div>
    </div>
  );
};

export default People;
