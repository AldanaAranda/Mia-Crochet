import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto, cantidad = 1) => {
        const index = carrito.findIndex(p => p.id === producto.id)
        if (index !== -1) {
            const nuevoCarrito = [...carrito]
            const nuevaCantidad = nuevoCarrito[index].cantidad + cantidad

            if (nuevaCantidad > producto.stock) {
                toast.error('No hay suficiente stock disponible.')
                return false
            }

            nuevoCarrito[index].cantidad = nuevaCantidad
            setCarrito(nuevoCarrito)
            return true
        } else {
            if (cantidad > producto.stock) {
                toast.error('No hay suficiente stock disponible.')
                return false
            }
            setCarrito([...carrito, { ...producto, cantidad }])
            return true
        }
    }

    const ajustarCantidad = (id, cambio) => {
        const nuevoCarrito = carrito.map(producto => {
            if (producto.id === id) {
                const nuevaCantidad = producto.cantidad + cambio
                if (nuevaCantidad <= 0) {
                    return null
                }

                if (nuevaCantidad > producto.stock) {
                    toast.error('Ya no hay más stock disponible de este producto.')
                    return producto
                }
                return { ...producto, cantidad: nuevaCantidad }
            }
            return producto
        }).filter(Boolean)
        setCarrito(nuevoCarrito)
    }

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevoCarrito)
    }

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, ajustarCantidad, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    )
}

export const useCarrito = () => useContext(CarritoContext)