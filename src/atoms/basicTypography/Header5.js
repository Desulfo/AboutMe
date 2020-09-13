import React from 'react';
import styled from 'styled-components';

const Header4 = styled.h4`
  font-size: 1rem;
`;

function Header(props) {
  return <Header4>{props.children}</Header4>;
}

export default Header;
