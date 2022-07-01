import gamePiecesContext, { initialGamePieces } from "../gamePieces";
import gameBoardContext, { initialGameBoard } from "../gameBoardContext";
import currentPieceContext from "../currentPieceContext";
import gameContext, { initialGameContext } from "../gameContext";
import { StrictMode, useState } from "react";

const Provider = ({ children }) => {
  const [currentGameContext, setGameContext] = useState(initialGameContext);
  const [currentPiece, setCurrentPiece] = useState(-1);
  const [currentGameBoard, setCurrentGameBoard] = useState(initialGameBoard);
  const [currentGamePiecesContext, setCurrentGamePiecesContext] =
    useState(initialGamePieces);
  return (
    <StrictMode>
      <gameContext.Provider value={[currentGameContext, setGameContext]}>
        <gameBoardContext.Provider
          value={[currentGameBoard, setCurrentGameBoard]}
        >
          <currentPieceContext.Provider value={[currentPiece, setCurrentPiece]}>
            <gamePiecesContext.Provider
              value={[currentGamePiecesContext, setCurrentGamePiecesContext]}
            >
              {children}
            </gamePiecesContext.Provider>
          </currentPieceContext.Provider>
        </gameBoardContext.Provider>
      </gameContext.Provider>
    </StrictMode>
  );
};

export default Provider;
