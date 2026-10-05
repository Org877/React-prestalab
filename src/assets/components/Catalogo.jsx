import { useState } from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipos }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
        .filter((e) => !soloDisponibles || e.disponibles)
        .filter((e) =>
            e.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )

    const totalDisponibles = equipos.reduce(
        (suma, e) => suma + (e.disponibles ? 1 : 0),
        0
    )

    return (
        <section>
            <h2>Catálogo de Equipos</h2>
            <p>{totalDisponibles} equipos disponibles</p>

            <label>
                Buscar equipo
                <input
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={soloDisponibles}
                    onChange={(e) => setSoloDisponibles(e.target.checked)}
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
`

