 import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import React from 'react';

console.log('Main.tsx loaded');
const root = document.getElementById('root');
console.log('Root element:', root);

createRoot(root!).render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
)

console.log('App rendered');