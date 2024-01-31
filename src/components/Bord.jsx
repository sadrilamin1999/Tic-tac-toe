import { useState } from "react";
import Square from "./Square";

const Bord = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player" + (isXNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!isXNext);
  };
  return (
    <div className=" bg-purple-700 p-12 rounded-xl flex flex-col items-center gap-5">
      <div>
        <h2 className=" text-rose-50 text-6xl">{status}</h2>
      </div>
      <div className="">
        <div className="flex">
          <Square value={squares[0]} onClickHandler={() => handleClick(0)} />
          <Square value={squares[1]} onClickHandler={() => handleClick(1)} />
          <Square value={squares[2]} onClickHandler={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onClickHandler={() => handleClick(3)} />
          <Square value={squares[4]} onClickHandler={() => handleClick(4)} />
          <Square value={squares[5]} onClickHandler={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onClickHandler={() => handleClick(6)} />
          <Square value={squares[7]} onClickHandler={() => handleClick(7)} />
          <Square value={squares[8]} onClickHandler={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
};

export default Bord;

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
