import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RutaProtegida = ({ children }) => {
  const { autenticado } = useAuth()

  return autenticado ? children : <Navigate to="/login" />
}

export default RutaProtegida
