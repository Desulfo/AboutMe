import React from 'react';

import styled from 'styled-components';
import Header from '../atoms/basicTypography/Header';
import ProjectItem from '../molecules/ProjectItem';
import Section from '../atoms/Section';

const StyledSection = styled(Section)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

function Projects() {
  return (
    <StyledSection id="Projects">
      <Header text="My projects" />
      <ProjectItem />
    </StyledSection>
  );
}

export default Projects;
