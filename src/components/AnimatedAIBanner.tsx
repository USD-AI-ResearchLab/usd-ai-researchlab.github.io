import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedAIBanner: React.FC = () => {
  return (
    <Link
      to="/initiatives"
      className="block hover:scale-105 transition-transform duration-300 mb-8"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" className="w-full h-auto rounded-lg shadow-lg">
        <defs>
          <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7f1d1d">
              <animate
                attributeName="stop-color"
                values="#7f1d1d;#991b1b;#7f1d1d"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#b91c1c">
              <animate
                attributeName="stop-color"
                values="#b91c1c;#C53030;#b91c1c"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Radial pulse gradient */}
          <radialGradient
            id="pulse-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#fecaca" stopOpacity="0.8">
              <animate
                attributeName="stop-opacity"
                values="0.8;0.3;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#b91c1c" stopOpacity="0" />
          </radialGradient>

          {/* Enhanced node connection pattern */}
          <pattern
            id="nodePattern"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {/* Animated nodes with more visual interest */}
            <circle cx="50" cy="50" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="80" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                begin="0.2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                begin="0.3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="250" cy="40" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                begin="0.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                begin="0.6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="80" cy="170" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                begin="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                begin="0.9s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="200" cy="190" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                begin="0.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="270" cy="140" r="4" fill="#C53030">
              <animate
                attributeName="r"
                values="4;8;4"
                dur="2s"
                begin="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill"
                values="#C53030;#fef2f2;#C53030"
                dur="3s"
                begin="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Animated connection lines */}
            <line
              x1="50"
              y1="50"
              x2="150"
              y2="80"
              stroke="#C53030"
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="150"
              y1="80"
              x2="250"
              y2="40"
              stroke="#C53030"
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin="0.2s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="80"
              y1="170"
              x2="150"
              y2="80"
              stroke="#C53030"
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin="0.4s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="200"
              y1="190"
              x2="150"
              y2="80"
              stroke="#C53030"
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin="0.6s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="270"
              y1="140"
              x2="250"
              y2="40"
              stroke="#C53030"
              strokeWidth="1"
              strokeOpacity="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                begin="0.8s"
                repeatCount="indefinite"
              />
            </line>
          </pattern>

          {/* Text glow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Main background */}
        <rect width="1200" height="300" fill="url(#bg-gradient)">
          <animate
            attributeName="opacity"
            values="1;0.9;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Pulsing radial gradient overlay */}
        <circle cx="600" cy="150" r="600" fill="url(#pulse-gradient)">
          <animate
            attributeName="r"
            values="400;600;400"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Neural network pattern overlay */}
        <rect
          width="1200"
          height="300"
          fill="url(#nodePattern)"
          opacity="0.7"
        />

        {/* Enhanced glowing accent elements */}
        <circle cx="950" cy="80" r="60" fill="#C53030" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="60;70;60"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="220" r="80" fill="#C53030" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="1.5s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="80;90;80"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Main text with enhanced effects */}
        <text
          x="600"
          y="120"
          fontFamily="Ubuntu, sans-serif"
          fontWeight="bold"
          fontSize="50"
          textAnchor="middle"
          fill="#ffffff"
          filter="url(#glow)"
        >
          <animate
            attributeName="y"
            values="123;120;123"
            dur="2s"
            repeatCount="indefinite"
          />
          Artificial Intelligence Symposium
        </text>

        <text
          x="600"
          y="200"
          fontFamily="Ubuntu, sans-serif"
          fontWeight="bold"
          fontSize="70"
          textAnchor="middle"
          fill="#ffffff"
          filter="url(#glow)"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.7;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="203;200;203"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
          2025
        </text>

        <text
          x="600"
          y="250"
          fontFamily="Ubuntu, sans-serif"
          fontWeight="bold"
          fontSize="25"
          textAnchor="middle"
          fill="#ffffff"
          filter="url(#glow)"
        >
          <animate
            attributeName="fill-opacity"
            values="1;0.7;1"
            dur="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="245;250;255"
            dur="2s"
            begin="0.3s"
            repeatCount="indefinite"
          />
          Click to Download Your Certificate of Participation
        </text>

        {/* Enhanced decorative circuit lines with particle effects */}
        <path
          d="M100,50 L300,50 L350,100 L700,100"
          stroke="#C53030"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-opacity"
            values="1;0.5;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M1100,50 L900,50 L850,100 L700,100"
          stroke="#C53030"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-opacity"
            values="1;0.5;1"
            dur="1.5s"
            begin=".25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            begin="0.25s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M100,250 L300,250 L350,200 L700,200"
          stroke="#C53030"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-opacity"
            values="1;0.5;1"
            dur="1.5s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M1100,250 L900,250 L850,200 L700,200"
          stroke="#C53030"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-opacity"
            values="1;0.5;1"
            dur="1.5s"
            begin="0.75s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            values="2;3;2"
            dur="2s"
            begin="0.75s"
            repeatCount="indefinite"
          />
        </path>

        {/* Particle effects */}
        <circle cx="700" cy="100" r="2" fill="#fecaca">
          <animate
            attributeName="cx"
            values="700;350;700"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0.5;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="700" cy="200" r="2" fill="#fecaca">
          <animate
            attributeName="cx"
            values="700;350;700"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0.5;1"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Link>
  );
};

export default AnimatedAIBanner;
