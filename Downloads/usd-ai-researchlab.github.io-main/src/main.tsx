import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import React from 'react';

// Force cache refresh for GitHub Pages
console.log('App Version: 3.0.1-FORCE-REFRESH - ' + new Date().toISOString());

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
)