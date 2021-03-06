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
const replaceAll = require("string.prototype.replaceall");

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const randomRange = (min: number = 0, max: number = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const initialShuffle = (cards: eCard[]) => {
  const cardArr: eCard[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.cardCount; i++) {
      cardArr.push(card);
    }
  });

  const shuffledDeck: eCard[] = shuffleCards(cardArr);
  return shuffledDeck;
};

export const shuffleCards = (cards: eCard[]) => {
  const shuffledDeck: eCard[] = [];
  while (cards.length > 0) {
    const index = Math.floor(Math.random() * cards.length);
    shuffledDeck.push(...cards.splice(index, 1));
  }
  return shuffledDeck;
};

export const getRotation = () => {
  let rot = randomRange(0, 360);
  return rot + 360 * randomRange(3, 6);
};

export const getCurrentLevel = (startTime: number, startLevel: number, endLevel: number, timeBetweenLevels: number) => {
  const currentTime = new Date().getTime();
  const elapsedMs = (currentTime - startTime);
  const perLevelInMs = timeBetweenLevels * 60 * 1000;

  let currentLevel = Math.floor(elapsedMs / perLevelInMs) + startLevel;
  if(currentLevel > endLevel) currentLevel = endLevel;
  console.log(`currentLevel`, currentLevel);
  return currentLevel;
}

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
  replaceAll.shim();

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
