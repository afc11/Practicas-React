import { useState, useEffect } from 'react';

export default function ParImparEfecto() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="seccion-ejercicio-useeffect">
      <h2>Ejercicio 4: Detectar Par o Impar</h2>
      
      <div className="contenedor-flex-ejercicio">
        <p className="texto-informativo">
            <strong>{contador}</strong>
        </p>
        
        <button onClick={incrementar} className="btn btn-agregar">
            Incrementar 
        </button>
      </div>
    </div>
  );
}