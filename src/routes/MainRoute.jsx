import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Logout from './Logout';
import ProtectedRoute, { ACCESS_TYPE } from '../components/ProtectedRoute';

const MainRoute = () => (
  <Switch>
    <ProtectedRoute path="/sign-in" access={ACCESS_TYPE.PUBLIC} component={SignIn} />
    <ProtectedRoute path="/sign-up" access={ACCESS_TYPE.PUBLIC} component={SignUp} />
    <ProtectedRoute path="/logout" access={ACCESS_TYPE.PRIVATE} component={Logout} />
    <ProtectedRoute path="/profile" access={ACCESS_TYPE.PRIVATE} render={() => 'Profile page'} />
  </Switch>
);

export default MainRoute;
