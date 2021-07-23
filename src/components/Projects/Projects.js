import React, { useState } from "react";
import { ProjectsList, StyledProjects } from "./Projects.styled";
import Project from "./Project";
import { projects } from "../../data/projects";
import Drawer from "../Drawer/Drawer";

function Projects({ drawerOpen, setDrawerOpen }) {
  const [projectToDisplay, setProjectToDisplay] = useState(projects[0]);

  const openDrawerWithProject = (id) => {
    if (!drawerOpen) {
      setDrawerOpen(true);
    }
    const desiredProject = projects.find((project) => project.id === id);
    setProjectToDisplay(desiredProject);
  };

  return (
    <StyledProjects>
      <ProjectsList open={drawerOpen}>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              openDrawerById={openDrawerWithProject}
            />
          );
        })}
      </ProjectsList>
      {projectToDisplay && (
        <Drawer
          project={projectToDisplay}
          open={drawerOpen}
          setOpen={setDrawerOpen}
        />
      )}
    </StyledProjects>
  );
}

export default Projects;
