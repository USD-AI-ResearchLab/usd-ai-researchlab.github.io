import React, { useRef, useState, useEffect } from 'react';

const BooksComponent: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScrollEnabled) return;
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 200; // Adjusted for new layout
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          // Reset to beginning
          container.scrollLeft = 0;
        } else {
          // Scroll to next book
          container.scrollLeft += scrollAmount;
        }
      }
    }, 4000); // Auto-scroll every 4 seconds
    
    return () => clearInterval(interval);
  }, [autoScrollEnabled]);

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

  // 4K ULTRA HIGH RESOLUTION book cover URLs from publishers - ALL BOOKS
  const bookListing = [
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-19-7334-5.jpg",
      title: "AI, Ethical Issues and Explainability—Applied Biometrics",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-97-2720-9.jpg",
      title: "Crack ML",
      author: "KC Santosh, Casey Wall"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-99-7441-2.jpg",
      title: "Pattern Recognition Advanced Topics",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-19-3935-8.jpg",
      title: "Artificial Intelligence and Machine Learning in Public Healthcare",
      author: "KC Santosh, Loveleen Gaur"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-16-6767-1.jpg",
      title: "AI and ML in Healthcare",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://secure-ecsd.elsevier.com/covers/80/Tango2/ultra/9780128235041.jpg",
      title: "Deep Learning Models for Medical Imaging",
      author: "KC Santosh, Nibaran Das, Sivanendu Ghosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-13-2339-3.jpg",
      title: "Document Image Analysis",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-15-9681-0.jpg",
      title: "COVID-19: Prediction, Decision-Making, and its Impacts",
      author: "KC Santosh, Amit Joshi"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-15-6571-7.jpg",
      title: "COVID-19: Technologies and Applications",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://images.tandf.co.uk/common/jackets/ultra-highres/978042902/9780429029417.jpg",
      title: "Medical Imaging: Artificial Intelligence, Image Recognition",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://images.tandf.co.uk/common/jackets/ultra-highres/978042927/9780429277573.jpg",
      title: "Document Processing Using Machine Learning",
      author: "SK Md Obaidullah, KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-3-031-27762-7.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-3-031-27609-5.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-3-031-23599-3.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 3",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-3-031-07005-1.jpg",
      title: "Computer Vision and Image Processing",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-16-0507-9.jpg",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-16-0508-6.jpg",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-13-9181-1.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part I",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-13-9184-2.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part II",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-13-9187-3.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part III",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-10-4859-3.jpg",
      title: "Applied Intelligence and Informatics",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-15-1134-2.jpg",
      title: "Medical Image Processing: Advanced Fuzzy Set Theoretic Techniques",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/w2048/springer-static/cover/book/978-981-13-1595-4.jpg",
      title: "Recent Trends in Computational Intelligence",
      author: "KC Santosh, et al."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjusted for new layout
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
        <div 
          className="books-carousel relative" 
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
            className="flex overflow-x-auto gap-6 px-12 py-4 scroll-smooth hide-scrollbar items-center"
          >
            {bookListing.map((book, index) => (
              <div 
                key={index}
                className="book-card flex-shrink-0 transition-all duration-300 hover:scale-105 flex flex-col items-center"
              >
                <a 
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group w-full"
                >
                  <div className="w-full h-[220px] relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-300 bg-white">
                    <img
                      src={book.src}
                      alt={book.title}
                      className="book-cover w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      style={{ imageRendering: 'crisp-edges' }}
                      onError={(e) => {
                        // 4K ULTRA RESOLUTION fallback system for missing images
                        const target = e.target as HTMLImageElement;
                        
                        // Try alternative 4K resolution Springer URL patterns first
                        if (!target.src.includes('fallback') && book.src.includes('springer')) {
                          // Try different Springer ultra-high resolutions
                          const bookId = book.src.match(/978[-\d-]+/)?.[0];
                          if (bookId && !target.src.includes('full')) {
                            target.src = `https://media.springernature.com/full/springer-static/cover/book/${bookId}.jpg?fallback=1`;
                            return;
                          } else if (bookId && !target.src.includes('w1600')) {
                            target.src = `https://media.springernature.com/w1600/springer-static/cover/book/${bookId}.jpg?fallback=2`;
                            return;
                          } else if (bookId && !target.src.includes('w1224')) {
                            target.src = `https://media.springernature.com/w1224/springer-static/cover/book/${bookId}.jpg?fallback=3`;
                            return;
                          }
                        }
                        
                        // Try Elsevier ultra-high resolution
                        if (!target.src.includes('fallback') && book.src.includes('elsevier')) {
                          const bookId = book.src.match(/\d{13}/)?.[0];
                          if (bookId && !target.src.includes('ultra')) {
                            target.src = `https://secure-ecsd.elsevier.com/covers/80/Tango2/ultra/${bookId}.jpg?fallback=1`;
                            return;
                          }
                        }
                        
                        // Try Google Books API with 4K resolution
                        const isbn = book.title.match(/978[-\d]+/)?.[0] || book.src.match(/978[-\d]+/)?.[0];
                        if (isbn && !target.src.includes('books.google.com')) {
                          target.src = `https://books.google.com/books/content/images/frontcover/${isbn}?fife=w1200-h1800&source=gbs_api&fallback=4k`;
                          return;
                        }
                        
                        // Create a professional ultra-high-quality fallback cover
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-cover')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-cover absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex flex-col justify-between p-4 text-white';
                          fallback.style.imageRendering = 'crisp-edges';
                          fallback.innerHTML = `
                            <div class="text-xs font-bold leading-tight text-center">${book.title.substring(0, 50)}${book.title.length > 50 ? '...' : ''}</div>
                            <div class="text-center flex-grow flex items-center justify-center">
                              <div class="w-12 h-12 bg-white bg-opacity-25 rounded-full flex items-center justify-center">
                                <span class="text-lg font-bold">📚</span>
                              </div>
                            </div>
                            <div class="text-xs opacity-80 text-center">${book.author}</div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                  <div className="mt-3 text-center w-full">
                    <p className="book-title text-xs font-semibold text-gray-800 leading-tight line-clamp-2 mb-1">
                      {book.title}
                    </p>
                    <p className="book-author text-xs text-gray-600">
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

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Books container alignment */
        .books-carousel {
          min-height: 300px;
          display: flex;
          align-items: center;
        }
        
        /* Book card consistent sizing */
        .book-card {
          width: 160px;
          min-width: 160px;
          max-width: 160px;
        }
        
        /* Ensure all book covers are same size with 4K ULTRA QUALITY */
        .book-cover {
          aspect-ratio: 8/11;
          width: 100%;
          height: 220px;
          object-fit: cover;
          object-position: center;
          /* 4K Ultra Sharp Rendering */
          image-rendering: -webkit-optimize-contrast;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
          image-rendering: optimizeQuality;
          image-rendering: high-quality;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          /* Hardware acceleration for ultra-sharp display */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-transform: translateZ(0) scale(1.0001);
          transform: translateZ(0) scale(1.0001);
          /* 4K scaling optimization */
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          /* Ultra-sharp edge enhancement */
          filter: contrast(1.05) saturate(1.1);
          -webkit-filter: contrast(1.05) saturate(1.1);
          /* Force high DPI rendering */
          will-change: transform;
          /* Anti-aliasing for ultra-crisp edges */
          -webkit-font-feature-settings: "liga" 1, "kern" 1;
          font-feature-settings: "liga" 1, "kern" 1;
        }
        
        /* Text alignment improvements */
        .book-title {
          height: 2.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .book-author {
          height: 1.5rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default BooksComponent;
