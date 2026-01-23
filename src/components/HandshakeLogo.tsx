import React from 'react';

interface HandshakeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
};

const HandshakeLogo: React.FC<HandshakeLogoProps> = ({ 
  size = 'md', 
  className = '',
  animated = false
}) => {
  return (
    <div className={`${sizeMap[size]} ${className} ${animated ? 'handshake-animate' : ''}`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <defs>
          <linearGradient id="leftHandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C53030" stopOpacity={1} />
            <stop offset="100%" stopColor="#B22323" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="rightHandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E53E3E" stopOpacity={1} />
            <stop offset="100%" stopColor="#C53030" stopOpacity={1} />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
          </filter>
        </defs>

        {/* Left hand */}
        <g id="leftHand" filter="url(#shadow)">
          <path d="M 25 75 Q 35 65 55 70 L 75 95 Q 70 105 50 105 Q 30 100 25 90 Z" fill="url(#leftHandGradient)" stroke="#A01A1A" strokeWidth="0.5"/>
          <ellipse cx="28" cy="60" rx="7" ry="9" fill="url(#leftHandGradient)" transform="rotate(-30 28 60)" stroke="#A01A1A" strokeWidth="0.5"/>
          <path d="M 75 80 Q 95 75 100 85 Q 98 105 75 105 Q 70 95 75 80 Z" fill="url(#leftHandGradient)" stroke="#A01A1A" strokeWidth="0.5"/>
          <line x1="80" y1="78" x2="85" y2="65" stroke="#A01A1A" strokeWidth="1" opacity="0.4"/>
          <line x1="88" y1="76" x2="95" y2="62" stroke="#A01A1A" strokeWidth="1" opacity="0.4"/>
        </g>

        {/* Right hand */}
        <g id="rightHand" filter="url(#shadow)">
          <path d="M 175 75 Q 165 65 145 70 L 125 95 Q 130 105 150 105 Q 170 100 175 90 Z" fill="url(#rightHandGradient)" stroke="#A01A1A" strokeWidth="0.5"/>
          <ellipse cx="172" cy="60" rx="7" ry="9" fill="url(#rightHandGradient)" transform="rotate(30 172 60)" stroke="#A01A1A" strokeWidth="0.5"/>
          <path d="M 125 80 Q 105 75 100 85 Q 102 105 125 105 Q 130 95 125 80 Z" fill="url(#rightHandGradient)" stroke="#A01A1A" strokeWidth="0.5"/>
          <line x1="120" y1="78" x2="115" y2="65" stroke="#A01A1A" strokeWidth="1" opacity="0.4"/>
          <line x1="112" y1="76" x2="105" y2="62" stroke="#A01A1A" strokeWidth="1" opacity="0.4"/>
        </g>

        {/* Central grip highlights */}
        <circle cx="100" cy="90" r="12" fill="#ffffff" opacity="0.15"/>
        <circle cx="100" cy="90" r="8" fill="#ffffff" opacity="0.3"/>
        <ellipse cx="100" cy="82" rx="10" ry="6" fill="#ffffff" opacity="0.4"/>
      </svg>

      {animated && (
        <style>{`
          .handshake-animate {
            animation: handshakeWave 1.5s ease-in-out infinite;
          }
          @keyframes handshakeWave {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      )}
    </div>
  );
};

export default HandshakeLogo;
