import { v4 as uuidv4 } from "uuid";
import Circle from "./Circle";
import gameBoardContext from "../gameBoardContext";
import { useContext } from "react";
import CurrentPiece from "./CurrentPiece";

const GameBoard = () => {
  const [gameBoard] = useContext(gameBoardContext);
  return (
    <div className="external-board">
      <CurrentPiece />
      <div id="game-board">
        {Object.keys(gameBoard).map((id) => {
          return <Circle key={uuidv4()} id={id} pieceId={gameBoard[id]} />;
        })}
      </div>
    </div>
  );
};

export default GameBoard;
