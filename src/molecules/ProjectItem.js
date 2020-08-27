import React from 'react';
import portfolioData from '../data/portfolio.js';

function ProjectItem() {
  return portfolioData.map(
    ({ title, data, description, codeLink, liveVersionLink, photoLink }) => (
      <article class=" center mw8 flex flex-column flex-row-ns">
        <div class="pr3-ns mb4 mb0-ns w-100 w-40-ns">
          <img
            src={photoLink}
            class="db dim grow"
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
          <a
            href={codeLink}
            className="dib f6 f5-ns b db pa2 link dim black tc"
          >
            <i class="fab fa-github f3"></i>
          </a>
          <a
            href={liveVersionLink}
            className="dib f6 f5-ns b db pa2 link dim black tc"
          >
            <i class="far fa-window-maximize f3"></i>
          </a>
        </div>
        <div class="w-100 w-60-ns pl3-ns">
          <h3 class="f4 mb1 mt0 tl">{title}</h3>
          <p class="f6 mt0">{`Created in ${data}`}</p>
          <p class="f5 lh-copy mt1 tl">{description}</p>
          <a
            href={codeLink}
            className="dib f6 f5-ns b db pa2 link dim black tc mr4"
          >
            <i class="fab fa-github f3 mr2"></i>
            <p className="dib">Code</p>
          </a>
          <a
            href={liveVersionLink}
            className="dib f6 f5-ns b db pa2 link dim black tc"
          >
            <i class="far fa-window-maximize f3 mr2"></i>
            <p className="dib">Live version</p>
          </a>
        </div>
      </article>
    )
  );
}
export default ProjectItem;
