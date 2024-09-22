import React from 'react';

const Boton = ({ onClick, children }) => (
    <button onClick={onClick}>
        {children}
    </button>
);

export default Boton;
