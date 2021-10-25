import eCard, { eAdminCard, eCardEdit } from "../Entities/eCard"

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
  login: {token?: string, role?: 'ADMIN' | 'USER', error?: string}
  cardEdits: eCardEdit[];
  cardsSinceLastSpecial:number;
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
  login: {},
  cardEdits: [],
  cardsSinceLastSpecial: 0
}