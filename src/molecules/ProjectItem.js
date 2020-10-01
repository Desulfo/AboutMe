import React from 'react';

import portfolioData from '../data/portfolio.js';
import Header3 from '../atoms/basicTypography/Header3';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Link from '../atoms/basicTypography/Link';
import Icon from '../atoms/FavIcon';
import { Article, Section, Image, StyledLink } from './StyledProjectItem';

function ProjectItem() {
  return portfolioData.map(
    ({
      title,
      data,
      description,
      codeLink,
      liveVersionLink,
      photoLink,
      photoDescription,
    }) => (
      <Article key={title}>
        <Image
          src={photoLink || 'https://via.placeholder.com/250'}
          alt={photoDescription}
        />
        <Section>
          <Header3>{title}</Header3>
          <Paragraph>
            <time>{`Created in ${data}`}</time>
          </Paragraph>
          <Paragraph>{description}</Paragraph>
          <StyledLink url={codeLink}>
            <Icon className="fab fa-github" />
            Code
          </StyledLink>
          <Link url={liveVersionLink}>
            <Icon className="far fa-window-maximize" />
            Live version
          </Link>
        </Section>
      </Article>
    )
  );
}
export default ProjectItem;
