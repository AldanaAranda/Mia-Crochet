import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const Imagen = styled.img`
  width: 90%;
  display: block;
  margin: auto;
`

const BotonAgregar = styled.button`
  background-color: #4a9ba9;
  border: none;
  font-weight: bold;
  padding: 0.6rem 2rem;
  border-radius: 20px;
  color: white;
  margin-top: 1rem;

  &:hover {
    background-color: #3a8390;
  }
`

const BotonCantidad = styled.button`
  background-color: #e1e1e1;
  border: none;
  padding: 0.1rem 0.6rem;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
  margin: 0 0.5rem;
  border-radius: 6px;
  user-select: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ProductoDetalle = ({ productos }) => {
  const { id } = useParams()
  const producto = productos.find(p => p.id.toString() === id)
  const [cantidad, setCantidad] = useState(1)

  if (!producto) {
    return <p>Producto no encontrado</p>
  }

  const { agregarAlCarrito } = useCarrito()

  const handleAgregar = () => {
    const agregado = agregarAlCarrito(producto, cantidad)
    if (agregado) {
      toast.success('¡Producto agregado al carrito!')
    }
  }

  const aumentar = () => {
    if (cantidad < producto.stock) setCantidad(cantidad + 1)
    else toast.error('No hay más stock disponible')
  }

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="row mb-3">
          <div className="col-12 text-start">
            <Link to="/productos" style={{ color: '#000000', fontSize: '1.5rem' }}>← Volver</Link>
          </div>
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <Imagen src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="col-md-5 m-auto">
          <h2 className="fw-bold">Amigurumi de {producto.nombre}</h2>
          <p className="display-6">${producto.precio}</p>
          <p className='mb-3'>{producto.descripcion}</p>
          <p className='fw-bold'>Stock disponible</p>
          <div className="d-flex align-items-center mb-3 text-center">
            <span>Cantidad: </span>

            {cantidad >= 2 && (
              <BotonCantidad onClick={disminuir}>−</BotonCantidad>
            )}

            <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>{cantidad}</span>

            {cantidad < producto.stock && (
              <BotonCantidad onClick={aumentar}>+</BotonCantidad>
            )}

            <span className="text-muted">({producto.stock} disponibles)</span>
          </div>
          <BotonAgregar onClick={handleAgregar}>Agregar al carrito</BotonAgregar>
        </div>
      </div>
    </div>
  )
}

export default ProductoDetalle

