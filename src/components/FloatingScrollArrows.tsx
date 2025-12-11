import React from 'react';

const FloatingScrollArrows: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    backgroundColor: '#C53030', // Your website's brand red color
    color: 'white',
    border: 'none',
    borderRadius: '4px', // Slightly rounded corners
    width: '36px', // Smaller size
    height: '36px', // Smaller size
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
    zIndex: 999999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    userSelect: 'none',
    opacity: 0.2, // Initially semi-transparent
  };

  return (
    <>
      {/* Scroll to Top Button */}
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
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#C53030'; // Back to brand red
          e.currentTarget.style.opacity = '0.2'; // Back to semi-transparent
        }}
        title="Scroll to top"
        type="button"
      >
        {/* Clean arrow up icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18,15 12,9 6,15"></polyline>
        </svg>
      </button>

      {/* Scroll to Bottom Button */}
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
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#C53030'; // Back to brand red
          e.currentTarget.style.opacity = '0.2'; // Back to semi-transparent
        }}
        title="Scroll to bottom"
        type="button"
      >
        {/* Clean arrow down icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>
    </>
  );
};

export default FloatingScrollArrows;
