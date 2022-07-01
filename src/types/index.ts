export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export interface Card {
  image: string;
  value: string;
  suit: string;
  code: string
}
export type Hand = Array<Card>

export interface DeckContextType {
  deck: Deck | null;
  hand: Hand | null;
  newDeck: () => void;
  shuffleDeck: () => void;
  drawFiveCards: () => void;
}
