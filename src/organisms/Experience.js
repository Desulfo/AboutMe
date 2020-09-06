import React from 'react';
import Section from '../atoms/Section';
import List from '../atoms/styled/Experience/List';
import ListItem from '../atoms/styled/Experience/ListItem';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Header from '../atoms/basicTypography/Header';

function Experience() {
  return (
    <Section id="Experience" background="#96ccff">
      <Header text="IT experience" />
      <List>
        <ListItem>
          <Paragraph styles="max-width: 800px;">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut
            sed, inventore iusto magni eaque magnam deserunt nisi harum quas eos
            itaque!"
          </Paragraph>
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
