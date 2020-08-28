import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.3rem;
`;

function Paragraph(props) {
  return <StyledParagraph>{props.text}</StyledParagraph>;
}

export default Paragraph;
