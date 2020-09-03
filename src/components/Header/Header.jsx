import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <NavLink exact to="/notes" activeClassName="active">
      Notes
    </NavLink>
    <NavLink exact to="/about" activeClassName="active">
      About
    </NavLink>
    <NavLink exact to="/contact-us" activeClassName="active">
      Contact Us
    </NavLink>
  </>
);

export default Header;
