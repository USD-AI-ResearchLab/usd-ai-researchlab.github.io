import React, { useRef, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { PUBLICATIONS, BOOKS } from '../data/publications';

const Publications: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Simple arrow components
  const ChevronLeft = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Books data with cover images - using placeholder for now
  const bookListing = BOOKS.map((book, index) => ({
    href: book.publisherUrl || "#",
    title: book.title,
    authors: book.authors,
    publisher: book.publisher,
    year: book.year,
    // Generate placeholder color based on index
    color: `hsl(${(index * 40) % 360}, 60%, 70%)`
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      
      let newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;

      // Loop back to start/end if we reach the edges
      if (newScroll > maxScroll) newScroll = 0;
      if (newScroll < 0) newScroll = maxScroll;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (autoScrollEnabled) {
      intervalId = setInterval(() => {
        scroll('right');
      }, 5000); // Auto-scroll every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScrollEnabled]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setAutoScrollEnabled(false);
  const handleMouseLeave = () => setAutoScrollEnabled(true);
  return (
    <div className="pt-20 min-h-screen bg-white">
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
          Publications
        </h1>
        <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
        <p className="text-gray-600 mb-12 font-thin text-lg">Research papers, books, and publications from the USD AI Research Lab</p>
        
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
          
          <div className="bg-white border rounded-lg border-gray-200 p-5">
            <div 
              className="relative" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                <ChevronLeft />
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-4 px-8 py-0 scroll-smooth hide-scrollbar"
              >
                {bookListing.map((book, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 transition-transform hover:scale-105 h-[280px] flex items-center"
                  >
                    <a 
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div 
                        className="w-[150px] h-[200px] relative border border-gray-200 rounded-lg shadow-md flex flex-col justify-between p-3"
                        style={{ backgroundColor: book.color }}
                      >
                        <div>
                          <h3 className="text-xs font-thin text-gray-800 leading-tight mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                            {book.title}
                          </h3>
                          <p className="text-xs text-gray-600 font-thin mb-1">
                            {book.authors}
                          </p>
                          {book.publisher && (
                            <p className="text-xs text-gray-600 font-thin">
                              {book.publisher}
                            </p>
                          )}
                        </div>
                        {book.year && (
                          <p className="text-xs text-gray-700 font-thin mt-auto">
                            {book.year}
                          </p>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                style={{ color: 'var(--logo-red, #C53030)' }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
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
