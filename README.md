# 🧶 Mia Crochet - E-commerce de Amigurumis

**Mia Crochet** es un proyecto de e-commerce desarrollado con **React**. El objetivo es ofrecer una tienda virtual de amigurumis hecha con amor, con carrito de compras funcional, autenticación de usuarios, administración de productos desde MockAPI, y una interfaz responsiva optimizada.

---

## 🚀 Funcionalidades principales

- ✅ **Visualización y filtrado de productos** desde **MockAPI**
- ✅ **Carrito de compras** con aumento/disminución de cantidades, validación de stock y eliminación
- ✅ **Autenticación de usuarios** con rutas protegidas (`AuthContext`)
- ✅ **CRUD completo** de productos para el administrador: agregar, editar y eliminar
- ✅ **Interfaz responsiva** con Bootstrap y `styled-components`
- ✅ **Notificaciones** visuales con `React Toastify`
- ✅ **Íconos interactivos** con FontAwesome
- ✅ **Paginación y búsqueda** de productos en tiempo real
- ✅ **SEO básico** con `React Helmet` (`<title>` y `<meta>`)
- ✅ **Control de stock** en tiempo real al comprar
- ✅ Código organizado en **componentes reutilizables** y **contexts globales**

---

## 🛒 Cómo probar el proyecto

1. Cloná el repositorio o descargá el proyecto
2. Ejecutá `npm install` para instalar dependencias
3. Ejecutá `npm run dev` para levantar el servidor de desarrollo con Vite

---

## 🔐 Acceso al panel admin

- Usuario: `admin`  
- Contraseña: `1234`

El panel `/admin` es privado. Solo puede accederse tras iniciar sesión. Las rutas están protegidas mediante `RutaProtegida` y contexto de autenticación.

También podés iniciar sesión como usuario común:

- Usuario: `usuario`  
- Contraseña: `abcd`

---

## 🧾 MockAPI utilizada

Todos los productos se obtienen y actualizan desde mockAPI

---

## ❤️ Autoría

Este proyecto fue realizado con dedicación por [Aldana Aranda](https://github.com/AldanaAranda) como entrega final para el curso de desarrollo web con React. Cada línea fue pensada para ser clara, modular, accesible y amigable para el usuario final.
