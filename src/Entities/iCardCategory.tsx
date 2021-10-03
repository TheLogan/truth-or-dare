import eCard from "./eCard";

export interface iCardCategory {
  cards: eCard[];
  category: 'truth' | 'dare' | 'special';
  level: 0 | 1 | 2 | 3,
}