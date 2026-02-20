'use client'
import { useRef, useEffect, useState } from 'react';
import '../styles/custom.css';

const BooksRowDisplay = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  const bookListing = [
    { href: "https://usd-ai-researchlab.github.io/#/publications", src: "/images/books/book3.png" },
    { href: "https://link.springer.com/book/10.1007/978-981-97-2720-9", src: "/images/books/book-crackML.png" },
    { href: "https://link.springer.com/book/9789819974412", src: "/images/books/book5.png" },
    { href: "https://link.springer.com/book/10.1007/978-981-19-3935-8", src: "/images/books/book2.png" },
    { href: "https://link.springer.com/book/9789811667671", src: "/images/books/book-ai-ml-healthcare.png" },
    { href: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1", src: "/images/books/book-dl-medical-imaging2.png" },
    { href: "https://link.springer.com/book/10.1007%2F978-981-13-2339-3", src: "/images/books/book-coverS2017.png" },
    { href: "https://www.springer.com/gp/book/9789811596810", src: "/images/books/book-covid1.png" },
    { href: "https://www.springer.com/gp/book/9789811565717", src: "/images/books/book-covid2.jpg" },
    { href: "https://www.taylorfrancis.com/books/e/9780429029417", src: "/images/books/book-MedImag.jpg" },
    { href: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573", src: "/images/books/book-doc.jpg" },
    { href: "https://link.springer.com/book/10.1007/978-3-031-27762-7", src: "/images/books/book6.png" },
    { href: "https://link.springer.com/book/10.1007/978-3-031-27609-5", src: "/images/books/book7.png" },
    { href: "https://link.springer.com/book/10.1007/978-3-031-23599-3", src: "/images/books/book8.png" },
    { href: "https://ieeexplore.ieee.org/xpl/conhome/9866947/proceeding", src: "/images/books/book1.png" },
    { href: "https://link.springer.com/book/10.1007/978-3-031-07005-1", src: "/images/books/book8.png" },
    { href: "https://ieeexplore.ieee.org/xpl/conhome/9169740/proceeding", src: "/images/books/cbms2020-proceedings.png" },
    { href: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes", src: "/images/books/rtip2r-2020-1.png" },
    { href: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes", src: "/images/books/rtip2r-2020-2.png" },
    { href: "https://rd.springer.com/book/10.1007/978-981-13-9181-1", src: "/images/books/part1.png" },
    { href: "https://rd.springer.com/book/10.1007/978-981-13-9184-2", src: "/images/books/part2.png" },
    { href: "https://rd.springer.com/book/10.1007/978-981-13-9187-3", src: "/images/books/part3.png" },
    { href: "https://link.springer.com/book/10.1007/978-981-10-4859-3", src: "/images/books/book8.png" },
  ];

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
    <div className="my-8">
      <div 
        className="relative" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-red-600 transition-colors"
          aria-label="Scroll books left"
          title="Scroll books left"
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
                  <div className="w-[120px] sm:w-[150px] h-[160px] sm:h-[200px] relative overflow-hidden rounded-lg shadow-lg bg-white">
                    <img
                      src={book.src}
                      alt="Book cover"
                      className="w-full h-full object-contain p-1"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">Image not available</div>';
                        }
                      }}
                    />
                  </div>
                </a>
              </div>
            ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-red-600 transition-colors"
          aria-label="Scroll books right"
          title="Scroll books right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BooksRowDisplay;
