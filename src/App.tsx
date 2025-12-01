import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import People from "./Pages/People";
import Faculty from "./Pages/PeoplePage/Faculty";
import PhDStudents from "./Pages/PeoplePage/PhDStudents";
import MastersStudents from "./Pages/PeoplePage/MastersStudents";
import Publications from "./Pages/Publications";
import Initiatives from "./Pages/Initiatives";
import Contact from "./Pages/Contact";
import Affiliates from "./Pages/Affiliates";
import Alumni from "./Pages/Alumni";
import Opportunities from "./Pages/Opportunities";
import AISymposium2025 from "./Pages/AISymposium2025";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/phd-students" element={<PhDStudents />} />
          <Route path="/masters-students" element={<MastersStudents />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/events/ai-symposium/2025" element={<AISymposium2025 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
