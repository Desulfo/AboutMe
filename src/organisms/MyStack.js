import React from 'react';

import List from '../atoms/styled/MyStack/List';
import ListItem from '../atoms/styled/MyStack/ListItem';
import Section from '../atoms/Section';
import Header from '../atoms/basicTypography/Header';
import Header3 from '../atoms/basicTypography/Header3';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Icon from '../atoms/FavIcon';
import stackData from '../data/Stack.js';

function MyStack() {
  return (
    <Section id="Stack">
      <Header text="My stack" />
      <List>
        {stackData.map(
          ({ technology, description, favIconClass: icon }, index) => (
            <ListItem key={index}>
              <Icon
                className={`fab ${icon}`}
                styles="
                width: 70px;
                float: left;
                font-size: 4rem;
                margin-right: 1rem;"
              />
              <Header3>{technology}</Header3>
              <Paragraph styles="margin: 0;">{description}</Paragraph>
            </ListItem>
          )
        )}
      </List>
    </Section>
  );
}

export default MyStack;
