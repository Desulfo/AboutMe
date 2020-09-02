import React from 'react';
import Navigation from '../atoms/styled/Navigation/Navigation';
import Link from '../atoms/basicTypography/Link';
import List from '../atoms/styled/Navigation/List';
import ListItem from '../atoms/styled/Navigation/ListItem';

//DATA
const menuSections = [
  { name: 'About me', tag: 'AboutMe' },
  { name: 'My Stack', tag: 'Stack' },
  { name: 'My Projects', tag: 'Projects' },
  { name: 'Contact', tag: 'Contact' },
];

//STYLED COMPONENTS

function StyledNavigation() {
  return (
    <Navigation>
      <List>
        {menuSections.map(({ name, tag }, index) => (
          <ListItem key={index}>
            <Link url={`#${tag}`}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
}

export default StyledNavigation;
