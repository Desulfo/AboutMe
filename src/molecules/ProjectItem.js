import React from 'react';
import portfolioData from '../data/portfolio.js';
import Header3 from '../atoms/Header3';
import Icon from '../atoms/FavIcon';
import Link from '../atoms/Link';

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
            <Icon className="fab fa-github" />
          </Link>
          <Link url={liveVersionLink}>
            <Icon className="far fa-window-maximize" />
          </Link>
        </div>
        <div>
          <Header3>{title}</Header3>
          <p>{`Created in ${data}`}</p>
          <p>{description}</p>
          <Link url={codeLink}>
            <Icon className="fab fa-github" />
            Code
          </Link>
          <Link url={liveVersionLink}>
            <Icon className="far fa-window-maximize" />
            Live version
          </Link>
        </div>
      </article>
    )
  );
}
export default ProjectItem;
