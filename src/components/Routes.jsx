import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3/Example3';

const Routes = () => (
  <Switch>
    <Route path="/example-1" component={Example1} />
    <Route path="/example-2" component={Example2} />
    <Route path="/example-3" component={Example3} />
  </Switch>
);

export default Routes;
