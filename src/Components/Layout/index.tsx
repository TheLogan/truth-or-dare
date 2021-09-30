import { Grid } from '@mui/material';
import React from 'react';
import './style.scss';

const Layout: React.FC = (props) => {
  return <Grid container className="background" justifyContent="center" alignContent="center" xs={12}>
    <Grid item xs={8}>
        {props.children}
    </Grid>
  </Grid>
}

export default Layout;