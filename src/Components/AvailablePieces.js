import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import currentPieceContext from "../currentPieceContext";
import gamePiecesContext, { gamePieces } from "../gamePieces";

const AvailablePieces = () => {
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGamePiecesContext] = useContext(gamePiecesContext);

  const selectPiece = (e) => {
    setCurrentPiece(e.target.id);
  };

  return (
    <div className="available-pieces__container">
      {Object.keys(gamePieces).map((key) => {
        if (!currentGamePiecesContext[key].played && key != currentPiece) {
          return <Piece key={uuidv4()} id={key} selectPiece={selectPiece} />;
        }
      })}
    </div>
  );
};

export default AvailablePieces;
