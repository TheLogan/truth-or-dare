import { eCardEdit } from "../../Entities/eCard";

export interface iEditModal {
  selectedEdit: undefined | eCardEdit;
  onClose: () => void;
  onReject: () => void;
  onAccept: () => void;
}