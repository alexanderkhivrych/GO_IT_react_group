import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.history.replace('/');
  }
  render() {
    return '';
  }
}
const mapDispatchToProps = (dispatch) => ({ logout: () => dispatch(logoutAction()) });
export default connect(null, mapDispatchToProps)(Logout);
