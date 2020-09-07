import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Section from '../atoms/Section';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Header from '../atoms/basicTypography/Header';
import Header4 from '../atoms/basicTypography/Header4';
import Icon from '../atoms/FavIcon';
import Link from '../atoms/basicTypography/Link';

const rotate = keyframes`
  50% {transform: rotate(-180deg); font-size: 2rem; margin-bottom:0}
  100% {transform: rotate(0deg); font-size: 1.5rem}
`;
const AnimatedIcon = styled(Icon)`
  &:hover {
    animation: ${rotate} 2s linear;
  }
`;
const AnimatedLink = styled(Link)``;

function AboutMe() {
  return (
    <Section id="AboutMe" background="#96ccff">
      <Header text="Paweł Janiszewski" BottomMargin="0" />
      <Header4>Junior Front-end developer</Header4>
      <Paragraph styles="max-width: 800px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!"
      </Paragraph>
      <AnimatedLink url="#Stack">
        My stack
        <br />
        <AnimatedIcon
          className="fas fa-arrow-circle-down"
          styles="margin: .5rem 0;"
        />
      </AnimatedLink>
    </Section>
  );
}

export default AboutMe;
