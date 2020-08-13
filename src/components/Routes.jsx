import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import ListPage from './ListPage';
import NotFoundPage from './NotFoundPage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ListPage} />
    <Route path="/list/:category?" component={ListPage} />
    <Route
      path="/about"
      render={() => (
        <div>
          About
          <Link to={{ pathname: '/', state: { showInfoMessage: true }, query: { showInfoMessage: true } }}>
            {' '}
            Back to home
          </Link>
        </div>
      )}
    />

    <Route path="/404" component={NotFoundPage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
