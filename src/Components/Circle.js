/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Piece from "./Piece";
import currentPieceContext from "../currentPieceContext";
import gameBoardContext from "../gameBoardContext";
import gamePiecesContext, { gamePieces } from "../gamePieces";
import { useContext } from "react";

const Circle = ({ id, pieceId }) => {
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGameBoard, setCurrentGameBoard] = useContext(gameBoardContext);
  const [currentGamePiecesContext, setCurrentGamePiecesContext] =
    useContext(gamePiecesContext);

  const setPiece = () => {
    if (currentPiece) {
      setCurrentGameBoard({ ...currentGameBoard, [id]: currentPiece });
      const newPieceState = {
        ...currentGamePiecesContext,
        [currentPiece]: {
          played: true,
          characteristics: gamePieces[currentPiece].characteristics,
        },
      };
      setCurrentGamePiecesContext(newPieceState);
      setCurrentPiece(-1);
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
