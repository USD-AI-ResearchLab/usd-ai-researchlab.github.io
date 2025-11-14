import React, { useState, useEffect, useRef } from 'react';

interface StatsComponentProps {
  stats?: {
    number: number;
    label: string;
    icon: string;
  }[];
}

const StatsComponent: React.FC<StatsComponentProps> = ({ stats }) => {
  const [counts, setCounts] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // Default stats matching the source website exactly
  const defaultStats = [
    { number: 500, label: "Annual Attendees", icon: "users" },
    { number: 35, label: "Expert Speakers", icon: "microphone" },
    { number: 7, label: "Years of Excellence", icon: "calendar" },
    { number: 12, label: "Partner Organizations", icon: "handshake" }
  ];

  const actualStats = stats || defaultStats;

  // Function to render appropriate SVG icon
  const renderIcon = (iconType: string) => {
    const iconProps = {
      className: "h-8 w-8 mx-auto",
      style: { color: '#C53030' },
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      strokeWidth: 2
    };

    switch (iconType) {
      case 'users':
        return (
          <svg {...iconProps}>
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'microphone':
        return (
          <svg {...iconProps}>
            <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg {...iconProps}>
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'handshake':
        return (
          <svg {...iconProps}>
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      default:
        return <div className="h-8 w-8 mx-auto bg-gray-300 rounded"></div>;
    }
  };

  useEffect(() => {
    setCounts(actualStats.map(() => 0));
  }, [actualStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(statsRef.current!);
        }
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const intervals: NodeJS.Timeout[] = [];
    
    actualStats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds total animation
      const steps = 60; // 60 steps for smooth animation
      const increment = stat.number / steps;
      const stepTime = duration / steps;
      let currentCount = 0;
      
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          currentCount = stat.number;
          clearInterval(interval);
        }
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, stepTime);
      
      intervals.push(interval);
    });

    // Cleanup intervals on unmount
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible, actualStats]);

  return (
    <div ref={statsRef} className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Known for Excellence
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {actualStats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ background: 'linear-gradient(to bottom right, #f8f3f3, #f1e8e8)' }}
          >
            <div className="mb-3">{renderIcon(stat.icon)}</div>
            <div className="text-4xl font-bold mb-2" style={{ color: '#C53030' }}>
              {counts[index]?.toLocaleString() || 0}
              {stat.label === "Years of Excellence" ? "" : "+"}
            </div>
            <div className="text-gray-700 font-medium text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
