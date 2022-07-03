import React, {useContext} from 'react'
import { DeckContextType } from '../types'
import { DeckContext } from '../context/deckContext'

const LastTenHandsView = () => {
  const { lastTenHands, setHand } = useContext(DeckContext) as DeckContextType

  return (
    <div>
      { lastTenHands && lastTenHands.map((hand, idx) => 
        <div style={{display: 'flex', flexDirection: 'row', cursor: 'pointer'}} onClick={() => setHand(hand)} key={idx}>
          {idx + 1}: {hand && hand.map((card, idx) => 
            <div key={idx}> {card.code}|</div>
          )}
        </div>
      )}
    </div>
  )
}

export default LastTenHandsView
