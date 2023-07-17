import { v4 as uuidv4 } from "uuid";
import Circle from "../Circle";
import gameBoardContext from "../../gameBoardContext";
import gameContext from "../../gameContext";
import { useContext } from "react";
import CurrentPiece from "../CurrentPiece";
import "./_GameBoard.scss";

const GameBoard = () => {
  const [gameBoard] = useContext(gameBoardContext);
  const [currentGameContext, setGameContext] = useContext(gameContext);

  const showAvailable = () => {
    const newGameContext = {
      ...currentGameContext,
      showAvailable: true,
    };
    setGameContext(newGameContext);
  };

  return (
    <div className="external-board">
      <button
        onClick={showAvailable}
        className="available-pieces__max"
        aria-label="maximize"
      >
        Pieces
      </button>
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
