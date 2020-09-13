import React from 'react';

import { List, ListItem, Paragraph } from './StyledExperience';
import Section from '../atoms/Section';
import Header from '../atoms/basicTypography/Header';
import Header5 from '../atoms/basicTypography/Header5';

function Experience() {
  return (
    <Section id="Experience" background="#96ccff">
      <Header text="IT experience" />
      <List>
        <ListItem>
          <Header5>Now- online's courses</Header5>
          <Paragraph>
            A online's courrses and cooperation with a mentor from JSView.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Header5>2018- bootcamp kodilla</Header5>
          <Paragraph>
            Done the Bootcamp from Kodilla called "Bootcamp Web Developer".
          </Paragraph>
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
