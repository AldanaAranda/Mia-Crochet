import React from 'react'

const Contacto = () => {
    const estiloForm = {
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem auto',
        width: '50%',
        gap: '1rem'
    }
    return (
        <div style={{margin: '4rem 0'}}>
            <h2>¿Listo para un Amigurumi Único? ¡Pide el Tuyo!</h2>
            <form action="https://formspree.io/f/xdkozrkw" method="POST" style={estiloForm}>
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                />

                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tuemail@example.com"
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    placeholder="Escribe tus comentarios o peticiones"
                ></textarea>

                <button type="submit" style={{backgroundColor: '#365b6d', color: '#ffff'}}>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default Contacto
