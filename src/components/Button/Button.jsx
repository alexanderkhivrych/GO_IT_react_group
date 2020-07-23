import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import "./Button.scss";

const COLORS =   { primary:  "#007bff", danger: '#dc3545'}

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  /* Color the border and text with theme.main */
  color: ${props => COLORS[props.color]};
`;

    // const Button = ({ children, color }) => (
    //     <button className={`btn btn--${color}`}>
        
    //     {children}
    //     </button>
    // );


Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["primary", "danger"])
};
export default Button;
