import React, { useRef, useState } from 'react';

const BooksComponent: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [, setAutoScrollEnabled] = useState(true);

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

  // High-resolution book cover URLs from publishers
  const bookListing = [
    { 
      href: "https://kc-santosh.org/", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-19-7334-5.jpg",
      title: "AI, Ethical Issues and Explainability—Applied Biometrics",
      author: "KC Santosh"
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-981-97-2720-9", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-97-2720-9.jpg",
      title: "Crack ML",
      author: "KC Santosh, Casey Wall"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = () => setAutoScrollEnabled(false);
  const handleMouseLeave = () => setAutoScrollEnabled(true);

  return (
    <div className="flex gap-4 my-8">
      <div className="bg-white border rounded-lg border-gray-200 p-5 w-full">
        <h1 className="text-3xl text-red-500 my-2" style={{ fontFamily: 'Ubuntu, sans-serif', fontWeight: '600' }}>
          Books
        </h1>
        
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
                  <div className="w-[150px] h-[200px] relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
                    <img
                      src={book.src}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm font-medium text-gray-800 leading-tight" style={{ fontSize: '0.75rem' }}>
                      {book.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {book.author}
                    </p>
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
  );
};

export default BooksComponent;
