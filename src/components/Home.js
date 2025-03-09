import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h2>Urbanismo e ordenamento do território</h2>
        <div className="introduction">
          <p>Um guia para políticas de desenvolvimento local mais eficazes e sustentáveis.</p>
        </div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-image">
            <picture>
              <source 
                srcSet="/images/eu-projects.webp"
                type="image/webp"
              />
              <img 
                src="/images/eu-projects.jpeg"
                alt="Projetos europeus"
                width={400}
                height={300}
                loading="lazy"
              />
            </picture>
          </div>
          <div className="feature-content">
            <h3>Projetos europeus</h3>
            <p>Explore oportunidades de financiamento e colaboração em projetos europeus de desenvolvimento urbano.</p>
            <Link to="/projects" className="feature-button">Ver projetos</Link>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <picture>
              <source 
                srcSet="/images/funding.webp"
                type="image/webp"
              />
              <img 
                src="/images/funding.jpeg"
                alt="Financiamento"
                width={400}
                height={300}
                loading="lazy"
              />
            </picture>
          </div>
          <div className="feature-content">
            <h3>Financiamento</h3>
            <p>Descubra fontes de financiamento disponíveis para projetos de desenvolvimento urbano sustentável.</p>
            <Link to="/funding" className="feature-button">Ver financiamento</Link>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-image">
            <picture>
              <source 
                srcSet="/images/publications.webp"
                type="image/webp"
              />
              <img 
                src="/images/publications.jpeg"
                alt="Publicações de acesso aberto"
                width={400}
                height={300}
                loading="lazy"
              />
            </picture>
          </div>
          <div className="feature-content">
            <h3>Publicações de acesso aberto</h3>
            <p>Aceda a revistas científicas e recursos académicos sobre urbanismo e ordenamento do território.</p>
            <Link to="/chapters" className="feature-button">Ver publicações</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 