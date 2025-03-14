import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterList.css';

function About() {
  return (
    <div className="chapter-list">
      <div className="introduction">
        <h2>Polis - Planeamento Urbano Informado</h2>
        <p>
          Roteiro de Conhecimento é uma plataforma integrada de recursos essenciais 
          para o desenvolvimento urbano sustentável.
          </p>
          <p>
          A plataforma foi criada pela Comissão de Ordenamento do Território, Urbanismo, Reabilitação Urbana e Obras Públicas no âmbito do seu trabalho na Assembleia Municipal de Palmela.
          </p>
          <p>
          Foi desenvolvida para apoiar cidadãos, decisores políticos e todos os interessados nas área do urbanismo, planeamento territorial e reabilitação urbana no Município de Palmela.
          </p>
          <p>
          A plataforma está em constante actualização e melhoria, pelo que se reserva o direito de fazer alterações e adições a qualquer momento.
          </p>

        <h3>O que oferecemos:</h3>

        <div className="content-grid">
          <div className="content-card">
            <div className="content-info">
              <h3>Publicações Científicas</h3>
              <p>Acesso a revistas científicas de acesso aberto em:</p>
              <ul>
                <li>Urbanismo e Reabilitação Urbana</li>
                <li>Planeamento Territorial</li>
                <li>Arquitetura</li>
              </ul>
              <Link to="/chapters" className="visit-button">
                Explorar Publicações →
              </Link>
            </div>
          </div>

          <div className="content-card">
            <div className="content-info">
              <h3>Projetos Europeus</h3>
              <p>Bases de dados e redes de conhecimento sobre:</p>
              <ul>
                <li>Resultados e boas práticas</li>
                <li>Desenvolvimento urbano</li>
                <li>Redes de contactos europeus</li>
              </ul>
              <Link to="/projects" className="visit-button">
                Ver Projetos →
              </Link>
            </div>
          </div>

          <div className="content-card">
            <div className="content-info">
              <h3>Financiamento</h3>
              <p>Programas de financiamento europeu para:</p>
              <ul>
                <li>Desenvolvimento urbano sustentável</li>
                <li>Coesão territorial</li>
                <li>Inovação urbana</li>
              </ul>
              <Link to="/funding" className="visit-button">
                Explorar Financiamento →
              </Link>
            </div>
          </div>

          <div className="content-card">
            <div className="content-info">
              <h3>Serviços Municipais</h3>
              <p>Recursos e serviços locais em:</p>
              <ul>
                <li>Reabilitação Urbana</li>
                <li>Planeamento Territorial</li>
                <li>Habitação</li>
                <li>Centro Histórico</li>
              </ul>
              <Link to="/municipio" className="visit-button">
                Aceder aos Serviços →
              </Link>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <h3>Como utilizar</h3>
          <p>
            Navegue pelas diferentes secções através do menu principal. Cada área oferece recursos 
            específicos e ferramentas práticas para apoiar o desenvolvimento urbano sustentável de Palmela. 
            </p>
            <p>
             Todos os recursos são de acesso aberto e incluem acesso direto às fontes originais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 