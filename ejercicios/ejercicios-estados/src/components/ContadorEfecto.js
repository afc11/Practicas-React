import { useState, useEffect } from 'react';

export default function ContadorEfecto() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador cambió");
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="seccion-ejercicio-useeffect">
      <h2>useEffect - Ejercicio 2: Detectar Cambios en Contador</h2>
      
      <div className="contenedor-flex-ejercicio">
        <p className="texto-informativo">
        <strong>{contador}</strong>
        </p>
        
        <button onClick={incrementar} className="btn btn-agregar">
        </button>
        
        <p className="texto-vacio" style={{ marginTop: '0.5rem' }}>
        </p>
      </div>
    </div>
  );
}