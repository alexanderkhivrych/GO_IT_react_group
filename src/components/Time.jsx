import React, { Component } from 'react';

class Time extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
    // this.handleRefresh = this.handleRefresh.bind(this);
  }

  state = {};
  get time() {
    return this.state.time.getHours() + ':' + this.state.time.getMinutes();
  }

  handleRefresh = (evt) => {
    this.setState((props, state) => {});
    this.setState(
      {
        time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        {' '}
        {this.time}
        {this.state.time}
        <button onClick={this.handleRefresh}>Refresh</button>
      </div>
    );
  }
}

export default Time;
