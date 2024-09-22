import React, { useState } from 'react';
import Entrada from '../Átomos/Entrada';
import Boton from '../átomos/Boton';

const PaginaAgregar = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProducto({ nombre, imagen, descripcion });
    setNombre('');
    setImagen('');
    setDescripcion('');
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <Entrada value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <Entrada value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Imagen URL" />
        <Entrada value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
        <Boton type="submit">Agregar</Boton>
      </form>
    </div>
  );
};

export default PaginaAgregar;
