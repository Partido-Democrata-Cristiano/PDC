import React, { useState } from 'react';
import './Candidates.css';

const Candidates = () => {
  const [activeTab, setActiveTab] = useState('presidencia');

  const team = {
    presidencia: [
      {
        id: 1,
        name: 'Rodrigo Paz',
        position: 'Candidato a Presidente',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rodrigo_Paz_Pereira._Official_portrait%2C_2020._Chamber_of_Senators_of_Bolivia.jpg/250px-Rodrigo_Paz_Pereira._Official_portrait%2C_2020._Chamber_of_Senators_of_Bolivia.jpg',
        bio: 'Empresario y político comprometido con el desarrollo de Bolivia. Con una visión clara de progreso y estabilidad económica para el país.',
        video: '/videos/rodrigo-paz.mp4',
        social: {
          facebook: 'https://facebook.com/rodrigopaz',
          twitter: 'https://twitter.com/rodrigopaz',
          instagram: 'https://instagram.com/rodrigopaz'
        }
      },
      {
        id: 2,
        name: 'Edman Lara',
        position: 'Candidato a Vicepresidente',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Capitan_Lara.jpg',
        bio: 'Experto en políticas públicas y desarrollo social. Comprometido con la transparencia y el bienestar de todos los bolivianos.',
        video: '/videos/edman-lara.mp4',
        social: {
          facebook: 'https://facebook.com/edmanlara',
          twitter: 'https://twitter.com/edmanlara',
          instagram: 'https://instagram.com/edmanlara'
        }
      }
    ],
    senadores: [
      {
        id: 1,
        name: 'Carlos Mendez',
        position: 'Senador Titular',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        bio: 'Abogado constitucionalista con amplia experiencia en el ámbito legislativo.',
        social: {
          facebook: 'https://facebook.com/carlosmendez',
          twitter: 'https://twitter.com/carlosmendez',
          instagram: 'https://instagram.com/carlosmendez'
        }
      },
      {
        id: 2,
        name: 'Ana Vargas',
        position: 'Senadora Suplente',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        bio: 'Especialista en políticas sociales y derechos humanos.',
        social: {
          facebook: 'https://facebook.com/anavargas',
          twitter: 'https://twitter.com/anavargas',
          instagram: 'https://instagram.com/anavargas'
        }
      }
    ],
    diputados: [
      {
        id: 1,
        name: 'Roberto Suárez',
        position: 'Diputado Titular',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        bio: 'Economista especializado en desarrollo productivo.',
        social: {
          facebook: 'https://facebook.com/robertosuarez',
          twitter: 'https://twitter.com/robertosuarez',
          instagram: 'https://instagram.com/robertosuarez'
        }
      },
      {
        id: 2,
        name: 'Laura Castro',
        position: 'Diputada Suplente',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        bio: 'Comunicadora social especializada en políticas públicas.',
        social: {
          facebook: 'https://facebook.com/lauracastro',
          twitter: 'https://twitter.com/lauracastro',
          instagram: 'https://instagram.com/lauracastro'
        }
      }
    ]
  };

  const renderTeamMembers = (members) => {
    return members.map((member) => (
      <div key={member.id} className="candidate-card">
        <div className="candidate-image">
          <img src={member.image} alt={member.name} />
          <div className="social-links">
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="candidate-info">
          <h3>{member.name}</h3>
          <span className="position">{member.position}</span>
          <p>{member.bio}</p>
        </div>
        
        {/* Video de TikTok */}
        {member.video && (
          <div className="video-container">
            <video 
              width="100%" 
              height="auto" 
              controls 
              style={{
                maxWidth: '325px',
                margin: '15px auto 0',
                borderRadius: '8px',
                border: '1px solid #eee'
              }}
            >
              <source src={member.video} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        )}
      </div>
    ));
  };

  return (
    <section className="candidates-section">
      <div className="container">
        <h2 className="section-title">Nuestro Equipo de Gobierno</h2>
        <p className="section-subtitle">Conoce al equipo que trabajará por el cambio que Bolivia necesita</p>
        
        <div className="team-tabs">
          <button 
            className={`tab-button ${activeTab === 'presidencia' ? 'active' : ''}`}
            onClick={() => setActiveTab('presidencia')}
          >
            Presidencia
          </button>
          <button 
            className={`tab-button ${activeTab === 'senadores' ? 'active' : ''}`}
            onClick={() => setActiveTab('senadores')}
          >
            Senadores
          </button>
          <button 
            className={`tab-button ${activeTab === 'diputados' ? 'active' : ''}`}
            onClick={() => setActiveTab('diputados')}
          >
            Diputados
          </button>
        </div>
        
        <div className="candidates-grid" data-level={activeTab}>
          {renderTeamMembers(team[activeTab])}
        </div>
      </div>
    </section>
  );
};

export default Candidates;
