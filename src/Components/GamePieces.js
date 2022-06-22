import Piece from "./Piece";

const GamePieces = () => {
  const gamePieces = [
    "light short square hollow",
    "light short square solid",
    "light short circle hollow",
    "light short circle solid",
    "light tall square hollow",
    "light tall square solid",
    "light tall circle hollow",
    "light tall circle solid",

    "dark short square hollow",
    "dark short square solid",
    "dark short circle hollow",
    "dark short circle solid",
    "dark tall square hollow",
    "dark tall square solid",
    "dark tall circle hollow",
    "dark tall circle solid",
  ];

  return (
    <div className="game-pieces__container">
      {gamePieces.map((characteristics, index) => (
        <Piece
          key={characteristics}
          startPosition={index}
          characteristics={characteristics}
        />
      ))}
    </div>
  );
};

export default GamePieces;
