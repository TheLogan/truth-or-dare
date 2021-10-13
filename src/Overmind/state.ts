import eCard, { eAdminCard } from "../Entities/eCard"

type State = {
  loadedCards: eCard[];
  adminCards: eAdminCard[];
  cardDeck: eCard[];
  discardPile: eCard[];
  timeBetweenLevels: number | '',
  startTime: number,
  startLevel: number | null;
  endLevel: number | null;
  currentCard: null | eCard;
  login: {token: string, error: string}
}

export const state: State = {
  loadedCards: [],
  adminCards: [],
  cardDeck: [],
  discardPile: [],
  timeBetweenLevels: '',
  startTime: 0,
  startLevel: null,
  endLevel: null,
  currentCard: null,
  login: {token: '', error: ''}
}