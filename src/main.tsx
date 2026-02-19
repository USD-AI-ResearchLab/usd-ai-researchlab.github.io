import { createRoot } from 'react-dom/client'
import './App.css'
import { AppWithErrorHandling } from './AppWrapper'

// Error handling for better cross-browser compatibility
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

console.log('Main.tsx loaded');
const root = document.getElementById('root');
console.log('Root element:', root);

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(<AppWithErrorHandling />);

console.log('App rendered');