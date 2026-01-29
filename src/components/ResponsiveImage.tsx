import React from 'react';

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
  onLoad,
}) => {
  const handleImageLoad = () => {
    onLoad?.();
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
    <div className={`relative ${className}`}>
      <img
        src={src}
        srcSet={generateSrcSet()}
        sizes={generateSizes()}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};

export default ResponsiveImage;
