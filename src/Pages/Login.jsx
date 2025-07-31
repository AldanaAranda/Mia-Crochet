import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Contenedor = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f5f8fa;
  box-shadow: 0 4px 12px rgba(54, 91, 109, 0.3);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #365b6d;
`

const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 1px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: #2c4b5a;
`

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1.5px solid #aac7d6;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #365b6d;
    box-shadow: 0 0 6px #365b6d;
  }
`

const Boton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #365b6d;
  border: none;
  border-radius: 4px;
  color: #f5f8fa;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c4b5a;
  }
`

const Error = styled.p`
  margin-top: 1rem;
  color: #c0392b;
  font-weight: 600;
  text-align: center;
`

const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [clave, setClave] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const manejarLogin = (e) => {
    e.preventDefault()
    if (usuario === 'admin' && clave === '1234') {
      setError('')
      login()
      navigate('/admin')
    }

    if (usuario === 'usuario' && clave === 'abcd') {
      setError('')
      login({ nombre: 'Usuario común', rol: 'usuario' })
      navigate('/')
      return
    }

    setError('Usuario o contraseña incorrectos')
  }

  return (
    <Contenedor>
      <Titulo>Iniciar sesión</Titulo>
      <form onSubmit={manejarLogin}>
        <FormGroup>
          <Label htmlFor="usuario">Usuario:</Label>
          <Input
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="clave">Contraseña:</Label>
          <Input
            id="clave"
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </FormGroup>
        <Boton type="submit">Entrar</Boton>
      </form>
      {error && <Error>{error}</Error>}
    </Contenedor>
  )
}

export default Login