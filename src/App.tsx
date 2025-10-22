import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import People from "./Pages/People";
import Faculty from "./Pages/PeoplePage/Faculty";
import Staff from "./Pages/PeoplePage/Staff";
import Students from "./Pages/PeoplePage/Students";
import Resources from "./Pages/Resources";
import Initiatives from "./Pages/Initiatives";
import Affiliates from "./Pages/Affiliates";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <NavBar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/students" element={<Students />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/affiliates" element={<Affiliates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;