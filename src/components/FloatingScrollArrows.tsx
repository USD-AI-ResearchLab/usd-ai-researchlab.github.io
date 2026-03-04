import { useState, useEffect } from 'react';
import './FloatingScrollArrows.css';

const FloatingScrollArrows: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);

  // Check if page is scrollable
  useEffect(() => {
    const checkScrollable = () => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
      setShowButtons(isScrollable);
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    // Also check after content loads
    setTimeout(checkScrollable, 1000);

    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const scrollToTop = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollAmount = window.innerHeight * 0.8;
    const newPosition = Math.max(0, currentScroll - scrollAmount);

    try {
      window.scrollTo({ top: newPosition, behavior: 'smooth' });
    } catch {
      document.body.scrollTop = newPosition;
      document.documentElement.scrollTop = newPosition;
    }
  };

  const scrollToBottom = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollAmount = window.innerHeight * 0.8;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newPosition = Math.min(maxScroll, currentScroll + scrollAmount);

    try {
      window.scrollTo({ top: newPosition, behavior: 'smooth' });
    } catch {
      document.body.scrollTop = newPosition;
      document.documentElement.scrollTop = newPosition;
    }
  };

  if (!showButtons) {
    return null;
  }

  return (
    <>
      <button
        className="floating-scroll-btn floating-scroll-btn--up"
        onClick={scrollToTop}
        title="Scroll up"
        type="button"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15"></polyline>
        </svg>
      </button>

      <button
        className="floating-scroll-btn floating-scroll-btn--down"
        onClick={scrollToBottom}
        title="Scroll down"
        type="button"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>
    </>
  );
};

export default FloatingScrollArrows;
