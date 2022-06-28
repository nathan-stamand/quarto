import { v4 as uuidv4 } from "uuid";
import Circle from "./Circle";
import gameBoardContext from "../GameBoardContext";
import { useContext } from "react";

const GameBoard = () => {
  const [gameBoard] = useContext(gameBoardContext);
  return (
    <div id="game-board">
      {Object.keys(gameBoard).map((id) => {
        return <Circle key={uuidv4()} id={id} pieceId={gameBoard[id]} />;
      })}
    </div>
  );
};

export default GameBoard;
