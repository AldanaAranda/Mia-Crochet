import React from 'react'

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)

  const login = (datosUsuario) => {
    setUsuario(datosUsuario)
  }

  const logout = () => {
    setUsuario(null)
  }

  const autenticado = usuario !== null

  return (
    <AuthContext.Provider value={{ usuario, autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
