import React, { useState, useRef } from 'react';
import './Candidates.css';

const Candidates = () => {
  const [activeTab, setActiveTab] = useState('presidencia');
  const [activeDiputadosTab, setActiveDiputadosTab] = useState('plurinominal');
  const [selectedDepto, setSelectedDepto] = useState('todos');

  // Referencias a todos los videos
  const videoRefs = useRef([]);

  // Agregar video a la lista de referencias
  const addVideoRef = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  const team = {
    presidencia: [
      {
        id: 1,
        name: 'Rodrigo Paz',
        position: 'Candidato a Presidente',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Rodrigo_Paz_Pereira._Official_portrait%2C_2020._Chamber_of_Senators_of_Bolivia.jpg/250px-Rodrigo_Paz_Pereira._Official_portrait%2C_2020._Chamber_of_Senators_of_Bolivia.jpg',
        bio: 'Empresario y político comprometido con el desarrollo de Bolivia. Con una visión clara de progreso y estabilidad económica para el país.',
        video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/rodrigo-paz.mp4',
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
        video: 'https://Partido-Democrata-Cristiano.github.io/PDC/videos/edman-lara.mp4',
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
    diputados_plurinominal: {
      'La Paz': [
        {
          id: 1,
          name: 'María Fernández',
          position: 'Diputada Plurinominal Titular',
          image: 'https://randomuser.me/api/portraits/women/45.jpg',
          bio: 'Experta en políticas públicas y desarrollo social. Representante por La Paz.',
          social: {
            facebook: 'https://facebook.com/mariafernandez',
            twitter: 'https://twitter.com/mariafernandez',
            instagram: 'https://instagram.com/mariafernandez'
          }
        },
        {
          id: 2,
          name: 'Juan Pérez',
          position: 'Diputado Plurinominal Suplente',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
          bio: 'Abogado constitucionalista con amplia experiencia legislativa. Suplente por La Paz.',
          social: {
            facebook: 'https://facebook.com/juanperez',
            twitter: 'https://twitter.com/juanperez',
            instagram: 'https://instagram.com/juanperez'
          }
        }
      ],
      'Santa Cruz': [
        {
          id: 3,
          name: 'Carlos Rojas',
          position: 'Diputado Plurinominal Titular',
          image: 'https://randomuser.me/api/portraits/men/28.jpg',
          bio: 'Economista especializado en desarrollo productivo. Representante por Santa Cruz.',
          social: {
            facebook: 'https://facebook.com/carlosrojas',
            twitter: 'https://twitter.com/carlosrojas',
            instagram: 'https://instagram.com/carlosrojas'
          }
        }
      ]
    },
    diputados_uninominal: [
      // Circunscripción 1
      {
        id: 1,
        name: 'Roberto Suárez',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        bio: 'Abogado con experiencia en derecho constitucional y políticas públicas.',
        circunscripcion: '1',
        social: {
          facebook: 'https://facebook.com/robertosuarez',
          twitter: 'https://twitter.com/robertosuarez',
          instagram: 'https://instagram.com/robertosuarez'
        }
      },
      {
        id: 2,
        name: 'Ana María Rojas',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        bio: 'Economista especializada en desarrollo sostenible y políticas públicas.',
        circunscripcion: '1',
        social: {
          facebook: 'https://facebook.com/anamrojas',
          twitter: 'https://twitter.com/anamrojas',
          instagram: 'https://instagram.com/anamrojas'
        }
      },
      // Circunscripción 2
      {
        id: 3,
        name: 'Carlos Andrade',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        bio: 'Ingeniero civil con trayectoria en obras públicas y desarrollo urbano.',
        circunscripcion: '2',
        social: {
          facebook: 'https://facebook.com/carlosandrade',
          twitter: 'https://twitter.com/carlosandrade',
          instagram: 'https://instagram.com/carlosandrade'
        }
      },
      {
        id: 4,
        name: 'Patricia Méndez',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/28.jpg',
        bio: 'Médica especializada en salud pública y políticas sanitarias.',
        circunscripcion: '2',
        social: {
          facebook: 'https://facebook.com/patriciamendez',
          twitter: 'https://twitter.com/patriciamendez',
          instagram: 'https://instagram.com/patriciamendez'
        }
      },
      // Circunscripción 3
      {
        id: 5,
        name: 'Jorge Luis Flores',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/36.jpg',
        bio: 'Empresario del sector tecnológico y emprendedor social.',
        circunscripcion: '3',
        social: {
          facebook: 'https://facebook.com/jorgelflores',
          twitter: 'https://twitter.com/jorgelflores',
          instagram: 'https://instagram.com/jorgelflores'
        }
      },
      // Circunscripción 4
      {
        id: 6,
        name: 'María Fernanda Castro',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/42.jpg',
        bio: 'Educadora con experiencia en reformas educativas y políticas públicas.',
        circunscripcion: '4',
        social: {
          facebook: 'https://facebook.com/mafecastro',
          twitter: 'https://twitter.com/mafecastro',
          instagram: 'https://instagram.com/mafecastro'
        }
      },
      // Circunscripción 5
      {
        id: 7,
        name: 'Luis Alberto Rojas',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        bio: 'Abogado laboralista especializado en derecho del trabajo.',
        circunscripcion: '5',
        social: {
          facebook: 'https://facebook.com/luisarojas',
          twitter: 'https://twitter.com/luisarojas',
          instagram: 'https://instagram.com/luisarojas'
        }
      },
      // Circunscripción 6
      {
        id: 8,
        name: 'Gabriela Morales',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/39.jpg',
        bio: 'Ingeniera ambiental comprometida con el desarrollo sostenible.',
        circunscripcion: '6',
        social: {
          facebook: 'https://facebook.com/gabrielamorales',
          twitter: 'https://twitter.com/gabrielamorales',
          instagram: 'https://instagram.com/gabrielamorales'
        }
      },
      // Circunscripción 7
      {
        id: 9,
        name: 'Fernando Gutiérrez',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/47.jpg',
        bio: 'Economista especializado en desarrollo económico local.',
        circunscripcion: '7',
        social: {
          facebook: 'https://facebook.com/fernandogutierrez',
          twitter: 'https://twitter.com/fernandogutierrez',
          instagram: 'https://instagram.com/fernandogutierrez'
        }
      },
      // Circunscripción 8
      {
        id: 10,
        name: 'Valeria Ríos',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        bio: 'Comunicadora social especializada en políticas públicas.',
        circunscripcion: '8',
        social: {
          facebook: 'https://facebook.com/valeriarrios',
          twitter: 'https://twitter.com/valeriarrios',
          instagram: 'https://instagram.com/valeriarrios'
        }
      },
      // Circunscripción 9
      {
        id: 11,
        name: 'Diego Andrés López',
        position: 'Diputado Uninominal',
        image: 'https://randomuser.me/api/portraits/men/39.jpg',
        bio: 'Ingeniero de sistemas con experiencia en gobierno digital.',
        circunscripcion: '9',
        social: {
          facebook: 'https://facebook.com/diegoalopez',
          twitter: 'https://twitter.com/diegoalopez',
          instagram: 'https://instagram.com/diegoalopez'
        }
      },
      // Circunscripción 10
      {
        id: 12,
        name: 'Carolina Vargas',
        position: 'Diputada Uninominal',
        image: 'https://randomuser.me/api/portraits/women/51.jpg',
        bio: 'Abogada especializada en derechos humanos y justicia social.',
        circunscripcion: '10',
        social: {
          facebook: 'https://facebook.com/carolinavargas',
          twitter: 'https://twitter.com/carolinavargas',
          instagram: 'https://instagram.com/carolinavargas'
        }
      }
    ],
    diputados_supraestatal: [
      {
        id: 1,
        name: 'Ana María Gutiérrez',
        position: 'Diputada Supraestatal Titular',
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
        bio: 'Experta en relaciones internacionales y política exterior. Representante supraestatal.',
        social: {
          facebook: 'https://facebook.com/anagutierrez',
          twitter: 'https://twitter.com/anagutierrez',
          instagram: 'https://instagram.com/anagutierrez'
        }
      },
      {
        id: 2,
        name: 'Luis Méndez',
        position: 'Diputado Supraestatal Suplente',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
        bio: 'Especialista en políticas migratorias y derechos humanos. Suplente supraestatal.',
        social: {
          facebook: 'https://facebook.com/luismendez',
          twitter: 'https://twitter.com/luismendez',
          instagram: 'https://instagram.com/luismendez'
        }
      }
    ]
  };

  const renderTeamMembers = (members) => {
    // Si es un objeto (caso de diputados plurinominales por departamento)
    if (members && typeof members === 'object' && !Array.isArray(members)) {
      return Object.entries(members).map(([departamento, candidatos]) => (
        <div key={departamento} className="departamento-section">
          <h3 className="departamento-title">Departamento de {departamento}</h3>
          <div className="candidates-grid">
            {candidatos.map(renderCandidateCard)}
          </div>
        </div>
      ));
    }
    
    // Si es un array (caso normal)
    if (Array.isArray(members)) {
      return members.map(renderCandidateCard);
    }
    
    return null;
  };
  
  const renderCandidateCard = (member) => {
    return (
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
              <source src={member.video} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        )}
      </div>
    );
  };

  // Lista de departamentos para el filtro
  const departamentos = [
    { id: 'todos', nombre: 'Todos los departamentos' },
    { id: 'la_paz', nombre: 'La Paz' },
    { id: 'santa_cruz', nombre: 'Santa Cruz' },
    { id: 'cochabamba', nombre: 'Cochabamba' },
    { id: 'oruro', nombre: 'Oruro' },
    { id: 'potosi', nombre: 'Potosí' },
    { id: 'sucre', nombre: 'Chuquisaca' },
    { id: 'tarija', nombre: 'Tarija' },
    { id: 'beni', nombre: 'Beni' },
    { id: 'pando', nombre: 'Pando' }
  ];
  
  // Lista de circunscripciones para el filtro
  const circunscripciones = [
    { id: 'todos', nombre: 'Todas las circunscripciones' },
    { id: '1', nombre: 'Circunscripción 1' },
    { id: '2', nombre: 'Circunscripción 2' },
    { id: '3', nombre: 'Circunscripción 3' },
    { id: '4', nombre: 'Circunscripción 4' },
    { id: '5', nombre: 'Circunscripción 5' },
    { id: '6', nombre: 'Circunscripción 6' },
    { id: '7', nombre: 'Circunscripción 7' },
    { id: '8', nombre: 'Circunscripción 8' },
    { id: '9', nombre: 'Circunscripción 9' },
    { id: '10', nombre: 'Circunscripción 10' },
    { id: '11', nombre: 'Circunscripción 11' },
    { id: '12', nombre: 'Circunscripción 12' },
    { id: '13', nombre: 'Circunscripción 13' },
    { id: '14', nombre: 'Circunscripción 14' }
  ];
  
  // Obtener candidatos agrupados por departamento o circunscripción según el caso
  const getCandidatesByGroup = (candidates) => {
    if (activeDiputadosTab === 'plurinominal') {
      // Para diputados plurinominales: agrupar por departamento
      return Object.entries(candidates).map(([deptoId, candidatos]) => ({
        id: deptoId,
        nombre: departamentos.find(d => d.id === deptoId)?.nombre || deptoId,
        tipo: 'departamento',
        candidatos: Array.isArray(candidatos) ? candidatos : []
      }));
    } else {
      // Para diputados uninominales: crear una entrada para cada circunscripción, incluso si no tiene candidatos
      const grupos = [];
      
      // Primero creamos un mapa de circunscripciones con candidatos
      const circunscripcionesConCandidatos = {};
      candidates.forEach(candidato => {
        const circ = candidato.circunscripcion || 'Otra';
        if (!circunscripcionesConCandidatos[circ]) {
          circunscripcionesConCandidatos[circ] = [];
        }
        circunscripcionesConCandidatos[circ].push(candidato);
      });
      
      // Creamos un grupo para cada circunscripción (1-14)
      for (let i = 1; i <= 14; i++) {
        const circId = i.toString();
        const candidatos = circunscripcionesConCandidatos[circId] || [];
        grupos.push({
          id: `circ-${i}`,
          nombre: `Circunscripción ${i}`,
          tipo: 'circunscripcion',
          candidatos: candidatos
        });
      }
      
      // Agregamos grupo para circunscripciones sin número o 'Otra'
      const otrasCircunscripciones = Object.entries(circunscripcionesConCandidatos)
        .filter(([circ]) => isNaN(parseInt(circ)) && circ !== 'Otra')
        .map(([circ, candidatos]) => ({
          id: `circ-${circ.toLowerCase().replace(/\s+/g, '-')}`,
          nombre: `Circunscripción ${circ}`,
          tipo: 'circunscripcion',
          candidatos: candidatos || []
        }));
      
      return [...grupos, ...otrasCircunscripciones];
    }
  };
  
  // Obtener opciones para el selector de filtro
  const getFilterOptions = () => {
    return activeDiputadosTab === 'plurinominal' 
      ? departamentos 
      : circunscripciones;
  };
  
  // Obtener el texto del placeholder según la pestaña activa
  const getFilterPlaceholder = () => {
    return activeDiputadosTab === 'plurinominal'
      ? 'Selecciona un departamento'
      : 'Selecciona una circunscripción';
  };
  
  // Filtrar por departamento/circunscripción seleccionado
  const filterBySelectedGroup = (groups) => {
    if (selectedDepto === 'todos') return groups;
    
    // Si es una circunscripción, buscar por el número
    if (selectedDepto.startsWith('circ-')) {
      const numCirc = selectedDepto.replace('circ-', '');
      return groups.filter(group => 
        group.id === selectedDepto || group.id.endsWith(`-${numCirc}`)
      );
    }
    
    // Para departamentos
    return groups.filter(group => group.id === selectedDepto);
  };

  const renderContent = () => {
    if (activeTab === 'diputados') {
      const currentCandidates = activeDiputadosTab === 'plurinominal' 
        ? team.diputados_plurinominal 
        : team.diputados_uninominal;
      
      const gruposConCandidatos = getCandidatesByGroup(currentCandidates);
      const gruposFiltrados = filterBySelectedGroup(gruposConCandidatos);
      
      return (
        <div className="diputados-container">
          <div className="diputados-subtabs">
            <button 
              className={`subtab-button ${activeDiputadosTab === 'plurinominal' ? 'active' : ''}`}
              onClick={() => {
                setActiveDiputadosTab('plurinominal');
                setSelectedDepto('todos');
              }}
            >
              Plurinominales
            </button>
            <button 
              className={`subtab-button ${activeDiputadosTab === 'uninominal' ? 'active' : ''}`}
              onClick={() => {
                setActiveDiputadosTab('uninominal');
                setSelectedDepto('todos');
              }}
            >
              Uninominales
            </button>
          </div>
          
          {/* Selector de departamentos */}
          <div className="depto-filter">
            <select 
              value={selectedDepto}
              onChange={(e) => setSelectedDepto(e.target.value)}
              className="depto-select"
              aria-label={getFilterPlaceholder()}
            >
              {getFilterOptions().map(opcion => (
                <option key={opcion.id} value={opcion.id}>
                  {opcion.nombre}
                </option>
              ))}
            </select>
          </div>
          
          {gruposFiltrados.length > 0 ? (
            <div className="grupos-container">
              {gruposFiltrados.map(grupo => (
                <div key={grupo.id} className={`${grupo.tipo}-section`}>
                  <h3 className={`${grupo.tipo}-title`}>
                    {grupo.nombre}
                    <span className="candidate-count">
                      ({grupo.candidatos.length} candidato{grupo.candidatos.length !== 1 ? 's' : ''})
                    </span>
                  </h3>
                  <div className="candidates-grid">
                    {renderTeamMembers(grupo.candidatos)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              No se encontraron candidatos para el departamento seleccionado.
            </div>
          )}
        </div>
      );
    }
    
    if (activeTab === 'supra_estatales') {
      return renderTeamMembers(team.diputados_supraestatal);
    }
    
    return renderTeamMembers(team[activeTab]);
  };

  return (
    <section className="candidates-section">
      <div className="container">
        <h2 className="candidates-title" style={{ color: '#000000', fontSize: '2.5rem', fontWeight: '700', marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Nuestro Equipo de Gobierno</h2>
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
          <button 
            className={`tab-button ${activeTab === 'supra_estatales' ? 'active' : ''}`}
            onClick={() => setActiveTab('supra_estatales')}
          >
            Supra-estatales
          </button>
        </div>
        
<div className="candidates-grid" data-level={activeTab}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Candidates;
