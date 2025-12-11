import React, { useState, useRef, useEffect } from 'react';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return count;
};

// Animated Statistics Card Component
const AnimatedStatCard: React.FC<{ 
  title: string; 
  value?: number; 
  suffix?: string; 
  subtitle: string; 
  isText?: boolean 
}> = ({ title, value = 0, suffix = '', subtitle, isText = false }) => {
  const animatedValue = useCountUp(value, 2000);
  
  return (
    <div className="bg-white p-1.5 rounded-sm border border-gray-100">
      <h3 className="text-xs font-semibold mb-0.5 text-red-600">
        {title}
      </h3>
      {isText ? (
        <p className="text-xs text-gray-600 leading-tight">
          {subtitle}
        </p>
      ) : (
        <>
          <p className="text-base font-bold text-black mb-0.5">
            {animatedValue}{suffix}
          </p>
          <p className="text-xs text-gray-600">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
};

const Publications: React.FC = () => {
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerPage = 6; // Number of publications per page

  // Define categories based on publication data
  const categories = [
    'All',
    'Medical Imaging',
    'COVID-19',
    'Machine Learning',
    'Computer Vision',
    'Healthcare AI',
    'NLP',
    'Security'
  ];

  // Filter publications based on search and category
  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.authors && pub.authors.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || (() => {
      const title = pub.title.toLowerCase();
      const desc = pub.description.toLowerCase();
      
      switch(selectedCategory) {
        case 'Medical Imaging':
          return title.includes('medical') || title.includes('chest x-ray') || title.includes('cxr') || 
                 title.includes('imaging') || desc.includes('medical imaging');
        case 'COVID-19':
          return title.includes('covid') || desc.includes('covid');
        case 'Machine Learning':
          return title.includes('machine learning') || title.includes('ml ') || title.includes('deep learning') ||
                 title.includes('cnn') || title.includes('neural network') || desc.includes('machine learning');
        case 'Computer Vision':
          return title.includes('vision') || title.includes('image') || title.includes('segmentation') ||
                 desc.includes('computer vision') || desc.includes('image processing');
        case 'Healthcare AI':
          return title.includes('health') || title.includes('fertility') || title.includes('tuberculosis') ||
                 title.includes('tb') || desc.includes('healthcare');
        case 'NLP':
          return title.includes('text') || title.includes('language') || title.includes('nlp') ||
                 desc.includes('natural language');
        case 'Security':
          return title.includes('attack') || title.includes('adversarial') || title.includes('secure') ||
                 desc.includes('security');
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPublications = filteredPublications.slice(startIndex, endIndex);

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredPublication(index);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredPublication(null);
    }, 150); // 150ms delay before hiding content
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-white">
      <div className="w-full">
        {/* Header Section */}
        <div className="pl-4 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Publications
          </h1>
        </div>
      </div>
      
      <div className="w-full px-4">

        {/* Publications & Research Stats Section */}
        <div className="w-full mb-8 flex justify-start">
          <div className="bg-white border rounded-lg border-gray-200 p-3 max-w-md w-full">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-red-600">
                Publications & Research
              </h2>
              <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-1">
              <AnimatedStatCard 
                title="Published Research"
                value={200}
                suffix="+"
                subtitle="Peer-Reviewed Articles"
              />
              
              <AnimatedStatCard 
                title="Books"
                value={10}
                suffix="+"
                subtitle="Published Works"
              />
              
              <AnimatedStatCard 
                title="Conferences"
                value={10}
                suffix="+"
                subtitle="International Events"
              />
              
              <AnimatedStatCard 
                title="Funding Sources"
                value={0}
                subtitle="SDBOR, DOD, NSF, Department Of Education"
                isText={true}
              />
            </div>
          </div>
        </div>
        
        {/* Books Section */}
        <div className="w-full mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Books
          </h2>
          <BooksComponent />
        </div>

        {/* Research Papers Section */}
        <div className="w-full mb-16 relative">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Research Papers
          </h2>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search papers by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-base"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={
                    selectedCategory === category
                      ? { backgroundColor: 'var(--logo-red, #C53030)' }
                      : undefined
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-sm text-gray-600 font-light">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredPublications.length)} of {filteredPublications.length} papers
            {filteredPublications.length !== PUBLICATIONS.length && (
              <span> (filtered from {PUBLICATIONS.length} total)</span>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {paginatedPublications.map((publication, index) => {
              const actualIndex = startIndex + index; // Calculate actual index for hover state
              const isHovered = hoveredPublication === actualIndex;
              return (
                <div
                  key={actualIndex}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter(actualIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-6">
                    {/* Card Header - Always Visible */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium text-gray-900 leading-tight pr-4 flex-grow">
                        {publication.title}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isHovered ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Authors Preview - Always Visible */}
                    {publication.authors && (
                      <p className="text-sm text-gray-600 mb-3 font-light line-clamp-2">
                        {publication.authors}
                      </p>
                    )}

                    {/* Year/Venue Preview - Always Visible */}
                    {(publication.venue || publication.year) && (
                      <p className="text-xs text-gray-500 mb-4 font-light">
                        {publication.year && `${publication.year}`}
                        {publication.venue && publication.year && ' • '}
                        {publication.venue}
                      </p>
                    )}

                    {/* Expanded Content - Only when hovered */}
                    {isHovered && (
                      <div className="space-y-4 border-t border-gray-100 pt-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Abstract:</h4>
                          <p className="text-gray-600 leading-relaxed text-sm font-light">
                            {publication.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          {publication.paperUrl && (
                            <a
                              href={publication.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
                              style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Read Paper
                            </a>
                          )}
                          {publication.codeUrl && publication.codeUrl !== "#" && (
                            <a
                              href={publication.codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Hover Hint */}
                    {!isHovered && (
                      <div className="text-xs text-gray-400 mt-2 font-light opacity-75">
                        Hover to read more...
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded transition-colors ${
                    pageNum === currentPage
                      ? 'text-white'
                      : 'bg-white text-red-600 border border-red-600 hover:bg-red-50'
                  }`}
                  style={
                    pageNum === currentPage
                      ? { backgroundColor: 'var(--logo-red, #C53030)' }
                      : undefined
                  }
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;
