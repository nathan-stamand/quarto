import currentPieceContext from "../currentPieceContext";
import { useContext } from "react";
import Piece from "./Piece";

const CurrentPiece = () => {
  const [currentPiece] = useContext(currentPieceContext);

  return (
    <div className="current-piece">
      <h3>Current Piece</h3>
      {currentPiece > -1 ? <Piece id={currentPiece} /> : ""}
    </div>
  );
};

export default CurrentPiece;
