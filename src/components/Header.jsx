import React from 'react';
import PropTypes from 'prop-types';

function Header({ children, hideSubTitle, options: { color } }) {
  return (
    <h1>
      <span style={{ color }}>{children}</span>
      <br/>
      {!hideSubTitle ? "It is header": 'hidden'}
    </h1>
  );
}

Header.propTypes = {
    children: PropTypes.string,
    hideSubTitle: PropTypes.bool.isRequired,
    options: PropTypes.shape({
        color: PropTypes.string,
    }),
}
Header.defaultProps = {
    hideSubTitle: false,
    options: { color: 'red'} 
};

export default Header;
