import React from 'react';
import Header from '../../Components/Header/Header';
import Grid from '@mui/material/Grid';
const MasterLayout = props => {
  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item>
          <Header></Header>
        </Grid>
     {props.children}
      </Grid>
    </React.Fragment>
  );
};

export default MasterLayout;
