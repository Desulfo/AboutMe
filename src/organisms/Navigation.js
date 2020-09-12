import React from 'react';

import { List, ListItem, Navigation } from './StyledNavigation';
import Link from '../atoms/basicTypography/Link';

const menuSections = [
  { name: 'About me', tag: 'AboutMe' },
  { name: 'My Stack', tag: 'Stack' },
  { name: 'My Projects', tag: 'Projects' },
  { name: 'Contact', tag: 'Contact' },
];

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
