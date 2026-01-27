import React, { useState, useEffect, useRef } from 'react';
import useDeviceOptimization from '../hooks/useDeviceOptimization';

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
  const deviceInfo = useDeviceOptimization();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: deviceInfo.isMobile ? 0.05 : 0.1, // Earlier loading on mobile
        rootMargin: deviceInfo.isMobile ? '50px' : '25px' // Larger margin on mobile
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [deviceInfo.isMobile]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setError(true);
  };

  // Optimize image loading based on device
  const optimizedImageProps = {
    loading: 'lazy' as const,
    decoding: 'async' as const,
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isInView && (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded">
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">
              {deviceInfo.connectionSpeed === 'slow' ? 'Loading...' : 'Loading image...'}
            </div>
          </div>
        </div>
      )}
      
      {isInView && (
        <>
          {placeholder && !isLoaded && !deviceInfo.isSlowDevice && (
            <img
              src={placeholder}
              alt={alt}
              className={`absolute inset-0 w-full h-full object-cover filter blur-sm ${className}`}
            />
          )}
          
          {error ? (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
              <span className="text-gray-400 text-sm">Failed to load</span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-${deviceInfo.isSlowDevice ? '200' : '500'} ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              } ${className}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              {...optimizedImageProps}
            />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;
