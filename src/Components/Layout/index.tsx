import { Grid } from '@mui/material';
import React from 'react';
import './style.scss';

const Layout: React.FC = (props) => {
  return <Grid container className="background" justifyContent="center" alignContent="center">
    <Grid item >
      {props.children}
    </Grid>
  </Grid>
}

export default Layout;