import React from 'react';
import styled from 'styled-components';

//DATA
const menuSections = [
  { name: 'About me', tag: 'AboutMe' },
  { name: 'My Stack', tag: 'Stack' },
  { name: 'My Projects', tag: 'Projects' },
  { name: 'Contact', tag: 'Contact' },
];

//STYLED COMPONENTS
const Navigation = styled.nav`
  padding: 1rem;
  text-align: center;
  @media (min-width: 420px) {
    position: sticky;
    top: 0;
    background-color: white;
    width: 100%;
  }
`;
const List = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
  @media (min-width: 420px) {
    flex-direction: row;
  }
`;
const ListItem = styled.li`
  font-weight: 1.5rem;
  margin: 0.7rem;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    opacity: 0.5;
  }
`;

function StyledNavigation() {
  return (
    <Navigation>
      <List>
        {menuSections.map(({ name, tag }) => (
          <ListItem>
            <Link href={`#${tag}`}>{name}</Link>
          </ListItem>
        ))}
      </List>
    </Navigation>
  );
}

export default StyledNavigation;
