function TarjetaEquipo({ equipo, onAgregar }) {
    const { id, nombre, categoria, cantidad, disponibles } = equipo;

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p>{id} - {categoria}</p>
            <p>Cantidad: {cantidad}</p>
            <p>{disponibles ? 'Disponible' : 'Prestado'}</p>

            <button
                type="button"
                disabled={!disponibles}
                // Cambiamos esto para enviarle el equipo completo a la función padre:
                onClick={() => onAgregar(equipo)} 
            >
                {disponibles ? 'Solicitar' : 'No disponible'}
            </button>
        </article>
    );
}

export default TarjetaEquipo;