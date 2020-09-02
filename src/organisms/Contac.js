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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
      <Form>
        <InputContainer>
          <Label htmlFor="mail">Your mail:</Label>
          <Input
            id="name"
            type="email"
            aria-describedby="Place for your email"
            placeholder="James.bond@wp.pl"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="mail">Your name:</Label>
          <Input
            id="name"
            type="text"
            aria-describedby="Place for your name"
            placeholder="James Bond"
          />
        </InputContainer>
        <TextAreaContainer>
          <Label htmlFor="mail">Your message:</Label>
          <TextArea
            id="name"
            type="email"
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
