import Square from "../../Components/square";
import { useState } from "react";

export default function app() {
    const [square, setValue] = useState(Array(9).fill(null));
const [turn, setTurn] = useState(true);

    function haciendoClick() {
        const newSquare = square.slice();
if (turn) {
    newSquare[i] = "x";
} else {
    newSquare[i] = "o";
}
setsquare(newSquare);
setTurn(!turn);
}
    
    return (
    <div>
        <h1>Hola mundo </h1>

<div className="grid">
    <Square value={square[0]} onClick={() => haciendoClick(0)}/>
    <Square value={square[1]} onClick={() => haciendoClick(1)}/>
    <Square value={square[2]} onClick={() => haciendoClick(2)}/>
    <Square value={square[3]} onClick={() => haciendoClick(3)}/>
    <Square value={square[4]} onClick={() => haciendoClick(4)}/>
    <Square value={square[5]} onClick={() => haciendoClick(5)}/>
    <Square value={square[6]} onClick={() => haciendoClick(6)}/>
    <Square value={square[7]} onClick={() => haciendoClick(7)}/>
    <Square value={square[8]} onClick={() => haciendoClick(8)}/>

    </div>
    </div>
    );
}