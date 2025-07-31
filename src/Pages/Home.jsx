import React from 'react'
import loading from '../assets/loading.gif'
import Header from '../components/Estaticos/Header'
import ListaProductos from '../components/ListaProductos'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

<Helmet>
  <title>Inicio - Mia Crochet</title>
  <meta name='description' content='Descubrí nuestros amigurumis hechos a mano con amor.' />
</Helmet>

const Boton = styled(Link)`
  bottom: 12%;
  left: 27%;
  transform: translate(0, 0);
  background-color: #ffd200;
  border: #806900;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 1px 6px;
    left: 23%;
  }

  &:hover {
    background-color: #e6bc00;
  }
`

const VerMas = styled(Link)`
  border: 1px solid #0790b1;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #056d86;
    color: #ffff;
  }
`

const Home = ({productos, cargando}) => {
  const productosDestacados = productos.slice(0, 8)

  return (
    <>
      <Header/>

      {cargando ? (
        <div style={{ textAlign: 'center' }}>
          <img src={loading} alt='Cargando productos...' />
        </div>
      ) : (
        <ListaProductos productos={productosDestacados} />
      )}

      <div className='text-center my-5'>
        <VerMas to='/productos' className='btn mb-5'>Ver más productos</VerMas>
      </div>

      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-12 col-md-11 position-relative p-0 m-auto'>
            <img src="https://i.ibb.co/xtN5z1kt/contaccto.png" alt="contacto" className='w-100'/>
            <Boton to='/contacto' className='btn position-absolute'>Contactanos</Boton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
