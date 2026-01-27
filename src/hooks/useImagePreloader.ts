import { useEffect } from 'react';

// Preload critical images
const useImagePreloader = (imageSrcs: string[]) => {
  useEffect(() => {
    const preloadImages = (srcs: string[]) => {
      srcs.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages(imageSrcs);
  }, [imageSrcs]);
};

export default useImagePreloader;
