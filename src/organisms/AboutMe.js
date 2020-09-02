import React from 'react';
import Section from '../atoms/Section';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Header from '../atoms/basicTypography/Header';
import Header4 from '../atoms/basicTypography/Header4';
import Icon from '../atoms/FavIcon';
import Link from '../atoms/basicTypography/Link';

function AboutMe() {
  return (
    <Section id="AboutMe" background="#96ccff">
      <Header text="Paweł Janiszewski" BottomMargin="0" />
      <Header4>Junior Front-end developer</Header4>
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!"
        styles="max-width: 800px;"
      />
      <Link url="#Stack">
        My stack
        <br />
        <Icon className="fas fa-arrow-circle-down" styles="margin: .5rem 0;" />
      </Link>
    </Section>
  );
}

export default AboutMe;
