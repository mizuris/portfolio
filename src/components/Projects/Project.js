import React from "react";
import {
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  StyledProject,
} from "./Projects.styled";

function Project({ project }) {
  const { name, shortDescription, image } = project;
  return (
    <StyledProject>
      <ProjectContent>
        <h1>FEATURED PROJECT</h1>
        <h2>{name}</h2>
        <ProjectDescription>{shortDescription}</ProjectDescription>
      </ProjectContent>
      <ProjectImage>
        <img src={image} alt="project thumbnail" />
      </ProjectImage>
    </StyledProject>
  );
}

export default Project;
