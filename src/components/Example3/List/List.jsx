import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './List.module.css';
import popTransition from './transitions/pop.module.css';
import slideTransition from './transitions/slide.module.css';

const List = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {items.map((item) => (
      <CSSTransition key={item.id} timeout={200} classNames={popTransition}>
        <li className={styles.item}>
          {item.text}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;
