import React from 'react';
import { Link } from 'react-router-dom';

function ChapterList() {
  const chapters = [
    {
      id: 'urbanism',
      title: 'Revistas de Urbanismo',
      description: 'Publicações científicas em urbanismo e gestão urbana',
      imageUrl: '/assets/images/urbanism.png'
    },
    {
      id: 'planning',
      title: 'Planeamento Territorial',
      description: 'Recursos sobre planeamento e ordenamento do território',
      imageUrl: '/assets/images/planning.png'
    },
    // Add more chapters as needed
  ];

  return (
    <div className="chapter-list">
      <h2>Capítulos</h2>
      <div className="chapters-grid">
        {chapters.map(chapter => (
          <Link 
            to={`/chapter/${chapter.id}`} 
            key={chapter.id}
            className="chapter-card"
          >
            <div className="chapter-image">
              <img src={chapter.imageUrl} alt={chapter.title} />
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