import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ChapterDetail() {
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
          description: 'Revista online avaliada por pares dedicada à exploração de questões urbanas através da lente de uma ampla gama de abordagens das ciências sociais. A Revista abraça uma perspetiva multidisciplinar sobre a transformação de questões sociais, ambientais e económicas das cidades e regiões urbanas. Publicando artigos tanto teóricos como empíricos, a Revista é um fórum internacional que reúne académicos e profissionais que trabalham em questões urbanas.',
          url: 'https://journals.openedition.org/articulo',
          imageUrl: '/assets/images/journals/articulo.jpeg'
        },
        {
          id: 'buildings',
          title: 'Buildings & Cities',
          description: 'Revista académica internacional, de acesso aberto, avaliada por pares, que publica investigação e análise de alta qualidade sobre a interação entre as diferentes escalas do ambiente construído: edifícios, quarteirões, bairros, cidades, parques imobiliários nacionais e infraestruturas. A revista centra-se nas políticas, práticas e resultados do ambiente construído e na variedade de questões económicas, ambientais, políticas, sociais e tecnológicas que ocorrem ao longo do ciclo de vida completo. Fornece uma plataforma para novas ideias, abordagens inovadoras e perspetivas baseadas em investigação que podem ajudar a melhorar o ambiente construído.',
          url: 'https://journal-buildingscities.org',
          imageUrl: '/assets/images/journals/buildings_cities.jpeg'
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

export default ChapterDetail; 