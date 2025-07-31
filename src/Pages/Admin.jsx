import React, { useState } from 'react'
import { useSearch } from '../context/SearchContext'
import { obtenerProductos, eliminarProducto } from '../api'
import { useProductos } from '../context/ProductosContext'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import EditarProductoModal from '../components/EditarProductoModal'
import AgregarProductoModal from '../components/AgregarProductoModal'

const Contenedor = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 1rem;
  color: #365b6d;
  font-family: 'Segoe UI', sans-serif;
`

const Titulo = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const BotonAgregar = styled.button`
  background-color: #4c9aaf;
  color: #ffff;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b7f94;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Card = styled.div`
  padding: 1rem;
  text-align: center;
`

const Imagen = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1rem;
`

const Nombre = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`

const Precio = styled.p`
  margin: 0;
  font-weight: 600;
`

const Stock = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`

const Botones = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

const BtnEditar = styled.button`
  background-color: #4c9aaf;
  color: #ffff;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b7f94;
  }
`

const BtnEliminar = styled.button`
  background-color: #c0392b;
  color: #ffff;
  border: none;
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a93226;
  }
`

const Admin = () => {
  const { productos, setProductos, cargarProductos } = useProductos()
  const [modalEditar, setModalEditar] = useState(null)
  const [modalAgregar, setModalAgregar] = useState(false)
  const { busqueda } = useSearch()

  const handleEliminar = async id => {
    if (window.confirm('¿Eliminar este producto?')) {
      try {
        await eliminarProducto(id)
        const nuevos = await obtenerProductos()
        setProductos(nuevos)
        await cargarProductos()
        toast.success('Producto eliminado correctamente')
      } catch (error) {
        toast.error('Error al eliminar el producto')
      }
    }
  }

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <Contenedor>
      <Titulo>Panel de administración</Titulo>
      <BotonAgregar onClick={() => setModalAgregar(true)}>
        Agregar producto
      </BotonAgregar>

      <Grid>
        {productosFiltrados.map(p => (
          <Card key={p.id}>
            <Imagen src={p.imagen} alt={p.nombre} />
            <Nombre>{p.nombre}</Nombre>
            <Precio>${p.precio}</Precio>
            <Stock>Stock: {p.stock}</Stock>
            <Botones>
              <BtnEditar onClick={() => setModalEditar(p)}>
                Editar
              </BtnEditar>
              <BtnEliminar onClick={() => handleEliminar(p.id)}>
                Eliminar
              </BtnEliminar>
            </Botones>
          </Card>
        ))}
      </Grid>

      {modalAgregar && (
        <AgregarProductoModal
          onClose={() => setModalAgregar(false)}
          onGuardar={(nuevos) => setProductos(nuevos)}
        />
      )}

      {modalEditar && (
        <EditarProductoModal
          producto={modalEditar}
          onClose={() => setModalEditar(null)}
          onGuardar={async () => {
            const nuevos = await obtenerProductos()
            setProductos(nuevos)
            setModalEditar(null)
          }}
        />
      )}
    </Contenedor>
  )
}

export default Admin