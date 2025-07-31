import React from 'react'
import { useCarrito } from '../context/CarritoContext'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { editarProducto } from '../api'
import { useProductos } from '../context/ProductosContext'

const Carrito = () => {
    const calcularTotal = () => carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)

    const { carrito, setCarrito, ajustarCantidad, eliminarProducto } = useCarrito()
    const { cargarProductos } = useProductos()
    const { usuario } = useAuth()
    const navigate = useNavigate()

    const handleCompra = async () => {
        const offcanvasElement = document.getElementById('offcanvasRight')
        const offcanvasInstance = window.bootstrap?.Offcanvas.getInstance(offcanvasElement)
        offcanvasInstance?.hide()

        if (!usuario) {
            navigate('/login')
            return
        }

        try {
            for (const producto of carrito) {
                const nuevoStock = producto.stock - producto.cantidad
                await editarProducto(producto.id, {...producto, stock: nuevoStock})
            }

            await cargarProductos()
            setCarrito([])
            toast.success("Compra realizada con éxito 🛒")
        } catch (error) {
            toast.error("Error al procesar la compra")
        }
    }


    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <ul className="ps-0 list-unstyled">
                    {carrito.length === 0 && <p>No hay productos en el carrito.</p>}
                    {carrito.map(producto => (
                        <li key={producto.id} className="mb-4 d-flex align-items-start">
                            <img src={producto.imagen} alt={producto.nombre} width="70" className="me-3" />
                            <div>
                                <h6>{producto.nombre}</h6>
                                <div className="d-flex align-items-center">
                                    <p className="m-0">
                                        ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
                                        ({producto.cantidad} u.)
                                    </p>
                                    <button className="btn btn-light btn-sm ms-3" onClick={() => ajustarCantidad(producto.id, -1)}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <button className="btn btn-light btn-sm ms-2" onClick={() => ajustarCantidad(producto.id, 1)}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <button className="btn btn-sm btn-danger ms-2" onClick={() => eliminarProducto(producto.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {carrito.length > 0 && (
                <div className="text-center mb-3">
                    <button className="btn btn-success" onClick={handleCompra}>Comprar</button>
                </div>
            )}

            <div className="total-carrito ms-3 mb-3">
                <h5>Total: ${calcularTotal().toLocaleString('es-AR')}</h5>
            </div>
        </div>
    )
}

export default Carrito

