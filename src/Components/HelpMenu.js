import { initialGamePieces } from "../gamePieces";
import Piece from "./Piece";
import { v4 as uuidv4 } from "uuid";
import "./HelpMenu.css";

const winningCombos = [
  [12, 8, 14, 2],
  [3, 11, 4, 7],
  [9, 11, 12, 16],
];

const HelpMenu = () => {
  return (
    <div className="help-menu">
      <h2>Need a lil help, eh?</h2>
      <p>
        The easiest way to explain Quarto to a newbie is to relate it to a more
        universal game. Like tic-tac-toe. The only difference is that instead of
        placing X&apos;s or O&apos;s, you place pieces, and the pieces have
        different physical (in this case, virtual) attributes.
      </p>
      <p>These attributes are:</p>
      <ul>
        <li>Height** (tall or short)</li>
        <li>Color (light or dark)</li>
        <li>Fill (solid or hollow)</li>
        <li>Shape (circle or square)</li>
      </ul>
      <p>
        So, similar to Tic-Tac-Toe, we win by getting a complete row. But in
        Quarto, there are four places per row and column rather than three.
      </p>
      <p>
        And, you&apos;ll notice that no two pieces are completely the same in
        Quarto. See for yourself.
      </p>
      <p>
        <small>
          **Note that because of the uh...angle...that you&apos;re looking at
          the board, the &quot;tall&quot; pieces appear bigger in general.
        </small>
      </p>
      <div className="display-pieces">
        {Object.keys(initialGamePieces).map((el) => {
          return (
            <div key={uuidv4()} className="piece-container">
              <Piece id={el} />
            </div>
          );
        })}
      </div>
      <h2>So, what does winning look like?</h2>
      <p>
        Well, there&apos;s a bunch of combinations. But here&apos;s an example:
      </p>
      <div className="display-pieces">
        {winningCombos[0].map((el) => {
          return (
            <div key={uuidv4()} className="piece-container">
              <Piece id={el} />
            </div>
          );
        })}
      </div>
      <p>
        As you can see, these are not identical pieces. But, they share the{" "}
        <strong>hollow</strong> trait, and that&apos;s enough to do it!
      </p>
      <p>These would also work:</p>
      <div className="display-pieces">
        {winningCombos[1].map((el) => {
          return (
            <div key={uuidv4()} className="piece-container">
              <Piece id={el} />
            </div>
          );
        })}
      </div>
      <p>
        The above combo works because of the shared <strong>square</strong>{" "}
        trait, and the below works because of the shared <strong>dark</strong>{" "}
        trait
      </p>
      <div className="display-pieces">
        {winningCombos[2].map((el) => {
          return (
            <div key={uuidv4()} className="piece-container">
              <Piece id={el} />
            </div>
          );
        })}
      </div>
      <p>
        Just like in Tic-Tac-Toe, you can win using a combo like this by getting
        a full <strong>row</strong>, <strong>column</strong>, or{" "}
        <strong>a diagonal.</strong>
      </p>
      <h2>The twist:</h2>
      <p>You don&apos;t choose your own pieces in Quarto.</p>
      <h2>
        <em>
          I REPEAT. YOU DO NOT CHOOSE YOUR OWN PIECES IN THIS GAME WE CALL
          QUARTO.
        </em>
      </h2>
      <p>
        Your opponent will choose your piece. So for the first turn, Player Two
        will choose the piece Player One uses, then hand it off to Player One to
        place it.
      </p>
      <p>
        Then, Player One chooses Player Two&apos;s piece, and the cycle goes on
        from there.
      </p>
      <h2>And that&apos;s it!</h2>
      <p>
        Grab a partner to play against and click the button below to get
        started.
      </p>
    </div>
  );
};

export default HelpMenu;
