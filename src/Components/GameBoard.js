import { v4 as uuidv4 } from "uuid";
import Circle from "./Circle";
import gameBoardContext from "../gameBoardContext";
import gameContext from "../gameContext";
import { useContext } from "react";
import CurrentPiece from "./CurrentPiece";
import "./_GameBoard.scss";

const GameBoard = () => {
  const [gameBoard] = useContext(gameBoardContext);
  const [currentGameContext, setGameContext] = useContext(gameContext);

  const showAvailable = () => {
    const newGameContext = {
      ...currentGameContext,
      showAvailable: true
    }
    setGameContext(newGameContext);
  }

  return (
    <div className="external-board">
      <button onClick={showAvailable} className="available-pieces__max" aria-label="maximize">Pieces</button>
      <hgroup className="game-data">
        <h2>player {currentGameContext.currentPlayer}&apos;s turn</h2>
        <em>
          {currentGameContext.turnPhase == 1
            ? "Please place the selected piece."
            : "Now, select your opponent's piece."}
        </em>
      </hgroup>
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
