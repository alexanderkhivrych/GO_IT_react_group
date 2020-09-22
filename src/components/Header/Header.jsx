import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
};

class Header extends Component {
  render() {
    const { classes, isLogged } = this.props;

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Medium
            </Typography>
            {isLogged ? (
              <>
                <NavLink component={Button} color="inherit" to="/profile">
                  Profile
                </NavLink>
                <NavLink component={Button} color="inherit" to="/logout">
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink component={Button} color="inherit" to="/sign-in">
                  Login
                </NavLink>
                <NavLink component={Button} color="inherit" to="/sign-up">
                  Register
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(({ auth: { accessToken } }) => ({
    isLogged: !!accessToken,
  }))
)(Header);
