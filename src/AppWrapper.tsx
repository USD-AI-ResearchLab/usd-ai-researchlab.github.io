import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export function AppWithErrorHandling() {
  try {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('App rendering error:', error);
    return (
      <div className="loading-container">
        <div className="loading-content">
          <h1>USD AI Research Lab</h1>
          <p>Loading website... Please refresh if this message persists.</p>
        </div>
      </div>
    );
  }
}
