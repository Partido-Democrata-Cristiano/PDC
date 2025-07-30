import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Partido Demócrata Cristiano</h3>
            <p>Sé responsable con tu voto</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/propuestas">Propuestas</Link></li>
              <li><Link to="/candidatos">Candidatos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Av. Principal #123, Santa Cruz, Bolivia</li>
              <li><i className="fas fa-phone"></i> +591 700 00000</li>
              <li><i className="fas fa-envelope"></i> info@pdc-bolivia.org</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Partido Demócrata Cristiano. Todos los derechos reservados.</p>
          <div className="legal-links">
            <Link to="/terminos">Términos y condiciones</Link>
            <span>|</span>
            <Link to="/privacidad">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
