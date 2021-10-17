import React, { useEffect } from "react";
import { useActions, useAppState } from "../../../Overmind";

const EditBrowser = () => {
  const { getCardEdits } = useActions().admin;
  const { cardEdits } = useAppState();
  useEffect(() => {
    getCardEdits();
  }, []);

  useEffect(() => {
    console.log(`cardEdits`, cardEdits);
  }, [cardEdits])

  return <>Hello</>;
};

export default EditBrowser;
