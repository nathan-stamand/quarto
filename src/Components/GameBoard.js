import { v4 as uuidv4 } from "uuid";
import Circle from "./Circle";
import gameBoardContext from "../gameBoardContext";
import { gameContext } from "../gameContext";
import { useContext } from "react";
import CurrentPiece from "./CurrentPiece";
import "./GameBoard.css";

const GameBoard = () => {
  const [gameBoard] = useContext(gameBoardContext);
  const [currentGameContext] = useContext(gameContext);
  return (
    <div className="external-board">
      <hgroup className="game-data">
        <h1>quarto</h1>
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
