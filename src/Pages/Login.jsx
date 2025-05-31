import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const manejarLogin = (e) => {
    e.preventDefault()
    if (usuario === 'admin' && clave === '1234') {
      login()
      navigate('/admin')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Usuario: </label>
          <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Contraseña: </label>
          <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Login

