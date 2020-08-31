import React from 'react';
import Header from '../atoms/Header';
import Link from '../atoms/Link';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #96ccff;
  padding: 1.5rem 1rem;
  text-align: center;
`;
const ContactLink = styled(Link)`
  &&& {
    display: inline-block;
    width: 50%;
  }
`;
function Contact() {
  return (
    <Section id="Contact">
      <Header text="Reach me:" />
      <ContactLink url="mailto: pawel.janiszews@interia.pl">
        <i className="far fa-envelope f3 mr2" />
        pawel.janiszews@interia.pl
      </ContactLink>
      <Link url="tel: +48793253825">
        <i className="fas fa-phone f3 mr2" />
        793 253 825
      </Link>
      <form>
        <div>
          <label htmlFor="mail">Your mail</label>
          <input
            id="name"
            type="email"
            aria-describedby="Place for your email"
            placeholder="James.bond@wp.pl"
          />
        </div>
        <div>
          <label htmlFor="mail">Your name</label>
          <input
            id="name"
            type="text"
            aria-describedby="Place for your name"
            placeholder="James Bond"
          />
        </div>
        <div className="w-100 w-80-ns">
          <label htmlFor="mail">Your message</label>
          <textarea
            id="name"
            type="email"
            aria-describedby="Place for your message"
            placeholder="Hi, I want to hire you!"
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </Section>
  );
}

export default Contact;
