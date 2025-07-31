import { Link } from 'react-router-dom'
import { useCarrito } from '../context/CarritoContext'
import styled from 'styled-components'
import { toast } from 'react-toastify'

const Card = styled.div`
  width: 100%;
  padding: 1.5rem;
  margin-top: 3rem;
`

const Imagen = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const Boton = styled.button`
  background-color: #0790b1;
  color: #ffff;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #056d86;
  }
`

const Productos = ({ producto }) => {
    const { agregarAlCarrito } = useCarrito()

    const handleAgregar = () => {
        agregarAlCarrito(producto)
        toast.success('¡Producto agregado al carrito!')
    }

  return (
    <div className="col-12 col-md-3 p-3">
      <Card>
        <Link to={`/producto/${producto.id}`}>
          <Imagen src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
        </Link>
        <h5 style={{ marginTop: '0.5rem' }}>
          <Link to={`/producto/${producto.id}`}>Amigurumi de {producto.nombre}</Link>
        </h5>
        <p><strong>${producto.precio}</strong></p>
        <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
      </Card>
    </div>
  )
}

export default Productos
