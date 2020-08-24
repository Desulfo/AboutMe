import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className="list ph3 ph5-ns">
        <li className="dib mr2">
          <a href="#AboutMe" className="f6 f5-ns b db pa2 link dim black">
            O mnie
          </a>
        </li>
        <li className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim black">
            Technologie
          </a>
        </li>
        <li className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim black">
            Projekty
          </a>
        </li>
        <li className="dib mr2">
          <a href="#" className="f6 f5-ns b db pa2 link dim black">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
