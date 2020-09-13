import React from 'react';

import { List, ListItem, Paragraph } from './StyledExperience';
import Section from '../atoms/Section';
import Header from '../atoms/basicTypography/Header';

function Experience() {
  return (
    <Section id="Experience" background="#96ccff">
      <Header text="IT experience" />
      <List>
        <ListItem>
          <Paragraph>
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
