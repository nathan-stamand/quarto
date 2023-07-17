import { initialGamePieces } from '../../gamePieces'
import Piece from '../Piece'
import { v4 as uuidv4 } from 'uuid'
import './_HelpMenu.scss'

const winningCombos = [
  [12, 8, 14, 2],
  [3, 11, 4, 7],
  [9, 11, 12, 16],
]

const HelpMenu = () => {
  return (
    <div className='help-menu'>
      <h1>Don't Worry. Quarto is a Simple Game.</h1>
      <p>
        It's a two-player competitive strategy game that can basically be broken
        down to tic-tac-toe, but with 16 spaces on the board and different
        pieces.
      </p>
      <p>
        The main complication comes from the pieces we use to play Quarto.
        Here's every piece in the game. Note that they're all unique.
      </p>
      <div className='display-pieces'>
        {Object.keys(initialGamePieces).map((el) => {
          return (
            <div key={uuidv4()} className='piece-container'>
              <Piece id={el} />
            </div>
          )
        })}
      </div>
      <p>
        You seeing some patterns here? We're dealing with four sets of traits. A
        piece can be either:
      </p>
      <ul>
        <li>orange or red</li>
        <li>tall or short</li>
        <li>round or square</li>
        <li>solid or hollow</li>
      </ul>
      <h2>Now for the easy part. Winning!</h2>
      <p>
        No, really. There's tons of ways to win the game. It's as easy as lining
        up four of a kind (hence, <em>quart</em>o). But the kind can be ANY
        kind. Four orange pieces is a win, four hollow pieces, four round pieces
        -- whatever you can get!
      </p>
      <h2>There is a twist though.</h2>
      <p>
        It's all well and good to pick out four pieces with the same trait, but
        Quarto does have a catch. Your opponent chooses your piece for you.
      </p>
      <p>
        That means that the loser will choose the piece that defeats them.
        Pretty sick, pretty twisted, but also pretty fun. Now let's check out a
        few winning combos. See if you can tell why these would win.
      </p>
      <h3>Combo 1:</h3>
      <div className='display-pieces'>
        {winningCombos[0].map((el) => {
          return (
            <div key={uuidv4()} className='piece-container'>
              <Piece id={el} />
            </div>
          )
        })}
      </div>

      <h3>Combo 2:</h3>
      <div className='display-pieces'>
        {winningCombos[1].map((el) => {
          return (
            <div key={uuidv4()} className='piece-container'>
              <Piece id={el} />
            </div>
          )
        })}
      </div>

      <h3>Combo 3:</h3>
      <div className='display-pieces'>
        {winningCombos[2].map((el) => {
          return (
            <div key={uuidv4()} className='piece-container'>
              <Piece id={el} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HelpMenu
