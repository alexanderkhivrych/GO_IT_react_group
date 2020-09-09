import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Notes from './Notes';
import StaticDocument from './StaticDocument';

const MainRoute = () => (
  <Switch>
    <Route path="/notes" component={Notes} />
    <Route path="/:document(about|contact-us)" component={StaticDocument} />
    <Redirect to="/notes" />
  </Switch>
);

export default MainRoute;
