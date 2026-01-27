import { useEffect, useState } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSlowDevice: boolean;
  connectionSpeed: 'slow' | 'fast' | 'unknown';
  screenSize: 'small' | 'medium' | 'large';
}

const useDeviceOptimization = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isSlowDevice: false,
    connectionSpeed: 'unknown',
    screenSize: 'large'
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      
      // Device type detection
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Screen size categorization
      let screenSize: 'small' | 'medium' | 'large' = 'large';
      if (width < 640) screenSize = 'small';
      else if (width < 1024) screenSize = 'medium';
      
      // Device performance detection
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const deviceMemory = (navigator as { deviceMemory?: number }).deviceMemory || 4;
      const isSlowDevice = hardwareConcurrency <= 2 || deviceMemory <= 2;
      
      // Connection speed detection
      let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
      const connection = (navigator as { 
        connection?: { effectiveType: string };
        mozConnection?: { effectiveType: string };
        webkitConnection?: { effectiveType: string };
      }).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      
      if (connection) {
        const effectiveType = connection.effectiveType;
        connectionSpeed = ['slow-2g', '2g', '3g'].includes(effectiveType) ? 'slow' : 'fast';
      }
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isSlowDevice,
        connectionSpeed,
        screenSize
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  return deviceInfo;
};

// Performance optimization based on device
export const getOptimizedImageSize = (deviceInfo: DeviceInfo): { width: number; quality: number } => {
  if (deviceInfo.isMobile) {
    return deviceInfo.isSlowDevice || deviceInfo.connectionSpeed === 'slow' 
      ? { width: 300, quality: 70 }
      : { width: 400, quality: 80 };
  }
  
  if (deviceInfo.isTablet) {
    return { width: 600, quality: 85 };
  }
  
  return { width: 800, quality: 90 };
};

// Animation preferences based on device
export const getAnimationPreferences = (deviceInfo: DeviceInfo) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    enableAnimations: !prefersReducedMotion && !deviceInfo.isSlowDevice,
    enableHeavyAnimations: deviceInfo.isDesktop && !deviceInfo.isSlowDevice,
    animationDuration: deviceInfo.isSlowDevice ? 0.2 : 0.6,
    enableParallax: deviceInfo.isDesktop && !prefersReducedMotion,
  };
};

export default useDeviceOptimization;
