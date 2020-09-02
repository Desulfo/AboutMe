import React from 'react';
import Header from '../atoms/basicTypography/Header';
import Link from '../atoms/basicTypography/Link';
import Icon from '../atoms/FavIcon';
import Section from '../atoms/Section';
import styled from 'styled-components';

const ContactLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin-bottom: 0.5rem;
  @media (min-width: 600px) {
    width: 50%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem 0;
  max-width: 800px;
  margin: 0 auto;
`;
const InputContainer = styled.div`
  margin: 0.5rem;
`;
const Label = styled.label`
  margin: 0.5rem;
`;
const Input = styled.input`
  padding: 0.3rem;
  background-color: #f0f0f0;
  border: none;
`;
const TextAreaContainer = styled(InputContainer)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TextArea = styled.textarea`
  padding-left: 0.2rem;
  width: 300px;
  height: 80px;
  background-color: #f0f0f0;
  border: none;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  font-weight: bold;
  background-color: #f0f0f0;
  border-radius: 50px;
  border: 1px solid black;
  &:hover {
    background-color: #364f6b;
    cursor: pointer;
  }
`;

function Contact() {
  return (
    <Section id="Contact" background="#96ccff">
      <Header text="Reach me:" />
      <ContactLink url="mailto: pawel.janiszews@interia.pl">
        <Icon className="far fa-envelope" />
        pawel.janiszews@interia.pl
      </ContactLink>
      <ContactLink url="tel: +48793253825">
        <Icon className="fas fa-phone" />
        793 253 825
      </ContactLink>
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
