import { createContext, useContext, useState, useEffect } from 'react'
import { obtenerProductos } from '../api'

const ProductoContext = createContext()

export const ProductoProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  const cargarProductos = async () => {
    try {
      const datos = await obtenerProductos()
      setProductos(datos)
      setCargando(false)
    } catch (e) {
      setError(true)
      setCargando(false)
    }
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  return (
    <ProductoContext.Provider value={{ productos, setProductos, cargarProductos, cargando, error }}>
      {children}
    </ProductoContext.Provider>
  )
}

export const useProductos = () => useContext(ProductoContext)
