import React from 'react';
import styled from 'styled-components';

const FavIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.8rem;
  ${(props) => props.styles}
`;

function Icon(props) {
  return <FavIcon className={props.className} styles={props.styles} />;
}

export default Icon;
