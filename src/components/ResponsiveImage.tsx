import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  mobileSrc?: string; // Optional smaller image for mobile
  tabletSrc?: string; // Optional medium image for tablet
  placeholder?: string;
  onLoad?: () => void;
  priority?: boolean; // For above-the-fold images
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  mobileSrc,
  tabletSrc,
  placeholder,
  onLoad,
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLDivElement>(null);

  // Determine which image source to use based on screen size
  useEffect(() => {
    const updateImageSrc = () => {
      const width = window.innerWidth;
      
      if (width < 768 && mobileSrc) {
        setCurrentSrc(mobileSrc);
      } else if (width < 1024 && tabletSrc) {
        setCurrentSrc(tabletSrc);
      } else {
        setCurrentSrc(src);
      }
    };

    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);
    
    return () => window.removeEventListener('resize', updateImageSrc);
  }, [src, mobileSrc, tabletSrc]);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Start loading a bit before the image comes into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setError(true);
  };

  // Generate srcset for different screen densities
  const generateSrcSet = () => {
    const srcset = [];
    if (mobileSrc) srcset.push(`${mobileSrc} 480w`);
    if (tabletSrc) srcset.push(`${tabletSrc} 768w`);
    srcset.push(`${src} 1200w`);
    return srcset.join(', ');
  };

  const generateSizes = () => {
    return '(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px';
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isInView && !priority && (
        <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse rounded">
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-xs sm:text-sm">Loading...</div>
          </div>
        </div>
      )}
      
      {(isInView || priority) && (
        <>
          {placeholder && !isLoaded && (
            <img
              src={placeholder}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover filter blur-sm transition-opacity duration-300 ${
                isLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}
          
          {error ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-400 text-xs sm:text-sm">Failed to load image</span>
            </div>
          ) : (
            <img
              src={currentSrc}
              srcSet={generateSrcSet()}
              sizes={generateSizes()}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          )}
        </>
      )}
    </div>
  );
};

export default ResponsiveImage;
