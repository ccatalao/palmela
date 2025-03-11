import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterList.css';
import chaptersData from '../data/chapters.json';

function ChapterList() {
  // Convert chapters object to array and add id to each chapter
  const chapters = Object.entries(chaptersData.chapters).map(([id, chapter]) => ({
    ...chapter,
    id
  }));

  return (
    <div className="chapter-list">
      <h2>Publicações de Acesso Aberto</h2>
      <div className="introduction">
        <p>Esta secção do roteiro reúne publicações científicas em gestão e reabilitação urbana, arquitetura e ordenamento do território, com foco em temas como planeamento urbano, mobilidade, sustentabilidade e cidades inteligentes.</p>
        
        <p>Os munícipes e decisores políticos podem encontrar aqui:</p>
        
        <ul>
          <li>
            <strong>Acesso a conhecimento validado cientificamente</strong> – Todas as publicações seguem processos rigorosos de revisão por pares, garantindo informação fiável e atual para fundamentar decisões técnicas e políticas.
          </li>
          <li>
            <strong>Ligação entre teoria e prática</strong> – Investigação teórica como aplicações práticas, oferecendo soluções testadas para problemas urbanos complexos.
          </li>
          <li>
            <strong>Perspetivas internacionais comparativas</strong> – O catálogo inclui publicações de diferentes contextos geográficos, humanos e culturais, permitindo aprender com experiências diversas e adaptar soluções a realidades locais.
          </li>
          <li>
            <strong>Identificação de tendências emergentes</strong> – A consulta regular destas publicações permite antecipar desenvolvimentos futuros, tendências e inovações no campo do urbanismo e gestão urbana.
          </li>
          <li>
            <strong>Exemplos de boas práticas</strong> – Casos de sucesso, com avaliaçção científica, proporcionando referências valiosas para intervenções urbanas.
          </li>
        </ul>

        <p>Este roteiro de conhecimento é uma ferramenta prática para todos os que precisam fundamentar as suas decisões em evidências científicas sólidas, contribuindo para políticas de desenvolvimento local mais eficazes e sustentáveis.</p>
      </div>

      <div className="content-grid">
        {chapters.map(chapter => (
          <div key={chapter.id} className="content-card">
            <Link 
              to={`/chapter/${chapter.id}`}
              className="content-image-link"
            >
              <div className="content-image">
                <picture>
                  <source 
                    srcSet={process.env.PUBLIC_URL + chapter.imageUrl.webp}
                    type="image/webp"
                  />
                  <img 
                    src={process.env.PUBLIC_URL + chapter.imageUrl.fallback}
                    alt={chapter.title}
                    width={chapter.imageUrl?.thumbnail?.width || 400}
                    height={chapter.imageUrl?.thumbnail?.height || 300}
                    loading="lazy"
                  />
                </picture>
                <div className="image-overlay">
                  <span>Ver publicações →</span>
                </div>
              </div>
            </Link>
            <div className="content-info">
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <Link to={`/chapter/${chapter.id}`} className="visit-button">
                Ver publicações →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList; 