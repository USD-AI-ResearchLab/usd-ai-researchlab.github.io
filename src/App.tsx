import React from "react";
import { Routes, Route } from "react-router-dom";

// Simple test components to ensure the app loads
const TestHome = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">USD AI Research Lab</h1>
      <p className="text-xl text-gray-600">Welcome to our research laboratory</p>
    </div>
  </div>
);

const TestAbout = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p className="text-xl text-gray-600">Learn more about our research</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">USD AI Lab</h1>
            </div>
          </div>
        </div>
      </nav>
      <main className="w-full">
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="/about" element={<TestAbout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;