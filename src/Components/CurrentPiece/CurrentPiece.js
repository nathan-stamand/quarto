import currentPieceContext from "../../currentPieceContext";
import { useContext } from "react";
import Piece from "../Piece";
import "./_CurrentPiece.scss";

const CurrentPiece = () => {
  const [currentPiece] = useContext(currentPieceContext);

  return (
    <div className="current-piece">
      {currentPiece > -1 ? <Piece id={currentPiece} /> : ""}
    </div>
  );
};

export default CurrentPiece;
