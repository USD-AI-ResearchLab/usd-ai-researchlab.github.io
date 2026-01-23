import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import PersonCard from '../components/PersonCard';
import { facultyData, Person } from '../data/faculty';
import { studentsData } from '../data/students';
import { alumniData } from '../data/alumni';
import { staffData } from '../data/staff';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const People: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Dynamic items per page - balance between showing enough items and having reasonable pagination
  const getItemsPerPage = () => {
    if (selectedCategory === 'All' && selectedLetter === 'All') {
      return 24; // Show more items but still paginate for the full "All" view
    }
    if (selectedCategory === 'Alumni') {
      return 12; // Alumni has lots of data, so moderate pagination
    }
    return 18; // Default for other categories
  };
  
  const itemsPerPage = getItemsPerPage();

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
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const letters = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const categories = ['All', 'Faculty', 'Postdoc', 'PhD Students', 'Masters Students', 'Current', 'Alumni', 'Staff', 'External Collaboration'];

  // Filter and get current data based on selection
  const getCurrentData = () => {
    // Get all data first
    const allData = [...facultyData, ...studentsData, ...alumniData];
    
    // If both filters are "All", return everything
    if (selectedCategory === 'All' && selectedLetter === 'All') {
      return allData;
    }
    
    // First filter by category
    let categoryFilteredData = [];
    
    switch (selectedCategory) {
      case 'Faculty':
        // Faculty = anyone in facultyData who is NOT a postdoc
        categoryFilteredData = facultyData.filter(person => 
          !person.role?.toLowerCase().includes('postdoc')
        );
        break;
        
      case 'Postdoc':
        // Postdoc = anyone whose role contains "postdoc"
        categoryFilteredData = allData.filter(person => 
          person.role?.toLowerCase().includes('postdoc')
        );
        break;
        
      case 'PhD Students':
        // PhD = only CURRENT PhD students (from studentsData), not alumni
        categoryFilteredData = studentsData.filter(person => 
          person.role?.toLowerCase().includes('phd')
        );
        break;
        
      case 'Masters Students':
        // Masters = only CURRENT Masters students (from studentsData), not alumni
        categoryFilteredData = studentsData.filter(person => 
          person.role?.toLowerCase().includes('m.s.')
        );
        break;
        
      case 'Current':
        // Current = faculty + students + staff (not alumni)
        categoryFilteredData = [...facultyData, ...studentsData, ...staffData];
        break;
        
      case 'Alumni':
        // Alumni = just alumni data
        categoryFilteredData = alumniData;
        break;
        
      case 'Staff':
        // Staff = staff data only
        categoryFilteredData = staffData;
        break;
        
      case 'External Collaboration':
        // External Collaboration = staff members (can be extended later)
        categoryFilteredData = staffData;
        break;
        
      default:
        // Default = all data
        categoryFilteredData = allData;
    }
    
    // Then filter by letter if not "All"
    if (selectedLetter === 'All') {
      return categoryFilteredData;
    }
    
    // Filter by first letter
    return categoryFilteredData.filter(person => {
      if (!person?.name) return false;
      const firstLetter = person.name.charAt(0).toUpperCase();
      return firstLetter === selectedLetter;
    });
  };

  const filteredData = getCurrentData();
  
  // Intelligent pagination calculations
  const totalItems = filteredData.length;
  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;
  
  // Ensure current page is valid for the current data
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages || 1);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);
  
  // Auto-correct page if user is beyond available data
  React.useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLetter, selectedCategory]);

  // Intelligent Pagination component
  const PaginationButtons = () => {
    // Show pagination when there are multiple pages needed (any category)
    if (totalItems <= itemsPerPage || totalPages <= 1) {
      return null; // No pagination needed when all items fit on one page
    }

    const getSmartPageRange = () => {
      const delta = 2; // Show 2 pages on each side of current page
      const range = [];
      
      // For very small page counts, show all pages
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
        return range;
      }

      // Always show first page
      range.push(1);
      
      // Determine the start and end of the middle range
      const startPage = Math.max(2, validCurrentPage - delta);
      const endPage = Math.min(totalPages - 1, validCurrentPage + delta);
      
      // Add ellipsis if there's a gap after page 1
      if (startPage > 2) {
        range.push('...');
      }
      
      // Add the middle range
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          range.push(i);
        }
      }
      
      // Add ellipsis if there's a gap before the last page
      if (endPage < totalPages - 1) {
        range.push('...');
      }
      
      // Always show last page (if not page 1)
      if (totalPages > 1) {
        range.push(totalPages);
      }
      
      return range;
    };

    const pageRange = getSmartPageRange();
    
    // Calculate display info
    const displayStart = Math.min(startIndex + 1, totalItems);
    const displayEnd = Math.min(endIndex, totalItems);

    return (
      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 mb-6 sm:mb-8">
        {/* Results info */}
        <div className="text-xs sm:text-sm text-gray-600 text-center px-2">
          Showing <span className="font-medium">{displayStart}-{displayEnd}</span> of{' '}
          <span className="font-medium">{totalItems}</span> {totalItems === 1 ? 'person' : 'people'}
          {selectedCategory !== 'All' && (
            <span className="text-red-600"> in {selectedCategory}</span>
          )}
          {selectedLetter !== 'All' && (
            <span className="text-red-600"> starting with "{selectedLetter}"</span>
          )}
        </div>

        {/* Pagination controls - scrollable on mobile */}
        <div className="overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 w-full sm:w-auto">
          <div className="flex items-center justify-center gap-1 sm:gap-2 flex-nowrap">
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, validCurrentPage - 1))}
              disabled={validCurrentPage === 1}
              className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                validCurrentPage === 1
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100 border border-gray-300'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-100 hover:shadow-md bg-gray-100 border border-gray-300'
              }`}
            >
              ← Prev
            </button>
            
            {/* Page numbers */}
            {pageRange.map((page, index) => {
              if (page === '...') {
                return (
                  <span key={`ellipsis-${index}`} className="px-1 sm:px-2 py-1 text-gray-400 text-xs sm:text-sm flex-shrink-0">
                    ...
                  </span>
                );
              }
              
              const pageNumber = Number(page);
              const isCurrentPage = pageNumber === validCurrentPage;
              
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  disabled={isCurrentPage}
                  className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 flex-shrink-0 ${
                    isCurrentPage
                      ? 'bg-red-600 text-white shadow-sm cursor-default'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-100 hover:shadow-md bg-gray-100 border border-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            
            {/* Next button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, validCurrentPage + 1))}
              disabled={validCurrentPage === totalPages}
              className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                validCurrentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed bg-gray-100 border border-gray-300'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-100 hover:shadow-md bg-gray-100 border border-gray-300'
              }`}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Page info for large datasets */}
        {totalPages > 1 && (
          <div className="text-xs text-gray-500 text-center">
            Page <span className="font-medium">{validCurrentPage}</span> of{' '}
            <span className="font-medium">{totalPages}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <PageLayout
      title="People"
    >
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Team Description */}
        <motion.div className="mb-8 bg-gray-100 rounded-lg p-6 border border-gray-200" variants={fadeInUp}>
          <p className="text-lg text-black leading-relaxed mb-4 font-thin">
            Meet the brilliant minds behind our AI research lab - faculty, students, and alumni who are shaping the future of artificial intelligence.
          </p>
        </motion.div>

        {/* Category Filters - Scrollable on mobile */}
        <motion.div className="mb-6 sm:mb-8" variants={fadeInUp}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-lg font-medium text-gray-700 whitespace-nowrap">Filter by:</span>
            </div>
            {/* Scrollable container for mobile */}
            <div className="overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    disabled={category === 'External Collaboration'}
                    className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 border-2 flex-shrink-0 sm:flex-shrink ${
                      category === 'External Collaboration'
                        ? 'text-gray-400 bg-gray-200 border-gray-400 cursor-not-allowed opacity-50'
                        : selectedCategory === category
                        ? 'text-logo-red bg-red-50 border-logo-red hover:bg-red-100'
                        : 'text-gray-600 bg-gray-100 border-gray-300 hover:text-gray-800 hover:border-gray-400 hover:bg-gray-150'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Letter Filter - Scrollable on mobile */}
        <motion.div className="mb-6 sm:mb-8" variants={fadeInUp}>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-lg font-medium text-gray-700 whitespace-nowrap">Start with:</span>
            </div>
            {/* Scrollable container for mobile, flex-wrap for desktop */}
            <div className="overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="flex gap-1 sm:gap-2 sm:flex-wrap">
                {letters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded transition-all duration-200 border-2 flex-shrink-0 sm:flex-shrink ${
                      selectedLetter === letter
                        ? 'text-logo-red bg-red-50 border-logo-red hover:bg-red-100'
                        : 'text-gray-600 bg-gray-100 border-gray-300 hover:text-gray-800 hover:border-gray-400 hover:bg-gray-150'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* People Grid */}
        {paginatedData.length > 0 ? (
          <div className="w-full">
            <motion.div 
              className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              initial="initial"
              animate="animate"
              variants={staggerChildren}
            >
              {paginatedData.map((person: Person, index: number) => (
                <motion.div 
                  key={person.memberKey || person.name || index} 
                  initial="initial"
                  animate="animate"
                  variants={cardVariants}
                  className={selectedCategory === 'Postdoc' ? 'transform hover:scale-105' : ''}
                >
                  <PersonCard 
                    name={person.name}
                    role={person.role}
                    photo={person.photo}
                    url={person.url}
                    memberKey={person.memberKey}
                    scholarUrl={person.scholarUrl}
                    dblpUrl={person.dblpUrl}
                    showAvatar={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-red-500 font-bold">NO PAGINATED DATA AVAILABLE!</p>
            <p className="text-sm text-gray-500">
              Total filtered: {totalItems}, Current page: {validCurrentPage}
            </p>
          </div>
        )}

        {/* Smart Empty State */}
        {totalItems === 0 && (
          <motion.div 
            className="flex flex-col items-center justify-center py-20 px-4"
            variants={fadeInUp}
          >
            <div className="text-center max-w-md">
              <div className="text-6xl mb-6">
                {selectedCategory === 'Alumni' ? '🎓' : 
                 selectedCategory === 'Faculty' ? '👨‍🏫' :
                 selectedCategory === 'PhD Students' ? '🔬' :
                 selectedCategory === 'Masters Students' ? '📚' :
                 selectedCategory === 'Postdoc' ? '🧑‍💼' : '🔍'}
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                No {selectedCategory.toLowerCase()} found
                {selectedLetter !== 'All' && ` starting with "${selectedLetter}"`}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedCategory === 'All' && selectedLetter === 'All' 
                  ? "It looks like there's no data available right now."
                  : selectedLetter !== 'All'
                  ? `Try selecting a different letter or browsing all ${selectedCategory.toLowerCase()}.`
                  : `Try browsing all categories or check back later for updates.`
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLetter('All');
                    setCurrentPage(1);
                  }}
                  className="px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Show All People
                </button>
                {selectedLetter !== 'All' && (
                  <button
                    onClick={() => {
                      setSelectedLetter('All');
                      setCurrentPage(1);
                    }}
                    className="px-6 py-3 text-sm font-medium text-red-600 bg-gray-100 border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Clear Letter Filter
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Pagination */}
        <PaginationButtons />
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default People;
