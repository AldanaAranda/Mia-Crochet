import { useState } from 'react';
import { Link } from 'react-router-dom'

const Productos = ({ producto, carrito, setCarrito }) => {
    const cardStyle = {
        backgroundColor: '#fff0f6',
        width: '20%',
        border: '2px solid #e69eb5',
        borderRadius: '12px',
        padding: '1rem',
        marginTop: '3rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        color: '#7b2c46'
    };

    const imgStyle = {
        width: '100%'
    };

    const buttonStyle = {
        backgroundColor: '#f8d7da',
        color: '#7b2c46',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '6px',
        cursor: 'pointer',
        marginTop: '0.5rem'
    };

    const [mensaje, setMensaje] = useState('');

    const agregarAlCarrito = (producto) => {
        const index = carrito.findIndex(p => p.id === producto.id)
        if (index !== -1) {
            const nuevoCarrito = [...carrito]
            nuevoCarrito[index].cantidad += 1
            setCarrito(nuevoCarrito)
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }
        setMensaje('¡Producto agregado al carrito!');
        setTimeout(() => setMensaje(''), 2000)
    }

    return (
        <>
            <div style={cardStyle}>
                <img src={producto.imagen} alt={producto.nombre} style={imgStyle} />
                <h3 style={{ margin: '0' }}>
                    <Link to={`/producto/${producto.id}`}>
                        {producto.nombre}
                    </Link>
                </h3>
                <p>{producto.descripcion}</p>
                <p><strong>${producto.precio}</strong></p>
                <button style={buttonStyle} onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                {mensaje && <div style={{ color: 'green', marginTop: '0.5rem' }}>{mensaje}</div>}
            </div>
        </>
    )
}

export default Productos
