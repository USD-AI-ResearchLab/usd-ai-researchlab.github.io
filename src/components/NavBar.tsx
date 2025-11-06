import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Check if current page is home page
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPeopleDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        }} className="flex">
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

          {/* People Dropdown */}
          <div 
            ref={dropdownRef} 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsPeopleDropdownOpen(true)}
            onMouseLeave={() => setIsPeopleDropdownOpen(false)}
          >
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s',
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#dc2626'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              People
            </div>
            
            {/* Dropdown Menu */}
            {isPeopleDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                borderRadius: '6px',
                padding: '4px 0',
                minWidth: '180px',
                zIndex: 1000,
                marginTop: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <Link to="/faculty" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                    (e.target as HTMLElement).style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    Faculty
                  </div>
                </Link>
                <Link to="/phd-students" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                    (e.target as HTMLElement).style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    PhD Students
                  </div>
                </Link>
                <Link to="/masters-students" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '6px 12px',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.1)';
                    (e.target as HTMLElement).style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    Masters Students
                  </div>
                </Link>
              </div>
            )}
          </div>

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

        {/* LOGO - RIGHT SIDE (Hidden on home page) */}
        {!isHomePage && (
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src={bgimage} 
              alt="AI Lab Logo" 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                cursor: 'pointer'
              }}
            />
          </Link>
        )}

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={toggleMenu} 
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#374151',
            cursor: 'pointer'
          }}
          className="block sm:hidden"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-20 left-0 w-64 min-h-screen bg-white/95 backdrop-blur-xl flex flex-col items-start justify-start gap-6 pt-8 pl-6 pr-4 pb-8 sm:hidden transition-all duration-300 ease-in-out shadow-xl overflow-y-auto z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        {/* Logo in mobile menu - Hidden on home page */}
        {!isHomePage && (
          <Link to="/" onClick={toggleMenu} className="mb-4">
            <img 
              src={bgimage} 
              alt="AI Lab Logo" 
              className="w-16 h-16 object-contain cursor-pointer" 
            />
          </Link>
        )}
        
        <Link to="/about" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">About</div>
        </Link>
        
        {/* Mobile People Menu */}
        <div>
          <Link to="/people" onClick={toggleMenu}>
            <div className="text-lg font-thin text-gray-700 hover:text-red-600 transition-colors">People</div>
          </Link>
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/faculty" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-red-600 transition-colors">Faculty</div>
            </Link>
            <Link to="/phd-students" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-red-600 transition-colors">PhD Students</div>
            </Link>
            <Link to="/masters-students" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-red-600 transition-colors">Masters Students</div>
            </Link>
          </div>
        </div>
        
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
