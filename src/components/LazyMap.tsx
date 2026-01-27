import React, { useState, useEffect, useRef } from 'react';

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
}

const LazyMap: React.FC<LazyMapProps> = ({ src, title, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

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

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className={className}>
      {!isInView && (
        <div className="w-full h-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <p className="text-gray-600 font-light">Loading map...</p>
          </div>
        </div>
      )}
      {isInView && (
        <iframe
          src={src}
          title={title}
          className={`w-full h-full rounded-2xl shadow-xl border-0 min-h-[400px] transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default LazyMap;
