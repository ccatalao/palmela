import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Bem-vindo ao Guia Urbano de Palmela</h2>
        <p>Recursos e planeamento territorial ao seu alcance</p>
      </section>
      
      <section className="features">
        <div className="card">
          <h3>Recursos Disponíveis</h3>
          <ul>
            <li>Revistas científicas em urbanismo</li>
            <li>Planeamento urbano</li>
            <li>Gestão territorial</li>
            <li>Desenvolvimento sustentável</li>
          </ul>
        </div>
        
        <div className="card">
          <h3>Começar</h3>
          <p>Explore nossa coleção de recursos:</p>
          <Link to="/chapters" className="button">
            Ver Capítulos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 