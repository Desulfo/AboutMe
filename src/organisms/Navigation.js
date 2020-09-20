import React, { useState } from 'react';

import Burger from '../molecules/BurgerMenu';
import { List, ListItem, Navigation } from './StyledNavigation';
import Link from '../atoms/basicTypography/Link';

const menuSections = [
  { name: 'About me', tag: 'AboutMe' },
  { name: 'My Stack', tag: 'Stack' },
  { name: 'My Projects', tag: 'Projects' },
  { name: 'Contact', tag: 'Contact' },
];

function StyledNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Navigation>
      <List>
        <Burger open={open} setOpen={setOpen} />
        {menuSections.map(({ name, tag }, index) => (
          <ListItem open={open} setOpen={setOpen} key={index}>
            <Link url={`#${tag}`}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
}

export default StyledNavigation;
