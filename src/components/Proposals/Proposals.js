import React from 'react';
import './Proposals.css';

const Proposals = () => {
  // Referencias a todos los videos
  const videoRefs = React.useRef([]);

  // Agregar video a la lista de referencias
  const addVideoRef = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };
    const proposals = [
    {
      id: 1,
      title: 'Redistribución Equitativa 50/50',
      icon: 'fas fa-balance-scale',
      description: 'Fin al centralismo asfixiante. División equitativa de ingresos entre el estado central, regiones, municipios y universidades públicas, devolviendo el poder a cada rincón de Bolivia.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/redistribucion.mp4'
    },
    {
      id: 2,
      title: 'Impuestos y Aranceles Justos',
      icon: 'fas fa-percentage',
      description: 'Reducción de impuestos y aranceles para facilitar la formalización del 75% de las actividades informales, promoviendo un comercio justo y accesible para todos.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/impuestos.mp4'
    },
    {
      id: 3,
      title: 'Capitalismo para Todos',
      icon: 'fas fa-hands-helping',
      description: 'Apoyo al emprendimiento boliviano con créditos accesibles y menos trámites burocráticos, abriendo caminos al progreso y prosperidad.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/capitalismo.mp4'
    },
    {
      id: 4,
      title: 'Fin a Subsidios Ineficientes',
      icon: 'fas fa-hand-holding-usd',
      description: 'Eliminación de subsidios a empresas estatales deficitarias, redirigiendo los recursos a proyectos que beneficien directamente a la población.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/subsidios.mp4'
    },
    {
      id: 5,
      title: 'Sinceramiento Económico',
      icon: 'fas fa-search-dollar',
      description: 'Transparencia económica, eliminación del desorden fiscal y fortalecimiento de nuestra moneda para garantizar un futuro estable y seguro.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/economico.mp4'
    },
    {
      id: 6,
      title: 'Bonos de Carbono',
      icon: 'fas fa-tree',
      description: 'Emisión de bonos de carbono para conservar nuestros bosques, con compensaciones económicas para departamentos, municipios y personas que preserven áreas verdes sin vocación productiva.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/carbono.mp4'
    },
    {
      id: 7,
      title: 'Salud Pública Prioritaria',
      icon: 'fas fa-hospital',
      description: 'Mejora de la infraestructura y equipamiento hospitalario, con descentralización del sistema de salud y asignación de recursos bajo el esquema 50/50. Cobertura integral que incluya medicamentos, cirugías y servicios actualmente limitados.',
      video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/salud.mp4'
    }
  ];

  return (
    <section className="proposals-section">
      <div className="container">
        <h2 className="proposals-title" style={{ 
          color: '#000000', 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginTop: '3rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>Nuestras Propuestas</h2>
        <div className="binomial-info">
          <p>Rodrigo Paz - Presidente</p>
          <p>Edman Lara - Vicepresidente</p>
          <p className="binomial-tag">El Binomio del Pueblo</p>
        </div>
      </div>
      
      <div className="proposals-grid">
        {proposals.map((proposal) => (
          <div key={proposal.id} className="proposal-card">
            <div className="proposal-icon">
              <i className={proposal.icon}></i>
            </div>
            <h3>{proposal.title}</h3>
            <p>{proposal.description}</p>
            <div className="proposal-video-container">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src={proposal.video} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Videos Adicionales */}
      <div className="additional-videos-section">
        <div className="container">
          <h2 className="proposals-title" style={{ 
            color: '#000000', 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginTop: '3rem',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>¿Quieres saber más?</h2>
          <div className="additional-videos-grid">
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional1.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional2.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional3.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional4.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional5.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
            <div className="additional-video-card">
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
                ref={(el) => addVideoRef(el)}
                onPlay={(e) => {
                  // Pausar todos los videos excepto el actual
                  videoRefs.current.forEach(video => {
                    if (video !== e.target) {
                      try {
                        video.pause();
                      } catch (error) {
                        console.error('Error pausando video:', error);
                      }
                    }
                  });

                }}
                onPause={() => {
                  // No necesitamos hacer nada cuando se pausa
                }}

              >
                <source src="https://Partido-Democrata-Cristiano.github.io/PDC/videos/cpd/adicional6.mp4" type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
