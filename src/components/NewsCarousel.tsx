import React, { useState, useEffect } from 'react';

const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      id: 1,
      date: 'October 2024',
      badge: 'Latest Update',
      title: 'Research Infrastructure',
      subtitle: '(October 2024) NSF Award #2346643 for CC* Campus Compute infrastructure project totaling $0.5M.',
      description: 'Building advanced computational capabilities for research excellence.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      date: 'September 2024',
      badge: 'New Publication',
      title: 'AI Research Breakthrough',
      subtitle: 'Our team published groundbreaking research in medical image analysis using deep learning.',
      description: 'Advancing the state-of-the-art in automated medical diagnosis.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      date: 'August 2024',
      badge: 'Event',
      title: 'AI Symposium Success',
      subtitle: 'The 6th AI Symposium was held with over 200 participants from academia and industry.',
      description: 'Fostering collaboration and innovation in artificial intelligence.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      id: 4,
      date: 'July 2024',
      badge: 'Funding',
      title: 'New Grant Award',
      subtitle: 'Received $300K funding for developing AI-powered healthcare solutions.',
      description: 'Supporting innovative research in medical AI applications.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, newsItems.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentItem = newsItems[currentIndex];

  return (
    <div className="w-full py-8 px-4">
      <div 
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden backdrop-blur-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-60"></div>
        
        {/* Navigation buttons */}
        <button 
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
          aria-label="Previous news item"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all duration-300 hover:shadow-xl group z-10"
          aria-label="Next news item"
        >
          <svg className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content area with padding for navigation buttons */}
        <div className="mx-16">
          <div className="flex items-start space-x-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg">
                {currentItem.icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-2">
                {currentItem.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium">{currentItem.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium text-xs">
                  {currentItem.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed text-lg font-medium">
              {currentItem.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {currentItem.description}
            </p>
            <div className="pt-4">
              <button className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium text-sm group">
                <span>Read full announcement</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-10 space-x-3">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentIndex
                  ? 'bg-red-600 shadow-lg ring-4 ring-red-100'
                  : 'bg-gray-300 hover:bg-red-300 hover:shadow-md'
              }`}
              aria-label={`Go to news item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
