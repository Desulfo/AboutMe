import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0 auto;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.3rem;
  ${(props) => props.styles}
`;

function Paragraph(props) {
  return <StyledParagraph styles={props.styles}>{props.text}</StyledParagraph>;
}

export default Paragraph;
