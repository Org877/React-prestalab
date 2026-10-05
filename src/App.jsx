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
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mi primera app en react </h1>
          <p>
            Omar Reyes Gonzalez
          </p>
          <h3> Disponible: {disponible} </h3>
        </div>
       
        <main>
          <h1>Laboratorio prestamos</h1>
          <Catalogo equipos={equipos} />
          
        </main>
      </section>

    </>
  )
}

export default App
