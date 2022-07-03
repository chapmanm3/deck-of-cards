import axios from "axios";
import { Hand, Suits, Values, CodedValues, Card } from '../types'

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

const ValueCodes: {[Property in Values]: CodedValues} = {
  'ACE': 14,
  'KING': 13,
  'QUEEN': 12,
  'JACK': 11,
  '0': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2
}

const calculateBestHand = (hand: Hand) => {
  interface HandCalc {
    suits: {
      [key in Suits]: number
    };
    ranks: {
      [key in CodedValues]: number
    };
    pair: boolean;
    twoPair: boolean;
    set: boolean;
    four: boolean;
    straight: boolean;
    flush: boolean;
    highestCard: Card | null;

  }
  let handCalc: HandCalc = {
    suits: {
      HEARTS: 0,
      SPADES: 0,
      CLUBS: 0,
      DIAMONDS: 0
    },
    ranks: {
      14: 0,
      13: 0,
      12: 0,
      11: 0,
      10: 0,
      9: 0,
      8: 0,
      7: 0,
      6: 0,
      5: 0,
      4: 0,
      3: 0,
      2: 0
    },
    pair: false,
    twoPair: false,
    set: false,
    four: false,
    flush: false,
    straight: false,
    highestCard: null
  } 

  hand.forEach((card) => {
    handCalc.suits[card.suit]++
    handCalc.ranks[ValueCodes[card.value]]++
    if(handCalc.highestCard === null || (ValueCodes[card.value] > ValueCodes[handCalc.highestCard.value])){
      handCalc.highestCard = card   
    }
  })

  for(let suit in handCalc.suits){
    if(handCalc.suits[suit as Suits] === 5)
      handCalc.flush = true
  }

  let havePrev = false
  let straightCount = 0

  for(let rank in handCalc.ranks){
    if(handCalc.ranks[+rank as CodedValues] === 0 && havePrev){
      havePrev = false
      straightCount = 0
    }
    if(handCalc.ranks[+rank as CodedValues] === 1){
      if(havePrev){
        straightCount++
      }else{
        havePrev = true
      }
    }
    if(handCalc.ranks[+rank as CodedValues] === 2)
      if(handCalc.pair){
        handCalc.twoPair = true;
      } else {
        handCalc.pair = true
      }
    if(handCalc.ranks[+rank as CodedValues] === 3)
      handCalc.set = true
    if(handCalc.ranks[+rank as CodedValues] === 4)
      handCalc.four = true
    if(straightCount === 4)
      handCalc.straight = true
  }

  if(handCalc.flush){
    if(handCalc.straight){
      if(handCalc.ranks[14]){
        return 'Royal Flush'
      }
      return 'Straight Flush'
    }
    return 'Flush'
  }
  if(handCalc.four){
    return 'Four of a kind'
  }
  if(handCalc.set){
    if(handCalc.pair){
      return 'Full House'
    }
    return 'Three of a Kind'
  }
  if(handCalc.straight){
    return 'Straight'
  }
  if(handCalc.twoPair){
    return 'Two Pair'
  }
  if(handCalc.pair){
    return 'Pair'
  }
  return 'High Card'
}

export {
  getNewDeck,
  callShuffleDeck,
  get5Cards,
  calculateBestHand
}
