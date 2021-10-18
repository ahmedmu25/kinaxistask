import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { MasterContext } from './Helper/Context';
import { MasterLayout } from './Pages/Layout';
import { createBrowserHistory } from 'history';
import Grid from '@mui/material/Grid';
import { Content } from './Components/Content';

// import {MasterContext} from "./Helper/Context/MasterContext/MasterContex"
const history = createBrowserHistory();

function RouterLayer() {
  return (
    <MasterContext.Provider value={''}>
      <Router history={history}>
        <MasterLayout >
        <Switch>
          <Route
            exact
            path='/'
            component={props => (<Grid item container>
              <Grid item xs={false} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                <Content />
              </Grid>
              <Grid item xs={false} sm={2}></Grid>
            </Grid>)}
          />
          )}/>
        
        </Switch>

        </MasterLayout>
      </Router>
    </MasterContext.Provider>
  );
}

export default RouterLayer;
