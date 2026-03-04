import React, { useState, useEffect } from 'react';

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
    // Scroll up by one viewport height instead of all the way to top
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollAmount = window.innerHeight * 0.8; // 80% of viewport height
    const newPosition = Math.max(0, currentScroll - scrollAmount);
    
    try {
      window.scrollTo({ 
        top: newPosition, 
        behavior: 'smooth' 
      });
    } catch {
      document.body.scrollTop = newPosition;
      document.documentElement.scrollTop = newPosition;
    }
  };

  const scrollToBottom = () => {
    // Scroll down by one viewport height instead of all the way to bottom
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const scrollAmount = window.innerHeight * 0.8; // 80% of viewport height
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const newPosition = Math.min(maxScroll, currentScroll + scrollAmount);
    
    try {
      window.scrollTo({
        top: newPosition,
        behavior: 'smooth'
      });
    } catch {
      document.body.scrollTop = newPosition;
      document.documentElement.scrollTop = newPosition;
    }
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    backgroundColor: '#C53030', // Your website's brand red color
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px', // More rounded corners
    width: '44px', // Slightly bigger size
    height: '44px', // Slightly bigger size
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    zIndex: 999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    userSelect: 'none',
    opacity: 0.8, // Much more visible
  };

  // Don't render buttons if page isn't scrollable
  if (!showButtons) {
    return null;
  }

  return (
    <>
      {/* Scroll Up Button */}
      <button
        onClick={scrollToTop}
        style={{
          ...buttonStyle,
          right: '20px',
          bottom: '80px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#B91C1C'; // Slightly darker brand red on hover
          e.currentTarget.style.opacity = '1'; // Fully visible on hover
          e.currentTarget.style.transform = 'scale(1.05)'; // Slight scale effect
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#C53030'; // Back to brand red
          e.currentTarget.style.opacity = '0.8'; // Back to more visible state
          e.currentTarget.style.transform = 'scale(1)'; // Back to normal size
        }}
        title="Scroll up"
        type="button"
      >
        {/* Clean arrow up icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15"></polyline>
        </svg>
      </button>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToBottom}
        style={{
          ...buttonStyle,
          right: '20px',
          bottom: '35px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#B91C1C'; // Slightly darker brand red on hover
          e.currentTarget.style.opacity = '1'; // Fully visible on hover
          e.currentTarget.style.transform = 'scale(1.05)'; // Slight scale effect
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#C53030'; // Back to brand red
          e.currentTarget.style.opacity = '0.8'; // Back to more visible state
          e.currentTarget.style.transform = 'scale(1)'; // Back to normal size
        }}
        title="Scroll down"
        type="button"
      >
        {/* Clean arrow down icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>
    </>
  );
};

export default FloatingScrollArrows;
