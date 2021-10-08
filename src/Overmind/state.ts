import eCard from "../Entities/eCard"

type State = {
  loadedCards: eCard[];
  cardDeck: eCard[];
  discardPile: eCard[];
  timeBetweenLevels: number,
  startTime: number,
  startLevel: number | null;
  endLevel: number | null;
}

export const state: State = {
  loadedCards: [],
  cardDeck: [],
  discardPile: [],
  timeBetweenLevels: 0,
  startTime: 0,
  startLevel: null,
  endLevel: null,
}