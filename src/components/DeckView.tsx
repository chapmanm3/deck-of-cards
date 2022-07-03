import React, { useContext, useEffect } from 'react'
import { Deck, DeckContextType } from '../types'
import { DeckContext } from '../context/deckContext'
import HandView from './HandView'
import LastTenHandsView from './LastTenHandsView'

const DeckView = () => {
  const { deck, newDeck, shuffleDeck, drawFiveCards, getBestHand, bestHand, lastTenHands } = useContext(DeckContext) as DeckContextType

  useEffect(() => {
    newDeck()
  }, [])

  return (
    <div>
      <button onClick={newDeck}>New Deck</button>
      <button onClick={shuffleDeck}>Shuffle</button>
      <button onClick={drawFiveCards}>Draw</button>
      <button onClick={getBestHand}>Best Hand</button>
      <p>{bestHand}</p>
      <HandView/>
      <LastTenHandsView/>
    </div>
  )
}

export default DeckView
