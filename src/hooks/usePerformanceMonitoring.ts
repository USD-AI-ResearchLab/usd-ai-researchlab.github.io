import { useEffect } from 'react';
import useDeviceOptimization from '../hooks/useDeviceOptimization';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  device: string;
  connection: string;
}

const usePerformanceMonitoring = () => {
  const deviceInfo = useDeviceOptimization();

  useEffect(() => {
    // Track page load performance
    const trackPerformance = () => {
      if ('performance' in window && 'PerformanceObserver' in window) {
        const metrics: Partial<PerformanceMetrics> = {
          loadTime: performance.now(),
          device: deviceInfo.isMobile ? 'mobile' : deviceInfo.isTablet ? 'tablet' : 'desktop',
          connection: deviceInfo.connectionSpeed
        };

        // Track First Contentful Paint
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime;
            }
            if (entry.name === 'largest-contentful-paint') {
              metrics.largestContentfulPaint = entry.startTime;
            }
          }
        });

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

        // Log performance in development
        if (process.env.NODE_ENV === 'development') {
          setTimeout(() => {
            console.log('Performance Metrics:', {
              ...metrics,
              navigationTiming: {
                domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
                loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart,
                firstByte: performance.timing.responseStart - performance.timing.navigationStart,
              }
            });
          }, 2000);
        }

        // Cleanup
        return () => observer.disconnect();
      }
    };

    const cleanup = trackPerformance();
    return cleanup;
  }, [deviceInfo]);
};

export default usePerformanceMonitoring;
