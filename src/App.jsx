import React, { useState } from 'react';
import PaginaInicio from './componentes/Paginas/PaginaInicio';
import PaginaProductos from './componentes/Paginas/PaginaProductos';
import PaginaAgregar from './componentes/Paginas/PaginaAgregar';
import Boton from './componentes/Átomos/Boton';
import './estilos/estilos.css';

function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <div className="App">
      <nav>
        <Boton onClick={() => setPagina('inicio')}>Inicio</Boton>
        <Boton onClick={() => setPagina('productos')}>Productos</Boton>
        <Boton onClick={() => setPagina('agregar')}>Agregar</Boton>
      </nav>
      {pagina === 'inicio' && <PaginaInicio />}
      {pagina === 'productos' && <PaginaProductos />}
      {pagina === 'agregar' && <PaginaAgregar />}
    </div>
  );
}

export default App;
