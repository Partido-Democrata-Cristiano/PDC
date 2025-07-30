# Partido Demócrata Cristiano - Sitio Web

Sitio web estático para el Partido Demócrata Cristiano con el lema "Sé responsable con tu voto".

## Características

- Diseño moderno y responsivo
- Navegación sin recarga de página
- Formulario de contacto funcional
- Mapa interactivo con Leaflet.js
- Secciones informativas
- Optimizado para SEO y accesibilidad

## Tecnologías utilizadas

- React 18
- React Router DOM
- Leaflet.js (mapas interactivos)
- Font Awesome (íconos)
- CSS puro (sin frameworks)
- HTML5 semántico

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/partido-dc.git
   cd partido-dc
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del proyecto

```
src/
├── components/          # Componentes de React
│   ├── Candidates/      # Página de candidatos
│   ├── Contact/         # Página de contacto con mapa
│   ├── Footer/          # Pie de página
│   ├── Header/          # Encabezado
│   ├── Home/            # Página de inicio
│   ├── Join/            # Formulario de unión al partido
│   └── Proposals/       # Página de propuestas
├── styles/              # Estilos globales
└── App.js               # Componente principal
```

## Despliegue

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `build/` y estarán listos para desplegar en cualquier servicio de hosting estático como:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Comandos útiles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Crea una versión optimizada para producción
- `npm test`: Ejecuta las pruebas unitarias
- `npm run eject`: Expone la configuración de Webpack (operación irreversible)

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado para el Partido Demócrata Cristiano
