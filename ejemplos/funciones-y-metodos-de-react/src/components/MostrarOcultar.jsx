import { useState } from "react";

const MostrarOcultar = () => {
  const [mostrar, setMostrar] = useState(true);

  /**
   * let boolt = true
   * let boolf = false
   *
   * console.log(!boolt)
   */

  return (
    <div>
      <h2>Mostrar/Ocultar</h2>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Cambiar" : "Mostrar"}
      </button>
      {mostrar && <p>Ocultar</p>}
    </div>
  );
};

export default MostrarOcultar;
