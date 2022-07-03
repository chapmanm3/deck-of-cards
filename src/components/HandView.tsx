import React, { useContext } from "react";
import { Hand, DeckContextType } from '../types'
import { DeckContext } from '../context/deckContext'

const HandView = () => {
  const { hand } = useContext(DeckContext) as DeckContextType

  return (
  <div>
    {
      hand &&
      hand.map((card, idx) => <div key={idx}>{card.code}</div>)
    }
  </div>
  )
  
}

export default HandView
