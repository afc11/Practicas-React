import { useState } from "react";
import Contador from "./components/Contador";
import Buscador from "./components/Buscador";
import MostrarOcultar from "./components/MostrarOcultar";
import RenderizarLista from "./components/RenderizarLista";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hola Mundo</h1>

      <Contador count={count} setCount={setCount} />

      <Buscador />

      <MostrarOcultar />

      <RenderizarLista />
    </div>
  );
}

export default App;
