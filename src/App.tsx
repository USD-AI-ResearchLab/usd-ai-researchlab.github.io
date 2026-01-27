// USD AI Research Lab - Main Application Component
// Last updated: 2026-01-27
import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./Pages/Home"));
const People = lazy(() => import("./Pages/People"));
const Publications = lazy(() => import("./Pages/Publications"));
const Initiatives = lazy(() => import("./Pages/Initiatives"));
const Contact = lazy(() => import("./Pages/Contact"));
const Affiliates = lazy(() => import("./Pages/Affiliates"));
const Opportunities = lazy(() => import("./Pages/Opportunities"));
const AISymposium2025 = lazy(() => import("./Pages/AISymposium2025"));
const SponsorCardDemo = lazy(() => import("./Pages/SponsorCardDemo"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <NavBar />
      <main className="w-full min-h-screen main-with-bg">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/events/ai-symposium/2025" element={<AISymposium2025 />} />
            <Route path="/sponsor-cards-demo" element={<SponsorCardDemo />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
