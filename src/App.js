import AvailablePieces from "./Components/AvailablePieces";
import GameBoard from "./Components/GameBoard";
import { StrictMode } from "react";
import Provider from "./Components/Provider";

const App = () => {
  return (
    <StrictMode>
      <Provider>
        <div className="app">
          <h1>It&apos;s QUARTO!</h1>
          <AvailablePieces />
          <GameBoard />
        </div>
      </Provider>
    </StrictMode>
  );
};

export default App;
