import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { iEditModal } from "./interfaces";

const EditReviewModal: React.FC<iEditModal> = (props) => {
  if (!props.selectedEdit) return <></>;
  const { category, description, isBottle, cardCount } = props.selectedEdit;

  return (
    <Modal open={props.selectedEdit != null} onClose={props.onClose}>
      <div className="modalCard">
        <Typography variant="h5">Card edit</Typography>
        <Divider style={{ marginBottom: "12px" }} />
        <div className={"gameCard " + category}>
          <TextField
            className={"content " + category}
            multiline
            maxRows={9}
            value={description}
            variant="standard"
          />
          <FormControlLabel
            control={<Checkbox checked={isBottle} />}
            label="Spin Bottle?"
            labelPlacement="end"
          />
        </div>
        <TextField
          value={cardCount}
          label="Amount in game"
          style={{ margin: "16px 0px" }}
        />
        <Grid container direction="row" justifyContent="space-between">
          <Button variant="contained" onClick={props.onReject}>Reject</Button>
          <Button variant="contained" onClick={props.onAccept}>Accept</Button>
        </Grid>
      </div>
    </Modal>
  );
};

export default EditReviewModal;
