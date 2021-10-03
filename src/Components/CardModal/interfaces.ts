import eCard from "../../Entities/eCard";

export default interface iCardModal {
  selectedCard: null | eCard;
  onClose: () => void;
}