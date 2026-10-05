import { useState } from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipos }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')


// valores derivados: se calcual en cada renderizado, no se guarda en el estado
    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponible)
        .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )

    const totalDisponibles = equipos.reduce((suma, e) => suma + (e.disponible ? suma + 1 : suma), 0)

    return (
        <section>
            <h2>Catálogo de Equipos</h2>
            <p>{totalDisponibles} equipos disponibles</p>

            <label>
                Buscar equipo
                <input value={busqueda} onChange={(ev) => setBusqueda(ev.target.value)} />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(e) => setSoloDisponibles(ev.target.checked)}
                />
                Solo disponibles
            </label>

            {visibles.map((equipo) => (
                <TarjetaEquipo
                    key={equipo.id}
                    equipo={equipo}
                />
            ))}
        </section>
    )
}

export default Catalogo

