import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header">
        <h1>Polis</h1>
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
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/chapters" 
              className={location.pathname === '/chapters' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Publicações
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos 
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/funding" 
              className={location.pathname === '/funding' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Financiamento
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/municipio" 
              className={location.pathname === '/municipio' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços Municipais
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
