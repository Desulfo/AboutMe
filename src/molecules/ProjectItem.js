import React from 'react';
import portfolioData from '../data/portfolio.js';
import Paragraph from '../atoms/Paragraph';
import Header from '../atoms/Header';
import Link from '../atoms/Link';

import styled from 'styled-components';

function ProjectItem() {
  return portfolioData.map(
    ({ title, data, description, codeLink, liveVersionLink, photoLink }) => (
      <article>
        <div>
          <img
            src={photoLink}
            alt="Photo of a dimly lit room with a computer interface terminal."
          />
          <a href={codeLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href={liveVersionLink}>
            <i className="far fa-window-maximize"></i>
          </a>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{`Created in ${data}`}</p>
          <p>{description}</p>
          <a href={codeLink}>
            <i class="fab fa-github"></i>
            <p>Code</p>
          </a>
          <a href={liveVersionLink}>
            <i className="far fa-window-maximize"></i>
            <p>Live version</p>
          </a>
        </div>
      </article>
    )
  );
}
export default ProjectItem;
