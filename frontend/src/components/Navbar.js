import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} transition-nav`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://media.istockphoto.com/id/183260287/photo/a-orange-stethoscope-on-a-white-background.webp?b=1&s=612x612&w=0&k=20&c=e6kKh0tOeysKqqjSQJx1wK5ZwXo1TajUCNLliJEwSOU=" 
                alt="YANA Logo" 
                className="h-12 w-auto mr-2" 
              />
              <div>
                <h1 className={`font-bold text-xl font-poppins ${scrolled ? 'text-yana-orange-dark' : 'text-white'}`}>YANA</h1>
                <p className={`text-xs font-medium ${scrolled ? 'text-gray-600' : 'text-white'}`}>YOU ARE NOT ALONE</p>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" scrolled={scrolled}>Home</NavLink>
            <NavLink to="/about" scrolled={scrolled}>About Us</NavLink>
            <NavLink to="/services" scrolled={scrolled}>Services</NavLink>
            <NavLink to="/blog" scrolled={scrolled}>Blog</NavLink>
            <NavLink to="/faq" scrolled={scrolled}>FAQ</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
            <Link 
              to="/book" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yana-orange hover:bg-yana-orange-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yana-orange"
            >
              Book Consultation
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-yana-orange-dark' : 'text-white'}`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about">About Us</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/blog">Blog</MobileNavLink>
            <MobileNavLink to="/faq">FAQ</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <Link
              to="/book"
              className="block w-full text-center mt-3 px-4 py-2 text-base font-medium text-white bg-yana-orange hover:bg-yana-orange-dark rounded-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, scrolled, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
        isActive 
          ? 'border-yana-orange text-yana-orange' 
          : `${scrolled ? 'border-transparent text-gray-600 hover:text-yana-orange-dark' : 'border-transparent text-white hover:text-yana-orange-light'}`
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive 
          ? 'bg-yana-orange-light text-white' 
          : 'text-gray-600 hover:bg-yana-orange-light hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;