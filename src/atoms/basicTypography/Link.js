import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fade = keyframes`
from{opacity:1}
to{opacity:.5}
`;
const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.5;
    animation: ${fade} 0.5s linear;
  }
`;

function Link(props) {
  return (
    <StyledLink className={props.className} href={props.url}>
      {props.children}
    </StyledLink>
  );
}

export default Link;
