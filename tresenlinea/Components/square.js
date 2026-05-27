import { useState } from 'react';

export default function Square() {
const [value, setValor] = useState();

    function haciendoClick() {
 if (value === "x") {
  setValor("o");
} else setValor("x");
}


  return <button className="square" onClick={haciendoClick}>
    {value}
  </button>;
}
