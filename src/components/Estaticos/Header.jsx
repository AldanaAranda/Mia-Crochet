import React from 'react'

const Header = () => {

  const estiloHeader = {
    backgroundColor: '#f8d7da',
    color: '#7b2c46',
    textAlign: 'center',
    padding: '30px 0',
    fontWeight: 'bold'
  };

  return (
    <header style={estiloHeader}>
        <h1>Bienvenidos a Mia Crochet</h1>
    </header>
  )
}

export default Header
