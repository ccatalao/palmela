import React from 'react';
import './ChapterList.css';
import municipioData from '../data/municipio.json';

function MunicipioList() {
  const municipio = municipioData.municipio;

  return (
    <div className="chapter-list">
      <h2>Serviços Municipais</h2>
      <div className="introduction">
        <p>Esta secção do roteiro apresenta os principais serviços e recursos municipais em matéria de urbanismo, ordenamento do território e habitação no concelho de Palmela.</p>
        
        <p>Os munícipes podem encontrar aqui:</p>
        
        <ul>
          <li>
            <strong>Reabilitação Urbana</strong> – Programas e incentivos para revitalização de centros urbanos e áreas degradadas.
          </li>
          <li>
            <strong>Planeamento Territorial</strong> – Documentos e legislação sobre ordenamento do território.
          </li>
          <li>
            <strong>Habitação</strong> – Políticas e programas municipais de acesso à habitação.
          </li>
          <li>
            <strong>Centro Histórico</strong> – Informações sobre património, comércio e serviços no centro histórico.
          </li>
        </ul>

        <p>Este catálogo facilita o acesso aos serviços municipais e recursos disponíveis para cidadãos e profissionais interessados no desenvolvimento urbano sustentável do concelho.</p>
      </div>

      <div className="chapters-grid">
        {municipio.map(service => (
          <a 
            href={service.url}
            key={service.id}
            className="chapter-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="chapter-image">
              <picture>
                <source 
                  srcSet={service.imageUrl?.webp}
                  type="image/webp"
                />
                <img 
                  src={service.imageUrl?.fallback}
                  alt={service.title}
                  width={service.imageUrl?.thumbnail?.width || 400}
                  height={service.imageUrl?.thumbnail?.height || 300}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="chapter-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="content-info">
                <h4>Serviços disponíveis:</h4>
                <ul>
                  {service.features.map((feature, index) => (
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

export default MunicipioList; 