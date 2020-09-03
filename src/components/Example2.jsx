import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Example2.css';

export default class Example2 extends Component {
  state = {
    isOpen: false,
  };

  toggleDropdown = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="container">
        <button type="button" className="button" onClick={this.toggleDropdown}>
          &#9776;
        </button>

        <CSSTransition in={isOpen} timeout={3000} classNames="fade" unmountOnExit>
          <div className="dropdown">
            <ul className="list">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
