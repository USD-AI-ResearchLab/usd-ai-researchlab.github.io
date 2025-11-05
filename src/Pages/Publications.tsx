import React from 'react';
import Footer from '../components/Footer';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';

const Publications: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div 
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        {/* Header Section */}
        <div className="text-left mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030) !important' }}>
            Publications
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        </div>

        {/* Content Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Start like this - Research papers, books, and publications from the USD AI Research Lab
          </p>
        </div>
        
        {/* Research Papers Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Research Papers
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {PUBLICATIONS.map((publication, index) => (
              <div key={index} className="bg-white p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-thin text-gray-800 mb-2 leading-tight">
                  {publication.title}
                </h3>
                {publication.authors && (
                  <p className="text-sm text-gray-500 mb-2 font-thin">
                    Authors: {publication.authors}
                  </p>
                )}
                {publication.venue && publication.year && (
                  <p className="text-sm text-gray-500 mb-4 font-thin">
                    Venue: {publication.venue} ({publication.year})
                  </p>
                )}
                <p className="text-gray-600 mb-6 leading-relaxed font-thin">
                  {publication.description}
                </p>
                <div className="flex gap-4">
                  {publication.paperUrl && (
                    <a
                      href={publication.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-thin"
                      style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
                    >
                      Preview Paper
                    </a>
                  )}
                  {publication.codeUrl && publication.codeUrl !== "#" && (
                    <a
                      href={publication.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-thin"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-8" style={{ color: 'var(--logo-red, #C53030)' }}>
            Books
          </h2>
          
          <BooksComponent />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            For more publications, visit our research portal at{' '}
            <a 
              href="https://www.ai-research-lab.org/publication" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ai-research-lab.org/publication
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
