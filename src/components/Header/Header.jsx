import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <NavLink exact to="/example-1" activeClassName="active">
      Example1
    </NavLink>
    <NavLink exact to="/example-2" activeClassName="active">
      Example2
    </NavLink>
    <NavLink exact to="/example-3" activeClassName="active">
      Example3
    </NavLink>
  </>
);

export default Header;
