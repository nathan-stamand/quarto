import { createContext } from "react";

export const initialGameContext = {
  showAvailable: true,
};

export const gameContext = createContext(initialGameContext);
