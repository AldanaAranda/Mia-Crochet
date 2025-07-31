import React, { useState } from 'react'
import { useProductos } from '../context/ProductosContext'
import ListaProductos from '../components/ListaProductos'
import loading from '../assets/loading.gif'
import { useSearch } from '../context/SearchContext'

const GaleriaProductos = () => {
    const { productos, cargando, error } = useProductos()

    const { busqueda } = useSearch()
    const [paginaActual, setPaginaActual] = useState(1)
  
    const productosFiltrados = productos.filter(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
  
    const productosPorPagina = 8
    const indiceUltimo = paginaActual * productosPorPagina
    const indicePrimero = indiceUltimo - productosPorPagina
    const productosPagina = productosFiltrados.slice(indicePrimero, indiceUltimo)
  
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina)
  
    const cambiarPagina = (nuevaPagina) => {
      setPaginaActual(nuevaPagina)
      window.scrollTo(0, 0)
    }

    if (error) return <p className="text-center mt-5 text-danger">Error al cargar productos</p>

    return (
        <>
            {cargando ? (
                <div style={{ textAlign: 'center' }}>
                    <img src={loading} alt="Cargando productos..." />
                </div>
            ) : (
                <>
                    <ListaProductos productos={productosPagina} />
                    {/* Paginador */}
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        {
                            Array.from({ length: totalPaginas }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => cambiarPagina(i + 1)}
                                    style={{
                                        margin: '0 0.5rem',
                                        backgroundColor: i + 1 === paginaActual ? '#0790b1' : '#ccc',
                                        color: '#ffff',
                                        border: 'none',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {i + 1}
                                </button>
                            ))
                        }
                    </div>
                </>
            )}
        </>
    )
}

export default GaleriaProductos
