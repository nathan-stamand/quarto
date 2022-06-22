import { StrictMode } from "react";
import GameBoard from "./Components/GameBoard";
import GamePieces from "./Components/GamePieces";

const App = () => {
  return (
    <StrictMode>
      <div className="app">
        <h1>It&apos;s QUARTO</h1>
        <GamePieces />
        <GameBoard />
      </div>
    </StrictMode>
  );
};

export default App;
