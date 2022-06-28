import { createContext } from "react";

export const gamePieces = {
  1: {
    played: false,
    characteristics: {
      color: "light",
      height: "short",
      shape: "circle",
      fill: "solid",
    },
  },
  2: {
    played: false,
    characteristics: {
      color: "light",
      height: "short",
      shape: "circle",
      fill: "hollow",
    },
  },
  3: {
    played: false,
    characteristics: {
      color: "light",
      height: "short",
      shape: "square",
      fill: "solid",
    },
  },
  4: {
    played: false,
    characteristics: {
      color: "light",
      height: "short",
      shape: "square",
      fill: "hollow",
    },
  },
  5: {
    played: false,
    characteristics: {
      color: "light",
      height: "tall",
      shape: "circle",
      fill: "solid",
    },
  },
  6: {
    played: false,
    characteristics: {
      color: "light",
      height: "tall",
      shape: "circle",
      fill: "hollow",
    },
  },
  7: {
    played: false,
    characteristics: {
      color: "light",
      height: "tall",
      shape: "square",
      fill: "solid",
    },
  },
  8: {
    played: false,
    characteristics: {
      color: "light",
      height: "tall",
      shape: "square",
      fill: "hollow",
    },
  },
  9: {
    played: false,
    characteristics: {
      color: "dark",
      height: "short",
      shape: "circle",
      fill: "solid",
    },
  },
  10: {
    played: false,
    characteristics: {
      color: "dark",
      height: "short",
      shape: "circle",
      fill: "hollow",
    },
  },
  11: {
    played: false,
    characteristics: {
      color: "dark",
      height: "short",
      shape: "square",
      fill: "solid",
    },
  },
  12: {
    played: false,
    characteristics: {
      color: "dark",
      height: "short",
      shape: "square",
      fill: "hollow",
    },
  },
  13: {
    played: false,
    characteristics: {
      color: "dark",
      height: "tall",
      shape: "circle",
      fill: "solid",
    },
  },
  14: {
    played: false,
    characteristics: {
      color: "dark",
      height: "tall",
      shape: "circle",
      fill: "hollow",
    },
  },
  15: {
    played: false,
    characteristics: {
      color: "dark",
      height: "tall",
      shape: "square",
      fill: "solid",
    },
  },
  16: {
    played: false,
    characteristics: {
      color: "dark",
      height: "tall",
      shape: "square",
      fill: "hollow",
    },
  },
};

const gamePiecesContext = createContext(gamePieces);

export default gamePiecesContext;
