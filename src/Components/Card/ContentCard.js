import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import { ChartContent, MultiCharts } from '../index';

const ContentCard = props => {
  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader
          style={{ backgroundColor: '#123e68', color: 'white' }}
          title={props.title}
        />

        {props.showMultipleChart && <MultiCharts />}

        {props.showSimpleChart && <ChartContent />}

        <CardActions></CardActions>
      </Card>
    </React.Fragment>
  );
};

export default ContentCard;
