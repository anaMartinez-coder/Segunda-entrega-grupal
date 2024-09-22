import React from 'react';

const MiembroEquipo = ({ miembro }) => (
  <div className="miembro-equipo">
    <h2>{miembro.nombre}</h2>
    <img src={miembro.foto} alt={miembro.nombre} />
    <p>{miembro.rol}</p>
    <a href={miembro.github}>GitHub</a>
    <a href={miembro.linkedin}>LinkedIn</a>
  </div>
);

export default MiembroEquipo;

