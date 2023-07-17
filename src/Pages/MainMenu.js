import { useState } from "react";
import { Link } from "react-router-dom";
import HelpMenu from "../Components/HelpMenu";
import "./_MainMenu.scss";

const MainMenu = () => {
  const [displayHelp, setDisplayHelp] = useState(false);
  return (
    <>
      {displayHelp ? (
        <>
        <HelpMenu />
        <div className="main-menu">
          <Link className="btn" to="/play-a-lil-round">play</Link>
          <button className="btn secondary" onClick={() => setDisplayHelp(!displayHelp)}>
              home
          </button>
        </div>
        </>
      ) : (
        <div className="main-menu">
          <h1>QUARTO!</h1>
          <Link className="btn" to="/play-a-lil-round">play</Link>
          <button className="btn secondary" onClick={() => setDisplayHelp(!displayHelp)}>
              learn
          </button>
        </div>
      )}
    </>
  );
};

export default MainMenu;
