import axios from "axios";

const getNewDeck = async () => {
  const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1') 
  return response.data
}

const callShuffleDeck = async (deckID: string) => {
  const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/?remaining=true`)
  return response.data
}

const get5Cards = async (deckID: string) => {
  const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=5`)
  return response.data
}

export {
  getNewDeck,
  callShuffleDeck,
  get5Cards
}
