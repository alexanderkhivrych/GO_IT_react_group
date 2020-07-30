import React, { Component } from 'react';
import SignupForm from './SignupForm';

class App extends Component {
  state = {};

  handleSave = (formValues) => {
    this.setState(formValues);
  };

  render() {
    return (
      <>
        {JSON.stringify(this.state, null, 2)}
        <SignupForm onSubmit={this.handleSave} />
      </>
    );
  }
}
export default App;
