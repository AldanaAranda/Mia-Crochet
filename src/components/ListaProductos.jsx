import React from 'react'
import Productos from './Productos'

const ListaProductos = ({ productos, carrito, setCarrito }) => {
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '1rem', margin: '1rem 0 4rem 0'}}>
        {
            productos.map(producto => (
              <Productos key={producto.id} producto={producto} carrito={carrito} setCarrito={setCarrito}/>
            ))
        }
      </div>
    </>
  )
}

export default ListaProductos
