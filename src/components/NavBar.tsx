import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import './NavBar.css';
import bgimage from "../assets/logo.svg";
import mobileLogoImage from "../assets/logo.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* MAIN NAVBAR - Layout: Navigation Centered */}
      <div className="navbar">
        
        {/* Container with max-width */}
        <div className="navbar-container">
          
          {/* NAVIGATION MENU WITH LOGO - ALL ITEMS WITH EQUAL SPACING */}
          <div className="nav-menu hidden md:flex">
          
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img 
              className="logo"
              src={bgimage} 
              alt="AI Lab Logo"
            />
          </Link>

          {/* People Link */}
          <Link to="/people" className="nav-link">
            <div className="nav-link-text">
              People
            </div>
          </Link>

          <Link to="/publications" className="nav-link">
            <div className="nav-link-text">
              Publications
            </div>
          </Link>

          {/* Initiatives Link */}
          <Link to="/initiatives" className="nav-link">
            <div className="nav-link-text">
              Initiatives
            </div>
          </Link>

          {/* Career Opportunities Link */}
          <Link to="/opportunities" className="nav-link">
            <div className="nav-link-text">
              Career Opportunities
            </div>
          </Link>

          {/* Affiliates Link */}
          <Link to="/affiliates" className="nav-link">
            <div className="nav-link-text">
              Affiliates
            </div>
          </Link>

          {/* Contact Link */}
          <Link to="/contact" className="nav-link">
            <div className="nav-link-text">
              Contact
            </div>
          </Link>
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
      </div>
    </>
  );
};

export default NavBar;
