import { useState } from 'react';
import Square from './square.js';
import InputEspejo from './inputespejo.js';

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
      <h2>Ejercicio 2: Array con Componente Square</h2>

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

    </main>
  );
}