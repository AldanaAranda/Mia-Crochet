import React from 'react'
import Nav from './Estaticos/Nav'
import Footer from './Estaticos/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
