import React from 'react'
import { Link } from 'react-router-dom'
import { useProductos } from '../../context/ProductosContext'

const Header = () => {
  const { productos } = useProductos()
  const productoStyles = productos.find(p => p.nombre.toLowerCase() === 'harry styles')

  return (
    <header>
      <div className='container-fluid p-0'>
        <div className='row m-0'>
          <div className='col p-0'>
            {productoStyles ? (
              <Link to={`/producto/${productoStyles.id}`}>
                <img
                  src="https://i.ibb.co/pvyqWdLV/header.png"
                  alt="banner"
                  className="w-100"
                />
              </Link>
            ) : (
              <img
                src="https://i.ibb.co/pvyqWdLV/header.png"
                alt="banner"
                className="w-100"
              />
            )}
          </div>
        </div>
      </div>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center flex-column flex-lg-row mb-4'>
            <i className='fa-solid fa-truck-fast fa-2x me-lg-4'></i>
            <div>
              <h5 className='text-center text-lg-start m-0'><strong>Envíos</strong></h5>
              <h5>Hacemos envíos a todo el país</h5>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center flex-column flex-lg-row mb-4'>
            <i className="fa-regular fa-credit-card fa-2x me-lg-4"></i>
            <div>
              <h5 className='text-center text-lg-start m-0'><strong>3 cuotas sin interés</strong></h5>
              <h5>Con todas las tarjetas</h5>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex align-items-center justify-content-center flex-column flex-lg-row mb-4'>
            <i className="fa-solid fa-tag fa-2x me-lg-4"></i>
            <div>
              <h5 className='text-center text-lg-start m-0'><strong>15% OFF por <br /> transferencia</strong></h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
