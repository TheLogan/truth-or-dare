import { Context } from '.'
import eCard from '../Entities/eCard';

export const getCards = async (context: Context) => {
  const cards = (await context.effects.api.getCards()).data;
  context.state.loadedCards = cards;
  context.actions.shuffleDeck(cards);
}

export const shuffleDeck = (context: Context, cards: eCard[]) => {
  const cardArr: eCard[] = [];
  cards.forEach(card => { for (let i = 0; i < card.cardCount; i++) { cardArr.push(card); } });

  const shuffledDeck: eCard[] = [];
  while (cardArr.length > 0) {
    const index = Math.floor(Math.random() * cardArr.length);
    shuffledDeck.push(...cardArr.splice(index, 1));
  }
  context.state.cardDeck = shuffledDeck;
}

export const setStartLevel = (context: Context, val: number) => {
  if (!isNaN(val)) context.state.startLevel = val;
}

export const setEndLevel = (context: Context, val: number) => {
  if (!isNaN(val)) context.state.endLevel = val;
}

export const setTimeBetweenLevels = (context: Context, val: number) => {
  if (isNaN(val)) return;
  if(val > 15) val = 15;
  if(val < 3) val = 3;
  context.state.timeBetweenLevels = val;
}


// export const noArgAction = (context: Context) => {
//   // actions.noArgAction()
// }

// export const argAction = (context: Context, value: string) => {
//   // actions.argAction("foo"), requires "string"
// }

// export const noArgWithReturnTypeAction = (context: Context) => {
//   // actions.noArgWithReturnTypeAction(), with return type "string"
//   return 'foo'
// }

// export const argWithReturnTypeAction = (context: Context, value: string) => {
//   // actions.argWithReturnTypeAction("foo"), requires "string" and returns "string"
//   return value + '!!!'
// }

// // The onInitialize action
// export const onInitializeOvermind = (context: Context, instance: Overmind<Context>) => {

// }