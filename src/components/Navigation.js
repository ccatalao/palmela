import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header">
        <h1>Guia Urbano de Palmela</h1>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/chapters" 
              className={location.pathname === '/chapters' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Capítulos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
