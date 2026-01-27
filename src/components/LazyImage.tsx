import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  placeholder,
  onLoad 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isInView && (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded">
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        </div>
      )}
      
      {isInView && (
        <>
          {placeholder && !isLoaded && (
            <img
              src={placeholder}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover filter blur-sm ${className}`}
            />
          )}
          
          {error ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Failed to load image</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${className}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
