import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { loginAction } from '../../redux/actions/auth';

class SignIn extends Component {
  handleSubmit = async ({ email, password }) => {
    const { login, history } = this.props;

    const { payload } = await login({ password, email });

    if (payload === 'Cannot find user') {
      return { [FORM_ERROR]: payload };
    }

    history.replace('/');
  };
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          }
          if (
            values.email &&
            !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              values.email
            )
          ) {
            errors.email = 'Inccorect email';
          }
          if (!values.password) {
            errors.password = 'Required';
          }

          return errors;
        }}
      >
        {({ handleSubmit, submitError }) => (
          <Container maxWidth="sm">
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <Field
                name="email"
                render={({ meta, input }) => (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    error={meta.touched && meta.error}
                    {...input}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                )}
              />
              <Field
                name="password"
                render={({ meta, input }) => (
                  <TextField
                    {...input}
                    variant="outlined"
                    margin="normal"
                    required
                    error={meta.touched && meta.error}
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                )}
              />
              {submitError && <Alert severity="error">{submitError}</Alert>}
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
              </Button>
            </form>
          </Container>
        )}
      </Form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({ login: (params) => dispatch(loginAction(params)) });
export default connect(null, mapDispatchToProps)(SignIn);
