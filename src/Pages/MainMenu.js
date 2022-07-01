import { useState } from "react";
import { Link } from "react-router-dom";
import HelpMenu from "../Components/HelpMenu";
import "./MainMenu.css";

const MainMenu = () => {
  const [displayHelp, setDisplayHelp] = useState(false);
  return (
    <div className="main-menu">
      <h1>quarto</h1>

      {displayHelp ? (
        <HelpMenu />
      ) : (
        <>
          <h2>How do you feel about playing Quarto?</h2>

          <div className="main-menu__item">
            <button onClick={() => setDisplayHelp(!displayHelp)}>
              I Have Little to No Idea What I&apos;m Doing.
            </button>
          </div>
        </>
      )}
      <div className="main-menu__item">
        <Link to="/play-a-lil-round">I&apos;m Ready to PLAY!</Link>
      </div>
    </div>
  );
};

export default MainMenu;
