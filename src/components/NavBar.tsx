import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo-copy.svg";

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
      {/* MAIN NAVBAR - Layout: Navigation Centered */}
      <div className="navbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '120px',
        backgroundColor: '#C53030',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 3px 15px rgba(0, 0, 0, 0.15)',
        zIndex: 50
      }}>
        
        {/* Logo - Always Visible */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img 
            className="logo"
            src={bgimage} 
            alt="AI Lab Logo" 
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              cursor: 'pointer',
              padding: '6px',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
          />
        </Link>

        {/* NAVIGATION MENU - CENTERED */}
        <div style={{
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          flex: 1
        }} className="hidden md:flex">
          
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              Home
            </div>
          </Link>

          {/* People Link */}
          <Link to="/people" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              People
            </div>
          </Link>

          <Link to="/publications" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              Publications
            </div>
          </Link>

          {/* Initiatives Link */}
          <Link to="/initiatives" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
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
                fontSize: '18px',
                fontWeight: 300,
                color: 'white',
                transition: 'color 0.2s',
                cursor: 'pointer',
                userSelect: 'none'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#f0f0f0'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = 'white'}
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
                    color: 'black',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                    (e.target as HTMLElement).style.color = '#f0f0f0';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'white';
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
                    color: 'black',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                    (e.target as HTMLElement).style.color = '#f0f0f0';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = 'white';
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
                      color: isConferencesOpen ? '#f0f0f0' : 'white',
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
                          color: 'black',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                          (e.target as HTMLElement).style.color = '#f0f0f0';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = 'white';
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
                          color: 'black',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'rgba(197, 48, 48, 0.08)';
                          (e.target as HTMLElement).style.color = '#f0f0f0';
                        }}
                        onMouseOut={(e) => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent';
                          (e.target as HTMLElement).style.color = 'white';
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
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              Opportunities
            </div>
          </Link>

          <Link to="/affiliates" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              Affiliates
            </div>
          </Link>

          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'white',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
              textShadow: '0 0 0px rgba(255, 255, 255, 0)'
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.color = '#f0f0f0';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
              (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
              (e.target as HTMLElement).style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.color = 'white';
              (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))';
              (e.target as HTMLElement).style.textShadow = '0 0 0px rgba(255, 255, 255, 0)';
              (e.target as HTMLElement).style.transform = 'scale(1)';
            }}
            >
              Contact
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button - Visible on small screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
          style={{
            fontSize: '28px',
            padding: '8px',
            transition: 'all 0.3s ease'
          }}
        >
          <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-[120px] left-0 w-64 min-h-screen bg-white/95 backdrop-blur-xl flex flex-col items-start justify-start gap-6 pt-8 pl-6 pr-4 pb-8 md:hidden transition-all duration-300 ease-in-out shadow-xl overflow-y-auto z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        
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
        
        <Link to="/contact" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Contact</div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
