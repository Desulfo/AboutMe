import React from 'react';
import portfolioData from '../data/portfolio.js';
import Paragraph from '../atoms/Paragraph';
import Link from '../atoms/Link';
import styled from 'styled-components';

const Icon = styled.i`
  font-size: 1.5rem;
  margin-right: 0.8rem;
`;
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
            <Icon className="fab fa-github"></Icon>
          </Link>
          <Link url={liveVersionLink}>
            <Icon className="far fa-window-maximize"></Icon>
          </Link>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{`Created in ${data}`}</p>
          <p>{description}</p>
          <Link url={codeLink}>
            <Icon className="fab fa-github"></Icon>
            Code
          </Link>
          <Link url={liveVersionLink}>
            <Icon className="far fa-window-maximize"></Icon>
            Live version
          </Link>
        </div>
      </article>
    )
  );
}
export default ProjectItem;
