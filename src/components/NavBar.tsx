import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './NavBar.css';
import logoImage from "../assets/logo_original_backup_with_outline.svg";
import mobileLogoImage from "../assets/logo_original_backup_with_outline.svg";
import { useAuth } from '../hooks/useAuth';
import { facultyData } from '../data/faculty';
import { staffData } from '../data/staff';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { currentUser, isAdmin, isReviewer, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  // Close user dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate('/');
  };

  const loginUrl = `/login?returnTo=${encodeURIComponent(location.pathname)}`;

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Look up photo from faculty/staff data by matching full display name
  const getUserPhoto = (displayName: string): string | undefined => {
    const allPeople = [...facultyData, ...staffData];
    const match = allPeople.find(
      (p) => p.name.toLowerCase() === displayName.toLowerCase() ||
             p.name.toLowerCase().includes(displayName.toLowerCase()) ||
             displayName.toLowerCase().includes(p.name.toLowerCase().split(' ').slice(-1)[0])
    );
    return match?.photo;
  };

  return (
    <>
      {/* MAIN NAVBAR - Layout: Navigation Left, Auth Right */}
      <div className="navbar">
        
        {/* Full-width container */}
        <div className="navbar-container navbar-container--global">
          
          {/* LEFT: Navigation links */}
          <div className="nav-menu hidden md:flex">
          
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <img 
                className="logo"
                src={logoImage} 
                alt="AI Lab Logo"
              />
            </Link>

            <Link to="/people" className="nav-link">
              <div className="nav-link-text">People</div>
            </Link>

            <Link to="/blog" className="nav-link">
              <div className="nav-link-text">Blog</div>
            </Link>

            <Link to="/publications" className="nav-link">
              <div className="nav-link-text">Publications</div>
            </Link>

            <Link to="/initiatives" className="nav-link">
              <div className="nav-link-text">Initiatives</div>
            </Link>

            <Link to="/opportunities" className="nav-link">
              <div className="nav-link-text">Career Opportunities</div>
            </Link>

            <Link to="/affiliates" className="nav-link">
              <div className="nav-link-text">Affiliates</div>
            </Link>

            <Link to="/contact" className="nav-link">
              <div className="nav-link-text">Contact</div>
            </Link>
          </div>

          {/* RIGHT: Auth Section — Desktop */}
          <div className="nav-auth hidden md:flex">
            {currentUser ? (
              <div className="nav-user-menu" ref={userMenuRef}>
                <button
                  className="nav-user-button"
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  title={currentUser.displayName}
                >
                  <span className="nav-user-avatar">
                    {getUserPhoto(currentUser.displayName) ? (
                      <img
                        src={getUserPhoto(currentUser.displayName)}
                        alt={currentUser.displayName}
                        className="nav-user-avatar-img"
                      />
                    ) : (
                      getInitials(currentUser.displayName)
                    )}
                  </span>
                  <span className="nav-user-name">{currentUser.displayName.split(' ')[0]}</span>
                  <i className={`bx bx-chevron-${userMenuOpen ? 'up' : 'down'} nav-user-chevron`}></i>
                </button>

                {userMenuOpen && (
                  <div className="nav-user-dropdown">
                    <div className="nav-user-dropdown-header">
                      <div className="nav-user-dropdown-name">{currentUser.displayName}</div>
                      <div className="nav-user-dropdown-email">{currentUser.email}</div>
                      <div className="nav-user-dropdown-role">
                        {isAdmin ? 'Admin' : isReviewer ? 'Reviewer' : 'Author'}
                      </div>
                    </div>
                    <div className="nav-user-dropdown-divider" />
                    <Link to="/blog/dashboard" className="nav-user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                      Blog Dashboard
                    </Link>
                    <Link to="/blog/editor" className="nav-user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                      Write Post
                    </Link>
                    <Link to="/publications/dashboard" className="nav-user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                      Research Paper Dashboard
                    </Link>
                    {isReviewer && (
                      <Link to="/publications/dashboard" className="nav-user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                        Publications
                      </Link>
                    )}
                    <div className="nav-user-dropdown-divider" />
                    <button className="nav-user-dropdown-item nav-user-dropdown-logout" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to={loginUrl} className="nav-login-link">
                <div className="nav-login-text">
                  Log In
                </div>
              </Link>
            )}
          </div>

          {/* Hamburger Menu Button - Visible on small screens */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none z-50 hamburger-button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            title={isOpen ? "Close menu" : "Open menu"}
          >
            <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
          </button>
        
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu-container ${
        isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        
        <Link to="/" onClick={toggleMenu}>
          <img 
            src={mobileLogoImage}
            alt="USD AI Research Lab"
            className="mobile-logo"
          />
        </Link>
        
        <Link to="/people" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">People</div>
        </Link>
        
        <Link to="/blog" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Blog</div>
        </Link>
        
        <Link to="/initiatives" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Initiatives</div>
        </Link>
        
        <Link to="/publications" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Publications</div>
        </Link>
        
        <Link to="/opportunities" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Career Opportunities</div>
        </Link>
        
        <Link to="/affiliates" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Affiliates</div>
        </Link>
        
        <Link to="/contact" onClick={toggleMenu}>
          <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">Contact</div>
        </Link>

        {/* Mobile Auth Section */}
        <div className="mobile-auth-divider" />
        {currentUser ? (
          <div className="mobile-auth-section">
            <div className="mobile-auth-user-info">
              <span className="mobile-auth-avatar">
                {getUserPhoto(currentUser.displayName) ? (
                  <img
                    src={getUserPhoto(currentUser.displayName)}
                    alt={currentUser.displayName}
                    className="nav-user-avatar-img"
                  />
                ) : (
                  getInitials(currentUser.displayName)
                )}
              </span>
              <div>
                <div className="mobile-auth-name">{currentUser.displayName}</div>
                <div className="mobile-auth-role">
                  {isAdmin ? 'Admin' : isReviewer ? 'Reviewer' : 'Author'}
                </div>
              </div>
            </div>
            <Link to="/blog/dashboard" onClick={toggleMenu}>
              <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">
                Blog Dashboard
              </div>
            </Link>
            <Link to="/blog/editor" onClick={toggleMenu}>
              <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">
                Write Post
              </div>
            </Link>
            <Link to="/publications/dashboard" onClick={toggleMenu}>
              <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">
                Research Paper Dashboard
              </div>
            </Link>
            {isReviewer && (
              <Link to="/publications/dashboard" onClick={toggleMenu}>
                <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">
                  Publications
                </div>
              </Link>
            )}
            <button className="mobile-auth-logout" onClick={() => { handleLogout(); toggleMenu(); }}>
              Log Out
            </button>
          </div>
        ) : (
          <Link to={loginUrl} onClick={toggleMenu}>
            <div className="text-lg font-thin text-gray-700 hover:text-logo-red transition-colors">
              Log In
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default NavBar;
