import React from 'react';

function Navigation() {
  return (
    <nav className="mw9">
      <ul className="list ph3 ph5-ns">
        <li className="dib mr2">
          <a href="#AboutMe" className="f6 f5-ns b db pa2 link dim black">
            About me
          </a>
        </li>
        <li className="dib mr2">
          <a href="#MyStack" className="f6 f5-ns b db pa2 link dim black">
            My stack
          </a>
        </li>
        <li className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim black">
            My projects
          </a>
        </li>
        <li className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
