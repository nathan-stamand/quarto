import AvailablePieces from "../Components/AvailablePieces";
import GameBoard from "../Components/GameBoard";

const Game = () => {
  return (
    <div className="game-screen">
      <AvailablePieces />
      <GameBoard />
    </div>
  );
};

export default Game;
