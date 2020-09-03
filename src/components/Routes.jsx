import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notes from './Notes';
import StaticDocument from './StaticDocument';
const Routes = () => (
  <Switch>
    <Route path="/notes" component={Notes} />
    <Route path="/:document(about|contact-us)" component={StaticDocument} />
  </Switch>
);

export default Routes;
