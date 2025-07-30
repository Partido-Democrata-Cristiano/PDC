import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/PDC_Bolivia.png/250px-PDC_Bolivia.png" 
              alt="Logo Partido Demócrata Cristiano" 
              className="party-logo"
            />
          </div>
          <h1>Bienvenidos al Partido Demócrata Cristiano</h1>
          <h2>Sé responsable con tu voto</h2>
          <p>Unidos por un futuro mejor para todos los bolivianos. Trabajando juntos por la justicia, la igualdad y el desarrollo sostenible de nuestra nación.</p>
          <div className="hero-buttons">
            <Link to="/unete" className="btn">Únete a nosotros</Link>
            <Link to="/propuestas" className="btn btn-outline">Nuestras propuestas</Link>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Home;
