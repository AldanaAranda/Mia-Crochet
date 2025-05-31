import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const estiloNav = {
    backgroundColor: '#7b2c46',
    color: 'white',
    padding: '1rem 0',
    fontWeight: '500'
  };

  const estiloLink = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav style={estiloNav}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: '0' }}>
        <li><Link to='/' style={estiloLink}>Inicio</Link></li>
        <li><Link to='/acercade' style={estiloLink}>Acerca de</Link></li>
        <li><Link to='/contacto' style={estiloLink}>Contacto</Link></li>
        <li>
          <button className="btn btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" style={{color: 'white'}}>
            🛒 Ver Carrito
          </button>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav
