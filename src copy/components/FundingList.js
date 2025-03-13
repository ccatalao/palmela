import React from 'react';
import './ChapterList.css';
import fundingData from '../data/funding.json';

function FundingList() {
  const funding = fundingData.funding;

  return (
    <div className="chapter-list">
      <h2>Programas de Financiamento</h2>
      <div className="introduction">
        <p>Esta secção do roteiro apresenta os principais programas de financiamento europeus para projetos de planeamento territorial, urbanismo, reabilitação urbana e obras públicas.</p>
        
        <p>Os municípios podem encontrar aqui:</p>
        
        <ul>
          <li>
            <strong>Programas-Quadro da UE</strong> – Principais programas de financiamento europeus para desenvolvimento urbano sustentável.
          </li>
          <li>
            <strong>Fundos Estruturais</strong> – Mecanismos de financiamento para coesão territorial e desenvolvimento regional.
          </li>
          <li>
            <strong>Iniciativas Específicas</strong> – Programas focados em áreas como inovação urbana, transição energética e mobilidade.
          </li>
          <li>
            <strong>Mecanismos de Recuperação</strong> – Instrumentos de apoio à recuperação económica e resiliência territorial.
          </li>
        </ul>

        <p>Este catálogo facilita a identificação de oportunidades de financiamento adequadas aos objetivos e necessidades específicas dos municípios em matéria de desenvolvimento urbano sustentável.</p>
      </div>

      <div className="chapters-grid">
        {funding.map(program => (
          <a 
            href={program.url}
            key={program.id}
            className="chapter-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="chapter-image">
              <picture>
                <source 
                  srcSet={program.imageUrl?.webp}
                  type="image/webp"
                />
                <img 
                  src={program.imageUrl?.fallback}
                  alt={program.title}
                  width={program.imageUrl?.thumbnail?.width || 400}
                  height={program.imageUrl?.thumbnail?.height || 300}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="chapter-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="content-info">
                <h4>Áreas de financiamento:</h4>
                <ul>
                  {program.features.map((feature, index) => (
                    <li key={index}>
                      <a 
                        href={feature.featureURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-button"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {feature.feature}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default FundingList; 