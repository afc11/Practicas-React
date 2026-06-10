import { useState } from 'react';

export default function ListaTareas() {
  const [textoInput, setTextoInput] = useState("");
  
  const [lista, setLista] = useState([]);

  const manejarCambio = (evento) => {
    setTextoInput(evento.target.value);
  };

  const agregarALista = () => {
    if (textoInput.trim() !== "") {
      setLista([...lista, textoInput]);
      setTextoInput("");
    }
  };

  return (
    <div className="seccion-ejercicio">
      <h2>Ejercicio 5: Lista de Textos Dinámica</h2>
      
      <div className="contenedor-input-boton">
        <input 
          type="text" 
          value={textoInput}
          onChange={manejarCambio}
          placeholder="Escribe un elemento..."
          className="input-texto"
        />
        <button onClick={agregarALista} className="btn btn-agregar">
          Agregar
        </button>
      </div>

      <div className="bloque-resultado-lista">
        <h3>Elementos Agregados:</h3>
        
        {lista.length === 0 ? (
          <p className="texto-vacio">La lista está vacía. Escribe algo arriba.</p>
        ) : (
          <ul className="lista-ul-estilizada">
            {lista.map((elemento, index) => (
              <li key={index} className="lista-li-item">
                {elemento}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}