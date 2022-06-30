import Game from "./Pages/Game";
import { StrictMode } from "react";
import Provider from "./Components/Provider";

const App = () => {
  return (
    <StrictMode>
      <Provider>
        <Game />
      </Provider>
    </StrictMode>
  );
};

export default App;
