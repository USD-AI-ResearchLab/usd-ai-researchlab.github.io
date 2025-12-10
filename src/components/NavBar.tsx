import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState<boolean>(false);
  const [isConferencesOpen, setIsConferencesOpen] = useState<boolean>(false);
  const initiativesDropdownRef = useRef<HTMLDivElement>(null);
  const initiativesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (initiativesDropdownRef.current && !initiativesDropdownRef.current.contains(event.target as Node)) {
        setIsInitiativesDropdownOpen(false);
        setIsConferencesOpen(false); // Also close conferences when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (initiativesTimeoutRef.current) {
        clearTimeout(initiativesTimeoutRef.current);
      }
    };
  }, []);

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
          
          {/* LOGO - LEFT SIDE */}
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
          
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Home
            </div>
          </Link>

          {/* People Link */}
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              People
            </div>
          </Link>

          <Link to="/publications" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Publications
            </div>
          </Link>

          {/* Initiatives Link */}
          <Link to="/initiatives" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Initiatives
            </div>
          </Link>

          {/* Initiatives Dropdown (Hidden but keeping for reference) */}
          <div 
            ref={initiativesDropdownRef} 
            style={{ position: 'relative', display: 'none' }}
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
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
              >
                Initiatives (Dropdown)
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
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                    (e.target as HTMLElement).style.color = '#C53030';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    AI Symposium
                  </div>
                </Link>
                <a href="https://usdinvolved.usd.edu/organization/ai-club" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#374151',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                    (e.target as HTMLElement).style.color = '#C53030';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = '#374151';
                  }}
                  >
                    AI Club
                  </div>
                </a>
                
                {/* Conferences Section */}
                <div 
                  style={{
                    position: 'relative'
                  }}
                  onMouseEnter={() => setIsConferencesOpen(true)}
                  onMouseLeave={() => setIsConferencesOpen(false)}
                >
                  <div
                    style={{
                      padding: '12px 16px',
                      fontSize: '15px',
                      fontWeight: 400,
                      color: isConferencesOpen ? '#C53030' : '#374151',
                      backgroundColor: isConferencesOpen ? 'rgba(197, 48, 48, 0.08)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    Conferences
                  </div>
                  
                  {/* Conference Items - Side Dropdown - Show on hover */}
                  {isConferencesOpen && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 'calc(100% - 4px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '8px',
                        padding: '8px 0',
                        minWidth: '180px',
                        zIndex: 1001,
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
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                          (e.target as HTMLElement).style.color = '#C53030';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = '#374151';
                        }}
                        >
                          CAI
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
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                          (e.target as HTMLElement).style.color = '#C53030';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = '#374151';
                        }}
                        >
                          RTIP2R
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link to="/opportunities" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
            onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              Opportunities
            </div>
          </Link>

          <Link to="/affiliates" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 300,
              color: '#374151',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.color = '#C53030'}
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
        
        {/* Logo in mobile menu */}
        <Link to="/" onClick={toggleMenu} className="mb-2">
          <img 
            src={bgimage} 
            alt="AI Lab Logo" 
            className="w-16 h-16 object-contain cursor-pointer" 
          />
        </Link>
        
        <Link to="/about" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Home</div>
        </Link>
        
        <Link to="/people" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">People</div>
        </Link>
        
        <Link to="/initiatives" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Initiatives</div>
        </Link>
        
        <Link to="/publications" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Publications</div>
        </Link>
        
        {/* Old Initiatives Dropdown (Hidden but kept for reference) */}
        <div style={{ display: 'none' }}>
          <div onClick={toggleMenu}>
            <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors cursor-pointer">Initiatives (Old Dropdown)</div>
          </div>
          <div className="ml-4 mt-1 space-y-1">
            <Link to="/events/ai-symposium/2025" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-logo-red transition-colors">AI Symposium</div>
            </Link>
            <a href="https://usdinvolved.usd.edu/organization/ai-club" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-logo-red transition-colors">AI Club</div>
            </a>
            
            {/* Conferences in Mobile */}
            <div className="mt-3 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Conferences</div>
            <a href="https://www.ieeesmc.org/cai-2026/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-logo-red transition-colors">CAI</div>
            </a>
            <a href="https://rtip2r-conference.org/2025/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
              <div className="text-sm font-thin text-gray-600 hover:text-logo-red transition-colors">RTIP2R</div>
            </a>
          </div>
        </div>
        
        <Link to="/opportunities" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Opportunities</div>
        </Link>
        
        <Link to="/affiliates" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Affiliates</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
