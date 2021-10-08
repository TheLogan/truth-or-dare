import { Button, Grid, MenuItem, TextField } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import Well from "../../Components/Well";
import { useActions, useAppState } from "../../Overmind";
import "./style.scss";

const GameSetup = () => {
  const { startLevel, endLevel, timeBetweenLevels } = useAppState();
  const actions = useActions();
  const history = useHistory();

  const [errors, setErrors] = React.useState({
    stLvlErr: false,
    endLvlErr: false,
    timeErr: false,
  });

  function levelStart() {
    const activeValues = [0, 1, 2, 3].filter((x) => !endLevel || x <= endLevel);
    return renderLevel(
      "start",
      startLevel,
      errors.stLvlErr,
      activeValues,
      actions.setStartLevel,
      () => setErrors({ ...errors, stLvlErr: false })
    );
  }
  function levelEnd() {
    const activeValues = [0, 1, 2, 3].filter(
      (x) => !startLevel || x >= startLevel
    );
    return renderLevel(
      "end",
      endLevel,
      errors.endLvlErr,
      activeValues,
      actions.setEndLevel,
      () => setErrors({ ...errors, endLvlErr: false })
    );
  }

  function startGame() {
    const stLvlErr = startLevel === null;
    const endLvlErr = endLevel === null;
    const timeErr =
      timeBetweenLevels === null ||
      timeBetweenLevels === '' ||
      timeBetweenLevels < 3 ||
      timeBetweenLevels > 15;
    setErrors({
      stLvlErr,
      endLvlErr,
      timeErr,
    });

    //TODO: Fix me
    if (!stLvlErr && !endLvlErr && !timeErr) history.push("/game/play");
  }

  function renderLevel(
    label: string,
    value: number | null,
    err: boolean,
    activeValues: number[],
    onChange: (val: number) => void,
    onFocus: () => void
  ) {
    return (
      <TextField
        select
        error={err}
        variant="filled"
        value={value}
        label={label}
        className="selecter"
        onChange={(e) => onChange(Number(e.target.value))}
        onFocus={onFocus}
      >
        <MenuItem
          value="0"
          disabled={activeValues.findIndex((x) => x === 0) === -1}
        >
          Innocent
        </MenuItem>
        <MenuItem
          value="1"
          disabled={activeValues.findIndex((x) => x === 1) === -1}
        >
          Suggestive
        </MenuItem>
        <MenuItem
          value="2"
          disabled={activeValues.findIndex((x) => x === 2) === -1}
        >
          Salacious
        </MenuItem>
        <MenuItem
          value="3"
          disabled={activeValues.findIndex((x) => x === 3) === -1}
        >
          Explicit
        </MenuItem>
      </TextField>
    );
  }

  return (
    <Well variant="dark">
      <h1 id="setup-title">Settings</h1>
      <Well variant="light">
        <div className="setup-container">
          <div className="level-wrapper">
            <h3>Salaciousness Level</h3>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignContent="end"
            >
              {levelStart()}
              {levelEnd()}
            </Grid>
          </div>
          <TextField
            variant="filled"
            label="Time between levels"
            value={timeBetweenLevels}
            onChange={(e) => actions.setTimeBetweenLevels(e.target.value)}
            error={errors.timeErr}
          />
        </div>
      </Well>
      <Grid container justifyContent="center">
        <Button variant="contained" onClick={startGame}>
          Start Game
        </Button>
      </Grid>
    </Well>
  );
};

export default GameSetup;