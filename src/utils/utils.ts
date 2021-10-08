import eCard from "../Entities/eCard";
import { getAge, getDirection, getLeastMost, getTitle, oneOrTwoPieces, wordEnding } from "./randomizers";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const randomRange = (min: number = 0, max: number = 10) => Math.floor(Math.random() * (max - min + 1) + min)

export const shuffleCards = (cards: eCard[]) => {
  const cardArr: eCard[] = [];
  cards.forEach(card => { for (let i = 0; i < card.cardCount; i++) { cardArr.push(card); } });

  const shuffledDeck: eCard[] = [];
  while (cardArr.length > 0) {
    const index = Math.floor(Math.random() * cardArr.length);
    shuffledDeck.push(...cardArr.splice(index, 1));
  }
  return shuffledDeck;
}


export const getRotation = () => {
  let rot = randomRange(0, 360);
  return rot + (360 * randomRange(3, 6));
}

export const formatCardText = (description: string) => {
  const rangeReg = /\[\d{1,2}..\d{1,2}\]/g;
  
  let descr = description;
  let ranges = rangeReg.exec(descr);
  if(!ranges) console.log(`descr`, descr)
  if (ranges) {
    for (const ra of ranges) {
      let str = ra.replace('[', '');
      str = str.replace(']', '');
      const [min, max] = str.split('..');

      descr = descr.replace(ra, Math.round(randomRange(Number(min), Number(max))).toString())
    }
  }

  
  descr = descr.replace(pieces, oneOrTwoPieces())
  descr = descr.replace(direction, getDirection());
  descr = descr.replace(wordEndings, wordEnding());
  descr = descr.replace(title, getTitle());
  descr = descr.replace(age, getAge());
  descr = descr.replace(leastMost, getLeastMost());
  return descr;
}



const spinBottle = "*spinBottle*"; //FIXME: Should not be in the text
const pieces = "*12pieces*" // for manipulating an amount of pieces of clothing
const direction = "*direction*";
const wordEndings = "*wordEnding*" // "For the next two turns you must end every sentence with *wordEnding*, if you forget you must drink"
const title = "*title*" // "From now on all other players must refer to you as *title*, if they forget they must *drinkStrip*"
const age = "*youngOld*" // The *youngOld* player must drink" youngest/oldest
// "The person with the *age* cellphone drinks"
const leastMost = "*leastMost*" // "The player wearing the *leastMost* clothes must drink"
const category = "*category*"; // "Players, starting with you, must name a *brandName* within the category of *category*, first to fail drinks"

/* IDEAS */
    // Countdown function