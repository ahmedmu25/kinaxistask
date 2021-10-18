import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';


import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));


const SnapShot = props => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        style={{ backgroundColor: 'rgb(18, 62, 104)', color: 'white' }}
        title={props.title}
    
      />
      <CardContent>
        <Grid container spacing={0} columns={16}>
          <Grid item xs={8}>
            <Item>
              <h1>{props.target}</h1>
              {props.prefix}
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <h1>{props.value}</h1>
              {props.prefix}
            </Item>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default SnapShot;
