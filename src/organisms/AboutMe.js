import React from 'react';

import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
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
      <Header text="Paweł Janiszewski" />
      <h3 className="fw2 f4 lh-copy mt0 mb4">Junior Front-end developer</h3>
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!"
      />
      <Link url="#Stack" text="My stack" />
      <br />
      <i class="fas fa-arrow-circle-down f3 mt2"></i>
    </Section>
  );
}

export default AboutMe;
