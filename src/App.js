import Game from "./Pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from "./Components/Provider";
import MainMenu from "./Pages/MainMenu";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/play-a-lil-round" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
