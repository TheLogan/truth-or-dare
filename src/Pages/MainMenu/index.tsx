import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const MainMenu = () => {
  const history = useHistory();
  return <>
    <h1>Main Menu</h1>

    <Button onClick={() => history.push('/game')}>Play web version</Button>
    <Button onClick={() => history.push('/download')}>Download App</Button>
    <Button onClick={() => history.push('/admin')}>Admin</Button>
  </>
}


export default MainMenu;