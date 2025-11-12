import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faculty from "./Pages/PeoplePage/Faculty";
import Staff from "./Pages/PeoplePage/Staff";
import Students from "./Pages/PeoplePage/Students";
import PhDStudents from "./Pages/PeoplePage/PhDStudents_new";
import MastersStudents from "./Pages/PeoplePage/MastersStudents_new";
import Publications from "./Pages/Publications";
import Initiatives from "./Pages/Initiatives";
import AISymposium2025 from "./Pages/AISymposium2025";
import Affiliates from "./Pages/Affiliates";
import Contact from "./Pages/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/students" element={<Students />} />
          <Route path="/phd-students" element={<PhDStudents />} />
          <Route path="/masters-students" element={<MastersStudents />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/events/ai-symposium/2025" element={<AISymposium2025 />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;