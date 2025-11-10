import React, { useState } from 'react';
import Footer from '../components/Footer';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';

const Publications: React.FC = () => {
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="w-full">
        {/* Header Section */}
        <div className="pl-4 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Publications
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-0 max-w-4xl">

        {/* Content Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Books, research papers, and publications from the USD AI Research Lab
          </p>
        </div>
        
        {/* Books Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Books
          </h2>
          
          <BooksComponent />
        </div>

        {/* Research Papers Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Research Papers
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PUBLICATIONS.map((publication, index) => {
              const isHovered = hoveredPublication === index;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
                    isHovered ? 'md:col-span-2 lg:col-span-3 transform scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredPublication(index)}
                  onMouseLeave={() => setHoveredPublication(null)}
                >
                  <div className="p-6">
                    {/* Card Header - Always Visible */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium text-gray-900 leading-tight pr-4 flex-grow">
                        {publication.title}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
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
                    <div className={`transition-all duration-500 ease-in-out ${
                      isHovered 
                        ? 'max-h-96 opacity-100 transform translate-y-0' 
                        : 'max-h-0 opacity-0 overflow-hidden transform -translate-y-2'
                    }`}>
                      {isHovered && (
                        <div className="space-y-4 border-t border-gray-100 pt-4">
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
                    </div>

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
      <Footer />
    </div>
  );
};

export default Publications;
