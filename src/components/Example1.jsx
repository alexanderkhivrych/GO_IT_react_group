import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const defaultBoxStyle = {
  width: 400,
  height: 150,
  padding: 8,
  color: '#fff',
  lineHeight: '150px',
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 16,
  backgroundColor: '#795548',
  transition: `opacity ${500}ms ease-in-out`,
  opacity: 0,
  fontSize: 20,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

class Example1 extends Component {
  state = {
    visible: false,
  };

  toggleVisibility = () => {
    this.setState((state) => ({ visible: !state.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.toggleVisibility}>{visible ? 'Hide' : 'Show'}</button>

        <Transition in={visible} timeout={1000} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultBoxStyle,
                ...transitionStyles[state],
              }}
            >
              Current transition state: {state}
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default Example1;
