import { Context } from '.'
import eCard from '../Entities/eCard';
import { shuffleCards } from '../utils/utils';

export const getCards = async (context: Context) => {
  const cards = (await context.effects.api.getCards()).data;
  context.state.loadedCards = cards;
  context.actions.shuffleDeck(cards);
}

export const shuffleDeck = (context: Context, cards: eCard[]) => {
  
  context.state.cardDeck = shuffleCards(cards);
}

export const setStartLevel = (context: Context, val: number) => {
  if (!isNaN(val)) context.state.startLevel = val;
}

export const setEndLevel = (context: Context, val: number) => {
  if (!isNaN(val)) context.state.endLevel = val;
}

export const setTimeBetweenLevels = (context: Context, val: number | string) => {
  if (val === '') {
    context.state.timeBetweenLevels = '';
    return;
  }
  let numVal = Number(val);
  if (isNaN(numVal)) return;
  if (numVal > 15) numVal = 15;
  if (numVal < 3) numVal = 3;
  context.state.timeBetweenLevels = numVal;
}

export const nextCard = (context: Context, val: "truth" | "dare") => {

  let selected: null | eCard = null;
  let deck = context.state.cardDeck.map(x => {return {...x}})
  // let deck = [...context.state.cardDeck];
  // let discard = [...context.state.discardPile]
  let discard = context.state.discardPile.map(x => {return {...x}});

  console.log('Card amount before: ',deck.length  + discard.length);

  while(selected === null) {
    if(deck.length < 1) {
      deck = shuffleCards(discard);
      discard = [];
    }
    
    const current = deck.splice(0,1)[0];
    
    if((current.category === 'special' || current.category === val)) {
      selected = current;
    } else {
      discard.push(current);
    }
  }

  console.log('Card amount: ',deck.length  + discard.length);

  context.state.cardDeck = deck;
  context.state.currentCard = selected;
  context.state.discardPile = discard;



  // if(context.state.cardDeck.length < 1) {
  //   // Do the shuffle;
  // }

  // const cardIndex = context.state.cardDeck.findIndex(x => x.category === 'special' || x.category === val);
  // context.state.currentCard = context.state.cardDeck.splice(cardIndex, 1)[0];
}

export const discardSelected = (context: Context) => {
  if(!context.state.currentCard) return;
  const discard = context.state.discardPile.map(x => {return {...x}});
  discard.push(context.state.currentCard);
  context.state.discardPile = discard;
  context.state.currentCard = null;
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