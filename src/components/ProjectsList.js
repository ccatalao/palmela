import React from 'react';
import './ChapterList.css';
import projectsData from '../data/projects.json';

function ProjectsList() {

  const projects = projectsData.projects;

  return (
    <div className="chapter-list">


      <div className="introduction">
      <h2>Redes de Projetos Europeus</h2>
        <p><strong>Projetos europeus</strong> – resultados e boas práticas</p>
        <p><strong>Bases de dados de conhecimento</strong> – em ordenamento do territorio e desenvolvimento urbano</p>
        <p><strong>Redes de contactos</strong> – Partilha de experiências e soluções entre cidades europeias</p>
        <p><strong>Ferramentas e metodologias</strong> – Recursos práticos para projetos urbanos</p>
      </div>

      <div className="content-grid">
        {projects.map((project) => (
          <div key={project.id} className="content-card">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-image-link"
            >
              <div className="content-image">
                <picture>
                  <source 
                    srcSet={process.env.PUBLIC_URL + project.imageUrl.webp}
                    type="image/webp"
                  />
                  <img 
                    src={process.env.PUBLIC_URL + project.imageUrl.fallback}
                    alt={project.title}
                    width={project.imageUrl?.thumbnail?.width || 400}
                    height={project.imageUrl?.thumbnail?.height || 300}
                    loading="lazy"
                  />
                </picture>
                <div className="image-overlay">
                  <span>Visitar Website →</span>
                </div>
              </div>
            </a>
            <div className="content-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="feature-buttons">
                {project.features.map((feature, index) => (
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

export default ProjectsList; 