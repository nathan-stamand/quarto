import Circle from "./Circle";

const GameBoard = () => {
  const gameBoardSize = Array.from(Array(16).keys());

  return (
    <div id="game-board">
      {gameBoardSize.map((num) => (
        <Circle key={num} num={num + 1} />
      ))}
    </div>
  );
};

export default GameBoard;
