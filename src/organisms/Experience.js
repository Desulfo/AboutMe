import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #96ccff;
  padding: 1.5rem 3rem;
  text-align: center;
`;
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
  @media (min-width: 600px) {
  }
  @media (min-width: 1000px) {
  }
`;

function Experience() {
  return (
    <Section id="Experience">
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
