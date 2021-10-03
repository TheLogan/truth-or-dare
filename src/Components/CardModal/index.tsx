import { Button, Checkbox, Divider, FormControlLabel, Grid, MenuItem, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import iCardModal from "./interfaces";
import './style.scss'

const CardModal: React.FC<iCardModal> = (props) => {
  const [description, setDescription] = useState(props.selectedCard?.description);
  const [useBottle, setUseBottle] = useState(props.selectedCard?.isBottle)
  const [level, setLevel] = useState(props.selectedCard?.level);
  const [category, setCategory] = useState(props.selectedCard?.category);
  const [amountInGame, setAmountInGame] = useState(props.selectedCard?.cardCount);

  function handleLevel(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const val = Number(e.target.value);
    if (val === 0 || val === 1 || val === 2 || val === 3) setLevel(val);
  }
  function handleCategory(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const val = e.target.value;
    if (val === 'truth' || val === 'dare' || val === 'special') setCategory(val);
  }
  function handleAmount(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) { 
    const val = Number(e.target.value);
    if(e.target.value === '') return setAmountInGame(0);
    if(isNaN(val)) return;
    if(val <1 || val > 7) return;
    setAmountInGame(val);
  }

  function renderLevelAndCat() {
    return (
      <Grid container direction="row" justifyContent="space-evenly">
        <TextField label="Level" value={level} select onChange={handleLevel}>{
          [0, 1, 2, 3].map(val =>
            <MenuItem key={"level" + val} value={val}>
              {val}
            </MenuItem>)
        }</TextField>
        <TextField label="Category" value={category} select onChange={handleCategory}>{
          ['truth', 'dare', 'special'].map(val =>
            <MenuItem key={"category" + val} value={val}>
              {val}
            </MenuItem>)
        }</TextField>
      </Grid>
    )
  }

  return <Modal open={props.selectedCard != null} onClose={props.onClose}>
    <div className="modalCard">
      <Typography variant="h5">Edit card</Typography>
      <Divider style={{ marginBottom: '12px' }} />
      {renderLevelAndCat()}
      <div className={"gameCard " + category}>
        <TextField
          className={"content " + category}
          multiline
          maxRows={12}
          value={description}
          onChange={e => setDescription(e.target.value)}
          variant="standard"
        />
        <FormControlLabel
          control={<Checkbox checked={useBottle} onChange={e => setUseBottle(e.target.checked)} />}
          label="Spin Bottle?"
          labelPlacement="end"
        />
      </div>
      <TextField value={amountInGame} label="Amount in game" style={{ margin: '16px 0px' }} onChange={handleAmount} />
      <Grid container direction="row" justifyContent="space-between">
        <Button variant="contained">Cancel</Button>
        <Button variant="contained">Save</Button>
      </Grid>
    </div>
  </Modal>
}


export default CardModal;