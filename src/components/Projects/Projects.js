import React from "react";
import { ProjectsList, StyledProjects } from "./Projects.styled";
import Project from "./Project";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <StyledProjects>
      <ProjectsList>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </ProjectsList>
    </StyledProjects>
  );
}

export default Projects;
