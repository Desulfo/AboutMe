import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.5;
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
