import React from 'react';
import Header from '../atoms/basicTypography/Header';
import ProjectItem from '../molecules/ProjectItem';
import Section from '../atoms/Section';

function Projects() {
  return (
    <Section id="Projects">
      <Header text="My projects" />
      <ProjectItem />
    </Section>
  );
}

export default Projects;
