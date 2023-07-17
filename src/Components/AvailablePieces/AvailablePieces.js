import Piece from "../Piece";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import currentPieceContext from "../../currentPieceContext";
import gamePiecesContext from "../../gamePieces";
import gameContext from "../../gameContext";
import "./_AvailablePieces.scss";

const AvailablePieces = () => {
  const [currentGameContext, setGameContext] = useContext(gameContext);
  const [currentPiece, setCurrentPiece] = useContext(currentPieceContext);
  const [currentGamePiecesContext] = useContext(gamePiecesContext);

  const unplayedPieces = Object.keys(currentGamePiecesContext).filter(
    (piece) => !currentGamePiecesContext[piece].played
  );

  if (!unplayedPieces.length) {
    setGameContext({ ...currentGameContext, gameState: "draw" });
  }

  const selectPiece = (e) => {
    setCurrentPiece(e.target.id);
    console.log(currentGameContext);
    const newGameContext = {
      ...currentGameContext,
      showAvailable: false,
      turnPhase: 1,
      currentPlayer: currentGameContext.currentPlayer == 2 ? 1 : 2,
    };
    setGameContext(newGameContext);
  };

  const hideAvailable = () => {
    const newGameContext = {
      ...currentGameContext,
      showAvailable: false,
    };
    setGameContext(newGameContext);
  };

  return (
      <div className={`available-pieces__container ${currentGameContext.showAvailable ? 'visible' : ''}`}>
        <button
          onClick={hideAvailable}
          className="available-pieces__min"
          disabled={currentGameContext.turnCount < 1 ? true : false}
          aria-label="minimize"
        >
          Board
        </button>
        {Object.keys(currentGamePiecesContext).map((key) => {
          if (!currentGamePiecesContext[key].played && key != currentPiece) {
            return (
              <Piece key={uuidv4()} id={key} selectPiece={selectPiece} />
            );
          }
        })}
      </div>
  );
};

export default AvailablePieces;
