import React, { useState, ReactNode, useEffect } from 'react';
import { Deck, DeckContextType, Hand, Card } from '../types';
import { getNewDeck, callShuffleDeck, get5Cards, calculateBestHand } from '../utils/utils'

interface Props {
  children?: ReactNode;
}
export const DeckContext = React.createContext<DeckContextType | null>(null)

const DeckProvider: React.FC<Props> = ({ children }) => {
  const [ deck, setDeck ] = useState<Deck | null>(null)
  const [ hand, setHand ] = useState<Hand | null>(null)
  const [ bestHand, setBestHand ] = useState<string | null>(null)
  const [ pastHands, setPastHands ] = useState<Hand[]>([])
  const [ lastTenHands, setLastTenHands ] = useState<Hand[] | null>(null)



  const newDeck = async () => {
      const data = await getNewDeck()
      setHand(null)
      setBestHand(null)
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
    let tempHand
      if(deck){
        tempHand = await get5Cards(deck.deck_id) 
      }
    setPastHands([...pastHands, tempHand.cards])
    setBestHand(null)
    setHand(tempHand.cards)
  }

  const getBestHand = () => {
    if(hand)
      setBestHand(calculateBestHand(hand))
  }

  useEffect(() => {
    newDeck()
  }, [])

  useEffect(() => {
    if(pastHands.length > 10){
      setLastTenHands(pastHands.slice(pastHands.length - 10))
    }else{
      setLastTenHands(pastHands)
    }
    }, [pastHands])

    return <DeckContext.Provider value={{ deck, newDeck, shuffleDeck, drawFiveCards, hand, getBestHand, bestHand, lastTenHands, setHand }}>{children}</DeckContext.Provider>
}

export default DeckProvider
