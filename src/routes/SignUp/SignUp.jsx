import React, { useCallback, useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { registerAction } from '../../redux/actions/auth';

// const useEvent('scroll', () => {

// })
const useWSConnection = (url) => {
  const [wsConnection, setWSConnection] = useState(null);

  useEffect(() => {
    setWSConnection(new WebSocket(url));
    return () => {
      if (wsConnection) {
        wsConnection.close();
      }
    };
  }, [url, wsConnection]);

  return wsConnection;
};
const SignUp = () => {
  const connection = useWSConnection('wss://api.dev.com/');

  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    async ({ email, password, age, firstname, lastname }) => {
      const { register, history } = this.props;

      const { payload } = await dispatch(register({ password, email, age, firstname, lastname }));

      if (payload === 'Email already exists') {
        return { email: payload };
      }

      history.replace('/');
    },
    [dispatch]
  );

  return (
    <Form
      onSubmit={handleSubmit}
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

        if (!values.age) {
          errors.age = 'Required';
        }
        if (!values.firstname) {
          errors.firstname = 'Required';
        }
        if (!values.lastname) {
          errors.lastname = 'Required';
        }

        return errors;
      }}
    >
      {({ handleSubmit, submitError }) => (
        <Container maxWidth="sm">
          <Typography component="h1" variant="h5">
            Sign Up
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
                  meta={meta}
                  helperText={meta.error || meta.submitError}
                  error={meta.touched && (meta.error || meta.submitError)}
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
              name="firstname"
              render={({ meta, input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  error={meta.touched && meta.error}
                  {...input}
                  id="firstname"
                  label="Frist name"
                  autoFocus
                />
              )}
            />
            <Field
              name="lastname"
              render={({ meta, input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  error={meta.touched && meta.error}
                  {...input}
                  id="lastname"
                  label="Last name"
                  autoFocus
                />
              )}
            />
            <Field
              name="age"
              render={({ meta, input }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  type="number"
                  required
                  fullWidth
                  error={meta.touched && meta.error}
                  {...input}
                  id="age"
                  label="Age"
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
              Sign Up
            </Button>
          </form>
        </Container>
      )}
    </Form>
  );
};

export default SignUp;
