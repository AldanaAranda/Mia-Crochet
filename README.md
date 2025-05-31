# 🧶 Mia Crochet - E-commerce de Amigurumis

**Mia Crochet** es un proyecto de e-commerce desarrollado con React. El objetivo es ofrecer una tienda virtual de amigurumis, con un carrito de compras funcional, rutas protegidas, y una conexión a una fuente externa de productos.

---

## 🚀 Funcionalidades principales

- ✅ Visualización de productos desde una fuente externa (`data.json`)
- ✅ Carrito de compras con aumento/disminución de cantidades y eliminación
- ✅ Interfaz responsiva con Bootstrap y componentes reutilizables
- ✅ Navegación mediante React Router DOM
- ✅ Rutas protegidas con sistema de login
- ✅ Rutas dinámicas para ver detalles de cada producto

---

## 🛒 Cómo probar el proyecto

1. Cloná el repositorio o descargá el proyecto
2. Ejecutá `npm install` para instalar dependencias
3. Ejecutá `npm run dev` para levantar el servidor de desarrollo con Vite

---

## 🔐 Acceso al panel admin

- Usuario: `admin`
- Contraseña: `1234`

El panel `/admin` es privado y se accede únicamente si se inicia sesión correctamente. Usa rutas protegidas mediante contexto (`AuthContext`).

---

## 📁 Fuente de datos

Los productos se obtienen desde un archivo `data.json` ubicado en la carpeta `Data/`.

---

## ❤️ Autoría

Este proyecto fue realizado con amor por [Aldana Aranda](https://github.com/AldanaAranda) como parte de una pre-entrega académica. Cada componente fue pensado para ser funcional, claro y visualmente amigable.
