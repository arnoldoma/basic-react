// Props
import React from "react";

export const MiComponenteTres = ({nombre, apellido, ficha}) => {
  return (
    <div>
      <h1>Comunicación</h1>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.grupoSanguineo}</li>
        <li>{ficha.alergia}</li>
      </ul>
    </div>
  )
}
