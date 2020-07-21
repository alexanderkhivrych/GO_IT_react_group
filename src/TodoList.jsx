import React from 'react';

const list = [
  { title: 'Task1', id: '1'},
  { title: 'Task2', id: '2'},
  { title: 'Task3', id: '3'},
];

function TodoList() {
  return (
    <ul>
      {list.map(({ title, id }) => <li key={id}>{title}</li>)}
    </ul>
  );
}

export default TodoList;
