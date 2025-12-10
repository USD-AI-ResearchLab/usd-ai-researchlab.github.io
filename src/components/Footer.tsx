import React, { useState } from 'react';

// Updated footer with social media icons and hover effects - USD correction
const Footer: React.FC = () => {
  const [isEmojiHovered, setIsEmojiHovered] = useState(false);

  return (
    <footer className="bg-white text-gray-700 py-12 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          {/* University/Institution Icon */}
          <a 
            href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit USD Computer Science Department"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* Email Icon */}
          <a 
            href="mailto:usd.airesearch.lab@gmail.com"
            title="Send us an email"
            className="text-black hover:text-red-600 transition-colors duration-200"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 7 10 6 10-6"/>
            </svg>
          </a>

          {/* Hover Effect Face */}
          <div 
            className="text-black hover:text-red-600 cursor-pointer transition-all duration-200 hover:scale-110 font-mono select-none flex items-center justify-center w-12 h-8 text-xl whitespace-nowrap"
            onMouseEnter={() => setIsEmojiHovered(true)}
            onMouseLeave={() => setIsEmojiHovered(false)}
          >
            {isEmojiHovered ? '(*o*)' : '(^_^)'}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-black text-sm font-thin font-ubuntu">
            © 2015 USD AI Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
