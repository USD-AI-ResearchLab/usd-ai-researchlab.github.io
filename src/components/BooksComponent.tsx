'use client'
import { useRef, useEffect, useState } from 'react';

export interface ZipBook {
  href: string;      // publisher (or official) page URL
  imageSrc: string;  // local image path under /public/images/books
}

export const ZIP_BOOKS: ZipBook[] = [
  { href: "https://kc-santosh.org/", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-19-3935-8" },
  { href: "https://link.springer.com/book/10.1007/978-981-97-2720-9", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-97-2720-9" },
  { href: "https://link.springer.com/book/9789819974412", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-99-7441-2" },
  { href: "https://link.springer.com/book/10.1007/978-981-19-3935-8", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-19-3935-8" },
  { href: "https://link.springer.com/book/9789811667671", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-16-6767-1" },
  { href: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1", imageSrc: "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128235041.jpg" },
  { href: "https://link.springer.com/book/10.1007%2F978-981-13-2339-3", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-13-2339-3" },
  { href: "https://www.springer.com/gp/book/9789811596810", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-15-9681-0" },
  { href: "https://www.springer.com/gp/book/9789811565717", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-15-6571-7" },
  { href: "https://www.taylorfrancis.com/books/e/9780429029417", imageSrc: "https://images.routledge.com/common/jackets/amazon/978041567/9780415677172.jpg" },
  { href: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573", imageSrc: "https://images.routledge.com/common/jackets/amazon/978036711/9780367113902.jpg" },
  { href: "https://link.springer.com/book/10.1007/978-3-031-27762-7", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-031-27762-7" },
  { href: "https://link.springer.com/book/10.1007/978-3-031-27609-5", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-031-27609-5" },
  { href: "https://link.springer.com/book/10.1007/978-3-031-23599-3", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-031-23599-3" },
  { href: "https://link.springer.com/book/10.1007/978-981-16-0507-9", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-16-0507-9" },
  { href: "https://link.springer.com/book/10.1007/978-3-031-07005-1", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-031-07005-1" },
  { href: "https://link.springer.com/book/10.1007/978-981-15-6648-6", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-15-6648-6" },
  { href: "https://link.springer.com/book/10.1007/978-981-15-5148-2", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-15-5148-2" },
  { href: "https://link.springer.com/book/10.1007/978-981-15-1286-5", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-15-1286-5" },
  { href: "https://link.springer.com/book/10.1007/978-981-13-9181-1", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-13-9181-1" },
  { href: "https://link.springer.com/book/10.1007/978-981-13-9184-2", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-13-9184-2" },
  { href: "https://link.springer.com/book/10.1007/978-981-13-9187-3", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-13-9187-3" },
  { href: "https://link.springer.com/book/10.1007/978-981-10-4859-3", imageSrc: "https://media.springernature.com/w306/springer-static/cover-hires/book/978-981-10-4859-3" }
];

const BooksRowDisplay: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Debug: Log the number of books
  console.log('Total books in array:', ZIP_BOOKS.length);
  console.log('Books:', ZIP_BOOKS);

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
    <div className="flex gap-4 my-8">
      <div className="bg-white border rounded-lg border-gray-200 p-5 w-full">
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronLeft />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 px-8 py-0 scroll-smooth hide-scrollbar"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none'
            }}
          >
            {ZIP_BOOKS.map((book, index) => (
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
                  <div className="w-[150px] h-[200px] relative">
                    <img 
                      src={book.imageSrc}
                      alt={`Book ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg shadow-lg bg-white"
                      style={{ 
                        objectFit: 'contain',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        console.warn(`Failed to load image for book ${index + 1}:`, book.imageSrc);
                        // Fallback to a professional placeholder if image fails to load
                        e.currentTarget.src = `data:image/svg+xml,${encodeURIComponent(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="200" viewBox="0 0 150 200">
                            <rect width="150" height="200" fill="url(#grad1)" rx="8"/>
                            <defs>
                              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#C53030;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#E53E3E;stop-opacity:1" />
                              </linearGradient>
                            </defs>
                            <rect x="10" y="15" width="130" height="2" fill="white" opacity="0.3"/>
                            <text x="75" y="45" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">AI Research</text>
                            <text x="75" y="65" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">Publication</text>
                            <text x="75" y="110" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">Book ${index + 1}</text>
                            <text x="75" y="150" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle" opacity="0.8">USD AI Lab</text>
                            <text x="75" y="165" font-family="Arial, sans-serif" font-size="8" fill="white" text-anchor="middle" opacity="0.6">Research Team</text>
                            <rect x="10" y="180" width="130" height="2" fill="white" opacity="0.3"/>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
};

export default BooksRowDisplay;
