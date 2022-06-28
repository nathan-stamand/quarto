import AvailablePieces from "./Components/AvailablePieces";
import GameBoard from "./Components/GameBoard";
import gameBoardContext from "./GameBoardContext";
import { gameBoard } from "./GameBoardContext";
import currentPieceContext from "./currentPieceContext";
import { StrictMode, useState } from "react";
import CurrentPiece from "./Components/CurrentPiece";
import Piece from "./Components/Piece";
import gamePiecesContext, { gamePieces } from "./gamePieces";

const App = () => {
  const [currentPiece, setCurrentPiece] = useState(-1);
  const [currentGameBoard, setCurrentGameBoard] = useState(gameBoard);
  const [currentGamePiecesContext, setCurrentGamePiecesContext] =
    useState(gamePieces);

  return (
    <StrictMode>
      <gameBoardContext.Provider
        value={[currentGameBoard, setCurrentGameBoard]}
      >
        <currentPieceContext.Provider value={[currentPiece, setCurrentPiece]}>
          <gamePiecesContext.Provider
            value={[currentGamePiecesContext, setCurrentGamePiecesContext]}
          >
            <div className="app">
              <h1>It&apos;s QUARTO!</h1>
              <CurrentPiece>
                {currentPiece > -1 ? <Piece id={currentPiece} /> : ""}
              </CurrentPiece>
              <AvailablePieces />
              <GameBoard />
            </div>
          </gamePiecesContext.Provider>
        </currentPieceContext.Provider>
      </gameBoardContext.Provider>
    </StrictMode>
  );
};

export default App;
