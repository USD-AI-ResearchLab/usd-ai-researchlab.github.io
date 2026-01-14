// USD AI Research Lab - Main Application Component
// Last updated: 2026-01-14
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import People from "./Pages/People";
import Publications from "./Pages/Publications";
import Initiatives from "./Pages/Initiatives";
import Contact from "./Pages/Contact";
import Affiliates from "./Pages/Affiliates";
import Opportunities from "./Pages/Opportunities";
import AISymposium2025 from "./Pages/AISymposium2025";
import SponsorCardDemo from "./Pages/SponsorCardDemo";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />
      <main className="w-full bg-white">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
