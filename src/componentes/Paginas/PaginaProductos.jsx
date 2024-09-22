import React, { useEffect, useState } from 'react';
import Tarjeta from '../Moleculas/Tarjeta';
import axios from 'axios';

const PaginaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (productos.length === 0) {
      axios.get('URL_DE_LA_API')
        .then(response => setProductos(response.data))
        .catch(error => console.error(error));
    }
  }, [productos]);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((producto, index) => (
        <Tarjeta key={index} producto={producto} />
      ))}
    </div>
  );
};

export default PaginaProductos;
