export default interface eCard {
  id: number;
  isBottle: boolean;
  description: string;
  verified: boolean;
  cardCount: number;
  category: 'truth' | 'dare' | 'special'
  level: 0 | 1 | 2 | 3;
}

export interface eAdminCard extends eCard {
  id: 3;
  state: 0; //CAn't remember what this is xD
  createdAt: string | Date;
  updatedAt: string | Date;
}