// El componente se divide en tres partes principales: import, function, export

// Imports
import React from 'react';

// function

const MiComponente = () => {
    // Variables
    let nombre = "Amap-dev";
    return (<div className="mi-componente">
        <hr />
        <p>Arnoldo Ma</p>
        <ul>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node JS</li>
        </ul>
    </div>)
}

// exports
export default MiComponente;