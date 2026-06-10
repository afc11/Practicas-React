import { useState } from 'react';

export default function BotonMostrar() {
  const [mostrar, setMostrar] = useState(false);

  const alternarVisibilidad = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="seccion-ejercicio">
      <h2>Ejercicio 3: Mostrar / Ocultar Mensaje</h2>
      
      <button 
        onClick={alternarVisibilidad} 
        className={`btn ${mostrar ? 'btn-reiniciar' : 'btn-agregar'}`}
      >
        {mostrar ? "Ocultar Mensaje" : "Mostrar Mensaje"}
      </button>

      {mostrar && (
        <div className="bloque-mensaje">
          <p>¡Hola! Este es el mensaje secreto que aparece y desaparece.</p>
        </div>
      )}
    </div>
  );
}