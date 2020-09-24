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
            From 2018 till now I was self-learning. I've read few{' '}
            <strong>books</strong> mainly focusing on JavaScript and done many{' '}
            <strong>Udemy's courses</strong> touching JavaScript, HTML and many
            other Front-end technologies. Currently, I'm training my algorithm
            skills at{' '}
            <strong>
              <a href="https://www.codewars.com/users/Desulfo">codewars</a>
            </strong>
            , while simultaneously creating <strong>my own projects</strong>{' '}
            under the{' '}
            <strong>
              supervision of a Senior Javascript mentor form{' '}
              <a href="https://www.facebook.com/JSView-102360824717615">
                JSView
              </a>
            </strong>
            .
          </Paragraph>
        </ListItem>
        <ListItem>
          <Header5>
            2018
            <br />
            bootcamp kodilla
          </Header5>
          <Paragraph>
            I've finished the Kodilla Bootcamp called{' '}
            <strong>Bootcamp Web Developer</strong> where I learned basic of{' '}
            <strong>HTML, CSS, JS(ES6), Node and React</strong>. During the
            course, I had weekly videocall with <strong>a mentor </strong>where
            we discussed problems and learned coding in practice.
          </Paragraph>
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
