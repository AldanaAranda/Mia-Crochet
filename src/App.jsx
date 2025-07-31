import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useProductos } from './context/ProductosContext'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import AcercaDe from './Pages/AcercaDe'
import Carrito from './components/Carrito'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import ProductoDetalle from './Pages/ProductoDetalle'
import RutaProtegida from './auth/RutaProtegida'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './components/Layout'
import GaleriaProductos from './Pages/GaleriaProductos'

function App() {
  const { productos, cargando } = useProductos()

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home productos={productos} cargando={cargando} />} />
          <Route path='/productos' element={<GaleriaProductos />} />
          <Route path='/producto/:id' element={<ProductoDetalle productos={productos} />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/acercade' element={<AcercaDe />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          } />
        </Route>
      </Routes>
      <Carrito />
      <ToastContainer position="top-center" autoClose={1500} hideProgressBar={true} />
    </Router>
  )
}

export default App
