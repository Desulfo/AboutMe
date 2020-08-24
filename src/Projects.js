import React from 'react';

function Projects() {
  return (
    <section class="center pv4 bg-light-blue">
      <h2 class="tc fw6 f3 f2-ns lh-title mt0">My projects</h2>
      <article class=" center mw8 flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img
            src="http://mrmrs.github.io/photos/cpu.jpg"
            class="db dim"
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
          <a href="#" className="dib f6 f5-ns b db pa2 link dim black tc">
            <i class="fab fa-github f3"></i>
          </a>
          <a href="#" className="dib f6 f5-ns b db pa2 link dim black tc">
            <i class="far fa-window-maximize f3"></i>
          </a>
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h3 class="f4 mb1 mt0 tl">Robofriends</h3>
          <p class="f6 mt0">Created in II 2020</p>
          <p class="f5 lh-copy mt1 tl">
            Strona stworzona za pomocą biblioteki React pozwala na dynamiczne
            wyszukiwanie robotów. Dane robotów pobierane są z publicznego API, a
            ich obrazki generowane za pomocą następnego.
          </p>
          <a href="#" className="dib f6 f5-ns b db pa2 link dim black tc mr4">
            <i class="fab fa-github f3 mr2"></i>
            <p className="dib">Code</p>
          </a>
          <a href="#" className="dib f6 f5-ns b db pa2 link dim black tc">
            <i class="far fa-window-maximize f3 mr2"></i>
            <p className="dib">Live version</p>
          </a>
        </div>
      </article>
    </section>
  );
}

export default Projects;
