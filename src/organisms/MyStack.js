import React from 'react';

import stackData from '../data/Stack.js';

import Header from '../atoms/Header';
import Paragraph from '../atoms/Paragraph';

import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem 1rem;
  text-align: center;
`;
const List = styled.ul`
  display: flex;
  margin: 0 auto;
  list-style: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;
const ListItem = styled.li`
  width: 80%;
  height: 90px;
  margin: 0.7rem auto;
  text-align: left;
`;
const Icon = styled.i`
  float: left;
  font-size: 4rem;
  margin-right: 1rem;
`;
const Header3 = styled.h3`
  font-size: 1.3rem;
`;

function MyStack() {
  return (
    <Section id="Stack">
      <Header text="My stack" />
      <List>
        {stackData.map(({ technology, description, favIconClass: icon }) => (
          <ListItem>
            <Icon className={`fab ${icon}`}></Icon>
            <Header3>{technology}</Header3>
            <Paragraph text={description} styles="margin: 0;" />
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default MyStack;
