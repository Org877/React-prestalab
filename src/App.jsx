import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Catalogo from './assets/components/Catalogo'
import TarjetaEquipo from './assets/components/TarjetaEquipo'
import { equipos } from "./data/equipos.js";

function App() {
  const total = 5
  const [disponible, setDisponible] = useState(total)
 // const [count, setCount] = useState(0)

 function prestar() {
  setDisponible((d)=>(d > 0 ? d - 1 : d))
 }

 function devolver() {
  setDisponible((d)=>(d < total ? d + 1 : d))
 }
 
  return (
    <>
    <header>
      <h1>Laboratorio de Prestamos</h1>
      <p>Autor: Omar Reyes Gonzalez</p>
    </header>

    <main>
      <Solicitud equipos={solicitados} onQuitar={Quitar} />
      <Catalogo equipos={equipos} onAgregar={Agregar} />
    </main>
      
    </>
  )
}

export default App
