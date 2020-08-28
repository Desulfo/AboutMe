import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2.5rem;
  color: black;
`;

function Header(props) {
  return <StyledHeader>{props.text}</StyledHeader>;
}

export default Header;
