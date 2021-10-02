import { iCardSerialized } from "./iCard";

export interface iCardCategory {
  cards: iCardSerialized[];
  category: 'truth' | 'dare' | 'special';
  level: 0 | 1 | 2 | 3,
}