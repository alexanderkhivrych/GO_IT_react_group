import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <form name="todo-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChangeValue} />
        <button type="submit"> Add new task</button>
      </form>
    );
  }
}

export default TodoForm;
