import React from 'react';

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
}

const LazyMap: React.FC<LazyMapProps> = ({ src, title, className = "" }) => {
  return (
    <div className={className}>
      <iframe
        src={src}
        title={title}
        className="w-full h-full rounded-2xl shadow-xl border-0 min-h-[400px]"
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default LazyMap;
