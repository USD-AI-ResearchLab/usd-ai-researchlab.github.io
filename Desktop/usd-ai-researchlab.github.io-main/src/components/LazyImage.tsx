import React from 'react';

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
  onLoad 
}) => {
  const handleImageLoad = () => {
    onLoad?.();
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        onLoad={handleImageLoad}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};

export default LazyImage;
