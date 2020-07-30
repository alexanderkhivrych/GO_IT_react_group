import React, { Component } from 'react';
// import {} Button } from "react-bootstrap";
import styles from './TodoList.module.scss';
import TodoForm from '../TodoForm';

class TodoList extends Component {
  state = {
    items: [
      { title: 'Home work', id: '1' },
      { title: 'Cleaning', id: '2' },
      { title: 'Meeting', id: '3' },
    ],
  };

  handleAddItem = (value) => {
    const { items } = this.state;

    this.setState({ items: [{ title: value, id: Date.now() }, ...items] });
  };
  handleDeleteItem = (id) => () => {
    const { items } = this.state;
    console.log(id);

    this.setState({ items: items.filter(({ id: currentId }) => currentId !== id) });
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <ul className={styles['todo-list-menu']}>
          {items.map(({ title, id }) => (
            <li className={styles['todo-list-item']} key={id}>
              {title}
              <button onClick={this.handleDeleteItem(id)}>Delete</button>
            </li>
          ))}
        </ul>

        <TodoForm onSubmit={this.handleAddItem} />
      </>
    );
  }
}
export default TodoList;
