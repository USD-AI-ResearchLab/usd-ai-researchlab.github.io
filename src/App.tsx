import React from "react";
import { Routes, Route } from "react-router-dom";

const TestHome: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        USD AI Research Lab - Test
      </h1>
      <p className="text-center mt-4 text-lg">
        Website is working! This is a test page to verify deployment.
      </p>
      <div className="mt-8 text-center">
        <p>If you can see this, the React app is loading correctly.</p>
        <p className="mt-2">Faculty DBLP links have been updated.</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TestHome />} />
      <Route path="*" element={<TestHome />} />
    </Routes>
  );
}

export default App;