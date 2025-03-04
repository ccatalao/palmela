import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <header>
      <div className="header">
        <h1>Guia Urbano de Palmela</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/chapters" className={location.pathname === '/chapters' ? 'active' : ''}>
              Capítulos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
