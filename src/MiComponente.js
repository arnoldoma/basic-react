// El componente se divide en tres partes principales: import, function, export

// Imports
import React from 'react';

// function

const MiComponente = () => {
    // Variables
    const nombre = "Amap-dev";
    const users = {
        nombre: "Ama Dev",
        direccion: "Ciudad"
    } 
    return (<div className="mi-componente">
        <hr />
        <p>Arnoldo Ma</p>
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Usuario: {JSON.stringify(users)}</li>
            <li>Direccion: {users.direccion}</li>
        </ul>
    </div>)
}

// exports
export default MiComponente;