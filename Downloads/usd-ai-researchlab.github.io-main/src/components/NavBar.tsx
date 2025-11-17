import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState<boolean>(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState<boolean>(false);
  const [isConferencesOpen, setIsConferencesOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initiativesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initiativesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
      if (initiativesDropdownRef.current && !initiativesDropdownRef.current.contains(event.target as Node)) {
        setIsInitiativesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (initiativesTimeoutRef.current) {
        clearTimeout(initiativesTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsPeopleDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsPeopleDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleInitiativesMouseEnter = () => {
    if (initiativesTimeoutRef.current) {
      clearTimeout(initiativesTimeoutRef.current);
    }
    setIsInitiativesDropdownOpen(true);
  };

  const handleInitiativesMouseLeave = () => {
    initiativesTimeoutRef.current = setTimeout(() => {
      setIsInitiativesDropdownOpen(false);
    }, 200);
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
        }} className="flex">
          
          {/* LOGO - LEFT SIDE (Hidden on home page) */}
          {!isHomePage && (
            <Link to="/" className="no-underline">
              <img 
                src={bgimage} 
                alt="AI Lab Logo" 
                className="w-[60px] h-[60px] object-contain cursor-pointer"
              />
            </Link>
          )}
          
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ textDecoration: 'none' }}>
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
            </div>
            
            {/* Dropdown Menu */}
            {isPeopleDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '8px',
                  padding: '8px 0',
                  minWidth: '200px',
                  zIndex: 1000,
                  marginTop: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/faculty" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
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
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
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
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
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

          {/* Initiatives Dropdown */}
          <div 
            ref={initiativesDropdownRef} 
            style={{ position: 'relative' }}
            onMouseEnter={handleInitiativesMouseEnter}
            onMouseLeave={handleInitiativesMouseLeave}
          >
            <div style={{ textDecoration: 'none' }}>
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
                Initiatives
              </div>
            </div>
            
            {/* Dropdown Menu */}
            {isInitiativesDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '8px',
                  padding: '8px 0',
                  minWidth: '200px',
                  zIndex: 1000,
                  marginTop: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={handleInitiativesMouseEnter}
                onMouseLeave={handleInitiativesMouseLeave}
              >
                <Link to="/events/ai-symposium/2025" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
                    (e.target as HTMLElement).style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    AI Symposium
                  </div>
                </Link>
                <Link to="/ai-club" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
                    (e.target as HTMLElement).style.color = '#dc2626';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    AI Club
                  </div>
                </Link>
                
                {/* Conferences Section */}
                <div 
                  style={{
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: isConferencesOpen ? '#dc2626' : '#374151',
                    backgroundColor: isConferencesOpen ? 'rgba(220, 38, 38, 0.08)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsConferencesOpen(!isConferencesOpen);
                  }}
                  onMouseOver={(e) => {
                    if (!isConferencesOpen) {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
                      (e.target as HTMLElement).style.color = '#dc2626';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isConferencesOpen) {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      (e.target as HTMLElement).style.color = '#374151';
                    }
                  }}
                >
                  Conferences
                  
                  {/* Conference Items - Side Dropdown - Only show on click */}
                  {isConferencesOpen && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '8px',
                        padding: '8px 0',
                        minWidth: '180px',
                        zIndex: 1001,
                        marginLeft: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href="https://www.ieeesmc.org/cai-2026/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div style={{
                          padding: '12px 16px',
                          fontSize: '15px',
                          fontWeight: 400,
                          color: '#374151',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
                          (e.target as HTMLElement).style.color = '#dc2626';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = '#374151';
                        }}
                        >
                          CAI 2026
                        </div>
                      </a>
                      
                      <a href="https://rtip2r-conference.org/2025/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <div style={{
                          padding: '12px 16px',
                          fontSize: '15px',
                          fontWeight: 400,
                          color: '#374151',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(220, 38, 38, 0.08)';
                          (e.target as HTMLElement).style.color = '#dc2626';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = '#374151';
                        }}
                        >
                          RTIP2R 2025
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

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

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={toggleMenu} 
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            color: '#374151',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px'
          }}
          className="block sm:hidden"
        >
          {isOpen ? (
            // X icon when menu is open
            <div style={{
              width: '24px',
              height: '24px',
              position: 'relative',
              transform: 'rotate(45deg)'
            }}>
              <div style={{
                position: 'absolute',
                width: '24px',
                height: '2px',
                backgroundColor: '#374151',
                top: '11px'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '24px',
                height: '2px',
                backgroundColor: '#374151',
                top: '11px',
                transform: 'rotate(90deg)'
              }}></div>
            </div>
          ) : (
            // Hamburger menu when closed
            <>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#374151'
              }}></div>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#374151'
              }}></div>
              <div style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#374151'
              }}></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-20 left-0 w-64 min-h-screen bg-white/95 backdrop-blur-xl flex flex-col items-start justify-start gap-6 pt-8 pl-6 pr-4 pb-8 sm:hidden transition-all duration-300 ease-in-out shadow-xl overflow-y-auto z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        
        {/* Logo in mobile menu - Hidden on home page - Positioned before About */}
        {!isHomePage && (
          <Link to="/" onClick={toggleMenu} className="mb-2">
            <img 
              src={bgimage} 
              alt="AI Lab Logo" 
              className="w-16 h-16 object-contain cursor-pointer" 
            />
          </Link>
        )}
        
        <Link to="/about" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-red-700 transition-colors">About</div>
        </Link>
        
        {/* Mobile People Menu */}
        <div>
          <div onClick={toggleMenu}>
            <div className="text-lg font-thin text-gray-700 hover-red transition-colors cursor-pointer">People</div>
          </div>
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/faculty" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">Faculty</div>
            </Link>
            <Link to="/phd-students" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">PhD Students</div>
            </Link>
            <Link to="/masters-students" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">Masters Students</div>
            </Link>
          </div>
        </div>
        
        <Link to="/publications" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover-red transition-colors">Publications</div>
        </Link>
        
        {/* Mobile Initiatives Menu */}
        <div>
          <div onClick={toggleMenu}>
            <div className="text-lg font-thin text-gray-700 hover-red transition-colors cursor-pointer">Initiatives</div>
          </div>
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/events/ai-symposium/2025" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">AI Symposium</div>
            </Link>
            <Link to="/ai-club" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">AI Club</div>
            </Link>
            
            {/* Conferences in Mobile */}
            <div className="mt-3 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Conferences</div>
            <a href="https://www.ieeesmc.org/cai-2026/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">CAI 2026</div>
            </a>
            <a href="https://rtip2r-conference.org/2025/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover-red transition-colors">RTIP2R 2025</div>
            </a>
          </div>
        </div>
        
        <Link to="/affiliates" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover-red transition-colors">Affiliates</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
