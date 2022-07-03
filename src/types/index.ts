export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export type Suits = 'HEARTS' | 'SPADES' | 'CLUBS' | 'DIAMONDS';
export type Values = 'ACE' | 'KING' | 'QUEEN' | 'JACK' | '0' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2';
export type CodedValues = 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2;

export interface Card {
  image: string;
  value: Values;
  suit: Suits;
  code: string
}
export type Hand = Array<Card>

export interface DeckContextType {
  deck: Deck | null;
  hand: Hand | null;
  bestHand: string | null;
  lastTenHands: Hand[] | null;
  newDeck: () => void;
  shuffleDeck: () => void;
  drawFiveCards: () => void;
  getBestHand: () => void;
  setHand: (arg0: Hand) => void
}
