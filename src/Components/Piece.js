/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { gamePieces } from "../gamePieces";

const Piece = ({ id, selectPiece }) => {
  const { color, height, shape, fill } = gamePieces[id].characteristics;

  return (
    <div
      id={id}
      onClick={(e) => selectPiece(e)}
      className={`game-piece ${color} ${fill} ${height} ${shape}`}
    ></div>
  );
};

Piece.defaultProps = {
  selectPiece: (e) => e,
};

export default Piece;
