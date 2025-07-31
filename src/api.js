const API_URL = 'https://687aca71abb83744b7eddc70.mockapi.io/productos'

export const obtenerProductos = async () => {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Error al obtener productos')
    return res.json()
}

export const agregarProducto = async (nuevo) => {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuevo)
    })
    if (!res.ok) throw new Error('Error al agregar producto')
    return res.json()
}

export const actualizarProducto = async (id, datos) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datos)
    })
    if (!res.ok) throw new Error('Error al actualizar producto')
    return res.json()
}

export const eliminarProducto = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) throw new Error('Error al eliminar el producto')
    return res.json()
}

export const editarProducto = async (id, datos) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    if (!res.ok) throw new Error('Error al editar producto')
    return res.json()
}