export default interface iCard {
  isBottle: boolean;
  description: string;
  isLoganSafe: boolean;
  cardCount: number;
  category: 'truth' | 'dare' | 'special'
  level: 0 | 1 | 2 | 3;
}

export interface iCardSerialized {
  isBottle: boolean;
  description: string;
  isLoganSafe: boolean;
  cardCount: number;
}