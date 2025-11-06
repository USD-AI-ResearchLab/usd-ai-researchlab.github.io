import React, { useState, useEffect } from 'react';

interface StatsComponentProps {
  stats: {
    number: number;
    label: string;
    icon: string;
  }[];
}

const StatsComponent: React.FC<StatsComponentProps> = ({ stats }) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    stats.forEach((stat, index) => {
      const increment = stat.number / 100; // Animate over 100 steps
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
      }, 30); // Update every 30ms for smooth animation
      
      intervals.push(interval);
    });

    // Cleanup intervals on unmount
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [stats]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-red-600 mb-1">
            {counts[index].toLocaleString()}+
          </div>
          <div className="text-gray-600 font-medium text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsComponent;
