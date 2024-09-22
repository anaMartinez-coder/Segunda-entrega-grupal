import React from 'react';

const Tarjeta = ({ producto }) => (
    <div className="tarjeta">
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
    </div>
);

export default Tarjeta;
