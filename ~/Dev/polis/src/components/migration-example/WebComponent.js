// This is an example of a React web component from the PolisPlan web app
// It will be used to demonstrate how to migrate to React Native

import React from 'react';
import { Link } from 'react-router-dom';
import './FeatureCard.css';

function FeatureCard({ title, description, imageUrl, linkTo }) {
  return (
    <div className="feature-card">
      <div className="feature-image">
        <picture>
          <source 
            srcSet={process.env.PUBLIC_URL + imageUrl.webp}
            type="image/webp"
          />
          <img 
            src={process.env.PUBLIC_URL + imageUrl.fallback}
            alt={title}
            width={imageUrl?.thumbnail?.width || 400}
            height={imageUrl?.thumbnail?.height || 300}
            loading="lazy"
          />
        </picture>
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={linkTo} className="feature-button">Ver mais</Link>
      </div>
    </div>
  );
}

export default FeatureCard; 