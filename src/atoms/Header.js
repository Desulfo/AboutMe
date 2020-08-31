import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  margin-bottom: ${(props) => props.BottomMargin || '2rem'};
  text-align: center;
  font-size: 2.5rem;
  color: black;
`;

function Header(props) {
  return (
    <StyledHeader BottomMargin={props.BottomMargin}>{props.text}</StyledHeader>
  );
}

export default Header;
