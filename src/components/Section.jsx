import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const SectionWrapper = styled.div`
  font-size: 18px;
  margin: 1em;
  background-color: ${(props) => props.bgColor};
  padding: 0.25em 1em;

  /* Color the border and text with theme.main */
`;

    const Section = ({ children, title, bgColor }) => (
        <SectionWrapper bgColor={bgColor}>
        <h3>{title}</h3>
        <span>{children}</span>
        </SectionWrapper>
    );


export default Section;
