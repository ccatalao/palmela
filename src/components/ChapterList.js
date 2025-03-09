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
      <h2>Revistas Académicas</h2>
      <div className="chapters-grid">
        {chapters.map(chapter => (
          <Link 
            to={`/chapter/${chapter.id}`} 
            key={chapter.id}
            className="chapter-card"
          >
            <div className="chapter-image">
              <picture>
                <source 
                  srcSet={chapter.imageUrl?.webp}
                  type="image/webp"
                />
                <img 
                  src={chapter.imageUrl?.fallback}
                  alt={chapter.title}
                  width={chapter.imageUrl?.thumbnail?.width || 400}
                  height={chapter.imageUrl?.thumbnail?.height || 300}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="chapter-content">
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChapterList; 