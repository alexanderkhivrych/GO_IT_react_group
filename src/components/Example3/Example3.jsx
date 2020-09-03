import React, { Component } from 'react';
import faker from 'faker';
import List from './List/List';

export default class Example3 extends Component {
  state = {
    items: [],
  };

  addItem = () => {
    this.setState((state) => ({
      items: [...state.items, { id: faker.random.uuid(), text: faker.lorem.words(5) }],
    }));
  };

  removeItem = (id) => {
    this.setState((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <button onClick={this.addItem}>Add Item</button>
        <hr />
        <List items={items} onDelete={this.removeItem} />
      </div>
    );
  }
}
