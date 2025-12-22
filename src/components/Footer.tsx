import React from 'react';

// Updated footer with social media icons and hover effects - USD correction
const Footer: React.FC = () => {

  return (
    <footer 
      className="text-white border-t border-gray-200" 
      style={{ 
        backgroundColor: '#C53030',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        boxShadow: '0 -3px 15px rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Social Media Icons - Left Side */}
        <div className="flex items-center space-x-8">
          {/* University/Institution Icon */}
          <a 
            href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit USD Computer Science Department"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 21h20"/>
              <path d="M3 21V8l9-4 9 4v13"/>
              <path d="M7 21v-8h2v8"/>
              <path d="M10 21v-8h4v8"/>
              <path d="M15 21v-8h2v8"/>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/company/kc-ai/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Visit our LinkedIn page"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* Email Icon */}
          <a 
            href="mailto:usd.airesearch.lab@gmail.com"
            title="Send us an email"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 6 10-6"/>
            </svg>
          </a>
        </div>

        {/* Copyright - Right Side */}
        <div className="text-white text-base font-light">
          © 2015 USD AI Research. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
