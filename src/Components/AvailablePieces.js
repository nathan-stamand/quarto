import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import currentPieceContext from "../currentPieceContext";
import gamePiecesContext, { gamePieces } from "../gamePieces";
import { gameContext } from "../gameContext";
import Modal from "./Modal";

const AvailablePieces = () => {
  const [currentGameContext, setGameContext] = useContext(gameContext);
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGamePiecesContext] = useContext(gamePiecesContext);

  const selectPiece = (e) => {
    setCurrentPiece(e.target.id);
    const newGameContext = {
      ...currentGameContext,
      showAvailable: false,
    };
    setGameContext(newGameContext);
  };

  const showHideModal = () => {
    const newGameContext = {
      ...currentGameContext,
      showAvailable: !currentGameContext.showAvailable,
    };
    setGameContext(newGameContext);
  };

  if (currentGameContext.showAvailable) {
    return (
      <Modal>
        <button
          className="available-pieces-toggle"
          onClick={() => showHideModal()}
        >
          &times;
        </button>

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
    return (
      <button
        className="available-pieces-toggle"
        onClick={() => showHideModal()}
      >
        Available Pieces
      </button>
    );
  }
};

export default AvailablePieces;
