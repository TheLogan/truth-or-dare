export default interface eCard {
  id: number;
  isBottle: boolean;
  description: string;
  verified: boolean;
  cardCount: number;
  category: 'truth' | 'dare' | 'special'
  level: 0 | 1 | 2 | 3;
}