import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Urbanismo() {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API or data store
  const chapterContent = {
    urbanism: {
      title: 'Revistas de Urbanismo',
      content: [
        {
          id: 'articulo',
          title: 'Articulo',
          description: 'Revista científica avaliada por pares dedicada à exploração de questões urbanas através de diversas abordagens das ciências sociais.',
          url: 'https://journals.openedition.org/articulo',
          imageUrl: '/assets/images/journals/articulo.png'
        },
        {
          id: 'buildings',
          title: 'Buildings & Cities',
          description: 'Revista académica que publica investigação sobre a interação entre diferentes escalas do ambiente construído.',
          url: 'https://journal-buildingscities.org',
          imageUrl: '/assets/images/journals/buildings.png'
        },
        // Add more journals as needed
      ]
    },
    planning: {
      title: 'Planeamento Territorial',
      content: [
        // Add planning resources
      ]
    }
  };

  const chapter = chapterContent[id];

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
            <div className="content-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
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

export default Urbanismo; 