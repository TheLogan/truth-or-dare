import eCard from "../../Entities/eCard";

export interface iCard {
  card: eCard;
  onClick?: (card: eCard) => void;
}