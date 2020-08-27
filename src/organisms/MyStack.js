import React from 'react';
import stackData from '../data/Stack.js';
import Header from '../atoms/Header';

function MyStack() {
  return (
    <section id="Stack" className="center tc pv4">
      <Header text="My stack" />
      <ul className="dib list ph0 mw8">
        {stackData.map(({ technology, description, favIconClass: icon }) => (
          <li className="f2 fl w-50 pa2">
            <i class={`fab ${icon} f1 v-mid pt3 fl w-20`}></i>
            <h3 className="f4 fl w-80 mb1 tl">{technology}</h3>
            <p className="f5 fr w-80 mt1 tl">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyStack;
