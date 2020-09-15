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
          <Header5>2018-Now </Header5>
          <Paragraph>
            codewars, własne projekty, udemy, mentor.A online's courrses and
            cooperation with a mentor from JSView.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Header5>
            2018
            <br />
            bootcamp kodilla
          </Header5>
          <Paragraph>
            Accomplite the Bootcamp from Kodilla called "Bootcamp Web
            Developer". co obejmował, miałem mentora.
          </Paragraph>
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
