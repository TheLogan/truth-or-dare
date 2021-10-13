import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const MainMenu = () => {
  const history = useHistory();
  return <>
    <h1>Main Menu</h1>

    <Button onClick={() => history.push('/game')}>Play</Button>
    <Button onClick={console.log}>Login</Button>
  </>
}


export default MainMenu;