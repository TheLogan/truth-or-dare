import eCard from "../Entities/eCard";
import {
  brandCategory,
  drinkOrStrip,
  getAge,
  getDirection,
  getLeastMost,
  getTitle,
  oneOrTwoPieces,
  wordEnding,
} from "./randomizers";
import 'react-app-polyfill/stable'

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const randomRange = (min: number = 0, max: number = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const shuffleCards = (cards: eCard[]) => {
  const cardArr: eCard[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.cardCount; i++) {
      cardArr.push(card);
    }
  });

  const shuffledDeck: eCard[] = [];
  while (cardArr.length > 0) {
    const index = Math.floor(Math.random() * cardArr.length);
    shuffledDeck.push(...cardArr.splice(index, 1));
  }
  return shuffledDeck;
};

export const getRotation = () => {
  let rot = randomRange(0, 360);
  return rot + 360 * randomRange(3, 6);
};

export const formatCardText = (description: string) => {
  const rangeReg = /\[\d{1,2}..\d{1,2}\]/g;

  let descr = description;
  let ranges = rangeReg.exec(descr);
  if (ranges) {
    for (const ra of ranges) {
      let str = ra.replace("[", "");
      str = str.replace("]", "");
      const [min, max] = str.split("..");
      descr = descr.replace(
        ra,
        Math.round(randomRange(Number(min), Number(max))).toString()
      );
    }
  }


  descr = descr.replaceAll("*12pieces*", oneOrTwoPieces());
  descr = descr.replaceAll("*direction*", getDirection());
  descr = descr.replaceAll("*wordEnding*", wordEnding());
  descr = descr.replaceAll("*title*", getTitle());
  descr = descr.replaceAll("*youngOld*", getAge());
  descr = descr.replaceAll("*leastMost*", getLeastMost());
  descr = descr.replaceAll("*drinkStrip*", drinkOrStrip());
  const [brandName, category] = brandCategory();
  descr = descr.replaceAll("*brandName*", brandName);
  descr = descr.replaceAll("*category*", category);
  return descr;
};

/* IDEAS */
// Countdown function
