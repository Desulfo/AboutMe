import React from 'react';
import { AnimatedLink, Paragraph, Icon, Header } from './StyledAboutMe';
import Section from '../atoms/Section';
import Header4 from '../atoms/basicTypography/Header4';

function AboutMe() {
  return (
    <Section id="AboutMe" background="#96ccff">
      <Header text="Paweł Janiszewski" BottomMargin="0" />
      <Header4>Junior Front-end developer</Header4>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!"
      </Paragraph>
      <AnimatedLink url="#Stack">
        My stack
        <br />
        <Icon className="fas fa-arrow-circle-down" />
      </AnimatedLink>
    </Section>
  );
}

export default AboutMe;
