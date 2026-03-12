// USD AI Research Lab - Main Application Component
// Last updated: 2026-01-27
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useDeviceOptimization, { getAnimationPreferences } from "./hooks/useDeviceOptimization";
import usePerformanceMonitoring from "./hooks/usePerformanceMonitoring";
import './styles/custom.css';

// Lazy load pages for better performance
const Home = lazy(() => import("./Pages/Home"));
const People = lazy(() => import("./Pages/People"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogPost = lazy(() => import("./Pages/BlogPost"));
const BlogWriteGuide = lazy(() => import("./Pages/BlogWriteGuide"));
const Publications = lazy(() => import("./Pages/Publications"));
const Initiatives = lazy(() => import("./Pages/Initiatives"));
const Contact = lazy(() => import("./Pages/Contact"));
const Affiliates = lazy(() => import("./Pages/Affiliates"));
const Opportunities = lazy(() => import("./Pages/Opportunities"));
const AISymposium2025 = lazy(() => import("./Pages/AISymposium2025"));
const BlogLogin = lazy(() => import("./Pages/BlogLogin"));
const BlogDashboard = lazy(() => import("./Pages/BlogDashboard"));
const BlogEditor = lazy(() => import("./Pages/BlogEditor"));
const PublicationsDashboard = lazy(() => import("./Pages/PublicationsDashboard"));
const PublicationsEditor = lazy(() => import("./Pages/PublicationsEditor"));

// Device-optimized loading component
const LoadingSpinner: React.FC = () => {
  const deviceInfo = useDeviceOptimization();
  const animationPrefs = getAnimationPreferences(deviceInfo);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {animationPrefs.enableAnimations ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
        ) : (
          <div className="w-12 h-12 bg-red-600 rounded-full mx-auto mb-4"></div>
        )}
        <p className="text-gray-600">
          {deviceInfo.connectionSpeed === 'slow' ? 'Loading...' : 'Loading page...'}
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const deviceInfo = useDeviceOptimization();
  const animationPrefs = getAnimationPreferences(deviceInfo);
  
  // Monitor performance across devices
  usePerformanceMonitoring();

  useEffect(() => {
    // Optimized scroll behavior based on device
    const scrollBehavior = animationPrefs.enableAnimations ? 'smooth' : 'auto';
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  }, [location.pathname, animationPrefs.enableAnimations]);

  useEffect(() => {
    // Device-specific performance optimizations
    if (deviceInfo.isSlowDevice || deviceInfo.connectionSpeed === 'slow') {
      // Disable expensive CSS features on slow devices
      document.documentElement.style.setProperty('--disable-backdrop-blur', 'none');
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.6s');
    }
    
    // Add device class to body for CSS optimizations
    document.body.className = `
      ${deviceInfo.isMobile ? 'mobile-device' : ''} 
      ${deviceInfo.isTablet ? 'tablet-device' : ''} 
      ${deviceInfo.isDesktop ? 'desktop-device' : ''} 
      ${deviceInfo.isSlowDevice ? 'slow-device' : 'fast-device'}
      ${deviceInfo.connectionSpeed === 'slow' ? 'slow-connection' : ''}
    `.trim();
  }, [deviceInfo]);

  // Preload critical resources for faster navigation
  useEffect(() => {
    if (!deviceInfo.isSlowDevice && deviceInfo.connectionSpeed !== 'slow') {
      // Preload critical images
      const criticalImages = [
        '/src/assets/logo.svg',
        '/images/building-bg.jpeg',
        '/faculty/kc-santosh.jpg'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [deviceInfo.isSlowDevice, deviceInfo.connectionSpeed]);

  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full min-h-screen main-with-bg">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/write" element={<BlogWriteGuide />} />
            <Route path="/login" element={<BlogLogin />} />
            <Route path="/blog/login" element={<BlogLogin />} />
            <Route path="/blog/dashboard" element={<BlogDashboard />} />
            <Route path="/blog/editor" element={<BlogEditor />} />
            <Route path="/blog/editor/:id" element={<BlogEditor />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/dashboard" element={<PublicationsDashboard />} />
            <Route path="/publications/editor" element={<PublicationsEditor />} />
            <Route path="/publications/editor/:id" element={<PublicationsEditor />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/events/ai-symposium/2025" element={<AISymposium2025 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
