import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSearch } from '../../context/SearchContext'
import { useAuth } from '../../context/AuthContext'
import styled from 'styled-components'

const NavStyle = styled.nav`
    background-color: #365b6d;
    padding: 0.5rem 0;
    fontWeight: 500;
`

const BotonBusqueda = styled.button`
  cursor: pointer;

  &:hover {
    background-color: #2c4b5a;
    color: #ffff;
  }
`

const Nav = () => {
  const { busqueda, setBusqueda } = useSearch()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const estaEnAdmin = location.pathname.startsWith('/admin')

  const handleSearchChange = (e) => {
    setBusqueda(e.target.value)
    if (!estaEnAdmin && !location.pathname.startsWith('/productos')) {
      navigate('/productos')
    }
  }

  return (
    <NavStyle className='navbar navbar-expand-lg sticky-top' data-bs-theme="dark">
      <div className='container-fluid'>
        {estaEnAdmin ? (
          <span className='nav-link disabled' style={{ color: '#BDBDBD', fontSize: '1.2rem' }}>Mia Crochet</span>
        ) : (
          <Link to='/' className='navbar-brand' style={{color: '#ffff'}}>Mia Crochet</Link>
        )}
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item me-lg-5'>
              {estaEnAdmin ? (
                <span className='nav-link disabled' style={{ color: '#BDBDBD' }}>Inicio</span>
              ) : (
                <Link to='/' className='nav-link' style={{ color: '#ffff' }}>Inicio</Link>
              )}
            </li>
            <li className='nav-item me-lg-5 ms-lg-5'>
              {estaEnAdmin ? (
                <span className='nav-link disabled' style={{ color: '#BDBDBD' }}>Productos</span>
              ) : (
                <Link to='/productos' className='nav-link' style={{ color: '#ffff' }}>Productos</Link>
              )}
            </li>
            <li className='nav-item me-lg-5 ms-lg-5'>
              {estaEnAdmin ? (
                <span className='nav-link disabled' style={{ color: '#BDBDBD' }}>Acerca de</span>
              ) : (
                <Link to='/acercade' className='nav-link' style={{ color: '#ffff' }}>Acerca de</Link>
              )}
            </li>
            <li className='nav-item me-lg-5 ms-lg-5'>
              {estaEnAdmin ? (
                <span className='nav-link disabled' style={{ color: '#BDBDBD' }}>Contacto</span>
              ) : (
                <Link to='/contacto' className='nav-link' style={{color: '#ffff'}}>Contacto</Link>
              )}
            </li>
            <form className='d-flex ms-lg-5 me-lg-3' role='search' onSubmit={(e) => e.preventDefault()}>
              <input className='form-control me-2' type='search' aria-label='Search' style={{ backgroundColor: '#ffff', color: 'black'}} value={busqueda} onChange={handleSearchChange}/>
              <BotonBusqueda className='btn btn-outline-light' type='submit'><i className='fas fa-search' style={{color: '#ffff'}}></i></BotonBusqueda>
            </form>
            <li className='nav-item me-lg-3 ms-lg-5 d-flex justify-content-center'>
              {estaEnAdmin ? (
                <button className='btn btn-sm nav-link' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' style={{color: '#BDBDBD'}}>
                  <i className='fas fa-shopping-cart'></i>
                </button>
              ) : (
                <button className='btn btn-sm nav-link' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' style={{color: '#ffff'}}>
                  <i className='fas fa-shopping-cart'></i>
                </button>
              )}
            </li>
            {
              estaEnAdmin ? (
                <li className='nav-item me-lg-3'>
                  <button className='nav-link btn btn-sm' onClick={() => {
                    logout()
                    navigate('/login')
                  }} style={{ color: '#ffff' }}>
                    <i className='fas fa-sign-out-alt'></i>
                  </button>
                </li>
              ) : (
                <li className='nav-item me-lg-3'>
                  <Link to='/login' className='nav-link' style={{ color: '#ffff' }}>
                    <i className='fas fa-user'></i>
                  </Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </NavStyle>
  )
}

export default Nav
