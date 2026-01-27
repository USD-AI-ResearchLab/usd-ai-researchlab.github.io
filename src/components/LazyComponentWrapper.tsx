import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
}

const LazyComponentWrapper: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback,
  threshold = 0.1 
}) => {
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const defaultFallback = (
    <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  );

  return (
    <div ref={componentRef}>
      {isInView ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

// Create lazy-loaded versions of heavy components
export const LazyNewsCarousel = lazy(() => import('./NewsCarousel'));
export const LazyBooksComponent = lazy(() => import('./BooksComponent'));
export const LazyCommitteeMembers = lazy(() => import('./CommitteeMembers'));
export const LazySpeakers = lazy(() => import('./Speakers'));

export default LazyComponentWrapper;
