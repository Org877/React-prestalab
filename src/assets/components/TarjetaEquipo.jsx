function TarjetaEquipo({ equipo }) {
    const { id, nombre, categoria, cantidad, disponibles } = equipo;

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p>{id} - {categoria}</p>
            <p>Cantidad: {cantidad}</p>

            <p>
                {disponibles ? 'Disponible' : 'Prestado'}
            </p>

            <button
                type="button"
                disabled={!disponibles}
            >
                {disponibles ? 'Solicitar' : 'No disponible'}
            </button>
        </article>
    )
}

export default TarjetaEquipo