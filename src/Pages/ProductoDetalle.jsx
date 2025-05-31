import React from 'react'
import { useParams, Link } from 'react-router-dom'


const ProductoDetalle = ({ productos }) => {
  const { id } = useParams()
  const producto = productos.find(p => p.id === parseInt(id))

  if (!producto) {
    return <p>Producto no encontrado</p>
  }

  return (
    <div style={{ margin: '2rem auto', width: '60%', textAlign: 'center' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px' }} />
      <p>{producto.descripcion}</p>
      <p><strong>${producto.precio}</strong></p>
      <Link to="/" style={{ color: '#7b2c46', textDecoration: 'underline' }}>← Volver</Link>
    </div>
  )
}

export default ProductoDetalle

