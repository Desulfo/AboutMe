import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Header4 from '../atoms/Header4';
import Icon from '../atoms/FavIcon';
import Link from '../atoms/Link';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #96ccff;
  padding: 1.5rem 1rem;
  text-align: center;
`;

function AboutMe() {
  return (
    <Section id="AboutMe">
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
