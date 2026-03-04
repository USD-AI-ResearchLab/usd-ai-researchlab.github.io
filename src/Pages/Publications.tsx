import React, { useState, useRef, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';
import { FEW_SAMPLES, PUBLICATIONS_BY_YEAR } from '../data/publicationsByYear';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const Publications: React.FC = () => {
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [expandedYears, setExpandedYears] = useState<Set<string>>(
    new Set(PUBLICATIONS_BY_YEAR.map(s => s.year))
  );

  const toggleYear = (year: string) => {
    setExpandedYears(prev => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

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
    <PageLayout
      title="Publications"
    >
      <div className="w-full px-4 sm:px-6 py-4">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Books Section */}
        <div className="w-full mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-3">
            Books
          </h2>
          <BooksComponent />
        </div>

        {/* Few Samples Section */}
        <div className="w-full mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-2">
            Few samples
          </h2>
          <ul className="space-y-0.5 text-gray-700 font-ubuntu text-sm leading-snug">
            {FEW_SAMPLES.map((pub, idx) => (
              <li key={idx} className="relative pl-5 py-1 bg-transparent hover:border-l-4 hover:border-red-500 transition-all duration-200">
                <span className="absolute left-1 top-1 text-red-600 font-bold text-sm">•</span>
                    {pub.authors}: <span className="text-gray-800">{pub.title}</span>, <strong className="text-blue-700">{pub.venue}</strong> <span className="text-green-700">({pub.year}{pub.note ? `, ${pub.note}` : ''})</span>.{' '}
                    {pub.linkUrl && (
                      <a href={pub.linkUrl} target="_blank" rel="noopener noreferrer"
                        className={`${pub.linkLabel === 'arXiv' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : pub.linkLabel === 'URL' ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-green-100 text-green-700 hover:bg-green-200'} px-1 py-0.5 rounded text-xs underline`}>
                        {pub.linkLabel}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
        </div>

        {/* Year-by-Year Sections (Collapsible) */}
        {PUBLICATIONS_BY_YEAR.map((section) => (
          <div key={section.year} className="w-full mb-2">
            <button
              onClick={() => toggleYear(section.year)}
              className="w-full flex items-center justify-between py-2 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl md:text-2xl font-thin text-logo-red">
                  {section.year}
                </h3>
                {section.summary && (
                  <span className="text-gray-500 text-xs font-medium hidden sm:inline">
                    ({section.publications.length} papers)
                  </span>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 group-hover:text-logo-red transition-transform duration-300 ${expandedYears.has(section.year) ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedYears.has(section.year) && (
              <div className="pl-1">
                {section.summary && (
                  <p className="text-gray-700 font-medium text-sm mb-1">
                    {section.summary.split(/(\d+ journal articles|\d+ conference proceedings|\d+ book chapters?)/).map((part, i) =>
                      /^\d+ (journal articles|conference proceedings|book chapters?)$/.test(part)
                        ? <strong key={i}>{part}</strong>
                        : <span key={i}>{part}</span>
                    )}
                  </p>
                )}
                <ul className="space-y-0.5 text-gray-700 font-ubuntu text-sm leading-snug">
                  {section.publications.map((pub, idx) => (
                    <li key={idx} className="relative pl-5 py-1 bg-transparent hover:border-l-4 hover:border-red-500 transition-all duration-200">
                      <span className="absolute left-1 top-1 text-red-600 font-bold text-sm">•</span>
                      {pub.authors}: <span className="text-gray-800">{pub.title}</span>, <strong className="text-blue-700">{pub.venue}</strong> <span className="text-green-700">({pub.year}{pub.note ? `, ${pub.note}` : ''})</span>.{' '}
                      {pub.linkUrl && (
                        <a href={pub.linkUrl} target="_blank" rel="noopener noreferrer"
                          className={`${pub.linkLabel === 'arXiv' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : pub.linkLabel === 'URL' ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' : 'bg-green-100 text-green-700 hover:bg-green-200'} px-1 py-0.5 rounded text-xs underline`}>
                          {pub.linkLabel}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                {(section.conferenceProceedings || section.bookChapters) && (
                  <div className="mt-1 space-y-1">
                    {section.conferenceProceedings && (
                      <p className="text-gray-700 font-medium text-sm">
                        <strong>Conference proceedings:</strong> {section.conferenceProceedings}
                      </p>
                    )}
                    {section.bookChapters && (
                      <p className="text-gray-700 font-medium text-sm">
                        <strong>Book chapters:</strong> {section.bookChapters}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Research Papers Section */}
        <div className="w-full mb-8 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-4">
            Research Papers
          </h2>

          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search papers by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
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
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-md'
                      : `text-gray-700 hover:bg-gray-200 ${selectedCategory !== category ? 'bg-gray-200' : ''}`
                  }`}
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
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-200"
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
                              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
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
                className={`px-3 py-1 rounded bg-gray-200 ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
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
                      ? 'bg-red-600 text-white'
                      : `text-red-600 border border-red-600 hover:bg-red-50 ${pageNum !== currentPage ? 'bg-gray-200' : ''}`
                  }`}
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
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
                } bg-gray-200`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Publications;
