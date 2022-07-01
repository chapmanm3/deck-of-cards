import React, { useContext } from "react";
import { Hand, DeckContextType } from '../types'
import { DeckContext } from '../context/deckContext'

const HandView = () => {
  const { hand } = useContext(DeckContext) as DeckContextType

  return (
  <div>
    {
      hand &&
      hand.map((card) => <p>{card.code}</p>)
    }
  </div>
  )
  
}

export default HandView
