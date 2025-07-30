import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faFilter } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

// Fix para los iconos de marcador en producción
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Datos de departamentos y sus coordenadas
const departamentos = [
  { id: 'todos', nombre: 'Todos los departamentos', centro: [-16.5, -64.5], zoom: 5 },
  { id: 'santa_cruz', nombre: 'Santa Cruz', centro: [-17.7833, -63.1833], zoom: 8 },
  { id: 'la_paz', nombre: 'La Paz', centro: [-16.5, -68.15], zoom: 9 },
  { id: 'cochabamba', nombre: 'Cochabamba', centro: [-17.3895, -66.1568], zoom: 9 },
  { id: 'oruro', nombre: 'Oruro', centro: [-17.9833, -67.15], zoom: 8 },
  { id: 'potosi', nombre: 'Potosí', centro: [-19.5833, -65.75], zoom: 7 },
  { id: 'sucre', nombre: 'Chuquisaca', centro: [-19.0333, -65.25], zoom: 8 },
  { id: 'tarija', nombre: 'Tarija', centro: [-21.5318, -64.7296], zoom: 8 },
  { id: 'beni', nombre: 'Beni', centro: [-14.8333, -64.9], zoom: 7 },
  { id: 'pando', nombre: 'Pando', centro: [-11.0167, -68.7833], zoom: 7 }
];

// Marcadores de ejemplo para cada departamento
const marcadores = [
  { id: 1, departamento: 'santa_cruz', nombre: 'Oficina Central', direccion: 'Av. Principal #123', telefono: '(+591) 700-00001', coordenadas: [-17.7833, -63.1833] },
  { id: 2, departamento: 'la_paz', nombre: 'Sede La Paz', direccion: 'Calle Comercio #456', telefono: '(+591) 700-00002', coordenadas: [-16.5, -68.15] },
  { id: 3, departamento: 'cochabamba', nombre: 'Sede Cochabamba', direccion: 'Av. Pando #789', telefono: '(+591) 700-00003', coordenadas: [-17.3895, -66.1568] },
  { id: 4, departamento: 'oruro', nombre: 'Sede Oruro', direccion: 'Calle Bolívar #101', telefono: '(+591) 700-00004', coordenadas: [-17.9833, -67.15] },
  { id: 5, departamento: 'potosi', nombre: 'Sede Potosí', direccion: 'Plaza 10 de Noviembre', telefono: '(+591) 700-00005', coordenadas: [-19.5833, -65.75] },
  { id: 6, departamento: 'sucre', nombre: 'Sede Chuquisaca', direccion: 'Calle Bustillos #202', telefono: '(+591) 700-00006', coordenadas: [-19.0333, -65.25] },
  { id: 7, departamento: 'tarija', nombre: 'Sede Tarija', direccion: 'Calle Sucre #303', telefono: '(+591) 700-00007', coordenadas: [-21.5318, -64.7296] },
  { id: 8, departamento: 'beni', nombre: 'Sede Beni', direccion: 'Calle 18 de Noviembre #404', telefono: '(+591) 700-00008', coordenadas: [-14.8333, -64.9] },
  { id: 9, departamento: 'pando', nombre: 'Sede Pando', direccion: 'Av. 6 de Agosto #505', telefono: '(+591) 700-00009', coordenadas: [-11.0167, -68.7833] }
];

const Contact = () => {
  const mapRef = useRef(null);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('todos');
  const [departamentoInfo, setDepartamentoInfo] = useState(null);
  const [marcadoresVisibles, setMarcadoresVisibles] = useState(marcadores);
  
  // Información detallada de cada departamento
  const infoDepartamentos = useMemo(() => ({
    santa_cruz: {
      nombre: 'Santa Cruz',
      descripcion: 'Sede principal del Partido Demócrata Cristiano en Bolivia',
      direccion: 'Av. Principal #123, Santa Cruz de la Sierra',
      telefono: '(+591) 700-00001',
      horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      email: 'santacruz@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Santa+Cruz'
    },
    la_paz: {
      nombre: 'La Paz',
      descripcion: 'Sede administrativa en la sede de gobierno',
      direccion: 'Calle Comercio #456, La Paz',
      telefono: '(+591) 700-00002',
      horario: 'Lunes a Viernes: 9:00 AM - 5:00 PM',
      email: 'lapaz@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=La+Paz'
    },
    cochabamba: {
      nombre: 'Cochabamba',
      descripcion: 'Oficina regional del departamento del valle',
      direccion: 'Av. Pando #789, Cochabamba',
      telefono: '(+591) 700-00003',
      horario: 'Lunes a Viernes: 8:30 AM - 5:30 PM',
      email: 'cochabamba@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Cochabamba'
    },
    oruro: {
      nombre: 'Oruro',
      descripcion: 'Oficina regional del departamento minero',
      direccion: 'Calle Bolívar #101, Oruro',
      telefono: '(+591) 700-00004',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      email: 'oruro@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Oruro'
    },
    potosi: {
      nombre: 'Potosí',
      descripcion: 'Oficina regional del departamento histórico',
      direccion: 'Plaza 10 de Noviembre, Potosí',
      telefono: '(+591) 700-00005',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      email: 'potosi@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Potosí'
    },
    sucre: {
      nombre: 'Chuquisaca',
      descripcion: 'Oficina regional de la capital constitucional',
      direccion: 'Calle Bustillos #202, Sucre',
      telefono: '(+591) 700-00006',
      horario: 'Lunes a Viernes: 8:30 AM - 5:30 PM',
      email: 'chuquisaca@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Chuquisaca'
    },
    tarija: {
      nombre: 'Tarija',
      descripcion: 'Oficina regional del sur del país',
      direccion: 'Calle Sucre #303, Tarija',
      telefono: '(+591) 700-00007',
      horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
      email: 'tarija@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Tarija'
    },
    beni: {
      nombre: 'Beni',
      descripcion: 'Oficina regional del departamento amazónico',
      direccion: 'Calle 18 de Noviembre #404, Trinidad',
      telefono: '(+591) 700-00008',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      email: 'beni@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Beni'
    },
    pando: {
      nombre: 'Pando',
      descripcion: 'Oficina regional del departamento norteño',
      direccion: 'Av. 6 de Agosto #505, Cobija',
      telefono: '(+591) 700-00009',
      horario: 'Lunes a Viernes: 8:00 AM - 4:00 PM',
      email: 'pando@pdc-bolivia.org',
      imagen: 'https://via.placeholder.com/400x200?text=Pando'
    }
  }), []); // El array vacío asegura que solo se cree una vez
  
  // Actualizar marcadores visibles y mostrar información del departamento
  useEffect(() => {
    if (departamentoSeleccionado === 'todos') {
      setMarcadoresVisibles(marcadores);
      setDepartamentoInfo(null);
      // Centrar en Bolivia
      if (mapRef.current) {
        mapRef.current.setView([-16.5, -64.5], 5);
      }
    } else {
      const marcadoresFiltrados = marcadores.filter(
        m => m.departamento === departamentoSeleccionado
      );
      setMarcadoresVisibles(marcadoresFiltrados);
      
      // Establecer información del departamento seleccionado
      if (infoDepartamentos[departamentoSeleccionado]) {
        setDepartamentoInfo(infoDepartamentos[departamentoSeleccionado]);
      } else {
        // Información por defecto si no hay datos específicos
        const depto = departamentos.find(d => d.id === departamentoSeleccionado);
        setDepartamentoInfo({
          nombre: depto.nombre,
          direccion: 'Dirección no disponible',
          telefono: 'Contactar a la oficina central',
          horario: 'Horario no especificado',
          email: `contacto@${departamentoSeleccionado}.pdc-bolivia.org`,
          imagen: `https://via.placeholder.com/400x200?text=${depto.nombre}`
        });
      }
      
      // Centrar en el departamento seleccionado
      const depto = departamentos.find(d => d.id === departamentoSeleccionado);
      if (mapRef.current && depto) {
        mapRef.current.setView(depto.centro, depto.zoom);
      }
    }
  }, [departamentoSeleccionado, infoDepartamentos]);

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="section-subtitle">Estamos aquí para responder tus preguntas y escuchar tus propuestas</p>
        
        <div className="contact-container">
          <div className="contact-info">
            {departamentoSeleccionado === 'todos' ? (
              <>
                <h3>Selecciona un departamento para ver la información de contacto</h3>
                <p>Usa el menú desplegable sobre el mapa para filtrar por departamento.</p>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="info-content">
                    <h3>Oficina Central</h3>
                    <p>Av. Principal #123, Santa Cruz de la Sierra, Bolivia</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="info-content">
                    <h3>Teléfono</h3>
                    <p>+591 700 00000</p>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </>
            ) : departamentoInfo ? (
              <>
                <div className="dept-header">
                  <h2>{departamentoInfo.nombre}</h2>
                  {departamentoInfo.descripcion && <p className="dept-description">{departamentoInfo.descripcion}</p>}
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="info-content">
                    <h3>Dirección</h3>
                    <p>{departamentoInfo.direccion}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="info-content">
                    <h3>Teléfono</h3>
                    <p>{departamentoInfo.telefono}</p>
                    {departamentoInfo.horario && <p>{departamentoInfo.horario}</p>}
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="info-content">
                    <h3>Correo Electrónico</h3>
                    <p>{departamentoInfo.email}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>Cargando información del departamento...</p>
            )}
            
            <div className="social-media">
              <h3>Síguenos</h3>
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
          </div>
          
          <div className="map-controls">
            <div className="map-filter">
              <div className="filter-select">
                <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                <select 
                  className="departamento-select"
                  value={departamentoSeleccionado}
                  onChange={(e) => setDepartamentoSeleccionado(e.target.value)}
                  aria-label="Filtrar por departamento"
                >
                  {departamentos.map((depto) => (
                    <option key={depto.id} value={depto.id}>
                      {depto.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="map-container">
              <MapContainer 
                center={[-16.5, -64.5]} 
                zoom={5} 
                className="contact-map"
                whenCreated={(map) => {
                  mapRef.current = map;
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {marcadoresVisibles.map((marcador, index) => (
                  <Marker 
                    key={index} 
                    position={marcador.coordenadas}
                  >
                    <Popup>
                      <strong>{marcador.nombre}</strong><br />
                      {marcador.direccion}<br />
                      <a href={`tel:${marcador.telefono}`}>{marcador.telefono}</a>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
        
        <div className="whatsapp-contact">
          <h3>Contáctanos por WhatsApp</h3>
          <p>Haz clic en el botón para enviarnos un mensaje directo:</p>
          <a 
            href="https://wa.me/59170000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
            Enviar mensaje por WhatsApp
          </a>
          <p className="whatsapp-note">Horario de atención: Lunes a Viernes de 9:00 AM a 6:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
