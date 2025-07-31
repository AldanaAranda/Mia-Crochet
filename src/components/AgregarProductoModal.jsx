import React, { useState } from 'react'
import { agregarProducto, obtenerProductos } from '../api'
import { toast } from 'react-toastify'
import { useProductos } from '../context/ProductosContext'

const AgregarProductoModal = ({ onClose, onGuardar }) => {
    const { cargarProductos } = useProductos()

    const [form, setForm] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: '',
        stock: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!form.nombre || form.descripcion.length < 10 || Number(form.precio) <= 0) {
            return toast.error('Revisá los campos del formulario.')
        }
        try {
            await agregarProducto(form)
            const nuevos = await obtenerProductos()
            toast.success('Producto agregado con éxito')
            onGuardar(nuevos)
            await cargarProductos()
            onClose()
        } catch {
            toast.error('Error al agregar producto')
        }
    }

    return (
        <div className='modal show fade d-block' tabIndex='-1' role='dialog'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Agregar producto</h5>
                        <button type='button' className='btn-close' onClick={onClose}></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                className='form-control mb-2'
                                name='nombre'
                                placeholder='Nombre'
                                value={form.nombre}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='number'
                                className='form-control mb-2'
                                name='precio'
                                placeholder='Precio'
                                value={form.precio}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='text'
                                className='form-control mb-2'
                                name='imagen'
                                placeholder='URL de imagen'
                                value={form.imagen}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='number'
                                className='form-control mb-2'
                                name='stock'
                                placeholder='Stock disponible'
                                value={form.stock}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className='form-control mb-3'
                                name='descripcion'
                                rows='3'
                                placeholder='Descripción'
                                value={form.descripcion}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <div className='d-flex justify-content-end gap-2'>
                                <button type='submit' className='btn btn-primary'>Agregar</button>
                                <button type='button' className='btn btn-secondary' onClick={onClose}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarProductoModal
