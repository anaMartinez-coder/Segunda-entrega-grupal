import React from 'react';
import MiembroEquipo from '../Moleculas/MienbrosEquipo';

const equipo = [
  { nombre: 'Saneamiento Ambiental SAS', foto: 'url_foto', rol: 'Desarrollador', github: 'url_github', linkedin: 'url_linkedin' },
  { nombre: 'Innovación Tecnológica', foto: 'url_foto2', rol: 'Ana Martinez', github: 'url_github2', linkedin: 'url_linkedin2' },
  { nombre: 'Soluciones Integrales', foto: 'url_foto3', rol: 'Gerente de Proyecto', github: 'url_github3', linkedin: 'url_linkedin3' },
];

const PaginaInicio = () => (
  <div>
    <h1>Servicios</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MiembroEquipo miembro={equipo[0]} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MiembroEquipo miembro={equipo[1]} />
      <MiembroEquipo miembro={equipo[2]} />
    </div>
  </div>
);

export default PaginaInicio;
