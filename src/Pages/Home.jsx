import React from 'react'
import Header from '../components/Estaticos/Header'
import Nav from '../components/Estaticos/Nav'
import Footer from '../components/Estaticos/Footer'
import loading from '../assets/loading.gif'
import ListaProductos from '../components/ListaProductos'

const Home = ({productos, cargando, carrito, setCarrito}) => {
  return (
    <>
      <Header/>
      <Nav/>
      {
        cargando ? <img src={loading}/> : <ListaProductos productos={productos} carrito={carrito} setCarrito={setCarrito}/>
      }
      <Footer/>
    </>
  )
}

export default Home
