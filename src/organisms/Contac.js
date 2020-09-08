import React from 'react';
import Form from '../atoms/styled/Contact/Form';
import Label from '../atoms/styled/Contact/Label';
import Input from '../atoms/styled/Contact/Input';
import TextArea from '../atoms/styled/Contact/TextArea';
import Button from '../atoms/styled/Contact/Button';
import ContactSection from '../atoms/styled/Contact/ContactSection';
import Header from '../atoms/basicTypography/Header';
import Link from '../atoms/basicTypography/Link';
import Icon from '../atoms/FavIcon';
import Section from '../atoms/Section';
import styled from 'styled-components';

const ContactLink = styled(Link)`
  margin: 0.5rem;
`;
const InputContainer = styled.div`
  margin: 0.5rem;
`;
const TextAreaContainer = styled(InputContainer)`
  width: 100%;
`;

function Contact() {
  return (
    <Section id="Contact" background="#96ccff">
      <Header text="Reach me:" />
      <ContactSection>
        <ContactLink url="mailto: pawel.janiszews@interia.pl">
          <Icon className="far fa-envelope" />
          pawel.janiszews@interia.pl
        </ContactLink>
        <ContactLink url="tel: +48793253825">
          <Icon className="fas fa-phone" />
          793 253 825
        </ContactLink>
      </ContactSection>
      <Form action="POST" data-netlify="true">
        <InputContainer>
          <Label htmlFor="email">Your mail:</Label>
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
          <Label htmlFor="name">Your name:</Label>
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
          <Label htmlFor="message">Your message:</Label>
          <br />
          <TextArea
            id="message"
            name="message"
            type="text"
            aria-describedby="Place for your message"
            placeholder="Hi, I want to hire you!"
          />
        </TextAreaContainer>
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit">Send</Button>
      </Form>
    </Section>
  );
}

export default Contact;
