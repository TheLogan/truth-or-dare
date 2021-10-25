import { Context } from '..'
import eCard from '../../Entities/eCard';
import { shuffleCards } from '../../utils/utils';

export const getCards = async (context: Context) => {
  const cards = (await context.effects.api.getCards()).data;
  context.state.loadedCards = cards;
  context.actions.game.shuffleDeck(cards);
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

export const setStartTime = (context: Context) => {
  context.state.startTime = new Date().getTime();
}

export const nextCard = (context: Context, val: "truth" | "dare") => {
  let selected: null | eCard = null;
  let deck = context.state.cardDeck.map(x => { return { ...x } })
  let discard = context.state.discardPile.map(x => { return { ...x } });
  let cardsSinceLastSpecial = context.state.cardsSinceLastSpecial;

  const levelTime = Number(context.state.timeBetweenLevels) * 1000; //FIXME: Current level is way off!!!
  const timeDiff = new Date().getTime() - context.state.startTime;
  const levels = levelTime / timeDiff;
  const currentLevel = Math.floor(levels) + Number(context.state.startLevel);

  const findIndex = () => deck.findIndex(x => (x.category === val || (x.category === 'special' && cardsSinceLastSpecial > 4)) && x.level <= currentLevel);

  let selectedIndex = -1;
  let attempts = 0;
  while(selectedIndex < 0 && attempts < 5) {
    selectedIndex = findIndex();
    if(selectedIndex < 0) {
      discard.push(...deck);
      deck = shuffleCards(discard);
      console.log('shuffling');
      
    }
    attempts++;
  }
  if(selectedIndex < 0) throw new Error('card index is less than 0');

  console.log('selected', deck[selectedIndex]);
  console.log('level', currentLevel);
  

  const discarded = deck.splice(0, selectedIndex);
  selected = deck.splice(0, 1)[0];
  discard.push(...discarded);
  
  if(selected.category === 'special') context.state.cardsSinceLastSpecial = 0;
  else context.state.cardsSinceLastSpecial += 1;

  context.state.cardDeck = deck;
  context.state.currentCard = selected;
  context.state.discardPile = discard;
  console.log(`deck`, deck);
  console.log(`discard`, discard);


  // if(context.state.cardDeck.length < 1) {
  //   // Do the shuffle;
  // }

  // const cardIndex = context.state.cardDeck.findIndex(x => x.category === 'special' || x.category === val);
  // context.state.currentCard = context.state.cardDeck.splice(cardIndex, 1)[0];
}

export const discardSelected = (context: Context) => {
  if (!context.state.currentCard) return;
  const discard = context.state.discardPile.map(x => { return { ...x } });
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