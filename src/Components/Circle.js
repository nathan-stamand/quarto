/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Piece from "./Piece";
import currentPieceContext from "../currentPieceContext";
import gameBoardContext from "../gameBoardContext";
import gameContext from "../gameContext";
import gamePiecesContext, { initialGamePieces } from "../gamePieces";
import { useContext } from "react";
import "./Circle.css";
import checkWin from "../winningCombos";

const Circle = ({ id, pieceId }) => {
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGameContext, setGameContext] = useContext(gameContext);
  const [currentGameBoard, setCurrentGameBoard] = useContext(gameBoardContext);
  const [currentGamePiecesContext, setCurrentGamePiecesContext] =
    useContext(gamePiecesContext);

  const setPiece = () => {
    if (currentPiece) {
      const newGameBoard = { ...currentGameBoard, [id]: currentPiece };
      setCurrentGameBoard(newGameBoard);
      const newPieceState = {
        ...currentGamePiecesContext,
        [currentPiece]: {
          played: true,
          characteristics: initialGamePieces[currentPiece].characteristics,
        },
      };
      setCurrentGamePiecesContext(newPieceState);
      setCurrentPiece(-1);
      if (checkWin(newGameBoard)) {
        setGameContext({
          ...currentGameContext,
          gameState: "win",
        });
      } else {
        setGameContext({
          ...currentGameContext,
          showAvailable: true,
          turnCount: ++currentGameContext.turnCount,
          turnPhase: 2,
        });
      }
    }
  };
  return (
    <button
      className="game-board__circle"
      disabled={currentPiece > -1 ? false : true}
      onClick={() => setPiece()}
      data-position={id}
    >
      {pieceId ? <Piece id={pieceId} /> : ""}
    </button>
  );
};

export default Circle;
