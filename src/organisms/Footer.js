import React from 'react';
import Paragraph from '../atoms/Paragraph';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding-top: 1rem;
`;
function Footer() {
  return (
    <StyledFooter id="AboutMe">
      <Paragraph text="Created by Paweł Janiszewski © Copyright 2020" />
    </StyledFooter>
  );
}

export default Footer;
