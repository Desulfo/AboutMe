import React from 'react';
import { AnimatedLink, Paragraph, Icon, Header } from './StyledAboutMe';
import Section from '../atoms/Section';
import Header4 from '../atoms/basicTypography/Header4';

function AboutMe() {
  return (
    <Section id="AboutMe" background="#96ccff">
      <Header text="Paweł Janiszewski" />
      <Header4>Junior Front-end developer</Header4>
      <Paragraph>
        I am a novice Front-end developer with a passion for Front technologies.
        <br /> In free time I'm engrossed in squash, climbing, fantasy book and
        Riot's games.
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
