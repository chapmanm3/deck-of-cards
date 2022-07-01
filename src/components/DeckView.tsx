import React, { useContext, useEffect } from 'react'
import { Deck, DeckContextType } from '../types'
import { DeckContext } from '../context/deckContext'
import HandView from './HandView'

const DeckView = () => {
  const { deck, newDeck, shuffleDeck, drawFiveCards } = useContext(DeckContext) as DeckContextType

  useEffect(() => {
    newDeck()
  }, [])

  return (
    <div>
      <p>{deck?.deck_id}</p>
      <HandView/>
      <button onClick={newDeck}>New Deck</button>
      <button onClick={shuffleDeck}>Shuffle</button>
      <button onClick={drawFiveCards}>Draw</button>
    </div>
  )
}

export default DeckView
