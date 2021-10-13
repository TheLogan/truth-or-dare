import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import CardModal from '../../../Components/CardModal';
import { eAdminCard } from '../../../Entities/eCard';
import { useActions, useAppState } from '../../../Overmind';
import './style.scss'

const CardBrowser: React.FC = (props) => {
  const { adminCards } = useAppState();
  const { loadAdminCards } = useActions().admin;
  const [selectedCard, setSelectedCard] = useState<null | eAdminCard>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadAdminCards() }, [])

  const truthCards: eAdminCard[] = adminCards.filter(card => card.category === "truth");
  const dareCards: eAdminCard[] = adminCards.filter(card => card.category === 'dare');
  const specialCards: eAdminCard[] = adminCards.filter(card => card.category === 'special');


  const renderDataTable = (cards: eAdminCard[], variant: 'truth' | 'dare' | 'special') => {
    return <TableContainer component={Paper}>
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
              onClick={() => setSelectedCard(card)}
              key={card.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={`tableRow ${variant}`}
            >
              <TableCell component="th" scope="row">{card.id}</TableCell>
              <TableCell align="right">{card.description}</TableCell>
              <TableCell align="right">{card.level}</TableCell>
              <TableCell align="right">{card.isBottle ? <CheckBox /> : <CheckBoxOutlineBlank />}</TableCell>
              <TableCell align="right">{card.verified}</TableCell>
              <TableCell align="right">{card.cardCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  }

  return (
    <>
      <h1>Truth cards</h1>
      {renderDataTable(truthCards, 'truth')}

      <h1>Dare cards</h1>
      {renderDataTable(dareCards, 'dare')}

      <h1>Special cards</h1>
      {renderDataTable(specialCards, 'special')}


      {/* <Grid container direction="column" > */}
      {/* {cardCats} */}
      {/* </Grid> */}


      {selectedCard &&
        <CardModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
      }
    </>
  )
}

export default CardBrowser;

