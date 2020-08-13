import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>

    <NavLink to="/list" activeClassName="active">
      List
    </NavLink>
    <NavLink to="/about" activeClassName="active">
      About Us
    </NavLink>
  </>
);

export default Header;
