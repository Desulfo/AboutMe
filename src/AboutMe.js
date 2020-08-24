import React from 'react';

function AboutMe() {
  return (
    <section id="AboutMe" className="center tc pv4 bg-light-blue">
      <h2 className="fw6 f3 f2-ns lh-title mt0 mb0">Paweł Janiszewski</h2>
      <h3 className="fw2 f4 lh-copy mt0 mb4">Junior Front-end developer</h3>
      <p className="mw8 center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        voluptatibus. Expedita sit alias nobis perspiciatis quam sint aut sed,
        inventore iusto magni eaque magnam deserunt nisi harum quas eos itaque!
      </p>
      <a href="#" className="f6 f5-ns b db pa2 link dim black tc">
        My stack <br />
        <i class="fas fa-arrow-circle-down"></i>
      </a>
    </section>
  );
}

export default AboutMe;
