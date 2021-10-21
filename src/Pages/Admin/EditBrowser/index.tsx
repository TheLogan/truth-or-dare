import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React, { useEffect } from "react";
import { eCardEdit } from "../../../Entities/eCard";
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

  const truthEdits = cardEdits.filter(edit => edit.category === "truth");
  const dareEdits = cardEdits.filter(edit => edit.category === "dare");
  const specialEdits = cardEdits.filter(edit => edit.category === "special");

  return(
    <>
      {renderDataTable(truthEdits, "truth")}
      {renderDataTable(dareEdits, "dare")}
      {renderDataTable(specialEdits, "special")}
    </>
  )

  // return <div>
  //   {cardEdits.map(card => {
  //     card.
  //     render
  //     return <></>
  //   })}
  // </div>;
};

export default EditBrowser;

const renderDataTable = (
  cards: eCardEdit[],
  variant: "truth" | "dare" | "special"
) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={`tableHead ${variant}`}>
            <TableCell>Id</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">spin bottle</TableCell>
            <TableCell align="right">verified</TableCell>
            <TableCell align="right">amount in game</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map((card) => (
            <TableRow
              // onClick={() => setSelectedCard(card)}
              key={card.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={`tableRow ${variant}`}
            >
              <TableCell component="th" scope="row">
                {card.id}
              </TableCell>
              <TableCell align="right">
                {
                // formatDescr
                  // ? formatCardText(card.description)
                  // : 
                  card.description
                  }
              </TableCell>
              <TableCell align="right">{card.level}</TableCell>
              <TableCell align="right">
                {card.isBottle ? <CheckBox /> : <CheckBoxOutlineBlank />}
              </TableCell>
                <TableCell align="right">{card.verified}</TableCell>
              <TableCell align="right">{card.cardCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};