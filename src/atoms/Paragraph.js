import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p``;

function Paragraph(props) {
  return <StyledParagraph>{props.text}</StyledParagraph>;
}

export default Paragraph;
