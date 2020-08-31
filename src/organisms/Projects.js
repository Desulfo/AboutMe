import React from 'react';
import Header from '../atoms/Header';
import ProjectItem from '../molecules/ProjectItem';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  padding: 1.5rem 3rem;
  max-width: 800px;
`;

function Projects() {
  return (
    <Section id="Projects">
      <Header text="My projects" />
      <ProjectItem />
    </Section>
  );
}

export default Projects;
