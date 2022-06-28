import { createContext } from "react";

export const gameBoard = {
  1.1: null,
  1.2: null,
  1.3: null,
  1.4: null,
  2.1: null,
  2.2: null,
  2.3: null,
  2.4: null,
  3.1: null,
  3.2: null,
  3.3: null,
  3.4: null,
  4.1: null,
  4.2: null,
  4.3: null,
  4.4: null,
};

const gameBoardContext = createContext(gameBoard);

export default gameBoardContext;
