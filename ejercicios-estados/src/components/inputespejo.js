import { useState } from 'react';

export default function InputEspejo() {
  const [texto, setTexto] = useState("");

  const manejarCambio = (evento) => {
    setTexto(evento.target.value);
  };

  return (
    <div className="seccion-ejercicio">
      <h2>Ejercicio 2: Input Espejo 🪞</h2>
      
      <input 
        type="text" 
        value={texto}
        onChange={manejarCambio} 
        placeholder="Escribe algo aquí..."
        className="input-texto"
      />

      <div className="resultado-espejo">
        <p>Lo que estás escribiendo:</p>
        <p className="texto-pantalla">{texto || "(Esperando que escribas...)"}</p>
      </div>
    </div>
  );
}