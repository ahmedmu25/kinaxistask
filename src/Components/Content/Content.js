import * as React from 'react';
import { SnapShot, ContentCard } from '../index';
import Grid from '@mui/material/Grid';


const Content = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SnapShot
            title={'Static Revenue'}
            subTitle={'From Last Year'}
            target={'300k'}
            value={'600k'}
            prefix={'CAD'}
          />
        </Grid>
        <Grid item xs={4}>
          <SnapShot
            title={'Static Meetings'}
            subTitle={'From Last Year'}
            target={'2'}
            value={'3'}
            prefix={"per day"}
          />
        </Grid>

        <Grid item xs={4}>
          <SnapShot
            title={'Static WorkHours'}
            target={'1700'}
            value={'1900'}
            prefix={"per year"}
            subTitle={'From Last Year'}
          />
        </Grid>

        <Grid item xs={12}>
          <ContentCard showSimpleChart={true} title={'Simple Chart'} />
        </Grid>

        <Grid item xs={12}>
          <ContentCard title={'MultipleChart'} showMultipleChart={true} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Content;
