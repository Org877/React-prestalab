function TarjetaEquipo({ equipo }) {
    const { id, nombre, categoria, cantidad, disponible } = equipo;

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p>{id} - {categoria}</p>
            <p>{disponible ? 'Disponible' : 'prestado'}</p>
            <button type="button" disabled={!disponible}>
                {disponible ? 'solicitar' : 'no disponible'}
            </button>

        </article>
    )
}

export default TarjetaEquipo