import React from 'react';
import Section from '../atoms/Section';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Header from '../atoms/basicTypography/Header';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0 2rem;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  max-width: 850px;
`;
const ListItem = styled.li`
  padding-left: 1rem;
  text-align: left;
`;

function Experience() {
  return (
    <Section id="Experience" background="#96ccff">
      <Header text="IT experience" />
      <List>
        <ListItem>
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!"
            styles="max-width: 800px;"
          />
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
