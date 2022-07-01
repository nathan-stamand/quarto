import AvailablePieces from "../Components/AvailablePieces";
import GameBoard from "../Components/GameBoard";
import gameContext, { initialGameContext } from "../gameContext";
import gamePiecesContext, { initialGamePieces } from "../gamePieces";
import gameBoardContext, { initialGameBoard } from "../gameBoardContext";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Game = () => {
  const [currentGameContext, setGameContext] = useContext(gameContext);
  const [, setInitialGamePieces] = useContext(gamePiecesContext);
  const [, setInitialGameBoard] = useContext(gameBoardContext);

  const resetGame = () => {
    setGameContext(initialGameContext);
    setInitialGameBoard(initialGameBoard);
    setInitialGamePieces(initialGamePieces);
  };
  return (
    <div className="game-screen">
      {currentGameContext.gameState == "active" ? (
        <>
          <AvailablePieces />
          <GameBoard />
        </>
      ) : (
        <Modal id="game-over">
          <div className="game-over">
            {currentGameContext.gameState == "win" ? (
              <h2>PLAYER {currentGameContext.currentPlayer} WINS!</h2>
            ) : (
              <h2>DRAW!</h2>
            )}
            <div className="main-menu__item">
              <button onClick={() => resetGame()}>Play Again?</button>
            </div>
            <div className="main-menu__item">
              <Link to="/">Main Menu</Link>
            </div>
            <div className="main-menu__item">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/nathan-stamand/quarto"
              >
                See the Code
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Game;
