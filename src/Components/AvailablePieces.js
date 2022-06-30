import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import currentPieceContext from "../currentPieceContext";
import gamePiecesContext, { gamePieces } from "../gamePieces";
import { gameContext } from "../gameContext";
import Modal from "./Modal";
import "./AvailablePieces.css";
import "./Piece.css";

const AvailablePieces = () => {
  const [currentGameContext, setGameContext] = useContext(gameContext);
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGamePiecesContext] = useContext(gamePiecesContext);

  const selectPiece = (e) => {
    setCurrentPiece(e.target.id);
    const newGameContext = {
      ...currentGameContext,
      showAvailable: false,
      turnPhase: 1,
      currentPlayer: currentGameContext.currentPlayer == 2 ? 1 : 2,
    };
    setGameContext(newGameContext);
  };

  if (currentGameContext.showAvailable) {
    return (
      <Modal>
        <div className="available-pieces__container">
          {Object.keys(gamePieces).map((key) => {
            if (!currentGamePiecesContext[key].played && key != currentPiece) {
              return (
                <Piece key={uuidv4()} id={key} selectPiece={selectPiece} />
              );
            }
          })}
        </div>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default AvailablePieces;
