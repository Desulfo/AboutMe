import React from 'react';
import styled from 'styled-components';
import portfolioData from '../data/portfolio.js';
import Header3 from '../atoms/basicTypography/Header3';
import Icon from '../atoms/FavIcon';
import Link from '../atoms/basicTypography/Link';
import Article from '../atoms/styled/ProjectItem/Article';
import Image from '../atoms/styled/ProjectItem/ProjectImage';
import Paragraph from '../atoms/basicTypography/Paragraph';
import Section from '../atoms/styled/ProjectItem/Section';

const StyledLink = styled(Link)`
  margin-right: 2rem;
`;

function ProjectItem() {
  return portfolioData.map(
    ({ title, data, description, codeLink, liveVersionLink, photoLink }) => (
      <Article>
        <Image
          src={photoLink}
          alt="Photo of a dimly lit room with a computer interface terminal."
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
