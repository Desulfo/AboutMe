import React from 'react';

import {
  ContactSection,
  Button,
  Form,
  Input,
  TextArea,
  InputContainer,
  TextAreaContainer,
  ContactLink,
  BigIcon,
} from './StyledContact';
import Header from '../atoms/basicTypography/Header';
import Icon from '../atoms/FavIcon';
import Section from '../atoms/Section';

function Contact() {
  return (
    <Section id="Contact" background="#96ccff">
      <Header text="Reach me:" />
      <ContactSection>
        <ContactLink url="mailto: pawel.janiszews@interia.pl">
          <Icon className="far fa-envelope" />
          pawel.janiszews@interia.pl
        </ContactLink>
        <ContactLink url="https://www.linkedin.com/in/pawe%C5%82-janiszewski/">
          <BigIcon className="fab fa-linkedin" />
        </ContactLink>
        <ContactLink url="tel: +48793253825">
          <Icon className="fas fa-phone" />
          793 253 825
        </ContactLink>
        <ContactLink url="https://github.com/desulfo">
          <BigIcon className="fab fa-github-square" />
        </ContactLink>
      </ContactSection>
      <Form action="https://formspree.io/xnqgebqv" method="POST">
        <InputContainer>
          <label htmlFor="email">Your mail:</label>
          <br />
          <Input
            id="email"
            name="email"
            type="email"
            aria-describedby="Place for your email"
            placeholder="James.bond@wp.pl"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">Your name:</label>
          <br />
          <Input
            id="name"
            name="name"
            type="text"
            aria-describedby="Place for your name"
            placeholder="James Bond"
          />
        </InputContainer>
        <TextAreaContainer>
          <label htmlFor="message">Your message:</label>
          <br />
          <TextArea
            id="message"
            name="message"
            type="text"
            aria-describedby="Place for your message"
            placeholder="Hi, I want to hire you!"
          />
        </TextAreaContainer>
        <Button type="submit">Send</Button>
      </Form>
    </Section>
  );
}

export default Contact;
