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
          <Link url={codeLink}>
            <i className="fab fa-github"></i>
          </Link>
          <Link url={liveVersionLink}>
            <i className="far fa-window-maximize"></i>
          </Link>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{`Created in ${data}`}</p>
          <p>{description}</p>
          <Link url={codeLink}>
            <i class="fab fa-github"></i>
            Code
          </Link>
          <Link url={liveVersionLink}>
            <i className="far fa-window-maximize"></i>
            Live version
          </Link>
        </div>
      </article>
    )
  );
}
export default ProjectItem;
