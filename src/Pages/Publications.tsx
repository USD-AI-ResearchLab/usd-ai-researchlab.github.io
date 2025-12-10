import React, { useState, useRef, useEffect } from 'react';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';

const Publications: React.FC = () => {
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className="pt-20 min-h-screen bg-white">
      <div className="w-full">
        {/* Header Section */}
        <div className="pl-4 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Publications
          </h1>
        </div>
      </div>
      
      <div className="w-full px-4">

        {/* Content Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Books, research papers, and publications from the USD AI Research Lab
          </p>
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
            Showing {filteredPublications.length} of {PUBLICATIONS.length} papers
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {filteredPublications.map((publication, index) => {
              const isHovered = hoveredPublication === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  onMouseEnter={() => handleMouseEnter(index)}
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
        </div>
      </div>
    </div>
  );
};

export default Publications;
