import { useState, useEffect } from 'react';

export default function TituloPestaña() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="seccion-ejercicio-useeffect">
      <h2>useEffect - Ejercicio 3: Cambiar Título de la Pestaña</h2>
      
      <div className="contenedor-flex-ejercicio">
        <p className="texto-informativo">
         <strong>{contador}</strong>
        </p>
        
        <button onClick={incrementar} className="btn btn-agregar">
        </button>
      </div>
    </div>
  );
}