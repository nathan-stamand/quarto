import currentPieceContext from "../currentPieceContext";
import { useContext } from "react/cjs/react.development";
import Piece from "./Piece";

const CurrentPiece = () => {
  const [currentPiece] = useContext(currentPieceContext);

  return (
    <div className="current-piece">
      <h2>Current Piece:</h2>
      {currentPiece > -1 ? <Piece id={currentPiece} /> : ""}
    </div>
  );
};

export default CurrentPiece;
