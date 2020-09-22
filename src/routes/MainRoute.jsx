import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logout from './Logout';

const MainRoute = () => (
  <Switch>
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/logout" component={Logout} />
  </Switch>
);

export default MainRoute;
