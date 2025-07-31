import React from "react";
import styled from 'styled-components'

const Contenedor = styled.div`
  max-width: 800px;
  margin: 4rem auto;
  padding: 2rem;
  color: #2c3e50;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
`

const Titulo = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
`

const Parrafo = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

const AcercaDe = () => {
  return (
    <Contenedor>
      <Titulo>Sobre nosotras</Titulo>
      <Parrafo>
        Somos un emprendimiento familiar dedicado a la creación de amigurumis, hechos con mucho amor y dedicación.
        Cada pieza es única, tejida a mano con el corazón para brindar alegría y calidez a quienes las reciben.
        Gracias por apoyar nuestro pequeño gran sueño. Nos apasiona compartir nuestra creatividad y hacer que
        cada amigurumi sea especial para ti.
      </Parrafo>
    </Contenedor>
  )
}

export default AcercaDe