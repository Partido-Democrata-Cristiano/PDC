import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="landing-page">
      {/* Sección Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="logo-container">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/PDC_Bolivia.png/250px-PDC_Bolivia.png" 
                alt="Logo Partido Demócrata Cristiano" 
                className="party-logo"
              />
            </div>
            <h1 className="hero-title">Partido Demócrata Cristiano</h1>
            <h2 className="hero-subtitle">Sé responsable con tu voto</h2>
            <div className="hero-buttons">
              <Link to="/propuestas" className="btn btn-secondary">Nuestras propuestas</Link>
            </div>
          </div>
          <div className="hero-video">
            <div className="home-video-container">
              <video 
                width="100%" 
                height="auto" 
                controls 
                style={{
                  maxWidth: '350px',
                  aspectRatio: '9/16',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <source src="/videos/home-video.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Integridad</h3>
              <p>Comprometidos con la transparencia y la honestidad en todas nuestras acciones.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-people-group"></i>
              <h3>Unidad</h3>
              <p>Trabajando juntos por un futuro mejor para todos los bolivianos.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-balance-scale"></i>
              <h3>Justicia</h3>
              <p>Buscando la igualdad y la equidad en nuestra sociedad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">¡Únete a nuestro movimiento!</h2>
          <p className="section-description">Juntos podemos construir un mejor futuro para Bolivia. Sé parte del cambio que necesitamos.</p>

        </div>
      </section>
    </div>
  );
};

export default Home;
