import { CSSProperties, useEffect, useState } from "react";
import { randomRange } from "../utils/utils";
import { iBottleRotation } from "./interfaces";

const BottleRotation: React.FC<iBottleRotation> = (props) => {
  // const [rotation] = useState(getRotation());
  // const [timing] = useState(randomRange(2, 3) * 1000);
  
  useEffect(() => {
    if(props.rotate === true) {
      setTimeout(() => {
        props.onDone();
      }, props.timing);
    }
  }, [props.rotate])

  
  const style: CSSProperties = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: props.rotate ?
      `rotate(${props.rotation}deg)` :
      `rotate(0deg)`,
    transition: `transform ${props.timing}ms`,
    width: '100%'
  }

  return <span style={style}>
        {props.children}
  </span>
}


export default BottleRotation;