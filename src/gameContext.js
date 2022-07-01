import { createContext } from "react";

export const initialGameContext = {
  showAvailable: true,
  turnCount: 0,
  turnPhase: 2, // there are only 2 phases. We start on 2nd phase because that's when we select a piece
  currentPlayer: 2, // start with player 2 selecting a piece for player one
  gameState: "active", // options: active, win, or draw
};

const gameContext = createContext(initialGameContext);

export default gameContext;
