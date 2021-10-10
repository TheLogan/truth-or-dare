import eCard from "../../Entities/eCard";

export interface iCard {
  card: eCard;
  draggable?: boolean;
  onClick?: (card: eCard) => void;
  cardExit?: () => void;
  cardState?: cardState;
  onCardStateChange?: (state: cardState) => void;
}

export type cardState = 'unTouched' | 'bottleNotSpun' | 'bottleSpinning' | 'done';