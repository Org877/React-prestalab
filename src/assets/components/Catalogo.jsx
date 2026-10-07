import { useState } from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipos }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')
    
    //  Creamos el estado para guardar el equipo seleccionado
    const [equipoSeleccionado, setEquipoSeleccionado] = useState(null)

    console.log("renderizando catalogo")

    //  Actualizamos el estado cuando hacen clic en agregar
    const manejarAgregar = (equipo) => {
        setEquipoSeleccionado(equipo)
    }

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
            <h2>Seleccionados</h2>
            <p>Has seleccionado: {equipoSeleccionado?.nombre || 'ningún'} equipo</p>
            
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
                    onAgregar={manejarAgregar}
                />
            ))}
        </section>
    )
}

// 3. 
export default Catalogo