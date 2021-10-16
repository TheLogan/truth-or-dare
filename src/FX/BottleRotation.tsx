import { CSSProperties, useEffect } from "react";
import { iBottleRotation } from "./interfaces";

const BottleRotation: React.FC<iBottleRotation> = (props) => {
  useEffect(() => {
    if (props.rotate === true) {
      setTimeout(() => {
        props.onDone();
      }, props.timing + 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.rotate]);

  const style: CSSProperties = {
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: props.rotate ? `rotate(${props.rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${props.timing}ms`,
    width: "100%",
  };

  return <span style={style}>{props.children}</span>;
};

export default BottleRotation;
