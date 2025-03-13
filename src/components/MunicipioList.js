import React from 'react';
import './ChapterList.css';
import municipioData from '../data/municipio.json';

function MunicipioList() {
  const municipio = municipioData.municipio;

  return (
    <div className="chapter-list">
      <div className="introduction">
        <h2>Serviços Municipais</h2>
        <p>Aceda a informação, serviços e recursos municipais no sítio da Câmara Municipal de Palmela</p>

            <p><strong>Reabilitação Urbana</strong> – Programas e incentivos para revitalização de centros urbanos</p>

            <p><strong>Planeamento Territorial</strong> – Documentos e legislação sobre ordenamento do território</p>

            <p><strong>Habitação</strong> – Políticas e programas municipais de acesso à habitação</p>

            <p><strong>Centro Histórico</strong> – Informações sobre património, comércio e serviços no centro histórico</p>
      </div>

      <div className="content-grid">
        {municipio.map((service) => (
          <div key={service.id} className="content-card">
            <a 
              href={service.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-image-link"
            >
              <div className="content-image title-container">
                <h2 className="card-title">{service.title}</h2>
              </div>
            </a>
            <div className="content-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="feature-buttons">
                {service.features.map((feature, index) => (
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

export default MunicipioList; 