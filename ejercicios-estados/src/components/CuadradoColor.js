import { useState } from 'react';

export default function CuadradoColor() {

    const [esAzul, setEsAzul] = useState(false);

  const alternarColor = () => {
    setEsAzul(!esAzul);
  };

  return (
    <div className="seccion-ejercicio">
      <h2>Ejercicio 4: Alternar Color del Cuadrado</h2>
      
      <div className="contenedor-flex-ejercicio">
        <div className={`cuadrado-interactivo ${esAzul ? 'cuadrado-azul' : 'cuadrado-rojo'}`}>
          <span className="texto-cuadrado-color">
            {esAzul ? "Azul" : "Rojo"}
          </span>
        </div>

        <button onClick={alternarColor} className="btn btn-agregar">
          Cambiar Color
        </button>
      </div>
    </div>
  );
}