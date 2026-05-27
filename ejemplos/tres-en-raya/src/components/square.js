export default function Square({ value, onSquareClick }) {
  const handleClick = () => {
    onSquareClick();
  };

  return (
    <button
      className={`square ${value === null ? "" : value == "X" ? "jugador1" : "jugador2"}`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
