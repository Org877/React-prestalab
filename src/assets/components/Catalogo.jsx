import {use, useState } from 'react'
import TarjetaEquipo from './TarjetaEquipo'

function Catalogo({ equipos }) {
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [busqueda, setBusqueda] = useState('')

    const visibles = equipos
    .filter((e) => !soloDisponibles || e.disponibles)
    .filter((e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()))

const totalDisponiles = equipos.reduce((total, e) => total + (e.disponibles ? suma +1 : 0), 0)

    return (
       <section>
        <h2>Catalogo de Equipos</h2>
        <P>{totalDisponiles} equipos disponibles</P>
<section>
)
}
