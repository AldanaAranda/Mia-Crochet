import React from 'react'

const Footer = () => {

  const estiloFooter = {
    backgroundColor: '#365b6d',
    color: '#ffff',
    textAlign: 'center',
    padding: '20px 0'
  };

  return (
    <footer className="p-5" style={{ backgroundColor: '#365b6d', color: '#ffff', marginTop: '100px' }}>
      <div className="row justify-content-around align-items-center col-12">
        <div className="col-md-3 col-12 text-center text-lg-start mb-2">
          <h5 style={{ fontSize: '16px' }}>POLÍTICAS LEGALES</h5>
          <h5 style={{ fontSize: '16px' }}>AVISOS LEGALES</h5>
          <h5 style={{ fontSize: '16px' }}>POLÍTICA DE PRIVACIDAD</h5>
          <h5 style={{ fontSize: '16px' }}>POLÍTICA DE COOKIES</h5>
        </div>
        <div className="col-md-6 col-12 text-center mb-2">
          <h2 style={{ fontSize: '59px' }}>Mia<br/>Crochet</h2>
        </div>
        <div className="col-md-3 col-12 text-center text-lg-end mb-2">
          <a href="https://mail.google.com" target="_blank"><i className="fas fa-envelope fa-2x text-white "></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-2x text-white ms-5"></i></a>
          <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook fa-2x text-white ms-5"></i></a>
        </div>
      </div>
      <div className="copyright-footer text-center">
        <hr style={{ width: '70%', border: '1px solid #fff', margin: '2% auto 1% auto' }}/>
          <p>Copyright © 2025 Mia Crochet</p>
      </div>
    </footer>
  )
}

export default Footer
