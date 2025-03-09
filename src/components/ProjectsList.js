import React from 'react';
import './ChapterList.css';
import projectsData from '../data/projects.json';

function ProjectsList() {
  const projects = projectsData.projects;

  return (
    <div className="chapter-list">
      <h2>Projetos e Bases de Dados</h2>
      <div className="introduction">
        <p>Esta secção do roteiro reúne bases de dados e projetos europeus em desenvolvimento urbano e territorial, com foco em planeamento urbano, mobilidade, sustentabilidade e cidades inteligentes.</p>
        
        <p>Os munícipes e decisores políticos podem encontrar aqui:</p>
        
        <ul>
          <li>
            <strong>Resultados de projetos europeus</strong> – Acesso a resultados e boas práticas de projetos financiados pela UE em desenvolvimento urbano.
          </li>
          <li>
            <strong>Bases de dados especializadas</strong> – Repositórios de conhecimento em planeamento territorial e desenvolvimento urbano sustentável.
          </li>
          <li>
            <strong>Redes de conhecimento</strong> – Plataformas que facilitam a partilha de experiências e soluções entre cidades europeias.
          </li>
          <li>
            <strong>Ferramentas e metodologias</strong> – Recursos práticos para apoiar o desenvolvimento e implementação de projetos urbanos.
          </li>
        </ul>

        <p>Este catálogo de recursos permite aceder a conhecimento validado e soluções testadas em contexto europeu, facilitando a identificação de boas práticas e oportunidades de financiamento para projetos locais.</p>
      </div>

      <div className="chapters-grid">
        {projects.map(project => (
          <a 
            href={project.url}
            key={project.id}
            className="chapter-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="chapter-image">
              <picture>
                <source 
                  srcSet={project.imageUrl?.webp}
                  type="image/webp"
                />
                <img 
                  src={project.imageUrl?.fallback}
                  alt={project.title}
                  width={project.imageUrl?.thumbnail?.width || 400}
                  height={project.imageUrl?.thumbnail?.height || 300}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="chapter-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="content-info">
                <h4>Recursos disponíveis:</h4>
                <ul>
                  {project.features.map((feature, index) => (
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

export default ProjectsList; 