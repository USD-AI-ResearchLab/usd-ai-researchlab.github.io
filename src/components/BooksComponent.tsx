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

  // ABSOLUTE MAXIMUM RESOLUTION - ANTI-BLUR STRATEGY
  const bookListing = [
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-19-7334-5.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-19-7334-5/1.pdf",
      title: "AI, Ethical Issues and Explainability—Applied Biometrics",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-97-2720-9.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-97-2720-9/1.pdf",
      title: "Crack ML",
      author: "KC Santosh, Casey Wall"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-99-7441-2.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-99-7441-2/1.pdf",
      title: "Pattern Recognition Advanced Topics",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-19-3935-8.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-19-3935-8/1.pdf",
      title: "Artificial Intelligence and Machine Learning in Public Healthcare",
      author: "KC Santosh, Loveleen Gaur"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-16-6767-1.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-16-6767-1/1.pdf",
      title: "AI and ML in Healthcare",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://images.elsevier.com/cover/books/9780128235041.jpg",
      fallback: "https://secure-ecsd.elsevier.com/covers/80/Tango2/large/9780128235041.jpg",
      title: "Deep Learning Models for Medical Imaging",
      author: "KC Santosh, Nibaran Das, Sivanendu Ghosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-13-2339-3.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-13-2339-3/1.pdf",
      title: "Document Image Analysis",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-15-9681-0.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-15-9681-0/1.pdf",
      title: "COVID-19: Prediction, Decision-Making, and its Impacts",
      author: "KC Santosh, Amit Joshi"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-15-6571-7.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-15-6571-7/1.pdf",
      title: "COVID-19: Technologies and Applications",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://www.taylorfrancis.com/books/9780429029417/cover/9780429029417.jpg",
      fallback: "https://images.tandf.co.uk/common/jackets/amazon/978042902/9780429029417.jpg",
      title: "Medical Imaging: Artificial Intelligence, Image Recognition",
      author: "KC Santosh"
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://www.taylorfrancis.com/books/9780429277573/cover/9780429277573.jpg",
      fallback: "https://images.tandf.co.uk/common/jackets/amazon/978042927/9780429277573.jpg",
      title: "Document Processing Using Machine Learning",
      author: "SK Md Obaidullah, KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-3-031-27762-7.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-3-031-27762-7/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-3-031-27609-5.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-3-031-27609-5/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-3-031-23599-3.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-3-031-23599-3/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 3",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-3-031-07005-1.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-3-031-07005-1/1.pdf",
      title: "Computer Vision and Image Processing",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-16-0507-9.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-16-0507-9/1.pdf",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-16-0508-6.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-16-0508-6/1.pdf",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-13-9181-1.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-13-9181-1/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Part I",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-13-9184-2.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-13-9184-2/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Part II",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-13-9187-3.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-13-9187-3/1.pdf",
      title: "Recent Trends in Image Processing and Pattern Recognition Part III",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-10-4859-3.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-10-4859-3/1.pdf",
      title: "Applied Intelligence and Informatics",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-15-1134-2.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-15-1134-2/1.pdf",
      title: "Medical Image Processing: Advanced Fuzzy Set Theoretic Techniques",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.ai-research-lab.org/", 
      src: "https://media.springernature.com/original/springer-static/cover/book/978-981-13-1595-4.jpg",
      fallback: "https://link.springer.com/content/pdf/bfm:978-981-13-1595-4/1.pdf",
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
                      style={{ 
                        imageRendering: 'pixelated',
                        transform: 'scale3d(1.01, 1.01, 1)',
                        filter: 'contrast(1.1) saturate(0.9) brightness(0.95) blur(0px)',
                        WebkitFilter: 'contrast(1.1) saturate(0.9) brightness(0.95) blur(0px)',
                        minWidth: '160px',
                        minHeight: '220px'
                      }}
                      onError={(e) => {
                        // ULTIMATE ANTI-BLUR FALLBACK SYSTEM
                        const target = e.target as HTMLImageElement;
                        
                        // Try absolute original resolution first
                        if (!target.src.includes('original-tried') && book.src.includes('original')) {
                          target.src = book.src.replace('original', 'lw1200') + '?original-tried=1';
                          return;
                        }
                        
                        // Try dedicated fallback URL
                        if (!target.src.includes('fallback-tried') && book.fallback) {
                          target.src = book.fallback + '?fallback-tried=1';
                          return;
                        }
                        
                        // Amazon book covers (often highest quality)
                        const isbn = book.src.match(/978[-\d-]+/)?.[0];
                        if (isbn && !target.src.includes('amazon')) {
                          target.src = `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.L.jpg?amazon=1`;
                          return;
                        }
                        
                        // WorldCat library covers
                        if (isbn && !target.src.includes('worldcat')) {
                          target.src = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?worldcat=1`;
                          return;
                        }
                        
                        // Ultra high-res Google Books with aggressive settings
                        if (isbn && !target.src.includes('books.google.com')) {
                          target.src = `https://books.google.com/books/publisher/content?id=${isbn}&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73&source=gbs_api&ultra=1`;
                          return;
                        }
                        
                        // Last resort: Create ultra-sharp styled cover
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-cover')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-cover absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 flex flex-col justify-between p-3 text-white';
                          fallback.style.imageRendering = 'crisp-edges';
                          fallback.style.filter = 'contrast(1.5) saturate(1.3)';
                          fallback.style.fontSize = '11px';
                          fallback.innerHTML = `
                            <div class="font-bold leading-tight text-center" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.9); font-size: 10px;">${book.title.substring(0, 40)}${book.title.length > 40 ? '...' : ''}</div>
                            <div class="text-center flex-grow flex items-center justify-center">
                              <div class="w-20 h-20 bg-white bg-opacity-40 rounded-full flex items-center justify-center" style="backdrop-filter: blur(8px); border: 2px solid rgba(255,255,255,0.6)">
                                <span class="text-3xl">📚</span>
                              </div>
                            </div>
                            <div class="text-center font-semibold opacity-95" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.9); font-size: 9px;">${book.author}</div>
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
        
        /* ULTIMATE ANTI-BLUR MAXIMUM SHARPNESS CSS */
        .book-cover {
          aspect-ratio: 8/11;
          width: 160px !important;
          height: 220px !important;
          min-width: 160px !important;
          min-height: 220px !important;
          max-width: 160px !important;
          max-height: 220px !important;
          object-fit: cover;
          object-position: center;
          /* ABSOLUTE ANTI-BLUR TECHNIQUES */
          image-rendering: -moz-crisp-edges !important;
          image-rendering: -webkit-crisp-edges !important;
          image-rendering: pixelated !important;
          image-rendering: crisp-edges !important;
          image-rendering: optimizeSpeed !important;
          -ms-interpolation-mode: nearest-neighbor !important;
          /* EXTREME SHARPENING */
          -webkit-transform: scale3d(1.02, 1.02, 1) !important;
          transform: scale3d(1.02, 1.02, 1) !important;
          -webkit-transform-origin: center center !important;
          transform-origin: center center !important;
          /* ULTIMATE HARDWARE ACCELERATION */
          -webkit-backface-visibility: hidden !important;
          backface-visibility: hidden !important;
          -webkit-perspective: 1000px !important;
          perspective: 1000px !important;
          -webkit-transform-style: preserve-3d !important;
          transform-style: preserve-3d !important;
          /* MAXIMUM CONTRAST ENHANCEMENT - REDUCED BRIGHTNESS */
          filter: contrast(1.2) saturate(0.95) brightness(0.9) blur(0px) sepia(0%) hue-rotate(0deg) !important;
          -webkit-filter: contrast(1.2) saturate(0.95) brightness(0.9) blur(0px) !important;
          /* FORCE CRISP RENDERING */
          will-change: transform, filter !important;
          contain: layout style paint !important;
          isolation: isolate !important;
          /* ELIMINATE ANTI-ALIASING */
          -webkit-font-smoothing: never !important;
          -moz-osx-font-smoothing: unset !important;
          font-smooth: never !important;
          /* FORCE GPU ACCELERATION */
          -webkit-transform: translateZ(0) scale3d(1.01, 1.01, 1) !important;
          transform: translateZ(0) scale3d(1.01, 1.01, 1) !important;
          /* ULTRA HIGH DPI FORCING */
          image-resolution: 600dpi !important;
          print-color-adjust: exact !important;
          /* PIXEL PERFECT EDGES */
          -webkit-text-stroke: 0px transparent !important;
          text-stroke: 0px transparent !important;
          /* FORCE NEAREST NEIGHBOR SCALING */
          image-orientation: from-image !important;
        }
        
        /* FORCE CONTAINER SIZING */
        .book-card {
          width: 160px !important;
          min-width: 160px !important;
          max-width: 160px !important;
          flex-shrink: 0 !important;
        }
        
        /* ULTRA HIGH DPI DISPLAYS - NATURAL COLORS */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .book-cover {
            image-rendering: -webkit-optimize-contrast !important;
            image-rendering: optimize-contrast !important;
            filter: contrast(1.15) saturate(0.9) brightness(0.85) blur(0px) !important;
            -webkit-transform: scale3d(1.025, 1.025, 1) !important;
            transform: scale3d(1.025, 1.025, 1) !important;
          }
        }
        
        /* 4K+ DISPLAYS - CRISP BUT NATURAL */
        @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
          .book-cover {
            image-rendering: pixelated !important;
            filter: contrast(1.25) saturate(0.85) brightness(0.8) blur(0px) !important;
            -webkit-transform: scale3d(1.03, 1.03, 1) !important;
            transform: scale3d(1.03, 1.03, 1) !important;
          }
        }
        
        /* FORCE CONTAINER ANTI-BLUR */
        .books-carousel {
          image-rendering: -moz-crisp-edges !important;
          image-rendering: -webkit-crisp-edges !important;
          image-rendering: pixelated !important;
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
