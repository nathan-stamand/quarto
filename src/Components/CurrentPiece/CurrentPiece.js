import currentPieceContext from '../../currentPieceContext'
import { useContext } from 'react'
import { initialGamePieces } from '../../gamePieces'
import Piece from '../Piece'
import './_CurrentPiece.scss'

const CurrentPiece = () => {
  const [currentPiece] = useContext(currentPieceContext)
  if (currentPiece < 0) return <></>

  var characteristics = initialGamePieces[currentPiece].characteristics;
  var charList = Object.keys(characteristics).map((key) => {
    return <li key={characteristics[key]}>{characteristics[key]}</li>
  })

  return (
    <div className='current-piece'>
      {currentPiece > -1 ? <Piece id={currentPiece} /> : ''}
      <ul className="current-piece__characteristics">
        {charList}
      </ul>
    </div>
  )
}

export default CurrentPiece
