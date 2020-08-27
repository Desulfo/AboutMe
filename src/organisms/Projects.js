import React from 'react';
import Header from '../atoms/Header';
import ProjectItem from '../molecules/ProjectItem';

function Projects() {
  return (
    <section id="Projects" class="center pv4 bg-light-blue">
      <Header text="My projects" />
      <ProjectItem />
    </section>
  );
}

export default Projects;
