import { createRoot } from 'react-dom/client'
import './App.css'
import './styles/custom.css'
import { AppWithErrorHandling } from './AppWrapper'

// Safari-compatible error handling
if (typeof window !== 'undefined') {
  window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
  });

  window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
  });
  
  // Handle redirect from 404.html
  const redirectUrl = sessionStorage.getItem('redirectUrl');
  if (redirectUrl) {
    sessionStorage.removeItem('redirectUrl');
    window.history.replaceState(null, '', redirectUrl);
  }
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(<AppWithErrorHandling />);