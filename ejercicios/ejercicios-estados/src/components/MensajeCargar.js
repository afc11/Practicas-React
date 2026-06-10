import { useEffect } from 'react';

export default function MensajeCargar() {
  
  useEffect(() => {
    console.log("Componente cargado");
  }, []);

  return (
    <div className="seccion-ejercicio-useeffect">
      <h2>useEffect - Ejercicio 1: Mensaje al Cargar</h2>
      <p className="texto-informativo">
        <strong> "Componente cargado"</strong>.
      </p>
    </div>
  );
}