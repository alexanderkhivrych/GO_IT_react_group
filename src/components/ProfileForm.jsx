import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValue: PropTypes.shape({
      nameValue: PropTypes.string,
      surnameValue: PropTypes.string,
    }),
  };
  static defaultProps = {
    initialValue: {
      nameValue: '',
      surnameValue: '',
    },
  };
  state = { nameValue: this.props.initialValue.nameValue, surnameValue: this.props.initialValue.surnameValue };

  handleChangeName = (e) => {
    this.setState({ nameValue: e.target.value });
  };

  handleChangeSurName = (e) => {
    this.setState({ surnameValue: e.target.value });
  };

  handleSubmit = () => {
    this.props.onSubmit({
      name: this.state.nameValue,
      surname: this.state.surnameValue,
    });
  };

  render() {
    return (
      <div>
        Name: <input value={this.state.nameValue} onChange={this.handleChangeName} />
        Surname: <input value={this.state.surnameValue} onChange={this.handleChangeSurName} />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

export default ProfileForm;
