import { useState } from "react";

const Piece = ({ characteristics, startPos }) => {
  const [position, setPosition] = useState(startPos);
  return (
    <div position={position} className={`game-piece ${characteristics}`}></div>
  );
};

export default Piece;
