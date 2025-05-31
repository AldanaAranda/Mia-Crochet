import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const manejarLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Panel privado</h2>
            <button onClick={manejarLogout}>Cerrar sesión</button>
        </div>
    )
}

export default Admin
