export default interface eCard {
  id: number;
  isBottle: boolean;
  description: string;
  verified: boolean;
  cardCount: number;
  category: Categories
  level: 0 | 1 | 2 | 3;
}

export interface eAdminCard extends eCard {
  id: 3;
  state: CardState;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface eCardEdit {
  id: number,
  isBottle: boolean,
  description: string,
  cardCount: number,
  level: number,
  category: Categories,
  state: editState,
  createdAt: Date,
  updatedAt: Date,
  originalCard: eAdminCard | undefined,
  verified:boolean
  author: any,
}

export type Categories ='truth' | 'dare' | 'special';

export enum editState {
  Accepted,
  SuggestedEdit,
  SuggestDelete,
  NewCard,
  Rejected,
}

export enum CardState {
  Included,
  Deleted,
}