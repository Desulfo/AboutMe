import React from 'react';

const menuSections = [
  { name: 'About me', tag: 'AboutMe' },
  { name: 'My Stack', tag: 'Stack' },
  { name: 'My Projects', tag: 'Projects' },
  { name: 'Contact', tag: 'Contact' },
];

function Navigation() {
  return (
    <nav className="center tc">
      <ul className="mw8 list ph3 ph5-ns">
        {menuSections.map(({ name, tag }) => (
          <li className="dib mr2">
            <a href={`#${tag}`} className="f6 f5-ns b db pa2 link dim black">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
