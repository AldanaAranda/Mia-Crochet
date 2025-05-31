import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import AcercaDe from './Pages/AcercaDe'
import Carrito from './components/Carrito'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import ProductoDetalle from './Pages/ProductoDetalle'
import RutaProtegida from './auth/RutaProtegida'

function App() {
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/Data/data.json')
      .then(respuesta => respuesta.json())
      .then(datos =>
        setTimeout(() => {
          setProductos(datos)
          setCargando(false)
        }, 2000)
      )
      .catch(error => {
        console.log('Error', error)
        setCargando(false)
        setError(true)
      })
  }, [])
  console.log(productos)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home productos={productos} cargando={cargando} carrito={carrito} setCarrito={setCarrito} />} />
        <Route path='/producto/:id' element={<ProductoDetalle productos={productos} />} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/acercade' element={<AcercaDe/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>
        } />
      </Routes>
      <Carrito carrito={carrito} setCarrito={setCarrito} />
    </Router>
  )
}

export default App
