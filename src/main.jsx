import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { ProductoProvider } from './context/ProductosContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CarritoProvider>
        <SearchProvider>
          <ProductoProvider>
            <App />
          </ProductoProvider>
        </SearchProvider>
      </CarritoProvider>
    </AuthProvider>
  </StrictMode>,
)
