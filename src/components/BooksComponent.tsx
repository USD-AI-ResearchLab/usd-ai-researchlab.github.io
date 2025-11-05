import React, { useRef, useEffect, useState } from 'react';

// Realistic book cover component
const RealisticBookCover: React.FC<{ book: any; index: number }> = ({ book, index }) => {
  const colors = [
    { bg: '#1E40AF', accent: '#3B82F6' }, // Blue
    { bg: '#DC2626', accent: '#EF4444' }, // Red  
    { bg: '#059669', accent: '#10B981' }, // Green
    { bg: '#7C3AED', accent: '#8B5CF6' }, // Purple
    { bg: '#EA580C', accent: '#F97316' }, // Orange
    { bg: '#0891B2', accent: '#06B6D4' }, // Cyan
    { bg: '#65A30D', accent: '#84CC16' }, // Lime
    { bg: '#DB2777', accent: '#EC4899' }, // Pink
  ];
  
  const colorScheme = colors[index % colors.length];
  
  return (
    <div className="w-[150px] h-[200px] relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200" 
         style={{ background: `linear-gradient(135deg, ${colorScheme.bg} 0%, ${colorScheme.accent} 100%)` }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '20px 20px'
             }} />
      </div>
      
      {/* Publisher Logo Area */}
      <div className="absolute top-3 right-3 bg-white bg-opacity-20 rounded px-2 py-1">
        <span className="text-white text-xs font-bold">
          {book.href.includes('springer') ? 'Springer' : 
           book.href.includes('elsevier') ? 'Elsevier' : 
           book.href.includes('taylorfrancis') ? 'T&F' : 'Academic'}
        </span>
      </div>
      
      {/* Title Area */}
      <div className="absolute top-8 left-3 right-3">
        <h3 className="text-white text-xs font-bold leading-tight mb-2 line-clamp-3">
          {book.title}
        </h3>
        <p className="text-white text-[10px] opacity-80 leading-tight line-clamp-2">
          {book.subtitle}
        </p>
      </div>
      
      {/* Center Design Element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">AI</span>
          </div>
        </div>
      </div>
      
      {/* Author Area */}
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-xs font-semibold">
          {book.author}
        </p>
      </div>
      
      {/* Spine Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-black bg-opacity-30"></div>
    </div>
  );
};

const BooksComponent: React.FC = () => {
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
    },
    { 
      href: "https://link.springer.com/book/9789819974412", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-99-7441-2.jpg",
      title: "Pattern Recognition Advanced Topics",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-981-19-3935-8", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-19-3935-8.jpg",
      title: "Artificial Intelligence and Machine Learning in Public Healthcare",
      author: "KC Santosh, Loveleen Gaur"
    },
    { 
      href: "https://link.springer.com/book/9789811667671", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-16-6767-1.jpg",
      title: "AI and ML in Healthcare",
      author: "KC Santosh"
    },
    { 
      href: "https://www.elsevier.com/books/deep-learning-models-for-medical-imaging/santosh/978-0-12-823504-1", 
      src: "https://secure-ecsd.elsevier.com/covers/80/Tango2/xlarge/9780128235041.jpg",
      title: "Deep Learning Models for Medical Imaging",
      author: "KC Santosh, Nibaran Das, Sivanendu Ghosh"
    },
    { 
      href: "https://link.springer.com/book/10.1007%2F978-981-13-2339-3", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-13-2339-3.jpg",
      title: "Document Image Analysis",
      author: "KC Santosh"
    },
    { 
      href: "https://www.springer.com/gp/book/9789811596810", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-15-9681-0.jpg",
      title: "COVID-19: Prediction, Decision-Making, and its Impacts",
      author: "KC Santosh, Amit Joshi"
    },
    { 
      href: "https://www.springer.com/gp/book/9789811565717", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-15-6571-7.jpg",
      title: "COVID-19: Technologies and Applications",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://www.taylorfrancis.com/books/e/9780429029417", 
      src: "https://images.tandf.co.uk/common/jackets/amazon/978042902/9780429029417.jpg",
      title: "Medical Imaging: Artificial Intelligence, Image Recognition",
      author: "KC Santosh"
    },
    { 
      href: "https://www.taylorfrancis.com/books/document-processing-using-machine-learning-sk-md-obaidullah-kc-santosh-teresa-gon%C3%A7alves-nibaran-das-kaushik-roy/e/10.1201/9780429277573", 
      src: "https://images.tandf.co.uk/common/jackets/amazon/978042927/9780429277573.jpg",
      title: "Document Processing Using Machine Learning",
      author: "SK Md Obaidullah, KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-3-031-27762-7", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-3-031-27762-7.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-3-031-27609-5", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-3-031-27609-5.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-3-031-23599-3", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-3-031-23599-3.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Vol. 3",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://ieeexplore.ieee.org/xpl/conhome/9866947/proceeding", 
      src: "https://ieeexplore.ieee.org/ielx7/9866947/9866948/9866949.jpg",
      title: "IEEE CBMS 2022 Proceedings",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-3-031-07005-1", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-3-031-07005-1.jpg",
      title: "Computer Vision and Image Processing",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://ieeexplore.ieee.org/xpl/conhome/9169740/proceeding", 
      src: "https://ieeexplore.ieee.org/ielx7/9169740/9169741/9169742.jpg",
      title: "IEEE CBMS 2020 Proceedings",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-981-16-0507-9#volumes", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-16-0507-9.jpg",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 1",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-981-16-0508-6", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-16-0508-6.jpg",
      title: "Recent Trends in Image Processing & Pattern Recognition 2020 Vol. 2",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://rd.springer.com/book/10.1007/978-981-13-9181-1", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-13-9181-1.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part I",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://rd.springer.com/book/10.1007/978-981-13-9184-2", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-13-9184-2.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part II",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://rd.springer.com/book/10.1007/978-981-13-9187-3", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-13-9187-3.jpg",
      title: "Recent Trends in Image Processing and Pattern Recognition Part III",
      author: "KC Santosh, et al."
    },
    { 
      href: "https://link.springer.com/book/10.1007/978-981-10-4859-3", 
      src: "https://media.springernature.com/w306/springer-static/cover/book/978-981-10-4859-3.jpg",
      title: "Applied Intelligence and Informatics",
      author: "KC Santosh, et al."
    },
  ];

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
                      onError={(e) => {
                        // Try Google Books API as fallback for real book covers
                        const target = e.target as HTMLImageElement;
                        const isbn = book.href.match(/978[-\d]+/)?.[0];
                        if (isbn && !target.src.includes('books.google.com')) {
                          target.src = `https://books.google.com/books/content/images/frontcover/${isbn}?fife=w240-h360`;
                          return;
                        }
                        
                        // Final fallback to styled cover
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-cover')) {
                          const fallback = document.createElement('div');
                          fallback.className = 'fallback-cover absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col justify-between p-3 text-white';
                          fallback.innerHTML = `
                            <div class="text-xs font-bold leading-tight">${book.title.substring(0, 50)}${book.title.length > 50 ? '...' : ''}</div>
                            <div class="text-center">
                              <div class="w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span class="text-sm font-bold">AI</span>
                              </div>
                            </div>
                            <div class="text-xs text-center">${book.author}</div>
                          `;
                          parent.appendChild(fallback);
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
