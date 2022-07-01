import React, { useState, ReactNode, useEffect } from 'react';
import { Deck, DeckContextType, Hand, Card } from '../types';
import { getNewDeck, callShuffleDeck, get5Cards } from '../utils/utils'

interface Props {
  children?: ReactNode;
}
export const DeckContext = React.createContext<DeckContextType | null>(null)

const DeckProvider: React.FC<Props> = ({ children }) => {
  const [ deck, setDeck ] = useState<Deck | null>(null)
  const [ hand, setHand ] = useState<Hand | null>(null)

  const newDeck = async () => {
      const data = await getNewDeck()
      setDeck(data)
    } 
    
  const shuffleDeck = async () => {
    let newDeck
    if(deck){
        newDeck = await callShuffleDeck(deck.deck_id)
    }else{
        newDeck = await getNewDeck()
    }
    setDeck(newDeck)
  } 

  const drawFiveCards = async () => {
    let hand
      if(deck){
        hand = await get5Cards(deck.deck_id) 
      }
    setHand(hand.cards)
  }

  useEffect(() => {
    newDeck()
  }, [])

    return <DeckContext.Provider value={{ deck, newDeck, shuffleDeck, drawFiveCards, hand }}>{children}</DeckContext.Provider>
}

export default DeckProvider
