import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChapterList.css';
import chaptersData from '../data/chapters.json';



function ChapterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapter = chaptersData.chapters[id];

  if (!chapter) {
    return (
      <div className="chapter-error">
        <h2>Capítulo não encontrado</h2>
        <button onClick={() => navigate('/chapters')} className="back-button">
          Voltar para Capítulos
        </button>
      </div>
    );
  }

  return (
    <div className="chapter-detail">
      <div className="chapter-header">
        <button onClick={() => navigate('/chapters')} className="back-button">
          ← Voltar
        </button>
        <h2>{chapter.title}</h2>
      </div>

      <div className="content-grid">
        {chapter.content.map(item => (
          <div key={item.id} className="content-card">
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-image-link"
            >
              <div className="content-image">
                <picture>
                  <source 
                    srcSet={item.imageUrl?.webp}
                    type="image/webp"
                  />
                  <img 
                    src={item.imageUrl?.fallback}
                    alt={item.title}
                    width={item.imageUrl?.thumbnail?.width || 400}
                    height={item.imageUrl?.thumbnail?.height || 300}
                    loading="lazy"
                  />
                </picture>
                <div className="image-overlay">
                  <span>Visitar Website →</span>
                </div>
              </div>
            </a>
            <div className="content-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="visit-button"
              >
                Visitar →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterDetail; 