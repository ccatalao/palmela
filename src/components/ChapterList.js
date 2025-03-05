import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterList.css';

// Import images
import urbanismWebp from '../assets/images/urbanism.webp';
import urbanismJpeg from '../assets/images/urbanism.jpeg';
import planningWebp from '../assets/images/planning.webp';
import planningJpeg from '../assets/images/planning.jpeg';
import architectureWebp from '../assets/images/architecture.webp';
import architectureJpeg from '../assets/images/architecture.jpeg';

function ChapterList() {
  const chapters = [
    {
      id: 'urbanism',
      title: 'Revistas de Urbanismo',
      description: 'Publicações científicas em urbanismo e gestão urbana',
      imageUrl: {
        webp: urbanismWebp,
        fallback: urbanismJpeg,
        thumbnail: {
          width: 400,
          height: 300,
        }
      }
    },
    {
      id: 'planning',
      title: 'Planeamento Territorial',
      description: 'Recursos sobre planeamento e ordenamento do território',
      imageUrl: {
        webp: planningWebp,
        fallback: planningJpeg,
        thumbnail: {
          width: 400,
          height: 300,
        }
      }
    },
    {
      id: 'architecture',
      title: 'Revistas de Arquitectura',
      description: 'Revistas académicas dedicadas ao estudo e desenvolvimento da arquitectura',
      imageUrl: {
        webp: architectureWebp,
        fallback: architectureJpeg,
        thumbnail: {
          width: 400,
          height: 300,
        }
      }
    },
    // Add more chapters as needed
  ];

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
                  srcSet={chapter.imageUrl.webp}
                  type="image/webp"
                />
                <img 
                  src={chapter.imageUrl.fallback}
                  alt={chapter.title}
                  width={chapter.imageUrl.thumbnail.width}
                  height={chapter.imageUrl.thumbnail.height}
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