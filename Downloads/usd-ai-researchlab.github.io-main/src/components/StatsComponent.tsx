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
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      {/* Card Header */}
            <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold text-black">
          Known for Excellence
        </h2>
      </div>
      
      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <div className="text-3xl font-bold mb-1" style={{ color: '#C53030' }}>
              {counts[index].toLocaleString()}+
            </div>
            <div className="text-gray-600 font-medium text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
