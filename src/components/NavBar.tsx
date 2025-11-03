import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* MAIN NAVBAR - Layout: Navigation Left, Logo Right */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 50
      }}>
        
        {/* NAVIGATION MENU - LEFT SIDE */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#dc2626'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              About
            </div>
          </Link>

          <Link to="/publications" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#dc2626'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Publications
            </div>
          </Link>

          <Link to="/initiatives" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#dc2626'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Initiatives
            </div>
          </Link>

          <Link to="/affiliates" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#dc2626'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Affiliates
            </div>
          </Link>
        </div>

        {/* LOGO - RIGHT SIDE */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            src={bgimage} 
            alt="AI Lab Logo" 
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              cursor: 'pointer'
            }}
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={toggleMenu} 
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#374151',
            cursor: 'pointer'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-20 left-0 w-64 min-h-screen bg-white/95 backdrop-blur-xl flex flex-col items-start justify-start gap-6 pt-8 pl-6 pr-4 pb-8 sm:hidden transition-all duration-300 ease-in-out shadow-xl overflow-y-auto z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        {/* Logo in mobile menu */}
        <Link to="/" onClick={toggleMenu} className="mb-4">
          <img 
            src={bgimage} 
            alt="AI Lab Logo" 
            className="w-16 h-16 object-contain cursor-pointer" 
          />
        </Link>
        
        <Link to="/about" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">About</div>
        </Link>
        
        <Link to="/publications" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">Publications</div>
        </Link>
        
        <Link to="/initiatives" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">Initiatives</div>
        </Link>
        
        <Link to="/affiliates" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">Affiliates</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
