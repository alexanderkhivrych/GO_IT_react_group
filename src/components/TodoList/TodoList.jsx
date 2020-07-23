import React from 'react';
import { Jumbotron, Button, Alert } from "react-bootstrap";
// import Button from '../Button';
import styles from  "./TodoList.module.scss";
import Section from '../Section';
const list = [
  { title: 'Home work', id: '1'},
  { title: 'Cleaning', id: '2'},
  { title: 'Meeting', id: '3'},
];
 console.log(styles);
const TodoList = ({ color }) => (<div className="todo-list-wrapper">
  {/* <ul className={styles["todo-list-menu"]}>
      {list.map(({ title, id }) => <li className={styles["todo-list-item"]} key={id}>{title}</li>)}
    </ul>
    
<Button color="primary">
      Add new task
  </Button> */}

  <Alert  variant="danger">
  ERROR
  </Alert>
<Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="danger">Learn more</Button>
  </p>
</Jumbotron>


</div>);
export default TodoList;
