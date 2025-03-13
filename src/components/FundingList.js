import React from 'react';
import './ChapterList.css';
import fundingData from '../data/funding.json';

function FundingList() {
  const funding = fundingData.funding;

  return (
    <div className="chapter-list">
      <div className="introduction">
        <h2>Programas de Financiamento</h2>
        <p>Financiamento europeu para projetos de ordenamento territorial, urbanismo e reabilitação urbana</p>

        <p><strong>Fundos Estruturais</strong> – Mecanismos de financiamento para coesão territorial</p>

        <p><strong>Iniciativas Específicas</strong> – Inovação urbana, transição energética e mobilidade.</p>

        <p><strong>Mecanismos de Recuperação</strong> – Recuperação económica e resiliência territorial</p>      
      </div>

      <div className="content-grid">
        {funding.map((program) => (
          <div key={program.id} className="content-card">
            <a 
              href={program.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-image-link"
            >
              <div className="content-image">
                <picture>
                  <source 
                    srcSet={process.env.PUBLIC_URL + program.imageUrl.webp}
                    type="image/webp"
                  />
                  <img 
                    src={process.env.PUBLIC_URL + program.imageUrl.fallback}
                    alt={program.title}
                    width={program.imageUrl?.thumbnail?.width || 400}
                    height={program.imageUrl?.thumbnail?.height || 300}
                    loading="lazy"
                  />
                </picture>
                <div className="image-overlay">
                  <span>Visitar Website →</span>
                </div>
              </div>
            </a>
            <div className="content-info">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="feature-buttons">
                {program.features.map((feature, index) => (
                  <a 
                    key={index}
                    href={feature.featureURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-button"
                  >
                    {feature.feature}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FundingList; 