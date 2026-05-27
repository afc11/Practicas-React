import Square from "@/components/square";
import { useState } from "react";

export default function App() {
  const [historial, setHistorial] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(true); // true = X || false = O

  function verificarGanador() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        historial[a] &&
        historial[a] === historial[b] &&
        historial[a] === historial[c]
      ) {
        return historial[a];
      }
    }
    return null;
  }

  const ganador = verificarGanador(historial);
  let status;
  if (ganador) {
    status = "Ganador: " + ganador;
    alert("Gano el jugador: " + ganador);
  } else {
    status = "Siguiente jugador: " + (turno ? "X" : "O");
  }

  function handleClick(i) {
    const nextSquare = historial.slice();

    // si el cuadrado no está vació, no continua con la ejecución
    if (nextSquare[i] !== null) return;
    if (ganador) return;

    if (turno) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setHistorial(nextSquare);
    // cuando turno es verdadero !turno = falso
    // cuando turno es falso !turno = verdadero
    setTurno(!turno);
  }

  function reiniciarPartida() {
    //
    setHistorial(Array(9).fill(null));
    setTurno(true);
  }

  return (
    <div>
      <h1>Juego tres en raya</h1>

      <p className="status">{status}</p>

      <div className="board">
        <Square value={historial[0]} onSquareClick={() => handleClick(0)} />
        <Square value={historial[1]} onSquareClick={() => handleClick(1)} />
        <Square value={historial[2]} onSquareClick={() => handleClick(2)} />
        <Square value={historial[3]} onSquareClick={() => handleClick(3)} />
        <Square value={historial[4]} onSquareClick={() => handleClick(4)} />
        <Square value={historial[5]} onSquareClick={() => handleClick(5)} />
        <Square value={historial[6]} onSquareClick={() => handleClick(6)} />
        <Square value={historial[7]} onSquareClick={() => handleClick(7)} />
        <Square value={historial[8]} onSquareClick={() => handleClick(8)} />
      </div>

      {ganador && (
        <button className="btnReiniciar" onClick={reiniciarPartida}>
          Reiniciar
        </button>
      )}
    </div>
  );
}
