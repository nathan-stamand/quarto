import { initialGamePieces } from "./gamePieces";

let possibleWinningCombos = [
  [1.1, 1.2, 1.3, 1.4],
  [2.1, 2.2, 2.3, 2.4],
  [3.1, 3.2, 3.3, 3.4],
  [4.1, 4.2, 4.3, 4.4],

  [1.1, 2.1, 3.1, 4.1],
  [1.2, 2.2, 3.2, 4.2],
  [1.3, 2.3, 3.3, 4.3],
  [1.4, 2.4, 3.4, 4.4],

  [1.1, 2.2, 3.3, 4.4],
  [1.4, 2.3, 3.2, 4.1],
];

const checkWin = (currentGameBoard) => {
  let win = false;

  const checkCombinationForWin = (row) => {
    let characteristics = Object.values(row[0].characteristics);
    for (let i = 0; i < 4; i++) {
      characteristics = Object.values(row[i].characteristics).filter((el) =>
        characteristics.includes(el)
      );
    }
    return characteristics;
  };

  possibleWinningCombos.forEach((line, idx) => {
    const lineOfPieces = line.map((pos) => {
      return initialGamePieces[currentGameBoard[pos]] || null;
    });
    if (!lineOfPieces.includes(null)) {
      const sharedChars = checkCombinationForWin(lineOfPieces, idx);
      if (sharedChars.length) {
        win = true;
      } else {
        possibleWinningCombos.splice(idx, 1);
      }
    }
  });

  return win;
};

export default checkWin;
