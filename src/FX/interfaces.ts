export interface iBoop {
  rotation:number;
  timing: number;
}

export interface iBottleRotation {
  rotate: boolean;
  rotation: number;
  timing: number;
  onDone: () => void;
}

export interface iDraggable {
  cardExit: () => void;
}