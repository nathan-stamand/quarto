import gamePiecesContext, { gamePieces } from "../gamePieces";
import gameBoardContext from "../gameBoardContext";
import { gameBoard } from "../gameBoardContext";
import currentPieceContext from "../currentPieceContext";
import { initialGameContext, gameContext } from "../gameContext";
import { useState } from "react";

const Provider = ({ children }) => {
  const [currentGameContext, setGameContext] = useState(initialGameContext);
  const [currentPiece, setCurrentPiece] = useState(-1);
  const [currentGameBoard, setCurrentGameBoard] = useState(gameBoard);
  const [currentGamePiecesContext, setCurrentGamePiecesContext] =
    useState(gamePieces);
  return (
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
  );
};

export default Provider;
