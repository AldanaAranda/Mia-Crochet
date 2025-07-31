import React from 'react'
import Productos from './Productos'

const ListaProductos = ({ productos }) => {
  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {
            productos.map(producto => (
              <Productos key={producto.id} producto={producto}/>
            ))
        }
      </div>
    </>
  )
}

export default ListaProductos
