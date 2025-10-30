import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import bgimage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobilePeopleOpen, setIsMobilePeopleOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const toggleMobilePeople = (): void => {
    setIsMobilePeopleOpen((prev) => !prev);
  };

  const isPeopleActive = location.pathname === '/people' || 
                        location.pathname === '/faculty' || 
                        location.pathname === '/staff' || 
                        location.pathname === '/students';

  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200/50 h-20 flex items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 z-50">
        
        <ul className="hidden md:flex flex-row justify-start items-center gap-3 transition duration-300 ease-in-out text-lg">
          <Link to="/about">
            <li className={`font-thin transition-colors duration-200 relative group ${
              location.pathname === '/about' ? '' : 'text-gray-700'
            }`} style={{ color: location.pathname === '/about' ? 'var(--logo-red, #C53030)' : undefined }}>
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></span>
            </li>
          </Link>
          <li className="relative group">
            <div className={`font-thin transition-colors duration-200 ${
              isPeopleActive ? '' : 'text-gray-700'
            }`} style={{ color: isPeopleActive ? 'var(--logo-red, #C53030)' : undefined }}>
              People
            </div>
            <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
              isPeopleActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`} style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></span>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                to="/faculty"
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                style={{ '--hover-color': 'var(--logo-red, #C53030)' } as React.CSSProperties}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}
              >
                Faculty
                <svg className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/staff"
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                style={{ '--hover-color': 'var(--logo-red, #C53030)' } as React.CSSProperties}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}
              >
                PhD Students
                <svg className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/students"
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                style={{ '--hover-color': 'var(--logo-red, #C53030)' } as React.CSSProperties}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = ''}
              >
                Masters Students
                <svg className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </li>
          <Link to="/publications">
            <li className={`font-thin transition-colors duration-200 relative group ${
              location.pathname === '/publications' ? '' : 'text-gray-700'
            }`} style={{ color: location.pathname === '/publications' ? 'var(--logo-red, #C53030)' : undefined }}>
              Publications
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/publications' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></span>
            </li>
          </Link>
          <Link to="/initiatives">
            <li className={`font-thin transition-colors duration-200 relative group ${
              location.pathname === '/initiatives' ? '' : 'text-gray-700'
            }`} style={{ color: location.pathname === '/initiatives' ? 'var(--logo-red, #C53030)' : undefined }}>
              Initiatives
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/initiatives' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></span>
            </li>
          </Link>
          <Link to="/affiliates">
            <li className={`font-thin transition-colors duration-200 relative group ${
              location.pathname === '/affiliates' ? '' : 'text-gray-700'
            }`} style={{ color: location.pathname === '/affiliates' ? 'var(--logo-red, #C53030)' : undefined }}>
              Affiliates
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                location.pathname === '/affiliates' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></span>
            </li>
          </Link>
        </ul>

        <div className="flex items-center ml-auto">
          {!isHomePage && (
            <Link to="/">
              <img 
                src={bgimage} 
                alt="AI Lab Logo" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer" 
              />
            </Link>
          )}
        </div>

        <div className="md:hidden absolute right-4">
          <button onClick={toggleMenu} className="text-3xl text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`fixed top-20 left-0 w-64 min-h-screen bg-white/90 backdrop-blur-2xl flex flex-col items-start justify-start gap-6 pt-8 pl-2 pr-6 pb-8 md:hidden transition-all duration-500 ease-in-out shadow-2xl overflow-y-auto z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
          <Link to="/about" onClick={toggleMenu}><div className="text-lg font-thin" style={{ color: 'inherit' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>About</div></Link>
          <div className="w-full">
            <button 
              onClick={toggleMobilePeople}
              className="text-lg font-thin text-gray-700 flex items-center justify-between w-full text-left"
            >
              People
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  isMobilePeopleOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobilePeopleOpen && (
              <div className="ml-4 space-y-4">
                <Link to="/faculty" onClick={toggleMenu}><div className="text-base font-thin py-1" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>Faculty</div></Link>
                <Link to="/staff" onClick={toggleMenu}><div className="text-base font-thin py-1" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>PhD Students</div></Link>
                <Link to="/students" onClick={toggleMenu}><div className="text-base font-thin py-1" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>Masters Students</div></Link>
              </div>
            )}
          </div>
          <Link to="/publications" onClick={toggleMenu}><div className="text-lg font-thin" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>Publications</div></Link>
          <Link to="/initiatives" onClick={toggleMenu}><div className="text-lg font-thin" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>Initiatives</div></Link>
          <Link to="/affiliates" onClick={toggleMenu}><div className="text-lg font-thin" onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--logo-red, #C53030)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'inherit'}>Affiliates</div></Link>
        </div>
    </>
  );
};

export default NavBar;
