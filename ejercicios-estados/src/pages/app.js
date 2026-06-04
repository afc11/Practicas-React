import { useState } from 'react';

// Ejercicios de useState
import Square from '../components/square.js';
import InputEspejo from '../components/inputespejo.js';
import BotonMostrar from '../components/BotonMostrar.js';
import CuadradoColor from '../components/CuadradoColor.js';
import ListaTareas from '../components/ListaTareas.js'; 

import MensajeCargar from '../components/MensajeCargar.js';
import ContadorEfecto from '../components/ContadorEfecto.js';
import TituloPestaña from '../components/TituloPestaña.js';

export default function App() {
  const [lista, setLista] = useState([]);

  const agregarElemento = () => {
    const siguienteNumero = lista.length + 1;
    setLista([...lista, siguienteNumero]);
  };

  const limpiarLista = () => {
    setLista([]);
  };

  return (
    <main className="contenedor-principal">
      <h1>Ejercicios de useState</h1>
      <h2>Ejercicio 1: Array con Componente Square</h2>

      <div className="contenedor-botones">
        <button onClick={agregarElemento} className="btn btn-agregar">
          Agregar Siguiente Número 🔢
        </button>

        <button onClick={limpiarLista} className="btn btn-reiniciar">
          Reiniciar Lista 🔄
        </button>
      </div>

      <h3>Tu Lista de Elementos:</h3>
      
      {lista.length === 0 ? (
        <p className="texto-vacio">La lista está vacía. Tocá el botón azul.</p>
      ) : (
        <div className="grid-squares">
          {lista.map((elemento, index) => (
            <Square key={index} numero={elemento} />
          ))}
        </div>
      )}

      <hr className="separador" />

      <InputEspejo />

      <hr className="separador" />

      <BotonMostrar />

      <hr className="separador" />

      <CuadradoColor />

      <hr className="separador" />
      
      <ListaTareas />

      <hr className="separador" />

      <h1>Ejercicios de useEffect</h1>

      <MensajeCargar />

      <hr className="separador" />

      <ContadorEfecto />
    
    <hr className="separador" />

      <TituloPestaña />

    </main>
  );
}