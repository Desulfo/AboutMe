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
            From 2018 till now I was self-learning. I have read few{' '}
            <strong>books</strong> mainly focusing on JS. I have done a{' '}
            <strong>Udemy's courses</strong>. Currently working on a{' '}
            <strong>codewars</strong> and creating my{' '}
            <strong>own projects</strong> under the supervision of{' '}
            <strong>mentor</strong> form{' '}
            <a href="https://www.facebook.com/JSView-102360824717615">JSView</a>
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
            I finish the Bootcamp from Kodilla called{' '}
            <strong>Bootcamp Web Developer</strong> where I learned basic of{' '}
            <strong>HTML, CSS, JS(ES6), Node and React</strong>. During the
            course I had weekly videocall with <strong>a mentor </strong>where
            we discuss problems and if I was ahead of material I received extra
            task to practice.
          </Paragraph>
        </ListItem>
      </List>
    </Section>
  );
}

export default Experience;
