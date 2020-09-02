import React from 'react';
import stackData from '../data/Stack.js';
import Header from '../atoms/Header';
import Header3 from '../atoms/Header3';
import Paragraph from '../atoms/Paragraph';
import Icon from '../atoms/FavIcon';
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
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ListItem = styled.li`
  width: 80%;
  margin: 1.2rem auto;
  text-align: left;
  @media (min-width: 600px) {
    width: 40%;
    margin-right: 0.5rem;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }
`;

function MyStack() {
  return (
    <Section id="Stack">
      <Header text="My stack" />
      <List>
        {stackData.map(({ technology, description, favIconClass: icon }) => (
          <ListItem>
            <Icon
              className={`fab ${icon}`}
              styles="
                width: 70px;
                float: left;
                font-size: 4rem;
                margin-right: 1rem;"
            />
            <Header3>{technology}</Header3>
            <Paragraph text={description} styles="margin: 0;" />
          </ListItem>
        ))}
      </List>
    </Section>
  );
}

export default MyStack;
