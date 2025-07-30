import React from 'react';
import './Proposals.css';

const Proposals = () => {
    const proposals = [
    {
      id: 1,
      title: 'Redistribución Equitativa 50/50',
      icon: 'fas fa-balance-scale',
      description: 'Fin al centralismo asfixiante. División equitativa de ingresos entre el estado central, regiones, municipios y universidades públicas, devolviendo el poder a cada rincón de Bolivia.'
    },
    {
      id: 2,
      title: 'Impuestos y Aranceles Justos',
      icon: 'fas fa-percentage',
      description: 'Reducción de impuestos y aranceles para facilitar la formalización del 75% de las actividades informales, promoviendo un comercio justo y accesible para todos.'
    },
    {
      id: 3,
      title: 'Capitalismo para Todos',
      icon: 'fas fa-hands-helping',
      description: 'Apoyo al emprendimiento boliviano con créditos accesibles y menos trámites burocráticos, abriendo caminos al progreso y prosperidad.'
    },
    {
      id: 4,
      title: 'Fin a Subsidios Ineficientes',
      icon: 'fas fa-hand-holding-usd',
      description: 'Eliminación de subsidios a empresas estatales deficitarias, redirigiendo los recursos a proyectos que beneficien directamente a la población.'
    },
    {
      id: 5,
      title: 'Sinceramiento Económico',
      icon: 'fas fa-search-dollar',
      description: 'Transparencia económica, eliminación del desorden fiscal y fortalecimiento de nuestra moneda para garantizar un futuro estable y seguro.'
    },
    {
      id: 6,
      title: 'Bonos de Carbono',
      icon: 'fas fa-tree',
      description: 'Emisión de bonos de carbono para conservar nuestros bosques, con compensaciones económicas para departamentos, municipios y personas que preserven áreas verdes sin vocación productiva.'
    },
    {
      id: 7,
      title: 'Salud Pública Prioritaria',
      icon: 'fas fa-hospital',
      description: 'Mejora de la infraestructura y equipamiento hospitalario, con descentralización del sistema de salud y asignación de recursos bajo el esquema 50/50. Cobertura integral que incluya medicamentos, cirugías y servicios actualmente limitados.'
    }
  ];

  return (
    <section className="proposals-section">
      <div className="container">
        <h2 className="section-title">Nuestras Propuestas</h2>
        <p className="section-subtitle">Por una Bolivia más justa, próspera y sostenible</p>
        <div className="binomial-info">
          <p>Rodrigo Paz - Presidente</p>
          <p>Etman Lara - Vicepresidente</p>
          <p className="binomial-tag">El Binomio del Pueblo</p>
        </div>
        
        <div className="proposals-grid">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="proposal-card">
              <div className="proposal-icon">
                <i className={proposal.icon}></i>
              </div>
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proposals;
