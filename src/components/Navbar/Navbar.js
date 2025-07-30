import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <h1>PDC</h1>
            <span>Partido Demócrata Cristiano</span>
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/propuestas" onClick={() => setIsMenuOpen(false)}>Propuestas</Link></li>
            <li><Link to="/candidatos" onClick={() => setIsMenuOpen(false)}>Candidatos</Link></li>
            <li><Link to="/contacto" className="btn" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
