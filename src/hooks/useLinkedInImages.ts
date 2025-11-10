import { useState, useEffect } from 'react';
import { linkedInImageProxy } from '../utils/linkedInImageProxy';

interface UseLinkedInImagesReturn {
  images: Record<string, string>;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useLinkedInImages = (): UseLinkedInImagesReturn => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      console.log('🔄 Fetching LinkedIn images...');
      setLoading(true);
      setError(null);
      
      // Clear old cache to force refresh
      localStorage.removeItem('linkedinImages');
      localStorage.removeItem('linkedinImagesTimestamp');
      
      const imageUrls = await linkedInImageProxy.getTeamMemberImages();
      console.log('✅ Got image URLs:', imageUrls);
      setImages(imageUrls);
      
      // Store in localStorage for caching
      localStorage.setItem('linkedinImages', JSON.stringify(imageUrls));
      localStorage.setItem('linkedinImagesTimestamp', Date.now().toString());
      
    } catch (err) {
      console.error('❌ Error fetching images:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchImages();
  };

  useEffect(() => {
    // Check if we have cached images (less than 1 hour old)
    const cachedImages = localStorage.getItem('linkedinImages');
    const timestamp = localStorage.getItem('linkedinImagesTimestamp');
    
    if (cachedImages && timestamp) {
      const age = Date.now() - parseInt(timestamp);
      const oneHour = 60 * 60 * 1000;
      
      if (age < oneHour) {
        // Use cached images
        setImages(JSON.parse(cachedImages));
        setLoading(false);
        return;
      }
    }
    
    // Fetch fresh images
    fetchImages();
  }, []);

  return { images, loading, error, refetch };
};

// Helper function to get image URL for a team member
export const getTeamMemberImageUrl = (
  memberKey: string, 
  linkedInImages: Record<string, string>, 
  fallbackPath?: string
): string | undefined => {
  // First try LinkedIn mirrored image
  if (linkedInImages[memberKey]) {
    return linkedInImages[memberKey];
  }
  
  // Then try local image file
  if (fallbackPath) {
    return fallbackPath;
  }
  
  // No image available
  return undefined;
};
