import React from 'react'

const MiComponenteDos = () => {
const libros = ["10X rules", "Clean Code", "Spotyfy"];
// const libros = [];
    return (
    <div>
      <h3>Mi lista de libros</h3>
      {/* <ul>
        <li>{libros[0]}</li>
        <li>{libros[1]}</li>
        <li>{libros[2]}</li>
      </ul> */}
        {
            libros.length>0 ?
        (
            <ul>
            {
                libros.map((libro, indice) =>{
                    return <li key={indice}> {libro} </li>
                })
            }
            </ul>
        ) : (
            <p>No hay libros.</p>
        )
        }


    </div>
  )
}

export default MiComponenteDos
