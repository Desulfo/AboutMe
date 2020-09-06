import React from 'react';
import Paragraph from '../atoms/basicTypography/Paragraph';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding-top: 1rem;
`;
function Footer() {
  return (
    <StyledFooter id="AboutMe">
      <Paragraph>Created by Paweł Janiszewski © Copyright 2020" </Paragraph>
    </StyledFooter>
  );
}

export default Footer;
