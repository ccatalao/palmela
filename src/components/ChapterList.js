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

      <div className="introduction">
      <h2>Publicações</h2>
        <p>Acesso aberto a publicações em urbanismo e reabilitação urbana, arquitetura e ordenamento do território:</p>

        <p><strong>Conhecimento científico</strong> – Informação fiável e atual para fundamentar decisões técnicas e políticas.</p>

        <p><strong>Aplicações práticas</strong> – Soluções testadas para problemas urbanos e territoriais complexos.</p>

        <p><strong>Perspetivas internacionais</strong> – Contextos geográficos, humanos e culturais diversos.</p>

        <p><strong>Tendências emergentes</strong> – Antecipar desenvolvimentos futuros e inovações.</p>

        <p><strong>Boas práticas</strong> – Casos de sucesso, com avaliação científica.</p>

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