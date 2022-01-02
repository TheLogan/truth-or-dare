import eCard from "../../Entities/eCard";

export interface iCard {
  card: eCard;
  draggable?: boolean;
  onClick?: (card: eCard) => void;
  cardExit?: () => void;
  cardState?: eCardState;
  onCardStateChange?: (state: eCardState) => void;
}

export enum eCardState {unTouched, bottleNotSpun, bottleSpinning, done};