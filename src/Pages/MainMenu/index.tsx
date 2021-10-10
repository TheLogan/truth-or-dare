import { Button } from '@mui/material';
import React from 'react';

const MainMenu = () => {
  return <>
    <h1>Main Menu</h1>

    <Button>Play</Button>
    <Button onClick={console.log}>Login</Button>
  </>
}


export default MainMenu;